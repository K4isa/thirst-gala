import React, { useState, useEffect } from 'react';
import { Container, Image, Button } from 'react-bootstrap';
import logo from '../assets/gala_logo.png';
import { Link } from 'react-router-dom';

export default function CountDown() {

    const [days, setDays] = useState('00');
    const [hours, setHours] = useState('00');
    const [minutes, setMinutes] = useState('00');
    const [seconds, setSeconds] = useState('00');

    const countdownDate = new Date('2023-11-11 20:00:00').getTime();

    useEffect(() => {
        const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const newDays = Math.floor(distance / (1000 * 60 * 60 * 24));
        const newHours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const newMinutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const newSeconds = Math.floor((distance % (1000 * 60)) / 1000);

        setDays(newDays.toString().padStart(2, '0'));
        setHours(newHours.toString().padStart(2, '0'));
        setMinutes(newMinutes.toString().padStart(2, '0'));
        setSeconds(newSeconds.toString().padStart(2, '0'));

        if (distance < 0) {
            clearInterval(countdownInterval);
            // You can add an action here when the countdown reaches zero
        }
        };

        updateCountdown(); // Initial update

        const countdownInterval = setInterval(updateCountdown, 1000);

        return () => {
        clearInterval(countdownInterval); // Clean up the interval when unmounting
        };
    }, []);
    return (
        <div style={{ display: 'flex', alignItems: 'center', height: '100vh' }}>
            <Container className="mx-auto px-14 py-7 flex flex-row justify-center" style={{ width: '100%' }}>
                <div
                    className="text-start mb-4 flex flex-col"
                    style={{ width: '50%' }}
                >
                    <div className="flex flex-row countdown-container mb-5">
                        <div className="countdown-box font-bold flex flex-col">
                            <span className="text-thirst-blue">{days}</span>
                            <span className="text-xs mt-2">DIAS</span>
                        </div>
                        <div className="countdown-box font-bold flex flex-col">
                            <span className="text-thirst-blue">{hours}</span>
                            <span className="text-xs mt-2">HORAS</span>
                        </div>
                        <div className="countdown-box font-bold flex flex-col">
                            <span className="text-thirst-blue">{minutes}</span>
                            <span className="text-xs mt-2">MINUTOS</span>
                        </div>
                        <div className="countdown-box font-bold flex flex-col">
                            <span className="text-thirst-blue">{seconds}</span>
                            <span className="text-xs mt-2">SEGUNDOS</span>
                        </div>
                    </div>
                    <h3 className="text-thirst-darker-grey mt-10 text-sm font-bold">A MAIOR ORGANIZAÇÃO JOVEM DO MUNDO COM A MISSÃO DE ACABAR COM A CRISE MUNDIAL DE ÁGUA APRESENTA</h3>
                    <h1 className="text-thirst-blue text-4xl font-bold mt-4">PRIMEIRA GALA THIRST PROJECT PORTUGAL</h1>
                    <Link to="/bilhetes/comprar">
                        <Button
                            className="rounded-sm justify-center mt-10 bg-thirst-blue px-20 py-2 text-sm font-semibold text-white shadow-md hover:bg-white/10 hover:text-thirst-blue ring-2 ring-thirst-blue hover:ring-thirst-blue"
                            style={{ width: '75%' }}
                        >
                            RESERVAR O MEU LUGAR!
                        </Button>
                    </Link>

                </div>
                <div
                    className="text-center mt-14 mb-4"
                    style={{ width: '50%' }}
                >
                    <Image src={logo} alt="Thirst Gala" width={350} height={350} style={{ margin: "0 auto" }} />
                </div>
            </Container>
        </div>
    )
}
