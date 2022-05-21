import React from "react";
import { Link } from "react-router-dom";
import Cart from "../../Cart/Cart";
import ChooseUs from "../../ChooseUs/ChooseUs";
import Carousel from "../Carousel/Banner";
import Summary from "../Summary/Summary";
import useProducts from "./../../../hooks/useProducts/useProducts";
import css from "./Home.css"

const Home = () => {
  const [products] = useProducts();
  const sliceProducts = products.slice(0, 6);

  return (
    <div>
      <Carousel></Carousel>

      <Summary></Summary>

      <div>
      <h2 className="text-center mt-3 text-primary fw-bold">Our Products</h2>
      <p className="text-center text-primary fw-bold mb-2"> ______________________________________________</p>
      </div>
      <div className="Product-container ">
        {sliceProducts.map((data) => (
          <Cart key={data._id} data={data}></Cart>
        ))}
      </div>
      <p className="text-center mt-3 fw-bold">
        <Link to="/manageinventories" className="text-decoration-none ">
          Manage Inventories 🠲
        </Link>
      </p>

      <div> 
        <ChooseUs></ChooseUs>
      </div>
    </div>
  );
};

export default Home;
