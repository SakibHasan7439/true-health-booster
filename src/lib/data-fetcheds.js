export async function getSliders() {
    try {
        const res = await fetch(`https://healthbooster.softxmind.com/api/sliders`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            // Important for server functions
            cache: 'no-store',
        });

        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Server  getSliders error:", error);
        return null;
    }
}
