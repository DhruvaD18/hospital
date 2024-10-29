import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const App = () => {

  const user = useSelector((state)=> state.user.value)

  return (
    <div>
      {!user && <section className='text-slate-900 h-screen w-screen py-10 body-font'>
        <div className='h-1/2 w-8/12 shadow-md hover:shadow-xl rounded-md mx-auto my-10 text-center p-3'>
          <p className='font-semibold text-lg'>Sign In as <span className='text-2xl text-indigo-600 underline'>Organizations</span></p>
          <p className='text-slate-600 mt-8 mx-20'>An online hospital management system centralizes patient records, automates operations, and enhances patient care. Hospitals benefit from efficient scheduling, billing, and data analytics, boosting satisfaction and performance while ensuring data security and compliance.</p>
          <div className='flex gap-4 items-center justify-center'>
            <Link to={'/hospital-login'}>
              <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">SignIn</button>
            </Link>
            <Link to={'/hospital-signUp'}>
              <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">SignUp</button>
            </Link>
          </div>
        </div>
        <div className='h-1/2 w-8/12 shadow-md hover:shadow-xl rounded-md mx-auto my-10 text-center p-3'>
          <p className='font-semibold text-lg'>Sign In as <span className='text-2xl text-indigo-600 underline'>Patient</span></p>
          <p className='text-slate-600 mt-8 mx-20'>An online hospital management system improves patient experience by streamlining appointments, centralizing records, and ensuring data security. Patients benefit from faster service, easier access to their health information, and improved care quality, all supported by efficient hospital operations.</p>
          <div className='flex gap-4 items-center justify-center'>
            <Link to={'/login'}>
              <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">SignIn</button>
            </Link>
            <Link to={'/signup'}>
              <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">SignUp</button>
            </Link>
          </div>
        </div>
      </section>
      }
      {user && <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Empowering Healthcare with AI: Seamless Management, Smarter Care.</h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Revolutionizing patient experiences and optimizing hospital operations with intelligent, data-driven solutions for a more connected and efficient healthcare journey.</p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                  <img src='https://i.ibb.co/2WvvY52/Screenshot-2024-10-30-033452.png' alt='aipic' />
                </div>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-xl title-font font-medium mb-3">Ayushmitra Bot</h2>
                <p className="leading-relaxed text-base px-2">Ayushmitra Bot is an AI assistant for healthcare, simplifying management by handling appointments, patient inquiries, and treatment updates. With NLP and machine learning, it delivers accurate, efficient support, enhancing patient care and streamlining operations.</p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                  <img src='https://i.ibb.co/LS5s4Ys/Screenshot-2024-10-30-033535.png' alt='aipic' />
                </div>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3"> real time patient monitoring System with sensors</h2>
                <p className="leading-relaxed text-base">The real-time patient monitoring system tracks vital signs like SpO2 and heart rate, alerting healthcare providers to critical changes instantly. This ensures timely care, improved patient safety, and better outcomes.</p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <img src='https://i.ibb.co/hWM62Gq/Screenshot-2024-10-30-033624.png' alt='aipic' />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">An easy-to-use website tailored for individuals and organizations</h2>
                <p className="leading-relaxed text-base">On Ayushmitra, hospitals can sign up to manage patient records, staff, and appointments, while patients can register to access health information and book appointments. Both can sign in anytime to manage their healthcare data efficiently.</p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0">
                <img src='https://i.ibb.co/hWM62Gq/Screenshot-2024-10-30-033624.png' alt='aipic' />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Medication reminder system for patients</h2>
                <p className="leading-relaxed text-base">A medication reminder system is crucial for enhancing patient adherence and improving health outcomes. It can use automated calls, texts, or app notifications to prompt patients at scheduled times, reducing missed doses and effectively managing chronic conditions. By tailoring reminders to individual schedules, the system promotes convenience and supports long-term compliance.</p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0">
                <img src='https://i.ibb.co/VmvMc8K/Screenshot-2024-10-30-033738.png' alt='aipic' />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Emergency alert to doctors for BP and SpO2 spikes</h2>
                <p className="leading-relaxed text-base">During spikes in blood pressure and low SpO2 levels, an emergency doctor call is essential for timely medical intervention. These conditions can signal serious health issues, requiring immediate assessment and treatment to stabilize the patient and prevent complications. Quick response is crucial for improving outcomes and ensuring safety.</p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0">
                <img src='https://i.ibb.co/VH6nP3C/Screenshot-2024-10-30-033921.png' alt='aipic' />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Comparing various services offered by hospitals</h2>
                <p className="leading-relaxed text-base">Comparing facilities among different hospitals is crucial for informed healthcare decisions. Key factors include the availability of advanced technology, specialized departments, patient amenities, and staff qualifications. Evaluating the quality of services like emergency care and inpatient facilities enables patients to choose a hospital that best meets their needs, ensuring optimal care tailored to their health requirements.</p>
              </div>
            </div>
          </div>
        </div>
      </section>}
    </div>
    
  )
}

export default App
