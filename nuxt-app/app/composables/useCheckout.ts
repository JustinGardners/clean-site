import type { Checkout, CheckoutStep } from '~/types';

export default function useCheckout() {
    const route = useRoute()

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

    const stepRoutes: Record<CheckoutStep, string> = {
        delivery: '/checkout',
        deliveryMethod: '/checkout/delivery',
        payment: '/checkout/billing',
    }

    const activeStep = computed<CheckoutStep>(() => {
        const path = route.path.replace(/\/$/, '')
        if (path === stepRoutes.deliveryMethod) return 'deliveryMethod'
        if (path === stepRoutes.payment) return 'payment'
        return 'delivery'
    })

    const updateStep = (step: CheckoutStep) => {
        return navigateTo({ path: stepRoutes[step], query: route.query })
    }

    const scopeClass = computed(() => {
        switch (activeStep.value) {
            case 'delivery':
            case 'deliveryMethod':
                return 'delivery';
            case 'payment':
                return 'payment';
            default:
                return '';
        }
    });    

    return {
        checkout,
        updateStep,
        activeStep,
        scopeClass
    };
}