import React, {useState} from 'react'
import { Navbar, NavbarBrand, Nav, Collapse, NavbarToggler, UncontrolledButtonDropdown, NavItem, NavLink, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import Prowalk from '../assets/images/icono-logo-Prowalk-fondo-azul.png'
import '../assets/styles/navbar.css'

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const Navs = [
        {title: 'USER', options: ['User Info', 'Current Services', 'Pending Services', 'Pet Services']}, 
        {title: 'AFFILIATES', options: ['Peding']}, 
        {title: 'EMPLOYEES', options: ['HHRR']}, 
        {title: 'ADMIN', options: ['Admin']},
        {title: 'MARKETING', options: ['Coupens']}
        ]


    const toggle = () => {
        setIsOpen(!isOpen)
    }


    return (
        <Navbar className='navbar-menu' expand='xl'>
            <NavbarBrand>
                <img src={Prowalk} className='img img-navbar' alt='prowalk' />
            </NavbarBrand>
                <NavbarBrand className='ml-3 mt-3'>
                        <input className='form-control-sm input-navbar' />
                        <br />
                        <p className='label-navbar'>DOWNLOADS</p>
                </NavbarBrand>

                <NavbarBrand className='mt-3'>
                    <input className='form-control-sm input-navbar' />
                    <br />
                    <p className='label-navbar'>AFFILIATES</p>
                </NavbarBrand>
                    <select className='form-control'>
                    <option></option>
                    </select>

                    <br />
                   { /* <label className='label-navbar'>CITY, STATE</label> */}
                <NavbarBrand>
                </NavbarBrand>
                    <select className='form-control'>
                    </select>
                    <br />
                    {/* <label className='label-navbar'>SERVICES</label> */}
                <NavbarBrand>
                </NavbarBrand>
           <NavbarToggler onClick={toggle} className='mr-2' />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem className='nav-item-name'>
                        <NavLink>HOME</NavLink>
                    </NavItem>
                    {
                        Navs.map(element => ((
                            <NavItem className='nav-item-name'>
                                <UncontrolledButtonDropdown>
                                    <DropdownToggle tag='span' className='nav-link'>
                                        {element.title}
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        {
                                            element.options.map((item) => ((
                                                <DropdownItem href='#'>{item}</DropdownItem>
                                            )))
                                        }
                                    </DropdownMenu>
                                </UncontrolledButtonDropdown>
                            </NavItem>
                        )))
                    }
                    <NavItem className='nav-item-name'>
                        <NavLink>LEGAL</NavLink>
                    </NavItem>
                    <NavItem className='nav-item-name'>
                        <NavLink>STADISTICS</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default NavBar;