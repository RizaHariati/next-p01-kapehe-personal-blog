import { getPages } from "@/sanity/sanity-util";
import { PageType } from "@/type";
import Link from "next/link";
import React from "react";

type Props = {};

const Navbar = async (props: Props) => {
  const pages = await getPages();

  return (
    <div className=" bg-stone-600 text-white p-3 px-10 flex items-center justify-between">
      <Link href="/">
        <h2>Home</h2>
      </Link>
      <div className=" flex gap-10">
        {pages.map((page: PageType) => {
          return (
            <Link
              href={page.slug}
              key={page._id}
              className=" hover:text-stone-200 "
            >
              <h3>{page.title}</h3>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
