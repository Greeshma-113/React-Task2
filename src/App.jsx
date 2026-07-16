import React, { useEffect, useState } from 'react';
import { Link, Route, Routes, Navigate, useLocation, useParams } from 'react-router-dom';

function App() {
  const [activeSection, setActiveSection] = useState('useState');

  const sections = [
    { key: 'useState', label: 'useState' },
    { key: 'useEffect', label: 'useEffect' },
    { key: 'events', label: 'Events' },
    { key: 'router', label: 'Router' },
    { key: 'navigation', label: 'Navigation' },
    { key: 'fetch', label: 'Fetch API' },
    { key: 'storage', label: 'Local Storage' },
  ];

  return (
    <div className="app">
      <div className="navbar">
        {sections.map((section) => (
          <button
            key={section.key}
            className={activeSection === section.key ? 'active' : ''}
            onClick={() => setActiveSection(section.key)}
          >
            {section.label}
          </button>
        ))}
      </div>

      <Routes>
        <Route path="/" element={<Home activeSection={activeSection} setActiveSection={setActiveSection} />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard-protected" element={<ProtectedDashboard />} />
      </Routes>
    </div>
  );
}

function Home({ activeSection, setActiveSection }) {
  const location = useLocation();
  useEffect(() => {
    const path = location.pathname;
    if (path.includes('dashboard')) setActiveSection('router');
  }, [location, setActiveSection]);

  return (
    <div className="grid">
      <TaskCard title="Advanced useState">
        <MarksCalculator />
        <EmployeeForm />
        <MultipleCounters />
        <FavoriteMovies />
        <ExpenseTracker />
      </TaskCard>

      <TaskCard title="Advanced useEffect">
        <ApiRefreshCounter />
        <OnlineOfflineDetector />
        <ScreenWidthTracker />
        <RandomQuoteGenerator />
        <BackgroundColorChanger />
      </TaskCard>

      <TaskCard title="Event Handling">
        <Calculator />
        <ColorPicker />
        <CharacterCounter />
        <AgeChecker />
        <ImageSwitcher />
      </TaskCard>

      <TaskCard title="React Router & Navigation">
        <div className="row">
          <Link to="/" className="link-btn">Home</Link>
          <Link to="/dashboard" className="link-btn">Dashboard</Link>
          <Link to="/blog/1" className="link-btn">Blog 1</Link>
          <Link to="/login" className="link-btn">Login</Link>
        </div>
        <p className="small">Sections implemented with navigation and route wiring.</p>
      </TaskCard>

      <TaskCard title="Fetch API">
        <CommentsFetcher />
        <AlbumsFetcher />
        <PhotosFetcher />
        <RandomUserFetcher />
        <CountriesFetcher />
      </TaskCard>

      <TaskCard title="Local Storage">
        <UsernameStorage />
        <ThemePersistence />
        <TodoList />
        <NotesApp />
        <ShoppingCart />
      </TaskCard>
      <p className="small">Active section: {activeSection}</p>
    </div>
  );
}

function TaskCard({ title, children }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      {children}
    </div>
  );
}

function MarksCalculator() {
  const [marks, setMarks] = useState({ math: 0, science: 0, english: 0 });
  const total = Object.values(marks).reduce((sum, value) => sum + Number(value || 0), 0);
  const average = total / 3;
  const grade = average >= 90 ? 'A' : average >= 75 ? 'B' : average >= 60 ? 'C' : 'D';

  return (
    <div className="card">
      <h3>Marks Calculator</h3>
      {Object.keys(marks).map((subject) => (
        <div className="input-group" key={subject}>
          <label>{subject[0].toUpperCase() + subject.slice(1)}</label>
          <input
            type="number"
            value={marks[subject]}
            onChange={(e) => setMarks({ ...marks, [subject]: e.target.value })}
          />
        </div>
      ))}
      <p>Total: <strong>{total}</strong></p>
      <p>Average: <strong>{average.toFixed(2)}</strong></p>
      <p>Grade: <strong>{grade}</strong></p>
    </div>
  );
}

