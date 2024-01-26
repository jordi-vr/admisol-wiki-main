import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '100% online',
    Svg: require('@site/static/img/online.svg').default,
    description: (
      <>
        Werk waar en wanneer u dat wil. Vanuit de Admisol private cloud beschikt u in één oogopslag over al uw gegevens
      </>
    ),
  },
  {
    title: '100% Veilig',
    Svg: require('@site/static/img/secure.svg').default,
    description: (
      <>
        Al uw gegevens worden simultaan bewaard in de private cloud in 2 Belgische datacenters, 100km van elkaar verwijderd
      </>
    ),
  },
  {
    title: 'Snelle support',
    Svg: require('@site/static/img/service.svg').default,
    description: (
      <>
        Geniet van een snelle en persoonlijke helpdesk door programmeurs. Tijd is cruciaal voor een goede boekhouding
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
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
