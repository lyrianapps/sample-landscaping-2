"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from "@relume_io/relume-ui";
import React from "react";

export function Faq10() {
  return (
    <section
      id="relume"
      className="px-[5%] py-16 md:py-24 lg:py-28 bg-[#D8D8D8]"
    >
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            FAQs
          </h2>
          <p className="md:text-md">
            Here are some common questions about our services and how to get in
            touch.
          </p>
        </div>
        <div className="grid w-full auto-rows-min grid-cols-1 items-start gap-x-12 md:grid-cols-2 lg:gap-x-16">
          <Accordion type="multiple" className="w-full">
            <AccordionItem
              value="item-faq10_accordion"
              className="overflow-hidden"
            >
              <AccordionTrigger className="md:py-5 md:text-md">
                How can I contact you?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                You can reach us by phone or email. Our contact details are
                available on our website. We aim to respond within 24 hours.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-faq10_accordion-2"
              className="overflow-hidden"
            >
              <AccordionTrigger className="md:py-5 md:text-md">
                What are your hours?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                Our business hours are Monday through Friday, from 9 AM to 5 PM.
                We are closed on weekends. Feel free to reach out during these
                hours.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-faq10_accordion-3"
              className="overflow-hidden"
            >
              <AccordionTrigger className="md:py-5 md:text-md">
                Do you offer quotes?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                Yes, we provide free quotes for all our services. You can
                request a quote through our website. Simply fill out the form,
                and we will get back to you promptly.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-faq10_accordion-4"
              className="overflow-hidden"
            >
              <AccordionTrigger className="md:py-5 md:text-md">
                What services do you provide?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                We offer a range of landscaping services including design,
                installation, and maintenance. Our team is skilled in both
                residential and commercial projects. Let us help you create your
                dream outdoor space.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-faq10_accordion-5"
              className="overflow-hidden"
            >
              <AccordionTrigger className="md:py-5 md:text-md">
                Where are you located?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                We are based in Miami, Florida. Our location allows us to serve
                the surrounding areas effectively. Visit us or contact us for
                more details.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="multiple" className="w-full">
            <AccordionItem
              value="item-faq10_accordion-6"
              className="overflow-hidden first:border-t-0 md:first:border-t"
            >
              <AccordionTrigger className="md:py-5 md:text-md">
                Can I schedule a consultation?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                Absolutely! We encourage consultations to discuss your
                landscaping needs. You can schedule one by contacting us
                directly.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-faq10_accordion-7"
              className="overflow-hidden first:border-t-0 md:first:border-t"
            >
              <AccordionTrigger className="md:py-5 md:text-md">
                What payment methods do you accept?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                We accept various payment methods including credit cards,
                checks, and cash. Please inquire for more details during your
                consultation. We aim to make the payment process as convenient
                as possible.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-faq10_accordion-8"
              className="overflow-hidden first:border-t-0 md:first:border-t"
            >
              <AccordionTrigger className="md:py-5 md:text-md">
                Do you have warranties?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                Yes, we offer warranties on our services and installations. This
                ensures peace of mind for our clients. Please ask about specific
                warranty details during your consultation.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-faq10_accordion-9"
              className="overflow-hidden first:border-t-0 md:first:border-t"
            >
              <AccordionTrigger className="md:py-5 md:text-md">
                What if I need help?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                If you need assistance, please don’t hesitate to contact us. Our
                team is here to help with any questions or concerns. We strive
                to provide excellent customer service.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-faq10_accordion-10"
              className="overflow-hidden first:border-t-0 md:first:border-t"
            >
              <AccordionTrigger className="md:py-5 md:text-md">
                How do I follow up?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                You can follow up by reaching out via phone or email. We
                appreciate your patience and will respond as soon as possible.
                Your inquiries are important to us.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Still have questions?
          </h4>
          <p className="md:text-md">We're here to help you!</p>
          <div className="mt-6 md:mt-8">
            <Button
              title="Contact"
              className="text-base font-semibold px-6 py-2 rounded-full border-2 border-[#bdbdbd] bg-white text-black shadow-[0_4px_0_0_#bdbdbd] hover:bg-[#f5f5f5] transition min-w-[110px]"
              style={{ boxShadow: "0 4px 0 0 #bdbdbd" }}
            >
              Contact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
