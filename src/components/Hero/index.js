import React from 'react';
import { Section, Container, ColumnLeft, ColumnRight, ButtonContainer } from './HeroElements';
import { Button1, Button2 } from '../Button';


const Hero = () => {
    return (
        <>
            <Section>
                <Container>
                    <ColumnLeft>
                    <div 
                        data-aos="zoom-in"
                        data-aos-offset="200"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-center">
                    <h1>WELCOME TO RIP</h1> 
                    </div>
                    </ColumnLeft>
                    <ColumnRight>
                        <ButtonContainer 
                            data-aos="fade-left"
                            data-aos-duration="1000"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine">
                        <Button1 to="/login" primary="true">Login</Button1>
                        <Button2 to="/register" primary="true">Sign Up</Button2>
                        </ButtonContainer>
                    </ColumnRight>
                </Container>
            </Section>
            
        </>
    )
}

export default Hero;
