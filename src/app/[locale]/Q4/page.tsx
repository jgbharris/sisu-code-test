"use client";

import { useTranslations } from "next-intl";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useState } from "react";
import styles from "./page.module.css";

export default function Q4() {
  const t = useTranslations("Q4");
  const router = useRouter();
  const [weight, setWeight] = useState("");
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const locale = pathname.split("/")[1];

  const prevParams = new URLSearchParams(searchParams.toString());
  prevParams.set("weight", weight);

  const handleNext = () => {
    router.push(`/${locale}/Results?${prevParams.toString()}`);
  };

  return (
    <div className={styles.container}>
      <label htmlFor="weight-input" className={styles.label}>
        <h1 aria-label={t("enterWeight")} className={styles.title}>
          {t("enterWeight")}
        </h1>
      </label>
      <input
        id="weight-input"
        className={styles.input}
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        placeholder={t("placeholderWeight")}
        autoFocus
      />
      <button className={styles.button} onClick={handleNext} disabled={!weight}>
        Next
      </button>
    </div>
  );
}
