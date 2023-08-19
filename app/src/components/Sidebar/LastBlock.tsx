import { toggleSidebar } from '../../store/slices/navbarToggleSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { toggleBottomMenu } from '../../store/slices/bottomMenuSlice';
import { Link, useLocation } from 'react-router-dom'
import AllListLogo from '../../svg-components/AllListLogo'
import UserProfileLogo from '../../svg-components/UserProfileLogo'
import SettingsLogo from '../../svg-components/SettingsLogo'

export default function LastBlock() {
  // return (
  //   <div className=" flex flex-col">
  //     <a href="#" className="py-2 px-2 hover:bg-slate-200 rounded-md flex">
  //       <AllListLogo />
  //       <div className="flex items-center pl-4">All Lists</div>
  //     </a>
  //     <a href="#" className="py-2 px-2 hover:bg-slate-200 rounded-md flex">
  //       <UserProfileLogo />
  //       <div className="flex items-center pl-4">User Profile</div>
  //     </a>
  //     <a href="#" className="py-2 px-2 hover:bg-slate-200 rounded-md flex">
  //       <SettingsLogo />
  //       <div className="flex items-center pl-4">Settings</div>
  //     </a>
  //   </div>
  // );

  const dispatch = useAppDispatch()
  const bottomMenu = useAppSelector(state => state.bottomMenu.toggle)

  const presetTaskList = ['All Lists', 'User Profile', 'Settings']
  const logoList = [<AllListLogo />, <UserProfileLogo />, <SettingsLogo />]

  return (
    <div className="flex flex-col" >
      {
        presetTaskList.map((list, i) => {
          return (
            <Link
              key={i}
              // to={`${list.replace(' ', '') === 'AllLists' ? '/lists/all' : ''}`}
              // to={`/lists/${list.split(' ')[0].toLowerCase()}`}
              to={`/lists/All_List`}
              onClick={
                () => {
                  dispatch(toggleSidebar())
                  if (bottomMenu) {
                    dispatch(toggleBottomMenu())
                  }
                }
              }
              className='flex px-2 py-2 hover:bg-slate-200 rounded-md active:bg-slate-300 focus:rounded-md'>
              <div className="flex items-center"> {logoList[i]} </div>
              <div className="flex items-center pl-4">{`${list}`}</div>
            </Link>
          )
        })
      }
    </div>
  );
}
