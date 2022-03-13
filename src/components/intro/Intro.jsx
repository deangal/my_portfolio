import './intro.scss'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import video from '../../assets/villa.mp4'
import { useEffect } from 'react';
const Intro = () => {


    useEffect(() => {
        document.getElementById('myVideo').play();

    }, [])
    

    return (
        <div className='intro' id='intro'>


            <video  autoplay muted loop id="myVideo">
             <source src={video} type="video/mp4"/>
            </video>

            {/* nav down arrow */}
            <div className="left">
                <a href="#protfolio">
                    <div className="svg_container">
                        <ArrowDownwardIcon style={{ fontSize: 80 , color:'white'}} />
                    </div>
                </a>
            </div>

            {/* page description */}
            <div className="right">

           
                <div className="content_container">
                    <h3>חוויה חדשה</h3>     
                    <h2>תתכוננו לחוויה של פעם בחיים בווילה שלנו</h2>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque quia repellat possimus tempora eius fuga fugiat tempore sint, cupiditate quisquam.</div>
                </div>
            </div>
        </div>
    );
};

export default Intro;