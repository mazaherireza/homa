"use client";

import { ReactNode } from "react";

import ButtonComponent from "@/components/button/button.component";

import styles from "./error.module.css";

type Props = {
  error: Error & { digest?: string };
  unstable_retry: () => void;
};

export default function Error({ error, unstable_retry }: Props): ReactNode {
  return (
    <div className={styles.error}>
      <div>یک خطای غیر منتظره رخ داده‌است</div>
      <ButtonComponent className={styles.button} onClick={unstable_retry}>
        تلاش دوباره
      </ButtonComponent>
    </div>
  );
}
