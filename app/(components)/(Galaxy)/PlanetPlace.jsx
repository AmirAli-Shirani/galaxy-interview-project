import { useDrop } from "react-dnd";
import { toast } from "react-toastify";
import Image from "next/image"; // اضافه کردن Image برای نمایش تصویر

const PlanetPlace = ({ x, y, planetName, onDrop, isPlaced, image }) => {
  const [{ isOver }, drop] = useDrop({
    accept: "planet",
    drop: (item) => {
      // وقتی سیاره روی این موقعیت قرار می‌گیرد
      onDrop(item, planetName);
      // toast.success("Planet dropped successfully!", { icon: "✅" });
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div
      ref={drop}
      className={`absolute rounded-full flex justify-center items-center ${isPlaced  ? "w-24 h-24" : "w-16 h-16 bg-blue-700"}`}
      style={{
        top: `calc(50% + ${y}px)`,
        left: `calc(50% + ${x}px)`,
        transform: "translate(-50%, -50%)",
      }}
    >
      {isPlaced && (
        <Image
          src={image}
          alt={planetName}
          width={300}
          height={300}
          className="w-24 h-24 rounded-full"
        />
      )}
    </div>
  );
};

export default PlanetPlace;
