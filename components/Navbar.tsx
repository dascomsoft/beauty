
// 'use client'
// import { useState } from "react"
// import Link from "next/link"
// import './Navbar.css'

// const Navbar = () => {

//     const [openLinks, setOpenLinks] = useState<boolean>(true)

//     const open = "open";
//     const close = "close";

//     const openLinksUpdate = () => {
//         setOpenLinks(!openLinks)
//     }

//     return (
//         <div>
//             <div className="main-navbar bg-black text-white  shadow-xl border-b border-pink-700 fixed top-0 left-0 w-full z-50">
//                 <div className="container mx-auto px-4 py-12">
//                     <header>
//                         <a className="logo" href='/'>
//                             <h2 className="font-bold text-3xl">Beauty<span className="text-pink-600">Diva</span></h2>
//                         </a>
//                         <div className="navleft" id={openLinks ? open : close}>
//                         <h2 className="font-bold text-3xl">Beauty<span className="text-pink-600">Diva</span></h2>
//                             <a className="head-link"  href="/">Home</a>
//                             <a className="head-link"  href="/about">About Us</a>
//                             <a className="head-link" href="/services">Services</a>
//                             <a className="head-link"  href="/pricing">Pricing</a>
//                             <a  className="head-link"  href="/blog">Blog</a>
//                             <a  className="head-link"  href="/contact">Contact</a>
//                             <a className="px-5 py-3 bg-pink-600 text-white" href="/book">Book an Appoitment</a>

//                         </div>
//                         <nav className="flex gap-5 navright" >
//                             <a className="head-link" href="/">Home</a>
//                             <a  className="head-link" href="/about">About Us</a>
//                             <a  className="head-link" href="/services">Services</a>
//                             <a  className="head-link"  href="/pricing">Pricing</a>
//                             <a  className="head-link"  href="/blog">Blog</a>
//                             <a  className="head-link"  href="/contact">Contact</a>
//                             <a className="px-5 font-extrabold bg-pink-600 rounded-full text-white" href="/book">Book Now</a>

//                         </nav>
//                         <svg onClick={openLinksUpdate} className="cursor-pointer jam jam-menu" id="openBtn" fill="#fff" width="50px" height="50px" viewBox="-5 -7 24 24"
//                             xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin">
//                             <path
//                                 d='M1 0h5a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2zm7 8h5a1 1 0 0 1 0 2H8a1 1 0 1 1 0-2zM1 4h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2z' />
//                         </svg>
//                     </header>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Navbar






'use client';

import Link from 'next/link';
import './Navbar.css';
import { useState, useEffect } from 'react';
import { auth, db } from '../firebaseConfig';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

const Navbar = () => {
  const [user, setUser] = useState<any>(null);
  const [role, setRole] = useState<'client' | 'barber' | null>(null); // État pour le rôle
  const [openLinks, setOpenLinks] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);

        // Vérifier si l'utilisateur est un "client" ou un "barber"
        const clientDoc = await getDoc(doc(db, 'clients', user.uid));
        const barberDoc = await getDoc(doc(db, 'barbers', user.uid));

        if (clientDoc.exists()) {
          setRole('client'); // L'utilisateur est un "client"
        } else if (barberDoc.exists()) {
          setRole('barber'); // L'utilisateur est un "barber"
        } else {
          setRole(null); // Rôle non trouvé
        }
      } else {
        setUser(null);
        setRole(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const openLinksUpdate = () => {
    setOpenLinks(!openLinks);
  };

  const closeLinks = () => {
    setOpenLinks(!openLinks);
  };

  // Fonction pour déconnecter l'utilisateur
  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div>
      <div className="main-navbar bg-black text-white fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto px-4 py-6">
          <header>
            <Link className="logo" href="/">
              <h2 className="font-bold text-3xl">
                Beauty<span className="text-pink-600">Diva</span>
              </h2>
            </Link>

            {/* Menu Mobile */}
            <div className="navleft" id={openLinks ? 'open' : 'close'}>
              <svg
                onClick={openLinksUpdate}
                className="closeIcon"
                id="closeBtn"
                fill="pink"
                width="30px"
                height="30px"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M512.481 421.906L850.682 84.621c25.023-24.964 65.545-24.917 90.51.105s24.917 65.545-.105 90.51L603.03 512.377 940.94 850c25.003 24.984 25.017 65.507.033 90.51s-65.507 25.017-90.51.033L512.397 602.764 174.215 940.03c-25.023 24.964-65.545 24.917-90.51-.105s-24.917-65.545.105-90.51l338.038-337.122L84.14 174.872c-25.003-24.984-25.017-65.507-.033-90.51s65.507-25.017 90.51-.033L512.48 421.906z" />
              </svg>

              <Link onClick={closeLinks} className="head-link" href="/">
                Home
              </Link>
              <Link onClick={closeLinks} className="head-link" href="/services">
                Services
              </Link>
              <Link onClick={closeLinks} className="head-link" href="/pricing">
                Pricing
              </Link>

              {user ? (
                <>
                  {role === 'client' && (
                    <Link onClick={closeLinks} className="head-link" href="/profile">
                      Profile
                    </Link>
                  )}
                  {role === 'barber' && (
                    <Link onClick={closeLinks} className="head-link" href="/barberProfile">
                      Barber Profile
                    </Link>
                  )}
                  <button onClick={handleSignOut} className="text-pink-500 ml-4 font-extrabold">
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <Link onClick={closeLinks} className="head-link" href="/about">
                    About Us
                  </Link>
                  <Link onClick={closeLinks} className="head-link" href="/register">
                    Register
                  </Link>
                </>
              )}
            </div>

            {/* Menu Desktop */}
            <nav className="flex gap-5 navright">
              <Link className="head-link" href="/">
                Home
              </Link>
              <Link className="head-link" href="/services">
                Services
              </Link>
              <Link className="head-link" href="/pricing">
                Pricing
              </Link>

              {user ? (
                <>
                  {role === 'client' && (
                    <Link className="head-link" href="/profile">
                      Profile
                    </Link>
                  )}
                  {role === 'barber' && (
                    <Link className="head-link" href="/barberProfile">
                      Barber Profile
                    </Link>
                  )}
                  <button onClick={handleSignOut} className="text-pink-500 ml-4 font-extrabold">
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <Link className="head-link" href="/about">
                    About Us
                  </Link>
                  <Link className="head-link" href="/register">
                    Register
                  </Link>
                </>
              )}
            </nav>

            <svg
              onClick={openLinksUpdate}
              className="cursor-pointer jam jam-menu"
              id="openBtn"
              fill="#fff"
              width="50px"
              height="50px"
              viewBox="-5 -7 24 24"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMinYMin"
            >
              <path d="M1 0h5a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2zm7 8h5a1 1 0 0 1 0 2H8a1 1 0 1 1 0-2zM1 4h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2z" />
            </svg>
          </header>
        </div>
      </div>
    </div>
  );
};

export default Navbar;


