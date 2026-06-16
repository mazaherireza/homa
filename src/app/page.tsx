import { type ReactNode } from "react";

import PresentationComponnet from "@/components/presentation/presentation.component";
import MemoriesComponent from "@/components/memories/memories.component";

import styles from "./page.module.css";

export default function Page(): ReactNode {
  throw new Error("KHATA");

  return (
    <div className={styles.page}>
      <PresentationComponnet />
      <MemoriesComponent />
    </div>
  );
}
