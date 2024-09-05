
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import './blog.css'
import gall1 from '../../images/gallery-1.jpg'
import gall3 from '../../images/gallery-3.jpg'
import gall4 from '../../images/gallery-4.jpg'
import gall5 from '../../images/gallery-5.jpg'
import author from '../../images/author.jpg'
import gall6 from '../../images/gallery-6.jpg'
import gall7 from '../../images/gallery-7.jpg'
import blog1 from '../../images/blog-list1.jpg'
import blog2 from '../../images/blog-list2.jpg'
import blog3 from '../../images/blog-list3.jpg'
import productadd from '../../images/product-add.jpg'
import insta1 from '../../images/insta-1.jpg'
import insta2 from '../../images/insta-2.jpg'
import insta3 from '../../images/insta-3.jpg'
import insta4 from '../../images/insta-4.jpg'
import insta5 from '../../images/insta-5.jpg'



function blog() {
    return (
        <div>
            <div className="blog-section  bg-stone-100 text-black">
                <div className="about-header">
                    <div className="container mx-auto px-4">
                        <div className="about-content text-white">
                            <h2 className='xl: text-2xl sm:text-2xl md:text-4xl  lg:text-6xl font-bold '>Radiance & <span className='text-pink-500'>Style:</span>The Ultimate <br /> Beauty Salon Guide</h2>
                            <p className='py-[3rem]'>Lorem ipsum dolor sit amet, consectetur adipiscingDonec malesuada lorem.<br />
                                maximus mauris sceleri sque, at rutrum nulla  dictum. Ut ac ligula .<br />
                                sapien cursus faucibus finibus.</p>
                            <br />
                            <Link href="/pricing" className='px-14 py-4 border-none text-xl font-bold rounded-full bg-pink-500 transition duration-700 ease-in-out  hover:bg-white  hover:text-black '>View our offers</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="blog-section py-[6rem] bg-white text-black">
                <div className="container mx-auto px-4">
                    <div className="blog-content grid md:grid-cols-2 gap-10">
                        <div className="blog-pictures-content">
                            <div className="blog-1">
                                <div className="blog-detail">
                                    <Image src={blog1} alt='blog picture' className="w-full" />
                                    <div className="blog-text bg-stone-100 p-10">
                                        <h2 className="text-2xl font-semibold py-9">Winter is for Multi-Masking</h2>
                                        <p>Passion is the driving force behind our gym team members. They have a genuine love for fitness and a deep-rooted desire to inspire and motivate others. Their contagious enthusiasm creates a positive and energizing atmosphere within our gym</p>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-2">
                                <div className="blog-detail">
                                    <Image src={blog2} alt='blog picture' />
                                    <div className="blog-text bg-stone-100 p-10">
                                        <h2 className="text-2xl font-semibold py-9">What is TikTok's Wet Mop Haircut?</h2>
                                        <p>Passion is the driving force behind our gym team members. They have a genuine love for fitness and a deep-rooted desire to inspire and motivate others. Their contagious enthusiasm creates a positive and energizing atmosphere within our gym</p>
                                    </div>
                                </div>

                            </div>
                            <div className="blog-3">
                                <div className="blog-detail">
                                    <Image src={blog3} alt='blog picture' />
                                    <div className="blog-text bg-stone-100 p-10">
                                      
                                        <h2 className="text-2xl font-semibold py-9">Tips for Cutting a Mod Bixie</h2>
                                        <p>Passion is the driving force behind our gym team members. They have a genuine love for fitness and a deep-rooted desire to inspire and motivate others. Their contagious enthusiasm creates a positive and energizing atmosphere within our gym</p>
                                    </div>
                                </div>
                                <div className="blog-post">
                                </div>
                            </div>
                            <div className="blog-4">
                                <div className="blog-detail">
                                    <Image src={gall1} alt='blog picture' />
                                    <div className="blog-text bg-stone-100 p-10">
                                        <h2 className="text-2xl font-semibold py-9">Winter is for Multi-Masking</h2>
                                        <p>Passion is the driving force behind our gym team members. They have a genuine love for fitness and a deep-rooted desire to inspire and motivate others. Their contagious enthusiasm creates a positive and energizing atmosphere within our gym</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="blog-descrtion">
                            <div className="blog-post">
                                <h1 className="text-xl font-semibold mb-6">Recents Post</h1>
                                <div className="flex flex-col gap-4  bg-stone-100 p-4 max-w-[300px]">
                                    <div className="flex gap-4">
                                        <Image src={gall1} alt="picture" className="rounded-xl" width={80} height={80} />
                                        <div className="text hover:text-red-600 cursor-pointer">
                                            <h3>NAILS CARE</h3>
                                            <h3>Taking care of our nails</h3>
                                            <p className="text-red-500">25 AUG ,2080</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <Image src={gall3} alt="picture" className="rounded-xl" width={80} height={80} />
                                        <div className="hover:text-red-600 cursor-pointer text">
                                            <h3>MASSAGE OUR BODY</h3>
                                            <h3>Nice massage</h3>
                                            <p className="text-red-500">4 SEPT ,2050</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <Image src={gall4} alt="picture" className="rounded-xl" width={80} height={80} />
                                        <div className="hover:text-red-600 cursor-pointer text">
                                            <h3>FEETH CARE</h3>
                                            <h3>Import for our health</h3>
                                            <p className="text-red-500">5 APRIL ,2050</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="category mt-10  bg-stone-100 p-4 max-w-[300px]">
                                    <h1 className="text-xl font-semibold mb-3">Categories</h1>
                                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-3">
                                        <p className="shadow-lg p-3 bg-pink-500 text-white hover:text-black cursor-pointer">Pedicure</p>
                                        <p className="shadow-lg p-3 text-white bg-pink-500 hover:text-black cursor-pointer">Manicure</p>
                                        <p className="shadow-lg p-3 text-white bg-pink-500 hover:text-black cursor-pointer">MakeUp</p>
                                        <p className="shadow-lg p-3 text-white bg-pink-500 hover:text-black cursor-pointer">Massage</p>
                                        <p className="shadow-lg p-3 text-white bg-pink-500 hover:text-black cursor-pointer">HairCut</p>
                                        <p className="shadow-lg p-3 text-white bg-pink-500 hover:text-black cursor-pointer">Painting</p>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-post">
                                <div className="bg-stone-100 p-4 max-w-[300px]">
                                    <h1 className="text-xl font-semibold mb-6">Popular Tags</h1>
                                    <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                                        <p className="shadow-lg p-3 hover:text-red-600 cursor-pointer">#Hair</p>
                                        <p className="shadow-lg p-3 hover:text-red-600 cursor-pointer">#Pedicure</p>
                                        <p className="shadow-lg p-3 hover:text-red-600 cursor-pointer">#Manicure</p>
                                        <p className="shadow-lg p-3 hover:text-red-600 cursor-pointer">#HairCut</p>
                                        <p className=" shadow-lg p-3 hover:text-red-600 cursor-pointer">#MakeUp</p>
                                        <p className="shadow-lg p-3 hover:text-red-600 cursor-pointer">#Massage</p>
                                        <p className="shadow-lg p-3 hover:text-red-600 cursor-pointer">#Spa</p>
                                        <p className="shadow-lg p-3 hover:text-red-600 cursor-pointer">#Painting</p>
                                        <p className="shadow-lg p-3 hover:text-red-600 cursor-pointer">#HairCare</p>
                                        <p className="shadow-lg p-3 hover:text-red-600 cursor-pointer">#NailsCare</p>

                                    </div>
                                </div>
                                <div className="bg-stone-100 p-4 max-w-[300px]">
                                    <h1 className="text-xl font-semibold mb-6">Project Gallery</h1>
                                    <div className="grid grid-cols-3 md:grid-cols-3 gap-2 ">
                                        <Image src={gall6} alt='picture' width={80} height={80} />
                                        <Image src={gall7} alt='picture' width={80} height={80} />
                                        <Image src={insta1} alt='picture' width={80} height={80} />
                                        <Image src={insta2} alt='picture' width={80} height={80} />
                                        <Image src={insta3} alt='picture' width={80} height={80} />
                                        <Image src={insta4} alt='picture' width={80} height={80} />
                                        <Image src={insta5} alt='picture' width={80} height={80} />
                                        <Image src={author} alt='picture' width={80} height={80} />
                                        <Image src={gall5} alt='picture' width={80} height={80} />
                                    </div>
                                </div>
                            </div>
                            <div className="image-discount relative mt-10">
                                <Image src={productadd} alt='picture' width={300} height={500} className="relative object-cover" />
                                <div className="absolute top-20 left-4">
                                    <h1 className="text-4xl text-white font-bold">Need Beauty </h1>
                                    <p className="text-2xl text-white font-semibold">Shine&Pure</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default blog