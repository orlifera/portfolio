import { NextResponse } from "next/server";

export async function GET(req: Request) {
    void req; // we don’t use the request, silences lint

    const fallbackReason = "Your question was so wrong even my API refused to answer it. So no.";
    let reason = fallbackReason;

    try {
        const res = await fetch("https://naas.isalman.dev/no");

        // Only proceed if upstream responded OK
        if (res.ok) {
            const data = await res.json();

            // Verify the payload shape
            if (data && typeof data.reason === "string") {
                reason = data.reason;
            }
        }
    } catch {
        // silent fail, fallback will be used
    }

    return NextResponse.json({ reason });
}
