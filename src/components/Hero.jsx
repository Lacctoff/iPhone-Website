import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { heroVideo, smallHeroVideo } from '../utils';
import { useState } from "react";
import { useEffect } from "react";

const Hero = () => {
    //to know our screen size and make our video adjust accordingly i need a useState hook:
    const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)

    //i discovered that when i was manually adjusting my window the vid did not adjust dynamically hence:
    //function
    const handleVideoSrcSet = () => {
        if (window.innerWidth < 760) {
            setVideoSrc(smallHeroVideo)
        } else {
            setVideoSrc(heroVideo);
        }
    };

    // but we know that to fire a function we need the useEffect hook
    useEffect(() => {
      window.addEventListener('resize', handleVideoSrcSet);
    
      //we need this return to clean up the hook after its executed, it is a culture to avoid your app breaking
      return () => {
        window.removeEventListener('resize', handleVideoSrcSet)
      }
    }, [])
    



    useGSAP(() => {
        gsap.to('#hero', {
            opacity: 1,
            delay: 2,
        });

        gsap.to('#cta', {
            opacity: 1,
            y: -45,
            delay: 2,
        })
    }, []);


  return (
    <section className="w-full nav-height bg-black relative">
        <div className="h-5/6 w-full flex-center flex-col">
            <p id="hero" className="hero-title">iPhone 15 Pro</p>

            <div className="md:w-10/12 w-9/12 sm:w-5/12 mb-5">
                <video className="pointer-events-none" autoPlay muted playsInline={true} key={videoSrc}>
                    <source src={videoSrc} type="video/mp4"/>
                </video>
            </div>
        </div>

        {/* CTA buttons */}
        <div id="cta" className="flex flex-col items-center opacity-0 translate-y-20 mt-5">
            <a href="#highlights" className="btn">Buy</a>
            <a className="font-normal text-xl">From $199/month or $999</a>
        </div>
    </section>
  )
}

export default Hero