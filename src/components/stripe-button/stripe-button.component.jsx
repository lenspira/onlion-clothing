import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51Jf5ovGBzWEdnhnlAtBm48icp1iHX7tZhsRuvbazByRbBF8e8bUOd5AKPZC3sxEv3FmaseCloSOAA3jw9INC4wB700Cs0Zau5D";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="OnLion Clothing"
      billingAddress
      shippingAddress
      image="about:blank"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
