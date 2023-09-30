import React, { useState } from 'react';
import Donation from '../components/Donation';
import Payment from '../components/Payment';
import Summary from '../components/Summary';
import { Container } from 'react-bootstrap';

export default function DonationPage() {
    const [donation, setDonation] = useState({ name: '1. DOAÇÃO', status: 'current' });
    const [payment, setPayment] = useState({ name: '2. PAGAMENTO', status: 'upcoming' });
    const [summary, setSummary] = useState({ name: '3. RESUMO', status: 'upcoming' });

    return (
      <Container className="mt-4 mx-auto p-14">
        <div className="flex flex-row md:space-x-32 md:space-y-0">
          {[donation, payment, summary].map((step) => (
            <div
              onClick={step.function}
              className="me-5"
              key={step.name}
            >
              <span className={`text-sm font-bold ${step.status === 'current' ? 'text-thirst-blue' : 'text-thirst-grey'}`}>{step.name}</span>
            </div>
          ))}
        </div>
        {donation.status === 'current' && (
          <Donation setDonation={setDonation} setPayment={setPayment} />
        )}
        {payment.status === 'current' && (
          <Payment setPayment={setPayment} setSummary={setSummary} />
        )}
        {summary.status === 'current' && (
          <Summary setSummary={setSummary} />
        )}
      </Container>
    )
  }