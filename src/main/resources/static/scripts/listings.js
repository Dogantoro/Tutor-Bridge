// Set root element
const root = ReactDOM.createRoot(document.getElementById('root'));

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
  var name = "Name Here";
  var email = "example@gmail.com";

  return (
  <div class="modal fade" id="make-post-modal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl modal-fullscreen-sm-down modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title mx-auto fs-3" id="staticBackdropLabel">Make a Post</h1>
        </div>
        <div class="modal-body">
          <form>
            <div class="row mx-2 g-3">
              <div class="col-6">
                <label for="nameInput">Name</label>
                <input type="email" readonly class="form-control-plaintext" id="nameInput" placeholder={name} disabled></input>
              </div>

              <div class="col-6">
                <label for="emailInput">Email</label>
                <input type="email" readonly class="form-control-plaintext" id="emailInput" placeholder={email} disabled></input>
              </div>
              
              <div class="col-6">
                <label for="contactInput" class="form-label">Contact Info.</label>
                <input type="text" class="form-control" id="contactInput" placeholder="Contact Info." aria-label="Contact Info."></input>
              </div>

              <div class="col-6">
                <label for="rateInput" class="form-label">Hourly Rate</label>
                <input type="text" class="form-control" id="rateInput" placeholder="Hourly Rate" aria-label="Hourly Rate"></input>
              </div>

              <div class="col-6">
                <label for="payMethInput" class="form-label">Payment Method</label>
                <input type="text" class="form-control" id="payMethInput" placeholder="Payment Method" aria-label="Payment Method"></input>
              </div>

              <div class="col-6">
                <label for="classesInput" class="form-label">Classes</label>
                <input type="text" class="form-control" id="classesInput" placeholder="Classes you can tutor" aria-label="Classes you can tutor"></input>
              </div>

              <div class="col-12">
                <label for="aboutInput" class="form-label">About</label>
                <textarea class="form-control" id="aboutInput" placeholder="About you" aria-label="About you" rows="2"></textarea>
              </div>

              <div class="col-12">
                <label for="addInfoInput" class="form-label">Additional Info.</label>
                <textarea class="form-control" id="addInfoInput" placeholder="Additional Info." aria-label="Additional Info." rows="1"></textarea>
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
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

