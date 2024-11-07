import Link from 'next/link';
import React from 'react';
import ganii from '/public/assets/ganii.jpg';
import Image from 'next/image';

const Tech2 = () => {
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
        <p className="my-6">
          Project Description: Build a To-Do List application where users can
          create tasks, assign them to categories, and mark them as complete or
          incomplete. This project helps practice CRUD operations with MongoDB.
        </p>
        <p className="text-white ">
          Core Features: Users can create, update, and delete tasks. Tasks can
          be categorized (e.g., Work, Personal, Shopping). Users can mark tasks
          as completed or uncompleted. Filter tasks by category or completion
          status.
        </p>
        <p className="my-4">
          Database Structure: Users Collection: Stores user data (username,
          email, password hash). Tasks Collection: Stores tasks (title,
          description, category, status, user ID). Categories Collection
          (optional): Stores category names to allow users to categorize tasks.
        </p>
        <p>
        Tech Stack: MongoDB, Express, React, Node.js (MERN) or Next.js
        </p>
      </div>
    </section>
  );
};

export default Tech2;
