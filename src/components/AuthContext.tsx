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
  login: (email: string, password: string) => void;
  register: (name: string, username: string, email: string, password: string) => void;
  user: string | null;
};

const fakeUsers: { name: string; username: string; email: string; password: string }[] = [];
const AuthContext = createContext<AuthContextType | null>(null);


export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [loginModal, setLoginModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);
  const [user, setUser] = useState<string | null>(null);

  const openLogin = () => setLoginModal(true);
  const openRegister = () => setRegisterModal(true);
  const closeLoginModal = () => {
    setLoginModal(false);
  };
  const closeRegisterModal = () => {
    setRegisterModal(false);
  };

  const login = (email: string, password: string) => {
    const foundUser = fakeUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (foundUser) {
      setUser(foundUser.name);
      alert("✅ Logged in as " + foundUser.name);
      closeLoginModal();
    } else {
      alert("⚠️ User not found, please register!");
      setLoginModal(false);
      setRegisterModal(true);
    }
  };

  const register = (name: string, username: string,email: string, password: string) => {
    fakeUsers.push({ name, username, email, password });
    setUser(name);
    alert("🎉 Registered successfully!");
    closeLoginModal();
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
        login,
        register,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext)!;


