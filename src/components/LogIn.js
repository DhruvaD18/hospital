/* eslint-disable jsx-a11y/alt-text */
import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from './utils/firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { setType } from './utils/TypeSlice'
import { getFirestore, doc, getDoc } from "firebase/firestore";

const LogIn = () => {

  const email = useRef(null);
  const password = useRef(null);

  const auth = getAuth(app)
  const db = getFirestore(app);
  const navigate = useNavigate();
  const [errorMessage,seterrorMessage] = useState(null);
  const dispatch = useDispatch();
//   toast('signIn successfull')

  const handleClick = () =>{
    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
        const user = userCredential.user;
        const userRef = doc(db, "users", user.uid);

        // Get the user's role from Firestore
        console.log('userref',userRef)
        getDoc(userRef)
            .then((docSnap) => {
            if (docSnap.exists()) {
                const role = docSnap.data().role;

                // Dispatch the role and show success toast based on role
                console.log('role is',role)
                dispatch(setType({ type: role }));

                toast.success('SignIn successfully', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                onClose: () => {
                    // Navigate to different dashboards based on role
                    if (role === "hospital") {
                        navigate('/');
                    } else if (role === "patient"){
                        navigate('/');
                    } else {
                        navigate('/'); // Default redirect
                    }
                }
                });
            } else {
                console.log("No such document!");
            }
            })
            .catch((error) => {
                console.log("Error getting document:", error);
            });
        })
        .catch((error) => {
        seterrorMessage(error.code, error.message);
        });
        // .then((userCredential) => {
        //     // Signed in 
        //     const user = userCredential.user;
        //     const userRef = doc(db, "users", user.uid);
            
        //     dispatch(setType({type:"patient"}))
        //     toast.success('SignIn successfully', {
        //         position: "top-center",
        //         autoClose: 3000,
        //         onClose: () => navigate('/'),
        //         hideProgressBar: false,
        //         closeOnClick: true,
        //         pauseOnHover: true,
        //         draggable: true,
        //         progress: undefined,
        //         theme: "light",
        //         });
        //     // ...
        // })
        // .catch((error) => {
        //     seterrorMessage(error.code,error.message)
        // });
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
    <ToastContainer />
    <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div className="mt-12 flex flex-col items-center">
                <div className="w-full flex-1 mt-8">
                    <div className="flex flex-col items-center">
                        <button
                            className="w-full max-w-xs font-bold shadow-md rounded-lg py-3 bg-blue-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                            <div className="bg-white p-2 rounded-full">
                                <svg className="w-4" viewBox="0 0 533.5 544.3">
                                    <path
                                        d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                                        fill="#4285f4" />
                                    <path
                                        d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                                        fill="#34a853" />
                                    <path
                                        d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                                        fill="#fbbc04" />
                                    <path
                                        d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                                        fill="#ea4335" />
                                </svg>
                            </div>
                            <span className="ml-4">
                                Sign In with Google
                            </span>
                        </button>

                    </div>

                    <div className="my-12 border-b text-center">
                        <div
                            className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                            Or sign In with Cartesian E-mail
                        </div>
                    </div>

                    <div className="mx-auto max-w-xs">
                        <input ref={email}
                            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                            type="email" placeholder="Email" />
                        <input ref={password}
                            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                            type="password" placeholder="Password" />
                        <button onClick={handleClick}
                            className="mt-5 tracking-wide font-semibold bg-blue-300 text-white-500 w-full py-4 rounded-lg hover:bg-blue-600 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                            <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" strokeWidth="2"
                                strokeLinecap="round" strokeLinejoin="round">
                                <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                <circle cx="8.5" cy="7" r="4" />
                                <path d="M20 8v6M23 11h-6" />
                            </svg>
                            <span className="ml-">
                                Sign In
                            </span>
                        </button>
                        <p className="mt-6 text-xs text-gray-600 text-center">
                            I agree to abide by Cartesian Kinetics
                            <Link href="#" className="border-b border-gray-500 border-dotted">
                                Terms of Service
                            </Link>
                            and its
                            <Link href="#" className="border-b border-gray-500 border-dotted">
                                Privacy Policy
                            </Link>
                        </p>
                        <p className="mt-6 text-s text-gray-600 text-center">Already has an account?<Link className="font-medium text-blue-600 underline dark:text-blue-500"  to={'/signup'}>Sign Up</Link></p>
                        {errorMessage && <p className="text-md font-semibold text-red-600 text-center">{errorMessage}</p>}
                    </div>
                </div>
            </div>
        </div>
        <div className="border-blue-200 border-solid border-4 rounded-lg flex-1 bg-red-700 text-center hidden lg:flex">
            <img src='https://hospitalmanagementsystem.org/images/hospital-information-system.jpg' alt='pic' className='' />
        </div>
    </div>
</div>
  )
}

export default LogIn
