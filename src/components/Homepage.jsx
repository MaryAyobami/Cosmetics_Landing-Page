import React,{useState} from 'react'
import { motion } from "framer-motion"
import makeup5 from '../images/makeup (5).jpg'
import makeup1 from '../images/makeup (1).jpg'
import makeup2 from '../images/makeup (2).jpg'
import makeup3 from '../images/makeup (3).jpg'
import makeup4 from '../images/makeup (4).jpg'
import makeup10 from '../images/makeup (10).jpg'
import makeup6 from '../images/makeup (6).jpg'
import makeup8 from '../images/makeup (8).jpg'

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
}


function Homepage() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <React.Fragment>
        <div className=''>
  
            <div className=''>
                {/* header */}
                <div className='m-auto flex justify-between items-center py-4 px-12 text-yellow-600 h-[8vh] border-b-2 border-b-yellow-700'>
                    <div>
                        <h1 className='font-bold'>Beau</h1>
                    </div>
                    <div className='w-[25%] flex justify-between'>
                        <a href="/">Home</a>
                        <a href="/">Products</a>
                        <a href="/" className=''>Contact us</a>
                    </div>
                </div>
            
              {/* main */}
              <div className='flex justify-between items-center lg:p-20 lg:h-[80vh]'>
                <div className='hidden md:block lg:block'>
                    <img src={makeup5} alt="" className='' width={500}  />
                </div>
                <div  className='text-center lg:text-start p-12 lg:w-[55%] lg:p-4 '>
                    <h1 className='text-5xl  p-4 leading-snug lg:leading-20 lg:text-6xl font-extrabold lg:p-2 font-mono '>Get All Your Favourite Cosmetic Products</h1>
                    <p className='font-serif p-2 leading-12 lg:leading-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure amet, esse neque nulla culpa ut porro ad voluptates omnis repudiandae. Voluptatem repellendus maxime deserunt minus commodi explicabo ea sed, distinctio ipsum nisie.</p>
                    <button className='mt-4 p-2 border-2'>SHOP NOW </button>
                </div>
              </div>

              {/* popular products */}
              <div>
                <div className=' text-center flex flex-col items-center mx-auto font-bold text-4xl p-4'>
                   Our popular products
                </div>
                <motion.div
                initial={{ opacity: 0, x: '-100vh' }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                >
                  <div className='grid lg:grid-cols-2 px-12 py-4 gap-1'>
                          <div >
                          <img src={makeup1} alt="" className='w-[100%] h-[50%] p-2'  />

                          <img src={makeup2} alt="" className='w-[100%] h-[40%]p-2'   />
                          </div>
                      
                      <div>
                      <img src={makeup3} alt="" className='w-[100%] h-[40%] p-2'  />
                      <img src={makeup4} alt="" className='w-[100%] h-[50%] p-2'  />
                      </div>
                    
                 </div>
                </motion.div>
                    </div>

                
           

              {/* articles */}
              <div className='px-12'>
                <div className='pb-6'>
                  <h1 className='font-bold text-4xl p-0 m-0'>Beauty Tips</h1>
                  <p className='text-[1em] py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, reiciendis.</p>
                </div>

                <div className='w-[100%] flex flex-col  lg:flex-row justify-between '>

                  <div className='py-2 lg:w-[45%]'>
                  <div className='w-[90%] h-[50%]'>
                    <img src={makeup10} alt="" className='w-[100%] h-[100%]  '/>
                    </div>
                    <div className='pt-4 flex flex-col h-[23vh] justify-between'>
                    <h2 className='text-xl font-semibold w-[90%]'>Glow Like a Pro with our NEW Glow BB Cream.</h2>
                    <p className='w-[90%]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, esse.</p>
                    <span className='flex justify-start py-2 font-bold '>Read more</span>
                    </div>
                  </div>

                  <div className='py-4 lg:w-[45%] '>
                  <div className='w-[90%] h-[50%]'>
                    <img src={makeup6} alt="" className='w-[100%] h-[100%]  '/>
                    </div>
                        <div className='pt-4 flex flex-col h-[23vh] justify-between'>
                            <h2 className='text-xl font-semibold w-[90%] '>How to apply Eyeshadow like a Pro.</h2>
                              <p className=' w-[90%]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, esse.</p>
                              <span  className='flex justify-start py-2 font-bold '>Read more</span>
                        </div>
                  </div>
                  <div className='py-4 lg:w-[45%]'>
                    <div className='w-[90%] h-[50%]'>
                    <img src={makeup8} alt="" className='w-[100%] h-[100%]  '/>
                    </div>
           
                    <div className='pt-4 flex flex-col h-[23vh] justify-between'>
                    <h2 className='text-xl font-semibold leading-8 w-[90%]'>Say Goodbye to Dry Skin: The Ultimate Guide to Glowing Winter Skin.</h2>
                    <p className='w-[90%]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, esse.</p>

                    <span className='py-4 font-bold '>Read more</span>
                    </div>
                  </div>
                </div>

                <div className='flex justify-end'>
                  <button  className='border-2 p-2'>Read more</button>
                </div>
              </div>

              {/* reviews */}

              {/* footer */}


            </div>
        </div>
    </React.Fragment>
  )
}

export default Homepage
