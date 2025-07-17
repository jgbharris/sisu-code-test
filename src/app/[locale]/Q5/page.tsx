"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
// import { useState } from "react";
import styles from "./page.module.css";

export default function Q5() {
  const router = useRouter();
  const pathname = usePathname();
  //   const [bloodPressure, setBloodPressure] = useState("");
  const searchParams = useSearchParams();

  const locale = pathname.split("/")[1];

  const prevParams = new URLSearchParams(searchParams.toString());
  //   prevParams.set("weight", weight);

  const handleNext = () => {
    router.push(`/${locale}/Results?${prevParams.toString()}`);
  };

  return (
    <div className={styles.container}>
      <div> BLOOD PRESSURE WORK</div>
      <button
        className={styles.button}
        onClick={handleNext}
        // disabled={!bloodPressure}
      >
        Next
      </button>
    </div>
  );
}
