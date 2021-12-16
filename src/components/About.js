import React from 'react'

import { Row, Col, Card, Button } from 'react-bootstrap'

export default function AboutComponent(){
	return (
		<Row className="justify-content-center my-5">
			<Col xs={10} md={6}>
				<Card>
					<Card.Body>
						<Card.Title>About Me</Card.Title>
						<Card.Text>
							<p>Hola Its Me!</p>
						</Card.Text>
						<Button variant = "success">Go Somewhere</Button>
					</Card.Body>
				</Card>
			</Col>
		</Row>
	)
}
