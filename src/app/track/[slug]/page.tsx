import WaveTrack from "@/components/track/wave.track";
import Container from "@mui/material/Container";
import { sendRequest } from "@/utils/api";
import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

type Props = {
    params: { slug: string };
    searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const temp = params?.slug?.split(".html") ?? [];
    const temp1 = temp[0].split("-") ?? [];
    const id = temp1[temp1.length - 1];

    const res = await sendRequest<IBackendRes<ITrackTop>>({
        url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/tracks/${id}`,
        method: "GET",
        // nextOption: { cache: "no-store" },
    });

    return {
        title: res.data?.title,
        description: res.data?.description,
        openGraph: {
            title: "Tây Nguyên",
            description: "Description",
            type: "website",
            images: [
                `https://raw.githubusercontent.com/hoidanit/images-hosting/master/eric.png`,
            ],
        },
    };
}

export async function generateStaticParams() {
    return [
        { slug: "mien-man-663381cb5e391d931047f5f8.html" },
        { slug: "truy-lung-bao-vat-663381cb5e391d931047f5f9.html" },
        { slug: "khi-con-mo-dan-phai-663381cb5e391d931047f5fc.html" },
        { slug: "song-cho-het-doi-thanh-xuan-663381cb5e391d931047f601.html" },
        { slug: "nu-hon-bisou-663381cb5e391d931047f5fa.html" },
        { slug: "rolling-down-663381cb5e391d931047f5fb.html" },
        { slug: "tinh-co-yeu-em-663381cb5e391d931047f600.html" },
        { slug: "xi-mang-pho-663381cb5e391d931047f5ff.html" },
        { slug: "sau-con-mua-663381cb5e391d931047f5fe.html" },
        { slug: "le-luu-ly-663381cb5e391d931047f5fd.html" },
    ];
}

const DetailTrackPage = async (props: any) => {
    const { params } = props;

    const temp = params?.slug?.split(".html") ?? [];
    const temp1 = temp[0].split("-") ?? [];
    const id = temp1[temp1.length - 1];

    const res = await sendRequest<IBackendRes<ITrackTop>>({
        url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/tracks/${id}`,
        method: "GET",
        // nextOption: { cache: "no-store" },
        nextOption: {
            next: { tags: ["track-by-id"] },
        },
    });

    const res1 = await sendRequest<IBackendRes<IModelPaginate<ITrackComment>>>({
        url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/tracks/comments`,
        method: "POST",
        queryParams: {
            current: 1,
            pageSize: 100,
            trackId: id,
            sort: "-createdAt",
        },
    });

    // await new Promise((resolve) => setTimeout(resolve, 5000));

    if (!res?.data) {
        notFound();
    }

    return (
        <Container>
            <div>
                <WaveTrack
                    track={res?.data ?? null}
                    comments={res1?.data?.result ?? []}
                />
            </div>
        </Container>
    );
};

export default DetailTrackPage;
