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
        <h1 className="mt-4">Title: Blog Layout with Dark Mode</h1>
        <p className="my-6">
        Design a blog layout where users can browse and read articles with a clean, reader-friendly interface. Tailwind CSS makes it easy to build a responsive layout that can adapt to mobile, tablet, and desktop screen sizes. Start with a Home page that features a grid of blog posts, each card displaying an image, title, and excerpt. This design should encourage readers to explore different topics and categories. On the blog post detail page, format the article content with attention to typography for readability, and include author information along with related posts for further engagement. Implementing a dark mode toggle will improve user experience, especially for nighttime reading, and can be achieved using Tailwind’s dark mode utilities. Optionally, if you want to manage content dynamically, you can integrate a CMS like Sanity or Contentful. This project is great for beginners and intermediate developers who want to practice blog layouts and theme switching.
        </p>
      </div>
    </section>
  );
};

export default Tech2;
