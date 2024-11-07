import React from 'react';
import Image from 'next/image';
import ariana from '/public/assets/ariana.jpg';
import Link from 'next/link';

const Tech1 = () => {
  return (
    <section>
      <div className="text-white bg-[#161717] p-8 gap-y-4 rounded-xl">
        <div className="flex items-center space-x-2">
          <Image
            src={ariana}
            alt="profile"
            width={40}
            height={40}
            className="rounded-full object-contain"
          />
          <Link href="/profile/user_2oM0SzYoOAZMUWYXBMJxBw6EskN">
            <button className="bg-[#214a8388] p-2 rounded-md">
              <h1 className=" w-36 text-center text-white rounded-sm ">
                Visit Profile
              </h1>
            </button>
          </Link>
        </div>
        <h1 className="mt-4">Title: E-Commerce Store</h1>
        <p className="my-6">
          Project Description: Create a fully functional e-commerce website
          where users can browse products, add items to a cart, and make
          purchases.
        </p>
        <p className="text-white ">
          Features: Product listing page with categories and search filters.
          Product details page with image gallery and reviews. Shopping cart
          with add/remove items functionality. User authentication and order
          history. Payment integration with Stripe.
        </p>
      </div>
    </section>
  );
};

export default Tech1;
