import { useAppSelector, useAppDispatch } from "../store/hooks";
import BottomMenu from "../components/BottomMenu";

export default function BottomMenuView() {
  const bottomMenu = useAppSelector(state => state.bottomMenu.toggle)
  const fullscreen = useAppSelector(state => state.bottomMenu.fullscreen)

  return (
    <div className={`z-50 large:z-50 fixed border-slate-300 w-full duration-300 bg-green-500 transition-all rounded-2xl transform-gpu ease-in-out
      ${bottomMenu ?
        'bottom-0 drop-shadow-3xl split-display:drop-shadow-xl' :
        '-bottom-full'
      } 
      ${fullscreen ?
        'h-full split-display:w-10/12 lg:w-4/6 2xl:w-1/2' :
        'h-5/6 split-display:w-8/12 large:w-8/12 lg:w-7/12 xl:w-6/12 2xl:w-5/12'
      }`
    }>
      <BottomMenu />
    </div>
  )
}
