import React from 'react'
import whiteLogo from './logo.png'
import Logo from './whiteLogo.png'
import heroimg from'./carouselOne.jpg'
import s1 from './s1.png'
import s2 from './s2.png'
import s3 from './s3.png'
import s4 from './s4.png'
import s5 from './s5.png'
import s6 from './s6.png'
import iso from './iso.svg'
import cardone from './cardone.jpg'
import cardtwo from './cardtwo.jpg'
import cardthree from './cardthree.jpg'
function App() {
  return (
    <div className='w-full h-auto  flex flex-col justify-center items-center'>
      {/* navbar here */}
      <div className="w-full h-14 bg-white text-black flex items-center justify-between p-4 border-b-4 border-e-black">
        <img className='mt-2 w-36'
          src={whiteLogo}
          alt="White logo featuring stylized text Project22 in bold font, centered on a clean white background, conveying a modern and professional tone"
        />
        <ul className='md:flex flex-row gap-4 text-xl font-bold hidden'>
          <li>Home</li>
          <li>About</li>
          <li>Contect Us</li>
        </ul>
        <div className=' md:flex flex-col justify-center items-center m-3 bg-indigo-700 p-2 text-white rounded-md hidden '>
          Login/SignUp
        </div>
        <div className='md:hidden block w-auton h-auto'>
          <a href='#' className='font-extrabold'>&#9776;</a>
        </div>
        {/* navbar section ends here */}
      

      </div>
        {/* hero section starts here */}
        <div className='flex flex-col w-full h-auto '>
          <img src={heroimg} alt="heroimg" />
        </div>


  <div className='w-full h-auto flex flex-col justify-center gap-5 items-center m-4'>
    <div className='flex w-full justify-center align-center text-center'>
      <h1 className=" mt-6 text-indigo-600 font-bold text-5xl">"Pure Hardwork, No shortcuts!"</h1>
    </div>
    <div className="  w-[156px] border-b-4 border-yellow-400">

    </div>
  </div>

  <div className="w-full h-auto mb-14 flex lg:flex-row justify-evenly items-center p-5 flex-col gap-7">
    <div className="width-auto h-auto gap-5 flex flex-col justify-center items-center ">
      <img className="w-16 h-16" src=" data:image/png;base64,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" alt='course'/>
     <p className='text-black text-4xl font-bold'>600</p>
      <p className='text-gray-500 text-3xl font-semibold '>Different Courses</p>
    </div>
    <div className="width-auto h-auto gap-5 flex flex-col justify-center items-center ">
         <img className="w-16 h-16" src="data:image/png;base64,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" alt="" />
      <p className='text-black text-4xl font-bold'>70000</p>
      <p className='text-gray-500 text-3xl font-semibold '>Students Enrolled</p>
    </div>
     <div className="width-auto h-auto gap-5 flex flex-col justify-center items-center ">
         <img className="w-16 h-16" src="data:image/png;base64,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" alt="" />
      <p className='text-black text-4xl font-bold'>10000</p>
      <p className='text-gray-500 text-3xl font-semibold '>Successful Transition</p>
    </div>

  </div>
  <div className="w-full h-auto flex flex-col gap-5 justify-evenly items-center text-center bg-slate-100 pt-5">
    <h1 className="text-indigo-600 text-5xl font-bold my-9">Our Acheiver's Work With</h1>
    <div className='w-auto h-auto flex flex-col justify-evenly items-center px-4 mb-20 lg:flex-row '>
      <img className="w-48 h-auto m-4"src={s1} alt="" />
      <img className="w-48 h-auto ma"src={s2} alt="" />
      <img className="w-48 h-auto m-4"src={s3} alt="" />
      <img className="w-48 h-auto m-4"src={s4} alt="" />
      <img className="w-48 h-auto m-4"src={s5} alt="" />
      <img className="w-48 h-auto m-4"src={s6} alt="" />
    </div>
  </div>
  <div className='w-full h-auto p-3 m-2 flex flex-col justify-center items-center gap-3'>
    <div className='w-auto h-auto text-center mt-14 mb-7'>
      <h1 className="text-indigo-700 text-5xl mb-4 font-semibold">Community Programs</h1>
      <p className='text-gray-600 text-2xl'>Open to all pro-live classes on Youtube for free.</p>
    </div>
    <div>
      <div className="w-full h-auto flex flex-col lg:flex-row justify-evenly items-center p-4 gap-10">
      <div className="w-[380px] h-[450px] flex flex-col gap-3  items-center p-4 border-2 shadow-zinc-700 rounded-xl">
        <img src={cardone} alt="cardone" />
        <h1 className='text-3xl text-indigo-600 font-bold mb-4'>Business Analytics Foundations</h1>
        <p className='text-2xl font-semibold text-slate-600'>Gopal Sharma</p>
        <h1 className= 'text-3xl font-bold text-black'>FREE</h1>
      </div>
       <div className="w-[380px] h-[450px] flex flex-col gap-3  items-center p-4 border-2 shadow-zinc-700 rounded-xl">
        <img src={cardtwo} alt="cardone" />
        <h1 className='text-3xl text-indigo-600 font-bold mb-4'>C++ Foundation</h1>
        <p className='text-2xl font-semibold text-slate-600'>Urvi Goel</p>
        <h1 className= 'text-3xl font-bold text-black'>FREE</h1>
      </div>
       <div className="w-[380px] h-[450px] flex flex-col gap-3  items-center p-4 border-2 shadow-zinc-700 rounded-xl">
        <img src={cardthree} alt="cardone" />
        <h1 className='text-3xl text-indigo-600 font-bold mb-4'>Cracking The coding interview in Java - Foundation</h1>
        <p className='text-2xl font-semibold text-slate-600'>Vishwa Mohan</p>
        <h1 className= 'text-3xl font-bold text-black'>FREE</h1>
      </div>
      </div>
     
    </div>
  </div>
{/* footer section starts here  */}
 <div className="bg-slate-900 w-full h-auto p-10 flex flex-col lg:flex-row lg:items-start gap-5  justify-around items-center text-white">
  <div className='flex flex-col justify-center items-center gap-3'>
    <img className="h-[60px] w-[180px]" src={Logo} alt="" />
   <p className='mb-4'>Email Us: support@pwskills.com</p>
   <img className="w-[120px] h-[120px]"src={iso} alt="" />
  </div>
  <div className="flex flex-col gap-2 justify-start items-center lg:items-start">
    <h1 className="text-2xl font-semibold">PW Skills</h1>
    <div className='w-[156px] border-b-4 border-orange-500'></div>
    <div className='flex gap-8 mt-6 mb-4 '>
      <div>
      <p>About Us</p>
      <p>FAQs</p>
      <p>Privacy Policy</p>
      </div>
      <div>
        <p>Contact Us</p>
        <p>Job Assistance</p>
        <p>Terms and Conditions</p>
      </div>
    </div>
  </div>
  <div className="flex flex-col gap-2 justify-start items-start">
    <h1 className="text-2xl font-semibold">Products</h1>
    <div className='w-[156px] border-b-4 border-orange-500'></div>
    <div className='mt-6'>
    <p>PW Skills Lab</p>
    <p>Job Portal</p>
    <p>Experience Portal</p>
    <p>Become an affiliate</p>
    <p>Hall Of Fame</p>
    </div>
  </div>
 </div>

    </div>
  )
}

export default App
