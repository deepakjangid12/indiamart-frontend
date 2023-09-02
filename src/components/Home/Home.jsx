import "./Home.scss";
import { useEffect , useContext } from "react";
import Products from "../Products/Products";
import Category from "./Category/Category";
import Banner from "./Banner/Banner";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";
const Home = () => {

    const {categories , setCategories , products, setProducts} = useContext(Context);
    useEffect(() => {
        getProducts();
        getCategories();
    }, []);

    const getProducts = () => {
        // ?populate=* foall all api data images also product also
        fetchDataFromApi("/api/products?populate=*").then((res) =>{
         console.log(res);
         setProducts(res);
        });
    };
    
    const getCategories = () => {
        // ?populate=* foall all api data images also product also
        fetchDataFromApi("/api/categories?populate=*").then((res) =>{
         console.log(res);
         setCategories(res);
        });
    };
    
    return (
        <div>
            <Banner />
            <div className="main-content">
                <div className="layout">
                    <Category categories={categories} />
                    <Products products={products} headingText="Popualar Products" />
                </div>
            </div>
        </div>
    )
};

export default Home;
