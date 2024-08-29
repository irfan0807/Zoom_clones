'use client'
import {
  StreamCall,
  StreamVideo,
  StreamVideoClient,
  // User,
} from "@stream-io/video-react-sdk";
import { useState ,useEffect} from "react";
import Loader from "@/components/Loader";
import { useUser } from "@clerk/nextjs";
import tokenProvider from '@/actions/stream.actions'

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
//   const userId = 'user-id';
//   const token = 'authentication-token';
//   const user: User = { id: userId };

//   const client = new StreamVideoClient({ apiKey, user, token });
//   const call = client.call('default', 'my-first-call');
//   call.join({ create: true });

const StreamVideoProvider = ({ children }: { children: ReactNode }) => {
    const [videoClient, setVideoClient] = useState<StreamVideoClient | null>(null);
    const { user, isLoaded } = useUser();  // Destructure correctly
  
    useEffect(() => {
      if (!isLoaded || !user) return;
      if (!apiKey) throw new Error("Stream API key is missing");
  
      const client = new StreamVideoClient({
        apiKey,
        user: {
          id: user.id,
          name: user.username || user.id,
          image: user.imageUrl,
        },
        tokenProvider,
      });
  
      setVideoClient(client);
    }, [user, isLoaded]);
  
    if (!videoClient) return <Loader />;
  
    return (
      <StreamVideo client={videoClient}>
        {children}
      </StreamVideo>
    );
  };
  
 

export default StreamVideoProvider;
