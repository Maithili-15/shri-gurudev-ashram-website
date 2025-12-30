import SectionHeading from '../components/SectionHeading';

const Gurudev = () => {
  return (
    <>
      <section className="py-16 px-4 bg-amber-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">Gurudev</h1>
          <p className="text-xl text-gray-700">A beacon of wisdom, love, and spiritual guidance</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeading title="Biography" center={true} />
          <div className="prose prose-lg max-w-none">
            <div className="flex justify-center mb-8">
              <div className="w-64 h-64 rounded-full bg-amber-200 flex items-center justify-center text-6xl">
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              Gurudev, a revered spiritual master and humanitarian, has dedicated his life to 
              spreading the message of love, peace, and selfless service. Born with a deep 
              spiritual inclination, he embarked on the path of devotion at a young age, 
              studying under great masters and immersing himself in ancient wisdom traditions.
            </p>
            <p className="text-gray-700 mb-4">
              With profound understanding of spiritual texts and practical wisdom, Gurudev 
              established this ashram to serve as a bridge between ancient wisdom and modern 
              life. His teachings emphasize the importance of inner transformation, selfless 
              service, and living a life of purpose and meaning.
            </p>
            <p className="text-gray-700 mb-4">
              Through his compassionate guidance, thousands of devotees have found peace, 
              purpose, and spiritual fulfillment. Gurudev's vision extends beyond individual 
              transformation to creating a positive impact on society through various charitable 
              and educational initiatives.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-amber-50">
        <div className="max-w-4xl mx-auto">
          <SectionHeading title="Key Teachings" center={true} />
          <div className="space-y-6">
            {[
              {
                title: "The Path of Devotion",
                content: "True devotion is not just ritualistic worship, but a way of life that transforms every action into an offering to the divine. When we serve others with love, we serve the divine itself."
              },
              {
                title: "Selfless Service",
                content: "The highest form of worship is selfless service. When we help others without expecting anything in return, we purify our hearts and experience true joy."
              },
              {
                title: "Inner Peace",
                content: "Peace is not the absence of problems, but the presence of inner strength and faith. Through meditation and prayer, we can find peace even in the midst of challenges."
              },
              {
                title: "Love and Compassion",
                content: "Love is the essence of all spiritual practice. When we see the divine in everyone and everything, we naturally develop compassion and treat all beings with respect and care."
              },
              {
                title: "Living with Purpose",
                content: "Every moment of our life is an opportunity to grow spiritually and serve others. Living with awareness and purpose transforms ordinary life into a sacred journey."
              }
            ].map((teaching, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-amber-900 mb-3">{teaching.title}</h3>
                <p className="text-gray-700">{teaching.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeading title="Milestones" center={true} />
          <div className="space-y-6">
            {[
              { year: "2010", event: "Foundation of Gurudev Ashram" },
              { year: "2012", event: "Launch of Annadan Seva Program" },
              { year: "2015", event: "Establishment of Educational Wing" },
              { year: "2017", event: "Inauguration of Medical Camp Services" },
              { year: "2020", event: "Expansion of Social Welfare Programs" },
              { year: "2024", event: "Reaching 10,000+ families through various initiatives" }
            ].map((milestone, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-20 text-center">
                  <div className="bg-amber-600 text-white rounded-lg py-2 px-4 font-bold">
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-1 bg-amber-50 p-4 rounded-lg">
                  <p className="text-gray-700 font-medium">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gurudev;

