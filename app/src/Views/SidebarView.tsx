import Sidebar from '../components/Sidebar/Sidebar'
import { 
  useAppSelector, 
} from '../store/hooks'

export default function SidebarView() {
  const sidebar = useAppSelector(state => state.toggleSidebar)
  const bottomMenu = useAppSelector(state => state.bottomMenu.toggle)
  return (
    <>
      {/* desktop sidebar */}
      <div className={`z-30 h-screen large:h-full w-full mobile:w-72 2xl:w-80 hidden large:flex 2xl:rounded-l-full duration-300 transition-all transform-gpu ${bottomMenu ?
        'opacity-60' :
        ''
      }`}>
        <Sidebar />
      </div>

      {/* tablet sidebar */}
      <div className={`bg-slate-100 z-30 will-change-transform overflow-auto hidden split-display:flex w-0 large:hidden h-screen duration-[300ms] transform-gpu ease-in-out transition-all ${sidebar ?
        'w-96' : 'w-0'}`}>
        <Sidebar />
      </div>

      {/* mobile sidebar */}
      <div className={`z-30 will-change-transform w-full rouned-r-xl mobile:w-72 split-display:hidden delay-0 absolute h-screen duration-[300ms] transform-gpu ease-in-out overflow-hidden transition-all ${sidebar ?
        'translate-x-0 drop-shadow-xl' : '-translate-x-full'}`}>
        <Sidebar />
      </div>
    </>
  )
}
