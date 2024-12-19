import { createContext, useEffect, useState } from "react";
import { server } from "../utils.js";
export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const verifyUser = async () => {
    try {
      const res = await fetch(server + "user", {
        credentials: "include",
      });

      if (res.ok) {
        const data = await res.json();
        setUserInfo(data);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    verifyUser();
  }, []);
  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {loading ? <div>Loading...</div> : children}
    </UserContext.Provider>
  );
}
