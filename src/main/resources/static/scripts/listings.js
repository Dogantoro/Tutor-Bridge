// Set root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Set up page
const App = () => {
  return (
    <div>
      <NavBar/>
      <FormattedListings/>
    </div>
  );
};

// Render contents
root.render(<App />);

var cards = [<ListingCard name="Jane Doe" subjects="prog 1, chemistry" bio="This is some stuff about me :)" id='1'/>,
        <ListingCard name="Emma" subjects="DSA" bio="This is some stuff about me :)" id='2'/>];

function FormattedListings() {
  return (
    <div class="row">
      <div class="col-3"><ListingCard name="Jane Doe" subjects="prog 1, chemistry" bio="Passionate about teaching students!" id='1'/></div>
      <div class="col-3"><ListingCard name="John Doe" subjects="DSA, Calculus 3" bio="TA for both classes. Text me for tutoring?" id='1'/></div>
    </div>
  )
}
