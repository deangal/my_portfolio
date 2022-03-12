import './work.scss'
import room from '../../assets/room.jpeg'
import garden from '../../assets/garden.jpeg'
import pool from '../../assets/pool.jpeg'
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { useState } from 'react';

const Work = () => {
    const [currentSlide,setCurrentSlide] = useState(0)
    const data = [
    {
        id: '1',
        src: room
    },
    {
        id: '2',
        src: garden
    },
    {
        id: '3',
        src: pool
    }
    ];

   const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

       
         
    return (
        <div className='work' id='work'>
            <div className="slider" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
                
                {data.map((d) =>( 
                <div key={d.id} className="container">
                    <div className="item">
                      <img src={d.src} alt={d.id} />
                    </div>
                    
                </div>))}
            </div>
            <ArrowLeftIcon className='arrow left' style={{fontSize:100,color:'white'}} onClick={()=>handleClick('left')}/>
            <ArrowRightIcon className='arrow right' style={{fontSize:100,color:'white'}} onClick={()=>handleClick()}/>
        </div>
    );
};

export default Work;