// import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
// import { fetchTaskList, nullTheArray } from '../../store/slices/taskSlice'
import { toggleSidebar } from "../../store/slices/navbarToggleSlice";
import { toggleBottomMenu } from "../../store/slices/bottomMenuSlice";
import CollapseLogo from "../../svg-components/CollapseLogo";
import PlusLogo from "../../svg-components/PlusLogo";
// import { useLocation } from "react-router-dom";
import TaskContent from "./ItemView";

export default function MainContent(props: any) {
  const dispatch = useAppDispatch()

  const { tasks, loading } = useAppSelector(state => state.tasks)
  const sidebar = useAppSelector(state => state.toggleSidebar)
  const bottomMenu = useAppSelector(state => state.bottomMenu.toggle)

  return (
    <>
      <div className={`h-full w-full flex-grow flex flex-col justify-between items-center relative overflow-hidden duration-300 transition-all transform-gpu bg-white 
        ${sidebar ?
          'rounded-l-3xl ' :
          ''
        }
      `}
        onClick={
          () => {
            if (bottomMenu) {
              dispatch(toggleBottomMenu())
            }
          }
        }
      >
        <div className={`w-full flex self-start justify-center-center p-4 transition-all duration-300 transform-gpu ease-in-out ${bottomMenu ? 'opacity-40' : ''}`}>
          <button className="inline-block large:hidden" onClick={
            () => {
              if (!bottomMenu) {
                dispatch(toggleSidebar())
              }
            }
          }>
            <CollapseLogo />
          </button>
          <div className=" w-full flex" >
            <p className="text-gray-800 self-start text-4xl split-display:text-5xl font-semibold large:text-6xl px-8 split-display:px-16 large:py-10 large:px-18 translate-x-0 transform-gpu duration-300 ease-in-out transition-all">{props.title}</p>
          </div>
        </div>

        <div className={`px-4 pt-5 mb-12  w-full h-full flex flex-col overflow-auto`} >
          <div className={`h-full flex flex-col overflow-auto  ${loading ? 'items-center justify-center' : ''}`}>
            <TaskContent />
          </div>
        </div>

        <button onClick={() => dispatch(toggleBottomMenu())} className={`absolute left-100 right-100 bottom-8 flex items-center justify-center bg-slate-400 text-slate-50 rounded-full p-3 drop-shadow-xl hover:drop-shadow-2xl large:hover:scale-110 duration-[250ms] ${loading ? 'scale-0' : 'scale-100'}`}>
          <PlusLogo />
        </button>

      </div>
    </>
  );
}
