import Link from "next/link";

const mockURLs = [
  "https://utfs.io/f/cfe01283-d543-48bd-8c7b-1756c3e991e6-lcwl2v.webp",
  "https://utfs.io/f/436dc575-2602-4f40-81b3-ee2a90a89154-c1hglt.drawio.png",
  "https://utfs.io/f/30426848-c3fe-4b09-ae2b-62247fa02eae-c1hglt.png",
];

const mockImages = mockURLs.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap">
        {mockImages.map((image) => (
          <div key={image.id} className="w-1/2 p-4">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
