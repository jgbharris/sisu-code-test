"use client";
import { useTranslations } from "next-intl";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useState } from "react";
import styles from "./page.module.css";

export default function Q3() {
  const t = useTranslations("Q3");
  const router = useRouter();
  const [height, setHeight] = useState("");
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const locale = pathname.split("/")[1];

  const prevParams = new URLSearchParams(searchParams.toString());
  prevParams.set("height", height);

  const handleNext = () => {
    router.push(`/${locale}/Q4?${prevParams.toString()}`);
  };

  return (
    <div className={styles.container}>
      <label htmlFor="height-input" className={styles.label}>
        <h1 aria-label={t("enterHeight")} className={styles.title}>
          {t("enterHeight")}
        </h1>
      </label>
      <input
        id="height-input"
        className={styles.input}
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        placeholder={t("placeholderHeight")}
        autoFocus
      />
      <button className={styles.button} onClick={handleNext} disabled={!height}>
        Next
      </button>
    </div>
  );
}
