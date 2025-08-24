import React from 'react'
import '/src/login.css'
function login() {
  return (
    <>
         <nav className="bg-primary col-12">
        <div className=" d-flex container-fluid">
            <div className="logo ml-5 mt-3">
                <a href=""><img className="img-fluid d-flex justify-content-start" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt=""/></a>
                <p className="fst-italic text-white">Explore <span style={{color:"yellow"}}>Plus</span></p>
            </div>
            <form action="" className="d-none d-lg-block">
                
                <input type="search" name=" " id="" placeholder="Search for products,brands and more  " className="mt-3 mx-lg-5"/>
            </form>
             <ul className=" nav-item d-lg-flex flex-lg-row mt-3 list-unstyled d-none d-lg-block ms-md-auto  gap-5 ">
            <li className="nav-link fs-6"><a href="seller.html">Become a Seller</a></li>
            <li className="nav-link  fs-6 text-white">More</li>
            <li className="nav-link  fs-6"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="whiter" className="bi bi-cart3" viewBox="0 0 16 16">
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
            </svg><a href="cart.html">Cart</a></li>
        </ul>
        <div className="loginbtn  mt-3 ms-auto me-5">
            <button type="submit" className=" text-primary text-center " >Login</button>
        </div>
        
        </div>
       
       
    </nav>

    <div className="container bg-white d-flex justify-content-center mt-md-5 mt-lg-5  login-form">
        <div className="d-md-flex flex-md-row container ">
            <div className="col-lg-4 col-sm-12 col-md-6 mt-4 ">
               <div className="login-left h-100 m-0">
                    <h3 className="text-white p-4 fs-2">Login</h3>
                    <p className="p-4 fs-6">Get access to Your Orders, Wishlist and Recommendations</p>

                    <img src="../src/assets/trolly.png" className="img-fluid trolly position-fixed bottom-0"/>
               </div>
               
            </div>
            <div className="col-lg-7 col-sm-12 col-md-6 p-5 m-3 justify-content-md-center p-lg-0 ms-lg-5">
                 <form action="">
                    <label for=""></label>
                    <input className="login-input col-12" type="text" name="" id="" placeholder="Enter Email/Mobilenumber"/>
                </form>

                 <div className=" mt-2 mt-lg-5 ">
                    <p >By continuing.you agree to Flipkart's<span className="">Trems of Use</span> or <span className="">Privacy Policy</span></p>
                    <button type="submit" className="btn-0  col-10">Request OTP</button>
                </div>
                <footer className="d-flex flex-column justify-content-end justify-content-md-center d-md-none m-auto">
                        <p className="text-primary text-center">New to Flipkart?Create an account</p>
                </footer>
        
        
            </div>
        </div>
       
        </div>

        
     
        
    
    
    </>
  )
}

export default login