import { Outlet } from "react-router";
import NavigationBar from "../components/navigation_bar";

export default function BaseLayout() {

  return (
    <>
      <header className="glass bg-white/80 dark:bg-transparent z-10 px-3 sticky top-0  ">
        <div className="p-2 border-b-2 border-b-purple-950/60 ">
          <NavigationBar />
        </div>
      </header>


      <main>
        <Outlet />
      </main>
    </>
  )
}
