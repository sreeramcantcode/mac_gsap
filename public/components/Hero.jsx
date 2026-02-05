import { useEffect, useRef } from "react"

function Hero (){
    const videoref = useRef();

    useEffect(()=>{

        if(videoref.current){
            videoref.current.playbackRate = 2;
        }
    })

    return(
        <>
        <section id="hero" className=" lg:p-72">
            <div>
                <h1>MacBook Pro</h1>
                <img src="/title.png" alt="" />
                 <video ref={videoref}  src="/videos/hero.mp4" autoPlay muted playsInline></video>
                
            </div>
           
              <button>Buy</button>
                <p className="lg:pt-3">From $1399 or $133/mo</p>
                
        </section>
        </>
    )

}

export default Hero