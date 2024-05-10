import React, { useEffect, useRef } from "react";
import CircleType from "circletype";

const CircleText = () => {
  const circleRef = useRef(null);

  useEffect(() => {
    if (circleRef.current) {
      const circleType = new CircleType(circleRef.current);
      circleType.radius(135);
      circleType.dir(-1);
    }
  }, []);

  return (
    <div className="px-10">
      <button className="relative ">
        <img
          src="../public/images/bout2.png"
          alt="Description de l'image"
          className="   w-[120px] h-[120px] "
        />
        <div className=" relative  text-2xl font-bold ">
          <div ref={circleRef} className="text-[#2261AA]">
            TRAJET
          </div>
        </div>
      </button>
    </div>
  );
};

export default CircleText;
