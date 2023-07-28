import AllListLogo from '../../svg-components/AllListLogo'
import UserProfileLogo from '../../svg-components/UserProfileLogo'
import SettingsLogo from '../../svg-components/SettingsLogo'

export default function LastBlock() {
  return (
    <div className=" flex flex-col">
      <a href="#" className="py-2 px-2 hover:bg-slate-200 rounded-md flex">
        <AllListLogo />
        <div className="flex items-center pl-4">All Lists</div>
      </a>
      <a href="#" className="py-2 px-2 hover:bg-slate-200 rounded-md flex">
        <UserProfileLogo />
        <div className="flex items-center pl-4">User Profile</div>
      </a>
      <a href="#" className="py-2 px-2 hover:bg-slate-200 rounded-md flex">
        <SettingsLogo />
        <div className="flex items-center pl-4">Settings</div>
      </a>
    </div>
  );
}
