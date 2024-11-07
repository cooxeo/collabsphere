import Link from 'next/link';
import React from 'react';
import kis from '/public/assets/kis.jpg';
import Image from 'next/image';

const Tech2 = () => {
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
        <h1 className="mt-4">Title: Expense Tracker</h1>
        <p className="my-6">
          Project Description: Build an expense tracker where users can add,
          edit, and delete their expenses, and categorize them to analyze their
          spending.
        </p>
        <p className="text-white ">
          Features: User authentication for secure data access. Add, edit, and
          delete expenses with date and category selection. Display expenses by
          category, month, or date range. Generate spending summary with charts
          and graphs. Export data as a CSV file for offline tracking.
        </p>
        <p className="my-4">
          Tech Stack: Frontend: React, Tailwind CSS for styling, and optionally,
          Chart.js for visualizing expense data. Backend: Node.js and Express to
          handle API requests. Database: MongoDB to store expense data.
        </p>
        <p>Tech Stack: MongoDB, Express, React, Node.js (MERN) or Next.js</p>
      </div>
    </section>
  );
};

export default Tech2;
