import React from 'react';
import { Link } from 'react-router-dom';
import css from './Services.css'

const Services = () => {
    return (
        <div>
            <p className="text-center fw-bold fs-2 text-success mt-5">Our Services</p> 
            <div className="service-container m-3 p-3" >
        <div className="m-2 service-bg  p-3 shadow-lg border">
            <div className=" my-3 "> 
          <p className="text-center"><img className="" src="https://i.ibb.co/Qjd9PFM/bike-breakdown.png" alt="bike-breakdown" border="0"></img>
         </p>            
             <p className="text-center d-block"> Vichle BreakDown</p>
            </div>
        </div>
        <div className="m-2 service-bg  p-3 shadow-lg border"> 
          <div> 
          <p className="text-center"><img src="https://i.ibb.co/FbMBc3c/general-bike1.png" alt="general-bike1" border="0"></img></p>
              <p className="text-center"> General Service</p>
          </div>
        </div>
        <div className="m-2 service-bg p-3 shadow-lg border"> 
        <div>

        <p className="text-center"><img src="https://i.ibb.co/FbMBc3c/general-bike1.png" alt="general-bike1" border="0"></img></p>
        <p className="text-center">Engine Reboring</p>

            </div>

        </div>
        <div className="m-2 service-bg rounded p-3 shadow-lg border"> 
        <div>

        <p className="text-center"><img src="https://i.ibb.co/0CjLLQ6/bike-wash.png" alt="bike-wash" border="0"></img></p>
        <p className="text-center">Byke Washing</p>

            </div>
        </div>
       
        </div>
        <p className=" text-center fw-bold"> <Link to='/home' className=' text-decoration-none '>Back to Home</Link></p>
 </div>        
    );
};

export default Services;