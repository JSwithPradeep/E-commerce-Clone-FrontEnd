import React from 'react'
import Carousel from 'react-material-ui-carousel';
import './banner.css';
const data =[
  "https://rukminim1.flixcart.com/flap/1680/280/image/1defb861e409319b.jpg?q=50",
  " https://rukminim1.flixcart.com/flap/1680/280/image/685712c6cefb3c02.jpg?q=50",
  "https://rukminim1.flixcart.com/flap/1680/280/image/8d4150cc4f3f967d.jpg?q=50",
  "https://rukminim1.flixcart.com/flap/1680/280/image/685712c6cefb3c02.jpg?q=50"
]


const Banner = () => {
  return (
    <div>
      <Carousel className='carasousel' autoPlay={true} animation="slide"
       indicators={false} navButtonsAlwaysInvisible={true}  cycleNavigation={true} 
       navButtonsWrapperProps={{
        style:{
          backgroundColor:'#fff',
          color:"#49494",
          borderRadius:0,
          margin:-22,
          height:"104px"
        }
       }}>
        {
         data.map((img,i)=>{
          return(
            <>
            <img src={img} alt='' className='banner_img'/>
            </>
          )
         })
        }
      </Carousel>
    </div>
  )
}

export default Banner