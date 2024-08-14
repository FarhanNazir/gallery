import { getImage } from "~/server/queries";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = parseInt(photoId);
  if (isNaN(idAsNumber)) throw new Error("Invalid photoid");
  const image = await getImage(idAsNumber);
  return (
    <div>
      <img src={image.url} alt={image.name} className="h-16 w-16" />
    </div>
  );
}
