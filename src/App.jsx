import { useState } from "react";
import "./App.css";
import Allproducts from "./components/Allproducts/Allproducts";
import CartContainer from "./components/CartContainer/CartContainer";
import Navbar from "./components/Header/Navbar";

function App() {
    const [isActive, setIsActive] = useState({
        cart: true,
        status: "cart",
    });

    const [selectedProduct, setSelectedProduct] = useState([]);

    const handleSelectedProduct = (product) => {
        // console.log(product);

        // isExist use to check if the product is already in the cart
        const isExist = selectedProduct.find((p) => p.id === product.id);
        if (isExist) {
            alert("Product is already in the cart");
        } else {
            setSelectedProduct([...selectedProduct, product]);
        }
    };
    console.log(selectedProduct);

    const handleRemoveFromCart = (id) => {
        const remainingProduct = selectedProduct.filter(
            (product) => product.id !== id
        );
        setSelectedProduct(remainingProduct);
    };

    const handleIsActiveState = (status) => {
        if (status == "cart") {
            setIsActive({
                cart: true,
                status: "cart",
            });
        } else {
            setIsActive({
                cart: false,
                status: "about",
            });
        }
    };

    console.log(isActive);

    return (
        <>
            <Navbar selectedProduct={selectedProduct}></Navbar>

            <div className="flex justify-around">
                <Allproducts
                    handleSelectedProduct={handleSelectedProduct}
                ></Allproducts>
                <CartContainer
                    selectedProduct={selectedProduct}
                    handleRemoveFromCart={handleRemoveFromCart}
                    isActive={isActive}
                    handleIsActiveState={handleIsActiveState}
                ></CartContainer>
            </div>
        </>
    );
}

export default App;
