import "./CartContainer.css";
import Cart from "../Cart/Cart";
import About from "../About/About";
import PropTypes from "prop-types";

const CartContainer = ({
    handleIsActiveState,
    isActive,
    selectedProduct,
    handleRemoveFromCart,
}) => {
    return (
        <div>
            <h1>Cart Container</h1>

            <div className="flex gap-4">
                <button
                    onClick={() => handleIsActiveState("cart")}
                    className={`${
                        isActive.cart
                            ? "active text-lg border border-blue-700 p-2 px-4 rounded-lg"
                            : "text-lg border border-blue-700 p-2 px-4 rounded-lg"
                    }`}
                >
                    Cart
                </button>
                <button
                    onClick={() => handleIsActiveState("about")}
                    className={`${
                        isActive.cart
                            ? "text-lg border border-blue-700 p-2 px-4 rounded-lg"
                            : "active text-lg border border-blue-700 p-2 px-4 rounded-lg"
                    }`}
                >
                    About
                </button>
            </div>

            {isActive.cart ? (
                <Cart
                    selectedProduct={selectedProduct}
                    handleRemoveFromCart={handleRemoveFromCart}
                ></Cart>
            ) : (
                <About></About>
            )}
        </div>
    );
};

CartContainer.propTypes = {
    handleIsActiveState: PropTypes.func.isRequired,
    handleRemoveFromCart: PropTypes.func.isRequired,
    selectedProduct: PropTypes.object.isRequired,
    cart: PropTypes.bool,
    isActive: PropTypes.shape({
        cart: PropTypes.bool.isRequired,
    }).isRequired,
};

export default CartContainer;
