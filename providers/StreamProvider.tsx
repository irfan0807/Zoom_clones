import {
  StreamCall,
  StreamVideo,
  StreamVideoClient,
  // User,
} from "@stream-io/video-react-sdk";
import { useState } from "react";
import Loader from "@/components/Loader";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
//   const userId = 'user-id';
//   const token = 'authentication-token';
//   const user: User = { id: userId };

//   const client = new StreamVideoClient({ apiKey, user, token });
//   const call = client.call('default', 'my-first-call');
//   call.join({ create: true });

const StreamVideoProvider = ({ children }: { children: ReactNode }) => {
  const [videoClient, setVideoClient] = useState<StreamVideoClient>();
  const [user, isLoaded] = useUser();
  useEffect(() => {
    if (!isLoaded || !user) return;
    if (!apiKey) throw new Error("SteamApi key is missing");

    const client = new StreamVideoClient({
      apiKey,
      user: {
        id: user?.id,
        name: user?.username || user?.id,
        image: user?.imageUrl,
      },
      tokenProvider,
    });

    setVideoClient(client);
  }, [user, isLoaded]);

  if(!videoClient) return <Loader />;


  return (
    <StreamVideo client={videoClient}>
      {/* <StreamCall call={call}>
    
        </StreamCall> */}

        {children}
    </StreamVideo>
  );
};

export default StreamVideoProvider;
