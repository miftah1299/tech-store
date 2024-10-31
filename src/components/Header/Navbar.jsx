// 

const Navbar = () => {
    return (
        <nav className="flex flex-wrap items-center justify-between p-4 bg-gray-800 text-white">
            <div className="flex items-center">
                <img
                    src="https://via.placeholder.com/50"
                    alt="Logo"
                    className="h-12"
                />
                <span className="ml-3 text-xl font-bold">Brand</span>
            </div>
            <ul className="flex space-x-6 mt-4 md:mt-0">
                <li>
                    <a href="#home" className="hover:text-gray-400">
                        Home
                    </a>
                </li>
                <li>
                    <a href="#product" className="hover:text-gray-400">
                        Product
                    </a>
                </li>
                <li>
                    <a href="#cart" className="hover:text-gray-400">
                        Cart
                    </a>
                </li>
            </ul>
            <div className="text-lg mt-4 md:mt-0">Total Price: $0.00</div>
        </nav>
    );
};

export default Navbar;
