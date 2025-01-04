import React from 'react'

export default function Contact() {
  return (
    <div className='contact'>
      <div className="my-color text-center">
        <h2 className="text-uppercase mb-3 fs-1 fw-bolder my-3 ">conatct section</h2>
        <div className="d-flex align-items-center justify-content-center mb-3">
          <div className="line my-bg-color-second me-3" ></div>
          <i className="fa-solid fa-star " ></i>
          <div className="line my-bg-color-second ms-3">
          </div>
        </div>
      </div>

  <form className="w-50 p-3 mx-auto mt-5 ng-pristine ng-valid ng-touched">
        
      
  <div className="form-floating mb-3">
    <input type="text" placeholder="userName" name="userName" id="userName" className="form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched"/>
    <label htmlFor="userName">User Name</label>
  </div>
  <div className="form-floating mb-3">
    <input type="text" placeholder="userAge" name="userAge" id="userAge" className="form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched"/>
    <label htmlFor="userAge">User Age</label>
  </div>
  <div className="form-floating mb-3">
    <input type="text" placeholder="userEmail" name="userEmail" id="userEmail" className="form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched"/>
    <label htmlFor="userEmail">User Email</label>
  </div>
  <div className="form-floating mb-3">
    <input type="password" placeholder="userPassword" name="userPassword" id="userPassword" className="form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched"/>
    <label htmlFor="userPassword">User Password</label>
  </div>
  <button className="btn mt-4 text-white" style={{ backgroundColor: '#1abc9c' }}> send Message </button>
  </form>

    </div>
  )
}
