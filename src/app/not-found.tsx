import { type ReactNode } from "react";

import TheaterIcon from "@/components/icons/theatre.icon";

import styles from "./not-found.module.css";

export default function NotFound(): ReactNode {
  return (
    <div className={styles["not-found"]}>
      <TheaterIcon className={styles.icon} />
      <div>خطای 404</div>
      <div>صفحه‌ی موردنظر پیدا نشد</div>
    </div>
  );
}
