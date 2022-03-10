import './intro.scss'
import me from '../../assets/me.png'
import { init } from 'ityped'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { useEffect, useRef } from 'react';

const Intro = () => {

    const txtRef = useRef();

    useEffect(() =>{
        init(txtRef.current, { 
            showCursor: true, 
            backDelay:1500,
            backSpeed:80,
            strings: ['Junior Web Developer']
         })
    },[])

    return (
        <div className='intro' id='intro'>
            
            <div className="left">
                <div className="imgContainter">
                    <img src={me} alt=""/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hey There, I'm </h2>
                    <h1>Dean Gal</h1>
                    <h3>Freelance <span ref={txtRef}></span></h3>
                </div>
                <a href="#protfolio">
                    <div className="itemContainer">
                    <ArrowDownwardIcon style={{ fontSize: 80 , color:'black'}} />
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Intro;