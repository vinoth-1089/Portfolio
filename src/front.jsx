import React, { useEffect,useState } from 'react';
import { Link } from 'react-router';
import resume from './resume.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import head from './assets/image.png';
import diamond from'./assets/diamond.png'
import white from'./assets/whitecube.png'
import sphere from'./assets/sphere.png'
import Splash from './splash.jsx';



function Front() {


  const[load,setload]=useState(true);

 

    useEffect(()=>{
       const timer = setTimeout(()=>{
          setload(false)
       },3000);
        return()=> clearTimeout(timer);
    },[])
 

  useEffect(() => {
    AOS.init({
      duration: 3000,
      delay:200,
      once: true,
    });
  }, []);



  return (
   
      <>
      {<div className="container-fluid grid-bg overflow-hidden px-0">

        {/* Navbar */}
        <div className="row ">
          <div className="col-12 position-fixed top-5 w-100 z-1">
            <div className="nav-bar d-flex justify-content-between glass px-3 py-2">
              <div className=""><h1 className='text-white  bg-transparent mt-4  ' data-aos="fade-down">DEVLPER</h1></div>
              <button className='btn contact-btn border border-2 border-white rounded ' data-aos="fade-left"><a href="#contact" className='text-white text-decoration-none'>Contact</a></button>
            </div>
          </div>
        </div>

        {/* Spacer for fixed navbar */}
        <div style={{ height: '80px' }}></div>

        {/* Hero Section */}
        <div className="row m-0">

          {/* Image & Social Icons */}
          <div className="col-12 col-lg-8 order-lg-2 d-flex justify-content-center align-items-center my-5">
            <img className='img-fluid rounded-circle' src={head} alt="" data-aos="zoom-in" />
            {/* Social Icons */}
            <div className="d-none d-lg-block">
              <div className="socialmedia position-fixed top-50 end-0 translate-middle-y d-flex flex-column gap-0 me-5 z-3">

                <div className="media my-3" >
                  <h4 className="d-flex gap-4 flex-column ">
                    {[
                      { href: 'https://github.com/vinoth-1089/', icon: 'github' ,type:'external'},
                      { href: 'https://www.linkedin.com/in/-vinoth-', icon: 'linkedin' ,type:'external'},
                      { href: 'https://www.instagram.com/algoneuron.in/', icon: 'instagram',type:'external' },
                      { href: 'https://stackoverflow.com/questions', icon: 'stack-overflow',type:'external' },
                      { href: '/resume'  , icon:'file-earmark-person',type:'internal'}
                    ].map((item, i) => 
                      item.type ==="external"?(
                        <a
                        href={item.href}
                       
                        key={i}
                        className="text-white fs-4"
                        target="_blank" rel="noopener noreferrer"
                      >
                        <i className={`bi bi-${item.icon}`}></i>
                        
                      </a>
                      
                      ):(
                        <Link
                        to={item.href}
                       
                        key={i}
                        className="text-white fs-4"
                      >
                        <i className={`bi bi-${item.icon}`}></i>
                      </Link>
                      )
                    )}
                  </h4>
                  

                </div>
                     
              </div>
               <h6 className=''><i className="bi bi-chevron-left  "></i> Scroll down</h6>
            </div>
          </div>

          {/* Developer Text */}
          <div className="col-12 col-lg-4 order-lg-1 d-lg-block">
            <div className="mt-lg-5 pt-lg-5">
              <h1 className="bouncy-text text-white ms-lg-5" data-aos="fade-right">
                <div className="d-inline">
                  {"Front-End".split('').map((c, i) => <span key={i}>{c}</span>)}
                </div>
                <div className="d-inline ms-2">
                  {"Software".split('').map((c, i) => <span key={i}>{c}</span>)}
                </div>
                <div className="ms-2 gradient-color">
                  {"Developer".split('').map((c, i) => <span key={i}>{c}</span>)}
                </div>
              </h1>
              <div className="text-white ms-lg-5">
                <p data-aos="fade-right" className="mt-3 col-10">
                  Resolving design problems, building smart user interfaces and useful interactions, developing rich web applications and seamless web experiences.
                </p>
                <a href="#about" className="about-link nav-link d-inline-block text-purple">
                  About me <i class="bi bi-chevron-right"></i>
                </a>
                <img data-aos="zoom-in" className="violet-box img-fluid w-50 mt-3 p-0 floating" src={diamond} alt="" />
              </div>
            </div>
            {/* GitHub icon fixed bottom */}
            <div className="github position-fixed bottom-0 mb-4 d-none d-md-block z-1 bg-trans">
              <img className="img-fluid bg-transparent" src={head} alt="" />
            </div>
          </div>
        </div>

        {/* Page 2 */}
        <div id="about" className="container-fluid page2 px-0  pt-2" >
          <img data-aos="zoom-in" className="violet-box2 img-fluid d-none d-md-block floating" src={diamond} alt="" />
          <img data-aos="zoom-in" src={white} className="violet-box3 img-fluid d-none d-md-block floating" alt="" />
          <div className="row align-items-center mx-0">

            <div className="col-12 col-lg-6 px-4 justify-content-center">
              <h1 className="bouncy-text text-white fs-1" data-aos="fade-right">
                <div className="d-inline">
                  {"Hi, I'm,".split('').map((c, i) => <span key={i}>{c}</span>)}
                </div>
                <div className="d-inline">
                  {"Todor's".split('').map((c, i) => <span key={i}>{c}</span>)}
                </div>
                <br />
                <div className="d-inline">
                  {"Web-Developer".split('').map((c, i) => <span key={i}>{c}</span>)}
                </div>
              </h1>
              <h5 className=' fs-6' data-aos="zoom-in">
                Front End Developer / JavaScript Fan
              </h5>
              <div className="page-bg-box mx-auto my-5 floating" data-aos="zoom-in"></div>
            </div>

            <div className="col-12 col-lg-4 text-white px-4" data-aos="fade-up">
              <p>Professionally connected with the web development industry.</p>
              <p>Problem solver, well-organised person, loyal employee with high attention to detail.</p>
              <p>Fan of Boxing, outdoor activities, video games, and coding of course.</p>
              <p>Interested in the entire frontend spectrum and working on ambitious projects with interesting people.</p>
            </div>
          </div>
          <img data-aos="zoom-in" className="circle circle-4 floating" src={sphere} alt="circle" />
        </div>

        {/* Page 3 */}
        <div className="page3 container-fluid mt-5 pt-0 mt-lg-5 pt-lg-5">

          <div className="container text-white" data-aos="fade-up">

            <div className="skills col-lg-6 d-flex flex-column justify-content-center text-center mx-auto gap-3">
              <h4>A problem is a chance for you to do your best.</h4>

              <div className="d-inline bouncy-text text-white">
                <h1>{"Skill & Experience".split('').map((c, i) => <span key={i}>{c}</span>)}</h1>
              </div>

              <p>The main area of expertise is front end development (client side of the web).</p>
              <p>HTML, CSS, JS, building small and medium web applications with Vue or React, custom plugins, features, animations, and coding interactive layouts. I have also full-stack developer experience with one of the most popular open source CMS on the web - WordPress</p>
              <p className='mb-0'>Visit my <span className='text-warning'><a className='text-warning linkdin ' href="https://www.linkedin.com/in/-vinoth-">Linkedin</a></span> for more details.</p>
            </div>
          </div>


         <div
  data-aos="fade-up"
  className="course d-flex flex-wrap justify-content-center align-items-center text-center gap-4 mt-5 mx-auto mx-lg-auto"
>
  {[
    'https://logos-world.net/wp-content/uploads/2021/10/Python-Logo.png',
    'https://logos-world.net/wp-content/uploads/2022/07/Java-Logo.png',
    'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    'https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo-shadow.png',
    'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png',
    'https://www.vectorlogo.zone/logos/mysql/mysql-official.svg',
    'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
    'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
    'https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg',
    
  ].map((src, i) => (
 
     <div
      className=" col-md-2 col-3"
      data-aos="fade-left"
      data-aos-duration={`${(i + 1) * 500}`}
      key={i}
    >
      <img src={src} alt={`logo-${i}`}  className="img-fluid " />
    </div>

  ))}
</div>

        </div>

        {/* page 4 */}

        <div className="page3 container-fluid d-flex flex-column justify-content-center align-items-center text-white position-relative py-5">
          {/* Background Circles */}
          <img data-aos="zoom-in" className="circle circle-1 floating bg-transparent" src={sphere} alt="circle" />
          <img data-aos="zoom-in" className="circle circle-2 floating" src={sphere} alt="circle" />
          <img data-aos="zoom-in" className="circle circle-3 floating" src={sphere} alt="circle" />

          {/* Content Section */}

          <div>
            <div>
              <div>

                <div data-aos="zoom-out" className="text-start  text-md-center px-3 " style={{ maxWidth:'600px', backgroundColor:'transparent'}}>
                  <h1 className="bouncy-text text-white fs-1" style={{ letterSpacing: "3px" }}>
                <div className="d-inline ">
                  {"Portfilo &".split('').map((c, i) => <span key={i}>{c}</span>)}
                </div>
                <div className="d-inline">
                  {"Previous".split('').map((c, i) => <span key={i}>{c}</span>)}
                </div>
                <br />
                <div className="d-inline">
                  {"Projects".split('').map((c, i) => <span key={i}>{c}</span>)}
                </div>
              </h1>
                  <p className="mb-4  ">
                    I have built various different projects to fit different aspects of the client's business.
                    If you want to see more examples of my work than the ones showcased in this site, please
                    <span className="text-warning fw-bold"> contact me!</span>
                  </p>
                  <Link to='/project' href="#projects" className="text-decoration-none text-purple fw-semibold">
                    See Projects <span className="ms-1"><i className="bi bi-chevron-right  "></i></span>
                  </Link>
                </div>

              </div>
            </div>
            <div class="carousel-indicators">
              <button type="button"></button>
              <button type="button"  ></button>
              <button type="button"></button>
            </div>
          </div>
        </div>

        {/*page 5*/}

        <div id="contact" className="page5 container-fluid">
          <div className="row d-flex flex-column flex-lg-row align-items-center px-3 py-0">

            {/* Image Section */}
            <div className="col-12  col-lg-6 earth-container mb-4 d-none d-lg-block " data-aos="zoom-in">
              <img className="img-fluid earth w-50 " src="https://dvlpr.pro/earthlights1k.jpg" alt="Earth" />
            </div>
            
            {/* Text Section */}
            <div data-aos="zoom-in" className=" col-12 col-lg-6 text-white text-center text-lg-start order-2 d-flex flex-column align-items-center justify-content-center vh-100 my-auto  ">
                 <img data-aos="zoom-in" className="circle circle-5 d-lg-none d-block floating" src={sphere} alt="circle" />
              <p className=" mt-5 col-lg-6 z-1 bg-transparent">
                What would you do if you had a software expert available at your fingertips?
              </p>
              <p className="col-lg-6 z-1 bg-transparent">
                Want to start a new project? Or just say hey. You can also follow me on Instagram.
              </p>
              <h5 className=" text-warning col-lg-6">Vinoth42007@gmail.com</h5>
              <img data-aos="zoom-out" className="img-fluid w-50 sqaure floating" src="https://dvlpr.pro/white_cube1.png" alt="cube" />
                <img data-aos="zoom-in" src={diamond} className="violet-box-3 img-fluid  d-lg-none d-block floating" alt="" />
            </div>

          </div>
          
        </div>




        <footer className='mb-5' data-aos="fade-left">
           <div className="d-block d-lg-none">
              <div className="socialmedia  d-flex flex-column z-3 ">
                <div className="mx-3 mb-4 d-inline">
                    <h5 className='text-warning'><i className="bi bi-globe text-primary"></i>   Connect</h5>
                  </div>
                <div className="media  " >
                    <h4 className="d-flex gap-4 flex-row ms-5 mt-2  mb-5">
                    {[
                      { href: 'https://github.com/vinoth-1089/', icon: 'github' ,type:'external'},
                      { href: 'https://www.linkedin.com/in/-vinoth-', icon: 'linkedin' ,type:'external'},
                      { href: 'https://www.instagram.com/algoneuron.in/', icon: 'instagram',type:'external' },
                      { href: 'https://leetcode.com/u/vinoth-2007/', icon: 'stack-overflow',type:'external' },
                      { href: '/resume'  , icon:'file-earmark-person',type:'internal'}
                    ].map((item, i) => 
                      item.type ==="external"?(
                        <a
                        href={item.href}
                       
                        key={i}
                        className="text-white fs-4"
                      >
                        <i className={`bi bi-${item.icon}`}></i>
                        
                      </a>
                      
                      ):(
                        <Link
                        to={item.href}
                       
                        key={i}
                        className="text-white fs-4"
                      >
                        <i className={`bi bi-${item.icon}`}></i>
                      </Link>
                      )
                    )}
                  </h4>
                  
                  <div>
                    <h5 className="mx-3  text-warning"> <i className="bi bi-geo-alt-fill text-danger"></i>   Location</h5>

                    <div className="">
                      <p className=' fs-5 ms-5 mt-4 text-white'>Ayyampalayam , Mannachanallur <br/> Trichy TamilNadu</p>
                         <h5 className="mx-3  text-warning"> <i className="bi bi-envelope-fill text-white"></i>   Email</h5>
                         <p className=' fs-5 ms-5 mt-4 text-white'>Vinoth42007@gmail.com</p>
                     
                    </div>
                  </div>
                </div>

              </div>
            </div>
        </footer>



      </div>}
      
    </>
                  
  );

}

export default Front;
