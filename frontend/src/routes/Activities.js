import scienceday from '../assets/Science.jpg';
import clean from '../assets/Clean.jpg';
import independenceday from '../assets/Independence.jpg';
import annualday from '../assets/Annual day.jpg';
import drawing from '../assets/Drawing.jpg';
import Sports from '../assets/Sports.jpg';
import meditation from '../assets/meditation.jpg';
import awareness from '../assets/Awareness.jpg';
import { motion } from 'framer-motion';
import PublicLayout from '../components/layout/PublicLayout';
import SectionHeading from '../components/layout/SectionHeading';
import StaggerContainer, { StaggerItem } from '../components/effects/StaggerContainer';
import SpotlightCard from '../components/effects/SpotlightCard';

const activities = [
  { image: Sports, title: 'Sports Day', desc: 'Gayatri Vidyalaya offers a variety of sports activities for students. This includes cricket, football, basketball, and more.' },
  { image: independenceday, title: 'Independence Day Celebration', desc: 'Gayatri Vidyalaya celebrates Independence Day with great enthusiasm. The school is decorated with flags and the national anthem is sung.' },
  { image: drawing, title: 'Drawing Competition', desc: 'Gayatri Vidyalaya conducts drawing competitions for students. The competitions are held on a variety of themes.' },
  { image: awareness, title: 'Awareness Programme', desc: 'The objective of organizing awareness programmes for school students is to educate and empower them with essential knowledge and skills.' },
  { image: annualday, title: 'Annual Day Celebration', desc: 'Gayatri Vidyalaya celebrates its annual day with great enthusiasm. The annual day includes a variety of cultural programs and competitions.' },
  { image: scienceday, title: 'Science Exhibition', desc: 'Gayatri Vidyalaya conducts a science exhibition every year. The exhibition includes a variety of science projects and experiments.' },
  { image: clean, title: 'Clean India Movement', desc: 'Gayatri Vidyalaya conducts a "Clean India" drive every year. The drive includes cleaning the neighbourhood.' },
  { image: meditation, title: 'Meditation Sessions', desc: 'Meditation sessions provide students with a practical tool for stress reduction, emotional regulation and improved focus.' },
];

const ActivitiesComponent = () => (
  <PublicLayout>
    <section className="section-padding">
      <div className="container-wide">
        <SectionHeading
          badge="Campus Life"
          title="School Activities"
          subtitle="Enriching experiences beyond the classroom that foster holistic development."
        />

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
          {activities.map((activity) => (
            <StaggerItem key={activity.title}>
              <SpotlightCard className="overflow-hidden group">
                <div className="relative overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-56 sm:h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-brand-dark mb-2 group-hover:text-brand transition-colors">
                    {activity.title}
                  </h2>
                  <p className="text-brand-dark text-opacity-70 text-sm leading-relaxed">
                    {activity.desc}
                  </p>
                </div>
              </SpotlightCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  </PublicLayout>
);

export default ActivitiesComponent;
