import { useEffect, useState } from "react";
import "./Allproducts.css";
import Product from "../Product/Product";

const Allproducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("./products.json")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setProducts(data.products);
            });

    }, []);

    return (
        <div>
            <h1>All Products</h1>

            

        </div>
    );
};

export default Allproducts;
