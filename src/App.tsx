// import Message from './Message';
import ListGroup from './component/ListGroup';

function App() {
  let items = ['NY', 'OK', 'OH', 'TX'];
  return (
    <div>
      {/* <Message /> */}
      <ListGroup items={items} heading="States"/>
    </div>
  );
}

export default App;
