import { createContext, useState, useContext } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [residentialUserInfo, setResidentialUserInfo] = useState(null);

  return (
    <UserContext.Provider
      value={{ residentialUserInfo, setResidentialUserInfo }}
    >
      {children}
    </UserContext.Provider>
  );
}

// Custom hook for using the context
export function useUserContext() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
}
