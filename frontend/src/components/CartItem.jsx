function CartItems({ item }) {

  return (
    <div className="flex items-center justify-between border p-4 rounded">

      <div className="flex items-center gap-4">

        <img
          src={item.image}
          alt={item.title}
          className="w-16"
        />

        <div>
          <h2 className="font-semibold">{item.title}</h2>
          <p>${item.price}</p>
        </div>

      </div>

      <div>
        <p>Qty: {item.quantity}</p>
      </div>

    </div>
  );
}

export default CartItems;