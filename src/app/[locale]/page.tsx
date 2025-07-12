import { useTranslations } from "next-intl";
import styles from "./page.module.css";
import Image from "next/image";
import LanguageSelectButton from "../components/LanguageSelectButton/languageSelectButton";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
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
        <h1 className={styles.title}>{t("homeTitle")}</h1>
        <div className={styles.languageSelectButtons}>
          <LanguageSelectButton
            locale="en"
            buttonText="English"
            flagCountryCode="GB"
          />
          <LanguageSelectButton
            locale="fr"
            buttonText="Francais"
            flagCountryCode="FR"
          />
          <LanguageSelectButton
            locale="es"
            buttonText="Espanol"
            flagCountryCode="ES"
          />
        </div>
      </div>
    </div>
  );
}
