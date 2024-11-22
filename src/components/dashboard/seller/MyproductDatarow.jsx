const MyproductDatarow = ({ product, handleDelete }) => {
  return (
    <tr>
      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="relative block">
              <img
                alt="profile"
                src={product.image}
                className="object-cover h-10 mx-auto rounded w-15 "
              />
            </div>
          </div>
          <div className="ml-3">
            <p className="text-gray-900 whitespace-no-wrap">{product?.title}</p>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
        <p className="text-gray-900 whitespace-no-wrap">{product?.category}</p>
      </td>
      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
        <p className="text-gray-900 whitespace-no-wrap">{product?.brand}</p>
      </td>
      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
        <p className="text-gray-900 whitespace-no-wrap">${product?.price}</p>
      </td>
      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
        <button
          onClick={handleDelete}
          //   onClick={() => setIsDeleteOpen(true)}
          aria-label="Delete property"
          className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900 cursor-pointer"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-red-200 rounded-full opacity-50"
          ></span>
          <span className="relative">Remove</span>
        </button>
      </td>
      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200"></td>
    </tr>
  );
};

export default MyproductDatarow;
