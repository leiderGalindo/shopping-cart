import Cart from "./Cart/Cart";
import Filters from "./Filters/Filters";

const Header = () => {
    return (
        <header>
            <h1>React shop</h1>
            <Filters/>
            <Cart />
        </header>
    )
}

export default Header