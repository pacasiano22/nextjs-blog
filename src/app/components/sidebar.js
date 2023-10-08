import Link from 'next/link'
import {RiTodoLine} from 'react-icons/ri'

export default function Sidebar() {
    return(
        <sidebar className="fixed w-full top-0 z-50 shadow-xl border-b-2 border-gray-600 bg-neutral-900">
            <div className="h-20 flex flex-row justify-between items-center py-3 px-10">
                <Link href={"/"} className="text-xl font-bold">
                    pacasiano
                </Link>
                <div className="flex flex-row gap-4 font-bold">
                    <Link href={"/todo"} className="flex justify-center m-0"><RiTodoLine color="white" className="mt-0.5 pr-1" size={20}/> {"TO-DO'S"}</Link>
                    <div className="flex justify-center m-0">AMBOT</div>
                </div>
            </div>
        </sidebar>
    )
}