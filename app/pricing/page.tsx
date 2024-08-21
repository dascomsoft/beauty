import Link from "next/link";
import './pricing.css'
import staff from '../../images/staff.jpg'
import staff1 from '../../images/staff1.jpg'
import staff2 from '../../images/staff2.jpg'
import staff3 from '../../images/staff3.jpg'
import Image
 from "next/image";

const pricing = () => {
  return (
    <div className="pricing-header">
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

      <div className="team-section">
        <div className="container mx-auto px-4">
          <h1 className='text-5xl font-black text-center mb-24'>Meet Our Artists</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="team-detail  shadow-lg cursor-pointer transition duration-500 ease-in-out hover:-translate-y-5">
              <Image src={staff} alt='pic' className='pic' />
              <div className="text-center p-4">
                <h3 className='text-red-500 text-2xl'>Alexa Gomez</h3>
                <p className='py-2'>Stylist</p>
                <div className="flex items-center justify-center gap-2">
                  <svg fill="#000000" width="20px" height="20px" viewBox="-7 -2 24 24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin" className="jam jam-facebook"><path d='M2.046 3.865v2.748H.032v3.36h2.014v9.986H6.18V9.974h2.775s.26-1.611.386-3.373H6.197V4.303c0-.343.45-.805.896-.805h2.254V0H6.283c-4.34 0-4.237 3.363-4.237 3.865z' /></svg>
                  <svg fill="#000000" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z" /></svg>
                  <svg fill="#000000" width="20px" height="20px" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg"> <path d="M212,28H44A16.01817,16.01817,0,0,0,28,44V212a16.01833,16.01833,0,0,0,16,16H212a16.01833,16.01833,0,0,0,16-16V44A16.01817,16.01817,0,0,0,212,28ZM96,176.001a8,8,0,1,1-16,0v-64a8,8,0,0,1,16,0ZM88,92a12,12,0,1,1,12-12A12,12,0,0,1,88,92Zm96,84.001a8,8,0,1,1-16,0v-36a20,20,0,0,0-40,0v36a8,8,0,1,1-16,0v-64a7.99729,7.99729,0,0,1,15.79492-1.77857A35.98125,35.98125,0,0,1,184,140.001Z" /></svg>
                </div>
              </div>
            </div>
            <div className="team-detail shadow-lg cursor-pointer transition duration-500 ease-in-out hover:-translate-y-5 ">
              <Image src={staff1} alt='pic' className='pic' />
              <div className="text-center p-4">
                <h3 className='text-red-500 text-2xl'>Serena Kim</h3>
                <p className='py-2'>Stylist</p>
                <div className="flex items-center justify-center gap-2">
                  <svg fill="#000000" width="20px" height="20px" viewBox="-7 -2 24 24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin" className="jam jam-facebook"><path d='M2.046 3.865v2.748H.032v3.36h2.014v9.986H6.18V9.974h2.775s.26-1.611.386-3.373H6.197V4.303c0-.343.45-.805.896-.805h2.254V0H6.283c-4.34 0-4.237 3.363-4.237 3.865z' /></svg>
                  <svg fill="#000000" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z" /></svg>
                  <svg fill="#000000" width="20px" height="20px" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg"> <path d="M212,28H44A16.01817,16.01817,0,0,0,28,44V212a16.01833,16.01833,0,0,0,16,16H212a16.01833,16.01833,0,0,0,16-16V44A16.01817,16.01817,0,0,0,212,28ZM96,176.001a8,8,0,1,1-16,0v-64a8,8,0,0,1,16,0ZM88,92a12,12,0,1,1,12-12A12,12,0,0,1,88,92Zm96,84.001a8,8,0,1,1-16,0v-36a20,20,0,0,0-40,0v36a8,8,0,1,1-16,0v-64a7.99729,7.99729,0,0,1,15.79492-1.77857A35.98125,35.98125,0,0,1,184,140.001Z" /></svg>
                </div>
              </div>
            </div>
            <div className="team-detail shadow-lg cursor-pointer transition duration-500 ease-in-out hover:-translate-y-5 ">
              <Image src={staff2} alt='pic' className='pic' />
              <div className="text-center p-4">
                <h3 className='text-red-500 text-2xl'>Emilia Wilson</h3>
                <p className='py-2'>Stylist</p>
                <div className="flex items-center justify-center gap-2">
                  <svg fill="#000000" width="20px" height="20px" viewBox="-7 -2 24 24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin" className="jam jam-facebook"><path d='M2.046 3.865v2.748H.032v3.36h2.014v9.986H6.18V9.974h2.775s.26-1.611.386-3.373H6.197V4.303c0-.343.45-.805.896-.805h2.254V0H6.283c-4.34 0-4.237 3.363-4.237 3.865z' /></svg>
                  <svg fill="#000000" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z" /></svg>
                  <svg fill="#000000" width="20px" height="20px" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg"> <path d="M212,28H44A16.01817,16.01817,0,0,0,28,44V212a16.01833,16.01833,0,0,0,16,16H212a16.01833,16.01833,0,0,0,16-16V44A16.01817,16.01817,0,0,0,212,28ZM96,176.001a8,8,0,1,1-16,0v-64a8,8,0,0,1,16,0ZM88,92a12,12,0,1,1,12-12A12,12,0,0,1,88,92Zm96,84.001a8,8,0,1,1-16,0v-36a20,20,0,0,0-40,0v36a8,8,0,1,1-16,0v-64a7.99729,7.99729,0,0,1,15.79492-1.77857A35.98125,35.98125,0,0,1,184,140.001Z" /></svg>
                </div>
              </div>
            </div>
            <div className="team-detail shadow-lg cursor-pointer transition duration-500 ease-in-out hover:-translate-y-5">
              <Image src={staff3} alt='pic' className='pic' />
              <div className="text-center p-4">
                <h3 className='text-red-500 text-2xl'>Franchesca Helmer</h3>
                <p className='py-2'>Stylist</p>
                <div className="flex items-center justify-center gap-2">
                  <svg fill="#000000" width="20px" height="20px" viewBox="-7 -2 24 24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin" className="jam jam-facebook"><path d='M2.046 3.865v2.748H.032v3.36h2.014v9.986H6.18V9.974h2.775s.26-1.611.386-3.373H6.197V4.303c0-.343.45-.805.896-.805h2.254V0H6.283c-4.34 0-4.237 3.363-4.237 3.865z' /></svg>
                  <svg fill="#000000" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z" /></svg>
                  <svg fill="#000000" width="20px" height="20px" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg"> <path d="M212,28H44A16.01817,16.01817,0,0,0,28,44V212a16.01833,16.01833,0,0,0,16,16H212a16.01833,16.01833,0,0,0,16-16V44A16.01817,16.01817,0,0,0,212,28ZM96,176.001a8,8,0,1,1-16,0v-64a8,8,0,0,1,16,0ZM88,92a12,12,0,1,1,12-12A12,12,0,0,1,88,92Zm96,84.001a8,8,0,1,1-16,0v-36a20,20,0,0,0-40,0v36a8,8,0,1,1-16,0v-64a7.99729,7.99729,0,0,1,15.79492-1.77857A35.98125,35.98125,0,0,1,184,140.001Z" /></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default pricing