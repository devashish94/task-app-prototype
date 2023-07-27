import Sidebar from '../components/Sidebar/Sidebar'
import { 
  useAppSelector, 
} from '../store/hooks'

export default function SidebarView() {
  const sidebar = useAppSelector(state => state.toggleNav)
  return (
    <>
      {/* desktop sidebar */}
      <div className='h-screen large:h-full w-full mobile:w-72 2xl:w-80 hidden large:flex 2xl:rounded-l-full large:shadow-none transition-all duration-[200ms]'>
        <Sidebar />
      </div>

      {/* tablet sidebar */}
      <div className={`overflow-auto z-50 hidden split-display:flex w-0 large:hidden h-screen duration-[300ms] transform-gpu ease-in-out transition-all ${sidebar ?
        'w-96' : 'w-0'}`}>
        <Sidebar />
      </div>

      {/* mobile sidebar */}
      <div className={`z-50 w-full mobile:w-72 split-display:hidden absolute h-screen duration-[300ms] transform-gpu ease-in-out overflow-hidden transition-all ${sidebar ?
        'translate-x-0 shadow-xl' : '-translate-x-full '}`}>
        <Sidebar />
      </div>
    </>
  )
}
