import React from 'react'
import { IoLogoHtml5 } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io";
import { FaBootstrap } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";
import { SiPostman } from "react-icons/si";
import { FaRegCopyright } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa6";
import { FaJava } from "react-icons/fa6";

const Skills = () => {
    return (
        <>
            <div className='container-fluide skills' id='skills'>
                <div className='container p-5'>
                    <div className='row'>
                        <div className='col'>
                            <h1 className='text-center' style={{ color: 'white' }}>Skills</h1>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <h3 className='text-center' style={{ color: 'white' }}>Here are some of my skills on which I have been working on for the</h3>
                            <h3 className='text-center' style={{ color: 'white' }}>past 2 years.</h3>
                        </div>
                    </div>
                    <div className='row mt-4 justify-content-center align-items-center'>
                        <div className='col-md-5'>
                            <div className='card p-4'>
                                <h2 className='text-center mb-3'>Frontend</h2>
                                <div className='row'>
                                    <div className='col d-flex flex-wrap justify-content-center align-items-center'>
                                        <h3 className='skill-items m-2'><FaReact style={{ color: '#61dbfb' }} />React Js</h3>
                                        <h3 className='skill-items m-2' ><IoLogoHtml5 style={{ color: '#e34c26' }} />HTML</h3>
                                        <h3 className='skill-items m-2'><IoLogoCss3 style={{ color: '#264de4' }} />CSS</h3>
                                        <h3 className='skill-items m-2'><IoLogoJavascript style={{ color: 'orange' }} />Javascript</h3>
                                        <h3 className='skill-items m-2'><FaBootstrap style={{ color: '#6528e0' }} />Bootstrap</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-5'>
                            <div className='card p-4'>
                                <h2 className='text-center'>Backend</h2>
                                <div className='row'>
                                    <div className='col d-flex flex-wrap justify-content-center align-items-center'>
                                        <h3 className='skill-items m-2'><FaNodeJs style={{ color: '#3c873a' }} />Node Js</h3>
                                        <h3 className='skill-items m-2'><SiExpress style={{ color: '#68a063' }} />Express Js</h3>
                                        <h3 className='skill-items m-2'><SiMongodb style={{ color: '#4DB33D' }} />MongoDB</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row mt-4 justify-content-center align-items-center'>
                        <div className='col-md-5'>
                            <div className='card p-4'>
                                <h2 className='text-center'>Programming</h2>
                                <div className='row'>
                                    <div className='col d-flex flex-wrap justify-content-center align-items-center'>
                                        <h3 className='skill-items m-2'>C</h3>
                                        <h3 className='skill-items m-2'>C++</h3>
                                        {/* <h3 className='skill-items m-2'><FaJava style={{ color: 'orange' }} />Java</h3> */}
                                        <h3 className='skill-items m-2'><FaDatabase style={{ color: '#fafbfc' }} />DSA</h3>
                                        <h3 className='skill-items m-2'><IoLogoJavascript style={{ color: 'orange' }} />Javascript</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-5'>
                            <div className='card p-4'>
                                <h2 className='text-center'>Other</h2>
                                <div className='row'>
                                    <div className='col d-flex flex-wrap justify-content-center align-items-center'>
                                        <h3 className='skill-items m-2'><FaGitAlt style={{ color: '#F1502F' }} />Git</h3>
                                        <h3 className='skill-items m-2'><FaGithub style={{ color: '#2b3137' }} />GitHub</h3>
                                        <h3 className='skill-items m-2'><TbBrandVscode style={{ color: 'rgb(37, 37, 160)' }} />VS Code</h3>
                                        <h3 className='skill-items m-2'><SiPostman style={{ color: 'orange' }} />Postman</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills;