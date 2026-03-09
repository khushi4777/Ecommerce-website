import AdminSidebar from "../components/AdminSidebar";
import ProductForm from "../components/ProductForm";
import axios from "axios"

function AdminProducts() {

  const handleAddProduct = (product) => {
    console.log(product);
  };
  useEffect(() => {

 axios.get("http://localhost:5000/api/products")
 .then(res => setProducts(res.data))

}, [])

axios.post("http://localhost:5000/api/products", {

 name,
 price,
 description,
 image,
 category,
 stock

})

axios.delete(`http://localhost:5000/api/products/${id}`)

  return (
    <div className="flex">

      <AdminSidebar />

      <div className="p-10 flex-1">

        <h1 className="text-3xl font-bold mb-6">
          Manage Products
        </h1>

        <ProductForm onSubmit={handleAddProduct} />

      </div>

    </div>
  );
}

export default AdminProducts;