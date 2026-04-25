import React from "react";

const Trajet = () => {
  return (
    <>
      <div className="  bg-green-300 h-[400px]">
        <div className="">ITINERAIRE DU TRAJET</div>
        <div className=" max-w-1/2 pt-5">
          {/* sary lalana */}
          <div>
            <img
              src="../public/images/trajet3.png"
              className=" pt-20"
              alt=""
              style={{ height: "900px" }}
            />
          </div>
          {/* photo depart */}
          <div style={{ position: "relative", top: "-900px", left: "65px" }}>
            <input
              type="text"
              className="bg-gray-200 h-8 rounded-md border-blue-500 text-center"
              placeholder="DEPART"
            />
            <img
              src="../public/images/debut.jpg"
              className="w-15 h-15"
              alt=""
            />
          </div>
          {/* photo arrivé  */}
          <div style={{ position: "relative", bottom: "730px", left: "922px" }}>
            <input
              type="text"
              className="bg-gray-200 h-8 rounded-md border-blue-500 text-center "
              placeholder="ARRIVEE"
            />
            <img src="../public/images/fin.jpg" className="w-15 h-15" alt="" />
          </div>
          {/* photo 1ere emplacement */}
          <div
            style={{ position: "relative", top: "-1150px", left: "298px" }}
            className="flex"
          >
            <img src="../public/images/r.jpg" className="w-30 h-20" alt="" />
            <input
              type="text"
              className="bg-gray-200 h-8 rounded-md border-blue-500 text-center "
              placeholder="1ere emplacement"
            />
          </div>
          {/* photo 2eme emplacement */}
          <div
            style={{ position: "relative", top: "-1125px", left: "662px" }}
            className="flex"
          >
            <img src="../public/images/r.jpg" className="w-25 h-16" alt="" />
            <input
              type="text"
              className="bg-gray-200 h-8 rounded-md border-blue-500 text-center"
              placeholder="2eme emplacement"
            />
          </div>
          {/* photo DESCRIPTION */}
          <div
            name="description"
            style={{ position: "relative", top: "-800px", left: "65px" }}
          >
            {" "}
            <p>
              Dans notre plateforme de covoiturage, le terme "Trajet" désigne
              l'ensemble des étapes de notre voyage partagé, depuis le point de
              départ jusqu'à la destination finale.
              <ul>
                <li>
                  "Départ" vous renseigne sur le lieu initial de notre parcours
                </li>
                <li>
                  Les "Emplacements" indiquent les arrêts potentiels où les
                  passagers peuvent monter à bord ou descendre en cours de route
                </li>
                <li> "Arrivée" marque la destination finale de notre trajet</li>
              </ul>
              Explorez nos différentes options de trajets disponibles et
              rejoignez-nous pour une expérience de covoiturage pratique et
              conviviale.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trajet;
