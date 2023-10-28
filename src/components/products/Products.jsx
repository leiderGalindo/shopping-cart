import { AddToCartIcon, RemoveFromCartIcon } from '../Icons.jsx'
import { useCart } from '../../hooks/useCart'
import './Products.css'

const Products = ({ products }) => {
    const { cart, addToCart, removeFromCart } = useCart()

    const checkProductIncCart = product => {
        return cart.some(item => item.id === product.id)
    }

    return (
        <main className="products">
            <ul>
                {products.slice(0,10).map(product => {
                    const isProductInCart = checkProductIncCart(product)
                    return (
                        <li key={product.id}>
                            <img 
                                src={product.thumbnail} 
                                alt={product.title} 
                            />
                            <div>
                                <strong>{product.title} - ${product.price}</strong>
                            </div>
                            <div>
                                {
                                    isProductInCart ?
                                        <button onClick={() => removeFromCart(product)}>
                                            <RemoveFromCartIcon/>
                                        </button>
                                    :
                                        <button onClick={() => addToCart(product)}>
                                            <AddToCartIcon/>
                                        </button>
                                }
                            </div>
                        </li>
                    )
                })}
            </ul>
        </main>
    )
}

export default Products