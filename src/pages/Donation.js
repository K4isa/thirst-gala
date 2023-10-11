import React, { useState } from 'react';
import Donation from '../components/Donation';
import Payment from '../components/Payment';
import Summary from '../components/Summary';
import { Container, Image } from 'react-bootstrap';
import logo from '../assets/gala_logo.png';

export default function DonationPage() {
    const [donation, setDonation] = useState({ name: '1. DOAÇÃO', status: 'current' });
    const [payment, setPayment] = useState({ name: '2. PAGAMENTO', status: 'upcoming' });
    const [summary, setSummary] = useState({ name: '3. RESUMO', status: 'upcoming' });

    return (
      <Container className="mx-auto px-14 py-7">
        <div className="text-center mb-4"> {/* Center the image and the elements */}
          <Image src={logo} alt="Thirst Gala" width={200} height={200} style={{ margin: "0 auto" }} /> {/* Use inline style to center the image */}
        </div>
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
          <Payment setPayment={setPayment} setSummary={setSummary} payment={payment} />
        )}
        {summary.status === 'current' && (
          <Summary setSummary={setSummary} />
        )}
      </Container>
    )
  }