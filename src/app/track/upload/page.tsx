"use client";

import UploadPages from "@/components/track/upload.tabs";
import { Container } from "@mui/material";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Upload new track",
    description: "miêu tả thôi mà",
};

const UploadPage = () => {
    return (
        <Container>
            <UploadPages />
        </Container>
    );
};

export default UploadPage;
