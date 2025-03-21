import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Card from "@/components/shared/Card";
import React from "react";

const page = () => {
  return (
    <section className="flex relative justify-center items-center pt-40 pb-20">
      <MaxWidthWrapper className="dis-flex-col justify-center items-center">
        <div className="mb-10">
          <h1 className="!mb-5">C Technology</h1>
          <p className="text-center">
            At <strong>C Tech</strong>, we're a team of innovative thinkers and
            passionate technologists driven by a shared <strong>vision</strong>{" "}
            and <strong>mission</strong>.
          </p>
        </div>

        <div className="dis-flex-col gap-10 justify-center items-center">
          <Card className="md:!max-w-[30rem]">
            <h2 className="!mb-2">Our Vision:</h2>
            <p>
              Imagine a world where technology is no longer a privilege of the
              few but a right for all. That’s our <strong>vision</strong> at C
              Tech. <strong>Our vision</strong> is to bridge the digital divide
              by offering cutting-edge technology services that are not only
              exceptional but also affordable and easy to use for people from
              all walks of life. We aim to create a world where everyone can
              benefit from the power of technology, regardless of their
              background, by providing innovative technology solutions that are
              both accessible and enjoyable. Guided by the vision to become the
              next iconic tech giant - the next Apple.
            </p>
          </Card>
          <Card className="md:!max-w-[30rem]">
            <h2 className="!mb-2 !mt-5">Our Mission:</h2>
            <p>
              <strong>Our mission</strong> is clear. To innovate and make a
              meaningful difference in your everyday life. At C Technology, we
              don’t just create products - we create possibilities. We believe
              in the power of innovation to change lives, transform industries,
              and inspire a better tomorrow. Imagine a world where technology
              serves humanity. That’s our <strong>mission</strong> at C Tech.{" "}
              <strong>Our mission</strong> is to pioneer the development of
              groundbreaking technologies that solve real-world problems by
              creating innovative technologies that empower people to build a
              better world. We strive to develop the most advanced programming
              languages, artificial intelligence systems, computers, software,
              and security solutions that make a meaningful impact on people’s
              daily lives. We aim to create solutions that are not only
              revolutionary but also easy to use, reliable, and secure. We’re on
              a<strong>mission</strong> to redefine the way people connect,
              interact, and experience technology.
            </p>
          </Card>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default page;
