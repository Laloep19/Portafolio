import "../../styles/overlay.css";
import LeftArrow from "../../assets/images/chevron_left.svg"

interface details {
  image: ImageMetadata;
  description: string;
  text: string;
}

interface overlayProps {
  title: string;
  content: details[];
  close: () => void;
}

export default function Overlay({ title, content, close }: overlayProps) {
  // console.log(content[0].image)
  return (
    <div class={"overlay"}>
      <div class={"content"}>
        <button class={"close"} onClick={close}>
          <img src={LeftArrow.src} alt="flecha hacia atras"/>
        </button>
        <h3 class="title">{title}</h3>
        {content.map((item) => (
          <div>
            <img src={item.image.src} alt={item.description} width="350rem" />
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
