import bookimage from '../../images/book.jpg'
import Image from "next/image"
import './book.css'

const book = () => {
  return (
    <div>

      <div className="book-contact mt-20 mb-20">
        <div className="container mx-auto px-4">
          <div className='py-32'>
            <h1 className='text-4xl font-extrabold text-slate-900 mb-5'>Book Now</h1>
            <p className='text-xl'>We believe that reserving your visit at Beauty<span className='text-pink-600'>Diva</span> should be as easy as a couple of clicks. Visit the link to find a time that is perfect for you. Do not see the service or time you are looking for? Call us! We are here to help: 503-477-7473..</p>
          </div>
          <div className="grid md:grid-cols-2 gap-0">
            <div className="">
              <Image src={bookimage} alt="Image" className="w-full h-full object-cover" />
            </div>
            <div className="">
              <form className="w-full h-full  bg-white border-2 border-slate-300 p-8  shadow-lg">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full p-4 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
                <input
                  type="text"
                  id="surname"
                  name="surname"
                  placeholder="Enter your surname "
                  className="w-full p-4 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full p-4 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
                <select
                  id="service"
                  name="service"
                  className="w-full p-4 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                >
                  <option value="" selected disabled>
                    Select your service
                  </option>
                  <option value="hair">Hair Dressing</option>
                  <option value="massage">Massage</option>
                  <option value="mani">Manicure & Pedicure</option>
                  <option value="spa">Spa</option>
                </select>
                <textarea
                  name="message"
                  id="message"
                  cols={30} rows={10}
                  placeholder="Your message"
                  className="w-full p-4 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                ></textarea>
                <input
                  type="button"
                  value="SUBMIT"
                  className="w-full p-4 bg-pink-600 text-white rounded-lg cursor-pointer hover:bg-slate-600"
                  id="submit-btn"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default book