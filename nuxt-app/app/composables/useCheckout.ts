import type { Checkout } from '~/types';

export default function useCheckout() {
    const checkout = useState<Checkout>('checkout', () => ({
        delivery: {
            title: 'Mr',
            firstName: '',
            lastName: '',
            address: '',
            addressTwo: '',
            townCity: '',
            county: '',
            postcode: '',
            country: '',
            phone: '',
            isGift: false,
        },
        deliveryMethod: {
            method: '',
        },
        payment: {
            cardNumber: '',
            expiryDate: '',
            cvv: '',
        },
    } as Checkout));

    return {
        checkout,
    };
}