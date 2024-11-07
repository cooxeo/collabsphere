import React from 'react';
import Image from 'next/image';
import ganii from '/public/assets/ganii.jpg';
import Link from 'next/link';

const Rec1 = () => {
  return (
    <section>
      <div className="text-white bg-[#161717] p-8 gap-y-4 rounded-xl">
        <div className="flex items-center space-x-2">
          <Image
            src={ganii}
            alt="profile"
            width={40}
            height={40}
            className="rounded-full object-contain"
          />
          <Link href="/profile/user_2oHsFJ8wz3Kib8uCVpLZ8HotrYV">
            <button className="bg-[#214a8388] p-2 rounded-md">
              <h1 className=" w-36 text-center text-white rounded-sm ">
                Visit Profile
              </h1>
            </button>
          </Link>
        </div>
        <h1 className="mt-4">Title: Real-Time Chat Application</h1>
        <p className="my-6">
          Project Description: Create a real-time chat application where users
          can sign up, log in, and chat with others in different chat rooms.
        </p>
        <p className="text-white ">
          Features: User authentication (sign-up, log-in). Real-time messaging
          between users. Multiple chat rooms where users can join and leave.
          Emojis, message reactions, and message notifications. Responsive
          design for both mobile and desktop users.
        </p>
        <p className="my-4">
          Tech Stack: Frontend: React, Tailwind CSS for styling, Socket.IO for
          real-time messaging. Backend: Node.js and Express to handle API
          requests and Socket.IO server for WebSocket communication. Database:
          MongoDB to store user data and chat history.
        </p>
      </div>
    </section>
  );
};

export default Rec1;
