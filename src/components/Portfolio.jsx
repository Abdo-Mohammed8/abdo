import React from 'react'
import img1 from '../assets/portfolio/poert1.png'
import img2 from '../assets/portfolio/port2.png'
import img3 from '../assets/portfolio/port3.png'

export default function Portfolio() {
  return (
    <div className="portfolio py-2">
      <div className="container">
        <div className="my-color text-center">
          <h2 className="text-uppercase mb-3 fs-1 fw-bolder my-3 ">portfolio component</h2>
          <div className="d-flex align-items-center justify-content-center mb-3">
            <div className="line my-bg-color-second me-3" ></div>
            <i className="fa-solid fa-star " ></i>
            <div className="line my-bg-color-second ms-3">
            </div>
          </div>
        </div>

        <div className="row g-5 mb-3">
          <div className="col-md-4">
            <div className="position-relative overflow-hidden rounded-3">
              <img className='w-100' src={img1} alt="photo" />
              <div className='portfolio-img-layer my-bg-color-main position-absolute start-0 end-0 bottom-0 top-0 d-flex justify-content-center align-items-center'>
                <i className="text-white fa-solid fa-plus fa-6x"></i>
              </div>
            </div>

          </div>
          <div className="col-md-4">
            <div className="position-relative overflow-hidden rounded-3">
              <img className='w-100' src={img2} alt="photo" />
              <div className='portfolio-img-layer my-bg-color-main position-absolute start-0 end-0 bottom-0 top-0 d-flex justify-content-center align-items-center'>
                <i className="text-white fa-solid fa-plus fa-6x"></i>
              </div>
            </div>

          </div>
          <div className="col-md-4">
            <div className="position-relative overflow-hidden rounded-3">
              <img className='w-100' src={img3} alt="photo" />
              <div className='portfolio-img-layer my-bg-color-main position-absolute start-0 end-0 bottom-0 top-0 d-flex justify-content-center align-items-center'>
                <i className="text-white fa-solid fa-plus fa-6x"></i>
              </div>
            </div>

          </div>
          <div className="col-md-4">
            <div className="position-relative overflow-hidden rounded-3">
              <img className='w-100' src={img1} alt="photo" />
              <div className='portfolio-img-layer my-bg-color-main position-absolute start-0 end-0 bottom-0 top-0 d-flex justify-content-center align-items-center'>
                <i className="text-white fa-solid fa-plus fa-6x"></i>
              </div>
            </div>

          </div>
          <div className="col-md-4">
            <div className="position-relative overflow-hidden rounded-3">
              <img className='w-100' src={img2} alt="photo" />
              <div className='portfolio-img-layer my-bg-color-main position-absolute start-0 end-0 bottom-0 top-0 d-flex justify-content-center align-items-center'>
                <i className="text-white fa-solid fa-plus fa-6x"></i>
              </div>
            </div>

          </div>
          <div className="col-md-4">
            <div className="position-relative overflow-hidden rounded-3">
              <img className='w-100' src={img3} alt="photo" />
              <div className='portfolio-img-layer my-bg-color-main position-absolute start-0 end-0 bottom-0 top-0 d-flex justify-content-center align-items-center'>
                <i className="text-white fa-solid fa-plus fa-6x"></i>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

  )
}
