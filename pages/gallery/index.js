import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch(
    "https://api.artic.edu/api/v1/artworks?page=1&limit=100&fields=id,title,image_id,alt_image_ids"
  );
  const data = await res.json();
  return {
    props: { gallery: data.data },
  };
};

const Gallery = ({ gallery }) => {
  return (
    <div className="gallery">
      {gallery.map((art) => {
        const imgPath = `https://www.artic.edu/iiif/2/${art.image_id}/full/300,/0/default.jpg`;
        return (
          art.image_id && (
            <Link href={"/gallery/" + art.id} key={art.id}>
              <a>
                <img
                  className="gallery__img"
                  src={imgPath}
                  alt={art.alt_image_ids}
                />
              </a>
            </Link>
          )
        );
      })}
    </div>
  );
};

export default Gallery;
