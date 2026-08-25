import styles from './page.module.css';
import HeroSection from '@/components/home/HeroSection';
import ClientLogos from '@/components/home/ClientLogos';
import ServicesGrid from '@/components/home/ServicesGrid';
import FeaturedWork from '@/components/home/FeaturedWork';
import MediaCollage from '@/components/home/MediaCollage';
import Philosophy from '@/components/home/Philosophy';
import StoryTeaser from '@/components/home/StoryTeaser';
import Numbers from '@/components/home/Numbers';
import Process from '@/components/home/Process';
import Testimonials from '@/components/home/Testimonials';

export default function Home() {
  return (
    <div className={styles.page}>
      <HeroSection />
      <ClientLogos />
      <ServicesGrid />
      <FeaturedWork />
      <MediaCollage />
      <Philosophy />
      <StoryTeaser />
      <Numbers />
      <Process />
      <Testimonials />
    </div>
  );
}
