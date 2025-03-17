"use client";

import React, { useEffect, useRef } from "react";
import Markdown from "react-markdown";
import "github-markdown-css";
import rehypeRaw from "rehype-raw";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { useLessonStore } from "@/store/lessonStore";

const TopicContainer = ({
  children,
  className,
}: {
  children: any;
  className?: React.ReactNode;
}) => {
  return (
    <MaxWidthWrapper>
      <div
        className="markdown-body !bg-transparent py-5 dark:!text-white !text-primary"
      >
        <Markdown rehypePlugins={[rehypeRaw]}>{children}</Markdown>
      </div>
    </MaxWidthWrapper>
  );
};

export default TopicContainer;