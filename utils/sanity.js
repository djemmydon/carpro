import { createClient } from "next-sanity"
import ImageUrlBuilder  from "@sanity/image-url";


export const client = createClient({
    projectId: '3rxbhviw',
  dataset: 'production',
  useCdn: false, 
})

const builder = ImageUrlBuilder(client)

export const urlFor= (source) =>builder.image(source)

// export function urlForThumbnail(source) {
//     return ImageUrlBuilder(client).image(source).width(300).url();
//   }