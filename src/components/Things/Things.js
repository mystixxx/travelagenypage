import React, { useEffect } from 'react';
import './Things.css';
import signup from '../../assets/signup.svg';
import money from '../../assets/money.svg';
import travel from '../../assets/map.svg';
import stroke1 from '../../assets/strokeLine1.svg';
import stroke2 from '../../assets/strokeLine2.svg';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Things = () => {
    useEffect(() => {
        AOS.init();
    })
    return(
        <div className='thingsToDo' data-aos="zoom-in" id='aboutSection'>
            <h1>Things you need <span className='todoText'>to do</span></h1>
            <p>We ensure that you&apos;ll embark on a perfectly planned, <br></br>safe vacation at a price you can afford.</p>
            <div className='boxes'>
                <div className='thingsBox'>
                    <div className='box-icon'>
                        <img alt='signup' src={signup}/>
                    </div>
                    <div className='box-body'>
                        <h2>Sign Up</h2>
                        <p>Completes all the work associated with planning and processing</p>
                    </div>
                    <img alt='line' src={stroke1} className="line"/>
                </div>
                <div className='thingsBox'>
                    <div className='box-icon'>
                        <img alt='worthofmoney' src={money}/>
                    </div>
                    <div className='box-body'>
                        <h2>Worth of Money</h2>
                        <p>After successful access then book from exclusive deals & pricing</p>
                    </div>
                    <img alt='line' src={stroke2} className="line"/>
                </div>
                <div className='thingsBox'>
                    <div className='box-icon'>
                        <img alt='travel' src={travel}/>
                    </div>
                    <div className='box-body'>
                        <h2>Exciting Travel</h2>
                        <p>Start and explore a wide range of exciting travel experience.</p>
                    </div>
                    <img alt='line' src={stroke1} className="line"/>
                </div>
            </div>
        </div>
    );
}

export default Things;