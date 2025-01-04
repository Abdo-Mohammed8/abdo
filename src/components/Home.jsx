import React from 'react'
import img from '../assets/imges/avataaars.png'

export default function Home() {
    return (

        <div className="home p-5 d-flex justify-content-center align-content-center">
            <div className="container">
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <div className="images mb-3">
                        <img className='w-100' src={img} alt="avataaars" />

                    </div>
                    <h2 className="text-uppercase mb-3 fs-1 fw-bolder my-3 text-white">start Framework</h2>
                    <div className="d-flex align-items-center justify-content-center mb-3">
                        <div className="line bg-white me-3" >
                        </div>
                        <i className="fa-solid fa-star text-white" ></i>
                        <div className="line bg-white ms-3">
                        </div>
                    </div>
                    <p className='text-white m-0' >Graphic Artist - Web Designer - Illustrator</p>




                </div>

            </div>
        </div>

   
    )



}
