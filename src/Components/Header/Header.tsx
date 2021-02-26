import React, { useState } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import './Header.css'



const Header:React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => setIsOpen(!isOpen)

    return (
        <>
            <Navbar color="dark" dark expand="md" className="header">
                <NavbarBrand href="/home">Marvel/DC</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/top_movies">Лучшие фильмы</NavLink>
                        </NavItem>
                        
                    </Nav>
                </Collapse>
            </Navbar>
        </>
    )
}

export default Header