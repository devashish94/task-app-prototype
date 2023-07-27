import MainContent from "../components/MainContent"
import { useAppSelector, useAppDispatch } from '../store/hooks'
import { toggle } from '../store/slices/navbarToggleSlice'

export default function ({title}: any) {
  const sidebar = useAppSelector(state => state.toggleNav)
  const dispatch = useAppDispatch()
  return (
    <div className='h-full w-full flex-grow flex z-10'>
      {/* main content = desktop view */}
      <div className={`w-full flex-grow hidden large:flex rounded-r-2xl transition-all ease-in-out duration-[200ms]`}>
        <MainContent title={title} view={'Desktop View'} />
      </div>

      {/* main content = tablet view */}
      <div
        className={`w-full flex-grow hidden split-display:flex large:hidden duration-[300ms] ease-in-out transition-all`} >
        <MainContent title={title} view={'Tablet View'} />
      </div>

      {/* main content = mobile view */}
      <div
        // className={`w-full flex-grow split-display:hidden duration-[300ms] ease-in-out transition-all z-10 ${sidebar ? 'opacity-90' : 'opacity-100'}`}
        className={`w-full flex-grow split-display:hidden duration-[300ms] ease-in-out transition-all z-10`}
        onClick={() => { if (sidebar) { dispatch(toggle()) } }} >
        <MainContent title={title} view={'Mobile View'} />
      </div>

    </div>
  )
}
