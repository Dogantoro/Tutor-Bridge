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

/*function PostModal() {
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
}*/

function PostModal() {
  var name = "Name Here";
  var email = "example@gmail.com";

  // State variables for form inputs
  const [contactInfo, setContactInfo] = React.useState('');
  const [hourlyRate, setHourlyRate] = React.useState('');
  const [paymentMethod, setPaymentMethod] = React.useState('');
  const [classes, setClasses] = React.useState('');
  const [about, setAbout] = React.useState('');
  const [additionalInfo, setAdditionalInfo] = React.useState('');

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    // Prepare data to send
    const data = {
      name: name,
      email: email,
      contact: contactInfo,
      price: hourlyRate,
      paymentMethod: paymentMethod,
      classes: classes,
      description: about,
      additionalInfo: additionalInfo,
    };

    // Send POST request
    fetch('/make-post', { // Replace '/make-post' with your actual endpoint
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(function (response) {
        if (response.ok) {
          return response.text();
        }
        throw new Error('Network response was not ok.');
      })
      .then(function (responseData) {
        // Handle success
        console.log('Success:', responseData);
        alert('Post submitted successfully!');
        // Optionally reset form fields
        setContactInfo('');
        setHourlyRate('');
        setPaymentMethod('');
        setClasses('');
        setAbout('');
        setAdditionalInfo('');
        // Optionally close the modal programmatically
      })
      .catch(function (error) {
        // Handle errors
        console.error('Error:', error);
        alert('Post submission failed.');
      });
  };

  return (
    <div
      className="modal fade"
      id="make-post-modal"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl modal-fullscreen-sm-down modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title mx-auto fs-3" id="staticBackdropLabel">
              Make a Post
            </h1>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="row mx-2 g-3">
                <div className="col-6">
                  <label htmlFor="nameInput">Name</label>
                  <input
                    type="text"
                    readOnly
                    className="form-control-plaintext"
                    id="nameInput"
                    value={name}
                    disabled
                  />
                </div>

                <div className="col-6">
                  <label htmlFor="emailInput">Email</label>
                  <input
                    type="email"
                    readOnly
                    className="form-control-plaintext"
                    id="emailInput"
                    value={email}
                    disabled
                  />
                </div>

                <div className="col-6">
                  <label htmlFor="contactInput" className="form-label">
                    Contact Info.
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="contactInput"
                    placeholder="Contact Info."
                    aria-label="Contact Info."
                    value={contactInfo}
                    onChange={(e) => setContactInfo(e.target.value)}
                  />
                </div>

                <div className="col-6">
                  <label htmlFor="rateInput" className="form-label">
                    Hourly Rate
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="rateInput"
                    placeholder="Hourly Rate"
                    aria-label="Hourly Rate"
                    value={hourlyRate}
                    onChange={(e) => setHourlyRate(e.target.value)}
                  />
                </div>

                <div className="col-6">
                  <label htmlFor="payMethInput" className="form-label">
                    Payment Method
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="payMethInput"
                    placeholder="Payment Method"
                    aria-label="Payment Method"
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                </div>

                <div className="col-6">
                  <label htmlFor="classesInput" className="form-label">
                    Classes
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="classesInput"
                    placeholder="Classes you can tutor"
                    aria-label="Classes you can tutor"
                    value={classes}
                    onChange={(e) => setClasses(e.target.value)}
                  />
                </div>

                <div className="col-12">
                  <label htmlFor="aboutInput" className="form-label">
                    About
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="aboutInput"
                    placeholder="About you"
                    aria-label="About you"
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                  />
                </div>

                <div className="col-12">
                  <label htmlFor="addInfoInput" className="form-label">
                    Additional Info.
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="addInfoInput"
                    placeholder="Additional Info."
                    aria-label="Additional Info."
                    value={additionalInfo}
                    onChange={(e) => setAdditionalInfo(e.target.value)}
                  />
                </div>
              </div>
              <div className="modal-footer mt-3">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit" className="btn btn-primary">
                  Post
                </button>
              </div>
            </form>
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

