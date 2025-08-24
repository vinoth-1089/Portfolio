import React from 'react'
import './seller.css'

function seller() {
  return (
   <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand mx-5" href="#"><img class="img-fluid"
                    src="https://static-assets-web.flixcart.com/fk-sp-static/images/flipkart_logo_color_revamp.svg"
                    alt="" /></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mx-5">
                    <li class="nav-item mx-3">
                        <a class="nav-link active" aria-current="page" href="#">SellOnline</a>
                    </li>
                    <li class="nav-item mx-3">
                        <a class="nav-link" href="#">FeesandCommision</a>
                    </li>
                    <li class="nav-item mx-3">
                        <a class="nav-link" href="#">Grow</a>
                    </li>
                    <li class="nav-item mx-3">
                        <a class="nav-link" aria-disabled="true">Learn</a>
                    </li>
                    <li class="nav-item mx-3">
                        <a class="nav-link" aria-disabled="true">Shopsy</a>
                    </li>
                </ul>
                <form action="" class="d-flex ms-auto">
                    <button type="submit" class="btn-log mx-3" >Login</button>
                    <button type="submit" class="btn bg-warning mx-5">Start Selling</button>
                </form>
            </div>
        </div>
    </nav>
    {/* <!-- services section  --> */}
    <div class="container-fluid customar-section d-flex flex-column justify-content-center margins">
        <div class="mt-5">
            <h2 class="ms-5 col-8">Become a Flipkart Seller and to 50 crore+ customers</h2>
        </div>
       
    </div>
    <div class="container bg-white services">
        <div class="row text-center justify-content-center mb-5">
            <div class="col col-5">
                <p class="text-primary fw-blod mt-3 fs-5">14 Lakh+</p>
                <p class="fs-5">Seller community</p>
            </div>
            <div class="col col-5">
                <p class="text-primary fw-blod mt-3 fs-5">24X7</p>
                <p class="fs-5">Online Business</p>
            </div>
            <div class="col col-5">
                <p class="text-primary fw-blod mt-3 fs-5">7</p>
                <p class="fs-5">days*payment</p>
            </div>
            <div class="col col-5">
                <p class="text-primary fw-blod mt-3 fs-5">19000+</p>
                <p class="fs-5">Pincodes served</p>
            </div>
        </div>
    </div>

    {/* <!-- custmoer section  --> */}
    <div class="container bg-body-tertiary pb-5">
        <div class=" service-para">
            <h1 class="col-6">Why do <span class="text-primary">Sellers love selling on Flipakrt?</span></h1>
            <p class="col-6">45 crore+ customers across India trust Flipkart.com to be their number 1 online shopping
                destination. It
                is no surprise that more than a million sellers trust their products to be made available 24x7 on
                Flipkart.</p>
        </div>
        <div class="d-flex flex-row justify-content-center bg-body-tertiary ">
            <div class="col-12 d-flex flex-row ">

                <div class="row icons justify-content-center">
                    <div class="col col-5 d-inline">
                        <h5><img class="img-fluid "
                                src="https://static-assets-web.flixcart.com/fk-sp-static/images/prelogin/icons/__Opportunity.svg"
                                alt="" />Opportunity</h5>
                        <p>45+ crore of customers across 19000+ pincodes ,and acess to shopping festivels like the Big
                            Billion Days,and more</p>
                    </div>
                    <div class="col col-5 d-inline">
                        <h5><img class="img-fluid"
                                src="https://static-assets-web.flixcart.com/fk-sp-static/images/prelogin/icons/__Ease.svg"
                                alt="" />Ease of Doing Business</h5>
                        <p>Create your Flipkart seller account in under 10 minutes with just 1 Product and a valid GSTIN
                            number.</p>
                    </div>
                    <div class="col col-5 d-inline">
                        <h5><img class="img-fluid"
                                src="https://static-assets-web.flixcart.com/fk-sp-static/images/prelogin/icons/__Growth.svg"
                                alt="" />Growth</h5>
                        <p>Sellers see an Average 2.8X spike in growth,2.3X more visibility and upto 5X growth in the
                            Big Billion days Sale.</p>
                    </div>
                    <div class="col col-5 d-inline">
                        <h5><img class="img-fluid"
                                src="https://static-assets-web.flixcart.com/fk-sp-static/images/prelogin/icons/__Support.svg"
                                alt="" />Additional Support</h5>
                        <p>Account management services, exclusive training programs, business insights,
                            catalogue/photoshoot support, and more.</p>
                    </div>
                </div>
            </div>
            <div class="col lady  d-none">
                <img class="img-fluid"
                    src="https://static-assets-web.flixcart.com/fk-sp-static/images/prelogin/images/shopsy_1_1.webp"
                    alt="" srcset="" />
            </div>
        </div>
    </div>


    {/* <!-- seller success story  --> */}
  <div class="container-fluid seller-success-section py-5">
    <div class="d-flex flex-column flex-md-row justify-content-center align-items-center">

      {/* <!-- Text Section --> */}
      <div class="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center text-center px-4 mb-4 mb-md-0">
        <h1><span class="text-primary">Seller Success</span> Stories</h1>
        <p>14 Lakh+ Sellers trust Flipkart for their online business.</p>
        <button type="submit" class="btn btn-outline-primary text-primary">See All Stories</button>
      </div>

      {/* <!-- Carousel Section --> */}
      <div class="col-12 col-md-6 px-4">
        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="4000">
          <div class="carousel-inner text-center">

            <div class="carousel-item active">
              <img class="img-fluid mb-3"
                src="https://static-assets-web.flixcart.com/fk-sp-static/images/prelogin/sellers/Sirona_yellow.webp"
                alt="Sirona"/>
              <h3>Deep Bajaj,<br/> Sirona Hygiene</h3>
              <p><img src="https://static-assets-web.flixcart.com/fk-sp-static/images/comma-icon.svg" alt=""/></p>
              <p>Flipkart created awareness about intimate & menstrual hygiene products. Their team's involvement made our innovative products household favourites.</p>
            </div>

            <div class="carousel-item">
              <img class="img-fluid mb-3"
                src="https://static-assets-web.flixcart.com/fk-sp-static/images/prelogin/sellers/Ekta_shah_yellow.webp"
                alt="Ekta Shah"/>
              <h3>Ekta Shah,<br/> Glide Route Ventures</h3>
              <p><img src="https://static-assets-web.flixcart.com/fk-sp-static/images/comma-icon.svg" alt=""/></p>
              <p>From 5 to 40+ brands, Flipkart's seamless registration, seller support & account managers' guidance fueled our growth in the beauty & grooming sectors.</p>
            </div>

            <div class="carousel-item">
              <img class="img-fluid mb-3"
                src="https://static-assets-web.flixcart.com/fk-sp-static/images/prelogin/sellers/Geetank_yellow.webp"
                alt="Geetank Bajaj"/>
              <h3>Geetank Bajaj,<br/> MGM Garments</h3>
              <p><img src="https://static-assets-web.flixcart.com/fk-sp-static/images/comma-icon.svg" alt=""/></p>
              <p>At 23, I joined our family business, registered on Flipkart during the pandemic, became a Gold Seller, and achieved a ₹3 Crores turnover with Seller Support's guidance—growing every day!</p>
            </div>

          </div>

          {/* <!-- Carousel Controls --> */}
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>

    </div>
  </div>

{/* 
    <!-- journey  --> */}

    <div class="container-fluid journey bg-body-tertiary">
        <div class=" m-5">
            <h1><span class="text-primary">Your Journey </span>on Flipkart</h1>
            <p>Starting your online business with Flipkart is easy. 14 lakh+ sellers trust Flipkart with their business
            </p>
        </div>
        <div class="row d-flex justify-content-center ">
            <div class="col-md-3 col-lg-2 col-10">
                <img class="img-fluid" src="https://static-assets-web.flixcart.com/fk-sp-static/images/create-icon.svg"
                    alt=""/>
                <h4>Create</h4>
                <p>Register in just 10 mins with valid GST, address, & bank details</p>
            </div>
            <div class="col-md-3 col-lg-2 col-10">
                <img class="img-fluid"
                    src="https://static-assets-web.flixcart.com/fk-sp-static/images/prelogin/icons/Group_2_1.svg"
                    alt=""/>
                <h4>List</h4>
                <p>List your products (min 1 no.) that you want to sell on Flipkart.</p>
            </div>
            <div class="col-md-3 col-lg-2 col-10">
                <img class="img-fluid" src="https://static-assets-web.flixcart.com/fk-sp-static/images/orders-icon.svg"
                    alt=""/>
                <h4>Orders</h4>
                <p>Receive orders from over 45 crore+ Flipkart customers.</p>
            </div>
            <div class="col-md-3 col-lg-2 col-10">
                <img class="img-fluid"
                    src="https://static-assets-web.flixcart.com/fk-sp-static/images/shipment-icon.svg" alt=""/>
                <h4>Shipment</h4>
                <p>Flipkart ensures stress free delivery of your products</p>
            </div>
            <div class="col-md-3 col-lg-2 col-10">
                <img class="img-fluid" src="https://static-assets-web.flixcart.com/fk-sp-static/images/payment-icon.svg"
                    alt=""/>
                <h4>Payment</h4>
                <p>Receive payment 7 days* from the date of dispatch of your order</p>
            </div>
        </div>
        <div class="">
            <button type="submit"
                class="btn btn-outline-primary text-primary d-flex justify-content-center flex-row mx-auto">Download
                Lanuch Kit</button>
        </div>
    </div>

{/* 
    <!-- Growth section --> */}

    <div class="container-fluid growth pb-5">
        <div class="p-5 mt-3">
            <h1><span class="text-primary">Access our tools to grow faster </span>on Flipkart</h1>
            <p class="pt-3">We understand that your online business may require additional support from time to time,
                and we've got you covered. With your Flipkart account, you gain access to a range of tools designed to
                help grow your online business.</p>
            <img class="img-fluid"
                src="https://static-assets-web.flixcart.com/fk-sp-static/images/prelogin/images/5x_growthFK.webp" alt=""
                srcset=""/>
        </div>
        <div class=" container-fluid">
            <div class="row icons d-flex justify-content-center flex-row">
                <div class="col-md-3 col-lg-3 col-10 growth-section-card ">
                    <h5><img class="img-fluid"
                            src="https://static-assets-web.flixcart.com/fk-sp-static/images/prelogin/icons/__Fulfillment.svg"
                            alt=""/> Fulfilment by Flipkart</h5>
                    <p class="pt-2">Worried about storing, packing, shipping, and delivering your products? Let Flipkart
                        do it all for you.</p>
                    <a href="">Learn more</a>
                </div>
                <div class="col-md-3 col-lg-3 col-10 growth-section-card">
                    <h5><img src="https://static-assets-web.flixcart.com/fk-sp-static/images/prelogin/icons/__Ads.svg"
                            alt=""/> Flipkart Ads</h5>
                    <p class="pt-2">Curious how your products will stand out from your competitors and gain maximum
                        visibility?</p>
                    <a href="">Learn more</a>
                </div>
                <div class="col-md-3 col-lg-3 col-10 growth-section-card">
                    <h5><img src="https://static-assets-web.flixcart.com/fk-sp-static/images/prelogin/icons/__Shopping_fest.svg"
                            alt=""/> Shopping Festivals</h5>
                    <p class="pt-2">Get access to India’s biggest shopping festivals, The Big Billion Day, Big Diwali
                        Sale, and more..</p>
                    <a href="">Learn more</a>
                </div>
            </div>
            <div class="row icons d-flex justify-content-center flex-row">
                <div class="col-md-3 col-lg-3 col-10 growth-section-card ">
                    <h5><img src="https://static-assets-web.flixcart.com/fk-sp-static/images/prelogin/icons/__learning.svg"
                            alt=""/> Learning Center</h5>
                    <p class="pt-2">Personalised learning modules, exclusive webinars, tutorial videos, and more to help
                        sell better faster.</p>
                    <a href="">Learn more</a>
                </div>
                <div class="col-md-3 col-lg-3 col-10 growth-section-card">
                    <h5><img src="https://static-assets-web.flixcart.com/fk-sp-static/images/prelogin/icons/__Account_mana.svg"
                            alt=""/> Account Management</h5>
                    <p class="pt-2">Improve product selection, product pricing, business insights, & more with our
                        expert in-house account managers</p>
                    <a href="">Learn more</a>
                </div>
                <div class="col-md-3 col-lg-3 col-10 growth-section-card">
                    <h5><img src="https://static-assets-web.flixcart.com/fk-sp-static/images/prelogin/icons/__App.svg"
                            alt=""/> Mobile App</h5>
                    <p class="pt-2">Manage your online seller account 24x7 with Flipkart Seller Hub App. Compatible with
                        all Android & iOS devices..</p>
                    <a href="">Learn more</a>
                </div>
            </div>
        </div>
    </div>
{/* 
    <!-- shopsy --> */}

    <div class="container shopsy">
        <div class="d-flex flex-row justify-content-center mt-4">
            <img class="img-fluid " src="https://static-assets-web.flixcart.com/fk-sp-static/images/shopsy-hero.png"
                alt=""/>
        </div>
        <div class="shopsy-conatiner container">
            <h4 class="text-center pt-5">Your gateway to selling online</h4>
            <div class="row text-center d-flex align-items-center">
                <div class="col col-md-3 col-lg-2 col-6">
                    <img class="img-fluid "
                        src="https://static-assets-web.flixcart.com/fk-sp-static/images/prelogin/icons/zero_returns_revamp.svg"
                        alt=""/>
                    <p>0 Returns*</p>
                </div>
                <div class="col col-md-3 col-lg-2 col-6">
                    <img class="img-fluid"
                        src="https://static-assets-web.flixcart.com/fk-sp-static/images/prelogin/icons/budget_cost_revamp.svg"
                        alt=""/>
                    <p>Access to budget-friendly customers</p>
                </div>
                <div class="col col-md-3 col-lg-2 col-7">
                    <img class="img-fluid"
                        src="https://static-assets-web.flixcart.com/fk-sp-static/images/prelogin/icons/low_cost_revamp.svg"
                        alt=""/>
                    <p>Lowest cost of doing business</p>
                </div>

                <div class="col person d-none d-md-block">
                    <img class="img-fluid"
                        src="https://static-assets-web.flixcart.com/fk-sp-static/images/prelogin/images/a_1.webp"
                        alt=""/>
                </div>
                <div class="mx-auto">
                    <a href="" class="btn btn-outline-primary text-primary">Explore Shopsy</a>
                </div>
            </div>

        </div>
    </div>

    {/* <!-- our platfrom --> */}

    <div class="container-fluid our-platform">
        <h1 class="p-4">Take a sneak peek 👀 into <span class="text-primary">our platform</span></h1>

        <div id="carouselExampleAutoplaying " class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
            <div class="carousel-inner bg-white container mt-5">

                <div class="carousel-item active">
                    <div class="row d-flex align-items-center justify-content-center w-100">
                        <div class="col-12 col-md-5">
                            <h4 class="text-primary pb-3">All The New Homepage. Personalised just for you!</h4>
                            <p>Our new homepage is personalised for all our sellers starting from a new seller to an
                                evolved one. Experience leading features.</p>
                            <button type="button" class="btn btn-outline-primary">Explore All Features</button>
                        </div>
                        <div class="col-12 col-md-5">
                            <img src="https://static-assets-web.flixcart.com/fk-sp-static/images/prelogin/images/Homepage.webp"
                                class="d-block w-100" alt="New homepage preview"/>
                        </div>
                    </div>
                </div>

                <div class="carousel-item">
                    <div class="row d-flex align-items-center justify-content-center w-100">
                        <div class="col-12 col-md-6">
                            <h4 class="text-primary pb-3">Easy listing with Flipkart</h4>
                            <p>Our listing features make it effortless for sellers, whether they have a single product
                                or multiple products.</p>
                            <button type="button" class="btn btn-outline-primary">Explore All Features</button>
                        </div>
                        <div class="col-12 col-md-5">
                            <img src="https://static-assets-web.flixcart.com/fk-sp-static/images/prelogin/images/Listing.webp"
                                class="d-block w-100" alt="Listing feature preview"/>
                        </div>
                    </div>
                </div>

                <div class="carousel-item">
                    <div class="row d-flex align-items-center justify-content-center w-100">
                        <div class="col-12 col-md-6">
                            <h4 class="text-primary pb-3">Payment Overview</h4>
                            <p>Experience a seamless and transparent payment management process, ensuring you can focus
                                on growing your business with confidence.</p>
                            <button type="button" class="btn btn-outline-primary">Explore All Features</button>
                        </div>
                        <div class="col-12 col-md-5">
                            <img src="https://static-assets-web.flixcart.com/fk-sp-static/images/prelogin/images/payments_1.webp"
                                class="d-block w-100" alt="Payment overview preview"/>
                        </div>
                    </div>
                </div>

                <div class="carousel-item">
                    <div class="row d-flex align-items-center justify-content-center w-100">
                        <div class="col-12 col-md-6">
                            <h4 class="text-primary pb-3">Selection Insights</h4>
                            <p>Uncover best-selling products, identify growth opportunities, and understand customers'
                                preferences to stay ahead of the competition.</p>
                            <button type="button" class="btn btn-outline-primary">Explore All Features</button>
                        </div>
                        <div class="col-12 col-md-5">
                            <img src="https://static-assets-web.flixcart.com/fk-sp-static/images/prelogin/images/Dhamaka_Selection.webp"
                                class="d-block w-100" alt="Selection insights preview"/>
                        </div>
                    </div>
                </div>

            </div>

            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>

    {/* <!-- help and support  --> */}
    <div class="footer container-fluid">
        <h1 class="text-center p-3">Popular categories to sell across India</h1>
        <div class="row  p-3">
            <div class="col nav-item">
                <li class="nav-link pt-3">Sell Mobile Online</li>
                <li class="nav-link pt-3">Sell Clothes Online</li>
                <li class="nav-link pt-3">Sell Sarees Online</li>
                <li class="nav-link pt-3">Sell Electronics Online</li>
                <li class="nav-link pt-3">Sell Women Clothes Online</li>
            </div>
            <div class="col nav-item">
                <li class="nav-link pt-3">Sell Shoes Online</li>
                <li class="nav-link pt-3">Sell Jewellery Online</li>
                <li class="nav-link pt-3">Sell Tshirts Online</li>
                <li class="nav-link pt-3">Sell Furniture Online</li>
                <li class="nav-link pt-3">Sell Makeup Online</li>
            </div>
            <div class="col nav-item">
                <li class="nav-link pt-3">Sell Paintings Online</li>
                <li class="nav-link pt-3">Sell Watch Online</li>
                <li class="nav-link pt-3">Sell Books Online</li>
                <li class="nav-link pt-3">Sell Home Products Online</li>
                <li class="nav-link pt-3">Sell Kurtis Online</li>
            </div>
            <div class="col nav-item">
                <li class="nav-link pt-3">Sell Beauty Products Online</li>
                <li class="nav-link pt-3">Sell Toys Online</li>
                <li class="nav-link pt-3">Sell Appliances Online</li>
                <li class="nav-link pt-3">Sell Shirts Online</li>
                <li class="nav-link pt-3">Sell Indian Clothes Online</li>
            </div>
        </div>

        <hr/>

        <div class="row  p-3">
            <div class="col nav-item">
                <li class="nav-link pt-3 fw-bold"> Sell Online</li>
                <li class="nav-link pt-3">Create Account</li>
                <li class="nav-link pt-3">List Products</li>
                <li class="nav-link pt-3">Fees & Commission</li>
                <li class="nav-link pt-3">Help & Support</li>
            </div>
            <div class="col nav-item">
                <li class="nav-link pt-3 fw-bold">Grow Your Business</li>
                <li class="nav-link pt-3">Insights & Tools</li>
                <li class="nav-link pt-3">Flipkart Ads</li>
                <li class="nav-link pt-3">Flipkart Value Service</li>
                <li class="nav-link pt-3">Shopping Festivals</li>
            </div>
            <div class="col nav-item">
                <li class="nav-link pt-3 fw-bold">Learn More</li>
                <li class="nav-link pt-3">FAQs</li>
                <li class="nav-link pt-3">Sell Books Online</li>
                <li class="nav-link pt-3">Seller Success Stories</li>
                <li class="nav-link pt-3">Seller Blogs</li>
            </div>
            <div class="col nav-item">
                <li class="nav-link pt-3">Download Mobile App</li>
                <li class="nav-link pt-3"><img
                        src="https://static-assets-web.flixcart.com/fk-sp-static/images/play_store.png" alt=""/></li>
                <li class="nav-link pt-3"><img
                        src="https://static-assets-web.flixcart.com/fk-sp-static/images/apple_store.png" alt=""/></li>
                <li class="nav-link pt-3">Stay Connected</li>
                <li class="d-inline p-3 mt-1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                        fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                        <path
                            d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                    </svg></li>
                <li class="d-inline p-3 mt-1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                        fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                        <path
                            d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                    </svg></li>
                <li class="d-inline p-3 mt-1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                        fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
                        <path
                            d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                    </svg></li>
                <li class="d-inline p-3 mt-1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                        fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
                        <path
                            d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
                    </svg></li>
                <li class="d-inline p-3 mt-1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                        fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                        <path
                            d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                    </svg></li>
            </div>
        </div>
    </div>


    <div class="row copyrights">
        <div class="col"><img
                src="https://static-assets-web.flixcart.com/fk-sp-static/images/flipkart_logo_color_revamp.svg" alt="" />
        </div>
        <div class="col">
            <p>© 2023 Flipkart. All Rights Reserved</p>

        </div>
        <div class="col ms-auto">
            <p>Privacy Policy.
                Terms of Use</p>

        </div>
    </div>
   </>
  )
}

export default seller