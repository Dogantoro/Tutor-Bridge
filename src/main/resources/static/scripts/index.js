// Set root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Set up page
const App = () => {
  return (
    <div id="body">
      <NavBar/>
    </div>
  );
};

// Render contents
root.render(<App />);
