import React from 'react'
import makeup5 from '../images/makeup (5).jpg'
import makeup1 from '../images/makeup (1).jpg'
import makeup2 from '../images/makeup (2).jpg'
import makeup3 from '../images/makeup (3).jpg'
import makeup4 from '../images/makeup (4).jpg'

function Homepage() {
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
              <div className='flex items-center p-20  justify-between h-[80vh]'>
                <div className=''>
                    <img src={makeup5} alt="" className='' width={500}  />
                </div>
                <div  className='w-[55%] p-4 '>
                    <h1 className='text-6xl font-extrabold p-2 font-mono leading-20'>Get All Your Favourite Cosmetic Products</h1>
                    <p className='font-serif p-2 leading-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure amet, esse neque nulla culpa ut porro ad voluptates omnis repudiandae. Voluptatem repellendus maxime deserunt minus commodi explicabo ea sed, distinctio ipsum nisie.</p>
                    <button className='p-2 border-2'>SHOP NOW </button>
                </div>
              </div>

              {/* popular products */}
              <div>
                <div className='flex flex-col items-center mx-auto font-bold text-4xl p-4'>
                   Our popular products
                </div>
                 <div className='grid grid-cols-2 px-12 py-4 gap-1'>
                    <div className='flex flex-col'>
                    <img src={makeup1} alt="" className='w-[100%] h-[50%] p-2'  />

                    <img src={makeup2} alt="" className='w-[100%] h-[40%]p-2'   />
                    </div>
                 <div>
                 <img src={makeup3} alt="" className='w-[100%] h-[40%] p-2'  />
                 <img src={makeup4} alt="" className='w-[100%] h-[50%] p-2'  />
                 </div>
               
                 </div>
              </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Homepage
