// components/RouteLoader.js
"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const RouteLoader = () => {
    const router = useRouter();
    const pathname = usePathname();

    const hide = () => {
        hideLoader();
    };

    useEffect(() => {
        hide();

        // No router.events in next/navigation, so use a workaround
        // Show loader before navigation by overriding router.push if needed
        // But here we just hide loader on mount or path change
    }, [pathname]);

    return (
        <div id="preloader" style={{ background: "#12121233", visibility: "hidden" }}>
            <Loader />
        </div>
    );
};

export default RouteLoader;

// Utility functions
export const showLoader = () => {
    try {
        document.querySelector("#preloader").style.visibility = "visible";
    } catch (e) {
        // Fail silently
    }
};

export const hideLoader = () => {
    try {
        document.querySelector("#preloader").style.visibility = "hidden";
    } catch (e) {
        // Fail silently
    }
};

// Loader animation component
export const Loader = ({ height, width }) => {
    return (
        <div id="status" style={{ height: height, width: width }}>
            <div className="spinner-chase">
                <div className="chase-dot" />
                <div className="chase-dot" />
                <div className="chase-dot" />
                <div className="chase-dot" />
                <div className="chase-dot" />
                <div className="chase-dot" />
            </div>
        </div>
    );
};
