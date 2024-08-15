"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

import { UploadButton } from "~/utils/uploadthing";

export function UploadSVG() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
      />
    </svg>
  );
}

export function TopNav() {
  const router = useRouter();

  return (
    <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
      <div>Gallery</div>
      <div className="flex flex-row">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UploadButton
            appearance={{
              button:
                "ut-ready:bg-none ut-uploading:cursor-not-allowed bg-none bg-black er:bg-none",
              container:
                "w-12 flex-row rounded-md border-cyan-300 bg-none mx-2 ",
              allowedContent: "hidden",
            }}
            endpoint="imageUploader"
            onClientUploadComplete={() => {
              router.refresh();
            }}
            content={{
              button({ ready }) {
                if (ready)
                  return (
                    <div>
                      <UploadSVG />
                    </div>
                  );

                return "Getting ready...";
              },
              allowedContent({ ready, fileTypes, isUploading }) {
                if (!ready) return "";
                if (isUploading) return "";
                return ``;
              },
            }}
          />

          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
