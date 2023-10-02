import "./Search.scss";
import { useState } from "react";
import { MdClose } from "react-icons/md"
import useFetch from "../../../hooks/useFetch"
import { useNavigate } from "react-router-dom";
import prod from "../../../assets/products/headphone-prod-4.webp"
const Search = ({ setshowSearch }) => {
    const [query, setQuery] = useState("")
    const navigate = useNavigate()

    const onChange = (e) => {
        setQuery(e.target.value);
    }
    let { data } = useFetch(`/api/products?populate=*&filters[title][$contains]=${query}`)
    if (!query.length) {
        data = null;
    }
    return (
        <div className="search-modal">
            <div className="form-field">
                <input
                    type="text"
                    //for line in textbox 
                    autoFocus
                    placeholder="Search For Products"
                    value={query}
                    onChange={onChange}
                />
                <MdClose onClick={() => setshowSearch(false)} />
            </div>
            <div className="search-result-content">
                <div className="search-results">
                    {data?.data?.map(item=>(
                    <div key={item.id} className="search-result-item" onClick={()=>{
                        navigate("/product/" + item.id)
                        setshowSearch(false)
                    }}>
{/*                         <div className="img-container">
                            <img src={process.env.REACT_app_DEV_URL + item.attributes.img.data[0].attributes.url}  alt="searchimg" />
                        </div> */}
                        <div className="img-container">
    <img src={item.attributes.img.data[0].attributes.url} alt="searchimg" />
</div>

                        <div className="prod-details">
                            <span className="name">{item.attributes.title}</span>
                            <span className="desc">{item.attributes.dec}</span>

                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default Search;
