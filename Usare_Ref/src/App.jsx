import UncontrolledInput from "./components/UncontrolledInput";

function App() {

  const handleSubmit = (value) => {
    alert(`You typed this: ${value}`)
  }

  return (
    <>
      <UncontrolledInput placeholder={"Type here..."} onSubmit={handleSubmit} />
    </>
  )
}

export default App