import CloseLogo from '../../svg-components/CloseLogo'
import { useAppDispatch } from '../../store/hooks';
import {toggle} from '../../store/slices/navbarToggleSlice'

export default function CloseSidebarButton() {
  const dispatch = useAppDispatch()

  return (
    <button className="bg-slate-300 hover:bg-slate-400 p-1 rounded-full" onClick={() => dispatch(toggle())}>
      <CloseLogo />
    </button>
  );
}
