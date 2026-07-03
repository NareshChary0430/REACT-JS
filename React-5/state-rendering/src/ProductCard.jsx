// ProductCard.jsx

const ProductCard = ({ product , del }) => {
  return (
    <div className="w-80 rounded-2xl bg-white shadow-md hover:shadow-xl transition duration-300 overflow-hidden border border-gray-200">
      
      {/* Product Image */}
      <div className="h-64 bg-gray-100 flex items-center justify-center p-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain hover:scale-105 transition duration-300"
        />
      </div>

      {/* Product Details */}
      <div className="p-5">
        {/* Category */}
        <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-blue-600 rounded-full capitalize">
          {product.category}
        </span>

        {/* Title */}
        <h2 className="mt-3 text-lg font-semibold text-gray-800 line-clamp-2">
          {product.title}
        </h2>

        {/* Description */}
        <p className="mt-2 text-sm text-gray-500 line-clamp-3">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2">
            <span className="text-yellow-500 text-lg">⭐</span>
            <span className="font-medium text-gray-700">
              {product.rating.rate}
            </span>
            <span className="text-sm text-gray-400">
              ({product.rating.count} reviews)
            </span>
          </div>
        </div>

        {/* Price & Button */}
        <div className="mt-5 flex items-center justify-between">
          <h3 className="text-2xl font-bold text-green-600">
            ${product.price}
          </h3>

          <button 
            className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition"
            onClick={() => del(product.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;