import ItemList from "./components/ItemList";

function App() {

  const items = ["Computer", "Televisione", "Tablet", "Penna digitale", "Smartphone"];

  return (
    <>
    <ItemList items={items}/>
    </>
  )
}

export default App