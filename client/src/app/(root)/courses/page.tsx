import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Card from "@/components/shared/Card";
import Link from "next/link";
import React from "react";
import { fetchCoursesAPI } from "@/app/api";
import { fetchNavAPI } from "@/app/api";
import { auth } from "@/auth";

const page = async () => {
  const courses_data = await fetchCoursesAPI();
  const nav_data = await fetchNavAPI();
  const session = await auth();

  return (
    <section className="flex relative justify-center items-center h-screen">
      <MaxWidthWrapper className="flex justify-center items-center">
        <div className="dis-flex-col lg:dis-flex-row px-20 md:px-0 gap-y-10 lg:gap-x-10">
          <Card>
            <h3 className="mb-5">{courses_data.frontend_title}</h3>
            <p>{courses_data.frontend_short_descp}</p>
            {session ? (
              <Link href={`/dashboard/front-end/introduction/${session.user?.name}`} className="mt-5">
                <button className="p-2 rounded-md bg-primary/20 border border-white/20 hover:bg-white/10">
                  {nav_data.getstarted}
                </button>
              </Link>
            ) : (
              <Link href="/auth/sign-in" className="mt-5">
                <button className="p-2 rounded-md bg-primary/20 border border-white/20 hover:bg-white/10">
                  {nav_data.signin}
                </button>
              </Link>
            )}
          </Card>
          <Card>
            <h3 className="mb-5">{courses_data.backend_title}</h3>
            <p>{courses_data.backend_short_descp}</p>
            <button className="mt-5 p-2 rounded-md bg-primary/20 border border-white/20 hover:bg-white/10">
              Coming soon
            </button>
          </Card>
          <Card>
            <h3 className="mb-5">{courses_data.fullstack_title}</h3>
            <p>{courses_data.fullstack_short_descp}</p>
            <button className="mt-5 p-2 rounded-md bg-primary/20 border border-white/20 hover:bg-white/10">
              Coming soon
            </button>
          </Card>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default page;
