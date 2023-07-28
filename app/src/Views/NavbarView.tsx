import Navbar from "../components/Navbar";
import { 
  useAppSelector, 
  // useAppDispatch 
} from '../store/hooks'
// import { toggle } from '../store/slices/navbarToggleSlice'

export default function () {
  const sidebar = useAppSelector(state => state.toggleNav)
  return (
    <div className={
      // `will-change-transform large:hidden w-full flex z-20 duration-[350ms] ease-in-out transition-all transform-gpu`
      `hidden will-change-transform large:hidden w-full z-20 duration-[350ms] ease-in-out transition-all transform-gpu ${sidebar ?
        'opacity-50 split-display:opacity-100' :
        ''
      }`
    }>
      <Navbar />
    </div>
  )
}
