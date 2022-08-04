import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';

import { runFireWorks } from '../lib/utils';

const success = () => {
  runFireWorks();

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your order!</h2>
        <p className="email-msg">Check your email inbox for the receipt.</p>
        <p className="description">
          If you have any questions, please email
          <a href="mailto:order@gmail.com" className="email">
            order@gmail.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default success;
