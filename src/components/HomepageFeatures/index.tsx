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
    title: 'Easy to Use',
    Svg: require('@site/static/img/img1.svg').default,
    description: (
      <>
        Mockba bot is built from the ground up to be user-friendly and efficient, 
        allowing you to automate your trades and enhance your trading strategy with ease.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/img2.svg').default,
    description: (
      <>
        Mockba lets you focus on your trading, and we'll handle the rest. 
        Simply set up your strategies and let Mockba do the heavy lifting..
      </>
    ),
  },
  {
    title: 'Powered by Sklearn',
    Svg: require('@site/static/img/img3.svg').default,
    description: (
      <>
        Mockba empowers you to analyze the markets, backtest your strategies, 
        and execute trades seamlessly—all in one powerful platform, using machine learning.
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
