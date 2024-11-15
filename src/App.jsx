import './App.css'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { titleState,descriptionState,Todos,Search,filteredtodos } from './store/atoms/todoState'
function App() {
  

 const setTitle = useSetRecoilState(titleState)
 const setDescription = useSetRecoilState(descriptionState)
 const setTodos = useSetRecoilState(Todos)
 const setSearch =useSetRecoilState(Search)

const title = useRecoilValue(titleState)
const description = useRecoilValue(descriptionState)
const allTodos =useRecoilValue(filteredtodos)

 function showlog(){
    setTodos((prevTodo) => [...prevTodo,{
      title:title,
      description:description
    }])
    setTitle('')
    setDescription('')
 }

 console.log("alltodos-------",allTodos)
 
  return (
    <>

     <input type="text" placeholder='title' value={title} onChange={(e)=>{setTitle(e.target.value)}} /> <br /> <br />
     <input type="text" placeholder='description' value={description} onChange={(e)=>{setDescription(e.target.value)}} /> <br /> <br />
     <button onClick={showlog}>create</button><br /><br />

     <input type="text" placeholder='Search todo..' onChange={(e)=>setSearch(e.target.value)} />

     <div>
        {(allTodos.length === 0) ? (<p>no todos</p>) : (
          allTodos.map((todo,index) => {
          return <div key={index}>
              <h3>{todo.title}</h3>
              <p>{todo.description}</p>
            </div>
          })
        ) }
     </div>

    </>
  )
}

export default App
