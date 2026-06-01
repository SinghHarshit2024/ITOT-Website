import StudentStories from '../components/StudentStories';
import GovLinks from '../components/GovLinks';
import { Hero } from '../components/home/Hero';
import { Dignitaries } from '../components/home/Dignitaries';
import { Stats } from '../components/home/Stats';
import { Leadership } from '../components/home/Leadership';
import { Features } from '../components/home/Features';
import { BentoLife } from '../components/home/BentoLife';
import { HomeCourses } from '../components/home/HomeCourses';
import { CampusGallery } from '../components/home/CampusGallery';
import { FAQ } from '../components/home/FAQ';

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Dignitaries />
      <Stats />
      <GovLinks />
      <Leadership />
      <Features />
      <BentoLife />
      <HomeCourses />
      <StudentStories />
      <CampusGallery />
      <FAQ />
    </div>
  );
};

export default Home;
