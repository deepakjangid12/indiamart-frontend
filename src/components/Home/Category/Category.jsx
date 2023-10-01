import "./Category.scss";
import { useNavigate } from "react-router-dom"
import cat1 from "../../../assets/category/cat-1.jpg"
const Category = ({ categories }) => {
    const navigate = useNavigate();
    return (
        <div className="shop-by-category">

            <div className="categories">
                {categories?.data?.map((item) => (
                    <div key={item.id} className="category" onClick={()=>navigate(`/category/${item.id}`)}>
                        <img src={item.attributes.img.data.attributes.url} alt="categoryhe" />

                        {/* <img src={`https://res.cloudinary.com/dh4gjirh9/image/upload/${item.attributes.img.data.attributes.url}`} alt="categoryhe" /> */}
                        {/* {process.env.REACT_app_DEV_URL + item.attributes.img.data.attributes.url} */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;


{/* <div className="categories">
{categories.data.map((item) => (
    <div key={item.id} className="category">
        <img src={process.env.REACT_app_DEV_URL + item.attributes.img.data.attributes.url} alt="categoryhe" />
    </div>
))}
</div> */}



{/* <div className="categories">
                    <div className="category">
                        <img src={cat1} alt="categoryhe" />
                    </div>
            </div> */}
