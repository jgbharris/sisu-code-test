"use client";

import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import styles from "./page.module.css";

export default function Q1() {
  const t = useTranslations("Q1");
  const router = useRouter();
  const pathname = usePathname();
  const [name, setName] = useState("");

  const locale = pathname.split("/")[1];

  const handleNext = () => {
    router.push(`/${locale}/Q2?name=${encodeURIComponent(name)}`);
  };

  return (
    <div className={styles.container}>
      <label htmlFor="name-input" className={styles.label}>
        <h1 aria-label={t("enterName")} className={styles.title}>
          {t("enterName")}
        </h1>
      </label>
      <input
        id="name-input"
        className={styles.input}
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder={t("placeholderName")}
        autoFocus
      />
      <button className={styles.button} onClick={handleNext} disabled={!name}>
        Next
      </button>
    </div>
  );
}
