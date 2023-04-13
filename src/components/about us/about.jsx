import React from "react";
import "./about.css";
import {Link} from "react-router-dom";

function about() {
  return (
    <>
      <div className="bg-light" id="aboutus">
        <div className="container py-5">
          <div className="row h-100 align-items-center py-5">
            <div className="col-lg-6">
            <h2>About Us</h2>
                    <h5>SAB BECHO & <span>KHAREEDO</span></h5>
                    <p>Welcome to <span style={{color:"grey"}}>SAB BECHO & KHAREEDO!</span> We are a team of passionate individuals dedicated to providing our customers with the best online shopping experience possible.
                    <br /> <br />
                    At <span style={{color:"grey"}}>SAB BECHO & KHAREEDO!</span>, we believe that shopping should be easy, convenient, and fun. That's why we've created an online store that's packed with a wide range of products, all carefully selected to meet our customers' needs and preferences.
                    <br />
                    
                    <br />
                    Thank you for choosing <span style={{color:"grey"}}>SAB BECHO & KHAREEDO!</span> – we can't wait to help you find your next favorite product!
                  </p>
                    <div className="data">
                    <Link to="#" className="hire">Partnership</Link>
                    </div>
            </div>
            <div className="col-lg-6 d-flex d-sm-block">
              <img
                src="https://bootstrapious.com/i/snippets/sn-about/illus.png"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default about;
