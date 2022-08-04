import { loadStripe } from '@stripe/stripe-js';

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      'pk_test_51LSyrrFnqcQd3lqems7Cw9AlOjYiwp76Qo25kiz1fLhSfabEpzWraMMKuyS88mEHj4GevKfDf8x5GFVeTUsaVVSA00b0FvG278'
    );
  }
  return stripePromise;
};

export default getStripe;
