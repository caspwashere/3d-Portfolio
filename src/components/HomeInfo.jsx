import { Link } from 'react-router-dom'
import {arrow} from '../assets/icons'

const InfoBox = ({text, link, btnText}) => (
    <div className='info-box'>
       <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain'></img>
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className='sm: text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, I am <span className='font-semibold'>Cindi-Ann</span> 👋 
            <br/>
            A Software Engineer from South Africa
        </h1>
    ),
    2: (
        <InfoBox text="I studied at Stellenbosch University and picked up many skills along the way!"
        link={"/about"}
        btnText={"Learn more"} />
    ),
    3: (
        <InfoBox text="I've worked on various projects over the years."
        link={"/projects"}
        btnText={"View my portfolio"} />
    ),
    4: (
        <InfoBox text="Looking for a dev? I'm just a few clicks away!"
        link={"/contact"}
        btnText={"Contact me"} />
    ),
}


const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo