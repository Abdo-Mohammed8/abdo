import React from 'react'


export default function Footer() {
    return (<>
        
            <div className="footer ">
                <div className="container">
                <div className="card-group m-4">
                    <div className="card ">
                        <div className="card-body text-center">
                            <h3 className='pt-3'>LOCATION</h3>
                            <p>2215 John Daniel Drive</p>
                            <p>Clark, MO 65243</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body text-center">
                            <h3 className='pt-3'>AROUND THE WEB</h3>
                            <div className="icons">
                                <i className="fa-brands fa-facebook mx-2 icon"></i>
                                <i className="fa-brands fa-twitter mx-2 icon"></i>
                                <i className="fa-brands fa-linkedin-in mx-2 icon"></i>
                                <i className="fa-solid fa-globe mx-2 icon"></i>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body text-center">
                            <h3 className='pt-3'>ABOUT FREELANCER</h3>
                            <p> Freelance is a free to use, licensed Bootstrap theme created by Route </p>
                        </div>
                    </div>
                </div>
            </div>


        
             </div>
           <div className="text-center footer-butom py-2 "><p className="text-white pt-3">Copyright © Your Website 2021</p></div>

        </>

    )
}
