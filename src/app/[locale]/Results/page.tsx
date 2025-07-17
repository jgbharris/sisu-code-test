"use client";

import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import styles from "./page.module.css";
import { calculateBMI } from "@/utils/bmiCalculator";
import Speedometer from "@/app/components/BMISpeedomater/Speedometer";

export default function Results() {
  const t = useTranslations("Results");
  const searchParams = useSearchParams();
  const prevParams = new URLSearchParams(searchParams.toString());

  console.log("searchParams", searchParams);
  console.log("prevParams", prevParams);

  const weight = prevParams.get("weight");
  const height = prevParams.get("height");
  const name = prevParams.get("name");

  const BMI =
    weight && height ? calculateBMI(Number(weight), Number(height)) : null;

  return (
    <div className={styles.container}>
      {name && (
        <h1 className={styles.title}>
          {t("hello")}, {name}!
        </h1>
      )}
      {BMI && (
        <p aria-live="polite" className={styles.result}>
          {t("bmiResult", { BMI })}
        </p>
      )}

      <Speedometer bmi={BMI || 0} />
    </div>
  );
}
