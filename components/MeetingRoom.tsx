import {
  CallControls,
  CallParticipantsList,
  CallStatsButton,
  PaginatedGridLayout,
  SpeakerLayout,
} from "@stream-io/video-react-sdk";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

type CallLayoutType = "grid" | "speaker-left" | "speaker-right";

const MeetingRoom = () => {
  const [layout, setLayout] = useState("speaker-left");
  const [show, setShow] = useState(false);

  const CallLayout = () => {
    switch (layout) {
      case "grid":
        return <PaginatedGridLayout />;
      case "speaker-left":
        return <SpeakerLayout participantsBarPosition={"right"} />;
      default:
        return <SpeakerLayout participantsBarPosition={"left"} />;
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden pt-4 text-white">
      <div className="relative flex top-[200px] items-center justify-center">
        <div className="flex h-screen max-w-[750px] items-center justify-center fixed ">
          <CallLayout />
        </div>
        <div
          className={cn("h-[calc(100vh-86px)] hidden ml-2", {
            "show-block": show,
          })}
        >
          <CallParticipantsList
            onClose={() => {
              setShow(false);
            }}
          />
        </div>
        <div className="fixed bottom-0 flex w-full items-center justify-center gap-5">
        <CallControls />
        <CallStatsButton />
      </div>
      </div>
     
    </section>
  );
};

export default MeetingRoom;
