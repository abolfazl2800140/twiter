import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex w-dvw h-dvh justify-center align-middle rounded-[30px] bg-[light] bg-purple-50">
      <div className="flex p-[10px] justify-center align-top rounded-[36px] bg-main backdrop-blur-[50px]">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
