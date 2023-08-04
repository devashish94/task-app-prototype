import { useAppSelector, useAppDispatch } from "../store/hooks";
import { toggleBottomMenu, toggleFullScreen as toggleFullscreen } from "../store/slices/addNewTaskSlice";
import ExpandLogo from "../svg-components/ExpandLogo";
import CloseLogo from '../svg-components/CloseLogo'

export default function BottomMenu() {
  const dispatch = useAppDispatch()

  const bottomMenu = useAppSelector(state => state.bottomMenu.toggle)
  const fullscreen = useAppSelector(state => state.bottomMenu.fullscreen)

  return (
    <div className="h-full w-full bg-white flex flex-col py-2 px-6 rounded-2xl divide-y">

      <div className="justify-between items-center flex py-3 rounded-2xl">

        <div className="w-fit h-fit hover:bg-slate-100 rounded-lg p-1 cursor-pointer"
          onClick={
            () => {
              dispatch(toggleFullscreen())
            }}>
          <button className="w-full h-full flex items-center p-1">
            <ExpandLogo />
          </button>
        </div>

        <div className="cursor-pointer w-fit h-fit rounded-full flex items-center p-1 bg-slate-100 hover:bg-slate-200" onClick={() => dispatch(toggleBottomMenu())}>
          <button className={`w-full h-full text-xl flex items-center`}>
            <CloseLogo />
          </button>
        </div>
      </div>

      <div className="h-5/6 w-full py-8 rounded-2xl border-4 flex-grow"></div>

    </div>
  )
}
