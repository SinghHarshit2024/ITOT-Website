import { PlacementHero } from '../components/placement/PlacementHero';
import { PlacementStats } from '../components/placement/PlacementStats';
import { PlacementTable } from '../components/placement/PlacementTable';
import { PlacementPolicy } from '../components/placement/PlacementPolicy';

const Placement = () => {
  return (
    <div className="min-h-screen pb-20">
      <PlacementHero />
      <PlacementStats />
      <section className="max-w-7xl mx-auto px-6 relative z-20">
        <PlacementTable />
      </section>
      <PlacementPolicy />
    </div>
  );
};

export default Placement;
