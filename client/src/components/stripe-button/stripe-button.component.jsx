import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51Jf5ovGBzWEdnhnlAtBm48icp1iHX7tZhsRuvbazByRbBF8e8bUOd5AKPZC3sxEv3FmaseCloSOAA3jw9INC4wB700Cs0Zau5D";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert("Payment successful");
      })
      .catch((error) => {
        console.log("Payment error: ", JSON.parse(error));
        alert(
          "There was an issue with your payment. Please make sure you used the provided credit card."
        );
      });
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
