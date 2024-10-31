import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Allproducts.css";
import Product from "../Product/Product";

const Allproducts = ({ handleSelectedProduct }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("./products.json")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
            });
    }, []);

    return (
        <div>
            {/* <h1>All Products</h1> */}

            {
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {products.map((product) => (
                        <Product
                            handleSelectedProduct={handleSelectedProduct}
                            key={product.id}
                            product={product}
                        ></Product>
                    ))}
                </div>
            }
        </div>
    );
};
Allproducts.propTypes = {
    handleSelectedProduct: PropTypes.func.isRequired,
};

export default Allproducts;
