import { useState } from "react";
import "./App.css";
import Allproducts from "./components/Allproducts/Allproducts";
import CartContainer from "./components/CartContainer/CartContainer";
import Navbar from "./components/Header/Navbar";

function App() {
    return (
        <>
            <Navbar></Navbar>
            <div className="flex">
                <Allproducts></Allproducts>
                <CartContainer></CartContainer>
            </div>
        </>
    );
}

export default App;
