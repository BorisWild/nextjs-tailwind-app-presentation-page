// @ts-nocheck
"use client";
import Image from "next/image";
import { Typography, IconButton, Button } from "@material-tailwind/react";

const LINKS = ["About Us", "Careers", "Press", "Blog", "Pricing"];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 bg-gray-900 px-8 pt-12">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-8 md:justify-between">
          <div className="text-center md:text-left">
            <Typography
              as="a"
              href="https://www.material-tailwind.com"
              target="_blank"
              variant="h5"
              color="white"
              className="mb-4"
            >
              Lawyer Copilot
            </Typography>
            <Typography color="white" className="mb-12 font-normal">
              The reward for getting on the stage is fame.
            </Typography>
            <div className="flex gap-2 justify-center">
              <a href="https://api.example.dev-2-tech.ru/app/login" target="_blank">
                <Button color={"white"} size="sm">
                  Login
                </Button>
              </a>
              <a href="https://api.example.dev-2-tech.ru/app/register" target="_blank">
                <Button color={"white"} size="sm">
                  Registration
                </Button>
              </a>
            </div>
            {/* <ul className="flex flex-wrap items-center justify-center md:justify-start">
              {LINKS.map((link, idx) => (
                <li key={link}>
                  <Typography
                    as="a"
                    href="#"
                    color="white"
                    className={`py-1 font-medium transition-colors ${
                      idx === 0 ? "pr-3" : "px-3"
                    }`}
                  >
                    {link}
                  </Typography>
                </li>
              ))}
            </ul> */}
          </div>
         
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 gap-x-8 border-t border-gray-700 py-7 md:justify-between">
         

          <div className="flex gap-2">
            
          <a href="https://github.com/BorisWild/nextjs-tailwind-app-presentation-page" target="_blank">
            <IconButton variant="text" color="white">
              <i className="fa-brands fa-github text-2xl not-italic opacity-75"></i>
            </IconButton>
          </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
