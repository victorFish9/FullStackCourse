
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useField from './hooks/customHook'


const App = () => {
  const name = useField('text')
  console.log(name)
  // ...

  return (
    <div>
      <form >
        <input
          type={name.type}
          value={name.value}
          onChange={name.onChange}
        />
        {name.value}
      </form>
    </div>)
}


export default App
