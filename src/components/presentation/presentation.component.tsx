import { type ReactNode } from "react";

import styles from "./presentation.module.css";

export default function PresentationComponnet(): ReactNode {
  return (
    <div className={styles.presentation}>
      <h1>هما روستا</h1>
      <div className={styles.more}>
        <div>هنرپیشه، مترجم</div>
        <time>4 مهر 1323 - 4 مهر 1394</time>
      </div>
    </div>
  );
}
