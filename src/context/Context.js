import { createContext, useState } from "react";

export const MainContext = createContext(null);
const ContextProvider = ({ children }) => {
    const [search, setSearch] = useState("")
    const [APIData, setAPIData] = useState([])
    const [filteredResults, setFilteredResults] = useState([]);

    const values = {
        search,
        setSearch,
        APIData,
        setAPIData,
        filteredResults,
        setFilteredResults
    
    }
    return (
        <MainContext.Provider value={values}>
            {children}
        </MainContext.Provider>

    )


}
export default ContextProvider