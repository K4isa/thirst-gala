import React from 'react';
import { Container, Image, Button } from 'react-bootstrap';
import logo from '../assets/thirst.jpg';
import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
        <Container className="mx-auto px-14 py-7 flex flex-col justify-center">
            <div className="text-center mt-14 mb-4">
                <Image src={logo} alt="Thirst Gala" width={350} height={350} style={{ margin: "0 auto" }} />
            </div>
            <div className="text-center mb-4">
                <Link to="/doacoes/doar">
                    <Button
                        className="rounded-sm justify-center mt-10 bg-thirst-blue px-20 py-2 text-sm font-semibold text-white shadow-md hover:bg-white/10 hover:text-thirst-blue ring-2 ring-thirst-blue hover:ring-thirst-blue"
                        style={{ width: '75%' }}
                    >
                        DOAR
                    </Button>
                </Link>
            </div>
        </Container>
    )
}
