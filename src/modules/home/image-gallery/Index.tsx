import { useInView, animated } from "@react-spring/web";
import "./style.css";

interface Props {
    img: string;
}


function Card({ img }: Props) {
    const [ref, springs] = useInView(
        () => ({
            from: {
                opacity: 0,
                y: 100,
            },
            to: {
                opacity: 1,
                y: 0,
            },
        }),
        {
            rootMargin: '-40% 0%',
            once: true,
        }
    )
    return (
        <animated.div ref={ref} style={springs} className="photo">
            <div>
                <img src={img} alt="" />
            </div>
        </animated.div>
    );
}

const list1 = [
    "./src/assets/img/A70219CC-C6DB-4497-9B7C-3D95465A2F20.jpg",
    "./src/assets/img/B666D669-A4E2-47FD-B06D-067467BDF601.jpg",
    "./src/assets/img/CEA11E2A-C2C6-4E6D-8D4F-80C3A17453FB.jpg",
    "./src/assets/img/IMG_1022.jpg",
    "./src/assets/img/IMG_1313.jpg",
    "./src/assets/img/IMG_1488.jpg",
    "./src/assets/img/IMG_1668.jpg",
    "./src/assets/img/IMG_2140.jpg",
    "./src/assets/img/IMG_2183.jpg",
    "./src/assets/img/IMG_2578.jpg",
    "./src/assets/img/IMG_2587.jpg",
];
const list2 = [
    "./src/assets/img/IMG_3091.jpg",
    "./src/assets/img/IMG_3293.jpg",
    "./src/assets/img/IMG_3309.jpg",
    "./src/assets/img/IMG_3356.jpg",
    "./src/assets/img/IMG_3491.jpg",
    "./src/assets/img/IMG_4825.jpg",
    "./src/assets/img/IMG_5139.jpg",
    "./src/assets/img/IMG_5185.jpg",
    "./src/assets/img/IMG_5326.jpg",
    "./src/assets/img/IMG_5402.jpg",
    "./src/assets/img/IMG_5710.jpg",
    "./src/assets/img/IMG_5805.jpg",
];
const list3 = [
    "./src/assets/img/IMG_5900.jpg",
    "./src/assets/img/IMG_5904.jpg",
    "./src/assets/img/IMG_5926.jpg",
    "./src/assets/img/IMG_5947.jpg",
    "./src/assets/img/IMG_6501.jpg",
    "./src/assets/img/img(1).jpg",
    "./src/assets/img/img(2).jpg",
    "./src/assets/img/img(3).jpg",
    "./src/assets/img/img(4).jpg",
    "./src/assets/img/img(5).jpg",
    "./src/assets/img/IMG_2747.jpg",
];

export const ImageGallery = () => {
    return <div className="gallery_container">
        <h1>IMAGE GALLARY</h1>
        <div className="gallary">
            <div className="column">
                {list1.map((img) => (
                    <Card img={img} key={img + "1"} />
                ))}
                
            </div>
            <div className="column">
                {list2.map((img) => (
                    <Card img={img} key={img + "1"} />
                ))}
                
            </div>
            <div className="column">
                {list3.map((img) => (
                    <Card img={img} key={img + "1"} />
                ))}
                
            </div>
        </div>
    </div>
}
