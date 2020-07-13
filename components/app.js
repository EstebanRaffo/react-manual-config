import MyComponent from './MyComponent';
import Button from './otherComponents/Button'

function App() {
  return (
    <div>
      <Button />
      <h1>
        Hemos configurado...
        <MyComponent />
      </h1>
    </div>
  )
}

ReactDOM.render(<App /> , document.getElementById("app"));