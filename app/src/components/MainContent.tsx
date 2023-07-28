import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { fetchTasks } from '../store/slices/taskSlice'
// import SidebarToggleLogo from "../svg-components/SidebarToggleLogo";
import { toggle } from "../store/slices/navbarToggleSlice";
import CollapseLogo from "../svg-components/CollapseLogo";
import ThreeDots from "../svg-components/ThreeDots";
import EditLogo from "../svg-components/EditLogo";
import Bin from "../svg-components/Bin";
import PlusLogo from "../svg-components/PlusLogo";

function Loader() {
  return (
    <div className="bg-white ">
      <svg className="h-10 w-10 text-slate-700 bg-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={4} />
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
      </svg>
    </div>
  )
}

export default function MainContent(props: any) {
  const { tasks, loading } = useAppSelector(state => state.tasks)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchTasks())
  }, [])


  return (
    <>
      <div className="h-full w-full flex-grow flex flex-col justify-between items-center relative">
        <div className="w-full flex items-center p-4 large:hidden">
          <button className="" onClick={() => dispatch(toggle())}>
            <CollapseLogo />
          </button>
        </div>

        <div className="w-full p-4 flex flex-col items-center self-start">
          <p className="w-full text-5xl split-display:text-6xl px-2 split-display:px-8 large:py-8 large:px-12 text-gray-800">{props.title}</p>
        </div>

        <div className={`px-4 pt-5 mt-2 pb-16 w-full h-full flex flex-col overflow-auto ${loading ? 'items-center justify-center' : ''}`}>
          {
            loading ? <Loader /> : tasks.map((task, idx) => {
              return (
                <div key={idx} className="text-black w-full py-2 split-display:px-10 cursor-pointer">
                  <div className="px-2 py-4 split-display:px-4 flex justify-between hover:bg-slate-100 rounded-lg">

                    <div className="flex-grow flex flex-col truncate px-2 duration-300 transition-all ease-in-out">
                      <div className="flex-grow font-bold truncate duration-300 transition-all ease-in-out">{task.title}</div>
                      <div className="font-base truncate">{task.description}</div>
                    </div>

                    <div className="flex self-center gap-4">
                      <div> <EditLogo /> </div>
                      <div> <Bin /> </div>
                      <div className=""> <ThreeDots /> </div>
                    </div>

                  </div>
                </div>
              );
            })
          }
        </div>
        <button className={`absolute right-10 bottom-10 flex items-center justify-between large:right-16 large:bottom-16 bg-slate-500 text-slate-50 rounded-full p-3 drop-shadow-lg`}>
            <PlusLogo />
        </button>
      </div>
    </>
  );
}
