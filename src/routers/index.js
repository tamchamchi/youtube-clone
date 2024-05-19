import { createBrowserRouter } from "react-router-dom";
import { ChannelDetail, Feed, SearchFeed, VideoDetail } from "../components";

const router = createBrowserRouter([
     {
          path: '/',
          element: <Feed />,
     },
     {
          path: '/video',
          element: <VideoDetail />,
     },
     {
          path: '/channel',
          element: <ChannelDetail />
     },
     {
          path: '/search',
          element: <SearchFeed />
     }
])

export default router