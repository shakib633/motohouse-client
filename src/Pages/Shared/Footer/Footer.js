import React from 'react';

const Footer = () => {
    const day=new Date();
    const year=day.getFullYear()
    return (
        <footer className="text-center bg-dark p-5">
            <p className="text-white"><span className="my-5 text-white">©️</span>copyright MotoHouse ,{year}<small> </small></p>
            
        </footer>
    );
};
 
export default Footer;