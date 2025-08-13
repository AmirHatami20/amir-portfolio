'use client';

import {useRouter} from 'next/navigation';

import {FaAngleRight, FaAngleLeft} from "react-icons/fa6";

const ArrowNav = ({prevPath = '/', nextPath = '/'}) => {
    const router = useRouter();

    return (
        <>
            {/* Mobile */}
            <div
                className="fixed bottom-3 right-3 flex flex-col items-center justify-center gap-y-5 ap z-40 lg:hidden border-2 border-accent rounded-full w-10 h-24"
            >
                <button
                    onClick={() => router.push(nextPath)}
                    className="text-xl text-accent"
                >
                    <FaAngleRight/>
                </button>
                <button
                    onClick={() => router.push(prevPath)}
                    className="text-xl text-accent"
                >
                    <FaAngleLeft/>
                </button>
            </div>
        </>
    );
};

export default ArrowNav;
