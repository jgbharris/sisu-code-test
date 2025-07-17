import Link from "next/link";
import ReactCountryFlag from "react-country-flag";
import styles from "./languageSelectButton.module.css";

interface LanguageSelectButtonProps {
  locale: string;
  buttonText: string;
  flagCountryCode: string;
}

const LanguageSelectButton = ({
  locale,
  buttonText,
  flagCountryCode,
}: LanguageSelectButtonProps) => {
  return (
    <div className={styles.container}>
      <Link href={`${locale}/Q1`}>
        <button className={styles.button}>
          <ReactCountryFlag
            countryCode={`${flagCountryCode}`}
            svg
            style={{
              fontSize: "8em",
              lineHeight: "10em",
            }}
          />
          {buttonText}
        </button>
      </Link>
    </div>
  );
};

export default LanguageSelectButton;
