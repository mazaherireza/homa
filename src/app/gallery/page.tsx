import { type ReactNode } from "react";

import Image from "next/image";

import homa2 from "@/assets/images/homa-rousta2.webp";

import styles from "./page.module.css";

export default function Page(): ReactNode {
  return (
    <div className={styles.page}>
      <div>
        <Image src={homa2} alt="" />
      </div>
    </div>
  );
}
