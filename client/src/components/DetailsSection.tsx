import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Card from "./shared/Card";
import { HomeData } from "@/types";
import DetailsSectionCard from "./DetailsSectionCard";

const DetailsSection = async ({ home_data }: { home_data: HomeData }) => {
  return (
    <div className="flex mt-24">
      <MaxWidthWrapper>
        <div className="dis-flex-col gap-y-10">
          <h2>
            {home_data.details_title_1}
            <br />
            {home_data.details_title_2}
          </h2>
          <p className="text-center text-pretty max-w-[700px] mx-auto px-20 md:px-0 leading-8">
            {home_data.details_description_1}
            <br />
            {home_data.details_description_2}
          </p>
        </div>

        <div className="dis-flex-col gap-y-10 mt-20 px-20 md:px-0">
          <h2>{home_data.second_details_title}</h2>

          <DetailsSectionCard home_data={home_data} />
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default DetailsSection;