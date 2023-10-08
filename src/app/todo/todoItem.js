"use client"

import { BsTrash } from "react-icons/bs"

export function TodoItem({id, title, complete, toggleTodo, trash}) {
    return(
        <li className="pt-3 w-1/3" key={id}>
            <div className="flex flex-row justify-between border-b-2 border-neutral-600">
                <div>
                    <input
                    type="checkbox"
                    className="cursor-pointer peer"
                    defaultChecked={complete}
                    onChange={e => toggleTodo(id, e.target.checked)} />
                    <label htmlFor={id} className="peer-checked:line-through text-md pl-1 peer-checked:text-slate-400">{title}</label>
                </div>
                    <button onClick={e => trash(id)}><BsTrash className="" /></button>
            </div>
        </li>
    )
}
