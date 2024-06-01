import EducationSection from '@/features/ui/EducationSection';
import HeroSection from '@/features/ui/HeroSection';
import StepGuideSection from '@/features/ui/StepGuideSection';


function Home() {
  return (
    <div className='flex flex-col '>
      <HeroSection />
      <EducationSection />
      <StepGuideSection />
    </div>
  );
}


export default Home;
