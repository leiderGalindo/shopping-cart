import { useState, useId } from 'react'
import { useFilters } from "../../hooks/useFilters";
import './Filters.css'

const Filters = () => {
    const { filters, setFilters } = useFilters()
    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const handleChangeMinPrice = (event) => {
        const currentMinPrice = event.target.value
        setFilters(prevState => ({
            ...prevState,
            minPrice: currentMinPrice
        }))
    }

    const handleChangeCategory = (event) => {
        const currentCategory = event.target.value
        setFilters(prevState => ({
            ...prevState,
            category: currentCategory
        }))
    }

    return (
        <section className="filters">
            <div>
                <label htmlFor={minPriceFilterId}>Precio apartir de:</label>
                <input 
                    type="range" 
                    id={minPriceFilterId} 
                    min={0}
                    max={1000}
                    onChange={handleChangeMinPrice}
                    value={filters.minPrice}
                />
                <span>${filters.minPrice}</span>
            </div>
            <div>
                <label htmlFor={categoryFilterId}>Categoría</label>
                <select id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value="all">Todas</option>
                    <option value="laptops">Portátiles</option>
                    <option value="smartphones">Celulares</option>
                </select>
            </div>
        </section>
    )
}

export default Filters