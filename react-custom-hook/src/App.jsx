import './App.css'
import { useFetch } from './hooks/useFetch'


function App() {

  const url = 'https://jsonplaceholder.typicode.com/users'

  const data = useFetch(url)

  return (
    <>
      {data && data.map((item, index) => {
        return (
          <div key={index}>
            <p>{item.name}</p>
          </div>
        )
      })}
    </>
  )
}

export default App
