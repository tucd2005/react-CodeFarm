// src/pages/Bai46.jsx
import useQueryParam from "../hooks/useQueryParam";
import useFetchListWithParams from "../hooks/useFetchListWithParams";
import ProductCard from './ProductCard';

function Bai46() {
  const { getParam, setParam } = useQueryParam();
  const page = parseInt(getParam("page", 1));
  const limit = parseInt(getParam("limit", 12));
  const search = getParam("search", "");
  const sort = getParam("sort", "");

  const { data, loading } = useFetchListWithParams({ page, limit, search, sort });
  const totalPages = Math.ceil(data.total / limit);

  const handleChange = (e) => {
    setParam(e.target.name, e.target.value);
    if (e.target.name !== "page") setParam("page", 1);
  };

  const handlePage = (next) => {
    setParam("page", page + next);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🛒 Danh sách sản phẩm</h1>

      <div className="flex flex-wrap gap-4 items-center mb-6">
        <input
          name="search"
          defaultValue={search}
          onBlur={handleChange}
          placeholder="Tìm kiếm sản phẩm..."
          className="border border-gray-300 rounded px-3 py-2 w-64"
        />

        <select
          name="limit"
          value={limit}
          onChange={handleChange}
          className="border border-gray-300 rounded px-3 py-2"
        >
          <option value="6">6/trang</option>
          <option value="12">12/trang</option>
          <option value="24">24/trang</option>
        </select>

        <select
          name="sort"
          value={sort}
          onChange={handleChange}
          className="border border-gray-300 rounded px-3 py-2"
        >
          <option value="">-- Sắp xếp --</option>
          <option value="price-asc">Giá tăng dần</option>
          <option value="price-desc">Giá giảm dần</option>
          <option value="name-asc">Tên A-Z</option>
          <option value="name-desc">Tên Z-A</option>
        </select>
      </div>

      {loading ? (
        <p className="text-center text-lg">⏳ Đang tải dữ liệu...</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data.products.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => handlePage(-1)}
              disabled={page <= 1}
              className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
            >
              ⬅ Prev
            </button>

            <span>
              Trang <strong>{page}</strong> / {totalPages}
            </span>

            <button
              onClick={() => handlePage(1)}
              disabled={page >= totalPages}
              className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
            >
              Next ➡
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Bai46;
