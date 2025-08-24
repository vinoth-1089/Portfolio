import React, { useEffect, useState } from 'react'
import logo from '/public/Flipkart-Logo.png'
import { Link } from 'react-router-dom'
import './index.css'


function Index() {



    const [catagories, setcatagories] = useState([])

    const [carousels, setcarousel] = useState([])
    const [Electronics, setElectronics] = useState([])

    const [toys, settoy] = useState([])

    const [healths, sethealth] = useState([])

    const [monsoons, setmonsoon] = useState([])

    const [tops, settop] = useState([])

    const [homes, sethome] = useState([])



    const fetchData = async (url, setter) => {
        try {
            const res = await fetch(url);
            if (!res.ok) throw new Error("Network Issue");
            const data = await res.json();
            setter(data);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        fetchData("http://localhost:3001/product-catagories", setcatagories);
        fetchData("http://localhost:3001/carosuel", setcarousel);
        fetchData("http://localhost:3001/Electronics", setElectronics);
        fetchData("http://localhost:3001/toys", settoy);
        fetchData("http://localhost:3001/healths", sethealth);
        fetchData("http://localhost:3001/monsoons", setmonsoon);
        fetchData("http://localhost:3001/monsoonstop", settop);
        fetchData("http://localhost:3001/monsoonshome", sethome);


    }, []);





    return (
        <>
            {/* {navbar} */}
            <nav className="navbar navbar-expand-lg bg-white">
                <div className="container-fluid ">
                    <a cclassName="navbar-brand" href="#"><img className="ms-5 logo img-fluid" src={logo} alt="" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <form className="d-flex" role="search">
                            <input className="form-control pl-3 me-3 search col-4" type="search" placeholder="Search" aria-label="Search" />
                            <button className="  search-btn" type="submit">Search</button>
                        </form>
                        <ul className="navbar-nav  mb-2 mb-lg-0 text-sm-start ms-md-auto me-lg-4">
                            <li className="nav-item  ">
                                <Link to='/login' class="nav-link active" aria-current="page" href="login.html">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                                </svg>Login
                                </Link>
                            </li>
                            <li className="nav-item ">
                                <Link to='/Cart' className='nav-link'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                                </svg>Cart
                                </Link>

                            </li>
                            <li className="nav-item ">
                                <Link to='/seller' className="nav-link " href="seller.html" aria-disabled="true"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shop-window" viewBox="0 0 16 16">
                                    <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.37 2.37 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0M1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5m2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5" />
                                </svg>Become a Seller
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* product catagories */}

            <div className="product-catagories  bg-white p-2 mt-5 products-items  ">
                <div className="container-fluid mt-3 ">
                    <div className="row text-center  products-list  mt-5 ms-lg-auto">

                        {
                            catagories.map((catagory) => (
                                <div key={catagory.id} className="col col-4 col-lg-1 m-lg-3  ">
                                    <img className=" " src={catagory["product-image"]} alt="" srcset="" />
                                    <p className="col">{catagory.product}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>

            {/* {Carsousel} */}

            <div id="carouselExampleSlidesOnly" className="carousel slide products-items" data-bs-ride="carousel" data-bs-interval="2000">
                <div className="carousel-inner mt-3">
                    {carousels.map((carousel, index) => (

                        <div className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                            <img key={index} src={carousel["carosuel_image"]} className="d-block w-100" alt="..." />
                        </div>

                    ))}
                </div>
            </div>

            {/* Electronics */}


            <div className="Electronics-products mt-5 bg-white products-items">
                <div className="container-fluid mt-3">
                    <h3 className="p-3">Best of Electronics</h3>

                    <div className="product-list row text-center mt-4 p-4 d-flex justify-content-center flex-row">
                        {Electronics.map((Electronic) => (<div className="col col-6 col-md-3 mt-md-2"><img className="img-fluid col-12" src={Electronic["Electronic-product"]} alt="" />
                            <p className="mt-2">{Electronic.name}</p>
                            <strong>From &#8377; {Electronic.price} </strong>
                        </div>
                        ))}
                    </div>


                </div>
            </div>


            {/* toys and Foods */}


            <div class="toys-products mt-5 bg-white products-items">
                <div class="container-fluid mt-3">
                    <h3 class="p-3">Toys and Foods</h3>
                    <div class="product-list row text-center mt-4 p-4 d-flex justify-content-center flex-row">
                        {toys.map((toy) => (
                            <div class="col col-6 col-md-3 mt-md-2"><img class="img-fluid" src={toy["toy-image"]} alt="" />
                                <p class="mt-2">{toy.name}</p>
                                <strong>From &#8377; {toy.price}</strong>
                            </div>
                        ))}

                    </div>

                </div>
            </div>


            {/* health and  */}



            <div class="health-products mt-5 bg-white products-items">
                <div class="container-fluid mt-3">
                    <h3 class="p-3">HealthCare & more...</h3>
                    <div class="product-list row text-center mt-4 p-4 d-flex justify-content-center flex-row">
                        {
                            healths.map((health) => (

                                <div class="col col-6 col-md-3 mt-md-2"><img class="img-fluid" src={health["health-image"]} alt="" />
                                    <p class="mt-2">{health.name}</p><strong>From &#8377;{health.price}</strong></div>


                            ))
                        }
                    </div>
                </div>
            </div>

            {/* Monsoon Ready Styles */}

            <div class="row mt-4 bg-body-tertiary text-start d-md-flex  ">
                <div class="col-12 col-md-6 col-lg-4 pb-3 ml-2 card-1 ">
                    <div class="monsoon bg-white">
                        <h3 class="p-3 text-start">Monsoon Ready Styles   <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="blue" class="bi bi-arrow-right-circle-fill  d-none d-md-none" viewBox="0 0 16 16">
                            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                        </svg></h3>
                        <div class="row product-list-monsoon d-flex justify-content-center ">
                            {
                                monsoons.map((monsoon) => (
                                    <div class="col-4 col-lg-4 monsoon-products">
                                        <img class="img-fluid" src={monsoon["monsoon-image"]} alt="" />
                                        <p class="mt-3">{monsoon.name}</p>
                                        <p class="offer">{monsoon.price}</p>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 pb-3 ml-2 card-1 ">
                    <div class="monsoon bg-white">
                        <h3 class="p-3 text-start">Season's Top Picks    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="blue" class="bi bi-arrow-right-circle-fill  d-none d-md-none" viewBox="0 0 16 16">
                            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                        </svg></h3>
                        <div class="row product-list-monsoon d-flex justify-content-center ">
                            {
                                tops.map((monsoon) => (
                                    <div class="col-4 col-lg-4 monsoon-products">
                                        <img class="img-fluid" src={monsoon["monsoon-image"]} alt="" />
                                        <p class="mt-3">{monsoon.name}</p>
                                        <p class="offer">{monsoon.price}</p>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 pb-3 ml-2 card-1 ">
                    <div class="monsoon bg-white">
                        <h3 class="p-3 text-start">Make your home stylish   <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="blue" class="bi bi-arrow-right-circle-fill  d-none d-md-none" viewBox="0 0 16 16">
                            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                        </svg></h3>
                        <div class="row product-list-monsoon d-flex justify-content-center ">
                            {
                                homes.map((home) => (
                                    <div class="col-4 col-lg-4 monsoon-products">
                                        <img class="img-fluid" src={home["monsoon-image"]} alt="" />
                                        <p class="mt-3">{home.name}</p>
                                        <p class="offer">{home.price}</p>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index

