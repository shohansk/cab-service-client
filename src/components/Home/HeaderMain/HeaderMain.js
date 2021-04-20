import React from 'react';
import { Link } from 'react-router-dom';


const HeaderMain = () => {
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 col-sm-6 col-12 offset-md-1">
                <h1 style={{color: '#3A4256'}}>Your Good Day <br/> Starts Here with us</h1>
                <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet necessitatibus et iusto corrupti minima.</p>
                <Link to="/appointment" className="btn btn-brand">get a car</Link>
            </div>
            <div className="col-md-6 col-sm-6 col-12">
                
            </div>
        </main>
    );
};

export default HeaderMain;