import './protfolio.scss'
import ReactCardFlip from 'react-card-flip'
import { useState } from 'react';

const Protfolio = () => {
    const [isFlipped0,setIsFlipped0] = useState(false)
    const [isFlipped1,setIsFlipped1] = useState(false)
    const [isFlipped2,setIsFlipped2] = useState(false)
    const [isFlipped3,setIsFlipped3] = useState(false)
    const [isFlipped4,setIsFlipped4] = useState(false)
    const [isFlipped5,setIsFlipped5] = useState(false)


    const handleClick = (e) => {
        e.preventDefault()
        if(e.target.id === "0"){
            setIsFlipped0(!isFlipped0)
        }
        if(e.target.id === "1"){
            setIsFlipped1(!isFlipped1)
        }
        if(e.target.id === "2"){
            setIsFlipped2(!isFlipped2)
        }
        if(e.target.id === "3"){
            setIsFlipped3(!isFlipped3)
        }
        if(e.target.id === "4"){
            setIsFlipped4(!isFlipped4)
        }
        if(e.target.id === "5"){
            setIsFlipped5(!isFlipped5)
        }

    }
    return (
        <div className='protfolio' id='protfolio'>

            
            <div className="flip_container">
                    
                <div className="item1">
                <ReactCardFlip isFlipped={isFlipped0} flipDirection="horizontal" >
                <div onClick={handleClick} > 
                <div className="img_wrapper" >
                        <img  id="0" src="data:image/jpeg;base64,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" alt="" />
                        <h3  id="0">1</h3>
                </div>
                       
                    </div>

                    <div id="0" onClick={handleClick} className="backItem" >
                        <img  id="0" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSExIVFhUXFRUVFRUVFRUVFRcVFRUWFhUVFRcYHSggGBolGxUVITEhJSkrLi4uFx80OTQtOCgtLisBCgoKDg0OGxAQGi0lHSUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAADAAECBAUHBgj/xABNEAABAwEEBQYJCgIIBgMAAAABAAIDEQQSITEFE0FRcQdhgZGhwQYiMlJUkrHR8BQVF0JTYpTS0+EjgkNjcpOywuPxJDODoqSzRGRz/8QAGgEAAwEBAQEAAAAAAAAAAAAAAAECAwQFBv/EADIRAAICAAMFBwQCAQUAAAAAAAABAhEDEiEEEzFBURQiYXGBsfAFkcHh0fGhQkNSYtL/2gAMAwEAAhEDEQA/AOL4Kcbc+CBGSdqt2VlSR91/YwnuUspAEk6SA4CCQCm0J6IFyGAQ3DFGooPCaEQaaqQanARWtTA2PA/QrrZao7M2QML79HObeAusc/IEV8ldMj5JrQP/AJsX4d36i8ZyWGmlLN/akHXDIF9FgIA5X9Fdo9Ni/Du/VUxyW2n02L8O79VdSAUrqPQdnLRyXWn02L8O79VN9F9o9Ni/Du/VXU6JXUegWcu+i+0emxfhnfqqJ5Lp/TY/wzv1V1KiRanfgFnLxyWzems/DH9VTHJbL6az8Mf1V02ia6mFnMxyWSemt/Df6qccljvTB+HH6i6XdSogRzYclh9M/wDHH5055K//ALp/uG/nXSbqaiB2c2+iobbY/ohZ+ZOOSlnpkvRHGukUTUQI599Fdn9Jn6ovyryvKJ4Aw2Kya9k0rnaxjLr7lKOrU+K0GuC7YvActTv+AYN9oZ2MkKAPn9zEJ5orsjUBwUAV35IcYRpxgoRZJsB6JUUqKVMOlIASchOkSgBNCijxNwPDvCHRIdCYyi0tARXrRG3znBnr+L3rPVzQwm18eobelvt1bcMX1F3PDOiUuBceKM89yGXFX7dZJIpHxysLHtcQ5h2HdzquWJoloUBJRpG0cRzlRhAVzTsF2eRoxAcaEZEE1qN4Sb1HWllWihKEOAGu2iLazddTcUyBNCM0IED6q0xOwPT8nJppKyn+tA9Zrh3r6PC+bPAl9232U/18Xa4DvX0mEwJpwEyeqAFRKidJADUSITpIAiknTIAeiZKqdADJJJIAaiSRKZNARK57y1O/4SEb5q9THe9dCK5ty2O/g2cb3yHqDPeqQHFpQq7grkwVOd1BVZgV7RkmGDQhukJGKu2qzXY4ifrMvDhfeO5DY0ioJArLo/4bTvLuy771VZGtKe0RmCJjT47TIX7hecLuO3AJMEZD80RoRaKQamFF6xQVgledjox618/5VQXqIvAmQ2D5brhi/CGhxblfvVzqMqLzOqWcJRd07NZRaStURovQ+BEoZamSeZV3SBQdpHUvPhX9GS3KnfgjFVxaDCdTTNvw9mE02vGbgA/nIwB6sOgLyxWpbJ7wxWYQpwllgo9B4ruVhLLBfcG7zTBeh8OdBQ2S03IK6pzGlt516jgKPFeIr0rE0Y6kjDuIPUarU0/bTLQnMIk5KarhzCKWR9TEorenLJIyUiYND6Md4hq2jmNcKdBHTVV2Zq9p606x187gOo4K7doj/S/QzIgAjsQ4nkYimRGIBzBBz2457ERpVmZueDVRabM+hp8ohx2VD2kjqK+nF8t6CfSeE7pYz1PC+oCVSWgBAU9UMFPeRQrCVSqh3kryKGEqmqoXkr6KAJVNVDvJXkUAWqaqHeSvIoCZKShVNVOgCKJKjVPVACXL+W2TxbMP/wBT/wCv3Lpy5Xy1SEOs9Mw1xHX+ya5iZyeVV3I07qkk5nE9OaFI+tMAKADAAVptO886gZUmj3Le8K9DPsxgDpdZes8bsgAwuqTGANgJOPOVm2ZjSSTsxWp4S20y6sk5Mu9Rr3rGUnnSXDU1jFZG+ZhMYSQBmcF7nw5sULLHYmxsaDGxzHuAALnG64lxGdSXLxtiNHg7sVtaXtxkiunYQR7O9TNPPGuH8lYdZJXxPO0RLOyrgPiiiiQ4LVmaPeSaVrZTCMBcoBzjEewLwkhqaq+LSaLNlzWGFDImdGLPNQII7HUQAiVW7OdE3OQ3J6pikNk7OaFGkfVV2FTJTEJpxTzOqFFRecE6EIFTa4bSBgc+bZxQgVVn8opkmzo+ajmu3EHtX1XeXyLZ5KALro5YXZfIxkM5/wDTVITOu3kry5H9L7/Q2/3x/Ionlcl9FjH/AFHHuTsDrt5MXrkH0sz+jxes9RPKtaPsIet/vRaA7DrEtYuNnlTtX2MPVJ+ZQPKla/soPVk/OjMB2XWpaxcY+lG2fZwerJ+dN9KNs+zg9R/50rCmdo1ifWLjA5UrZ9nB6sn5045VLX9lB1SfnRYUzs2sSvrjY5VbV9jB1SfmTjlYtO2CHreO9FhqdkD095ceHK1P6NF671Mcr0nojP71w/yp2B18Fcj5a5f40I3RA9b5Pcnbywu22NvROf0147w68Kvl8jZdXq6NDLt6/wCSXGtaDzuxFhqebkOFajOmYrlXLOnOhkqm8+P0hWCVFjEJKI00lQFVecVOqlopPSibDRF1mFECqe8hjTIBTCinBQwQS8oqNU1Uh3ZFqclRqnqqoQ9UlEJ0CJBSqoJVQBKqi5IqJQDFVAmGKLVDPCqaJGa+gCOLWdwQsTu6BX2KDmpgWvlp3BOLedwVNJAF4aQO4JxpE+b2qjRPRAF35xO7tS+cebtVKie6gC784/d7UvnL7vaqV1K6gC4dJfd7U3zl93tVO6ldQBc+cfu9qY6Q+72qndSuoAufL+btUTb/ALvb+ypkJkAXTb/u9v7KElqvUFKUrt3qqphu/wCOkIAk3ykeqA3Ovx1ogKTAi44ooKATiigpDTJ1SqmJSBQMeqVUydACqkmSQBFJGEGGfVQqJjxzwSzI2eBNcUQCYKxqxTZxBPelE4DDHs9iWYvszumwKQBRSSDgM+ZSIOYHYlmGtm8QLG1TiLnxRi012A7fgJ3Q7Ser90sxtHZVXAqmLn7kWQgtpRo57uKKLPwPSpiPdTDYfejOPsfgUCw8es9mSdsbt3We4K/q8Me2qlqUbwOwczPFn3p/kyviJLUn/dLOa9hXQots9Al8nCv6rmqkYjtRnK7GuhQ+TjcmFnGavalx2GibVHLH46EZyexpcikLME/yYK+6IpCAlG8H2HwM42cJagblfMRBoU7oSMevBG8F2HwM/UcyfU8y0NTzptTvRvBvYX0M0WdIwLS1HFIxfBonvCeweBmCEjZ01oU5Yd1Ow9mC0tRzfHFNqM6dlao3pD+nMowtANSAeI+KpFnOFedBvIHRUqDrKMdnT3I3iE9ha5FIWfbXsUxFtrhwRhDXI5Z1yTlrgc724DJGYns0ehXMRpWmCjVWC018YYcOyqZzq+KGgdCeYzls65MCE6M4tGAb0p2RClacSTQJ5iezSurK5TIjo8aAjt70T5Jznq/dGZErZ8R8EGFmcMcCNtDVQZZiefs7VosaHeNG0h3mjbwCOLE8f0DP53An/GubeH0S2BSqra9X+P8AHIoR2ev9H1H90IRhrqAHv4LZNjIzs5bzxk19pVa1x0e11Tli/Igc/PsSU9TXF2JRimuNrly58UvnQgyB22OX1Se5VbhY64eOWNOlaUckXmP46w19itOMMg1bnOYdhdRwB40BClSN3ssJruvVcPHw4IzC2M51/tClfYkIwCAHXgdp7wrsLnBzmExxhuZEbDwphU1ViSeAijhe5wxsZHOKFFlrAhJXon4qvNaNv/Bmahmwlp3gfuoTMApk+u3b+y0LK2MeRIC85a1o7NlVKO3yEkF4FM6gYdFEszHuIVrSb6ar3opaltMH06KhPJAKVwNM8wepWrTPG4Y1r5zYwK8RVShmFKRyBp520qed2KTbK3OHdKvnqUxECK4DifgpxZt1DzB3cQjMtEhN3PmIB9qmYwHXr0Iw8nWYXujYi2CwovkU2Rg4gdZp2qbbOBz/AMwVxrHnyGwnmYIyerNB1l+rbgDsaEeLiN+yiYPBiuK18vYC4jYDXdjXoUxZ6Zg1POB3o8DYmir3hzuZzqUpvaMSixvgP9HFw1kze0iiBrDT4teV/NSlJDTYff01onbAKYkDmJV0QNLvED20wkYTeu18lwIzGfwU8hibhdir94ue7pu4BKylhLVsz5IARVpBI2V6800TKitekmn+6utmiOFIeI1jD1oM0TWuqQSzNuOZwwqOKLIlhxTzJr0KzoBseAen3KDYcaVx244U4rQDdpEMfMQSerFRcIjUX2g7CGPHXvRYpYEeOn3r3KboGecegYIcjWDGtd3wVdo2MVo15P1qktHNTfxViMPoHO1MbTlVor1UqnYtxGWnP56GZ8nAzIB3Ek9dAoua0DBwPWFfmgic4HWNG8NjdQ+5StEpYKsMdytKtGIOwOvCtc0WLcxV8Pf2ZlsiqK4DnPuUjG2nlAngfcte80NGulrUVuNa0kA7ycAUCzvgYTRk1d7iyo4YIzMXZo9V43/C/kz4YHEVpdA3NzSe5g3tPABWrXN9ZssvOHHEc+GBCk+Jl0GV73nMMacgd7z7E83Uh4EdVDiubqvfTyWpmRw3zU5A7BiUedxGNHAb8u5XXW1mQjujcJSPYqVskH1ajZdJr1KlK2ZYmFHCg6lb5/GBs1lDwSRXHOtOglPLGKUDY/XPvWm2zgNDA18hAxAqGg7csyhGxynKzdh73JZ7Za2KoVWta6N/hmTDZCTgf2RZosfKHarOpIdcLSy9nXdzJXWfVhc4b6vVubOSOyxUa4Pnd+yTZdZoqUlxaA1r8cSG9FNyXzLJuZ66pvnJzqeJUA8bgsqbPQUsFcn9/wBGkLDOzEA/ymvYhWi03hVw8YZjfjtQYra9uTj1q060CTygK0oTxwB6DQpa8zZSi4tQb8nwKx0jJSl8jhQexIaRk889NClZ3iP6oL9pcK05gO9TfpOU/XI6AnzMYzlVyk76L+0NLaBI01AD86jCtNhQLJO0CpAeefIdG1WG6TftoeICkJY34PYGnezBHDiPSUlJS18VV/i/MG62/wBXH6gUm24HOOM8BQqkI/4lwnAZnmzwV8aQLcIw1g4Y9J2oaoWHjzlblKq04X8+5XtTRgWg3TsxwKnFaLgFBQ7SRj0blI6Sl8/sCk3Sb9prxCNRpwUm1Jr0X8gjpB/n9gUxb3HOh4gKNqc17S4NDHNzpkQq9kaCSXE0buzO4BOlREsXEjNRzXYZwaXAjAZmmynwOtFkt2JIZHjmTiTxUhbQBRsbQDnWrq8UH5Vj/wAuKn9hItSjHhLj4CFsPmx+oFPXMdgWhp2FmGPOE4tLTg6GPoFD2Kva4wKFlbp2ZkHcnQpTklea1z+M27E25A5zwQ6hacwaVAb/AIiss22mDWtHRU9JK1LVamFpriDTppis86QcMGtYwcwULXU6cWoJJSpJdLYNttl2f4B7kQ2ouF2RvA0pQ70M6Sl89SbpSTaQeIVUYxxI8HJ+q/ZCM3XEvaaj6pwxO9TOkX7KDg0KNul1vjgGv1wMeBQrGxhBc+t0YADMlFaWyM8lLJB+vAM3SMm+vED3KE9oDxUgBw2jCo5wiOtrR5EMY4i8etD+cH+bH/dhFeA3NVTnfp/RKzyta28W33HIHIDhtUjpJwyEY4MCXy+uDooz0UPWMlTtd0EFuTthzG8JpWKeK8OPclpz5Mut0pJtDDxYKKrbJWmjgLlcwMq7wnsNkMmJcGtG09wVp9ksozkkdwI7gjRMV42Lh3ark2/jIxujY0XmX3HHHyBuFNqTtJu2MiH8iI99krjrMecpnQ2R2T5GHrHsS8zW5LSE4/cidKEij2REc7APYhWVjL+su1a3yI8/H7wPcqstnIkEdQa5PGRbvC036QEYuRNA59qp+Bjhzc23ivSL6W7+a9OHEjPPaZMhKBuAICAdHznHVv6/3QpLdIc5H9dPYhNnk+0k9coSYYmLhyfecn6oUjng6tweHHCjq96uv0kWeI3IYILbe+hBeXChzxpwKynyqlHNyOeW1bjWEtX15LppxNv5rP2kfamOiZNjoz0rJAbndFeCI15G1GVhHaMF8YfaX6Lstglb9So+7j7EGCShoeBRLPpFzdqsW17ZW6wDxm44bQMwVGvBmyWG1nwm7XJ9AelYrj6VqCAQeKlFYRSr3htchSrqcNiHNIHCInNpDTzsrUe5BllLiSUa0EpYeeT4rSl5rmXDFAPrSn1R3IbHWclw/i+Lzj3KqHKd9OvEe9XKK+xbdBC51/WSNNKYgFPJo11KscHjmwPUVSvIkM5aagpOylLDb70avp8or30r6NpZ4NJN+B4jb8blestlhZC18rLznC+BUjA5ZKr0s544cpYkoJ8Nb5Vy+5nwPqabwR1hWpLK6OFgpU1cXUqd1OwIx07dwZEwDmAHcoO8IZzldCVSfI2zbNFO5tvhpF6FMtdtaeooZcN4V1nhBaRnc/7kZnhE8/8AMYw9HvTqXQm9nf8AuNecf2Zl9aWhJPHI5u9TLbPOPFGqfspgDxCsyaOZHdukgk0JrXA8yiUlwN8DBmpqcWnFc0/jKumH4M4u9qrxaOmdlG7pw9q1rTLHAa4vfsvUNOCzZtKSv+vTmCUbrQvHjh57m9ei/kf5mn80eu33pjoefzR64QDM45uPWhNAG1x4mqvUwawk+D+6/wDJs6HscsbyXMwLaYEHaNyyrXHcdc5y7rNVETOGRPWrUcoloyQ7cH4Xx7wkrTtluUJwWHHRrhfj4/kzi5Hs1mfJ5LSd5yHWq9pgLJDFtv068itqa2iMBjNnxXiqlpVHPgRU3LeOlHR+fQgzQjvrPaOFSnk0I05y9QHvVKS1uOZKA6QnapqXGzeU9mSrJfqbQ0ZHdDdYaDhigv0NXyJAeY4doWO2gwCkJiNqdPqT2jBkqlCvJjTgsN1wo4IZkRtIWm+xt7NpwO2h2KpYo9a8N2bTuC0iu7bPMxcSsXdw1uq9TUis1I2zl2JvhjKbN9fjNVxFIco3+qVtG2tY0AHxWig4KpJprcFkm3yPXxMDBhFKU661zdK3zKPyOX7N/Un+bpvs3disHTB3Jm6ZftoO1V3+hzOOyXrN/PQVi0U5ziJGvYKcO1StNjs7HXbhdvN92aJHp520VCzNIPN8ll4g455V2I716uipvZo4a3aU3fNa+xTqphyr1T3l0UfPrEosXlYsM1CqAcptkpipcbRvhbRkmpHvI4IngO1ceP3BhvXjpPFcR5pIXoNCWyrS08R3hYel47sp+94y58Nd5pnv/UJKWBHFj19/2gF9K+g3kry3ynib4sCROXqteSvoyFLaDb0U1j6tewOAFQDv+CUPT7/HoMqCm7JVtESUfTe1LSj6nHMYLFRqdHoSxVLYr537MqBPeQ7yV5b0eTvKC3lGqHVOHIoe9sK15BqF62J95kJ4V6ivGly2IdKBga0nJrT2LLFi2en9N2mEM2d0tCOmX1ldzFULynbprzyd+PYq5cqjHQ59ox08STXUIZE2sKHeTVVZUc2+fUNfRbGayR/2x7VUvI9lmDXB3mmqUo6F4WL34tvmvc9Nb7HGXmUjxxQg1PRgvOSyVJK1prUTGSfjBYF9Z4Sviel9SxYxayc9fMIXJy5BvJry2o8h4wW8lVCvJi5FC3pveDtma8vL2hwAAo4VFT/srWlnRx0DWNbhUlrA08wwUPB7xIy52R8boWVpa1XiTv8AYuenKdHvbyOz7HFtd5q/EqSzElDvIVUi5dSifNzxm3bJ3kryFeSvIoz3gUuXsdFaQbZoY2P8otvnmvkkDqovJWCMOeK+SMX8Bs6clat1rLnlx2rLFTloj1vpuMsBPGfPRe7/AAvuZd0pXTuSSW58/bFQ7kqlOkgM7L+j7SW9BqEXS9pv0O7vSSWTis9nox2zE7O8PkZl5K+kktKODOxX0r6SSKKzss2Kaj29SlpF/jn4yTJKWln9DrWLLsrX/ZexV1ia+nSVUce8Y19K+nSTaHnY4kU7Q7H+Vv8AhTpJVqVKT3T9PySndQ9A9gQzImSQkaYk3mYtYlfTJIozzMe+ovOHSEkk0hSk2ma1qtP8EcGtWUXpJLPDWnqeh9QxZSnG/wDivyNfTXk6Sujzs7GvpBydJOgUmaxt38MNyosmeWpSSUQgkdm2bTiTisz+IHfUbySS1o85yY15K8kkgnMzRsrrrcMSc/cqkhNUklmuLOvFxZOEY8kf/9k=" alt="" />

                </div>
                </ReactCardFlip>
                </div>

               
                <div className="item2">
                <ReactCardFlip  isFlipped={isFlipped2} flipDirection="horizontal" >
                <div onClick={handleClick} > 
                <div   className="img_wrapper" >
                        <img id="2"  src="https://static.whatsapp.net/rsrc.php/v3/yO/r/FsWUqRoOsPu.png" alt="" />
                        <h3 id="2">2</h3>
                    </div>
                </div>

                    <div id="2" onClick={handleClick} className="backItem">
                    <img id="2"  src="https://static.whatsapp.net/rsrc.php/v3/yO/r/FsWUqRoOsPu.png" alt="" />
                </div>
                </ReactCardFlip>
                </div>
                
                <div className="item3">
                <ReactCardFlip isFlipped={isFlipped3} flipDirection="horizontal">
                <div onClick={handleClick} > 
                <div className="img_wrapper" >
                        <img id="3" src="https://acquire.io/wp-content/uploads/2017/12/7-Ecommerce-Technology-Trends-that-Empower-Businesses-Updated.png" alt="" />
                        <h3 id="3">3</h3>
                    </div>
                       
                    </div>

                    <div id="3" onClick={handleClick} className="backItem">
                        
                    <img id="3" src="https://acquire.io/wp-content/uploads/2017/12/7-Ecommerce-Technology-Trends-that-Empower-Businesses-Updated.png" alt="" />

                      
                    </div>
                </ReactCardFlip>
                </div>

                <div className="item4">
                <ReactCardFlip isFlipped={isFlipped4} flipDirection="horizontal">
                <div onClick={handleClick} > 
                <div className="img_wrapper" >
                        <img id="4" src="https://acquire.io/wp-content/uploads/2017/12/7-Ecommerce-Technology-Trends-that-Empower-Businesses-Updated.png" alt="" />
                        <h3 id="4">4</h3>
                    </div>
                       
                    </div>

                    <div id="4" onClick={handleClick} className="backItem">
                        
                    <img id="4" src="https://acquire.io/wp-content/uploads/2017/12/7-Ecommerce-Technology-Trends-that-Empower-Businesses-Updated.png" alt="" />

                      
                    </div>
                </ReactCardFlip>
                </div>

                <div className="item5">
                <ReactCardFlip isFlipped={isFlipped5} flipDirection="horizontal">
                <div onClick={handleClick} > 
                <div className="img_wrapper" >
                        <img id="5" src="https://acquire.io/wp-content/uploads/2017/12/7-Ecommerce-Technology-Trends-that-Empower-Businesses-Updated.png" alt="" />
                        <h3 id="5">5</h3>
                    </div>
                       
                    </div>

                    <div id="5" onClick={handleClick} className="backItem">
                        
                    <img id="5" src="https://acquire.io/wp-content/uploads/2017/12/7-Ecommerce-Technology-Trends-that-Empower-Businesses-Updated.png" alt="" />

                      
                    </div>
                </ReactCardFlip>
                </div>
                {/* <ReactCardFlip isFlipped={isFlipped1} flipDirection="horizontal">
                <div  onClick={handleClick} className="img_wrapper">
                        <img id="1" src="https://www.eff.org/files/issues/student-privacy4.jpg" alt="" />
                        <h3 id="1">Basic html/api App</h3>
                    </div>
                       
                    

                    <div id="1" onClick={handleClick} className="backItem">
                         <h3 id="1" className='backTop'>Basic html/api App</h3>
                         <span id="1" className="backText">
                        In this project I learned on basic HTML and JS and how a api works
                        This project was more about understanding what goes behind the scenes of React and the HTTP requests
                        
                        </span>   
                </div>
                </ReactCardFlip> */}
                </div>

                
               
        </div>
    );
};

export default Protfolio;