import Link from 'next/link';
import React from 'react';
import kis from '/public/assets/kis.jpg';
import Image from 'next/image';

const Tech3 = () => {
  return (
    <section>
      <div className="text-white bg-[#161717] p-8 gap-y-4 rounded-xl">
        <div className="flex items-center space-x-2">
          <Image
            src={kis}
            alt="profile"
            width={40}
            height={40}
            className="rounded-full object-contain"
          />
          <Link href="/profile/user_2oL8s8jwnY0SWOf5ifjkEt08sm4">
            <button className="bg-[#214a8388] p-2 rounded-md">
              <h1 className=" w-36 text-center text-white rounded-sm ">
                Visit Profile
              </h1>
            </button>
          </Link>
        </div>
        <h1 className="font-semibold mt-4">Project Title: Travel Guide App</h1>
        <p className="my-6">
          Project Description: Develop a travel guide app where users can browse
          destinations, view detailed guides, and book tours. MongoDB will store
          information about destinations, tours, and bookings.
        </p>
        <p className="text-white ">
          Core Features: Users can browse a list of destinations. Each
          destination has detailed information, images, and tour options. Users
          can book tours with a payment integration (using Stripe). Users can
          leave reviews for destinations and tours.
        </p>
        <p className="my-4">
          Database Structure: Users Collection: Stores user data (username,
          email, password hash). Destinations Collection: Stores information
          about travel destinations (name, description, images). Tours
          Collection: Stores tour options for destinations (name, price,
          description, destination ID). Bookings Collection: Stores booking
          information (tour ID, user ID, date, payment details). Reviews
          Collection: Stores reviews for destinations and tours (user ID,
          destination/tour ID, rating, content).
        </p>
        <p>Tech Stack: Next.js, MongoDB, Clerk for authentication, Stripe for payments (full-stack)</p>
      </div>
    </section>
  );
};

export default Tech3;
