import school_pic1 from '../assets/school pic 2.jpg';
import trustee_logo from '../assets/school logo.jpg';
import principal from '../assets/principals desk.jpg';
import school_advertisement from '../assets/school ader.jpg';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Award, BookOpen, Users, Globe, ExternalLink, Bell,
  GraduationCap, ArrowRight,
} from 'lucide-react';
import { db } from '../firebase-config';
import PublicLayout from '../components/layout/PublicLayout';
import SectionHeading from '../components/layout/SectionHeading';
import FadeIn from '../components/effects/FadeIn';
import StaggerContainer, { StaggerItem } from '../components/effects/StaggerContainer';
import AnimatedCounter from '../components/effects/AnimatedCounter';
import SpotlightCard from '../components/effects/SpotlightCard';
import Marquee from '../components/effects/Marquee';
import BlobBackground from '../components/effects/BlobBackground';
import Modal from '../components/ui/Modal';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';

const features = [
  { icon: Award, title: '100% Result', desc: 'Ensuring success for every student.' },
  { icon: BookOpen, title: 'E-Learning', desc: 'Comprehensive online learning resources.' },
  { icon: Users, title: 'Experienced Faculty', desc: 'Dedicated support at every step.' },
  { icon: Globe, title: 'Semi-English', desc: 'Specialized for semi-English students.' },
];

const missionPoints = [
  'To provide a safe and supportive environment for all students.',
  'We provide an environment which is orderly, safe, inviting and stimulating.',
  'Each student experiences success, feels cared for and positive about their involvement.',
  'Our parental community feels welcomed and valued as full participants.',
  'The leadership is supportive, encouraging, and fosters positive changes.',
  'The staff is professional, caring, and committed to the success of all students.',
  'The school is a place where students, staff, and parents feel a sense of belonging.',
];

