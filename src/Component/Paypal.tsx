import { useEffect, useRef, useState } from 'react';

interface PaypalProps {
    total: number;
    onSuccess?: () => void;
}

declare global {
    interface Window {
        paypal: any;
    }
}

const Paypal: React.FC<PaypalProps> = ({ total, onSuccess }) => {
    const paypalRef = useRef<HTMLDivElement | null>(null);
    const clientID = 'AQpDVDsTN1hXrieCNukTp48w1CV8WaRy--atpa9-f_eSxryIwte3dD4Q2XzS8TKWhtAAG81XlgQ5kSh9';
    const [sdkReady, setSdkReady] = useState(false);

    useEffect(() => {
        if (window.paypal) {
            setSdkReady(true);
        } else {
            const script = document.createElement('script');
            script.src = `https://www.paypal.com/sdk/js?client-id=${clientID}`;
            script.async = true;
            script.onload = () => setSdkReady(true);
            document.body.appendChild(script);
        }
    }, []);

    useEffect(() => {
        if (sdkReady && paypalRef.current && paypalRef.current.childElementCount === 0) {
            window.paypal.Buttons({
                createOrder: ( actions: any) => {
                    return actions.order.create({
                        purchase_units: [{
                            amount: { value: total.toFixed(2) }
                        }]
                    });
                },
                onApprove: async (actions: any) => {
                    await actions.order.capture();
                    // alert(`Transaction completed by ${details.payer.name.given_name}`);
                    if (onSuccess) {
                      onSuccess(); // call the callback
                    }
                },
                onError: (err: any) => {
                    console.error('PayPal error:', err);
                }
            }).render(paypalRef.current);
        }
    }, [sdkReady]);

    if (!sdkReady) {
        return <div>Loading PayPal...</div>;
    }

    return <div key={total} ref={paypalRef} ></div>;
};

export default Paypal;