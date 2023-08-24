import React, { useEffect, useState } from 'react';
import {HashLink} from 'react-router-hash-link';
import './Hero.css';
import avioniSlika from '../../assets/avioni.svg';
import guy from '../../assets/portret.png';
import Deals from '../Deals/Deals';
import Select from 'react-select';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function Hero() {
    const [city, setCity] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/samayo/country-json/master/src/country-by-capital-city.json').then(response => response.json()).then(cities => setCity(cities));
    }, [])

    useEffect(() => {
        AOS.init(); 
    })

    const cityOptions = city.map(city => ({
        value: city.id,
        label: city.city
    }));

    return (
        <div className='hero' id='heroSection'>
            <div className='container'>
                <div className='content'>
                    <div className='col-1' data-aos="fade-right">
                        <h1>Get started your exciting <span className='journey'>journey</span> with us.</h1>
                        <p>A Team of experienced tourism professionals will provide you with the best advice and tips for your <br></br>desire place.</p>
                        <HashLink smooth to="/Deals/#dealsSection" className='discoverButton'>Discover Now</HashLink>
                    </div>
                    <div className='col-2' data-aos="fade-left">
                        <div className='image-container'>
                            <img alt='avioni' src={avioniSlika} className='avioni' />
                            <div className='underStyle'>
                                <img alt='guy' src={guy} className='guy' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='form-container' data-aos="fade-up">
                <form>
                    <Select
                        className='selection'
                        options={cityOptions}
                        styles={{
                            control: provided => ({
                                ...provided,
                                borderColor: '#FA7436',
                                boxShadow: 'none',
                                '&:hover': {
                                    borderColor: '#FA7436'
                                },
                            }),
                            option: (provided, state) => ({
                                ...provided,
                                backgroundColor: state.isSelected || state.isFocused ? 'white' : 'white',
                                color: 'black',
                                '&:hover': {
                                    backgroundColor: state.isSelected || state.isFocused ? '#FA7436' : 'white',
                                },
                            }),
                            singleValue: provided => ({
                                ...provided,
                                color: '#222222',
                            }),
                        }}
                    />
                    <div className='inputBox'>
                        <span>Date</span>
                        <input type='date' />
                    </div>
                    <div className='inputBox'>
                        <span>Guest</span>
                        <input type='number' min="1" max="12" step="1" placeholder='1' />
                    </div>
                    <input type='submit' value="Explore Now" className='btnExplore' />
                </form>
            </div>
        </div>
    );
}

export default Hero;