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
            <Navbar></Navbar>

            <div className="flex justify-around">
                <Allproducts></Allproducts>
                <CartContainer
                    isActive={isActive}
                    handleIsActiveState={handleIsActiveState}
                ></CartContainer>
            </div>
        </>
    );
}

export default App;
