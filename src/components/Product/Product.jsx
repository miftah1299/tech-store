import PropTypes from "prop-types";

const Product = ({ product, handleSelectedProduct }) => {
    // console.log(handleSelectedProduct);

    const { name, description, price, category, isFeature, image } = product;

    return (
        <div className="max-w-sm rounded-md overflow-hidden shadow-lg bg-white m-4">
            <img className="w-full h-80 object-cover" src={image} alt={name} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700 text-base">{description}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    ${price}
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {category}
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {isFeature ? "Featured" : "Regular"}
                </span>
            </div>
            <div className="px-6 py-4">
                <button
                    onClick={() => handleSelectedProduct(product)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

Product.propTypes = {
    product: PropTypes.object,
};

export default Product;
