function Contenu({ icon, label }) {
  return (
    <div className="flex items-center justify-start space-x-2 text-white font-bold ">
      {icon}
      <label className="pl-[15px]" htmlFor="type_vehicule">
        {label}
      </label>
    </div>
  );
}

export default Contenu;
