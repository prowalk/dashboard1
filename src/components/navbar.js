import React, {useState} from 'react'
import { Navbar, NavbarBrand, Nav, Collapse, NavbarToggler, UncontrolledButtonDropdown, NavItem, NavLink, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import Prowalk from '../assets/images/icono-logo-Prowalk-fondo-azul.png'
import '../assets/styles/navbar.css'

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const Navs = [
        {title: 'HOME', options : null, route: '/home'},
        {title: 'USER', options: [
            {name:'User Info', route: '/user/info'}, {name: 'Current Services', route: '#'},
            {name:'Pending Services', route: '/user/pending-service'}, {name:'Pet Services', route: '/user/pet-service'}]}, 
        {title: 'AFFILIATES', options: [
            {name:'Approved', route: '/affiliate/approved'}, {name:'Peding', route: '/affiliate/pending'}, {name:'Active', route: '#'}, {name:'Inactive', route: '#'},
            {name:'Rejected', route: '#'}, {name:'Blocked', route: '#'}, {name:'All applicants', route: '#'}]}, 
        {title: 'EMPLOYEES', options: [ 
            {name:'HHRR', route: '#'},{name:'Marketing', route: '#'}, {name:'Tecnology', route: '#'}, {name:'Sales', route: '#'},
            {name:'Admin & Accounting', route: '#'}, {name:'Legal', route: '#'}, {name:'Costumer Services', route: '#'},
            {name:'Maintenance', route: '#'},{name:'All Employees', route: '#'}]}, 
        {title: 'ADMIN', options: [
            {name:'Admin', route: '#'},{name:'Accounting', route: '#'}, {name:'Invoices', route: '#'}, {name:'Refunds', route: '#'},
            {name:'Affiliates-payout', route: '#'}, {name:'Affiliate Accounts', route: '#'}, {name:'Accounts Receivable', route: '#'},
            {name:'Debts to pay', route: '#'},{name:'Banks', route: '#'}]},
        {title: 'MARKETING', options: [
            {name:'Coupons', route: '#'},{name:'Discounts', route: '#'}, {name:'Email Blast', route: '#'}, {name:'Vendors', route: '#'},
            {name:'Clients', route: '#'}, {name:'Affiliated Stores', route: '#'}, {name:'Balance Sheet', route: '#'}]},
        {title: 'LEGAL', options: null, route: '#'},
        {title: 'STADISTICS', options: null, route: '#'},
    ]

    const selectCity = [
        {value: 'new_york', label: 'NEW YORK'},
        {value: 'miami', label: 'MIAMI'},
        {value: 'boston', label: 'BOSTON'},
        {value: 'la', label: 'L.A'},
        {value: 'chicago', label: 'CHICAGO'},
        {value: 'san_francisco', label: 'SAN FRANCISCO'}
    ]

    const selectService = [
        {value: 'all', label: 'ALL'},
        {value: 'dog_walking', label: 'DOG WALKING'},
        {value: 'senior_care', label: 'SENIOR CARE'},
        {value: 'run_and_errand', label: 'RUN AND ERRAND'},
        {value: 'meeting_companion', label: 'MEETING COMPANION'},
        {value: 'dinner_companion', label: 'DINNER COMPANION'},
        {value: 'grocery_shopping', label: 'GROCERY SHOPPING'},
    ]


    const toggle = () => {
        setIsOpen(!isOpen)
    }


    return (
        <Navbar className='navbar-menu' expand='xl' dark>
            <NavbarBrand>
                <img src={Prowalk} className='img img-navbar' alt='prowalk' />
            </NavbarBrand>
                <NavbarBrand className='input-item mt-3'>
                        <input className='form-control-sm input-navbar' disabled value='3,570' />
                        <br />
                        <p className='label-navbar'>DOWNLOADS</p>
                </NavbarBrand>

                <NavbarBrand className='mt-3'>
                    <input className='form-control-sm input-navbar' disabled value='5,450' />
                    <br />
                    <p className='label-navbar'>AFFILIATES</p>
                </NavbarBrand>
                <NavbarBrand className='mt-3 select-item'>
                    <select className='form-control-sm select-navbar'>
                        {
                            selectCity.map((item) => ((
                                <option value={item.value}>{item.label}</option>
                            )))
                        }
                    </select>
                    <br />
                    <p className='label-navbar'>CITY, STATE</p>
                </NavbarBrand>
                <NavbarBrand className='mt-3'>
                    <select className='form-control-sm select-navbar'>
                        {
                            selectService.map((item) => ((
                                <option value={item.value}>{item.label}</option>
                            )))
                        }
                    </select>
                    <br />
                    <p className='label-navbar'>SERVICES</p>
                </NavbarBrand>
           <NavbarToggler onClick={toggle} className='nav-toggle mr-2' />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto mr-2" navbar>
                    {
                        Navs.map(element => ((
                            <NavItem>
                                {
                                    element.options === null?
                                    <NavLink href={element.route} className='nav-item-name'>{element.title}</NavLink>
                                    :
                                    <UncontrolledButtonDropdown>
                                    <DropdownToggle tag='span' className='nav-link'>
                                        <span className='nav-item-name'>{element.title}</span>
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        {
                                            element.options.map((item) => ((
                                                <DropdownItem href={item.route}>{item.name}</DropdownItem>
                                            )))
                                        }
                                    </DropdownMenu>
                                </UncontrolledButtonDropdown>
                                }
                            </NavItem>
                        )))
                    }
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default NavBar;