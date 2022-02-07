import React from 'react'
import { Nav, NavLink, NavContainer, NavOption } from './NavbarElements';

const Navbar = () => {
    return (
        <>
           <Nav>
               <NavContainer>
                    <NavLink to="/">
                        <h3>RIP FITNESS</h3>
                    </NavLink>
                    <NavOption to="/user">
                        <h4>Create User</h4>
                    </NavOption>
               </NavContainer>
            </Nav> 
        </>
    )
}

export default Navbar;
