import { useState } from 'react'
import './App.css'
import img1 from '../images/Frame.svg'
import img2 from '../images/Rectangle 1.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       
       <div class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
         
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a class="btn btn-ghost text-xl font-serif">Recipe Calories</a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">

      <li><a className='font-serif'>Home</a></li>
      <li><a className='font-serif'>Recipes</a></li>
      <li><a className='font-serif'>About</a></li>
      <li><a className='font-serif'>Search</a></li>
     
    </ul>
  </div>
  <div class="navbar-end">

  <div className="mr-2">
  <label class="input   flex items-center gap-2">
  <input type="text" class="grow" placeholder="Search" />
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path fill-rule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clip-rule="evenodd" /></svg>
</label>
  </div>
    <div className="bg-[#0BE58A] rounded-full" >
    <img  src={img1} alt="" />
    </div>
  </div>
</div>
      
<div className="mx-auto mt-10"> 
<div className="bg ">
  <p className='text-white text-center pt-16 font-serif text-5xl'>Discover an exceptional cooking <br /> class tailored for you!</p>
  <p className='text-white text-center pt-10 font-bold font-serif'>Cooking is the process of producing safe <br /> and edible food by preparing and combining ingredients, and (in most cases) applying heat.</p>

  <button class="btn btn-success ml-[450px] mt-24 rounded-full">Explore Now</button>
  <button class="btn btn-outline mt-24 ml-[50px] text-white rounded-full">Our Feedback</button>

</div>

</div>


<h1 className='text-center mt-10 text-5xl font-bold font-serif'>Our Recipes</h1>

<p className='text-center font-serif font-semibold mt-5'>They ensure a dish can be consistently prepared, allowing people to replicate the same results. <br /> Recipes serve as valuable guides and teaching tools for novice cooks.</p>

    </>
  )
}

export default App
