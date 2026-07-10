import Secondarypic from '../assets/Secondary.jpg';
import Primarypic from '../assets/Primary.jpg';
import Certification from '../assets/Certificates.jpg';
import { BookOpen, GraduationCap, Award } from 'lucide-react';
import PublicLayout from '../components/layout/PublicLayout';
import SectionHeading from '../components/layout/SectionHeading';
import FadeIn from '../components/effects/FadeIn';
import SpotlightCard from '../components/effects/SpotlightCard';

const sections = [
  {
    image: Primarypic,
    icon: BookOpen,
    title: 'Primary School (1st to 7th Standard)',
    description:
      'At Gayatri Vidyalaya, we lay the foundation for lifelong learning during the primary years. Our curriculum is designed to foster curiosity, critical thinking, and creativity in our students. We provide a nurturing environment where students develop strong foundational skills in all subjects, including language, mathematics, science, and social studies.',
    reverse: false,
  },
  {
    image: Secondarypic,
    icon: GraduationCap,
    title: 'Secondary School (8th to 10th Standard)',
    description:
      'As students transition into secondary school at Gayatri Vidyalaya, they embark on a journey of academic excellence and personal growth. Our comprehensive curriculum prepares students for the SSC (State Board) examinations, focusing on both theoretical knowledge and practical application of concepts. We offer a supportive learning environment where students are encouraged to explore their interests, pursue their passions, and excel in their chosen fields.',
    reverse: true,
  },
  {
    image: Certification,
    icon: Award,
    title: 'Certifications',
    description:
      'Gayatri Vidyalaya is proud to be certified by the Adarsh Mahapour Puraskar, recognizing our commitment to excellence in education and holistic development of students. This prestigious certification reflects our dedication to providing quality education and nurturing future leaders who will make a positive impact on society.',
    reverse: false,
  },
];

const AcademicsComponent = () => (
  <PublicLayout>
    <section className="section-padding">
      <div className="container-wide">
        <SectionHeading
          badge="Academics"
          title="Excellence in Education"
          subtitle="A comprehensive curriculum designed to nurture curiosity, critical thinking, and lifelong learning."
        />

        <div className="space-y-16 lg:space-y-24">
          {sections.map((section, index) => (
            <FadeIn key={section.title} delay={index * 0.1}>
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  section.reverse ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={section.reverse ? 'lg:order-2' : ''}>
                  <SpotlightCard className="overflow-hidden">
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-64 sm:h-80 object-cover"
                    />
                  </SpotlightCard>
                </div>
                <div className={section.reverse ? 'lg:order-1' : ''}>
                  <div className="p-3 rounded-xl bg-brand bg-opacity-10 w-fit mb-4">
                    <section.icon className="w-6 h-6 text-brand" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark mb-4">
                    {section.title}
                  </h2>
                  <p className="text-brand-dark text-opacity-80 leading-relaxed text-justify">
                    {section.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  </PublicLayout>
);

export default AcademicsComponent;
