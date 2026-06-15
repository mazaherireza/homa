import { type ReactNode } from "react";

import Link from "next/link";

import GithubIcon from "@/components/icons/github.icon";

import styles from "./footer.module.css";

export default function FooterComponent(): ReactNode {
  const date = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.links}>
          <Link href="https://www.samandarian.com/" target="_blank">
            آکادمی هنرهای دراماتیک سمندریان
          </Link>
          <Link href="https://www.imdb.com/name/nm0751810/" target="_blank">
            IMDb
          </Link>
        </div>
        <div className={styles.copyright}>{date} &copy;</div>
      </div>
      <div className={styles.signature}>
        <div className={styles.text}>طراحی و توسعه: رضا مظاهری</div>
        <Link href="https://github.com/mazaherireza" target="_blank">
          <GithubIcon />
        </Link>
      </div>
    </footer>
  );
}
