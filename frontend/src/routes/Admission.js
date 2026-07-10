import { Link } from 'react-router-dom';
import { ClipboardList, CheckCircle, ArrowRight, FileText } from 'lucide-react';
import PublicLayout from '../components/layout/PublicLayout';
import SectionHeading from '../components/layout/SectionHeading';
import FadeIn from '../components/effects/FadeIn';
import StaggerContainer, { StaggerItem } from '../components/effects/StaggerContainer';
import SpotlightCard from '../components/effects/SpotlightCard';
import Button from '../components/ui/Button';

const steps = [
  'Fill out the online admission form on our website.',
  'Submit the required documents, including birth certificate, previous academic records, and any other relevant documents.',
  'Attend an entrance examination and/or interview, if applicable.',
  'Upon acceptance, complete the admission formalities and pay the necessary fees.',
];

const eligibility = [
  'For primary school (1st to 7th standard): Age-appropriate for the respective standard.',
  'For secondary school (8th to 10th standard): Based on previous academic performance and entrance examination results (if applicable).',
];

const AdmissionComponent = () => (
  <PublicLayout>
    <section className="section-padding">
      <div className="container-wide max-w-5xl">
        <SectionHeading
          badge="Admissions"
          title="Join Gayatri Vidyalaya"
          subtitle="Thank you for considering Gayatri Vidyalaya for your child's education. Our admission process is designed to be simple and transparent."
        />

        {/* Procedure Timeline */}
        <FadeIn className="mb-16">
          <SpotlightCard className="p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-brand bg-opacity-10">
                <ClipboardList className="w-6 h-6 text-brand" />
              </div>
              <h2 className="text-2xl font-bold text-brand-dark">Admission Procedure</h2>
            </div>
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand text-white flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <div className="pt-2">
                    <p className="text-brand-dark text-opacity-80 leading-relaxed">{step}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden sm:block absolute left-5 w-0.5 h-6 bg-brand-light" />
                  )}
                </div>
              ))}
            </div>
          </SpotlightCard>
        </FadeIn>

        {/* Eligibility */}
        <FadeIn delay={0.1} className="mb-16">
          <SpotlightCard className="p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-brand bg-opacity-10">
                <FileText className="w-6 h-6 text-brand" />
              </div>
              <h2 className="text-2xl font-bold text-brand-dark">Eligibility Criteria</h2>
            </div>
            <p className="text-brand-dark text-opacity-70 mb-6">
              Admission to Gayatri Vidyalaya is open to students who meet the following eligibility criteria:
            </p>
            <StaggerContainer className="space-y-4">
              {eligibility.map((item, index) => (
                <StaggerItem key={index}>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-brand-bg">
                    <CheckCircle className="w-5 h-5 text-brand mt-0.5 flex-shrink-0" />
                    <p className="text-brand-dark text-opacity-80">{item}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </SpotlightCard>
        </FadeIn>

        {/* CTA */}
        <FadeIn delay={0.2}>
          <div className="text-center p-8 sm:p-12 rounded-3xl bg-gradient-dark">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to Enroll?
            </h3>
            <p className="text-white text-opacity-70 mb-8 max-w-lg mx-auto">
              Take the first step towards a bright future for your child at Gayatri Vidyalaya.
            </p>
            <Link to="/">
              <Button variant="accent" size="lg" icon={ArrowRight} iconPosition="right">
                Contact Us for Admission
              </Button>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  </PublicLayout>
);

export default AdmissionComponent;
