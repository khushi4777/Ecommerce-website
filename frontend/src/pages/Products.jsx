import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { motion } from "framer-motion";
import axios from "axios"

useEffect(()=>{

axios
.get("https://ecommerce-website-9jn8.onrender.com/api/products")
.then(res => setProducts(res.data))

},[])

function Products() {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));

  }, []);

  return (

    <div className="max-w-6xl mx-auto py-10">

      <h1 className="text-3xl font-bold mb-8 text-center">
        Our Products
      </h1>

      <div className="grid md:grid-cols-4 gap-6">

        {products.map(product => (

          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <ProductCard product={product} />
          </motion.div>

        ))}

      </div>

    </div>

  );
}

export default Products;