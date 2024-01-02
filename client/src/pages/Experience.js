import React from 'react'

const Experience = () => {
    return (
        <div className='container-fluide experience' id='experience'>
            <div className='container p-5'>
                <div className='row'>
                    <div className='col'>
                        <h1 className='text-center' style={{ color: 'white' }}>Experience</h1>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <h3 className='text-center' style={{ color: 'white' }}>My work experience as a software engineer and Coder.</h3>
                    </div>
                </div>
                <div className='row mt-4 justify-content-center align-items-center'>
                    <div className='col-md-6'>
                        <div className='card p-4'>
                            <div className='role d-flex'>
                                <img className='intern-pic' src='./images/yaag.jpg' />
                                <div className=''>
                                    <h3 className='m-2 t-color'>Full Stack & ML Application</h3>
                                    <h5 className='m-2 t-color'>Yaag Udyog Pvt. Ltd.</h5>
                                    <h6 className='m-2 t-color'>1 june 2023 - 30 june 2023</h6>
                                </div>
                            </div>
                            <div className='project-title mt-3 t-color'>
                                <h6>Project Title: Development of Data Collection System for ML Applications</h6>
                            </div>
                            <div className='skill t-color mt-2'>
                                <h6>Skills: • React Js • Node Js •Express • Javascript • CSS • HTML • Bootstrap</h6>
                                <h6 className='ms-5'>• MongoDB • ML • Keras</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row mt-4 justify-content-center align-items-center'>
                    <div className='col-md-6'>
                        <div className='card p-4'>
                            <div className='role d-flex'>
                                <img className='code-pic' src='./images/code.jpg' />

                                <div className=''>
                                    <h3 className='m-2 t-color'>As a Programmer</h3>
                                    <h4 className='m-2 t-color'>I have solved 500+ Problems on Various Coding Platform</h4>
                                    <h5 className='m-2 t-color'>• At highest rating on codechef (1580) <a className='ms-2' href='https://www.codechef.com/users/samir_78' target='_blank'>Link</a></h5>
                                    <h5 className='m-2 t-color'>• 5⭐ at HakerRank <a className='ms-2' href='https://www.hackerrank.com/profile/samiralam5533' target='_blank'>Link</a></h5>
                                    <h5 className='m-2 t-color'>• 50+ on GeeksforGeeks <a className='ms-2' href='https://auth.geeksforgeeks.org/user/samiralam5533/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user' target='_blank'>Link</a></h5>
                                    <h5 className='m-2 t-color'>• 50+ on LeetCode <a className='ms-2' href='https://leetcode.com/samir_76/' target='_blank'>Link</a></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;