function Checkout() {

  return (
    <div className="p-10 max-w-xl mx-auto">

      <h1 className="text-3xl font-bold mb-6">
        Checkout
      </h1>

      <form className="space-y-4">

        <input
          placeholder="Full Name"
          className="border p-2 w-full"
        />

        <input
          placeholder="Address"
          className="border p-2 w-full"
        />

        <input
          placeholder="Phone"
          className="border p-2 w-full"
        />

        <button className="bg-black text-white px-4 py-2 rounded w-full">
          Place Order
        </button>

      </form>

    </div>
  );
}

export default Checkout;