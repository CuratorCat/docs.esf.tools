import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

type FeatureItem = {
  title: string;
  link: string;
  // Svg: React.ComponentType<React.ComponentProps<"svg">>;
  icon: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Guides",
    link: "/guides",
    // Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    icon: "📖",
    description: (
      <>Learn how to use all the features of ENS Subdomain Factory.</>
    ),
  },
  {
    title: "FAQs",
    link: "/guides/faqs",
    // Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    icon: "🙋‍♂️",
    description: <>Frequently Asked Questions about ENS Subdomain Factory.</>,
  },
  {
    title: "Developers",
    link: "/developers",
    // Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    icon: "🤖",
    description: (
      <>
        Developer documentation for ENS Subdomain Factory.
      </>
    ),
  },
];

function Feature({ title, description, icon, link }: FeatureItem) {
  return (
    <Link to={link} className={clsx("col col--4", styles.featureItemLink)}>
      <div className={styles.featureItem}>
        <div className="text--center">
          <p className={styles.featureIcon}>{icon}</p>
          <h3>{title}</h3>
          <div><span>{description}</span></div>
        </div>
      </div>
    </Link>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
