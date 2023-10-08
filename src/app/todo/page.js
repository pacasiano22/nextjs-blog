import Sidebar from "@/app/components/sidebar"
import { prisma } from "@/db"
import { redirect } from "next/navigation"
import { TodoItem } from "@/app/todo/todoItem"

async function createTodo(data) {
    "use server"

    const title = data.get("title")?.valueOf()
    if(typeof title !== "string" || title.length === 0){
        throw new Error("Invalid Title!")
    }

    console.log("item added")
    await prisma.todo.create({ data: {title: title, complete: false} })
    redirect("todo")
}

async function toggleTodo(id, complete) {
    "use server"

    console.log("Item updated")
    await prisma.todo.update({ where: {id}, data: {complete}})
    redirect("todo")
}

async function trash(id){
    "use server"

    await prisma.todo.delete({where: {id}})
    console.log("item deleted")
    redirect("todo")
}

export default async function Page() {

    const todos = await prisma.todo.findMany()

    return (
        <div>
            <Sidebar/>
            <div className="flex flex-col gap-5 mt-20 p-10">
                <div className="w-1/3">
                    <form action={createTodo}>
                        <label className="flex flex-col justify-start">Todo Title</label>
                        <div className="flex flex-row gap-1">
                            <input type="text" name="title" className="text-black rounded-sm w-full"/>
                            <button type="submit" className="px-2 rounded-md bg-blue-800">Submit</button>
                        </div>
                    </form>
                </div>
                <ul className="">
                    {todos.map(todo =>(
                        <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} trash={trash} />
                    ))}
                </ul>
            </div>
        </div>
    )
}