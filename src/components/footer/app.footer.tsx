"use client";
import { AppBar, Container } from "@mui/material";
import React, { useContext, useEffect, useRef } from "react";
import "react-h5-audio-player/lib/styles.css";
import AudioPlayer from "react-h5-audio-player";
import { useHasMounted } from "@/utils/customHook";
import { TrackContext, useTrackContext } from "@/lib/track.wrapper";

const AppFooter = () => {
  const hasMounted = useHasMounted();
  const playerRef = useRef(null);
  const { currentTrack, setCurrentTrack } = useTrackContext() as ITrackContext;

  useEffect(() => {
    //@ts-ignore
    if (currentTrack?.isPlaying) {
      //@ts-ignore
      playerRef?.current?.audio?.current.play();
    } else {
      //@ts-ignore
      playerRef?.current?.audio?.current.pause();
    }
  }, [currentTrack]);

  if (!hasMounted) return <></>;

  return (
    <>
      {currentTrack._id && (
        <div style={{ marginTop: 50 }}>
          <AppBar
            position="fixed"
            sx={{ top: "auto", bottom: 0, bgcolor: "#f2f2f2" }}
          >
            <Container
              disableGutters
              sx={{
                display: "flex",
                gap: 10,
                ".rhap_main": {
                  gap: "30px",
                },
              }}
            >
              <AudioPlayer
                ref={playerRef}
                layout="horizontal-reverse"
                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/tracks/${currentTrack.trackUrl}`}
                volume={0.5}
                style={{ boxShadow: "unset", background: "#f2f2f2" }}
                onPlay={() => {
                  setCurrentTrack({
                    ...currentTrack,
                    isPlaying: true,
                  });
                }}
                onPause={() => {
                  setCurrentTrack({
                    ...currentTrack,
                    isPlaying: false,
                  });
                }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                  justifyContent: "center",
                  width: "220px",
                }}
              >
                <div
                  style={{
                    color: "#ccc",
                    width: "100%",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {currentTrack.description}
                </div>
                <div
                  style={{
                    color: "black",
                    width: "100%",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {currentTrack.title}
                </div>
              </div>
            </Container>
          </AppBar>
        </div>
      )}
    </>
  );
};

export default AppFooter;
