import React, { useState } from 'react';
import Ticket from '../components/Ticket';
import Contribution from '../components/Contribution';
import Info from '../components/Info';
import Summary from '../components/Summary';
import { Container, Image } from 'react-bootstrap';
import logo from '../assets/gala_logo2025.png';

export default function TicketPage() {
    const [ticket, setTicket] = useState({ name: '1. BILHETE', status: 'current' });
    const [contribution, setContribution] = useState({ name: '2. CONTRIBUIÇÃO', status: 'upcoming' });
    const [info, setInfo] = useState({ name: '3. INFO & PAGAMENTO', status: 'upcoming' });
    const [summary, setSummary] = useState({ name: '3. RESUMO', status: 'upcoming' });

    return (
      <Container className="mx-auto px-14 py-7">
        <div className="text-center mb-4">
          <Image src={logo} alt="Thirst Gala" width={200} height={200} style={{ margin: "0 auto" }} /> {/* Use inline style to center the image */}
        </div>
        <div className="flex md:flex-row flex-col md:space-x-32 justify-center items-center">
          {[ticket, contribution, info, summary].map((step) => (
            <div
              onClick={step.function}
              className="me-5 mt-4"
              key={step.name}
            >
              <span className={`text-sm font-bold ${step.status === 'current' ? 'text-thirst-blue' : 'text-thirst-grey'}`}>{step.name}</span>
            </div>
          ))}
        </div>
        {ticket.status === 'current' && (
          <Ticket setTicket={setTicket} setContribution={setContribution} />
        )}
        {contribution.status === 'current' && (
          <Contribution contribution={contribution} setContribution={setContribution} setInfo={setInfo} />
        )}
        {info.status === 'current' && (
          <Info setInfo={setInfo} setSummary={setSummary} contribution={contribution} />
        )}
        {summary.status === 'current' && (
          <Summary setSummary={setSummary} summary={summary} />
        )}
      </Container>
    )
  }