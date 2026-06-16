"use client";

import { ReactNode } from "react";

import ButtonComponent from "@/components/button/button.component";

import styles from "./error.module.css";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: Props): ReactNode {
  return (
    <div className={styles.error}>
      <div>یک خطای غیر منتظره رخ داده‌است</div>
      <ButtonComponent onClick={reset}>تلاش دوباره</ButtonComponent>
    </div>
  );
}
