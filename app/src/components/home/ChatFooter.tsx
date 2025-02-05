import { openDialog } from "@/store/settings.ts";
import { version } from "@/conf.ts";
import { useDispatch } from "react-redux";

function ChatFooter() {
  const dispatch = useDispatch();

  return (
    <div className={`version`}>
      <svg
        className={`app`}
        onClick={() => {
          // triggerInstallApp();
          dispatch(openDialog());
        }}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path
          d="M9 3h-4a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2z"
          strokeWidth="0"
          fill="currentColor"
        />
        <path
          d="M9 13h-4a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2z"
          strokeWidth="0"
          fill="currentColor"
        />
        <path
          d="M19 13h-4a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2z"
          strokeWidth="0"
          fill="currentColor"
        />
        <path
          d="M17 3a1 1 0 0 1 .993 .883l.007 .117v2h2a1 1 0 0 1 .117 1.993l-.117 .007h-2v2a1 1 0 0 1 -1.993 .117l-.007 -.117v-2h-2a1 1 0 0 1 -.117 -1.993l.117 -.007h2v-2a1 1 0 0 1 1 -1z"
          strokeWidth="0"
          fill="currentColor"
        />
      </svg>
      chatnio v{version}
    </div>
  );
}

export default ChatFooter;
