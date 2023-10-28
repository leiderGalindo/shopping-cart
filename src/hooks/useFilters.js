import { useContext } from "react";
import { FiltersContext } from '../context/filters.jsx'

export const useFilters = () => {
    const { filters, setFilters } = useContext(FiltersContext)

    // Realiza el filtrado de los productos
    const filterProducts = (products) => {
        return products.filter(product => {
            return (
                product.price >= filters.minPrice &&
                (
                    filters.category === 'all' ||
                    product.category === filters.category
                )
            )
        })
    }

    return {
        filterProducts,
        filters,
        setFilters
    }
}