import React from "react";
import SaryCore from "../components/SaryCore.jsx";

const Rechercher = () => {
  return (
    <div className="relative  ">
      <SaryCore />
      <div className="absolute top-[25px] z-30 w-full">
        <div className="   font-bold flex">
          <div
            className="w-1/2 relative leading-10 px-10 py-10 text-xl z-20"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}
          >
            &nbsp; &nbsp; &nbsp; A la recherche d'un moyen économique et
            écologique pour se déplacer dans notre ville ? Covoit vous permet de
            trouver votre covoiturage idéal parmi les milliers de propositions
            de nos concitoyens sur notre plateforme ! <br />
            &nbsp; &nbsp; &nbsp;Recherchez, trouvez, puis choisissez le trajet
            parfait qui vous convient, aux horaires qui vous conviennent !
          </div>
          <div className="w-fit ml-[70px] relative bg-[#0099b3] bg-opacity-20">
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
        <div className="mt-20 my-4">
          <table className="mx-4">
            <thead>
              <tr>
                <th className="tsipika">numero d'identification</th>
                <th className="tsipika">type de véhicule</th>
                <th className="tsipika">nombre de places libres</th>
                <th className="tsipika">DEPART</th>
                <th className="tsipika">1er point de passage</th>
                <th className="tsipika">2eme point de passage</th>
                <th className="tsipika">ARRIVEE</th>
                <th className="tsipika">date de départ</th>
                <th className="tsipika"> CHOISIR</th>
              </tr>
            </thead>
            <tbody>
              <tr className="tabe">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr className="tabe">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr className="tabe">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr className="tabe">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr className="tabe">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex justify-center items-center">
          <button
            className="px-12 py-4 rounded-2xl bg-[#2261AA] text-white jusify-center items-center"
            style={{ letterSpacing: "5px" }}
          >
            {" "}
            VALIDER LA RESERVATION
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rechercher;
