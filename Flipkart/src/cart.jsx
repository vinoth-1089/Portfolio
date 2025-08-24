import React from 'react';
import './cart.css'

function Cart() {
  return (
    <>
      <nav className="bg-primary col-12 ">
        <div className="container-fluid d-flex flex-row ">
            <div className="logo ms-5 mt-3">
                <a href=""><img className="img-fluid" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="" /></a>
                <p className="fst-italic text-white">Explore <span style={{ color: 'yellow' }}>Plus</span></p>
            </div>
            <form action="">
                
                <input type="search" name=" " id="" placeholder="Search for products,brands and more  " className="mt-3 m-5 d-none d-md-block "/>
            </form>
        <div className="login-btn mt-3 d-none d-md-block ms-auto me-5">
            <button type="submit" className=" text-primary text-center ml-4 login-btn"><a href="login.html">Login</a>
            </button>
        </div>
        </div>
       
    </nav>
      <div className="container bg-white d-flex flex-row justify-content-center mt-3">
        <div>
          <img
            className="img-fluid Error p-3"
            src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
            alt=""
          />
          <div className="text-center p-3">
            <h5 className="fs-5">Missing Cart items?</h5>
            <p className="fs-6">Login to see the items you added previously</p>
            <a href="login.html" className="btn text-white center-btn">
              Login
            </a>
          </div>
        </div>
      </div>

      <hr />

      <div className="d-flex flex-lg-row flex-column justify-content-center text-center mt-5">
        <p className="col-12 fs-6 col-lg-6">
          Policies: Returns Policy | Terms of use | Security | Privacy{' '}
          <span className="p-4">&copy; 2007-2025 Flipkart.com</span>
        </p>
        <p className="col-12 fs-6 col-lg-6">
          Need Help? Visit the <span className="text-primary">Help center</span>{' '}
          or <span className="text-primary">Contact Us</span>
        </p>
      </div>
    </>
  );
}

export default Cart;
