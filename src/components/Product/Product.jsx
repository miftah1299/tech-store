import PropTypes from "prop-types";

const Product = ({ product }) => {
    console.log(product);

    return (
        <div>
            
        </div>
    );
};

Product.propTypes = {
    product: PropTypes.object,
};

export default Product;
