

const Homepage = () => {
  return (
    
   <div className="flex w-screen h-screen relative overflow-hidden text-[16px]  text-white">
  <div className="flex-none w-1/3 bg-no-repeat bg-center bg-cover" style={{ backgroundImage: 'url("/images/bg-main-desktop.png")' }}></div>
  <div className="flex-auto bg-white"></div>
  {/*  */}
  <div className=" w-full h-full bg-no-repeat absolute top-[10%] left-[10%] px-6 py-6" style={{backgroundImage: 'url("/images/bg-card-front.png")'}}>
    <div className=" flex items-center gap-2 ">
    <div className=" w-[30px] h-[30px]  bg-white rounded-[50%]"></div>
    <div className=" w-4 h-4 bg-transparent border rounded-[50%]"></div>
    </div>
    {/*  */}
    <div className=" mt-[5rem] text-white font-semibold text-2xl flex gap-2 tracking-[10px]  ">
      <h1>hehe</h1>
      <h1 >0000</h1>
      <h1>0000</h1>
      <h1>0000</h1>
      <h1>0000</h1>

    </div>
    {/*  */}
    <div className=" flex items-center gap-[15rem] mt-4">
      <div>
        <h1>JANE APPLESEEP</h1>
      </div>
      <div>
        <h1>00/00</h1>
      </div>
    </div>
  </div>
  {/*  */}
  <div className="  w-full h-full bg-no-repeat absolute top-[54%] left-[20%] px-6 py-6" style={{backgroundImage: 'url("/images/bg-card-back.png")'}}>
    <h1 className=" absolute top-[17%] right-[71%]">000</h1>
</div>
{/*  */}
<div className="absolute right-[20%] top-[27%] w-[300px] h-fit ">
  <div className=" mb-4">
  <h2 className=" text-black" >CARDHOLDER NAME</h2>
  <input type="text"
  className=" w-full relative py-1 px-2 text-black border border-gray-600 rounded-lg"
   />
  <label className=" text-gray-500 absolute top-[27px] left-0" htmlFor="name">e.g Jane Applehead</label>
  </div>
  {/*  */}
  <div>
  <h2 className=" text-black" >CARD NAME</h2>
  <input type="text"
  className=" w-full relative py-1 px-2 text-black border border-gray-600 rounded-lg mb-6"
   />
  <label className=" text-gray-500 absolute top-[27px] left-0" htmlFor="name">e.g Jane Applehead</label>
  </div>
  {/*  */}
  <div>
    <div className=" flex gap-8 text-black">
    <h1>EXP DATE MM/YY</h1>
    <h1>CVC</h1>
    </div>
    <div className=" flex items-center gap-2">
      <input type="text"
      className=" w-[4rem] border border-gray-600 rounded-lg"
       />
      <input type="text"
      className=" w-[4rem] border border-gray-600 rounded-lg"

       />
      <input type="text" 
      className=" border border-gray-600 rounded-lg" />

    </div>

  </div>


</div>
  
</div>
  

  
    
  )
}

export default Homepage
