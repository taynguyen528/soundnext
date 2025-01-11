"use client";
import WaveSurfer from "wavesurfer.js";
import React, { useEffect, useRef } from "react";

const WaveTrack = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        console.log("containerRef", containerRef.current);
        if (containerRef.current) {
            WaveSurfer.create({
                container: containerRef.current,
                waveColor: "rgb(200, 0, 200)",
                progressColor: "rgb(100, 0, 100)",
                url: "/audio/CHILL.mp3",
            });
        }
    }, []);
    return <div ref={containerRef}>WaveTrack</div>;
};

export default WaveTrack;
