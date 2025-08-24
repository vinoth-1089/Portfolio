import React, { useEffect } from "react";
// import resume from 'public/Myresume.jpg';

import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.css'
import  './resume.css'
import cube from './assets/sphere.png'
import daimond from './assets/diamond.png'
import cube2 from './assets/whitecube.png'
export default function ResumeSection() {

    useEffect(()=>{
        AOS.init({
            duration:3000,
            delay:400,
            once:true
        })
    },[])                         



    return (
        <>
            <div className="container resume-con ">
                <h1 className="text-white bouncy-text">{"Resume".split("").map((c,i)=>  <span key={i}>{c}</span>)}</h1>
                <div className="flex  resume d-flex flex-column justify-content-center align-items-center project" >
                    <img  className="img-fluid bg-transparent" src="/Myresume.jpg"  alt=""  data-aos="fade-down"/>
                </div>
                <div className="project-1"></div>
                <div className="download-btn  ms-3 ms-lg-auto me-lg-5">
                    {/* <img className="img-fluid daimond moving" src={daimond} data-aos="fade-up" alt="" /> */}
                    <a
                        href="/Myresume.jpg"
                        download="My_Resume.jpg"
                        className="bg-green-600 text-white px-4 py-2 rounded-lg shadow-md btn"
                    >
                        Download Resume
                    </a>
                </div>
                
            </div>
            <img className="img-fluid white  moving d-none d-lg-block" src={cube2} data-aos="zoom-in" alt="" />
        </>
    );
}