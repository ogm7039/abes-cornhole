"use client"

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Navbar, NavbarBrand, NavbarToggle, NavbarCollapse, Nav, NavLink, Container} from 'react-bootstrap';

export default function NavBar() {
    const pathname = usePathname();

    return (
        <Navbar bg="warning" variant="light" sticky="top" expand="sm" collapseOnSelect>
            <Container>
                <NavbarBrand as={Link} href="/">
                    <Image src="/images/abe-drinkin-logo.png" alt="Abe Drinkin" width={50} height={50} />
                </NavbarBrand>
                <NavbarToggle aria-control="main-navbar" />
                <NavbarCollapse id="main-navbar">
                    <Nav>
                        <NavLink as={Link} href="/teams" active={pathname === "/teams"}>Teams</NavLink>
                    </Nav>
                    <Nav>
                        <NavLink as={Link} href="/schedule" active={pathname === "/schedule"}>Schedule</NavLink>
                    </Nav>
                    <Nav>
                        <NavLink as={Link} href="/standings" active={pathname === "/standings"}>Standings</NavLink>
                    </Nav>
                    <Nav>
                        <NavLink as={Link} href="/rules" active={pathname === "/rules"}>Rules</NavLink>
                    </Nav>
                </NavbarCollapse>
            </Container>
        </Navbar>
    );
}