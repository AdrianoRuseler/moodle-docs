import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

import SupportedReleases, {
  styles as ReleaseStyles,
} from "@site/src/components/SupportedReleases";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--dark", styles.codeHero)}>
      <div className="container">
        <div className={styles.codeContent}>
          <Heading as="h1" className="hero__title">
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.codeBlockContainer}>
            <SupportedReleases />
          </div>
          <div className={styles.buttons}>
            <Link
              className="button button--primary button--lg"
              to="/docs/intro"
            >
              Wiki
            </Link>
            <Link className="button button--primary button--lg" to="/adm/intro">
              Adm
            </Link>
            <Link className="button button--primary button--lg" to="/dev/intro">
              Dev
            </Link>
            <Link className="button button--primary button--lg" to="/edu/intro">
              Edu
            </Link>
            <Link className="button button--primary button--lg" to="/qa/intro">
              QA
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Moodle documentation site"
      description="Some Moodle Resources for all users."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
