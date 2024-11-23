import { useEffect, useState } from "react";
import AllProductCard from "../components/AllProductCard";
import Filterbar from "../components/Filterbar";
import SearchBar from "../components/SearchBar";
import SortByPrice from "../components/SortByPrice";
import Loading from "./Loading";
import axios from "axios";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";


const Products = () => {
  const [products, setproducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("asc");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [uniqueBrand, setUniqueBrand] = useState([]);
  const [uniqueCategory, setUniqueCategory] = useState([]);
  const [page,setPage]=useState(1);
  const [totalPages,setTotalPages]=useState(1);

  console.log(brand, category);

  useEffect(() => {
    setLoading(true);
    const fetch = async () => {
      await axios
        .get(
          `https://global-bazar-server.vercel.app/all-products?title=${search}&page=${page}&limit=${9}&sort=${sort}&brand=${brand}&category=${category}`
        )
        .then((res) => {
          // setproducts(res.data);
          console.log(res.data);
          setproducts(res.data.products);
          setUniqueBrand(res.data.brands);
          setUniqueCategory(res.data.categories);
          setTotalPages(Math.ceil(res.data.totalProducts/9))
          setLoading(false);
        });
    };
    fetch();
  }, [search, sort, brand, category,page]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.search.value);
    e.target.search.value = "";
  };

  const handleReset = () => {
    setSearch("");
    setBrand("");
    setCategory("");
    setSort("asc");
    window.location.reload();
  };


  const handleChange=(newPage)=>{
    if(newPage>0&& newPage <=totalPages){
        setPage(newPage)
        window.scrollTo({top:0,behavior:"smooth"})
    }
  }

  return (
    <div className="container px-5 mx-auto pt-10">
      <h2 className="py-4 text-4xl text-center">All Products </h2>
      {/* searching and sort */}
      <div className="flex items-center justify-between w-full">
        <SearchBar handleSearch={handleSearch} />
        <SortByPrice setSort={setSort} />
      </div>
      {/* content */}
      <div className="grid gap-2 md:grid-cols-12">
        <div className="col-span-2">
          <Filterbar
            setBrand={setBrand}
            setCategory={setCategory}
            handleReset={handleReset}
            uniqueBrand={uniqueBrand}
            uniqueCategory={uniqueCategory}
          />
        </div>
        <div className="col-span-10">
          {loading ? (
            <Loading/>
          ) : (
            <>
              {products.length === 0 ? (
                <div className="items-center justify-center w-full h-full">
                  <h1 className="text-2xl font-bold">No Product Found</h1>
                </div>
              ) : (
                <div className="grid min-h-screen gap-2 py-5 pb-10 mb-5 md:grid-cols-3">
                  {products.map((product) => (
                    <AllProductCard key={product._id} product={product} />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
      {/* pagination */}
      <div className="flex items-center justify-center gap-4 my-8">
        <button className="p-4 btn " onClick={()=>handleChange(page-1)} disabled={page===1}><MdArrowBackIos />
        </button>
        <p>page {page} of totall page </p>
        <button className="p-4 btn" onClick={()=>handleChange(page+1)} disabled={page==totalPages}><MdArrowForwardIos/>
        </button>

      </div>
    </div>
  );
};

export default Products;
