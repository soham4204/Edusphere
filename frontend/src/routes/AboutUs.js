import school from '../assets/School .jpg';
import { Shield, Trophy, Heart, BookOpen, Users, Monitor } from 'lucide-react';
import PublicLayout from '../components/layout/PublicLayout';
import SectionHeading from '../components/layout/SectionHeading';
import FadeIn from '../components/effects/FadeIn';
import StaggerContainer, { StaggerItem } from '../components/effects/StaggerContainer';
import SpotlightCard from '../components/effects/SpotlightCard';
import AnimatedCounter from '../components/effects/AnimatedCounter';

const facilities = [
  { icon: Monitor, title: 'Computer Labs', desc: 'Clean and student-friendly computer labs' },
  { icon: BookOpen, title: 'Library', desc: 'Comprehensive library and laboratory facilities' },
  { icon: Users, title: 'Semi-English Division', desc: 'Special division for semi-English students' },
  { icon: Shield, title: '24/7 Security', desc: 'Round-the-clock security surveillance' },
];

const achievements = [
  'Consistently achieved 100% SSC results',
  'Homi Bhabha exams, Scholarship exams and Drawing exams',
  'Adarsh Mahapour Puraskar certified institution',
];

const extracurricular = [
  'Annual Dance Competition',
  'Annual Sports Competition',
  'Yoga classes for mental and physical health',
  'E-Learning resources available',
];

const AboutUsComponent = () => (
  <PublicLayout>
    {/* Hero */}
    <section className="relative section-padding overflow-hidden">
      <div className="container-wide">
        <FadeIn>
          <div className="relative rounded-3xl overflow-hidden shadow-card mb-12">
            <img src={school} alt="Gayatri Vidyalaya" className="w-full h-64 sm:h-80 lg:h-[28rem] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12">
              <h1 className="text-3xl sm:text-5xl font-bold text-white mb-2">About Us</h1>
              <p className="text-brand-light text-lg">30+ Years of Educational Excellence</p>
            </div>
          </div>
        </FadeIn>

        <SectionHeading
          badge="Our Vision"
          title="Nurturing Young Minds"
          subtitle="To provide a safe, nurturing, and stimulating environment where children are actively involved in the learning process."
          align="left"
        />

        <FadeIn delay={0.1}>
          <p className="text-lg text-brand-dark text-opacity-80 leading-relaxed max-w-4xl mb-16">
            We strive to provide a balanced, integrated, and challenging curriculum that will enable
            students to become independent, self-sufficient, and responsible citizens of the world.
          </p>
        </FadeIn>
      </div>
    </section>

    {/* Stats Bar */}
    <section className="py-12 bg-brand-dark">
      <div className="container-wide">
        <div className="grid grid-cols-3 gap-8 text-center">
          {[
            { end: 30, suffix: '+', label: 'Years' },
            { end: 100, suffix: '%', label: 'SSC Results' },
            { end: 3, suffix: '', label: 'Divisions' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl sm:text-4xl font-bold text-brand-light">
                <AnimatedCounter end={stat.end} suffix={stat.suffix} />
              </div>
              <p className="text-white text-opacity-60 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Facilities Bento */}
    <section className="section-padding">
      <div className="container-wide">
        <SectionHeading badge="Facilities" title="Student-Friendly Infrastructure" />
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((item) => (
            <StaggerItem key={item.title}>
              <SpotlightCard className="p-6 h-full">
                <div className="p-3 rounded-xl bg-brand bg-opacity-10 w-fit mb-4">
                  <item.icon className="w-6 h-6 text-brand" />
                </div>
                <h3 className="font-bold text-brand-dark mb-2">{item.title}</h3>
                <p className="text-sm text-brand text-opacity-70">{item.desc}</p>
              </SpotlightCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>

    {/* Achievements & Activities Split */}
    <section className="section-padding bg-brand-bg-dark bg-opacity-50">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <FadeIn direction="right">
            <div className="p-8 rounded-2xl bg-white shadow-card h-full">
              <div className="flex items-center gap-3 mb-6">
                <Trophy className="w-8 h-8 text-brand" />
                <h2 className="text-2xl font-bold text-brand-dark">Academic Achievements</h2>
              </div>
              <ul className="space-y-4">
                {achievements.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-brand mt-2 flex-shrink-0" />
                    <span className="text-brand-dark text-opacity-80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.1}>
            <div className="p-8 rounded-2xl bg-gradient-dark text-white h-full">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-8 h-8 text-brand-light" />
                <h2 className="text-2xl font-bold">Extracurricular Activities</h2>
              </div>
              <ul className="space-y-4">
                {extracurricular.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-brand-light mt-2 flex-shrink-0" />
                    <span className="text-white text-opacity-80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>

    {/* About Text */}
    <section className="section-padding">
      <div className="container-wide max-w-4xl">
        <FadeIn>
          <h2 className="text-3xl font-bold text-brand-dark mb-6">Gayatri Vidyalaya</h2>
          <p className="text-lg text-brand-dark text-opacity-80 leading-relaxed text-justify">
            Welcome to Gayatri Vidyalaya, where excellence in education meets a tradition of over 30 years.
            Founded with a vision to nurture young minds and instill a passion for learning, we take pride in
            providing a safe and supportive environment for students to thrive. Our state-of-the-art facilities,
            including clean and student-friendly computer labs, specialized divisions for semi-English learners,
            and comprehensive e-learning resources, ensure that every student has the tools they need to succeed.
            With a dedicated team of friendly teaching and non-teaching staff, 24/7 security surveillance, and
            enriching extracurricular activities such as yoga classes and annual dance and sports competitions,
            we foster holistic development and well-being. At Gayatri Vidyalaya, academic excellence is not just
            a goal; it's a tradition. Join us on this journey of discovery and growth.
          </p>
        </FadeIn>
      </div>
    </section>
  </PublicLayout>
);

export default AboutUsComponent;
