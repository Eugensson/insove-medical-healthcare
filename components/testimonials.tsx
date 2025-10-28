import Image from "next/image";

import { TestimonialSlider } from "@/components/testimonial-slider";

export const Testimonials = () => {
  return (
    <section className="py-12 xl:py-0 xl:min-h-150 bg-testimonials bg-cover bg-no-repeat bg-right">
      <div className="container">
        <div className="flex flex-col xl:flex-row items-center gap-x-14">
          <div className="hidden xl:block">
            <Image
              src="/assets/img/testimonials/img.png"
              width={530}
              height={595}
              alt="testimonials"
            />
          </div>
          <div>
            <TestimonialSlider />
          </div>
        </div>
      </div>
    </section>
  );
};
