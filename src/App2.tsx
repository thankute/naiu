import { useInView, animated } from "@react-spring/web";
import "./style.css";
import { motion, Variants } from "framer-motion";

interface Props {
  img: string;
}

// const cardVariants: Variants = {
//   offscreen: {
//     // x: 1000,
//     y: 800
//   },
//   onscreen: {
//     // x: 0,
//     y: 0,
//     rotate: 0,
//     transition: {
//       type: "spring",
//       bounce: 0.1,
//       duration: 1.2,
//     }
//   }
// };


// function Card({ img }: Props) {
//   return (
//     <motion.div
//       className="card-container"
//       initial="offscreen"
//       whileInView="onscreen"
//       viewport={{ once: true, amount: 0 }}
//     >
//       {/* <div className="splash" style={{ background }} /> */}
//       <motion.div className="photo" variants={cardVariants}>
//         <div>
//           <img src={img} alt="" />
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// }
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
  "./src/assets/img/IMG_1022.HEIC"
];
const list2 = [

  "https://source.unsplash.com/g0dBbrGmMe0",
  "https://source.unsplash.com/v1OW17UcR-Q",
  "https://source.unsplash.com/Wpg3Qm0zaGk",

];
const list3 = [
  "https://source.unsplash.com/W3FC_bCPw8E",
  "https://source.unsplash.com/rBRZLPVLQg0",
  "https://source.unsplash.com/RRksEVVoU8o",
];


export default function App() {
  return <>
    <h1>IMAGE GALLARY</h1>
    <div className="gallary">
      <div className="column">
        {list1.map((img) => (
          <Card img={img} key={img + "1"} />
        ))}
        {list1.map((img) => (
          <Card img={img} key={img + "2"} />
        ))}
        {list1.map((img) => (
          <Card img={img} key={img + "3"} />
        ))}
      </div>
      <div className="column">
        {list2.map((img) => (
          <Card img={img} key={img + "1"} />
        ))}
        {list2.map((img) => (
          <Card img={img} key={img + "2"} />
        ))}
        {list2.map((img) => (
          <Card img={img} key={img + "3"} />
        ))}
      </div>
      <div className="column">
        {list3.map((img) => (
          <Card img={img} key={img + "1"} />
        ))}
        {list3.map((img) => (
          <Card img={img} key={img + "2"} />
        ))}
        {list3.map((img) => (
          <Card img={img} key={img + "3"} />
        ))}
      </div>
    </div>
  </>
}
