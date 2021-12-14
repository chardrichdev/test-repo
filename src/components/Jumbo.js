import React from 'react'

import { Jumbotron, Button } from 'react-bootstrap'

export default function Jumbo(){
	return(
		<Jumbotron>
			<h1>Hello World!</h1>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
			Fuga accusantium, architecto quae accusamus porro tempora omnis 
			ipsa ducimus natus dolores, enim nesciunt soluta saepe laborum 
			ad eaque repudiandae? Voluptatem, aspernatur!
			</p>
			<Button variant = "primary">Learn More</Button>
		</Jumbotron>
		)
}