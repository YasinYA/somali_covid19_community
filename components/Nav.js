import { useState } from 'react'
import Link from 'next/link'

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap'

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const isLoggedIn = false

    const toggle = () => setIsOpen(!isOpen)

    return (
        <Navbar color='dark' dark={true} expand='md'>
            <NavbarBrand>
                <Link href='/'>
                    <span>SO-COVID19</span>
                </Link>
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar={true}>
                {!isLoggedIn ? (
                    <Nav className='ml-auto' navbar={true}>
                        <NavItem>
                            <Link href='/login'>
                                <NavLink>Login</NavLink>
                            </Link>
                        </NavItem>
                    </Nav>
                ) : (
                    <Nav className='mr-auto' navbar={true}>
                        <UncontrolledDropdown inNavbar={true} nav={true}>
                            <DropdownToggle caret={true} nav={true}>
                                Patients
                            </DropdownToggle>
                            <DropdownMenu right={true}>
                                <DropdownItem>Patient List</DropdownItem>
                                <DropdownItem>Suspected List</DropdownItem>
                                <DropdownItem divider={true} />
                                <DropdownItem>Add a patient</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                )}
            </Collapse>
        </Navbar>
    )
}

export default NavBar
