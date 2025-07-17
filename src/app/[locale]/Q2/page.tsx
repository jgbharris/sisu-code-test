"use client";
import { useTranslations } from "next-intl";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useState } from "react";
import styles from "./page.module.css";

export default function Q2() {
  const t = useTranslations("Q2");
  const router = useRouter();
  const [age, setAge] = useState("");
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const locale = pathname.split("/")[1];

  const prevParams = new URLSearchParams(searchParams.toString());
  prevParams.set("age", age);

  const handleNext = () => {
    router.push(`/${locale}/Q3?${prevParams.toString()}`);
  };

  return (
    <div className={styles.container}>
      <label htmlFor="age-input" className={styles.label}>
        <h1 aria-label={t("enterAge")} className={styles.title}>
          {t("enterAge")}
        </h1>
      </label>
      <input
        id="age-input"
        className={styles.input}
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder={t("placeholderAge")}
        autoFocus
      />
      <button className={styles.button} onClick={handleNext} disabled={!age}>
        Next
      </button>
    </div>
  );
}
