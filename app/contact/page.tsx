import './contact.css'
import Image from 'next/image'
import contactimage from '../../images/contact.jpg'
const contact = () => {
  return (
    <div>
      <div className="contact-content">
        <div className="container mx-auto px-4">
          <h1 className='font-extrabold text-white xl: text-3xl sm:text-3xl md:text-6xl  lg:text-7xl'>Here Is Where You can <br /><span className='text-yellow-400'>Find Us</span> </h1>
        </div>
      </div>


      <div className="section-contact">
        <div className="container mx-auto px-4">
          <div className='mb-20'>
            <h1 className='font-extrabold xl: text-3xl sm:text-3xl md:text-6xl  lg:text-7xl text-slate-900'>Get In Touch</h1>
            <p className='font-semibold'>Maximus mauris sceleri sque, at rutrum nulla dictum.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-0">
            <div className="">
              <Image src={contactimage} alt="Image" className="w-full h-full object-cover" />
            </div>
            <div className="">
              <form className="w-full h-full  bg-white border-2 border-slate-300 p-8  shadow-lg">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full p-4 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  id="surname"
                  name="surname"
                  placeholder="Enter your surname "
                  className="w-full p-4 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full p-4 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  name="message"
                  id="message"
                  cols="30" rows="10"
                  placeholder="Your message"
                  className="w-full p-4 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <input
                  type="button"
                  value="SUBMIT"
                  className="w-full p-4 bg-blue-500 text-white rounded-lg cursor-pointer hover:bg-blue-600"
                  id="submit-btn"
                />
              </form>
            </div>
          </div>
          <div className="mt-5 text-center text-red-600 font-bold text-lg hidden" id="error-message">
            Veuillez remplir tous les champs obligatoires!!!
          </div>
        </div>
      </div>

    </div>
  )
}

export default contact