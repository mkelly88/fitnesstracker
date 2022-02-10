import React from 'react';
import { Section, Container, VideoBg, HeroText, ButtonContainer } from './HeroElements';
import { Button1, Button2 } from '../Button';
import Video from '../../video/workout.mp4';


const Hero = () => {
    return (
        <>
          <Section>
                <Container>
                    <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
                    <HeroText><h1>RIP FITNESS</h1></HeroText>
                    <ButtonContainer>
                        <Button1 to="/user">Login</Button1> 
                        <Button2 to="/user">Sign Up</Button2>
                    </ButtonContainer>
                </Container> 
                
          </Section>  
            
        </>
    )
}

export default Hero;
