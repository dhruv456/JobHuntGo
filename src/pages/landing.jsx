import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import React from "react";
import { Link } from "react-router-dom";
import companies from "../data/companies.json";
import Autoplay from "embla-carousel-autoplay";
import faqs from "../data/faqs.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function LandingPage() {
  return (
    <main>
      {/* "Your Go-To Platform for Job Search & Hiring Success!" */}
      <div className="text-[1.8rem] justify-center items-center sm:text-[3.8rem] my-15">
        <h1 className="font-Bold text-center">
          Your Go-To Platform for Job Search and Hiring Success!
        </h1>
        <p className="text-[0.6rem] sm:text-[1.5rem] text-center">
          Explore thousands of job listings or find the perfect candidate
        </p>
      </div>

      <div className="flex flex-col justify-center gap-5 sm:flex-row items-center m-10">
        <Link to="/job">
          <Button variant="primaryBlue" size="xl">
            Find Jobs
          </Button>
        </Link>
        <Link to="/post-job">
          <Button variant="destructive" size="xl">
            Find Jobs
          </Button>
        </Link>
      </div>
      <Carousel
        className="w-full py-10"
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent className="flex gap-5 sm:gap-20 items-center">
          {companies.map((element) => {
            return (
              <CarouselItem key={element.id} className="basis-1/3 lg:basis-1/6">
                <img
                  src={element.path}
                  alt={element.name}
                  className="h-8 sm:h-15"
                ></img>
              </CarouselItem>
            );
          })}
          ;
        </CarouselContent>
      </Carousel>
      <img className="w-full" src="./banner.webp"></img>
      {/* banner */}
      {/* cards */}
      <Accordion type="single" collapsible>
        {faqs.map((faq, index) => {
          return (
            <AccordionItem key={index} value={`item-${1 + index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </main>
  );
}

export default LandingPage;
