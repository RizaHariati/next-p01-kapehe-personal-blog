import { getProjects } from "@/sanity/sanity-util";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const gettingProjects = getProjects();
  const projects = await gettingProjects;

  return (
    <div className="h-full min-h-screen p-10 px-24">
      <h1>
        Hello! I'm
        <span className=" bg-gradient-to-r from-blue-600 via-red-600 to-yellow-600 bg-clip-text text-transparent">
          Icha
        </span>
      </h1>
      <h2> Hi everyone, welcome to my projects</h2>

      <div className="w-full h-full grid grid-cols-3 gap-5">
        {projects.map((project) => {
          return (
            <div
              key={project._id}
              className=" border border-black rounded-md shadow-sm p-5"
            >
              <Link href={`/posts/${project.slug}`}>
                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={500}
                    height={300}
                    className=" overflow-hidden rounded-sm"
                    priority
                  />
                )}
                <h2 className=" w-fit bg-gradient-to-r from-fuchsia-900 via-yellow-500 to-teal-600 bg-clip-text text-transparent">
                  {project.name}
                </h2>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
