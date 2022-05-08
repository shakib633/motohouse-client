import React from 'react';
import Carousel from '../Carousel/Banner';
import Products from '../Products/Products';
import Summary from '../Summary/Summary';

const Home = () => {
    return (
        <div>
            
            <Carousel></Carousel>
            <Summary></Summary>
            <Products></Products>
             
        </div>
    );
};

export default Home;