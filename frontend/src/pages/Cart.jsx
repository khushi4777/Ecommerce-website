import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";

function Cart() {

  const { cart } = useContext(CartContext);

  return (

    <div className="p-10">

      <h1 className="text-3xl font-bold mb-6">
        Shopping Cart
      </h1>

      {cart.map(item => (

        <CartItem key={item.id} item={item} />

      ))}

    </div>

  );
}

export default Cart;