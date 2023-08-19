import MainContent from "../components/MainContent/MainContent"
import { useAppSelector, useAppDispatch } from '../store/hooks'
import { toggleBottomMenu } from "../store/slices/bottomMenuSlice"
import { toggleSidebar } from '../store/slices/navbarToggleSlice'

export default function ({ title }: any) {
  const dispatch = useAppDispatch()
  const sidebar = useAppSelector(state => state.toggleSidebar)
  const bottomMenu = useAppSelector(state => state.bottomMenu.toggle)

  return (
    <div className={`h-full w-full flex-grow flex flex-col z-10 rounded-2xl relative ${
      bottomMenu ? 
      'opacity-60' : 
      ''
    }`} >

      {/* main content = desktop view */}
      <div className={`w-full flex-grow hidden large:flex 2xl:rounded-r-2xl overflow-hidden bg-white justify-center relative`} 
        onClick={() => {
          if (bottomMenu) {
            dispatch(toggleBottomMenu())
          }
        }} >
        {/* <MainContent title={title} view={'Desktop View'} /> */}
        <MainContent />
      </div>

      {/* main content = tablet view */}
      <div
        className={`will-change-transform w-full flex-grow hidden split-display:flex large:hidden duration-[200ms] ease-in-out transition-all transform-gpu ${sidebar ? 'rounded-l-xl ' : 'bg-white'} justify-center relative overflow-hidden`}  
        onClick={() => {
          if (bottomMenu) {
            dispatch(toggleBottomMenu())
          }
        }} >
        {/* <MainContent title={title} view={'Tablet View'} /> */}
        <MainContent />
      </div>

      {/* main content = mobile view */}
      <div
        className={`w-full will-change-auto flex-grow split-display:hidden duration-[200ms] ease-in-out transition-all transform-gpu z-10 ${sidebar ? 'opacity-50 ' : ''} justify-center relative overflow-hidden`}
        onClick={() => {
          if (sidebar) {
            dispatch(toggleSidebar())
          }
          if (bottomMenu) {
            dispatch(toggleBottomMenu())
          }
        }} >
        {/* <MainContent title={title} view={'Mobile View'} /> */}
        <MainContent />
      </div>

    </div>
  )
}
