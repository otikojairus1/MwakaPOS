import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";
import { useEffect, useState } from "react";
import { BASE_URI } from "./BASE_URI";
import axios from "axios";
import CategoryListing from "./components/CategoryListing";
import Catalogue from "./components/Catalogue";

function App() {
  const [categories, setCategories] = useState([]);
  // pagestate
  const [CataloguePage, setCataloguePage] = useState(false);
  const [CategoryPage, setCategoryPage] = useState(true);

  let fetchasync = () => {
    axios
      .get(`${BASE_URI}/get/categories`)
      .then((res) => {
        setCategories(res.data.categories);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  let createCategory = async () => {
    try {
      let res = await axios.post(`${BASE_URI}/add/category`, {
        category_name: "Funiture",
      });
      setCategories((prev) => [
        { category_name: res.data.created.category_name },
        ...prev,
      ]);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  let changeComponent = () => {
      setCataloguePage(true);
      setCategoryPage(false);
  }
  useEffect(() => {
    fetchasync();
  }, []);
  return (
    <div className="grid grid-cols-12 bg-[#F5F5F5]">
      <div className="col-span-2 h-[100svh] bg-white">
        <Sidebar />
      </div>
      <div className="col-span-10 h-[100svh]">
        <div
        // onClick={() => {
        //   setCataloguePage(true);
        //   setCategoryPage(false);
        // }}
        >
          {CategoryPage && (
            <CategoryListing
              changeComponent={changeComponent}
              categories={categories}
              createCategory={createCategory}
            />
          )}
        </div>

        <div onClick={() => {}}>{CataloguePage && <Catalogue />}</div>
      </div>
    </div>
  );
}

export default App;
