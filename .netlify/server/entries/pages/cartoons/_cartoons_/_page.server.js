import { f as findCartoon, c as cartoons } from "../../../../chunks/utils.js";
function load({ params }) {
  const { image } = findCartoon(params.cartoons);
  const findCartoonIndex = (img) => {
    return img.Filename === image?.Filename;
  };
  let index = cartoons.findIndex(findCartoonIndex);
  if (!image) {
    throw new Error(`Image not found: ${params.cartoons}`);
  }
  return { image, index };
}
export {
  load
};
