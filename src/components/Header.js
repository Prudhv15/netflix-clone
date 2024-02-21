// import React, { useState } from "react";
// import Banner from "../assets/r.jpeg";
// import { SignIn } from "../Modals/SignIn";
// import { Link, Navigate, useNavigate } from "react-router-dom";
// export default function Header() {
//   const navigate = useNavigate();
//   const [open, setOpen] = useState(false);
//   function modalOpen() {
//     setOpen(true);
//   }
//   return (
//     <div className="relative">
//       <nav>
//         <img
//           src={Banner}
//           alt="NETFLIX"
//           className={
//             open
//               ? "contrast-100 bg-transparent brightness-50	"
//               : "shadow-lg backdrop-opacity-100 brightness-50"
//           }
//         />
//       </nav>
//       <header className="absolute top-0 left-1/2 transform -translate-x-1/2 text-center z-50 w-full">
//         <div className="flex justify-between items-center p-4">
//           <h3 className="font-bold text-4xl sm:text-5xl md:text-6xl text-red-600">
//             NETFLIX
//           </h3>

//           <button
//             className="text-white font-bold bg-red-600  w-20 h-10 rounded-md tracking-normal"
//             onClick={modalOpen}
//           >
//             {open ? <SignIn open={open} setOpen={setOpen} /> : "Sign In"}
//           </button>
//         </div>
//       </header>
//       <main className="absolute  font-bold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
//         <div>
//           <h4 className="text-xl sm:text-2xl md:text-3xl">
//             Unlimited films, TV programmes and more
//           </h4>
//           <p className="text-base font-normal sm:text-2xl md:text-1xl block">
//             Watch anywhere. Cancel at any time.
//           </p>
//           <div className="mt-5">
//             <p>
//               Ready to watch? Enter your email to create or restart your
//               membership.
//             </p>
//             <form className="flex items-center justify-between">
//               <div className="flex-grow mr-4">
//                 <input
//                   type="text"
//                   className="w-full h-10 p-2 border border-gray-300 rounded-md"
//                   id="staticEmail2"
//                   placeholder="Email address"
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="text-white font-bold bg-red-600 p-3 rounded-md tracking-normal"
//                 onClick={navigate("/results")}
//               >
//                 Get Started
//               </button>
//             </form>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

import React, { useState } from "react";
import Banner from "../assets/r.jpeg";
import { SignIn } from "../Modals/SignIn";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  function modalOpen() {
    setOpen(true);
  }

  function handleGetStarted() {
    // Handle logic before navigation, if needed
    navigate("/now");
  }

  return (
    <div className="relative">
      <nav>
        <img
          src={Banner}
          alt="NETFLIX"
          className={
            open
              ? "contrast-100 bg-transparent brightness-50	"
              : "shadow-lg backdrop-opacity-100 brightness-50"
          }
        />
      </nav>
      <header className="absolute top-0 left-1/2 transform -translate-x-1/2 text-center z-50 w-full">
        <div className="flex justify-between items-center p-4">
          <h3 className="font-bold text-4xl sm:text-5xl md:text-6xl text-red-600">
            NETFLIX
          </h3>

          <button
            className="text-white font-bold bg-red-600 w-20 h-10 rounded-md tracking-normal"
            onClick={modalOpen}
          >
            Sign In
          </button>
        </div>
      </header>
      <main className="absolute font-bold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <div>
          <h4 className="text-xl sm:text-2xl md:text-3xl">
            Unlimited films, TV programmes and more
          </h4>
          <p className="text-base font-normal sm:text-2xl md:text-1xl block">
            Watch anywhere. Cancel at any time.
          </p>
          <div className="mt-5">
            <p>
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <form className="flex items-center justify-between">
              <div className="flex-grow mr-4">
                <input
                  type="text"
                  className="w-full h-10 p-2 border border-gray-300 rounded-md text-black"
                  id="staticEmail2"
                  placeholder="Email address"
                />
              </div>

              <button
                type="button"
                className="text-white font-bold bg-red-600 p-3 rounded-md tracking-normal"
                onClick={handleGetStarted}
              >
                Get Started
              </button>
            </form>
          </div>
        </div>
      </main>

      {open && <SignIn open={open} setOpen={setOpen} />}
    </div>
  );
}
