import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div>
      <div
        style={{ color: "white" }}
        class="d-flex justify-content-center gap-5 fw-bold my-5 p-4 text-bg-dark"
      >
        <Link href="/">
          <a> 👑 Home page</a>
        </Link>
        <Link href="/Experience">
          <a>💡 Experience</a>
        </Link>
        <Link href="/Contact">
          <a>💎 Contact</a>
        </Link>
        <Link href="/lab-07">
          <a>Lab-07</a>
        </Link>
      </div>
    </div>
  );
}
