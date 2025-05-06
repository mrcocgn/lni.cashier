import { createContext } from 'react';

export type UserRole = 'admin' | 'staff';

export interface User {
  email: string;
  role: UserRole;
}

export interface AuthContextType {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);
