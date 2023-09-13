import { Row, Col, Container, Button } from 'react-bootstrap';
import React, { useState } from 'react';
import { ExclamationCircleIcon } from '@heroicons/react/20/solid'

export default function Donation({ setDonation, setPayment }) {
    const [emailError, setEmailError] = useState(false);
    const [isNameHidden, setIsNameHidden] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
    const [amount, setAmount] = useState(0);
    const [percentage, setPercentage] = useState(0);
    const [buttonSelected, setButtonSelected] = useState(false);

    const handleCheckboxChange = () => {
      setIsNameHidden(!isNameHidden);
      setName('');
    };

    const prepareAmount = (amount, button) => {
        setButtonSelected(button);
        setAmount(amount);
        setPercentage(Math.round(amount / 12000 * 100));
    }

    const validateDonation = () => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        const validEmail = emailRegex.test(email);
        setEmailError(!validEmail);
        if (validEmail) {
            setDonation({ name: '1. DOAÇÃO', status: 'completed' });
            setPayment({ name: '2. PAGAMENTO', status: 'current' });
        }
    }

    useState(() => {}, [emailError]);

    return (
        <Container className="flex mx-auto mt-5">
            <div className="flex-1 p-8">
                <h3 className="block text-xs font-bold leading-6 text-gray-900">
                    COMPLETE COM A SUA INFORMAÇÃO
                </h3>
                <div>
                    <div className="relative mt-5 rounded-md shadow-sm">
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className={`block w-full rounded-sm border-0 py-1.5 pr-10 text-black-900 ring-2 ring-inset ring-thirst-blue placeholder:text-thirst-blue focus:ring-2 focus:ring-inset focus:ring-thirst-blue sm:text-sm sm:leading-6 ${
                                isNameHidden ? 'disabled' : ''
                            }`}
                            placeholder="Nome"
                            aria-describedby="name"
                            disabled={isNameHidden}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="relative flex items-start">
                        <div className="flex h-6 items-center">
                            <input
                                id="hide-name"
                                aria-describedby="name"
                                name="name"
                                type="checkbox"
                                className="h-3 w-3 rounded-full text-thirst-blue"
                                style={{ boxShadow: 'none' }}
                                onChange={handleCheckboxChange}
                            />
                        </div>
                        <div className="ml-1 text-xxs leading-6">
                            <label htmlFor="comments" className=" text-gray-900">
                                NÃO MOSTRAR O MEU NOME
                            </label>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="relative mt-5 rounded-md shadow-sm">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="block w-full rounded-sm border-0 py-1.5 pr-10 text-black-900 ring-2 ring-inset ring-thirst-blue placeholder:text-thirst-blue focus:ring-2 focus:ring-inset focus:ring-thirst-blue sm:text-sm sm:leading-6"
                            placeholder="Email"
                            aria-invalid="true"
                            aria-describedby="email-error"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {emailError && (
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
                            </div>
                        )}
                    </div>
                    {emailError && (
                        <p className="text-sm mb-2 text-red-600" id="email-error">
                            Endereço de email inválido
                        </p>
                    )}
                    <div className="relative flex items-start">
                        <div className="flex h-6 items-center">
                            <input
                                id="email"
                                aria-describedby="email"
                                name="email"
                                type="checkbox"
                                className="h-3 w-3 rounded-full text-thirst-blue"
                                style={{ boxShadow: 'none' }}
                            />
                        </div>
                        <div className="ml-1 text-xxs leading-6">
                            <label htmlFor="email" className="text-gray-900">
                                GOSTARIA DE SER CONTACTADO NO FUTURO
                            </label>
                        </div>
                    </div>
                </div>
                <div className='mt-5'>
                    <h3 className="block text-xs font-bold leading-6 text-gray-900">
                        GOSTARIA DE DEIXAR UM COMENTÁRIO
                    </h3>
                    <div className="mt-2">
                        <textarea
                            id="about"
                            name="about"
                            rows={3}
                            className="block w-full rounded-sm border-0 py-1.5 text-gray-900 shadow-sm ring-2 ring-inset ring-thirst-blue placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-thirst-blue sm:text-sm sm:leading-6"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        />
                    </div>
                </div>
            </div>
            <div className="flex-1 p-8">
                <h3 className="block text-xs font-bold leading-6 text-gray-900">
                    QUAL O MONTANTE QUE DESEJA DOAR
                </h3>
                <div className="mt-5 flex justify-between">
                    <Button
                        className="rounded-md shadow-md bg-thirst-blue px-6 py-2 text-sm font-semibold text-white shadow-md hover:bg-thirst-blue "
                        onClick={() => prepareAmount(1000, 1)}
                    >
                        €1 000
                    </Button>
                    <Button
                        className="rounded-md shadow-md bg-thirst-blue px-6 py-2 text-sm font-semibold text-white shadow-md hover:bg-thirst-blue"
                        onClick={() => prepareAmount(6000, 2)}    
                    >
                        €6 000
                    </Button>
                    <Button
                        className="rounded-md shadow-md bg-thirst-blue px-6 py-2 text-sm font-semibold text-white shadow-md hover:bg-thirst-blue"
                        onClick={() => prepareAmount(12000, 3)}
                    >
                        €12 000
                    </Button>
                </div>
                <div className="relative mt-5 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <span className="text-thirst-blue sm:text-sm font-medium">EUR€</span>
                    </div>
                    <input
                        type="number"
                        name="price"
                        id="price"
                        className="block w-full rounded-sm border-0 py-1.5 pl-14 pr-6 text-gray-900 ring-2 ring-inset ring-thirst-blue placeholder:text-thirst-blue focus:ring-2 focus:ring-inset focus:ring-thirst-blue sm:text-sm sm:leading-6"
                        placeholder="Outro"
                        min="0"
                        onChange={(e) => prepareAmount(e.target.value, 0)}
                    />
                </div>
                <div className="mt-4 relative flex items-start">
                    <div className="flex h-6 items-center">
                        <input
                            id="honor"
                            aria-describedby="honor"
                            name="honor"
                            type="checkbox"
                            className="h-3 w-3 rounded-full text-thirst-blue"
                            style={{ boxShadow: 'none' }}
                        />
                    </div>
                    <div className="ml-1 text-xxs leading-6">
                        <label htmlFor="email" className=" text-gray-900">
                            DEDICAR A MINHA DOAÇÃO EM NOME OU MEMÓRIA DE ALGUÉM
                        </label>
                    </div>
                </div>
                <div className="relative flex items-start">
                    <div className="flex h-6 items-center">
                        <input
                            id="email"
                            aria-describedby="email"
                            name="email"
                            type="checkbox"
                            className="h-3 w-3 rounded-full text-thirst-blue"
                            style={{ boxShadow: 'none' }}
                        />
                    </div>
                    <div className="ml-1 text-xxs leading-6">
                        <label htmlFor="email" className=" text-gray-900">
                            DESEJO EMITIR FATURA
                        </label>
                    </div>
                </div>
                <div className="w-full mt-3 ring-1 ring-thirst-blue"/>

                <h3 className="block mt-5 text-xs font-bold leading-6 text-gray-900">
                    RESUMO DA DOAÇÃO
                </h3>

                <div className="mt-5 flex flex-col items-center justify-center">
                    <p className="text-2xl font-bold text-thirst-blue">
                        EUR€ {amount}
                    </p>
                    <p className="mt-4 text-sm font-medium text-gray-900">
                        EQUIVALE A {percentage}% DE UM FURO
                    </p>
                    <Button
                        className="rounded-sm mt-8 bg-white/10 px-10 py-2 text-sm font-semibold text-thirst-blue shadow-md hover:bg-thirst-blue hover:text-white ring-2 ring-thirst-blue hover:ring-thirst-blue"
                        onClick={validateDonation}    
                    >
                        Continuar
                    </Button>
                </div>
            </div>
        </Container>
    )
}
