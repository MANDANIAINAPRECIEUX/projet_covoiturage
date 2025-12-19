import React from "react";
import { FaCar } from "react-icons/fa";
import { MdOutlineAirlineSeatReclineExtra } from "react-icons/md";
import { RiMapPin2Fill } from "react-icons/ri";
import { LuMapPin } from "react-icons/lu";
import { GoSearch } from "react-icons/go";
import Contenu from "./Contenu";

import { setTrajet } from "../redux/slices/trajet.slice";
import { useDispatch, useSelector } from "react-redux";
// import Trajet from "./Trajet";

const Caroussel = () => {
  const dispatch = useDispatch();

  const {
    type_vehicule,
    nombre_de_place_libre,

    date_depart,
  } = useSelector((state) => state.trajet);

  return (
    <form action="POST">
      <div
        name="principale"
        className=" bg-[#0099b3] bg-opacity-30
    w-full
    max-w-[500px]
    mx-auto"
      >
        <div className="bg-[#0099b3] bg-opacity-30 py-3 text-white text-center font-bold">
          {" "}
          VOTRE DISPONNIBILITE
        </div>
        <div className="px-4 py-4    min-h-[150px] flex flex-col text-lg rounded-2xl">
          <div className="flex items-center justify-between py-4 space-x-2">
            <Contenu icon={<FaCar />} label="type de voiture" />
            <input
              value={type_vehicule}
              onChange={(e) => {
                dispatch(
                  setTrajet({ key: "type_vehicule", data: e.target.value })
                );
              }}
              className="rounded-lg px-2"
              type="text"
            />
          </div>
          <div className="flex items-center justify-between py-4 space-x-2">
            <Contenu
              icon={<MdOutlineAirlineSeatReclineExtra />}
              label="nombre de Place libre"
            />
            <input
              value={nombre_de_place_libre}
              onChange={(e) => {
                dispatch(
                  setTrajet({
                    key: "nombre_de_place_libre",
                    data: Number(e.target.value),
                  })
                );
              }}
              className="rounded-lg px-2"
              type="number"
              placeholder=""
            />
          </div>
        </div>
        <div className="bg-[#0099b3] bg-opacity-30 py-3">
          <div className="flex items-center justify-between ">
            <div className="text-white font-bold pl-4"> Le </div>
            <div className="flex item-center justify-center px-5 space-x-4">
              <input
                value={date_depart}
                onChange={(e) => {
                  dispatch(
                    setTrajet({
                      key: "date_depart",
                      data: e.target.value,
                    })
                  );
                }}
                className="rounded-lg text-center w-full sm:w-48 h-8"
                type="date"
                placeholder=""
              />
            </div>
            <div className="text-white font-bold"> à </div>
            <div className="flex item-center justify-center px-5 space-x-4">
              <input
                className="rounded-lg text-center  w-32 h-8"
                type="time"
                placeholder="hh:mm"
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Caroussel;
