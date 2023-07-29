import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { fetchTasks } from '../store/slices/taskSlice'
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

  const sidebar = useAppSelector(state => state.toggleNav)

  return (
    <>
      <div className={`h-full w-full flex-grow flex flex-col justify-between items-center relative overflow-hidden duration-300 transition-all transform-gpu bg-white ${sidebar ? 'pointer-events-none split-display:pointer-events-auto rounded-l-3xl ' : ''}`}>
        <div className="w-full flex self-start justify-center-center p-4">
          <button className="inline-block large:hidden" onClick={() => dispatch(toggle())}>
            <CollapseLogo />
          </button>
          <div className=" w-full flex ">
            <p className="text-gray-800 self-start text-4xl split-display:text-5xl font-semibold large:text-6xl px-8 split-display:px-16 large:py-10 large:px-18 translate-x-0 transform-gpu duration-300 ease-in-out transition-all">{props.title}</p>
          </div>
        </div>

        <div className={`px-4 pt-5 mb-12  w-full h-full flex flex-col overflow-auto scrollbar snap-proximity scroll-smooth snap-center `}>
          <div className={`h-full flex flex-col overflow-auto ${loading ? 'items-center justify-center' : ''}`}>
            {
              loading ? <Loader /> : tasks.map((task, idx) => {
                return (
                  <div key={idx} className="text-black w-full split-display:px-10 cursor-pointer">
                    <div className="px-2 py-4 split-display:px-4 flex justify-between hover:bg-slate-100 rounded-xl ">

                      <div className="flex-grow flex flex-col px-2 duration-300 transition-all ease-in-out">
                        <div className="flex-grow font-bold duration-300 transition-all ease-in-out line-clamp-1">{task.title}</div>
                        <div className="line-clamp-1 duration-300 transition-all ease-in-out ">{task.description}</div>
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
        </div>

        {/* <button className={`absolute right-8 bottom-8 split-display:right-7 split-display:bottom-7 flex items-center justify-between large:right-10 large:bottom-10 bg-slate-500 text-slate-50 rounded-full p-3 drop-shadow-xl hover:scale-110 duration-300 `}> */}
        <button className={`absolute left-100 right-100 bottom-8 flex items-center justify-center  bg-slate-400 text-slate-50 rounded-full p-3 drop-shadow-xl hover:drop-shadow-2xl large:hover:scale-110 duration-[400ms] ${loading ? 'scale-0' : 'scale-100'}`}>
          <PlusLogo />
        </button>
      </div>
    </>
  );
}
