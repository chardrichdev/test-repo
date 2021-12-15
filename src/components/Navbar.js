import React from 'react'

import { Navbar, Nav } from 'react-bootstrap'

export default function NavbarComponent(){
	return(
		<Navbar bg = "success" expand = "lg">
			<Navbar.Brand href = "#home">React-Bootstrap</Navbar.Brand>
			<Nav className = "mr-auto">
				<Nav.Link href = "#main">Home</Nav.Link>
				<Nav.Link href = "#go">Link</Nav.Link>
			</Nav>
		</Navbar>
	)
}
