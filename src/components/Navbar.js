import React from 'react'

import { Navbar, Nav } from 'react-bootstrap'

export default function NavbarComponent(){
	return(
		<Navbar bg = "light" expand = "lg">
			<Navbar.Brand href = "#home">Edited Navbar Again</Navbar.Brand>
			<Nav className = "mr-auto">
				<Nav.Link href = "#home">Home</Nav.Link>
				<Nav.Link href = "#link">Link</Nav.Link>
			</Nav>
		</Navbar>
	)
}
