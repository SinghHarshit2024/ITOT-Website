import { AboutHero } from '../components/about/AboutHero';
import { AboutHistory } from '../components/about/AboutHistory';
import { DirectorMessage } from '../components/about/DirectorMessage';
import { QualityPolicy } from '../components/about/QualityPolicy';
import { Infrastructure } from '../components/about/Infrastructure';
import { CoreValues } from '../components/about/CoreValues';

const About = () => {
  return (
    <div className="overflow-x-hidden">
      <AboutHero />
      <AboutHistory />
      <DirectorMessage />
      <QualityPolicy />
      <Infrastructure />
      <CoreValues />
    </div>
  );
};

export default About;
