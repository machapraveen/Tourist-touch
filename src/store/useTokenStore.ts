import { create } from 'zustand';
import { supabase } from '../lib/supabase';

interface TokenStore {
  balance: number;
  isLoading: boolean;
  error: string | null;
  fetchBalance: (userId: string) => Promise<void>;
  earnTokens: (userId: string, amount: number, reason: string) => Promise<void>;
}

export const useTokenStore = create<TokenStore>((set) => ({
  balance: 0,
  isLoading: false,
  error: null,

  fetchBalance: async (userId: string) => {
    set({ isLoading: true, error: null });
    try {
      const { data, error } = await supabase
        .from('user_tokens')
        .select('balance')
        .eq('user_id', userId)
        .single();

      if (error) throw error;
      set({ balance: data?.balance || 0 });
    } catch (error) {
      set({ error: (error as Error).message });
    } finally {
      set({ isLoading: false });
    }
  },

  earnTokens: async (userId: string, amount: number, reason: string) => {
    set({ isLoading: true, error: null });
    try {
      const { error } = await supabase.rpc('earn_tokens', {
        p_user_id: userId,
        p_amount: amount,
        p_reason: reason,
      });

      if (error) throw error;
      
      // Refresh balance after earning tokens
      const { data: newBalance } = await supabase
        .from('user_tokens')
        .select('balance')
        .eq('user_id', userId)
        .single();

      set({ balance: newBalance?.balance || 0 });
    } catch (error) {
      set({ error: (error as Error).message });
    } finally {
      set({ isLoading: false });
    }
  },
}));