function EmployeeForm() {
  const [form, setForm] = useState({ name: '', department: '', salary: '' });
  const [submitted, setSubmitted] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(form);
  };

  return (
    <div className="card">
      <h3>Employee Form</h3>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input placeholder="Employee Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <input placeholder="Department" value={form.department} onChange={(e) => setForm({ ...form, department: e.target.value })} />
          <input placeholder="Salary" value={form.salary} onChange={(e) => setForm({ ...form, salary: e.target.value })} />
        </div>
        <button type="submit">Submit</button>
      </form>
      {submitted && (
        <div className="badge">
          {submitted.name} • {submitted.department} • {submitted.salary}
        </div>
      )}
    </div>
  );
}

function MultipleCounters() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);

  return (
    <div className="card">
      <h3>Multiple Counters</h3>
      <div className="row">
        <button onClick={() => setCounter1(counter1 + 1)}>Counter 1: {counter1}</button>
        <button onClick={() => setCounter2(counter2 + 1)}>Counter 2: {counter2}</button>
        <button onClick={() => setCounter3(counter3 + 1)}>Counter 3: {counter3}</button>
      </div>
    </div>
  );
}

function FavoriteMovies() {
  const [movie, setMovie] = useState('');
  const [movies, setMovies] = useState(['Inception', 'Interstellar']);

  const addMovie = () => {
    if (!movie.trim()) return;
    setMovies([...movies, movie.trim()]);
    setMovie('');
  };

  const removeMovie = (index) => {
    setMovies(movies.filter((_, i) => i !== index));
  };

  return (
    <div className="card">
      <h3>Favorite Movies</h3>
      <div className="row">
        <input value={movie} onChange={(e) => setMovie(e.target.value)} placeholder="Add movie" />
        <button onClick={addMovie}>Add</button>
      </div>
      <ul>
        {movies.map((item, i) => (
          <li key={i}>
            {item} <button onClick={() => removeMovie(i)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ExpenseTracker() {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [expenses, setExpenses] = useState([]);

  const addExpense = () => {
    if (!name.trim() || !amount) return;
    setExpenses([...expenses, { name: name.trim(), amount: Number(amount) }]);
    setName('');
    setAmount('');
  };

  const total = expenses.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="card">
      <h3>Expense Tracker</h3>
      <div className="input-group">
        <input placeholder="Expense Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input placeholder="Amount" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
        <button onClick={addExpense}>Add Expense</button>
      </div>
      <p>Total Expenses: <strong>{total}</strong></p>
      <p>Number of Transactions: <strong>{expenses.length}</strong></p>
    </div>
  );
}

function ApiRefreshCounter() {
  const [apiCalls, setApiCalls] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setApiCalls((count) => count + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <div className="card"><h3>API Refresh Counter</h3><p>API Calls: <strong>{apiCalls}</strong></p></div>;
}

function OnlineOfflineDetector() {
  const [online, setOnline] = useState(navigator.onLine);
  useEffect(() => {
    const handleOnline = () => setOnline(true);
    const handleOffline = () => setOnline(false);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return <div className="card"><h3>Online/Offline Detector</h3><p>{online ? 'You are Online' : 'You are Offline'}</p></div>;
}

function ScreenWidthTracker() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const resize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  return <div className="card"><h3>Screen Width Tracker</h3><p>Width: <strong>{width}px</strong></p></div>;
}

function RandomQuoteGenerator() {
  const [quote, setQuote] = useState('Loading quote...');
  useEffect(() => {
    const loadQuote = async () => {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      setQuote(data.content);
    };
    loadQuote();
    const interval = setInterval(loadQuote, 5000);
    return () => clearInterval(interval);
  }, []);

  return <div className="card"><h3>Random Quote Generator</h3><p>{quote}</p></div>;
}

function BackgroundColorChanger() {
  const colors = ['#60a5fa', '#fca5a5', '#86efac', '#fde68a'];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % colors.length);
    }, 3000);
    document.body.style.background = colors[index];
    return () => clearInterval(interval);
  }, [index]);

  return <div className="card"><h3>Background Color Changer</h3><p>Background updates every 3 seconds.</p></div>;
}

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const calculate = (operator) => {
    const a = Number(num1);
    const b = Number(num2);
    if (operator === '+') setResult(a + b);
    if (operator === '-') setResult(a - b);
    if (operator === '*') setResult(a * b);
    if (operator === '/') setResult(b === 0 ? 'Cannot divide by zero' : a / b);
  };

  return (
    <div className="card">
      <h3>Calculator</h3>
      <div className="row">
        <input value={num1} onChange={(e) => setNum1(e.target.value)} />
        <input value={num2} onChange={(e) => setNum2(e.target.value)} />
      </div>
      <div className="row">
        <button onClick={() => calculate('+')}>+</button>
        <button onClick={() => calculate('-')}>-</button>
        <button onClick={() => calculate('*')}>*</button>
        <button onClick={() => calculate('/')}>/</button>
      </div>
      <p>Result: <strong>{result}</strong></p>
    </div>
  );
}

function ColorPicker() {
  const colors = {
    Red: '#ef4444',
    Blue: '#3b82f6',
    Green: '#22c55e',
  };

  const changeColor = (color) => {
    document.body.style.background = colors[color];
  };

  return (
    <div className="card">
      <h3>Color Picker</h3>
      <div className="row">
        {Object.keys(colors).map((name) => (
          <button key={name} onClick={() => changeColor(name)}>{name}</button>
        ))}
      </div>
    </div>
  );
}

function CharacterCounter() {
  const [value, setValue] = useState('');
  return (
    <div className="card">
      <h3>Character Counter</h3>
      <textarea value={value} onChange={(e) => setValue(e.target.value)} />
      <p>Characters: <strong>{value.length}</strong></p>
    </div>
  );
}

function AgeChecker() {
  const [age, setAge] = useState('');
  const eligible = Number(age) >= 18;
  return (
    <div className="card">
      <h3>Age Checker</h3>
      <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
      <p>{eligible ? 'Eligible to Vote' : age === '' ? '' : 'Not Eligible'}</p>
    </div>
  );
}

function ImageSwitcher() {
  const images = [
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=400&q=80',
  ];
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((index - 1 + images.length) % images.length);
  const next = () => setIndex((index + 1) % images.length);

  return (
    <div className="card">
      <h3>Image Switcher</h3>
      <img src={images[index]} alt="switch" />
      <div className="row">
        <button onClick={prev}>Previous</button>
        <button onClick={next}>Next</button>
      </div>
    </div>
  );
}

function Dashboard() {
  const navs = [
    { to: '/dashboard', label: 'Dashboard' },
    { to: '/dashboard/students', label: 'Students' },
    { to: '/dashboard/faculty', label: 'Faculty' },
    { to: '/dashboard/reports', label: 'Reports' },
  ];

  return (
    <div className="card">
      <div className="row">
        {navs.map((item) => (
          <Link key={item.to} to={item.to} className="link-btn">{item.label}</Link>
        ))}
      </div>
      <Routes>
        <Route path="" element={<h3>Dashboard Home</h3>} />
        <Route path="students" element={<h3>Students</h3>} />
        <Route path="faculty" element={<h3>Faculty</h3>} />
        <Route path="reports" element={<h3>Reports</h3>} />
      </Routes>
    </div>
  );
}

function BlogDetail() {
  const { id } = useParams();
  return <div className="card"><h3>Blog Details</h3><p>Blog ID: {id}</p></div>;
}

function LoginPage() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className="card">
      <h3>Login Page</h3>
      <button onClick={() => setLoggedIn(true)}>Login</button>
      {loggedIn && <p>Logged in successfully.</p>}
    </div>
  );
}

