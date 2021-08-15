import './work.scss'
import CodeIcon from '@material-ui/icons/Code';
import SchoolIcon from '@material-ui/icons/School';
import StorageIcon from '@material-ui/icons/Storage';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { useState } from 'react';

const Work = () => {
    const [currentSlide,setCurrentSlide] = useState(0)
    const data = [
       {
           id: '1',
           icon: <CodeIcon style={{marginTop : 7}}/>,
           title:'React',
           desc:"over 800 hours of programming in React.js",
           img:"#"
       } ,
       {
        id: '2',
        icon: <StorageIcon style={{marginTop : 7}}/>,
        title:'Mongo',
        desc:"•	Developed 4 full stack web applications to analyze and process Data using MongoDB ",
        img:"#"
    },
    {
        id: '3',
        icon: <SchoolIcon style={{marginTop : 7}}/>,
        title:'Technological Matriculation Certificate',
        desc:"Studied basic computers and electronics: #C, Basic ASSEMBLY, Arduino Project and Networks",
        img:"#"
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
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                   {d.icon}
                                </div>
                                <h2>{d.title}</h2>
                                <p>{d.desc}</p>

                               
                                    <span><a href="#protfolio">Projects</a></span>
                            </div>
                        </div>
                        <div className="right">
                            <img src="https://tutsnode.com/wp-content/uploads/2021/02/Complete-MERN-Stack-Guide-with-Blog-Project.jpg" alt="" />
                        </div>
                    </div>
                    
                </div>))}
            </div>
            <ArrowLeftIcon className='arrow left' style={{fontSize:100,color:'white'}} onClick={()=>handleClick('left')}/>
            <ArrowRightIcon className='arrow right' style={{fontSize:100,color:'white'}} onClick={()=>handleClick()}/>
        </div>
    );
};

export default Work;