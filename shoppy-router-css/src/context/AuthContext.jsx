import { createContext, useContext, useState, useEffect } from "react";
import { login, logout, onUserStateChange } from "../api/firebase";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState();
  // useState로 로그인 여부를 판단하고 있기 때문에 새로고침시 로그인여부를 판단하지 못하게 됨
  // 그러므로 useEffect를 사용하여 mount 될 때 마다 로그인여부를 불러옴
  useEffect(() => {
    onUserStateChange((user) => {
      setUser(user);
    });
  }, []);
  return (
    <AuthContext.Provider
      value={{ user, uid: user && user.uid, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
