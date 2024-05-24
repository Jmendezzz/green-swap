import EducationSection from '@/features/ui/EducationSection';
import HeroSection from '@/features/ui/HeroSection';


function Home() {
  return (
    <div className='flex flex-col '>
      <HeroSection />
      <EducationSection />
    </div>
  );
}


export default Home;
