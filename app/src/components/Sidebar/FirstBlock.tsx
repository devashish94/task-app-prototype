import TodayLogo from '../../svg-components/calendar/TodayLogo'
import UpcomingLogo from '../../svg-components/calendar/UpcomingLogo'
import SomedayLogo from '../../svg-components/calendar/SomedayLogo'
import { Link } from 'react-router-dom'
import { toggle } from '../../store/slices/navbarToggleSlice';
import { useAppDispatch } from '../../store/hooks';
// import { fetchTasks } from '../../store/slices/taskSlice'

function FirstBlock() {
    const dispatch = useAppDispatch()
    return (
        <div className="flex flex-col pb-4" onClick={() => {dispatch(toggle());}}>
            <Link to="/today" className="flex px-2 py-3 hover:bg-slate-200 rounded-md active:bg-slate-300 focus:rounded-md">
                <div className="flex items-center">
                    <TodayLogo />
                </div>
                <div className="flex items-center font-bold pl-4">Today</div>
            </Link>
            <Link to="/upcoming" className="flex px-2 py-3 hover:bg-slate-200 rounded-md">
                <div className="flex items-center">
                    {/* {dispatch(fetchTasks())} */}
                    <UpcomingLogo />
                </div>
                <div className="flex items-center font-bold pl-4">Upcoming</div>
            </Link>
            <Link to="/someday" className="flex px-2 py-3 hover:bg-slate-200 rounded-md">
                <div className="flex items-center">
                    {/* {dispatch(fetchTasks())} */}
                    <SomedayLogo />
                </div>
                <div className="flex items-center font-bold pl-4">Someday</div>
            </Link>
        </div>
    );
}

export default FirstBlock;
