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
      `large:hidden w-full flex z-20 duration-[350ms] ease-in-out transition-all transform-gpu ${sidebar ?
        'split-display:opacity-60' :
        'opacity-100'
      }`
    }>
      <Navbar />
    </div>
  )
}