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

// cards = [<ListingCard name="Jane Doe" subjects="prog 1, chemistry" bio="This is some stuff about me :)" id='1'/>,
//         <ListingCard name="Emma" subjects="DSA" bio="This is some stuff about me :)" id='2'/>];

// function FormattedListings (props) {
//   var toReturn = <div id="listings">;
//    i = 0;
//   for (i in props.cards) {
//     toReturn += <div class="col-3"> {props.cards[i]} </div>

//   }

//   toReturn += </div>;

//   return toReturn;
// }
