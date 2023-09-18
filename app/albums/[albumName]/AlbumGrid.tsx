"use client";

import { CloudinaryImage } from "../../../components/CloudinaryImage";
import { ImageGrid } from "../../../components/ImageGrid";
import { SearchResult } from "../../gallery/page";

export default function AlbumGrid({ images }: { images: SearchResult[] }) {
  return (
    <ImageGrid
      images={images}
      getImage={(imageData: SearchResult) => {
        return (
          <CloudinaryImage
            key={imageData.public_id}
            imageData={imageData}
            width="400"
            height="300"
            alt="an image of something"
          />
        );
      }}
    />
  );
}