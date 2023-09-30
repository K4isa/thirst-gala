import React, { useEffect } from 'react';

export default function Summary({ setSummary, summary }) {
    useEffect(() => {
        console.log(summary);
    }, [])
}
