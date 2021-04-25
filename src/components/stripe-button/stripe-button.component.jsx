import React from 'react';
import StripeCheckOut from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IkALQIJJH53IXlS0kZULcotiJOUZwmwhQeJzxCrQvCFUlKYPHHHUVsOremq6knHuIR4N8dUKE4qFVgXqFh2akTz005yXdHbcS';

    const onToken = token => {
        console.log(token);
        alert('Payment successfull');
    }

    return (
        <StripeCheckOut
          label='Pay Now'
          name='crwn clothing ltd'
          billingAddress
          shippingAddress
          img='https://svgshare.com/i/CUz.svg'
          description={`Your total is $${price}`}
          amount={priceForStripe}
          panelLabel='Pay Now'
          token={onToken}
          stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;