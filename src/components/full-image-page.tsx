import { getImage } from "~/server/queries";

export default async function FullImageView(props: {id:number}) {
  const image = await getImage(props.id);
  return (
      <img src={image.url} alt={image.name} className="h-64 w-64" />
  
  );
}


