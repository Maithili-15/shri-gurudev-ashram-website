import HeroSection from '../components/HeroSection';
import SectionHeading from '../components/SectionHeading';
import GalleryGrid from '../components/GalleryGrid';
import { galleryImages } from '../data/dummyData';

const Gallery = () => {
  const categories = ['all', 'satsang', 'seva', 'yoga', 'events'];

  return (
    <>
      <HeroSection
        title="Gallery"
        subtitle="Moments of devotion, service, and celebration"
      />

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="Photo Gallery"
            subtitle="Capturing beautiful moments from our ashram activities and events"
            center={true}
          />
          <GalleryGrid images={galleryImages} categories={categories} />
        </div>
      </section>
    </>
  );
};

export default Gallery;

