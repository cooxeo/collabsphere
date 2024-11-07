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
          <Link href='/profile/user_2oM0SzYoOAZMUWYXBMJxBw6EskN'>
            <button className='bg-[#214a8388] p-2 rounded-md'>
              <h1 className=" w-36 text-center text-white rounded-sm ">
                Visit Profile
              </h1>
            </button>
          </Link>
        </div>
        <p className="my-6">
          Project Description: Create a basic blog application where users can
          write, edit, delete, and read posts. Use MongoDB as the database to
          store blog posts and user information.
        </p>
        <p className="text-white ">
          Core Features: Users can register and log in. Authenticated users can
          create, edit, and delete blog posts. Each post has a title, content,
          and timestamp. Users can add comments on posts.
        </p>
        <p className="my-4">
          Database Structure: Users Collection: Stores user data (username,
          email, password hash). Posts Collection: Stores blog posts (title,
          content, author, timestamps). Comments Collection: Stores comments on
          posts (content, post ID, user ID, timestamps).
        </p>
      </div>
    </section>
  );
};

export default Tech1;
