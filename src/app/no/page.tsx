"use client"
import { useEffect, useState, useRef } from 'react'

export default function NoPage() {

    const [data, setData] = useState<{ reason: string } | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const isFetchingRef = useRef(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        // Debouncer: prevent multiple simultaneous requests
        if (isFetchingRef.current) {
            return;
        }

        isFetchingRef.current = true;
        setIsLoading(true);

        // 4 second delay before fetching
        timeoutRef.current = setTimeout(async () => {
            try {
                const res = await fetch("/api/no");
                const data = await res.json();
                setData(data);
            } catch (error) {
                console.error("Failed to fetch:", error);
            } finally {
                setIsLoading(false);
                isFetchingRef.current = false;
            }
        }, 3000);

        // Cleanup function
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
            isFetchingRef.current = false;
        };
    }, []);


    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4">
            {isLoading ? (
                <p className="text-xl md:text-2xl text-muted animate-pulse">
                    thinking about what you just said...
                </p>
            ) : data ? (
                <p className="text-xl md:text-2xl text-foreground text-center max-w-2xl">
                    {data.reason}
                </p>
            ) : null}
        </div>
    )
}