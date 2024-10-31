import PropTypes from "prop-types";

const Product = ({ product }) => {
    console.log(product);

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
            <img className="w-full" src={product.image} alt={product.name} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{product.name}</div>
                <p className="text-gray-700 text-base">{product.description}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    ${product.price}
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {product.category}
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {product.isFeature ? 'Featured' : 'Regular'}
                </span>
            </div>
        </div>
    );
};

Product.propTypes = {
    product: PropTypes.object,
};

export default Product;
