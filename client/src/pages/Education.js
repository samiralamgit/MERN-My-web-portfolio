import React from 'react'

const Education = () => {
    return (
        <div className='container-fluide education' id='education'>
            <div className='container p-5'>
                <div className='row'>
                    <div className='col'>
                        <h1 className='text-center' style={{ color: 'white' }}>Education🏫</h1>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <h3 className='text-center' style={{ color: 'white' }}>My education has been a journey of self-discovery and growth. My educational details are as follows.</h3>
                    </div>
                </div>
                <div className='row mt-4 justify-content-center align-items-center'>
                    <div className='col-md-6'>
                        <div className='card p-4'>
                            <div className='role d-flex'>
                                <img className='assam-logo' src='./images/assa.png' />
                                <div className=''>
                                    <h3 className='m-2 t-color'>Assam University, Silchar</h3>
                                    <h5 className='m-2 t-color'>B.Tech - Electronics and Communication Engineering</h5>
                                    <h6 className='m-2 t-color'>Oct 2020 - May 2024</h6>
                                </div>
                            </div>
                            <div className='project-title mt-3 t-color'>
                                <h6>I am currently pursuing a Bachelor's degree in Electronics and Communication Engineering at Assam University, Silchar.
                                    I have completed 6 semesters and have a CGPA of 7.23.</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row mt-4 justify-content-center align-items-center'>
                    <div className='col-md-6'>
                        <div className='card p-4'>
                            <div className='role d-flex'>
                                <img className='up-board' src='./images/up.svg' />
                                <div className=''>
                                    <h3 className='m-2 t-color'>BHISHAM SINGH I C PIPRA BAGHEL</h3>
                                    <h5 className='m-2 t-color'>Intermediate of Science</h5>
                                    <h6 className='m-2 t-color'>June 2016 - March 2018</h6>
                                </div>
                            </div>
                            <div className='project-title mt-3 t-color'>
                                <h6 className='grade'>Grade: 65.4%</h6>
                            </div>
                            <div className='project-title mt-2 t-color'>
                                <h6>I completed my class 12 high school education at Bhisham Singh I C Pipra Baghel, Deoria, where I studied Science.</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row mt-4 justify-content-center align-items-center'>
                    <div className='col-md-6'>
                        <div className='card p-4'>
                            <div className='role d-flex'>
                                <img className='up-board' src='./images/bihar.jpg' />
                                <div className=''>
                                    <h3 className='m-2 t-color'>Kusaundhi High School, Gopalganj</h3>
                                    <h5 className='m-2 t-color'>Matriculation in science</h5>
                                    <h6 className='m-2 t-color'>March 2014 - April 2016</h6>
                                </div>
                            </div>
                            <div className='project-title mt-3 t-color'>
                                <h6 className='grade'>Grade: 66.6%</h6>
                            </div>
                            <div className='project-title mt-2 t-color'>
                                <h6>I completed my class 10 education at Kusaundhi High School, Gopalganj, where I studied Science.</h6>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education;