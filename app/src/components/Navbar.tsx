import SidebarToggleLogo from '../svg-components/SidebarToggleLogo'
import { 
  // useAppSelector, 
  useAppDispatch 
} from '../store/hooks'
import { toggleSidebar } from '../store/slices/navbarToggleSlice'

function Navbar() {
  const dispatch = useAppDispatch()

  return (
    <>
      <div className="flex bg-slate-200 w-full drop-shadow-md px-4">

        <div className='flex h-14 space-x-4'>
          <div className={`items-center flex `}>
            <button onClick={() => dispatch(toggleSidebar())}>
              <SidebarToggleLogo />
            </button>
          </div>
          <div className="text-xl flex items-center">Tasks</div>
        </div>

      </div>
    </>
  );
}

export default Navbar 