function ProtectedDashboard() {
  const [loggedIn, setLoggedIn] = useState(false);
  return loggedIn ? <div className="card"><h3>Dashboard</h3><p>Welcome!</p></div> : <Navigate to="/login" replace />;
}

function CommentsFetcher() {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((res) => res.json())
      .then((data) => setComments(data.slice(0, 3)));
  }, []);

  return <div className="card"><h3>Fetch Comments</h3>{comments.map((item) => <p key={item.id}><strong>{item.name}</strong> - {item.email} - {item.body}</p>)}</div>;
}

function AlbumsFetcher() {
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then((res) => res.json())
      .then((data) => setAlbums(data.slice(0, 4)));
  }, []);

  return <div className="card"><h3>Fetch Albums</h3>{albums.map((item) => <p key={item.id}>{item.title}</p>)}</div>;
}

function PhotosFetcher() {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((res) => res.json())
      .then((data) => setPhotos(data.slice(0, 3)));
  }, []);

  return <div className="card"><h3>Fetch Photos</h3>{photos.map((item) => <div key={item.id}><img src={item.thumbnailUrl} alt={item.title} /><p>{item.title}</p></div>)}</div>;
}

function RandomUserFetcher() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch('https://randomuser.me/api/')
      .then((res) => res.json())
      .then((data) => setUser(data.results[0]));
  }, []);

  return <div className="card"><h3>Random User API</h3>{user ? <><p>Name: {user.name.first} {user.name.last}</p><p>Email: {user.email}</p><img src={user.picture.medium} alt="user" /></> : <p>Loading...</p>}</div>;
}

