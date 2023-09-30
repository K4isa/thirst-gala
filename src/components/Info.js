import { Container, Button } from 'react-bootstrap';
import React, { useState } from 'react';
import { ExclamationCircleIcon } from '@heroicons/react/20/solid'

export default function Info({ setInfo, setSummary, contribution }) {
    const [emailError, setEmailError] = useState(false);
    const [names, setNames] = useState([]);
    const [email, setEmail] = useState('');
    const [nif, setNif] = useState('');
    const [isNif, setIsNif] = useState(false);
    const [nifError, setNifError] = useState(false);
    const [checkboxChecked, setCheckboxChecked] = useState(false);
    const [namesError, setNamesError] = useState(false);

    const renderInputBoxes = () => {
        const inputBoxes = [];
        for (let i = 1; i < contribution.tickets; i++) {
          inputBoxes.push(
            <div key={i} className="relative mt-2 rounded-md shadow-sm">
              <input
                type="text"
                name={`ticket-${i}`}
                id={`ticket-${i}`}
                className="block w-full rounded-sm border-0 py-1.5 pr-10 text-black-900 ring-2 ring-inset ring-thirst-blue placeholder:text-thirst-blue focus:ring-2 focus:ring-inset focus:ring-thirst-blue sm:text-sm sm:leading-6"
                placeholder={`Nome do bilhete ${i + 1}`}
                value={names[i] || ''}
                onChange={(e) => handleNameChange(i, e.target.value)}
              />
            </div>
          );
        }
        return inputBoxes;
    };

    const handleNameChange = (index, value) => {
        if (namesError) setNamesError(false);
        const updatedNames = [...names];
        updatedNames[index] = value;
        setNames(updatedNames);
      };

    const validateDonation = () => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        const validEmail = emailRegex.test(email);
        setEmailError(!validEmail);
        if (isNif) {
            if (nif.length !== 9 || !/^\d+$/.test(nif)) {
                setNifError(true);
                return;
            }
            setNifError(false);
        }

        if (names.length !== contribution.tickets || names.some(name => name.trim() === '')) {
            setNamesError(true);
        }
        if (validEmail && !nifError && !namesError) {
            const info = {
                names: names,
                tickets: contribution.tickets,
                total: contribution.total,
                nif: nif,
                email: email,
            }
            setInfo(prevInfo => ({...prevInfo, status: 'completed' }));
            setSummary(prevSummary => ({...prevSummary, status: 'current', info: info }));
        }
    }

    const handleNifChange = () => {
        setIsNif(!isNif);
        setNif('');
        setNifError(false);
    }

    const handleKeyPress = (event) => {
        if (event.key === 'e') {
          event.preventDefault();
        }
    };

    return (
        <Container className="flex mx-auto mt-5">
            <div className="flex-1 p-8">
                <h3 className="block text-xs font-bold leading-6 text-gray-900">
                    COMPLETE COM A SUA INFORMAÇÃO
                </h3>
                <div className="w-full mt-1 ring-1 ring-thirst-gray"/>
                <div>
                    <div className="relative mt-8 rounded-md shadow-sm">
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="block w-full rounded-sm border-0 py-1.5 pr-10 text-black-900 ring-2 ring-inset ring-thirst-blue placeholder:text-thirst-blue focus:ring-2 focus:ring-inset focus:ring-thirst-blue sm:text-sm sm:leading-6"
                            placeholder="Nome"
                            aria-describedby="name"
                            value={names[0]}
                            onChange={(e) => handleNameChange(0, e.target.value)}
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
                                onChange={() => { setCheckboxChecked(!checkboxChecked); if (!checkboxChecked) setNames([names[0]]); }}
                            />
                        </div>
                        <div className="ml-1 text-xxs leading-6">
                            <label htmlFor="comments" className=" text-gray-900">
                                ATRIBUIR NOMES INDIVIDUAIS A CADA BILHETE
                            </label>
                        </div>
                    </div>
                    {checkboxChecked && renderInputBoxes()}
                    {namesError && (
                        <p className="text-sm text-red-600" id="email-error">
                            Preencha todos os campos
                        </p>
                    )}
                </div>
                <div>
                    <div className="relative mt-8 rounded-md shadow-sm">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="block w-full rounded-sm border-0 py-1.5 pr-10 text-black-900 ring-2 ring-inset ring-thirst-blue placeholder:text-thirst-blue focus:ring-2 focus:ring-inset focus:ring-thirst-blue sm:text-sm sm:leading-6"
                            placeholder="Email"
                            aria-invalid="true"
                            aria-describedby="email-error"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value); if (emailError) setEmailError(false); }}
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

                    <h3 className="block text-xs mt-7 font-bold leading-6 text-gray-900">
                        VALOR A PAGAR
                    </h3>
                    <div className="w-full mt-1 ring-1 ring-thirst-gray"/>
                    <p className="text-2xl mt-5 font-bold text-black">
                        EUR€ {contribution.total}
                    </p>
                </div>
            </div>
            <div className="flex-1 p-8">
                <h3 className="block text-xs font-bold leading-6 text-gray-900">
                    PAGAMENTO
                </h3>
                <div className="w-full mt-1 ring-1 ring-thirst-gray"/>
                <div className="relative flex items-start">
                    <div className="flex h-6 items-center">
                        <input
                            id="nif"
                            aria-describedby="nif"
                            name="nif"
                            type="checkbox"
                            className="h-3 w-3 rounded-full text-thirst-blue"
                            style={{ boxShadow: 'none' }}
                            onChange={handleNifChange}
                        />
                    </div>
                    <div className="ml-1 text-xxs leading-6">
                        <label htmlFor="email" className=" text-gray-900">
                            DESEJO EMITIR FATURA
                        </label>
                    </div>
                </div>
                {isNif && (
                    <div className="relative rounded-md shadow-sm">
                        <input
                            type="number"
                            name="name"
                            id="dedication"
                            className="block w-full rounded-sm border-0 py-1.5 pr-10 text-black-900 ring-2 ring-inset ring-thirst-blue placeholder:text-thirst-blue focus:ring-2 focus:ring-inset focus:ring-thirst-blue sm:text-sm sm:leading-6"
                            placeholder="NIF"
                            aria-describedby="name"
                            value={nif}
                            onKeyPress={handleKeyPress}
                            onChange={(e) => { setNif(e.target.value); if (nifError) setNifError(false); }}
                        />
                        {nifError && (
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
                            </div>
                        )}
                    </div>
                )}
                {nifError && (
                    <p className="text-sm mb-2 text-red-600" id="email-error">
                        NIF inválido
                    </p>
                )}
                
                <div className="mt-5 flex flex-col items-center justify-center">
                    <Button
                        className="rounded-sm mt-6 bg-white/10 px-10 py-2 text-sm font-semibold text-thirst-blue shadow-md hover:bg-thirst-blue hover:text-white ring-2 ring-thirst-blue hover:ring-thirst-blue"
                        onClick={validateDonation}    
                    >
                        CONTINUAR
                    </Button>
                </div>
            </div>
        </Container>
    ) 
}
