import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({ product }) {

  const { addToCart } = useContext(CartContext);

  const priceINR = (product.price * 83).toFixed(0);

  return (
    <div className="border p-4 rounded-lg shadow hover:shadow-xl transition">

      <img
        src={product.image}
        className="h-40 mx-auto object-contain"
      />

      <h2 className="font-semibold mt-4">
        {product.title}
      </h2>

      <p className="text-green-600 font-bold mt-2">
        ₹{priceINR}
      </p>

      <button
        onClick={() => addToCart(product)}
        className="bg-black text-white px-4 py-2 mt-3 rounded hover:bg-gray-800 transition"
      >
        Add To Cart
      </button>

    </div>
  );
}

export default ProductCard;