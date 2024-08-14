import { getImage } from "~/server/queries";

import FullPageImageView from "~/components/full-image-page";

export default async function PhotoPage({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = parseInt(photoId);
  if (isNaN(idAsNumber)) throw new Error("Invalid photoid");
  const image = await getImage(idAsNumber);
  return (
    
      <FullPageImageView id={idAsNumber} />
    
  );
}
