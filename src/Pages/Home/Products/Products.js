import useProducts from '../../../hooks/useProducts/useProducts';
import Product from '../Home/Product/Product';
import css from './Products.css'
const Products = () => {
    const [products] =useProducts();
    const slice=products.slice(0,6);

    return (
        <div className=""   > 
            <h4 className="text-primary mb-5 fw-bold fs-2 mt-5">New Coming </h4>
           <div className="product-container"> 
           {
                slice.map(product=><Product key={product._id} product={product}>

                </Product>)

            }
           </div>
        </div>
    );
};

export default Products;