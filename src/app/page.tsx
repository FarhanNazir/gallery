import Link from "next/link";
import { db } from "~/server/db";
const mockURLs = [
  "https://utfs.io/f/74263fb5-a59b-4029-9949-db282b21de66-i2dt9n.jpg",
  "https://utfs.io/f/42d213ee-3fb0-40c2-bc25-2787f10bb343-gx6p9s.png",
  "https://utfs.io/f/51ccd07d-3678-416c-a539-167357c8478c-9rtiz7.jpg",
  "https://utfs.io/f/c2bcda42-5660-4298-8694-1665d71728a0-8ehpaw.jpg",
];

const mockImages = mockURLs.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id} className="w-48">
            {post.name}
          </div>
        ))}
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