const HomeComponent = () => {
  const [notices, setNotices] = useState([]);
  const [fullscreenImage, setFullscreenImage] = useState(null);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const snapshot = await db.collection('notices').get();
        setNotices(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      } catch (error) {
        console.error('Error fetching notices:', error);
      }
    };
    fetchNotices();
  }, []);

  return (
    <PublicLayout>
      {/* Marquee Banner */}
      <div className="bg-brand-dark py-3 overflow-hidden">
        <Marquee speed={30}>
          <span className="text-brand-light font-semibold text-sm sm:text-base px-8">
            आचार विचार संस्कार देणारी एकमेव मराठी शाळा गायत्री विद्यालय
          </span>
          <span className="text-white text-opacity-40 px-4">•</span>
          <span className="text-brand-light font-semibold text-sm sm:text-base px-8">
            Excellence in Education for Over 30 Years
          </span>
          <span className="text-white text-opacity-40 px-4">•</span>
        </Marquee>
      </div>

      {/* Hero Section */}
      <section className="relative section-padding overflow-hidden">
        <BlobBackground />
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2">
              <FadeIn>
                <Badge variant="brand" className="mb-4">Welcome to Gayatri Vidyalaya</Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-dark leading-tight mb-6">
                  Nurturing Minds,{' '}
                  <span className="text-gradient">Shaping Futures</span>
                </h1>
                <p className="text-lg text-brand text-opacity-80 mb-8 max-w-2xl leading-relaxed">
                  A prestigious Marathi-medium school dedicated to providing quality education,
                  holistic development, and a nurturing environment for over 30 years.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/Admission">
                    <Button variant="primary" size="lg" icon={ArrowRight} iconPosition="right">
                      Apply for Admission
                    </Button>
                  </Link>
                  <Link to="/AboutUs">
                    <Button variant="secondary" size="lg">Learn More</Button>
                  </Link>
                </div>
              </FadeIn>

              <FadeIn delay={0.2} className="mt-10">
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="relative rounded-3xl overflow-hidden shadow-card"
                >
                  <img src={school_pic1} alt="Gayatri Vidyalaya Campus" className="w-full h-64 sm:h-80 lg:h-96 object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark from-0% to-transparent to-50% opacity-40" />
                </motion.div>
              </FadeIn>
            </div>

            {/* Notice Board */}
            <FadeIn direction="left" delay={0.3}>
              <div className="lg:sticky lg:top-24">
                <SpotlightCard className="h-full">
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 rounded-xl bg-brand bg-opacity-10">
                        <Bell className="w-5 h-5 text-brand" />
                      </div>
                      <h3 className="text-xl font-bold text-brand-dark">Notice Board</h3>
                    </div>
                    <div className="space-y-4 max-h-[500px] overflow-y-auto scrollbar-hide">
                      {notices.length === 0 ? (
                        <p className="text-brand text-opacity-60 text-center py-8">No notices available</p>
                      ) : (
                        notices.map((notice, index) => (
                          <motion.div
                            key={notice.id || index}
                            whileHover={{ x: 4 }}
                            className="p-4 rounded-xl bg-brand-bg border border-brand-light border-opacity-30"
                          >
                            {notice.type === 'Text' && (
                              <p className="text-sm text-brand-dark">
                                <span className="font-semibold">{notice.subject}:</span> {notice.content}
                              </p>
                            )}
                            {notice.type === 'Image' && (
                              <div>
                                <p className="font-semibold text-brand-dark mb-2">{notice.subject}</p>
                                <img
                                  src={notice.content}
                                  className="w-full h-40 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                                  alt={`Notice ${index}`}
                                  onClick={() => setFullscreenImage(notice.content)}
                                />
                              </div>
                            )}
                            {notice.type === 'Link' && (
                              <a
                                href={notice.content}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-brand font-semibold hover:text-brand-dark transition-colors"
                              >
                                {notice.subject}
                                <ExternalLink className="w-4 h-4" />
                              </a>
                            )}
                          </motion.div>
                        ))
                      )}
                    </div>
                  </div>
                </SpotlightCard>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 noise-bg opacity-5" />
        <div className="container-wide relative">
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { end: 30, suffix: '+', label: 'Years of Excellence' },
              { end: 100, suffix: '%', label: 'SSC Results' },
              { end: 10, suffix: '', label: 'Standards Offered' },
              { end: 500, suffix: '+', label: 'Happy Students' },
            ].map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="text-center p-6">
                  <div className="text-4xl sm:text-5xl font-bold text-brand-light mb-2">
                    <AnimatedCounter end={stat.end} suffix={stat.suffix} />
                  </div>
                  <p className="text-white text-opacity-70 text-sm sm:text-base">{stat.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading
            badge="Our Mission"
            title="Building Tomorrow's Leaders"
            subtitle="Providing quality education in a safe, nurturing environment for all students."
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <FadeIn direction="right">
              <SpotlightCard className="p-8 text-center h-full flex flex-col items-center justify-center">
                <img src={trustee_logo} alt="School Trust Logo" className="h-48 w-auto mb-6" />
                <p className="text-xl font-bold text-brand-dark">
                  Our mission is to provide a quality education to all students.
                </p>
              </SpotlightCard>
            </FadeIn>
            <FadeIn direction="left" delay={0.1}>
              <div className="p-8 rounded-2xl bg-gradient-dark text-white h-full">
                <h3 className="text-2xl font-bold mb-6 text-brand-light">Our Commitment</h3>
                <ul className="space-y-3">
                  {missionPoints.map((point, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-start gap-3 text-white text-opacity-90"
                    >
                      <span className="w-2 h-2 rounded-full bg-brand-light mt-2 flex-shrink-0" />
                      {point}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="section-padding bg-brand-bg-dark bg-opacity-50">
        <div className="container-wide">
          <SectionHeading badge="Leadership" title="Principal's Message" />
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-1">
                <SpotlightCard className="p-6 text-center">
                  <img src={principal} alt="Mr. Arun Nile" className="w-full h-64 object-cover rounded-xl mb-4" />
                  <h4 className="text-xl font-bold text-brand-dark">Mr. Arun Nile</h4>
                  <p className="text-brand text-opacity-70">Principal</p>
                </SpotlightCard>
              </div>
              <div className="lg:col-span-2">
                <div className="p-8 rounded-2xl bg-white shadow-card">
                  <p className="text-brand-dark text-opacity-80 leading-relaxed text-justify">
                    Welcome to our school! As the principal, I am committed to providing a safe and nurturing environment for all students.
                    "Flowers leave part of their fragrance in the hand that bestows them." The mind is not a vessel to be filled but a fire to be kindled.
                    I appreciate the staff and students of all faculties who use various modes of expansion to present their ideas.
                    As long as our ideas are expressed and thoughts kindled, we can be sure of learning as everything begins with an idea.
                    Learning is not a process limited to schools and colleges only, nor does it end with the conclusion of one's school career. It is indeed a lifelong process.
                    Our school is well equipped to prepare our children to face the challenges that the future holds.
                    Even as we impart education to match the advancement in technology and globalization, we march our children ahead with ethos of moral values and principles.
                    Aristotle once said that, "Educating the mind without educating the heart is no education at all".
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading badge="Why Choose Us" title="Excellence in Every Aspect" />
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <StaggerItem key={feature.title}>
                <SpotlightCard className="p-6 h-full">
                  <div className="p-3 rounded-xl bg-brand bg-opacity-10 w-fit mb-4">
                    <feature.icon className="w-6 h-6 text-brand" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-dark mb-2">{feature.title}</h3>
                  <p className="text-brand text-opacity-70 text-sm">{feature.desc}</p>
                </SpotlightCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* School Advertisement */}
      <section className="section-padding">
        <div className="container-wide">
          <FadeIn>
            <motion.div whileHover={{ scale: 1.01 }} className="rounded-3xl overflow-hidden shadow-card">
              <img src={school_advertisement} alt="School Advertisement" className="w-full" />
            </motion.div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-wide">
          <FadeIn>
            <div className="relative rounded-3xl overflow-hidden p-8 sm:p-12 lg:p-16 text-center bg-gradient-dark">
              <BlobBackground />
              <div className="relative z-10">
                <GraduationCap className="w-12 h-12 text-brand-light mx-auto mb-6" />
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Begin Your Journey With Us
                </h2>
                <p className="text-white text-opacity-70 mb-8 max-w-xl mx-auto">
                  Join Gayatri Vidyalaya and become part of a legacy of academic excellence and holistic development.
                </p>
                <Link to="/Admission">
                  <Button variant="accent" size="lg" icon={ArrowRight} iconPosition="right">
                    Start Admission Process
                  </Button>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Modal isOpen={!!fullscreenImage} onClose={() => setFullscreenImage(null)}>
        <img src={fullscreenImage} alt="Notice fullscreen" className="w-full rounded-xl" />
      </Modal>
    </PublicLayout>
  );
};

export default HomeComponent;
