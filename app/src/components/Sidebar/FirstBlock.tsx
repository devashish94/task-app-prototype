import TodayLogo from '../../svg-components/calendar/TodayLogo'
import UpcomingLogo from '../../svg-components/calendar/UpcomingLogo'
import SomedayLogo from '../../svg-components/calendar/SomedayLogo'
import { Link } from 'react-router-dom'
import { toggleSidebar } from '../../store/slices/navbarToggleSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { toggleBottomMenu } from '../../store/slices/bottomMenuSlice';

function FirstBlock() {
    const dispatch = useAppDispatch()
    const bottomMenu = useAppSelector(state => state.bottomMenu.toggle)

    const presetTaskList = ['Today', 'Upcoming', 'Someday']
    const logoList = [ <TodayLogo />, <UpcomingLogo />, <SomedayLogo />]

    return (
        <div className="flex flex-col" >
            {
                presetTaskList.map((list, i) => {
                    return (
                        <Link
                            key={i}
                            to={`list/${list}`}
                            onClick={
                                () => {
                                    dispatch(toggleSidebar())
                                    if (bottomMenu) {
                                        dispatch(toggleBottomMenu())
                                    }
                                }
                            }
                            className='flex px-2 py-3 hover:bg-slate-200 rounded-md active:bg-slate-300 focus:rounded-md'>
                            <div className="flex items-center"> {logoList[i]} </div>
                            <div className="flex items-center font-bold pl-4">{`${list}`}</div>
                        </Link>
                    )
                })
            }
        </div>
    );
}

export default FirstBlock;
