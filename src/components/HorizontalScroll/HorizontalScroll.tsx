import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import ArrowRightAltRoundedIcon from "@mui/icons-material/ArrowRightAltRounded";

const Example = () => {
  return (
    <div className="radial-gradient(circle, #FCAF3C, #F7770F)">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-87%"]);

  return (
    <section
      ref={targetRef}
      className="relative h-[300vh] bg-gradient-to-b from-yellow-500 via-amber-600 to-transparent rounded-2xl mt-5"
    >
      <div className="sticky top-10 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
          <div className="flex justify-center content-center flex-wrap w-[300px]">
            <Link
              className="text-white font-bold text-lg uppercase hover:text-yellow-400 transition duration-300 hover:bg-amber-50 rounded-2xl p-5 ease-in-out tracking-wide"
              to={"/recipe"}
            >
              SEE FOR YOUR SELF <ArrowRightAltRoundedIcon fontSize="large" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: CardType }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-amber-400 rounded-2xl"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className=" rounded-2xl bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-xs">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default Example;

type CardType = {
  url: string;
  title: string;
  id: number;
};

const cards: CardType[] = [
  {
    url: "../../../public/pRecipe1.jpg",
    title: "WE",
    id: 1,
  },
  {
    url: "../../../public/pRecipe2.jpg",
    title: "HAVE",
    id: 2,
  },
  {
    url: "../../../public/pRecipe3.jpg",
    title: "SPECIAL",
    id: 3,
  },
  {
    url: "../../../public/pRecipe4.jpg",
    title: "RECIPES!",
    id: 4,
  },
];
