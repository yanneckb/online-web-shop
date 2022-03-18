export function paymentMethod(payment, mode) {
  if (mode === 'dark') {
    if (payment === 'paypal') {
      return 'https://raw.githubusercontent.com/gregoiresgt/payment-icons/919d90075e88275a0f8d324788bd0ed33b667956/Assets/Payment/PayPal/Paypal-card-dark.svg';
    }
    if (payment === 'applepay') {
      return 'https://raw.githubusercontent.com/gregoiresgt/payment-icons/919d90075e88275a0f8d324788bd0ed33b667956/Assets/Payment/Apple/Apple-card-dark.svg';
    }
    if (payment === 'amazon') {
      return 'https://raw.githubusercontent.com/gregoiresgt/payment-icons/919d90075e88275a0f8d324788bd0ed33b667956/Assets/Payment/Amazon/Amazon-card-dark.svg';
    }
    if (payment === 'giropay') {
      return 'https://raw.githubusercontent.com/gregoiresgt/payment-icons/919d90075e88275a0f8d324788bd0ed33b667956/Assets/Payment/GiroPay/GiroPay-card-dark.svg';
    }
    if (payment === 'googlewallet') {
      return 'https://raw.githubusercontent.com/gregoiresgt/payment-icons/919d90075e88275a0f8d324788bd0ed33b667956/Assets/Payment/GoogleWallet/GoogleWallet-card-dark.svg';
    }
    if (payment === 'klarna') {
      return 'https://raw.githubusercontent.com/gregoiresgt/payment-icons/919d90075e88275a0f8d324788bd0ed33b667956/Assets/Payment/Klarna/Klarna-card-dark.svg';
    }
    if (payment === 'maestro') {
      return 'https://raw.githubusercontent.com/gregoiresgt/payment-icons/919d90075e88275a0f8d324788bd0ed33b667956/Assets/Credit%20Card/Maestro/Maestro-card-dark.svg';
    }
    if (payment === 'mastercard') {
      return 'https://raw.githubusercontent.com/gregoiresgt/payment-icons/919d90075e88275a0f8d324788bd0ed33b667956/Assets/Credit%20Card/MasterCard/MasterCard-dark.svg';
    }
    if (payment === 'visa') {
      return 'https://raw.githubusercontent.com/gregoiresgt/payment-icons/919d90075e88275a0f8d324788bd0ed33b667956/Assets/Credit%20Card/Visa/Visa-card-dark.svg';
    }
    if (payment === 'amex') {
      return 'https://raw.githubusercontent.com/gregoiresgt/payment-icons/919d90075e88275a0f8d324788bd0ed33b667956/Assets/Credit%20Card/AmericanExpress/AmericanExpress-dark.svg';
    }
    if (payment === 'sepa') {
      return 'https://raw.githubusercontent.com/gregoiresgt/payment-icons/919d90075e88275a0f8d324788bd0ed33b667956/Assets/Payment/Sepa/Sepa-card-dark.svg';
    }
  }
  if (mode === 'light') {
    if (payment === 'paypal') {
      return 'https://raw.githubusercontent.com/gregoiresgt/payment-icons/919d90075e88275a0f8d324788bd0ed33b667956/Assets/Payment/PayPal/Paypal-card-light.svg';
    }
    if (payment === 'applepay') {
      return 'https://raw.githubusercontent.com/gregoiresgt/payment-icons/919d90075e88275a0f8d324788bd0ed33b667956/Assets/Payment/Apple/Apple-card-light.svg';
    }
    if (payment === 'amazon') {
      return 'https://raw.githubusercontent.com/gregoiresgt/payment-icons/919d90075e88275a0f8d324788bd0ed33b667956/Assets/Payment/Amazon/Amazon-card-light.svg';
    }
    if (payment === 'giropay') {
      return 'https://raw.githubusercontent.com/gregoiresgt/payment-icons/919d90075e88275a0f8d324788bd0ed33b667956/Assets/Payment/GiroPay/GiroPay-card-light.svg';
    }
    if (payment === 'googlewallet') {
      return 'https://raw.githubusercontent.com/gregoiresgt/payment-icons/919d90075e88275a0f8d324788bd0ed33b667956/Assets/Payment/GoogleWallet/GoogleWallet-card-light.svg';
    }
    if (payment === 'klarna') {
      return 'https://raw.githubusercontent.com/gregoiresgt/payment-icons/919d90075e88275a0f8d324788bd0ed33b667956/Assets/Payment/Klarna/Klarna-card-light.svg';
    }
    if (payment === 'maestro') {
      return 'https://raw.githubusercontent.com/gregoiresgt/payment-icons/919d90075e88275a0f8d324788bd0ed33b667956/Assets/Credit%20Card/Maestro/Maestro-card-light.svg';
    }
    if (payment === 'mastercard') {
      return 'https://raw.githubusercontent.com/gregoiresgt/payment-icons/919d90075e88275a0f8d324788bd0ed33b667956/Assets/Credit%20Card/MasterCard/MasterCard-light.svg';
    }
    if (payment === 'visa') {
      return 'https://raw.githubusercontent.com/gregoiresgt/payment-icons/919d90075e88275a0f8d324788bd0ed33b667956/Assets/Credit%20Card/Visa/Visa-card-light.svg';
    }
    if (payment === 'amex') {
      return 'https://raw.githubusercontent.com/gregoiresgt/payment-icons/919d90075e88275a0f8d324788bd0ed33b667956/Assets/Credit%20Card/AmericanExpress/AmericanExpress-light.svg';
    }
    if (payment === 'sepa') {
      return 'https://raw.githubusercontent.com/gregoiresgt/payment-icons/919d90075e88275a0f8d324788bd0ed33b667956/Assets/Payment/Sepa/Sepa-card-light.svg';
    }
  }
  if (mode === 'flat') {
    if (payment === 'paypal') {
      return 'https://raw.githubusercontent.com/gregoiresgt/payment-icons/919d90075e88275a0f8d324788bd0ed33b667956/Assets/Payment/PayPal/Paypal-card-flat.svg';
    }
    if (payment === 'applepay') {
      return 'https://raw.githubusercontent.com/gregoiresgt/payment-icons/919d90075e88275a0f8d324788bd0ed33b667956/Assets/Payment/Apple/Apple-card-flat.svg';
    }
    if (payment === 'amazon') {
      return 'https://raw.githubusercontent.com/gregoiresgt/payment-icons/919d90075e88275a0f8d324788bd0ed33b667956/Assets/Payment/Amazon/Amazon-card-flat.svg';
    }
    if (payment === 'giropay') {
      return 'https://raw.githubusercontent.com/gregoiresgt/payment-icons/919d90075e88275a0f8d324788bd0ed33b667956/Assets/Payment/GiroPay/GiroPay-card-flat.svg';
    }
    if (payment === 'googlewallet') {
      return 'https://raw.githubusercontent.com/gregoiresgt/payment-icons/919d90075e88275a0f8d324788bd0ed33b667956/Assets/Payment/GoogleWallet/GoogleWallet-card-flat.svg';
    }
    if (payment === 'klarna') {
      return 'https://raw.githubusercontent.com/gregoiresgt/payment-icons/919d90075e88275a0f8d324788bd0ed33b667956/Assets/Payment/Klarna/Klarna-card-flat.svg';
    }
    if (payment === 'maestro') {
      return 'https://raw.githubusercontent.com/gregoiresgt/payment-icons/919d90075e88275a0f8d324788bd0ed33b667956/Assets/Credit%20Card/Maestro/Maestro-card-flat.svg';
    }
    if (payment === 'mastercard') {
      return 'https://raw.githubusercontent.com/gregoiresgt/payment-icons/919d90075e88275a0f8d324788bd0ed33b667956/Assets/Credit%20Card/MasterCard/MasterCard-card-flat.svg';
    }
    if (payment === 'visa') {
      return 'https://raw.githubusercontent.com/gregoiresgt/payment-icons/919d90075e88275a0f8d324788bd0ed33b667956/Assets/Credit%20Card/Visa/Visa-card-flat.svg';
    }
    if (payment === 'amex') {
      return 'https://raw.githubusercontent.com/gregoiresgt/payment-icons/919d90075e88275a0f8d324788bd0ed33b667956/Assets/Credit%20Card/AmericanExpress/AmericanExpress-card-flat.svg';
    }
    if (payment === 'sepa') {
      return 'https://raw.githubusercontent.com/gregoiresgt/payment-icons/919d90075e88275a0f8d324788bd0ed33b667956/Assets/Payment/Sepa/Sepa-card-flat.svg';
    }
  }
}
