import { useRef, useEffect } from "react";

export const useAutoFocus = () => {
    
    const inputRef = useRef(null);

    useEffect(() => {
      inputRef.current.focus();
    }, []);
  
    return {
        inputRef
    };
};