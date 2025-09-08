// context/AuthContext.tsx
"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type AuthContextType = {
  loginModal: boolean;
  registerModal: boolean;
  openLogin: () => void;
  openRegister: () => void;
  closeLoginModal: () => void;
  closeRegisterModal: () => void;
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

type User ={
        id: number,
        name: string,
        username: string,
        email: string,
}

const AuthContext = createContext<AuthContextType | null>(null);


export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [loginModal, setLoginModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const openLogin = () => setLoginModal(true);
  const openRegister = () => setRegisterModal(true);
  const closeLoginModal = () => {
    setLoginModal(false);
  };
  const closeRegisterModal = () => {
    setRegisterModal(false);
  };

  return (
    <AuthContext.Provider
      value={{
        loginModal,
        registerModal,
        openLogin,
        openRegister,
        closeLoginModal,
        closeRegisterModal,
        user,
        setUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext)!;


