import React, { useEffect, useRef } from "react";
import Caroussel from "../components/Caroussel";
import Sary from "../components/Sary.jsx";
import SaryCore from "../components/SaryCore.jsx";
import Borybory from "../components/Borybory.jsx";

import Trajet1 from "../components/Trajet1.jsx";

import { useSelector, useDispatch } from "react-redux";

import { useCreateTrajetMutation } from "../redux/slices/trajet.api.slice.jsx";
import { resetTrajet } from "../redux/slices/trajet.slice.jsx";

const Proposer = () => {
  const trajetData = useSelector((state) => state.trajet);
  const dispatch = useDispatch();

  const [createTrajet, { isLoading, isSuccess, isError }] =
    useCreateTrajetMutation();

  const handleCreateTrajet = async () => {
    try {
      const res = await createTrajet({
        type_vehicule: trajetData.type_vehicule,
        nombre_de_place_libre: trajetData.nombre_de_place_libre,
        date_depart: new Date(trajetData.date_depart).toISOString(),
        pt_A: trajetData.pt_A,
        pt_B: trajetData.pt_B,
        pt_C: trajetData.pt_C,
        pt_D: trajetData.pt_D,
      }).unwrap();
      alert("AJOUT SUCCESS");
      dispatch(resetTrajet());
    } catch (error) {
      console.log("Erreur lors de l'ajout du trajet", error);
    }
  };

  return (
    <div className=" h-full mt-35 pt-25 z-40 relative ">
      <div className="h-[100px] overflow-y-hidden relative mt-[100px] text-center text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00AFC3] to-blue-900 ">
        proposer une covoiturage
      </div>
      <div className="flex items-center justify-content h-full">
        <div className="flex-none w-[500px] px-5 mr-5">
          <p className="py-12 ">Covoiturez !</p>
          <p class="leading-10 ">
            {" "}
            &nbsp; &nbsp; &nbsp; En partageant vos trajets, vous économisez,
            rencontrez de nouvelles personnes et contribuez à rendre la ville
            plus agréable à vivre. Prêt pour l'aventure ? Let's carpool! <br />
            &nbsp; &nbsp; &nbsp; vous avez une voiture diponnible, dans laquelle
            vous voulez recevoir nos concitoyens en co-voiturage? Rejoignez-nous
            sur
            <span
              className="font-Caveat whitespace-nowrap tracking-wide"
              style={{
                textShadow: "4px 4px 4px rgba(0, 0, 0, 0.5)",
                color: "#7A520B",
              }}
            >
              {" "}
              COVOIT, {"  "}
            </span>
            {"  "}
            pour trouver votre trajet idéal et faire une différence dès
            aujourd'hui!
          </p>
        </div>

        <div className="w-full flex-1 relative">
          <div className="z-20">
            <SaryCore />
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex-1 z-30 ">
            <Caroussel />
          </div>
        </div>
      </div>
      {/* titre */}
      <div className="flex items-center justify-center text-2xl font-bold py-10 mt-8 ">
        <div className="mr-2 text-[#2261AA]" style={{ letterSpacing: "5px" }}>
          Veuillez indiquer votre
        </div>
        <Borybory className="w-10 h-10" />
        <div className="ml-2 text-[#2261AA]">!</div>
      </div>
      {/* lalana */}
      <div className="flex">
        <div className="flex">
          <div>
            <Trajet1 />
          </div>
        </div>
        <div
          className="ml-[50px] mt-[100px] leading-10 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('../public/images/fond.png')" }}
        >
          {" "}
          le trajet représente l'ensemble des étapes parcourues depuis le point
          de départ jusqu'à l'arrivée. il se compose comme suit:
          <br /> <br />
          <div className="pl-[160px]">
            <p>
              {" "}
              <span className="font-bold">le départ</span> : le point initial où
              le voyage commence,{" "}
            </p>
            <br />

            <div className="ml-20">
              <img
                src="../public/images/pngegg.png"
                alt=""
                className="w-[150px] h-[70px] transform rotate-90  px-10 filter grayscale brightness-150"
              />
            </div>
            <br />
            <p>
              <span className="font-bold">les points de passage </span>: les
              arrêts prévus en cours de route pour permettre aux passagers de
              monter ou descendre du véhicule
            </p>
            <br />
            <div className="ml-20">
              <img
                src="../public/images/pngegg.png"
                alt=""
                className="w-[150px] h-[70px] transform rotate-90  px-10 filter grayscale brightness-150"
              />
            </div>
            <br />

            <p>
              <span className="font-bold">L'arrivée </span>: la destination
              finale où le trajet se termine.
            </p>
          </div>
        </div>
      </div>
      <button
        onClick={handleCreateTrajet}
        className="px-12 py-2 text-white bg-sky-700 rounded-lg"
      >
        AJOUTER
      </button>
    </div>
  );
};

export default Proposer;
