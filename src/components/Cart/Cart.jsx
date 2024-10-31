import PropTypes from "prop-types";

const Cart = ({ selectedProduct }) => {
    return (
        <div>
            {selectedProduct.map((product) => (
                <div
                    key={product.id}
                    className="flex items-center max-w-sm rounded-md overflow-hidden shadow-lg bg-white m-4"
                >
                    <img
                        className="w-16 h-16 object-cover"
                        src={product.image}
                        alt={product.name}
                    />
                    <div className="px-4 py-2 flex-1">
                        <div className="font-bold text-base">
                            {product.name}
                        </div>
                    </div>
                    <div className="p-2">
                        <button className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded">
                            Remove
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

Cart.propTypes = {
    selectedProduct: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
        })
    ).isRequired,
    handleRemoveFromCart: PropTypes.func.isRequired,
};

export default Cart;
