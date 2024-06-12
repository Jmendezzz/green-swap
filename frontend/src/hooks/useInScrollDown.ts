import { useEffect, useState } from "react";

function useInScrollDown(){
    const [isInScrollDown, setIsInScrollDown] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
          const scrollTop = window.scrollY;
          setIsInScrollDown(scrollTop > 0);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        }});

    return isInScrollDown;
    
}
export default useInScrollDown;