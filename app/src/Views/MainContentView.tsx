import MainContent from "../components/MainContent"
import { useAppSelector, useAppDispatch } from '../store/hooks'
import { toggleSidebar } from '../store/slices/navbarToggleSlice'
import { toggleBottomMenu } from "../store/slices/addNewTaskSlice"

export default function ({ title }: any) {
  const sidebar = useAppSelector(state => state.toggleSidebar)
  const bottomMenu = useAppSelector(state => state.toggleAddMenu)
  const dispatch = useAppDispatch()
  return (
    <div className='h-full w-full flex-grow flex z-10 rounded-2xl' >

      {/* main content = desktop view */}
      <div className={`w-full flex-grow hidden large:flex 2xl:rounded-r-2xl overflow-hidden bg-white`} >
        <MainContent title={title} view={'Desktop View'} />
      </div>

      {/* main content = tablet view */}
      <div
        className={`will-change-transform w-full flex-grow hidden split-display:flex large:hidden duration-[200ms] ease-in-out transition-all transform-gpu ${sidebar ? 'rounded-l-xl ' : 'bg-white'}`}  >
        <MainContent title={title} view={'Tablet View'} />
      </div>

      {/* main content = mobile view */}
      <div
        className={`w-full will-change-auto flex-grow split-display:hidden duration-[200ms] ease-in-out transition-all transform-gpu z-10 ${sidebar ? 'opacity-50 blur' : ''}`}
        // className={`w-full will-change-auto flex-grow split-display:hidden duration-[350ms] ease-in-out transition-all transform-gpu z-10`}
        onClick={() => {
          if (sidebar) {
            dispatch(toggleSidebar())
          }
        }} >
        <MainContent title={title} view={'Mobile View'} />
      </div>

    </div>
  )
}
