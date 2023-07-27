import PinLogo from '../../svg-components/PinLogo'

const PinnedList = ({ list } : any) => {
    return (
        <>
            <a href="#" className="flex px-2 py-2 hover:bg-slate-300 rounded-md space-x-4">
                <div className="flex items-center">
                    <PinLogo />
                </div>
                <div className="truncate">{list.title}</div>
            </a>
        </>
    );
}

export default PinnedList
