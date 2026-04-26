import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTrajet } from "../redux/slices/trajet.slice";
const Trajet1 = () => {
  const dispatch = useDispatch();
  const { pt_A, pt_B, pt_C, pt_D } = useSelector((state) => state.trajet);
  return (
    <div className=" mt-[80px] min-w-[650px] relative rounded-lg">
      {/* image */}
      <img src="../public/images/rue111.png" alt="" className=" h-[700px]" />
      {/* depart */}
      <div className="w-[15.625rem] absolute top-[1.25rem] left-[12rem]">
        <label className="text-white text-center font-bold flex justify-center items-center bg-[#0099b3] bg-opacity-60 w-[250px] h-[30px] rounded-t-lg">
          DEPART
        </label>
        <input
          type="text"
          value={pt_A}
          onChange={(e) => {
            dispatch(setTrajet({ key: "pt_A", data: e.target.value }));
          }}
          className="w-[250px] h-[45px] bg-[#96DFE7] rounded-b-lg text-white text-center font-bold"
        />
      </div>
      {/* 1 ere arret */}
      <div
        className="w-[15.625rem] absolute top-[12.5rem] right-[-6.25rem]
 "
      >
        <label className="text-white text-center font-bold flex justify-center items-center bg-[#0099b3] bg-opacity-60 w-[250px] h-[30px] rounded-t-lg">
          1er point de passage
        </label>
        <input
          type="text"
          value={pt_B}
          onChange={(e) => {
            dispatch(setTrajet({ key: "pt_B", data: e.target.value }));
          }}
          className="w-[250px] h-[45px] bg-[#96DFE7] rounded-b-lg text-white text-center font-bold"
        />
      </div>
      {/* 2eme arret */}
      <div
        className="w-[15.625rem] absolute top-[20.625rem] left-[-5.625rem]
"
      >
        <label className="text-white text-center font-bold flex justify-center items-center bg-[#0099b3] bg-opacity-60 w-[250px] h-[30px] rounded-t-lg">
          2eme point de passage
        </label>
        <input
          value={pt_C}
          onChange={(e) => {
            dispatch(setTrajet({ key: "pt_C", data: e.target.value }));
          }}
          type="text"
          className="w-[250px] h-[45px] bg-[#96DFE7] rounded-b-lg text-white text-center font-bold"
        />
      </div>
      {/* arrivee */}
      <div
        className="w-[15.625rem] absolute bottom-[10rem] right-[-11.25rem]
"
      >
        <label className="text-white text-center font-bold flex justify-center items-center bg-[#0099b3] bg-opacity-60 w-[250px] h-[30px] rounded-t-lg">
          ARRIVEE
        </label>
        <input
          type="text"
          value={pt_D}
          onChange={(e) => {
            dispatch(setTrajet({ key: "pt_D", data: e.target.value }));
          }}
          className="w-[250px] h-[45px] bg-[#96DFE7] rounded-b-lg text-white text-center font-bold"
        />
      </div>
    </div>
  );
};

export default Trajet1;
