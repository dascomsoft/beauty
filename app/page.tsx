import Image from 'next/image';
import face from '../images/face.jpg'
import author from '../images/author.jpg'
import author1 from '../images/author1.jpg'
import author2 from '../images/author2.jpg'
import pixa from '../images/pixar.png'
import pirate from '../images/pirate.png'
import himalaya from '../images/himalaya.png'
import sa from '../images/sa.png'
import south from '../images/south.png'
import Link from 'next/link';
import './page.css';

const page = () => {
    return (
        <div className="home">
            <div className="home-header">
                <div className="container mx-auto px-6">
                    <div className='grid md:grid-cols-2 border-2 border-pink-600'>
                        <div className="home-detail bg-black text-white p-7">
                            <h1 className='font-extrabold text-5xl py-3'>Be Bold <br /> Be Beautiful</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris sceleri sque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.</p>
                            <button className='bg-pink-600 text-white px-12 py-2 mt-4'>See Offers</button>
                        </div>
                        <Image src={face} alt='face picture' className='w-full h-full object-cover' />
                    </div>
                </div>
            </div>
            <div className="section-content">
                <div className="section-container bg-red-100 ">
                    <div className="container mx-auto px-6">
                        <div>
                            <h1 className='font-extrabold text-5xl py-6'>Why Choose Us?</h1>
                            <p>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis </p>
                            <p>leo volutpat. Maecenas sollicitudin est in libero pretium interdum. Nullam volutpat dui sem, ac congue purus </p>
                            <p>hendrerit, id lobortis leo luctus nec. In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui </p>
                            <p>fermentum eros hendrerit, id lobortis leo volutpat. Maecenas sollicitudin est in libero pretium interdum. Nullam </p>
                            <p>volutpat dui sem, ac congue purus hendrerit, id lobortis leo luctus nec.</p>
                        </div>
                        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-14'>
                            <div className="section-detail shadow-xl p-4 bg-slate-50">
                                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="red"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="M14.828 14.828a3.988 3.988 0 0 1-2.02 1.09 4.108 4.108 0 0 1-1.616 0 4.103 4.103 0 0 1-.749-.232 4.161 4.161 0 0 1-.679-.368 4.115 4.115 0 0 1-1.082-1.082l-1.658 1.117c.215.319.462.619.733.889a5.991 5.991 0 0 0 8.485.002c.272-.271.52-.571.734-.891l-1.658-1.117c-.143.211-.307.41-.49.592z"></path><circle cx="8.5" cy="10.5" r="1.5"></circle><path d="M15.5 10c-2 0-2.5 2-2.5 2h5s-.501-2-2.5-2z"></path></svg>
                                <div className='mt-2'>
                                    <h1 className='font-black text-4xl'>+35000</h1>
                                    <p>Happy Clients</p>
                                </div>
                            </div>
                            <div className="section-detail shadow-xl p-4 bg-slate-50">
                                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="red"><path d="M11.42 21.815a1.004 1.004 0 0 0 1.16 0C12.884 21.598 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.996c-.029 6.444 7.116 11.602 7.42 11.819zM12 4c3.309 0 6 2.691 6 6.004.021 4.438-4.388 8.423-6 9.731-1.611-1.308-6.021-5.293-6-9.735 0-3.309 2.691-6 6-6z"></path><path d="M11 14h2v-3h3V9h-3V6h-2v3H8v2h3z"></path></svg>
                                <div className='mt-2'>
                                    <h1 className='font-black text-4xl'>127</h1>
                                    <p>New Locations</p>
                                </div>
                            </div>
                            <div className="section-detail shadow-xl p-4 bg-slate-50">
                                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="red"><circle cx="6" cy="4" r="2"></circle><path d="M9 7H3a1 1 0 0 0-1 1v7h2v7h4v-7h2V8a1 1 0 0 0-1-1z"></path><circle cx="17" cy="4" r="2"></circle><path d="M20.21 7.73a1 1 0 0 0-1-.73h-4.5a1 1 0 0 0-1 .73L12 14h2l-1 4h2v4h4v-4h2l-1-4h2z"></path></svg>
                                <div className='mt-2'>
                                    <h1 className='font-black text-4xl'>+175</h1>
                                    <p>Great Employees</p>
                                </div>
                            </div>
                            <div className="section-detail shadow-xl p-4 bg-slate ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="red"><circle cx="12" cy="6" r="2"></circle><path d="M14 9h-4a1 1 0 0 0-.8.4l-3 4 1.6 1.2L9 13v7h2v-4h2v4h2v-7l1.2 1.6 1.6-1.2-3-4A1 1 0 0 0 14 9z"></path></svg>
                                <div className='mt-2'>
                                    <h1 className='font-black text-4xl'>56K</h1>
                                    <p>Instagram Followers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="service-content">
                    <div className="service-container text-white bg-pink-600">
                        <div className="container mx-auto px-4">
                            <h1 className='font-extrabold text-6xl mb-20 text-white text-center'>Our Services</h1>
                            <div className="service-description grid md:grid-cols-2 lg:grid-cols-3 gap-14">
                                <div className="section-detail shadow-xl p-4 bg-pink-600">
                                    <svg fill="white" width="60px" height="60px" viewBox="0 0 50 50" version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" overflow="inherit"><path d="M42.233 25.31c.347-.427 1.058-.918 1.579-1.09l4.294-1.753c.492-.247.894-.899.894-1.448v-12.249c0-.55-.421-1.16-.935-1.355 0 0-8.983-3.415-15.001-3.415-5.6 0-13.342 2.953-13.342 2.953-.514.196-1.381.411-1.927.479l-15.802 1.698c-.546.067-.993.572-.993 1.122v8.314c0 .55.442 1.083.983 1.184l15.795 2.549c.542.09 1.405.33 1.916.533l10.817 2.767c.543.082 1.136.574 1.315 1.095l6.359 18.361c.18.521.754.802 1.275.627l6.723-2.261c.521-.175.801-.743.621-1.264l-4.414-12.733c-.18-.521-.332-.976-.339-1.013l-.008-.038c-.529-2.174.19-3.063.19-3.063zm-7.674-6.609c-2.51 0-4.537-2-4.537-4.465 0-2.466 2.027-4.465 4.537-4.465 2.502 0 4.535 2 4.535 4.465s-2.033 4.465-4.535 4.465z" /></svg>
                                    <div className='mt-2 text-white'>
                                        <h1 className='font-black text-4xl'>Hair Dressing</h1>
                                        <p>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.</p>
                                    </div>
                                </div>
                                <div className="section-detail shadow-lg p-4">
                                    <svg fill="white" width="60px" height="60px" viewBox="0 0 50 50" version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" overflow="inherit"><path d="M47.231 41h-16.231v4h16.397c1.348 0 1.603-1.175 1.603-1.175v-.97s-.012-1.855-1.769-1.855zm-2.245-.79c2.214 0 4.014-1.802 4.014-4.022 0-2.227-1.8-4.023-4.014-4.023-2.211 0-4.006 1.797-4.006 4.023 0 2.219 1.795 4.022 4.006 4.022zm-8.454-.21c2.106 0 3.8-1.484 3.8-3.587-.001-2.099-1.701-3.2-3.791-3.216l-5.541.702v6.101h5.532zm-18.009-26.067c2.459 0 4.448-2 4.448-4.467 0-2.467-1.989-4.466-4.448-4.466-2.457 0-4.449 1.999-4.449 4.466s1.992 4.467 4.449 4.467zm-4.542 14.456l-.04-.058-2.016-4.694-.003 9.363h6.025l1.316-1.4-3.569-1.374c-.846-.318-1.447-1.038-1.713-1.837zm1.277-.421c.195.438.556.793 1.01.956l6.877 2.549c.88.389 1.908-.015 2.294-.898.386-.889-.015-1.924-.896-2.311l-6.345-2.396-1.96-4.701 1.278-.476 1.661 4.028 4.823 1.788v-4.922l2.56 1.523 1.276 6.428c.313.918 1.304 1.401 2.218 1.084.905-.314 1.386-1.315 1.075-2.229l-1.43-6.191c-.094-.347-.293-.65-.562-.877-.733-.812-4.44-4.957-4.704-5.234-.387-.388-1.272-1.089-2.944-1.089h-6c-3.41 0-4.066 3.48-3.369 5.25l3.138 7.718zm14.742 6.032h-27.033c-.984 0-1.967.555-1.967 1.776v9.224h29v-11z" /></svg>
                                    <div className='mt-2 text-white'>
                                        <h1 className='font-black text-4xl'>Zen Massage</h1>
                                        <p>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.</p>
                                    </div>
                                </div>
                                <div className="section-detail shadow-lg p-4">
                                    <svg fill="white" width="60px" height="60px" viewBox="0 0 50 50" version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" overflow="inherit"><path d="M34.781 6.664h-6.951c-1.256.004-1.209 1.876 0 1.865h6.951v.957h-6.951c-1.249-.011-1.203 1.86 0 1.865h6.951v.978h-6.951c-1.249 0-1.203 1.87 0 1.865h6.951v.932h-6.951c-1.223.009-1.203 1.881 0 1.887h6.951v.934h-6.951c-1.223-.004-1.228 1.865 0 1.865h6.951v.932h-6.951c-1.223.004-1.228 1.875 0 1.866h6.951v.955h-6.951c-1.223-.011-1.228 1.858 0 1.865h6.951v.93h-6.951c-1.223-.001-1.203 1.872 0 1.866h6.951v18.159c.004 2.767 4.207 2.717 4.219 0v-42.495c-.012-1.264-1.05-2.862-2.758-2.867h-8.412c-1.256.001-1.209 1.873 0 1.865l6.951.023v.93h-6.951c-1.254-.006-1.207 1.865 0 1.866h6.951v.957zm-7.429 32.194c-.004-3.23-3.352-6.704-7.352-4.454v-12.354l-2.587-20.375c-.054-.539-.511-.666-.818-.675-.317.009-.952.136-1.021.675l-2.574 20.375v12.354c-4-2.25-7.24 1.246-7.241 4.429.001 2.832 2.181 5.158 5.131 5.151 2.972.007 5.11-2.6 5.11-5.151v-12.833h1v12.833c0 2.856 2.212 4.97 4.67 5.104-.041 1.566.47 3.8 1.432 4.686 1.128 1.04 2.471-.29 1.92-1.373-.532-1.008-1.054-1.605-.63-3.806 1.772-.82 2.956-2.546 2.96-4.586zm-16.348 2.541c-1.396-.009-2.524-1.141-2.526-2.541.002-1.399 1.13-2.536 2.526-2.544 1.386.008 2.515 1.145 2.525 2.544-.01 1.401-1.139 2.533-2.525 2.541zm8.571-2.541c.009-1.399 1.136-2.536 2.526-2.544 1.392.008 2.521 1.145 2.525 2.544-.004 1.4-1.132 2.532-2.525 2.541-1.39-.008-2.518-1.14-2.526-2.541z" /></svg>
                                    <div className='mt-2'>
                                        <h1 className='font-black text-4xl'>Manicure & Pedicure</h1>
                                        <p>Scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat. Maecenas sollicitudin </p>
                                    </div>
                                </div>
                                <div className="section-detail shadow-lg p-4 bg-pink-600">
                                    <svg fill="white" width="60px" height="60px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">

                                        <title />

                                        <g data-name="Layer 2" id="Layer_2">

                                            <path d="M16,22a6.51,6.51,0,0,0,6.5-6.5v-5a6.5,6.5,0,0,0-13,0v5A6.51,6.51,0,0,0,16,22ZM11.5,10.5a4.5,4.5,0,0,1,9,0v5a4.5,4.5,0,0,1-9,0Z" />

                                            <path d="M30,26H29V15.5A3.5,3.5,0,0,0,25.5,12V10.5a9.5,9.5,0,0,0-19,0V12A3.5,3.5,0,0,0,3,15.5V26H2a1,1,0,0,0-1,1v3a1,1,0,0,0,1,1H30a1,1,0,0,0,1-1V27A1,1,0,0,0,30,26ZM8.5,10.5a7.5,7.5,0,0,1,15,0v5a7.5,7.5,0,0,1-15,0ZM5,15.5A1.5,1.5,0,0,1,6.5,14v1.5a9.5,9.5,0,0,0,19,0V14A1.5,1.5,0,0,1,27,15.5V26H5ZM29,29H3V28H29Z" />

                                        </g>

                                    </svg>
                                    <div className='mt-2 text-white'>
                                        <h1 className='font-black text-4xl'>Make Up</h1>
                                        <p>Scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat. Maecenas sollicitudin </p>
                                    </div>
                                </div>
                                <div className="section-detail shadow-lg p-4">
                                    <svg fill="white" width="60px" height="60px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7,12.5a3,3,0,1,0-3-3A3,3,0,0,0,7,12.5Zm0-4a1,1,0,1,1-1,1A1,1,0,0,1,7,8.5Zm13-2H12a1,1,0,0,0-1,1v6H3v-8a1,1,0,0,0-2,0v13a1,1,0,0,0,2,0v-3H21v3a1,1,0,0,0,2,0v-9A3,3,0,0,0,20,6.5Zm1,7H13v-5h7a1,1,0,0,1,1,1Z" /></svg>
                                    <div className='mt-2 text-white'>
                                        <h1 className='font-black text-4xl'>Tanning Bed</h1>
                                        <p>Scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat. Maecenas sollicitudin </p>
                                    </div>
                                </div>
                                <div className="section-detail shadow-lg p-4">

                                    <svg fill="white" width="60px" height="60px" viewBox="-6 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                        <title>spa</title>
                                        <path d="M16.5 16.063l-0.438 0.594c1.438 0.5 2.406 1.438 2.406 2.813 0 2.531-3.656 4.438-8.469 4.438s-8.469-1.906-8.469-4.438c0-1.375 0.969-2.313 2.406-2.813l-0.438-0.594c-2.094 0.5-3.5 1.938-3.5 3.938 0 3.219 4.188 5.844 10 5.844 5.75 0 10-2.594 10-5.844 0-2-1.406-3.438-3.5-3.938zM4.625 20.531l0.625 0.406c1.781-1.125 2.219-2.406 2.219-4 0-0.813-0.344-1.969-0.969-3.094-0.656-1.125-1.063-2.281-1.063-3.156 0-0.906 0.406-1.875 1.469-2.75l-0.625-0.406c-1.813 1.156-2.219 2.563-2.219 3.969 0 0.844 0.344 2 1 3.094 0.625 1.125 1.063 2.281 1.063 3.156s-0.406 1.906-1.5 2.781zM8.594 21.5l0.656 0.344c1.813-1.219 2.375-2.75 2.375-4.531 0-0.938-0.375-2.219-1.031-3.5s-1.031-2.531-1.031-3.563c0-1.063 0.5-2.281 1.625-3.281l-0.688-0.375c-1.906 1.313-2.375 2.938-2.375 4.563 0 0.938 0.375 2.25 1.031 3.5 0.656 1.281 1.063 2.5 1.063 3.563s-0.531 2.25-1.625 3.281zM12.938 20.531l0.625 0.406c1.781-1.125 2.188-2.406 2.188-4 0-0.813-0.313-1.969-0.969-3.094-0.625-1.125-1.063-2.281-1.063-3.156 0-0.906 0.438-1.906 1.5-2.781l-0.625-0.375c-1.844 1.156-2.219 2.563-2.219 3.969 0 0.844 0.313 2 0.969 3.094 0.656 1.125 1.063 2.281 1.063 3.156s-0.406 1.906-1.469 2.781z"></path>
                                    </svg>
                                    <div className='mt-2 text-white'>
                                        <h1 className='font-black text-4xl'>Spa Treatment</h1>
                                        <p>Scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat. Maecenas sollicitudin </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="testimony-container">
                <div className="testimony-content">
                    <div className="container mx-auto px-4">
                        <div className='mb-20'>
                            <h2 className='text-yellow-400 text-3xl'>Clients Feedback</h2>
                            <h1 className='text-5xl font-black'>Clients Testimonies</h1>
                        </div>
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="testimony-review shadow-lg p-8 bg-slate-50">
                                <Image src={author} className='rounded-full' width={70} height={70} alt='pic author' />
                                <div className="testimony-text">
                                    <h2 className='font-bold text-xl'>Tiffany Lea</h2>
                                    <div className='flex'>
                                        <svg fill="orange" width="20px" height="20px" viewBox="0 -19 550 550" xmlns="http://www.w3.org/2000/svg">
                                            <title>star</title>
                                            <path d="M181 286L64 188 218 176 275 30 333 176 486 188 369 286 407 436 275 354 144 440 181 286Z" />
                                        </svg>
                                        <svg fill="orange" width="20px" height="20px" viewBox="0 -19 550 550" xmlns="http://www.w3.org/2000/svg">
                                            <title>star</title>
                                            <path d="M181 286L64 188 218 176 275 30 333 176 486 188 369 286 407 436 275 354 144 440 181 286Z" />
                                        </svg>
                                        <svg fill="orange" width="20px" height="20px" viewBox="0 -19 550 550" xmlns="http://www.w3.org/2000/svg">
                                            <title>star</title>
                                            <path d="M181 286L64 188 218 176 275 30 333 176 486 188 369 286 407 436 275 354 144 440 181 286Z" />
                                        </svg>
                                        <svg fill="orange" width="20px" height="20px" viewBox="0 -19 550 550" xmlns="http://www.w3.org/2000/svg">
                                            <title>star</title>
                                            <path d="M181 286L64 188 218 176 275 30 333 176 486 188 369 286 407 436 275 354 144 440 181 286Z" />
                                        </svg>
                                    </div>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae cupiditate, veniam enim quis rerum laboriosam repudiandae ipsam optio tenetur sint deserunt at itaque est. Reiciendis aspernatur debitis soluta inventore ex?</p>
                                </div>
                            </div>
                            <div className="testimony-review shadow-lg p-8 bg-slate-50">
                                <Image src={author1} className='rounded-full' width={70} height={70} alt='pic author' />
                                <div className="testimony-text">
                                    <h2 className='font-bold text-xl'>Angela Parker</h2>
                                    <div className='flex'>
                                        <svg fill="orange" width="20px" height="20px" viewBox="0 -19 550 550" xmlns="http://www.w3.org/2000/svg">
                                            <title>star</title>
                                            <path d="M181 286L64 188 218 176 275 30 333 176 486 188 369 286 407 436 275 354 144 440 181 286Z" />
                                        </svg>
                                        <svg fill="orange" width="20px" height="20px" viewBox="0 -19 550 550" xmlns="http://www.w3.org/2000/svg">
                                            <title>star</title>
                                            <path d="M181 286L64 188 218 176 275 30 333 176 486 188 369 286 407 436 275 354 144 440 181 286Z" />
                                        </svg>
                                        <svg fill="orange" width="20px" height="20px" viewBox="0 -19 550 550" xmlns="http://www.w3.org/2000/svg">
                                            <title>star</title>
                                            <path d="M181 286L64 188 218 176 275 30 333 176 486 188 369 286 407 436 275 354 144 440 181 286Z" />
                                        </svg>
                                        <svg fill="orange" width="20px" height="20px" viewBox="0 -19 550 550" xmlns="http://www.w3.org/2000/svg">
                                            <title>star</title>
                                            <path d="M181 286L64 188 218 176 275 30 333 176 486 188 369 286 407 436 275 354 144 440 181 286Z" />
                                        </svg>
                                    </div>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae cupiditate, veniam enim quis rerum laboriosam repudiandae ipsam optio tenetur sint deserunt at itaque est. Reiciendis aspernatur debitis soluta inventore ex?</p>
                                </div>
                            </div>
                            <div className="testimony-review shadow-lg p-8 bg-slate-50">
                                <Image src={author2} className='rounded-full' width={70} height={70} alt='pic author' />
                                <div className="testimony-text">
                                    <h2 className='font-bold text-xl'>Monica Judith</h2>
                                    <div className='flex'>
                                        <svg fill="orange" width="20px" height="20px" viewBox="0 -19 550 550" xmlns="http://www.w3.org/2000/svg">
                                            <title>star</title>
                                            <path d="M181 286L64 188 218 176 275 30 333 176 486 188 369 286 407 436 275 354 144 440 181 286Z" />
                                        </svg>
                                        <svg fill="orange" width="20px" height="20px" viewBox="0 -19 550 550" xmlns="http://www.w3.org/2000/svg">
                                            <title>star</title>
                                            <path d="M181 286L64 188 218 176 275 30 333 176 486 188 369 286 407 436 275 354 144 440 181 286Z" />
                                        </svg>
                                        <svg fill="orange" width="20px" height="20px" viewBox="0 -19 550 550" xmlns="http://www.w3.org/2000/svg">
                                            <title>star</title>
                                            <path d="M181 286L64 188 218 176 275 30 333 176 486 188 369 286 407 436 275 354 144 440 181 286Z" />
                                        </svg>
                                        <svg fill="orange" width="20px" height="20px" viewBox="0 -19 550 550" xmlns="http://www.w3.org/2000/svg">
                                            <title>star</title>
                                            <path d="M181 286L64 188 218 176 275 30 333 176 486 188 369 286 407 436 275 354 144 440 181 286Z" />
                                        </svg>
                                    </div>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae cupiditate, veniam enim quis rerum laboriosam repudiandae ipsam optio tenetur sint deserunt at itaque est. Reiciendis aspernatur debitis soluta inventore ex?</p>
                                </div>
                            </div>
                            <div className="testimony-review shadow-lg p-8 bg-white">
                                <Image src={author} className='rounded-full' width={70} height={70} alt='pic author' />
                                <div className="testimony-text">
                                    <h2 className='font-bold text-xl'>Kim Nilson</h2>
                                    <div className='flex'>
                                        <svg fill="orange" width="20px" height="20px" viewBox="0 -19 550 550" xmlns="http://www.w3.org/2000/svg">
                                            <title>star</title>
                                            <path d="M181 286L64 188 218 176 275 30 333 176 486 188 369 286 407 436 275 354 144 440 181 286Z" />
                                        </svg>
                                        <svg fill="orange" width="20px" height="20px" viewBox="0 -19 550 550" xmlns="http://www.w3.org/2000/svg">
                                            <title>star</title>
                                            <path d="M181 286L64 188 218 176 275 30 333 176 486 188 369 286 407 436 275 354 144 440 181 286Z" />
                                        </svg>
                                        <svg fill="orange" width="20px" height="20px" viewBox="0 -19 550 550" xmlns="http://www.w3.org/2000/svg">
                                            <title>star</title>
                                            <path d="M181 286L64 188 218 176 275 30 333 176 486 188 369 286 407 436 275 354 144 440 181 286Z" />
                                        </svg>
                                        <svg fill="orange" width="20px" height="20px" viewBox="0 -19 550 550" xmlns="http://www.w3.org/2000/svg">
                                            <title>star</title>
                                            <path d="M181 286L64 188 218 176 275 30 333 176 486 188 369 286 407 436 275 354 144 440 181 286Z" />
                                        </svg>
                                    </div>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae cupiditate, veniam enim quis rerum laboriosam repudiandae ipsam optio tenetur sint deserunt at itaque est. Reiciendis aspernatur debitis soluta inventore ex?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="subscribe-container">
                <div className="container mx-auto px-4">
                    <div className='text-center py-20'>
                        <h1>Our Pricing</h1>
                        <h3 className="text-5xl font-black text-pink-900">Get Our Package Pricing</h3>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-3">
                        <div className="shadow  border-2 border-slate-200 cursor-pointer transition duration-700 ease-in-out hover:-translate-y-4">
                            <div className='bg-slate-800 text-white p-7'>
                                <h3 className='py-2'>Basic Plan</h3>
                                <h6><span className='font-bold text-3xl'>$130</span>/Month</h6>
                            </div>
                            <div className='p-7 leading-10'>
                                <p>Quam adipiscing vitae proin</p>
                                <p>Quam adipiscing vitae proin</p>
                                <p>Quam adipiscing vitae proin</p>
                                <p>Quam adipiscing vitae proin</p>
                                <p>Massa ultricies mi quis hendrerit</p>
                                <br />
                                <Link href="/book" className='rounded-full w-full block text-center py-1  py-2 border-2 border-slate-400 hover:bg-green-700 hover:border-transparent hover:text-white'>Book Now</Link>
                            </div>
                        </div>
                        <div className="shadow border-2 border-slate-200  cursor-pointer transition duration-700 ease-in-out hover:-translate-y-4">
                            <div className='bg-amber-950 text-white p-7'>
                                <h3 className='py-2'>Couple Plan</h3>
                                <h6><span className='font-bold text-3xl'>$150</span>/Month</h6>
                            </div>
                            <div className='p-7 leading-10 rounded-lg'>
                                <p>Quam adipiscing vitae proin</p>
                                <p>Quam adipiscing vitae proin</p>
                                <p>Quam adipiscing vitae proin</p>
                                <p>Quam adipiscing vitae proin</p>
                                <p>Massa ultricies mi quis hendrerit</p>
                                <br />
                                <Link href="/book" className='rounded-full w-full block text-center  py-1 border-2 border-slate-400 hover:bg-green-700 hover:border-transparent hover:text-white'>Book Now</Link>
                            </div>
                        </div>
                        <div className="shadow  border-2 border-slate-200 cursor-pointer transition duration-700 ease-in-out hover:-translate-y-7 ">
                            <div className='bg-teal-900 text-white p-7'>
                                <h3 className='py-2'>Business Plan</h3>
                                <h6><span className='font-bold text-3xl'>$200</span>/Month</h6>
                            </div>
                            <div className='p-7 leading-10'>
                                <p>Quam adipiscing vitae proin</p>
                                <p>Quam adipiscing vitae proin</p>
                                <p>Quam adipiscing vitae proin</p>
                                <p>Quam adipiscing vitae proin</p>
                                <p>Massa ultricies mi quis hendrerit</p>
                                <br />
                                <Link href="/book" className='rounded-full w-full block text-center py-1 border-2 border-slate-400 hover:bg-green-700 hover:border-transparent hover:text-white'>Book Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="partners">
                <div className="partners-container">
                    <div className="grid md:grid-cols-2 lg:grid-cols-5">
                        <Image src={pixa} alt='pixa picture' />
                        <Image src={pirate} alt='pixa picture' />
                        <Image src={himalaya} alt='pixa picture' />
                        <Image src={sa} alt='pixa picture' />
                        <Image src={south} alt='pixa picture' />
                    </div>
                </div>
            </div>
        </div>


    )
}

export default page