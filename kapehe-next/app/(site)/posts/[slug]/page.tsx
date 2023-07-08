import { getProject } from "@/sanity/sanity-util";
import { ProjectType } from "@/type";
import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
type Props = {
  params: { slug: string };
};

const page = async ({ params: { slug } }: Props) => {
  const project = await getProject(slug);

  if (!project) {
    return notFound();
  }

  console.log(project.content.entries.toString());
  return (
    <div className="h-full min-h-screen w-full max-w-6xl mx-auto">
      <h1>{project.name}</h1>
      {project.image && (
        <Image
          src={project.image}
          alt={project.alt}
          width={500}
          height={300}
          priority
        />
      )}
      <PortableText value={project.content} />
    </div>
  );
};

export default page;
