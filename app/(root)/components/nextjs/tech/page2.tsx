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
        <h1 className="mt-4">Title: Personal Blog with CMS Integration</h1>
        <p className="my-6">
          Project Description: Build a personal blog website with a content
          management system (CMS) like Sanity or Contentful, allowing you to
          manage blog posts and author profiles.
        </p>
        <p className="text-white ">
          Features: Home page with featured posts and categories. Blog post
          detail pages with author info and related posts. Search and filter
          posts by tags or categories. Admin dashboard to manage posts and
          update content. SEO-friendly URLs and meta tags for improved search
          engine ranking.
        </p>
      </div>
    </section>
  );
};

export default Tech2;
