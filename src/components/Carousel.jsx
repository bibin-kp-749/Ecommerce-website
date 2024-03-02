import React from 'react'
import '../css/component.css'

const Carousel = () => {
  return (
    <div>
      <div className="carousel w-full">
  <div id="item1" className="carousel-item w-full">
    <img src="../../src/assets/Carousel_Images/courselimage1.jpg"  className="w-full" />
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img src="../../src/assets/Carousel_Images/courselimage2.jpg" className="w-full" />
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img src="../../src/assets/Carousel_Images/courselimage3.jpg" className="w-full" />
  </div> 
  <div id="item4" className="carousel-item w-full">
    <img src="../../src/assets/Carousel_Images/courselimage4.jpg" className="w-full" />
  </div>
<div id="item5" className="carousel-item w-full">
    <img src="../../src/assets/Carousel_Images/courselimage5.jpg" className="w-full" />
  </div>
<div id="item6" className="carousel-item w-full">
    <img src="../../src/assets/Carousel_Images/courselimage6.jpg" className="w-full" />
  </div>
</div>
{/* <div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
  <a href="#item5" className="btn btn-xs">1</a> 
  <a href="#item6" className="btn btn-xs">2</a> 
</div> */}
    </div>
  )
}

export default Carousel
