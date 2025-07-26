import React, { useState,useRef, useEffect }  from 'react'
import {motion} from 'framer-motion'; 
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/authStore';
import { toast } from 'react-hot-toast';
function PhoneAuthentication() {
  const navigate = useNavigate();
  
  const [otp,setOtp]=useState(["", "","","","",""]);
  const inputRefs=useRef([]);
  

const {error, isLoading, verifyPhone}=useAuthStore()



  const handleChange=(index,value)=>{
    const newOtp=[...otp];

    if (value.length>1){
      const pastedOtp =value.slice(0,6).split("")
      for (let i=0;i<6;i++){
        newOtp[i]=pastedOtp[i]||""
      }
      setOtp(newOtp)
      const lastfilledIndex=newOtp.findLastIndex((digit)=>digit !=="") 
      const focusIndex=lastfilledIndex<5?lastfilledIndex+1:5
      inputRefs.current[focusIndex].focus()
    }else{
      newOtp[index]=value
      setOtp(newOtp)
      if (value&&index<5){
        inputRefs.current[index+1].focus();
      }

    }
  }
  const handleKeyDown=(index,e)=>{
    if (e.key==='Backspace'&& !otp[index]&&index>0){
      inputRefs.current[index-1].focus()
    }
    
  }

  const handleSubmit= async (e)=>{
    e.preventDefault()
    const verificationCode=otp.join("")
    alert(`Verification code: ${verificationCode}`)
   
    try{
      await verifyEmail(verificationCode)
     
      toast.success("Email verified successfully")
       navigate("/home")

    }catch(error){
       console.log(error)
    }
  }
  

  useEffect(()=>{
    if (code.every(digit=>digit !=='' )){
     handleSubmit(new Event('submit'))
    }
  },[otp])

  return(
    <div className="bg-white  flex flex-col items-center justify-center ">
      <motion.div className='backdrop-blur-[5px] border border-white/50 shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all duration-700 p-12 rounded-[20px]'>
    
      
      <h2 className='text-5xl font-bold mb-6 text-center  text-green-400  '>Verify Phone</h2>
      <p className='text-center text-black font-bold text-2xl mb-6'>Enter the 6-digit OTP sent to your mobile</p>
      <form onSubmit={handleSubmit}    className="space-y-6">
        <div className='flex justify-between'>
          {otp.map((digit,index)=>(
            <input 
            key={index}
            ref={(el)=>(inputRefs.current[index]=el)}
            type='text'
            maxLength='6'
            value={digit}
            onChange={(e)=>handleChange(index,e.target.value)}
            onKeyDown={(e)=>handleKeyDown(index,e)}
            className='w-12 h-12 text-center text-2xl font-bold bg-gray-700 text-white border-2 border-gray-500 rounded-lg focus:outline-none focus:border-blue-500'
            
            
            />
          ))}
        </div>
        <button className='bg-white  text-black font-bold py-2 px-4 rounded ml-45' type='submit' onClick={handleSubmit}>Submit</button>
      </form>




      </motion.div>
   


    </div>
  )
  


}
export default PhoneAuthentication;