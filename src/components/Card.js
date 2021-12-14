import React from 'react'

import { Card, Button } from 'react-bootstrap'

export default function CardComponent(){
	return (
		<Card>
			<Card.Body>
				<Card.Title>This is a Card Title</Card.Title>
				<Card.Text>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
					Nulla unde modi error molestiae aut quam maiores debitis aperiam facilis? 
					Tempore assumenda fugit nulla eaque, similique debitis asperiores delectus, 
					iste illum.
					</p>
				</Card.Text>
				<Button variant = "success">Go Somewhere</Button>
			</Card.Body>
		</Card>
	)
}