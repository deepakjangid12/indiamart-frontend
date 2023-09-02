import "./Products.scss";
// import Product from "./Product/Product";
import Product from "./Product/Product";
const Products = ({products, innerpage, headingText}) => {
    return (
        <div className="product-container">
            {!innerpage && <div className="sec-heading">{headingText}</div>}
            <div className="products">
                {products?.data?.map((item) => (
                    <Product 
                    key={item.id} 
                    id={item.id} 
                    data={item.attributes} />
                ))}
                {/* <Product/> */}
                {/* <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product /> */}

            </div>
        </div>
    );
};

export default Products;
