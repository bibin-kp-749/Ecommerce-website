import React from 'react'

const BottomNavbar = () => {
  return (
    <div>
      <div className="bg-slate-500 m-0 p-0 flex justify-evenly h-20 mt-5">
  <button>
    <img src="https://damroimages.blob.core.windows.net/damroimages/01.jpg" className='w-15 h-11' alt="" />
    <p className='text-xl font-medium' >sofas</p>
  </button>
  <button className="active">
  <img src="https://damroimages.blob.core.windows.net/damroimages/02.jpg" className='w-15 h-11' alt="" />
  <p className='text-xl font-medium'>Recliners</p>
  </button>
  <button>
  <img src="https://damroimages.blob.core.windows.net/damroimages/03.jpg" className='w-15 h-11' alt="" />
  <p className='text-xl font-medium'>Bedrooms</p>
  </button>
  <button>
  <img src="https://damroimages.blob.core.windows.net/damroimages/04.jpg" className='w-15 h-11' alt="" />
  <p className='text-xl font-medium'>Dining Sets</p>
  </button>
  <button>
  <img src="https://damroimages.blob.core.windows.net/damroimages/05.jpg" className='w-15 h-11' alt="" />
  <p className='text-xl font-medium'>office</p>
  </button>
  <button>
  <img src="https://damroimages.blob.core.windows.net/damroimages/06.jpg" className='w-15 h-11' alt="" />
  <p className='text-xl font-medium'>Living</p>
  </button>
</div>
    </div>
  )
}

export default BottomNavbar
