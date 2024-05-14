import { useEffect, useRef } from "react";


const useClickOutside = (handler: () => void) => {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const listener = (event: MouseEvent) => {
        if (!ref.current || ref.current.contains(event.target as Node)) {
            return;
        }
        handler();
        };
        document.addEventListener('mousedown', listener);
        return () => {
        document.removeEventListener('mousedown', listener);
        };
    }, [ref, handler]);
    return ref;
}

export default useClickOutside;