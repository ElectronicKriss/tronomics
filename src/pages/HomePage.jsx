import { HeroSection, ServiceCardsSection, WhyChooseUsSection, CaseStudiesPreviewSection, CTASection } from '../components/sections/HomeSections';
import { coreServices, whyChooseUs, caseStudies } from '../data/services';

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <ServiceCardsSection services={coreServices} title="Our Core Services" />
      <WhyChooseUsSection items={whyChooseUs} />
      <CaseStudiesPreviewSection caseStudies={caseStudies} />
      <CTASection />
    </div>
  );
}
