/*
  # Token System Implementation

  1. New Tables
    - `user_tokens`: Stores user token balances
      - `user_id` (uuid, primary key)
      - `balance` (integer)
      - `updated_at` (timestamp)
    - `token_transactions`: Records all token transactions
      - `id` (uuid, primary key)
      - `user_id` (uuid)
      - `amount` (integer)
      - `type` (text)
      - `reason` (text)
      - `created_at` (timestamp)

  2. Functions
    - `earn_tokens`: Safely updates user token balance and records transaction

  3. Security
    - Enable RLS on both tables
    - Add policies for secure token operations
*/

-- Create user_tokens table
CREATE TABLE IF NOT EXISTS user_tokens (
  user_id uuid PRIMARY KEY REFERENCES auth.users(id),
  balance integer NOT NULL DEFAULT 0,
  updated_at timestamptz NOT NULL DEFAULT now()
);

-- Create token_transactions table
CREATE TABLE IF NOT EXISTS token_transactions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id),
  amount integer NOT NULL,
  type text NOT NULL,
  reason text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE user_tokens ENABLE ROW LEVEL SECURITY;
ALTER TABLE token_transactions ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view their own token balance"
  ON user_tokens
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can view their own transactions"
  ON token_transactions
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- Create function for earning tokens
CREATE OR REPLACE FUNCTION earn_tokens(
  p_user_id uuid,
  p_amount integer,
  p_reason text
)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  -- Insert or update user_tokens
  INSERT INTO user_tokens (user_id, balance)
  VALUES (p_user_id, p_amount)
  ON CONFLICT (user_id)
  DO UPDATE SET
    balance = user_tokens.balance + p_amount,
    updated_at = now();

  -- Record transaction
  INSERT INTO token_transactions (
    user_id,
    amount,
    type,
    reason
  ) VALUES (
    p_user_id,
    p_amount,
    'earn',
    p_reason
  );
END;
$$;