"use client";

import type { ReactNode } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import clsx from "clsx";

import styles from "./header.module.css";

export default function HeaderComponent(): ReactNode {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <Link href="/" className={clsx(pathname === "/" && styles.active)}>
              خانه
            </Link>
          </li>
          <li>
            <Link
              href="/gallery"
              className={clsx(pathname === "/gallery" && styles.active)}
            >
              گالری
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.logo}>Homa</div>
    </header>
  );
}
