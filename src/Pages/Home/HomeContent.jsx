import { useEffect } from 'react';
// import bg1 from '../../assets/images/bg1.jpg';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import profile1 from '../../assets/images/profile1.png';
import profile2 from '../../assets/images/me1.png'
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from 'react-router-dom';
import './Home.css'
import { PiDownloadFill } from 'react-icons/pi';


const HomeContent = () => {
    const [text] = useTypewriter({
        words: [' Front-End Developer', ' Back-End Developer', ' Full Stack Developer'],
        loop: {},
        typeSpeed: 120,
        deleteSpeed: 80
      });
    
      useEffect(() => {
        
        const particlesContainer = document.getElementById('particles-container');
        if (particlesContainer) {
          particlesContainer.style.pointerEvents = 'none';
        }
      }, []);

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '../../../public/Cover letter.pdf';
        link.download = 'resume.pdf';
        link.click();
    }
    
    return (
        <div>
            <div style={{ position: "relative" }}>
            <div className='align-right'>
            <button onClick={handleDownload} className='flex items-center justify-center gap-2 text-2xl text-white bg-gradient-to-r from-purple-900 to-pink-500 py-2 px-4 rounded-lg lg:w-1/4 mx-auto my-8'>Download Resume <PiDownloadFill/></button>
            </div>
            <div className="bg-cover bg-center mt-0 flex flex-col lg:flex-row items-center justify-cneter">
        <div
          className="particles-container"
          id="particles-container"
          style={{ position: "absolute", top: 0, left: 0, zIndex: -1 }}
        />
        <div className="w-2/3">
          <img className='w-full' src={profile2} alt="" />
        </div>
        <div
          style={{ fontFamily: "'Lobster', cursive", zIndex: 1 }}
          className="m-10 flex flex-col justify-center gap-4"
        >
          <h2 className="text-3xl text-white">Hi, This is</h2>
          <h1
            className="font-bold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-purple-700 to-pink-500"
            style={{ linearGradient: "to right, #51087E, #B24BF3" }}
          >
            Mim Khatun
          </h1>
          <div>
            <h3 className="text-3xl font-bold text-white">
              <span>{text}</span>
              <span>
                <Cursor />
              </span>
            </h3>
          </div>
          <p className="font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-violet-700 to-pink-500 lg:w-1/2">
            Passionate for exploring new things. Addicted for coding and
            building outstanding websites. From building scalable web
            applications to designing intuitive user interfaces, I am adept at
            transforming complex ideas into practical solutions.
          </p>
          <Link to="/about">
            <button className="flex items-center justify-center gap-2 text-2xl text-white bg-gradient-to-r from-purple-900 to-pink-400 py-2 px-4 rounded-lg lg:w-1/3">
              More about me? <AiOutlineArrowRight />
            </button>
          </Link>
        </div>
      <div className=''>
        <div
         className='box hireme text-white border-2 w-full p-10 rounded-lg my-5'>Hire Me</div>
        <div 
         className='box contactme text-white border-2 w-full p-10 rounded-lg my-5'>Contact Me</div>
      </div>
      </div>
    </div>
        </div>
    );
};

export default HomeContent;