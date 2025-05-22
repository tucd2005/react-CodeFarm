// src/components/ProductCard.jsx
function ProductCard({ product }) {
    return (
      <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-40 object-cover rounded mb-2"
        />
        <h4 className="text-lg font-semibold">{product.title}</h4>
        <p className="text-blue-600 font-bold">${product.price}</p>
      </div>
    );
  }
  
  export default ProductCard;
  