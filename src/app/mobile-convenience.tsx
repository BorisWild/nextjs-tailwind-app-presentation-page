// @ts-nocheck
"use client";

import React from "react";
import Image from "next/image";
import InfoCard from "@/components/info-card";
import { Typography, Card, CardBody, Button } from "@material-tailwind/react";

const OPTIONS = [
  {
    title: "100",
    description: "Expert Instructions",
  },
  {
    title: "500+",
    description: "Documents",
  },
  {
    title: "24/7",
    description: "Support",
  },
  {
    title: "5/5",
    description: "Review Stars",
  },
];

export function MobileConvenience() {
  return (
    <section className="py-20 px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
        <Image
          width={482}
          height={624}
          src="/image/iphone22.png"
          className="col-span-1  mx-auto lg:w-10/12"
          alt="iphone-photo"
        />
        <div className="col-span-1 mx-auto max-w-lg px-4 lg:px-0 flex flex-col justify-center align-center">
          <Typography variant="h2" color="blue-gray" className="mb-4">
            Web App
          </Typography>
          <Typography
            variant="lead"
            className="mb-5 text-left  text-xl !text-gray-500 lg:px-0  "
          >
            Access your documents on the go. Try it!
          </Typography>
                        <a href="https://example.dev-2-tech.ru" target="_blank"> 
                 <Button color={"close"} size="lg"> 
                   Lawyer Copilot 
                 </Button> 
               </a>
          <div className="col-span-2 grid gap-5 grid-cols-2 ">
            {OPTIONS.map(({ title, description }) => (
              <InfoCard key={title} title={title}>
                {description}
              </InfoCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default MobileConvenience;
