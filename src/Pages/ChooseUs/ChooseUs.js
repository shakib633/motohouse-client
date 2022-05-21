import React from 'react';
import css from './ChooseUs.css'

const ChooseUs = () => {
    return (
        <div className="mb-3 ">
            <p className="fw-bold text-success text-center mt-5 " >Why You Choose Us </p>
          <div className="choose-container"> 
          <div className="m-2 choose-bg p-3 shadow-lg border"> 
        <div>
        <p className="text-center"><img className="image my-3" src="https://i.ibb.co/SrHPNLb/why6.png" alt="why6" border="0"></img></p>
        <p className="text-center">Standard</p>
        <p className="text-center fw-bold">WorkShop</p>
        </div>

        </div>
          <div className="m-2 choose-bg p-3 shadow-lg border"> 
        <div>
        <p className="text-center"><img className="image" src="https://i.ibb.co/DR9662S/why2.png" alt="why2" border="0"></img></p>
        <p className="text-center">Warranted</p>
        <p className="text-center fw-bold">Spare Parts</p>

            </div>

        </div>
          <div className="m-2 service-bg p-3 shadow-lg border"> 
        <div>
        <p className="text-center"><img className="image" src="https://i.ibb.co/SJSP2YJ/why3.png" alt="why3" border="0"></img></p>
        <p className="text-center">Multi Brand</p>
        <p className="text-center fw-bold">Options</p>

            </div>

        </div>
          <div className="m-2 service-bg p-3 shadow-lg border"> 
        <div>

        <p className="text-center"><img className="image" src="https://i.ibb.co/gF7SqPD/why5.png" alt="why5" border="0"></img></p>
        <p className="text-center">24/7</p>
        <p className="text-center">Support</p>

            </div>

        </div>
          </div>
        </div>
    );
};

export default ChooseUs;