import { IoMdArrowDropdown } from "react-icons/io";
import { useOutletContext } from "react-router";
import InstalledCard from "../../Components/InstalledCard/InstalledCard";

const Installation = () => {
    const { installCard } = useOutletContext();
    // console.log(installCard);
    return (
        <div className='container mx-auto py-10'>
            <div className='text-center mb-2'>
                <h1 className='font-bold sm:text-5xl text-3xl mb-3'>Your Installed Apps</h1>
                <p className='text-base font-normal text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='flex sm:flex-row flex-col sm:justify-between items-center'>
                <h1 className='font-semibold text-xl ' >({installCard.length}) Apps Found</h1>
                <div>
                    <details className="dropdown">
                        <summary className="btn m-1">Sort By <IoMdArrowDropdown /></summary>
                        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li><a>size</a></li>
                            <li><a>downloads</a></li>
                        </ul>
                    </details>
                </div>
            </div>
            <div>
                {
                    installCard.map(card => <InstalledCard key={card.id} card={card}></InstalledCard>)
                }
            </div>
        </div>
    );
};

export default Installation;