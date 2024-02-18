import { Image, ImageProps } from "@chakra-ui/react";
import image1 from "../assets/meh.webp";
import image2 from "../assets/thumbs-up.webp";
import image3 from "../assets/bulls-eye.webp";
interface Props {
  rating: number;
}
const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: image1, alt: "image1", boxSize: "25px" },
    4: { src: image2, alt: "image2", boxSize: "25px" },
    5: { src: image3, alt: "image3", boxSize: "25px" },
  };
  return <Image {...emojiMap[rating]} marginTop={1} />;
};

export default Emoji;