function CountriesFetcher() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => setCountries(data.slice(0, 5)));
  }, []);

  return <div className="card"><h3>Country API</h3>{countries.map((country, index) => <p key={index}>{country.name.common} - {country.capital?.[0] || 'N/A'} - Population: {country.population}</p>)}</div>;
}

function UsernameStorage() {
  const [value, setValue] = useState(() => localStorage.getItem('username') || '');
  useEffect(() => localStorage.setItem('username', value), [value]);

  return <div className="card"><h3>Save Username</h3><input value={value} onChange={(e) => setValue(e.target.value)} /><p className="small">Stored in localStorage.</p></div>;
}

function ThemePersistence() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  useEffect(() => {
    document.body.style.background = theme === 'dark' ? '#111827' : '#f3f4f6';
    localStorage.setItem('theme', theme);
  }, [theme]);

  return <div className="card"><h3>Theme Persistence</h3><button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Toggle {theme}</button></div>;
}

function TodoList() {
  const [todo, setTodo] = useState('');
  const [items, setItems] = useState(() => JSON.parse(localStorage.getItem('todos') || '[]'));

  useEffect(() => localStorage.setItem('todos', JSON.stringify(items)), [items]);

  const addTodo = () => {
    if (!todo.trim()) return;
    setItems([...items, todo.trim()]);
    setTodo('');
  };

  return <div className="card"><h3>Todo List</h3><div className="row"><input value={todo} onChange={(e) => setTodo(e.target.value)} /><button onClick={addTodo}>Add</button></div><ul>{items.map((item, index) => <li key={index}>{item} <button onClick={() => setItems(items.filter((_, i) => i !== index))}>Delete</button></li>)}</ul></div>;
}

function NotesApp() {
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState(() => JSON.parse(localStorage.getItem('notes') || '[]'));
  const [editIndex, setEditIndex] = useState(-1);

  useEffect(() => localStorage.setItem('notes', JSON.stringify(notes)), [notes]);

  const addOrUpdate = () => {
    if (!note.trim()) return;
    if (editIndex >= 0) {
      const updated = [...notes];
      updated[editIndex] = note.trim();
      setNotes(updated);
      setEditIndex(-1);
    } else {
      setNotes([...notes, note.trim()]);
    }
    setNote('');
  };

  return <div className="card"><h3>Notes Application</h3><div className="row"><input value={note} onChange={(e) => setNote(e.target.value)} /><button onClick={addOrUpdate}>{editIndex >= 0 ? 'Update' : 'Add'}</button></div><ul>{notes.map((item, index) => <li key={index}>{item} <button onClick={() => { setNote(item); setEditIndex(index); }}>Edit</button> <button onClick={() => setNotes(notes.filter((_, i) => i !== index))}>Delete</button></li>)}</ul></div>;
}

function ShoppingCart() {
  const [items, setItems] = useState(() => JSON.parse(localStorage.getItem('cart') || '[]'));
  const [product, setProduct] = useState('');
  useEffect(() => localStorage.setItem('cart', JSON.stringify(items)), [items]);

  const add = () => { if (!product.trim()) return; setItems([...items, product.trim()]); setProduct(''); };

  return <div className="card"><h3>Shopping Cart</h3><div className="row"><input value={product} onChange={(e) => setProduct(e.target.value)} /><button onClick={add}>Add</button></div><ul>{items.map((item, index) => <li key={index}>{item}</li>)}</ul></div>;
}

export default App;
