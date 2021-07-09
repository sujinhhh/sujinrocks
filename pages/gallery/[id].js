import { useRouter } from "next/router";
import Link from "next/link";

export const getStaticPaths = async () => {
  const res = await fetch(
    "https://api.artic.edu/api/v1/artworks?page=1&limit=100&fields=id,title,image_idhttps://api.artic.edu/api/v1/artworks?page=1&limit=100&fields=id,title,image_id,alt_image_ids"
  );
  const data = await res.json();
  const picData = data.data;
  const paths = picData.map((art) => {
    return {
      params: { id: art.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(
    `https://api.artic.edu/api/v1/artworks/${id}?page=1&limit=100&fields=id,title,image_id,place_of_origin,artist_display`
  );
  const data = await res.json();

  return {
    props: { gallery: data.data },
  };
};

const Details = ({ gallery }) => {
  const imgPath = `https://www.artic.edu/iiif/2/${gallery.image_id}/full/800,/0/default.jpg`;
  const router = useRouter();

  return (
    <div className="gallery-detail">
      <img src={imgPath} alt={gallery.title} />
      <div className="gallery-detail__description">
        <h1>Title: {gallery.title}</h1>

        <p>Origin : {gallery.place_of_origin}</p>
        <p>Artist : {gallery.artist_display}</p>
      </div>
      <Link href="/gallery/">
        <button className="btn-r"> Back to Gallery </button>
      </Link>
    </div>
  );
};

export default Details;
