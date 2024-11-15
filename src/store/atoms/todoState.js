import { atom, selector } from "recoil";

export const titleState = atom({
    key:"titleState",
    default:""
})
export const descriptionState = atom({
    key:"description",
    default:""
})

export const Search = atom({
    key:"Search",
    default:""
})

export const Todos = atom({
    key:"Todos",
    default:[]
})


export const filteredtodos = selector({
    key:"filteredtodos",
    get:({get}) =>{
      const todo = get(Todos)
      const filter = get(Search)
        console.log("todos-----",todo)
      return todo.filter((elem)=> elem.title.includes(filter) || elem.description.includes(filter))
    
    }
})



