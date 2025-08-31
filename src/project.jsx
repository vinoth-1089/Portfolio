import React, { use } from 'react'
import { useEffect,useState } from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css';
import './project.css'
import  './resume.css'
import cube from './assets/sphere.png'
import daimond from './assets/diamond.png'
import cube2 from './assets/whitecube.png'
function project() {

  const [projects,setproject]=useState([])

  const fetchData=async(url,setter) =>{
    try{
      const res = await fetch(url)
      if(!res.ok) throw new Error ("Network Issue");
      const data = await res.json();
      setter(data);
    }catch(error){
      console.log(error)
    }
  };
   useEffect(()=>{
      fetchData("https://db-2-tnbu.onrender.com/projects",setproject)
    },[])

      useEffect(() => {
        AOS.init({
          duration: 3000,
          delay:500,
          once: true,
        });
      }, []);

  return (
    <>
 <div className="container-fluid">
   <div className="container-fluid">
    <h1 className='text-white bouncy-text   bg-transparent mt-1 position-fixed ' style={{ letterSpacing: '3px'}}>
      <div className="d-inline z-1">
        {"Projects".split("").map((c,i)=> <span key={i}>{c}</span>)}
      </div>
    </h1>

  

    <div className="row projects mt-lg-5">
      
      {projects.map((pro, i) => (
        <div key={i} className="col col-12 mt-5 project-card d-lg-flex flex-lg-row justify-content-start">
          <div className="col-lg-6 ms-lg-5">
            <img className="img-fluid bg-transparent project-bg" src={pro.img} alt={pro.name} />
          </div>
   

          <div className="ms-5 d-lg-flex flex-lg-column col-lg-6 mt-lg-5 pt-lg-5 z-2 ">
            <p className="title text-uppercase">{pro.title}</p>
            <h1 className='bouncy-text text-uppercase' style={{ letterSpacing: '3px'}}>
              <div className="d-inline">
                {pro.name.split("").map((c, j) => <span key={j}>{c}</span>)}
              </div>
            </h1>
            <p className='col-lg-12'>
              <strong>Built with:</strong> HTML, CSS, Bootstrap and React (Json-Server, Hosting-Netlify).
            </p>
            <a href={pro.code} className='list-style-none text-decoration-none nav-link text-white fs-6  '>
              View Code <i className="bi bi-chevron-right "></i>
            </a>
           
            <a href={pro.demo} className='list-style-none text-decoration-none nav-link text-warning fs-6'>
              View Demo <i className="bi bi-chevron-right "></i>
            </a>
          <div className="shapes position-relative">
            <img src={daimond} className="moving bg-transparent w-100  position-absolute d-none d-lg-block" alt=""  style={{left:"-1200px" ,top:"-300px"}} data-aos="fade-left"   />
            <img src={cube2} className='moving bg-transparent w-25  position-absolute  d-none d-lg-block' alt="" style={{left:"500px"  ,top:'-450px'}} data-aos="zoom-in" />
            <img src={cube} className='moving bg-transparent w-25 position-absolute  d-none d-lg-block ' alt="" style={{left:"380px"  ,top:'-150px'}} data-aos="zoom-out" />
      </div>
            
          </div>
        </div>
      ))}
    </div>
  </div>
 </div>
</>

  )
}

export default project