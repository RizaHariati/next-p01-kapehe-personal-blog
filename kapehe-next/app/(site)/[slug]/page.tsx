import { getPage } from "@/sanity/sanity-util";
import { PortableText } from "@portabletext/react";
import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

const page = async ({ params: { slug } }: Props) => {
  const page = await getPage(slug);
  return (
    <div className="h-full min-h-screen p-10 w-full">
      <h1>{page.title}</h1>

      <PortableText value={page.content} />
    </div>
  );
};

export default page;
