// Initialize the registration form
function Register() {
    // State variables for form inputs
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [agree, setAgree] = React.useState(false);
  
    // Handle form submission
    const handleSubmit = (event) => {
      event.preventDefault(); // Prevent default form submission
  
      // Prepare data to send
      const data = {
        name: name,
        email: email,
        password: password,
        agree: agree
      };
  
      // Send POST request
      fetch('/register', { // Replace '/register' with your endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(function (response) {
          if (response.ok) {
            return response.text();
          }
          throw new Error('Network response was not ok.');
        })
        .then(function (data) {
          if (data == email) { // set cookie if registration was sucessful
            document.cookie = "login=true; path=/";
            document.cookie = "registerRecent=true; path=/";
            
            window.location.pathname = "/listings.html"; // redirect to listings page
          }
          else { // if unsucessful
            ReactDOM.createRoot(document.getElementById('alertLocal'))
              .render(<FailureAlert text="This email has already been used. Try another one."/>);
          }
        })
        .catch(function (error) {
          // Handle errors
          // console.error('Error:', error);
          // alert('Registration failed.');
        });
    };
  
    return (
      <div className="card container-sm p-5 loginForm">
        <form onSubmit={handleSubmit}>
          {/* Name field */}
          <div className="mb-3">
            <label htmlFor="nameInput" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="nameInput"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
  
          {/* Email field */}
          <div className="mb-3">
            <label htmlFor="exampleInputEmail" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail"
              aria-describedby="emailHelp"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
  
          {/* Password field */}
          <div className="mb-3">
            <label htmlFor="exampleInputPassword" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
  
          {/* Checkbox */}
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="invalidCheck"
              required
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="invalidCheck">
              Agree to terms and conditions
            </label>
            <div className="invalid-feedback">
              You must agree before submitting.
            </div>
          </div>
  
          {/* Submit button */}
          <button type="submit" className="btn btn-primary loginSubmit mt-3">
            Sign Up
          </button>
        </form>
      </div>
    );
  }
  