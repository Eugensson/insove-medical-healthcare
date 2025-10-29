import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { faqsData } from "@/lib/data";

export const Faq = () => {
  return (
    <section className="container">
      <h2 className="mb-12.5 h2 text-center">We&apos;ve got answers</h2>
      <Accordion
        type="single"
        collapsible
        className="w-full max-w-5xl mx-auto"
        defaultValue="item-1"
      >
        {faqsData.map(({ id, question, answer }) => (
          <AccordionItem key={id} value={id} className="px-7.5">
            <AccordionTrigger>{question}</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p className="text-primary font-light">{answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
