import { type ReactNode } from "react";

import styles from "./page.module.css";

export default function Home(): ReactNode {
  return (
    <div className={styles.page}>
      <h1>هما روستا</h1>
    </div>
  );
}
