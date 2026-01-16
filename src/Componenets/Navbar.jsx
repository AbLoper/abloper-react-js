import { HiHome } from "react-icons/hi2"; import { MdDesignServices } from "react-icons/md";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { IoIosInformationCircle } from "react-icons/io";
import { IoMdShareAlt } from "react-icons/io";
import { GrLanguage } from "react-icons/gr";
import LOGO from '../assets/icons/header/Logo.png';
import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBCollapse,
    MDBCardImage,
} from 'mdb-react-ui-kit';

export default function Navbar() {
    const [openBasic, setOpenBasic] = useState(false);

    const [showNavbar, setShowNavbar] = useState(true);
    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                // المستخدم ينزل للأسفل
                setShowNavbar(false);
            } else {
                // المستخدم يصعد للأعلى
                setShowNavbar(true);
            }
            lastScrollY = window.scrollY;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <MDBNavbar
            expand='lg'
            className={`shadow-sm m-3 rounded-1 fixed-top color-change-5x ${showNavbar ? 'navbar-show' : 'navbar-hide'}`}
        >
            <MDBContainer fluid id="navbarContainer">
                <MDBNavbarBrand href='#'>
                    <MDBCardImage src={LOGO} alt="Logo" style={{ height: '2rem' }} />
                </MDBNavbarBrand>

                <MDBNavbarToggler
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setOpenBasic(!openBasic)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>

                <MDBCollapse navbar open={openBasic} className="justify-content-end">
                    <MDBNavbarNav className='text-light d-flex justify-content-center align-items-start align-items-lg-center my-3 my-lg-0' >

                        <MDBNavbarItem>
                            <HiHome />
                            <MDBNavbarLink aria-current='page' href='#'>
                                Home
                            </MDBNavbarLink>
                        </MDBNavbarItem>

                        <MDBNavbarItem>
                            <MdDesignServices />
                            <MDBDropdown>
                                <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                                    Services
                                </MDBDropdownToggle>
                                <MDBDropdownMenu>
                                    <MDBDropdownItem link>Action</MDBDropdownItem>
                                    <MDBDropdownItem link>Another action</MDBDropdownItem>
                                    <MDBDropdownItem link>Something else here</MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavbarItem>

                        <MDBNavbarItem>
                            <MdOutlineConnectWithoutContact />
                            <MDBNavbarLink href='#'  >Contact Us</MDBNavbarLink>
                        </MDBNavbarItem>

                        <MDBNavbarItem>
                            <IoIosInformationCircle />
                            <MDBNavbarLink href='#' tabIndex={-1} >
                                About
                            </MDBNavbarLink>
                        </MDBNavbarItem>

                        <MDBNavbarItem>
                            <MDBNavbarLink href='#' tabIndex={-1} >

                            </MDBNavbarLink>
                        </MDBNavbarItem>

                        <MDBNavbarItem>
                            <MDBBtn className="d-flex justify-content-center align-items-center gap-1 border border-light rounded-5">
                                <IoMdShareAlt />
                                Share
                            </MDBBtn>
                        </MDBNavbarItem>

                        <MDBNavbarItem className="my-4 m-lg-4" style={{ cursor: 'pointer' }}>
                            <GrLanguage size="24px" />
                        </MDBNavbarItem>

                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}