function App() {
  let items = ['NY', 'OK', 'OH', 'TX'];
  items = [];

  return (
    <>
      <h1>List of States</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className='list-group'>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
