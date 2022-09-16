import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'
import {motion} from 'framer-motion'
import NumberCounter from 'number-counter'
 
const Hero = () => {
    const transition = {type: 'spring', duration: 3}
    const mobile = window.innerWidth<=768 ? true: false;

  return (
    <div className="hero" id='home'>
        <div className="blur hero-blur"></div>
        <div className="left-h">
            <Header />
            <div className="the-best-ad">
                <motion.div
                initial={{left: mobile? "165px": '238px'}}
                whileInView={{left:'8px'}}
                transition={{...transition, type: 'tween'}}
                ></motion.div>
                <span>A melhor Academia da Cidade</span>
            </div>

            <div className="hero-text">
                <div>
                    <span className="stroke-text">Consiga</span>
                    <span> o corpo</span>
                </div>
                <div>
                    <span>dos seus Sonhos</span>
                </div>
                <div>
                    <span>
                        Aqui vamos ajudá-lo a moldar e construir seu corpo ideal, para você viver sua vida ao máximo.
                    </span>
                </div>
                <div className="figures">
                    <div>
                        <span>
                            <NumberCounter end={140} start={100} delay='4' preFix='+'/>
                        </span>
                        <span>treinadores especialistas</span>
                    </div>
                    <div>
                        <span>
                            <NumberCounter end={978} start={800} delay='4' preFix='+'/>
                        </span>
                        <span>novas matrículas</span>
                    </div>
                    <div>
                        <span>
                            <NumberCounter end={50} start={10} delay='4' preFix='+'/>
                        </span>
                        <span>programas de treinos</span>
                    </div>
                </div>
                <div className="hero-buttons">
                    <button className="btn">Comece Agora</button>
                    <button className="btn">Saiba Mais</button>
                </div>
            </div>
        </div>
        <div className="right-h">
            <button className="btn">Assine Agora</button>

            <motion.div
            initial={{right: '-1rem'}}
            whileInView={{right: '4rem'}}
            transition={transition}
             className="heart-rate">
                <img src={Heart} alt="" />
                <span>Frequência Cardíaca</span>
                <span>116 bpm</span>
            </motion.div>

            <img src={hero_image} alt="" className='hero-image' />
            <motion.img
            initial={{right: '15rem'}}
            whileInView={{right: '31rem'}}
            transition={transition}
             src={hero_image_back} alt="" className='hero-image-back' />

            <div className="calories">
                <img src={Calories} alt="" />
                <div>
                    <span>Calorias Queimadas</span>
                    <span>220 kcal</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero