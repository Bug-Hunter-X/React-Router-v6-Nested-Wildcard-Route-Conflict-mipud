```javascript
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/:id" element={<User />} />
        <Route path="/users/:id/*" element={<UserNested />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() { return <h1>Home</h1>; }
function About() { return <h1>About</h1>; }
function User() { 
  let {id} = useParams();
  return <h1>User {id}</h1>;
}
function UserNested() { 
  let {id} = useParams();
  return <h1>User Nested {id}</h1>;
}
export default App;
```