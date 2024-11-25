import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";
import { LanguageSelector } from "../language-switch";
import { useTranslation } from '../../hooks/useTranslation';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.logoSection}>
          <Link href="/">
            <Image
              src="/images/logo.svg"
              alt="EasyExcel Plus"
              width={136}
              height={40}
              priority
            />
          </Link>
          <p className={styles.copyright}>
            @2024 EasyExcel Plus. {t("footer.copyright")}
          </p>
        </div>

        <div className={styles.footerLinks}>
          <LanguageSelector />

          <Link href="/docs" className={styles.footerLink}>
            {t("footer.documentation")}
          </Link>

          <Link href="/contact" className={styles.footerLink}>
            {t("footer.contact")}
          </Link>

          <a
            href="https://github.com/CodePhiliaX/easyexcel-plus"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerLink}
          >
            Github
          </a>

          <a
            href="https://chat2db.ai"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerLink}
          >
            🔥Chat2DB
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
