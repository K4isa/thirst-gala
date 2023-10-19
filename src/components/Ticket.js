import { Container, Button, Row, Col } from 'react-bootstrap';
import React, { useState } from 'react';
import { PlusIcon, MinusIcon } from '@heroicons/react/20/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPerson } from '@fortawesome/free-solid-svg-icons'; // Import the specific solid icon you want to use

export default function Ticket({ setTicket, setContribution }) {
    const [tickets, setTickets] = useState(1);
    const [maxTickets, setMaxTickets] = useState(false);

    const handlePlusChange = () => {
        if (tickets < 2) setTickets(tickets + 1);
        else setMaxTickets(true);
    };

    const handleMinusChange = () => {
        setMaxTickets(false);
        if (tickets > 1) setTickets(tickets - 1);
    };

    const validateDonation = () => {
        setTicket(prevTicket => ({...prevTicket, status: 'completed'}));
        setContribution(prevContribution => ({...prevContribution, status: 'current', tickets: tickets}));
    }

    const generateTicketIcons = () => {
        const ticketIcons = [];
        for (let row = 0; row < 2; row++) {
        const rowIcons = [];
        for (let col = 0; col < 5; col++) {
            const index = row * 5 + col;
            if (index <  tickets * 2) {
                rowIcons.push(
                    <FontAwesomeIcon
                        key={index}
                        icon={faPerson}
                        style={{ color: '#1bb7c5' }}
                        size="6x"
                        className='me-2 mb-5'
                    />
                );
            } else {
                rowIcons.push(<FontAwesomeIcon
                    key={index}
                    icon={faPerson}
                    style={{ color: '#c9c9c9' }}
                    size="6x"
                    className='me-2 mb-5'
                    />);
            }
        }
        ticketIcons.push(
            <div key={row} className="flex mt-2 w-full justify-between">
                {rowIcons}
            </div>
        );
        }
        return ticketIcons;
    };

    return (
        <Container className="flex mx-auto mt-5">
            <div className="flex-1 p-8">
                <h3 className="block text-xs font-bold leading-6 text-gray-900">
                    NÚMERO DE BILHETES
                </h3>
                <div className="w-full mt-1 ring-1 ring-thirst-gray"/>
                <h3 className="block mt-4 text-md font-bold text-thirst-blue">
                    11 de novembro | 20:00
                </h3>
                <Col className="mt-4 mb-7">
                    <Row style={{ display: 'flex', alignItems: 'center' }}>
                        <Button
                            className="rounded-md bg-thirst-light-grey p-1 me-3 text-white shadow-md hover:bg-light-grey-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            onClick={handleMinusChange}
                        >
                            <MinusIcon className="h-5 w-5" aria-hidden="true" />
                        </Button>
                        <Button className="rounded-md bg-thirst-grey px-10 py-1 me-3 text-white shadow-md" style={{ display: 'flex', alignItems: 'center' }}>
                            <span className="text-white" style={{ fontSize: '13px' }}>
                                {tickets}
                            </span>
                        </Button>
                        <Button
                            className="rounded-md bg-thirst-light-grey p-1 text-white shadow-md hover:bg-light-grey-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            onClick={handlePlusChange}
                        >
                            <PlusIcon className="h-5 w-5" aria-hidden="true" />
                        </Button>
                    </Row>
                    {maxTickets && (
                        <p className="text-sm mt-2 text-red-600" id="email-error">
                            Limite máximo de bilhetes atingido
                        </p>
                    )}
                </Col>
                <h3 className="block text-xs mb-3 leading-6 text-gray-900">
                    CADA BILHETE TEM UM PREÇO MÍNIMO DE 25€,
                </h3>
                <h3 className="block text-xs mb-5 leading-6 text-gray-900">
                    O EQUIVALENTE A DAR ÁGUA A UMA PESSOA PARA O RESTO DA SUA VIDA.
                </h3>

                <h3 className="block text-xs font-bold leading-6 text-gray-900">
                    VALOR A PAGAR
                </h3>
                <div className="w-full mt-1 mb-5 ring-1 ring-thirst-gray"/>

                <p className="text-2xl ml-2 font-bold">
                    EUR€ {tickets * 50}
                </p>
            </div>
            <div className="flex-1 p-8">
                <h3 className="block text-xs font-bold leading-6 text-gray-900">
                    Nº VIDAS QUE ESTÁ A SALVAR
                </h3>
                <div className="w-full mt-1 mb-5 ring-1 ring-thirst-gray"/>

                <div className="mt-5 flex flex-col items-center justify-center">
                    {generateTicketIcons()}
                    <Button
                        className="rounded-sm mt-4 bg-white/10 px-10 py-2 text-sm font-semibold text-thirst-blue shadow-md hover:bg-thirst-blue hover:text-white ring-2 ring-thirst-blue hover:ring-thirst-blue"
                        onClick={validateDonation}    
                    >
                        Continuar
                    </Button>
                </div>
            </div>
        </Container>
    )
}
