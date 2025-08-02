import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

import CodeBlock from "@theme/CodeBlock";

const codeExample = `
# Install your package
npm install your-package

# Run the command
your-package build
`.trim();

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--dark", styles.codeHero)}>
      <div className="container">
        <div className={styles.codeContent}>
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.codeBlockContainer}>
            <CodeBlock language="bash" showLineNumbers={false}>
              {codeExample}
            </CodeBlock>
          </div>
          <div className={styles.codeBlockContainer}>
            <CodeBlock language="bash" showLineNumbers={false}>
              {codeExample}
            </CodeBlock>
          </div>
          <div className={styles.codeBlockContainer}>
            <CodeBlock language="bash" showLineNumbers={false}>
              {codeExample}
            </CodeBlock>
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
