import { useEffect, useState } from "react"
export function useDebounce(value: string, delay: number = 500) {
    const [debounceValue, setDebounceValue] = useState('');

    useEffect(() => {
        const id = setTimeout(() => {
            setDebounceValue(value)
            return () => clearTimeout(id)
        }, delay);
    }, [value, delay])
    
    return debounceValue
}