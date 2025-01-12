"use client";
import WaveTrack from "@/components/track/wave.track";
import { Container } from "@mui/material";
import { useSearchParams } from "next/navigation";

const DetailTrackPage = (props: any) => {
  const { params } = props;
  const searchParams = useSearchParams();
  const search = searchParams.get("audio");
  console.log("search", search);
  return (
    <div>
      <Container>
        <WaveTrack />
      </Container>
    </div>
  );
};

export default DetailTrackPage;
