"use client";
import {
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

export function ShareButton({ pictureUrl }: { pictureUrl: string }) {
  return (
    <div>
      <TwitterShareButton url={pictureUrl}>
        <TwitterIcon className="rounded-full p-2" />
      </TwitterShareButton>
      <WhatsappShareButton url={pictureUrl}>
        <WhatsappIcon className="rounded-full p-2" />
      </WhatsappShareButton>
    </div>
  );
}
