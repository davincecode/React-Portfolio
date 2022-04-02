import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const KEY = "pk_test_p9059T8N5A6S3maZiZnBKm3300dvrbvn5v"

const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post("http://localhost:5012/api/checkout/payment", {
          tokenID: stripeToken.id,
          amount: 100,
        }
        );
        console.log(res.data);
        navigate("/success");
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken, navigate]);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      width: '100vw',
    }}>
      { stripeToken ? (<span>Processing. Please wait...</span>) : (
        <StripeCheckout
          name="xview collective"
          image="https://stripe.com/img/documentation/checkout/marketplace.png"
          billingAddress
          shippingAddress
          description="Your total is $20"
          amount={ 500 }
          token={ onToken }
          stripeKey={ KEY }
        />)}
    </div>
  );
}
    
export default Pay;
    
