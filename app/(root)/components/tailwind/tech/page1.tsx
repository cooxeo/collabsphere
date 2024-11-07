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
        <h1 className="mt-4">Title:  Dashboard for Data Visualization</h1>
        <p className="my-6">
        Build a data visualization dashboard to display key metrics, charts, and tables, making it ideal for tracking KPIs or other important metrics. This dashboard can use Tailwind CSS for a modern, responsive design and Chart.js or Recharts to handle various data visualizations. Start by creating a layout with a sidebar for navigation and a main section for displaying widgets. Each widget can be a card component showing specific metrics, such as total sales, active users, or customer satisfaction. Add different chart types like line, bar, and pie charts to help visualize trends over time. Include a table component to show detailed data records, which users can scroll or filter as needed. A dark mode toggle will add a sleek, professional touch, giving users the option to switch themes. This project is an excellent choice for intermediate to advanced developers looking to explore data representation and dashboard interfaces.
        </p>
      </div>
    </section>
  );
};

export default Rec1;
