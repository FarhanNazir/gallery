"use client";

import { Button } from "./ui/button";

type DownloadButtonProps = {
  name: string;
  url: string;
};

export function DownloadButton({ name, url }: DownloadButtonProps) {
  const DownloadImg = async () => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to download image");
    }
    const blob = await response.blob();
    const downloadUrl = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = downloadUrl;
    a.download = name;
    a.click();
  };

  return (
    <div className="p-2">
      <Button onClick={DownloadImg}>Download</Button>
    </div>
  );
}
