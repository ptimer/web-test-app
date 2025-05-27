import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

import { API_URL } from '@/constants';

interface AppContextType {
  users: User[];
  setUsers: (users: User[]) => void;
  errorMessage: string | null;
  theme: Theme;
  toggleTheme: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [theme, setTheme] = useState<Theme>('light');

  const fetchUsers = async () => {
    try {
      const { data = [] } = await axios.get<User[]>(`${API_URL}/users.json`);
      setUsers(data);
    } catch (err) {
      setErrorMessage(
        err instanceof Error ? err.message : 'Failed to fetch users'
      );
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

  return (
    <AppContext.Provider
      value={{
        users,
        setUsers,
        errorMessage,
        theme,
        toggleTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
};