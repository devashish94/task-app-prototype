import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { fetchTaskList, fetchTasks, nullTheArray } from '../store/slices/taskSlice'
import { toggleSidebar } from "../store/slices/navbarToggleSlice";
import { toggleBottomMenu } from "../store/slices/addNewTaskSlice";
import { toggleFullscreen as toggleFullscreen } from "../store/slices/bottomMenuFullScreen";
import CollapseLogo from "../svg-components/CollapseLogo";
import ThreeDots from "../svg-components/ThreeDots";
import EditLogo from "../svg-components/EditLogo";
import Bin from "../svg-components/Bin";
import PlusLogo from "../svg-components/PlusLogo";
import { useLocation } from "react-router-dom";
import Relax from "../svg-components/Relax";

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
  const location = useLocation()


  useEffect(() => {
    dispatch(nullTheArray())
    console.clear()
    location.pathname.length === 1 ? dispatch(fetchTaskList('today')) : dispatch(fetchTaskList(location.pathname.slice(1)))
  }, [location.pathname])

  const sidebar = useAppSelector(state => state.toggleSidebar)
  const bottomMenu = useAppSelector(state => state.toggleAddMenu)
  const fullscreen = useAppSelector(state => state.toggleBottomFullscreen)

  return (
    <>
      <div className={`z-10 h-full w-full flex-grow flex flex-col justify-between items-center relative overflow-hidden duration-300 transition-all transform-gpu bg-white 
        ${sidebar ?
          'pointer-events-none split-display:pointer-events-auto rounded-l-3xl ' :
          ''
        } 
       `}>
        <div className={`w-full flex self-start justify-center-center p-4 transition-all duration-300 transform-gpu ease-in-out ${bottomMenu ? 'opacity-30 blur-sm brightness-75' : ''}`}>
          <button className="inline-block large:hidden" onClick={
            () => {
              dispatch(toggleSidebar())
            }
          }>
            <CollapseLogo />
          </button>
          <div className=" w-full flex" onClick={
            () => {
              if (bottomMenu) {
                dispatch(toggleBottomMenu())
              }
            }
          }>
            <p className="text-gray-800 self-start text-4xl split-display:text-5xl font-semibold large:text-6xl px-8 split-display:px-16 large:py-10 large:px-18 translate-x-0 transform-gpu duration-300 ease-in-out transition-all">{props.title}</p>
          </div>
        </div>

        <div className={`px-4 pt-5 mb-12  w-full h-full flex flex-col overflow-auto scrollbar snap-proximity scroll-smooth snap-center duration-300 transform-gpu ease-in-out ${bottomMenu ? 'opacity-30 blur-sm brightness-75' : ''}`} onClick={
          () => {
            if (bottomMenu) {
              dispatch(toggleBottomMenu())
            }
          }
        }>
          <div className={`h-full flex flex-col overflow-auto ${loading ? 'items-center justify-center' : ''}`}>
            {/* <div className={`h-full flex flex-col overflow-auto items-center`}> */}
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

        <div className={`z-50 fixed border-2  w-full  duration-[250ms] transition-all rounded-2xl transform-gpu ease-in-out ${bottomMenu ? 'bottom-0 shadow-xl split-display:shadow-lg large:shadow-xl' : '-bottom-full'} ${sidebar ? 'split-display:w-11/12' : 'split-display:w-2/3'}  ${fullscreen ? 'h-full split-display:w-11/12 large:w-3/4 large:h-full' : 'h-5/6 large:w-2/3 large:h-5/6'}`}>
          <div className="h-full w-full bg-white rounded-br-2xl flex flex-col z-50 py-2 px-6 rounded-2xl divide-y">

            <div className="justify-between items-center flex py-4">
              <div className="w-fit h-fit" onClick={
                () => {
                  dispatch(toggleFullscreen())
                }}>
                <button className="w-full h-full flex items-center p-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6" fill={`fill: rgba(0, 0, 0, 1);transform: ;msFilter:;`}>
                    <path d="M5 12H3v9h9v-2H5zm7-7h7v7h2V3h-9z">
                    </path>
                  </svg>
                </button>
              </div>

              <div className="bg-slate-100 w-fit h-fit rounded-full flex items-center p-1" onClick={() => dispatch(toggleBottomMenu())}>
                <button className={`w-full h-full text-xl flex items-center`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="h-5/6 w-full py-8" onClick={() => {
            }}>
            here, ask the user to give details about the new task
            </div>

          </div>
        </div>

      </div>
    </>
  );
}
