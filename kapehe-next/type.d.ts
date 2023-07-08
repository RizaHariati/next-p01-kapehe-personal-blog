import { PortableTextBlock } from "sanity";

export type ProjectType = {
  _id: string;
  _createdAt: Date;
  name: string;
  image?: string;
  alt: string;
  url?: string;
  slug: string;
  content: PortableTextBlock[];
};

export type PageType = {
  _id: string;
  _createdAt: Date;
  title: string;
  slug: string;
  content: PortableTextBlock[];
};
