import React from "react";
import SaryCore from "../components/SaryCore.jsx";

const Rechercher = () => {
  return (
    <div className="relative  ">
      <SaryCore />
      <div className="absolute top-[25px] z-20 w-full">
        <div className="   font-bold flex">
          <div className="w-1/2 relative ">
            &nbsp; &nbsp; &nbsp; A la recherche d'un moyen économique et
            écologique pour se déplacer dans notre ville ? Covoit vous permet de
            trouver votre covoiturage idéal parmi les milliers de propositions
            de nos concitoyens sur notre plateforme ! <br />
            &nbsp; &nbsp; &nbsp;Recherchez, trouvez, puis choisissez le trajet
            parfait qui vous convient, aux horaires qui vous conviennent !
          </div>
          <div className="w-1/2 relative bg-[#0099b3] bg-opacity-20">
            <div className=" bg-[#0099b3] text-white w-[500px] bg-opacity-40 flex items-center justify-center px-4 h-[70px]">
              {" "}
              QUE RECHERCHEZ - VOUS?
            </div>
            <div className="flex justify-between py-4 px-4  space-x-2">
              <label className="text-white" htmlFor="">
                {" "}
                nombre de places :
              </label>
              <input type="text" className="rounded-lg px-2 text-sky-600" />
            </div>
            <div className="flex justify-between py-4 px-4 space-x-2">
              <label className="text-white" htmlFor="">
                date de depart :
              </label>
              <input type="date" className="rounded-lg px-2 text-sky-600" />
            </div>
            <div className="flex justify-between py-4 px-4 space-x-2">
              <label className="text-white" htmlFor="input">
                heure de depart :
              </label>
              <input type="heure" className="rounded-lg px-2 text-sky-600" />
            </div>
            <div className="flex justify-between py-4 px-4 space-x-2">
              <label className="text-white" htmlFor="input">
                {" "}
                DEPART
              </label>
              <input type="text" className="rounded-lg px-2 text-sky-600" />
            </div>
            <div className="flex justify-between py-4 px-4 space-x-2">
              <label className="text-white" htmlFor="input">
                ARRIVEE
              </label>
              <input type="text" className="rounded-lg px-2 text-sky-600" />
            </div>
            <div
              className=" flex text-white justify-center items-center py-4 px-4 space-x-2 bg-[#0099b3] w-[350px] bg-opacity-40 w-[300px] rounded-2xl mx-auto mb-[20px] backdrop-blur-md"
              // style={{
              //   backdropFilter: "blur(17.9px)",
              //   WebkitBackdropFilter: "blur(17.9px)",
              // }}
            >
              <button> RECHERCHER &#128269; </button>
            </div>
          </div>
        </div>
        <button className="bg-sky-500 px-10 text-white py-2 rounded-2xl">
          {" "}
          RESERVER
        </button>
      </div>
    </div>
  );
};

export default Rechercher;
