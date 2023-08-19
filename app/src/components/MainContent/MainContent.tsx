import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { toggleSidebar } from "../../store/slices/navbarToggleSlice";
import { toggleBottomMenu } from "../../store/slices/bottomMenuSlice";
import CollapseLogo from "../../svg-components/CollapseLogo";
import PlusLogo from "../../svg-components/PlusLogo";
import ItemView from "./ItemView";
import { useLocation } from "react-router-dom";

export default function MainContent(props: any) {
  const dispatch = useAppDispatch()

  const loading = useAppSelector(state => state.tasks.loading)
  const sidebar = useAppSelector(state => state.toggleSidebar)
  const bottomMenu = useAppSelector(state => state.bottomMenu.toggle)

  const path = useLocation().pathname.split('/')[2]
  console.log(path)

  console.log(useLocation().pathname.split('/'))

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
          <button className="inline-block large:hidden"
            onClick={
              () => {
                if (!bottomMenu) {
                dispatch(toggleSidebar())
                }
              }
            }>
            <CollapseLogo />
          </button>
          <div className=" w-full flex"
            onClick={
              () => {
                if (bottomMenu) {
                  dispatch(toggleBottomMenu())
                }
              }
            }>
            <p className="text-gray-800 self-start text-4xl split-display:text-5xl font-semibold large:text-6xl px-8 split-display:px-16 large:py-10 large:px-18 translate-x-0 transform-gpu duration-300 ease-in-out transition-all">{path}</p>
          </div>
        </div>

        <div className={`px-4 pt-5 mb-12  w-full h-full flex flex-col overflow-auto`}
          onClick={
            () => {
              if (bottomMenu) {
                dispatch(toggleBottomMenu())
              }
            }
          }>
          <div className={`h-full flex flex-col overflow-auto  ${loading ? 'items-center justify-center' : ''}`}>
            <ItemView />
          </div>
        </div>

        <button onClick={() => dispatch(toggleBottomMenu())} className={`absolute left-100 right-100 bottom-8 flex items-center justify-center bg-slate-400 text-slate-50 rounded-full p-3 drop-shadow-xl hover:drop-shadow-2xl large:hover:scale-110 duration-[250ms] ${loading ? 'scale-0' : 'scale-100'}`}>
          <PlusLogo />
        </button>

      </div>
    </>
  );
}
