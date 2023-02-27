import './App.css';


const Mensaje = (params) => {
  console.log(params);
  return <h1 style={{color: params.color }}>
    {params.message}
    </h1>
}


const Description = () => {
  return <p>Esta es la app del curso fullstackopen</p>
}


const App = () => {
  
  return (
    <div className="App">
      <Mensaje color='red' message='Estamos trabajando en ello'/>
      <Mensaje color='green' message='Paciencia'/>
      <Description />
    </div>
  );
}

export default App;
