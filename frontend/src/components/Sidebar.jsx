import { GoHome, GoDiscussionClosed } from "react-icons/go";
import Navlink from "./Navlink";
import { useRoutes } from "../hooks/useRoutes.jsx";

const Sidebar = () => {
  const routes = useRoutes();

  console.log(routes);
  return (
    <div className="sidebar bg-gray-100 duration-300 ease-in-out dark:bg-slate-900  px-8  bottom-0 fixed w-full md:w-[250px] h-16 md:h-screen md:col-[1]">
      <div className="text-xl dark:text-slate-100 hidden md:block font-semibold mt-8 ">
        Fintrade
      </div>
      <div className="flex md:flex-col items-center pt-2 justify-between md:justify-normal md:items-start space-y-1  md:mt-8">
        {routes.map((item) => (
          <Navlink
            path={item.path}
            active={item.active}
            title={item.title}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
