import HeroSection from '../components/HeroSection';
import SectionHeading from '../components/SectionHeading';

const About = () => {
  return (
    <>
      <HeroSection
        title="About Us"
        subtitle="Our journey of service, devotion, and transformation"
      />

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeading title="Our History" center={true} />
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-4">
              Gurudev Ashram was established with a vision to create a spiritual sanctuary 
              where individuals can find inner peace, practice devotion, and engage in 
              selfless service to humanity. Founded in the year 2010, our ashram has been 
              a beacon of hope and transformation for thousands of devotees and community members.
            </p>
            <p className="text-gray-700 mb-4">
              Over the years, we have expanded our activities to include daily satsangs, 
              spiritual retreats, educational programs, medical camps, and various charitable 
              initiatives. Our commitment to serving the community has touched countless lives 
              and continues to inspire many to walk the path of devotion and service.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-amber-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Our Vision" center={true} />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-amber-900 mb-4">Vision</h3>
              <p className="text-gray-700">
                To create a world where every individual experiences inner peace, lives with 
                compassion, and contributes to the welfare of all beings through selfless service. 
                We envision a society where spiritual wisdom guides daily life and love transcends 
                all boundaries.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-amber-900 mb-4">Mission</h3>
              <p className="text-gray-700">
                To spread spiritual wisdom through satsangs, teachings, and personal guidance. 
                To provide humanitarian services including food, education, healthcare, and 
                shelter to those in need. To create a community of devotees dedicated to 
                selfless service and inner transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeading title="Our Philosophy" center={true} />
          <div className="space-y-6">
            <div className="bg-amber-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-amber-900 mb-3">Spiritual Growth</h3>
              <p className="text-gray-700">
                We believe that true happiness comes from within. Through regular practice of 
                meditation, prayer, and selfless service, individuals can experience inner 
                transformation and lasting peace.
              </p>
            </div>
            <div className="bg-amber-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-amber-900 mb-3">Selfless Service</h3>
              <p className="text-gray-700">
                Service to others without expectation of reward is the highest form of worship. 
                We encourage all devotees to engage in seva (selfless service) as a means of 
                spiritual practice and social contribution.
              </p>
            </div>
            <div className="bg-amber-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-amber-900 mb-3">Compassion & Love</h3>
              <p className="text-gray-700">
                Love and compassion are the foundation of all our activities. We treat every 
                being with respect, dignity, and unconditional love, recognizing the divine 
                presence in all.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-amber-50">
        <div className="max-w-4xl mx-auto">
          <SectionHeading title="Our Values" center={true} />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Devotion', icon: '🕉️', desc: 'Deep love and dedication to the divine' },
              { title: 'Service', icon: '🙏', desc: 'Selfless service to humanity' },
              { title: 'Compassion', icon: '❤️', desc: 'Love and care for all beings' },
              { title: 'Integrity', icon: '✨', desc: 'Honesty and ethical conduct' }
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl mb-3">{value.icon}</div>
                <h3 className="font-bold text-amber-900 mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

