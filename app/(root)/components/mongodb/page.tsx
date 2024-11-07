import React from "react";
import Tech1 from "./tech/page";
import Tech2 from "./tech/page2";
import Tech3 from "./tech/page3";

const page = () => {
  return (
    <section className="space-y-2">
        <Tech1/>
        <Tech2/>
        <Tech3/>
    </section>
  );
};

export default page;
