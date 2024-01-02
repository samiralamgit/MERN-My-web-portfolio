import React from 'react'

const Project = () => {
    return (
        <div className='container-fluide project' id='project'>
            <div className='container p-5'>
                <div className='row'>
                    <div className='col'>
                        <h1 className='text-center' style={{ color: 'white' }}>Project</h1>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <h3 className='text-center' style={{ color: 'white' }}>I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.</h3>
                    </div>
                </div>
                <div className='row mt-4 justify-content-center align-items-center'>
                    <div className='col-md-4'>
                        <div className='card'>
                            <div className='project-img'>
                                <img src='./images/Ecomm.png' />
                            </div>
                            <div className='row p-2'>
                                <div className='col technologies d-flex flex-wrap'>
                                    <h6 className='tech-use'>Node Js</h6>
                                    <h6 className='tech-use'>React Js</h6>
                                    <h6 className='tech-use'>Express Js</h6>
                                    <h6 className='tech-use'>Bootstrap</h6>
                                    <h6 className='tech-use'>Mongoose</h6>
                                    <h6 className='tech-use'>APIs</h6>
                                    <h6 className='tech-use'>CSS</h6>
                                    <h6 className='tech-use'>Jason Web Token</h6>
                                </div>
                            </div>
                            <h3 className='ms-2'>Ecommerce Web App</h3>
                            <h6 className='ms-2 t-color'>16 oct - 20 Nov 2023<a className='ms-5' href='https://calm-pink-beaver-coat.cyclic.app/' target='_blank'>Link</a></h6>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='card'>
                            <div className='project-img'>
                                <img src='./images/portfolio.png' />
                            </div>
                            <div className='row p-2'>
                                <div className='col technologies d-flex flex-wrap justify-content-center align-items-center'>
                                    <h6 className='tech-use'>Node Js</h6>
                                    <h6 className='tech-use'>React Js</h6>
                                    <h6 className='tech-use'>Express Js</h6>
                                    <h6 className='tech-use'>CSS</h6>
                                    <h6 className='tech-use'>Bootstrap</h6>
                                </div>
                            </div>
                            <h3 className='ms-2'>MERN Portfolio</h3>
                            <h6 className='ms-2 t-color'>16 oct - 20 Nov 2023<a className='ms-5' href='https://mern-portfolia-app.onrender.com' target='_blank'>Link</a></h6>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='card'>
                            <div className='project-img'>
                                <img src='./images/music.png' />
                            </div>
                            <div className='row p-2'>
                                <div className='col technologies d-flex flex-wrap justify-content-center align-items-center'>
                                    <h6 className='tech-use'>HTML</h6>
                                    <h6 className='tech-use'>CSS</h6>
                                    <h6 className='tech-use'>Javascript</h6>
                                </div>
                            </div>
                            <h3 className='ms-2'>Web Music Player</h3>
                            <h6 className='ms-2 t-color'>16 jun - 30 jun 2023<a className='ms-5' href='https://github.com/samiralamgit/Music-Player' target='_blank'>Link</a></h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project