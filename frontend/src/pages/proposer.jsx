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
    <div className=" h-full mt-35 py-25 z-40 relative ">
      <div
        className="
  min-h-[60px]
  sm:min-h-[80px]
  md:min-h-[100px]

  mt-8
  sm:mt-12
  md:mt-[100px]

  overflow-hidden
  relative
  text-center

  text-3xl
  sm:text-4xl
  md:text-6xl

  font-bold
  bg-clip-text
  text-transparent
  bg-gradient-to-r
  from-[#00AFC3]
  to-blue-900
"
      >
        proposer une covoiturage
      </div>
      <div className="flex  flex-col lg:flex-row items-center  h-full ">
        <div className=" w-full lg:w-[700px] px-5  lg:mr-5 text-center lg:text-left  ">
          <p className="py-6 lg:py-12 text-3xl lg:text-5xl font-bold ">
            Covoiturez !
          </p>
          <p class="leading-7 lg:leading-10 text-base lg:text-lg ">
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

        <div className="w-full mt-8 lg:mt-0 relative">
          <div className="z-20">
            <SaryCore />
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex-1 z-30 ">
            <Caroussel />
          </div>
        </div>
      </div>
      {/* titre */}

      <div
        className="
    w-full
    mt-8
    px-6
    py-6

    flex
    items-center
    justify-center
    gap-4

    rounded-2xl
    bg-[#00B3BE]/10
    backdrop-blur-sm

    text-[#2261AA]
    text-lg
    sm:text-xl
    font-semibold
    tracking-wide

    shadow-sm
  "
      >
        <span className="text-center">Veuillez indiquer votre</span>

        <Borybory className="w-8 h-8 sm:w-10 sm:h-10 text-[#00AFC3]" />

        <span className="text-center">!</span>
      </div>

      {/* lalana */}

      <div
        className="
    flex
    flex-col
    lg:flex-row
    gap-8
    w-full
    pl-4
    lg:pl-12
    py-10
  "
      >
        {/* Bloc Trajet */}
        <div className="w-2/3 flex justify-center z-10">
          <Trajet1 />
        </div>
        {/* Bloc texte explicatif */}
        <div
          className="
   w-full lg:w-1/3 max-w-[500px] mx-auto
      px-2 sm:px-4 lg:px-6
      py-6 lg:py-10
      leading-6 sm:leading-7 lg:leading-10
      rounded-2xl  backdrop-blur-sm
      bg-cover bg-center bg-no-repeat
      text-base sm:text-base lg:text-lg
      shadow-sm
  "
        >
          <p className="mb-6 text-center lg:text-left">
            Le trajet représente l'ensemble des étapes parcourues depuis le
            point de départ jusqu'à l'arrivée. Il se compose comme suit :
          </p>

          <div className="flex flex-col gap-6 sm:gap-8">
            {/* Départ */}
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <p>
                <span className="font-bold">Le départ</span> : le point initial
                où le voyage commence.
              </p>

              <img
                src="/images/pngegg.png"
                alt=""
                className="
          
           w-12 sm:w-16 md:w-20 lg:w-36
          h-auto
          mt-3 sm:mt-4
          rotate-90
          brightness-10
          blue
          hue-rotate-[170deg]
          saturate-[400%]
          opacity-80
          mx-auto
          transition-all
          duration-300
        "
              />
            </div>

            {/* Points de passage */}
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <p>
                <span className="font-bold">Les points de passage</span> : les
                arrêts prévus en cours de route pour permettre aux passagers de
                monter ou descendre du véhicule.
              </p>

              <img
                src="/images/pngegg.png"
                alt=""
                className="
                w-12 sm:w-16 md:w-20 lg:w-36
          h-auto
          mt-3 sm:mt-4
          rotate-90
          brightness-10
          
          blue
          hue-rotate-[170deg]
          
          opacity-80
          mx-auto
          transition-all
          duration-300


         
        "
              />
            </div>

            {/* Arrivée */}
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <p>
                <span className="font-bold">L’arrivée</span> : la destination
                finale où le trajet se termine.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mb-8">
        <button
          onClick={handleCreateTrajet}
          className="
      px-16 sm:px-20
      py-4
      bg-[#00B3BE]
      hover:bg-[#00AFC3]
      text-white
      font-extrabold
      text-xl
      rounded-3xl
      shadow-[0_8px_15px_rgba(0,191,200,0.7)]
      transition-all
      duration-300
      transform
      hover:-translate-y-1
    "
        >
          AJOUTER VOTRE PROPOSITION
        </button>
      </div>
    </div>
  );
};

export default Proposer;
