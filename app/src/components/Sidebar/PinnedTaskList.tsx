import PinLogo from '../../svg-components/PinLogo'

const PinnedList = ({ list }: any) => {
  return (
    <>
      <a href="#" className="flex px-2 py-2 hover:bg-slate-300 rounded-md space-x-4">
        <div className="flex items-center">
          <PinLogo />
        </div>
        <div className="line-clamp-1">{list.name}</div>
      </a>
    </>
  );
}

export default PinnedList
