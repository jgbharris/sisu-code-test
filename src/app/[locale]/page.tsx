import { useTranslations } from "next-intl";
import styles from "./page.module.css";
import Image from "next/image";
import LanguageSelectButton from "../components/LanguageSelectButton/LanguageSelectButton";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <main>
      <div className={styles.page}>
        <div className={styles.imageContainer}>
          <Image
            alt="logo"
            src="/logo.png"
            height={400}
            width={800}
            layout="responsive"
            className={styles.image}
          />
        </div>
        <div className={styles.pageContent}>
          <h1 aria-label={t("homeTitle")} className={styles.title}>
            {t("homeTitle")}
          </h1>
          <div className={styles.languageSelectButtons}>
            <LanguageSelectButton
              locale="en"
              buttonText="English"
              flagCountryCode="GB"
              aria-label="Switch language to English"
            />
            <LanguageSelectButton
              locale="fr"
              buttonText="Francais"
              flagCountryCode="FR"
              aria-label="Switch language to French"
            />
            <LanguageSelectButton
              locale="es"
              buttonText="Espanol"
              flagCountryCode="ES"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
