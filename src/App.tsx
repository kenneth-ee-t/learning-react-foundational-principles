// import Message from './Message';
import ListGroup from './component/ListGroup';

function App() {
  const items = ['NY', 'OK', 'OH', 'TX'];

  const handleSelectItem = (item: string) => {
    console.log(item);
  }
  return (
    <div>
      {/* <Message /> */}
      <ListGroup items={items} heading="States" onSelectItem={handleSelectItem}/>
    </div>
  );
}

export default App;
