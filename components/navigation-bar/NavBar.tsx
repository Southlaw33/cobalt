"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default () => {
  const path = usePathname();

  return (
    <div>
      <ul className="flex flex-row justify-center items-center gap-6 list-none">
        <li key="/home" className={path == "/" ? "text-red-800" : ""}>
          <Link href="/">Home</Link>
        </li>
        <li
          key="enterprise "
          className={path == "/enterprise" ? "text-red-800" : ""}
        >
          <Link href="/enterprise">Enterprise</Link>
        </li>
        <li key="pricing" className={path == "/pricing" ? "text-red-800" : ""}>
          <Link href="/pricing">Pricing</Link>
        </li>
        <li key="blog" className={path == "/blog" ? "text-red-800" : ""}>
          <Link href="/blog">Blog</Link>
        </li>
      </ul>
    </div>
  );
};
