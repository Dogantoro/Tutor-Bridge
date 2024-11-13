// Set root element
const root = ReactDOM.createRoot(document.getElementById('root'));

document.cookie = "login=true";

// Set up page
const App = () => {
  return (
    <div>
        <NavBar/>
        <FormattedListings/>
        <FloatingButton/>
        <PostModal/>
      </div>
  );
};

// Render contents
root.render(<App />);


function FormattedListings() {
  var cards = [];

  cards[0] = <ListingCard name="Jane Doe" subjects="Prog 1, Chemistry" bio="Passionate about teaching students!" id='1' rate='15'/>;
  cards[1] = <ListingCard name="John Doe" subjects="DSA, Calculus 3" bio="TA for both classes. Text me for tutoring?" id='2' rate='12'/>;

  return (
    <div class="row m-3 mt-4" data-masonry='{"percentPosition": true }'>
      {cards}
      {cards}
      {cards}
      {cards}
    </div>
  )
}


function FloatingButton () {
  var postExists = false;

  if (!document.cookie.includes("login=true")) {
    return null;
  }

  if (postExists) {
    return (
      <div class="floating-button-div">
        <button class="fb btn btn-primary shadow" data-bs-toggle="modal" data-bs-target="#make-post-modal">
          <i class="bi bi-pencil"></i>
        </button>
      </div>
    );
  }
  else {
    return (
      <div class="floating-button-div">
        <a class="fb btn btn-primary shadow" data-bs-toggle="modal" data-bs-target="#make-post-modal">
          <i class="bi bi-plus-lg"></i>
        </a>
      </div>
    );
  }
}

function PostModal() {
  return (
  <div class="modal fade" id="make-post-modal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-fullscreen-sm-down">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">Make a Post</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <input type="email" readonly class="form-control-plaintext" id="floatingEmptyPlaintextInput" placeholder="name@example.com"></input>
            <label for="floatingEmptyPlaintextInput">Empty input</label>
            
            <input type="text" class="form-control" placeholder="Contact Info." aria-label="Contact Info."></input>
            <input type="text" class="form-control" placeholder="Hourly Rate" aria-label="Hourly Rate"></input>
            <input type="text" class="form-control" placeholder="Payment Method" aria-label="Payment Method"></input>
            <input type="text" class="form-control" placeholder="Classes you can tutor" aria-label="Classes you can tutor"></input>
            <input type="text" class="form-control" placeholder="About you" aria-label="About you"></input>
            <input type="text" class="form-control" placeholder="Additional Info." aria-label="Additional Info."></input>

          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary">Post</button>
        </div>
      </div>
    </div>
  </div>
  );
}

// bottom right button functionality
var floatingButtonContainer = document.querySelector('.floating-button-div');
var scrollY = window.scrollY;
window.addEventListener('scroll', function() {
  scrollY = window.scrollY;
  //floatingButtonContainer.style.top = scrollY + window.innerHeight - 150 + 'px';
});  

