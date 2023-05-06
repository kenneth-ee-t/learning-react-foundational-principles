function App() {
  const items = ['NY', 'OK', 'OH', 'TX'];

  return (
    <>
      <h1>List of States</h1>
      <ul className='list-group'>
        {items.map((item) => (
          <li key = {item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
