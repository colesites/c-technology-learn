import React from "react";
import Markdown from "react-markdown";
import "github-markdown-css";
import rehypeRaw from "rehype-raw";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const TopicContainer = ({children}: {children: any}) => {
  return (
    <MaxWidthWrapper>
      <div className="markdown-body !bg-transparent py-20">
      <Markdown rehypePlugins={[rehypeRaw]}>
        {children}
      </Markdown>
      </div>
    </MaxWidthWrapper>
  );
};

export default TopicContainer;
