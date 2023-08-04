import { useAppSelector, useAppDispatch } from "../store/hooks";
import BottomMenu from "../components/BottomMenu";

export default function BottomMenuView() {
  const sidebar = useAppSelector(state => state.toggleSidebar)
  const bottomMenu = useAppSelector(state => state.bottomMenu.toggle)
  const fullscreen = useAppSelector(state => state.bottomMenu.fullscreen)

  return (
    <div className={`z-50 large:z-50 fixed border-2  w-full  duration-300 transition-all rounded-2xl transform-gpu ease-in-out
      ${bottomMenu ?
        'bottom-0 shadow-xl split-display:shadow-lg large:shadow-xl' :
        '-bottom-full'
      } 
      ${sidebar ?
        'split-display:w-11/12' :
        'split-display:w-2/3'
      }  
      ${fullscreen ?
        'h-full split-display:w-11/12 large:w-3/5 large:h-full' :
        'h-5/6 large:w-2/5 large:h-5/6'
      }`
    }>
      <BottomMenu />
    </div>
  )
}
