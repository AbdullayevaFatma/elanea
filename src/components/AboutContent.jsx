import React from "react";
import about from "../assets/about_section.avif";
import about2 from "../assets/about_section_2.avif";

const AboutContent = () => {
  return (
    <section className="px-8 md:px-16 py-20 space-y-24">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-semibold mb-4">
          Step Into the World of ÉLANÉA
        </h1>
        <p className="text-sm md:text-base text-gray-700">
          ÉLANÉA is where bold elegance meets effortless confidence. A modern
          luxury brand for women, ÉLANÉA is designed for those who lead with
          style and express their individuality through every detail—from
          statement clothing to elevated accessories and shoes.Founded in 2019,
          ÉLANÉA was born out of a passion for contemporary fashion,
          self-expression, and the art of refined living.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2 h-[500px]">
          <img
            src={about}
            alt="About Section Image 1"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-xl font-semibold mb-4">Our Essence</h2>
          <p className="text-gray-700 text-sm md:text-base">
            At ÉLANÉA, fashion is more than an outfit—it's a reflection of who
            you are. We believe in the power of individuality, the beauty of
            bold self-expression, and the confidence that comes from embracing
            your true style. Every piece we create is thoughtfully designed to
            celebrate the strength, grace, and presence of the modern woman.Our
            commitment to quality, detail, and timeless sophistication is at the
            heart of everything we do. From tailored silhouettes to striking
            accessories, ÉLANÉA empowers women to lead with elegance and live
            with intention.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row-reverse items-center gap-10">
        <div className="w-full md:w-1/2 h-[500px]">
          <img
            src={about2}
            alt="About Section Mission Image"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-xl font-semibold mb-4">OUR MISSION</h2>
          <p className="text-gray-700 text-sm md:text-base space-y-2">
            At ÉLANÉA, our mission is to empower women through fashion that
            speaks to their strength, individuality, and refined sense of style.
            We are committed to creating timeless, statement-driven pieces that
            elevate everyday elegance. With each design, we aim to inspire
            confidence and encourage self-expression—so every woman can feel
            seen, celebrated, and unstoppable.
            <br />
            <br />
            Through intentional craftsmanship, premium quality, and a bold yet
            sophisticated aesthetic, ÉLANÉA is more than a brand—it’s a movement
            for modern women who lead with purpose and live with passion.
          </p>
        </div>
      </div>

      <div className="text-center max-w-2xl mx-auto space-y-4 ">
        <h2 className="text-xl font-semibold">JOIN THE ÉLANÉA COMMUNITY</h2>
        <p className="text-sm md:text-base text-gray-700">
          Be part of a collective that celebrates style, strength, and
          individuality. When you join the ÉLANÉA community, you're not just
          following a brand—you’re stepping into a world where fashion empowers,
          and connection inspires.
        </p>
        <p className="text-sm italic text-gray-600">
        With love, always — your ÉLANÉA team
        </p>
      </div>
    </section>
  );
};

export default AboutContent;
