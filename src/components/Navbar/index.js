import React from 'react'
import { Nav, NavLink, NavContainer, NavOption, ButtonContainer } from './NavbarElements';

const Navbar = () => {
    return (
        <>
           <Nav>
               <NavContainer>
                    <NavLink to="/">
                        <h3>RIP FITNESS</h3>
                    </NavLink>
                    <ButtonContainer>
                    <NavOption to="/dashboard">
                        Dashboard
                    </NavOption>
                    </ButtonContainer>
               </NavContainer>
            </Nav> 
        </>
    )
}

export default Navbar;