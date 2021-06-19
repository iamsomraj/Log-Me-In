import React, { useEffect, useState } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogin: (email: string, password: string) => {},
  onLogout: () => {},
});

export default AuthContext;

export const AuthContextProvider: React.FC = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const getLoginStatusFromStorage = () => {
      const isAuth: any = localStorage.getItem("isLoggedIn")
        ? JSON.parse(localStorage.getItem("isLoggedIn") as any)
        : null;
      setIsLoggedIn(isAuth);
    };
    getLoginStatusFromStorage();
  }, []);

  const loginHandler = (email: string, password: string) => {
    localStorage.setItem("isLoggedIn", JSON.stringify(true));
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.setItem("isLoggedIn", JSON.stringify(false));
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogin: loginHandler,
        onLogout: logoutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
