import React, { useEffect } from 'react';

export default function Payment({ setPayment, setSummary, payment }) {
    useEffect(() => {
        console.log('payment', payment);
    }, []);

    return (
        <>
            <h1>Payment</h1>
        </>
    )
}
