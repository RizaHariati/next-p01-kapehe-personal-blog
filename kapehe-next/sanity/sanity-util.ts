import { PageType, ProjectType } from "@/type";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";

export async function getProjects(): Promise<ProjectType[]> {
  const client = createClient(clientConfig);

  return client.fetch(
    groq`*[_type=="project"]{
            _id,
            _createdAt,
            name,
            alt,
            "slug":slug.current,
            "image":image.asset->url,
            url,
            content,
     }`
  );
}

export async function getProject(slug: string): Promise<ProjectType> {
  const client = createClient(clientConfig);

  return client.fetch(
    groq`*[_type=="project"&&slug.current==$slug][0]{
            _id,
            _createdAt,
            name,
            alt,
            "slug":slug.current,
            "image":image.asset->url,
            url,
            content,
     }`,
    { slug }
  );
}

export async function getPages(): Promise<PageType[]> {
  const client = createClient(clientConfig);
  return client.fetch(
    groq`*[_type=='page']{
         _id,
            _createdAt,
            title,
            "slug":slug.current,
            content,
    }`
  );
}

export async function getPage(slug: string): Promise<PageType> {
  const client = createClient(clientConfig);
  return client.fetch(
    groq`*[_type=='page'&&slug.current==$slug][0]{
         _id,
            _createdAt,
            title,
            "slug":slug.current,
            content,
    }`,
    { slug }
  );
}
