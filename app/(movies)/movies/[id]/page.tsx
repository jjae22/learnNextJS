import { Suspense } from "react";
import MovieInfo from "../../../../component/movie-info";
import MovieVideos from "../../../../component/movie-videos";


export default async function MovieDetail({
    params: { id },
}: {
    params: { id: string };
}) {
    return (
        <div>
            <Suspense fallback={<h1>Loading Movies Info</h1>}>
                <MovieInfo id={id} />
            </Suspense>
            <Suspense fallback={<h1>Loading Movies videos</h1>}>
                <MovieVideos id={id} />
            </Suspense>
        </div>
    ); 
}