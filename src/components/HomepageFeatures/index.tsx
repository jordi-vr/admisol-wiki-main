import React from 'react';
import styles from './styles.module.css';
import FeatureCard from '../FeatureCard';

type FeatureItem = {
  title: string;
  description: string;
  icon?: React.ComponentType<React.ComponentProps<'svg'>>;
  linkTo: string;
  isExternal?: boolean;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Het startscherm',
    description: 'Hieronder zien jullie een voorbeeld van een mogelijk startscherm. Laten we dit onderdeel per onderdeel overlopen.',
    icon: require('@site/static/img/online.svg').default,
    linkTo: '/docs/Office/navigeren/startscherm',
  },
  {
    title: 'Navigatie',
    description: 'Onze tool is 100% web-based, wat betekent dat er beperkingen zijn met betrekking tot het gebruik van toetsenbordfuncties.',
    icon: require('@site/static/img/secure.svg').default,
    linkTo: '/docs/Office/navigeren/navigatie',
  },
  {
    title: 'Efficiënt gegevens invoeren',
    description: 'Je hoeft in onze tool niet altijd de volledige datum uit te schrijven in de velden die daartoe geschikt zijn.',
    icon: require('@site/static/img/service.svg').default,
    linkTo: '/docs/Office/navigeren/Efficient-gegevens-invoeren',
  },
  {
    title: 'Raster',
    description: 'In onze tool kom je vaak terecht bij rasters. We nemen hier even het voorbeeld van ons aankoopdagboek.',
    icon: require('@site/static/img/service.svg').default,
    linkTo: '/docs/Office/navigeren/raster',
  },
  {
    title: 'Keuze periode',
    description: 'Vanuit vrijwel ieder scherm waarin je iets kan uitvoeren dat betrekking heeft op de boekhouding, heb je de mogelijkheid om rechtstreeks je periode te selecteren.',
    icon: require('@site/static/img/service.svg').default,
    linkTo: '/docs/Office/navigeren/keuze-periode',
  },
];

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.cardGrid}>
          {FeatureList.map((item, idx) => (
            <div key={idx} className={styles.cardWrapper}>
              <FeatureCard
                title={item.title}
                description={item.description}
                icon={item.icon}
                linkTo={item.linkTo}
                isExternal={item.isExternal}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
