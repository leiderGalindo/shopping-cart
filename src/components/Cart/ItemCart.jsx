import { useCart } from "../../hooks/useCart";

const ItemCart = ({product}) => {
    const { addToCart } = useCart()

    return (
        <li>
            <img 
                src={product.thumbnail}
                alt={product.title} 
            />
            <div>
                <strong>{product.title}</strong> - ${product.price}
            </div>
            <footer>
                <small>Qty: {product.quantity}</small>
                <button onClick={() => addToCart(product)}>+</button>
            </footer>
        </li>
    )
}

export default ItemCart