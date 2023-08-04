import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { fetchTaskList, nullTheArray } from '../store/slices/taskSlice'
import { toggleSidebar } from "../store/slices/navbarToggleSlice";
import { toggleBottomMenu } from "../store/slices/addNewTaskSlice";
import CollapseLogo from "../svg-components/CollapseLogo";
import ThreeDots from "../svg-components/ThreeDots";
import EditLogo from "../svg-components/EditLogo";
import Bin from "../svg-components/Bin";
import PlusLogo from "../svg-components/PlusLogo";
import { useLocation } from "react-router-dom";
import Relax from "../svg-components/Relax";
import Loader from '../svg-components/Loader'

export default function MainContent(props: any) {
  const { tasks, loading } = useAppSelector(state => state.tasks)
  const sidebar = useAppSelector(state => state.toggleSidebar)
  const bottomMenu = useAppSelector(state => state.bottomMenu.toggle)
  const dispatch = useAppDispatch()

  const location = useLocation()

  useEffect(() => {
    dispatch(nullTheArray())
    console.clear()
    location.pathname.length === 1 ? dispatch(fetchTaskList('today')) : dispatch(fetchTaskList(location.pathname.slice(1)))
  }, [location.pathname])

  return (
    <>
      <div className={`h-full w-full flex-grow flex flex-col justify-between items-center relative overflow-hidden duration-300 transition-all transform-gpu bg-white 
        ${sidebar ?
          'pointer-events-none split-display:pointer-events-auto rounded-l-3xl ' :
          ''
        }
       `}>
        <div className={`w-full flex self-start justify-center-center p-4 transition-all duration-300 transform-gpu ease-in-out ${bottomMenu ? 'opacity-50' : ''}`}>
          <button className="inline-block large:hidden" onClick={
            () => {
              dispatch(toggleSidebar())
            }
          }>
            <CollapseLogo />
          </button>
          <div className=" w-full flex" >
            <p className="text-gray-800 self-start text-4xl split-display:text-5xl font-semibold large:text-6xl px-8 split-display:px-16 large:py-10 large:px-18 translate-x-0 transform-gpu duration-300 ease-in-out transition-all">{props.title}</p>
          </div>
        </div>

        <div className={`px-4 pt-5 mb-12  w-full h-full flex flex-col overflow-auto snap-proximity scroll-smooth snap-center duration-300 transform-gpu ease-in-out ${bottomMenu ? 'opacity-50' : ''}`}
          onClick={
            () => {
              if (bottomMenu) {
                dispatch(toggleBottomMenu())
              }
            }
          }>
          <div className={`h-full flex flex-col overflow-auto ${loading ? 'items-center justify-center' : ''}`}>
            {
              loading ? <Loader /> : tasks && tasks.length > 0 ? tasks.map((task: any, idx: number) => {
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
              }) :
                <div className="flex flex-col text-center w-full h-full items-center justify-center overflow-hidden">
                  <Relax />
                  <p className="text-lg text-slate-600">Enjoy your free time, no tasks left!</p>
                </div>
            }
          </div>
        </div>

        <button onClick={() => dispatch(toggleBottomMenu())} className={`absolute left-100 right-100 bottom-8 flex items-center justify-center bg-slate-400 text-slate-50 rounded-full p-3 drop-shadow-xl hover:drop-shadow-2xl large:hover:scale-110 duration-[250ms] ${loading ? 'scale-0' : 'scale-100'}`}>
          <PlusLogo />
        </button>

      </div>
    </>
  );
}
