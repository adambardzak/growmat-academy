import Hero from '@/components/Hero';
import Vision from '@/components/Vision';
import About from '@/components/About';
import SystemIntro from '@/components/SystemIntro';
import CourseContent from '@/components/CourseContent';
import CashInMastery from '@/components/CashInMastery';
import AdditionalModules from '@/components/AdditionalModules';
import TestimonialsResults from '@/components/TestimonialsResults';
import PricingCTA from '@/components/PricingCTA';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Vision />
      <About />
      <SystemIntro />
      <CourseContent />
      <CashInMastery />
      <AdditionalModules />
      <TestimonialsResults />
      <PricingCTA />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
