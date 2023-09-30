import React, { useState } from 'react';
import Ticket from '../components/Ticket';
import Contribution from '../components/Contribution';
import Info from '../components/Info';
import Summary from '../components/Summary';
import { Container } from 'react-bootstrap';

export default function TicketPage() {
    const [ticket, setTicket] = useState({ name: '1. BILHETE', status: 'current' });
    const [contribution, setContribution] = useState({ name: '2. CONTRIBUIÇÃO', status: 'upcoming' });
    const [info, setInfo] = useState({ name: '3. INFO & PAGAMENTO', status: 'upcoming' });
    const [summary, setSummary] = useState({ name: '3. RESUMO', status: 'upcoming' });

    return (
      <Container className="mt-4 mx-auto p-14">
        <div className="flex flex-row md:space-x-32 md:space-y-0">
          {[ticket, contribution, info, summary].map((step) => (
            <div
              onClick={step.function}
              className="me-5"
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