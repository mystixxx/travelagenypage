import { useState, useEffect, useCallback } from 'react';
import {
    SliderMenuContainer,
    SliderMenuProfileWrapper,
    SliderImage,
    SliderName,
    SliderOccupation,
    SliderDescription,
    SliderMenuLeftSlider,
    SliderMenuRightSlider,
    SliderMenuQuoteIcon,
    Wrapper
} from './SliderMenu.elements';
import { testimonialsInfo } from "../../json/deals";
import './SliderMenu.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 


function SliderMenu(props) {
    const [profiles, setProfiles] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        setProfiles(testimonialsInfo)
    }, [])

    useEffect(() => {
        AOS.init();
    })

    const handleClick = useCallback((action) => {
        const len = profiles.length

        if (action === 'previous') {
            if (currentIndex - 1 === -1) {
                setCurrentIndex(len - 1)
            } else {
                setCurrentIndex(currentIndex - 1)
            }
        }

        if (action === 'future') {
            if (currentIndex + 1 === len) {
                setCurrentIndex(0)
            } else {
                setCurrentIndex(currentIndex + 1)
            }
        }
    }, [currentIndex, profiles.length]);

    useEffect(() => {
        const myInterval = setInterval(() => {
            handleClick('future')
        }, 4000);

        return () => clearInterval(myInterval)
    }, [currentIndex, handleClick])

    return (
        <div className='testimonials' data-aos="zoom-in" id='testimonialsSection'>
            <div className='testimonials-content'>
                <div className='testimonials-text-container'>
                    <h1>What people say <br></br><span className='testimonialsText'>about us.</span></h1>
                    <p>Our Clients send us bunch of smilies with our services<br></br> and we love them.</p>
                </div>
                <SliderMenuContainer>
                    <SliderMenuLeftSlider onClick={() => handleClick('previous')} />
                    <Wrapper>
                        {profiles.map((person, index) => {
                            return (
                                <SliderMenuProfileWrapper className={(() => {
                                    const len = profiles.length;

                                    if (currentIndex === 0 && index === len - 1) {
                                        return 'previous'
                                    } else if (currentIndex === len - 1 && index === 0) {
                                        return 'future'
                                    } else if (index === currentIndex) {
                                        return 'current'
                                    } else if (currentIndex > index) {
                                        return 'previous'
                                    } else {
                                        return 'future'
                                    }
                                })()
                                } key={person.id}>
                                    <SliderImage src={person.photo} />
                                    <SliderName>{person.name}</SliderName>
                                    <SliderOccupation>{person.location}</SliderOccupation>
                                    <SliderDescription>{person.text}</SliderDescription>
                                </SliderMenuProfileWrapper>
                            )
                        })}
                    </Wrapper>
                    <SliderMenuQuoteIcon />
                    <SliderMenuRightSlider onClick={() => handleClick('future')} />
                </SliderMenuContainer>
            </div>
        </div>
    )
}

export default SliderMenu;