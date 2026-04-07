import Link from "next/link";
import { siteConfig } from "@/content/site";
import styles from "@/components/layout/Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.ctaPanel}>
          <p className={styles.eyebrow}>GET STARTED</p>
          <h2>Liquidez sin deuda, sin límites y sin complicaciones.</h2>
          <p className={styles.subtitle}>
            BBC Factoring te ayuda a convertir facturas en liquidez inmediata para operar, crecer y
            escalar sin fricciones.
          </p>
          <div className={styles.actions}>
            <Link href={siteConfig.ctaHref} className={styles.primaryAction}>
              Get in touch
            </Link>
            <Link href="/about" className={styles.secondaryAction}>
              About us
            </Link>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <div className={styles.linkGroup}>
            <p className={styles.groupTitle}>Pages</p>
            <div className={styles.linkRow}>
              {siteConfig.nav.map((item) => (
                <Link key={item.label} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className={styles.linkGroup}>
            <p className={styles.groupTitle}>Legal</p>
            <div className={styles.linkRow}>
              {siteConfig.footer.legalLinks.map((item) => (
                <Link key={item.label} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className={styles.meta}>
            <p className={styles.copy}>© 2026 BBC Factoring. Todos los derechos reservados.</p>
            <p className={styles.address}>{siteConfig.footer.address}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
