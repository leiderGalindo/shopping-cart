import { createContext, useState } from "react";

// Crea el contexto
export const FiltersContext = createContext()

// Crea el provider, para proveer el contexto
export const FiltersProvider = ({ children }) => {
    const [ filters, setFilters ] = useState({
        category: 'all',
        minPrice: 0,
    })

    // en el value puedo pasar tanto el valor como una forma de actualizar el mismo 
    return (
        <FiltersContext.Provider value={{filters, setFilters}}>
            {children}
        </FiltersContext.Provider>
    )
}