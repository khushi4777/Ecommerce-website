import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center shadow">

<h1 className="text-xl font-bold tracking-wide">
E-Shop
</h1>

<div className="space-x-6">

<Link className="hover:text-gray-300" to="/">Home</Link>

<Link className="hover:text-gray-300" to="/products">Products</Link>

<Link className="hover:text-gray-300" to="/cart">Cart</Link>

<Link className="hover:text-gray-300" to="/login">Login</Link>

</div>

</nav>
  );
}

export default Navbar;