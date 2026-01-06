"use client"
import { useEffect, useState, useRef } from 'react'

const COOLDOWN_PERIOD = 3000; // 3 seconds cooldown between requests
const STORAGE_KEY = 'naas_last_request';
const STORAGE_DATA_KEY = 'naas_cached_data';

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

        // Check if we have a recent cached response
        const checkCache = () => {
            try {
                const lastRequestTime = localStorage.getItem(STORAGE_KEY);
                const cachedData = localStorage.getItem(STORAGE_DATA_KEY);

                if (lastRequestTime && cachedData) {
                    const timeSinceLastRequest = Date.now() - parseInt(lastRequestTime, 10);

                    // If request was made within cooldown period, use cached data
                    if (timeSinceLastRequest < COOLDOWN_PERIOD) {
                        const parsedData = JSON.parse(cachedData);
                        setData(parsedData);
                        setIsLoading(false);
                        isFetchingRef.current = false;
                        return true; // Cache hit, skip fetch
                    }
                }
            } catch (error) {
                // If localStorage fails, continue with fetch
                console.error("Cache check failed:", error);
            }
            return false; // Cache miss, proceed with fetch
        };

        // Check cache first
        if (checkCache()) {
            return;
        }

        isFetchingRef.current = true;
        setIsLoading(true);

        // 3 second delay before fetching
        timeoutRef.current = setTimeout(async () => {
            try {
                const res = await fetch("/api/no");
                const data = await res.json();

                // Store in cache with timestamp
                try {
                    localStorage.setItem(STORAGE_KEY, Date.now().toString());
                    localStorage.setItem(STORAGE_DATA_KEY, JSON.stringify(data));
                } catch (error) {
                    // localStorage might be disabled, continue anyway
                    console.error("Failed to cache:", error);
                }

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