import './App.css'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'

function App() {

  return (
    <>
     <h1 className="text-2xl text-black font-bold">TODO with Redux</h1>
     <AddTodo />
      <Todo />
    </>
  )
}

export default App
