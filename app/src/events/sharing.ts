import { EventCommitter } from "./struct.ts";
import { Message } from "@/conversation/types.ts";

export type SharingEvent = {
  refer: string;
  data: Message[];
};

export const sharingEvent = new EventCommitter<SharingEvent>({
  name: "sharing",
  destroyedAfterTrigger: true,
});
