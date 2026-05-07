import { useState, useEffect } from "react";
// import "./styles.css"; // Assurez-vous d'avoir les styles Tailwind CSS importés dans votre fichier CSS

const App = () => {
  const [scrolling, setScrolling] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrolling(true);
      setTimeout(() => {
        setScrolling(false);
      }, 500); // Durée de l'animation en millisecondes
    }, 1000); // Intervalle entre les animations en millisecondes

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container relative w-screen h-screen overflow-hidden">
      <div
        className={`absolute w-full h-full flex transition-transform duration-5000 ${
          scrolling ? "translate-x-full" : "translate-x-0"
        }`}
      >
        <div className="box w-[50px] h-[100px] bg-gray-200"></div>
        <div className="box w-[50px] h-[100px] bg-gray-300"></div>
      </div>
    </div>
  );
};

export default App;
