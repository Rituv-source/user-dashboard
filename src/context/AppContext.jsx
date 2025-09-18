import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [users, setUsers] = useState([
    { name: "Aarav", email: "aarav@demo.com", role: "Admin" },
    { name: "Maya", email: "maya@demo.com", role: "Editor" },
  ]);
  const [search, setSearch] = useState("");
  const [theme, setTheme] = useState("dark");
  const [page, setPage] = useState(1);
  const pageSize = 5;

  const addUser = (user) => setUsers((prev) => [user, ...prev]);
  const resetPage = () => setPage(1);   

  return (
    <AppContext.Provider
      value={{
        users,
        addUser,
        search,
        setSearch,
        theme,
        setTheme,
        page,
        setPage,
        pageSize,
        resetPage,   
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);