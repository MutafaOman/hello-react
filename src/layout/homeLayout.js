import React from 'react';
import { Container } from 'reactstrap';
import Auxiliary from './Auxiliary';
import Navbar from './Navbar';
import Head from './Head';

const HomeLayout = ( props ) => (
	<Auxiliary>
    <Head />
		<Navbar />
		<main>
			<Container fluid={true}>
				{props.children}
			</Container>
		</main>
	</Auxiliary>
);


export default HomeLayout;