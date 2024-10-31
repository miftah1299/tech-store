import { useEffect, useState } from "react";
import "./Allproducts.css";
import Product from "../Product/Product";

const Allproducts = () => {
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
                        <Product key={product.id} product={product}></Product>
                    ))}
                </div>
            }
        </div>
    );
};

export default Allproducts;
