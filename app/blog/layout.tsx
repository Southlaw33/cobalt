import Link from "next/link";
import { PropsWithChildren } from "react";
import BlogLink from "./blog-link";

export default (props: PropsWithChildren) => {
  return (
    <div className="flex flex-row gap-2">
      <div className="w-48 h-full">
        <ul className="flex flex-col gap-2">
          {[1, 2, 3, 4].map((slug) => {
            return (
              <li key={slug}>
                <BlogLink slug={`${slug}`} />
              </li>
            );
          })}
        </ul>
      </div>
      <div className="w-full">{props.children}</div>
    </div>
  );
};
