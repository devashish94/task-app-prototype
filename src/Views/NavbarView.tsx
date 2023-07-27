import Navbar from "../components/Navbar";
import { useAppSelector, useAppDispatch } from '../store/hooks'
// import { toggle } from '../store/slices/navbarToggleSlice'

export default function () {
  const sidebar = useAppSelector(state => state.toggleNav)
  return (
    <div className={
      `large:hidden w-full flex z-20 duration-[400ms] ease-in-out transition-all`
      // `large:hidden w-full flex z-20 duration-[400ms] ease-in-out transition-all ${sidebar ?
      //   'blur-sm split-display:blur-0 brightness-[0.95] split-display:brightness-100' :
      //   'blur-0 brightness-100'
      // }`
    }>
      <Navbar />
    </div>
  )
}