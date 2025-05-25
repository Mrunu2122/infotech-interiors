import HeaderDesktop from '@/components/HeaderDesktop';
import HeaderMobile from '@/components/HeaderMobile';
import HeroSection from '@/components/HeroSection';
import OurPurpose from '@/components/OurPurpose';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import Industries from '@/components/Industries';
import FAQ from '@/components/FAQ';
import ContactForm from '@/components/ContactForm';
import Stats from '@/components/Stats';
import Brands from '@/components/Brands';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';


export default function Home() {
  return (
    <>
    <main className="min-h-screen bg-gray-50">
      <HeaderDesktop />
      <HeaderMobile />
      <HeroSection />
      <OurPurpose />
      <WhyChooseUs />
      <Testimonials />
      <Industries />
      <ContactForm />
      <FAQ />
      <Stats />
      <Brands />
      <Footer />
      </main>

      <WhatsAppButton />
    </>
  );
}
