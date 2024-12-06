function Login() {
    // State variables for form inputs
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
  
    // Handle form submission
    const handleSubmit = (event) => {
      event.preventDefault(); // Prevent default form submission
  
      // Prepare data to send
      const data = {
        email: email,
        password: password,
      };
  
      // Send POST request
      fetch('/login', { // Replace '/login' with your actual login endpoint
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
        .then(function (data) {
          if (data == "success!") { // if login successful
            document.cookie = "login=true; path=/";
            document.cookie = "loginRecent=true; path=/";
            
            window.location.pathname = "/listings.html"; // redirect to listings page
          }
          else { // if unsucessful
            ReactDOM.createRoot(document.getElementById('alertLocal'))
              .render(<FailureAlert text="Account not found, try again"/>);
          }
          // Redirect or perform other actions upon successful login
        })
        .catch(function (error) {
          // Handle errors
          // console.error('Error:', error);
          // alert('Login failed.');
        });
    };
  
    return (
      <div className="card container-sm p-5 loginForm">
        <form onSubmit={handleSubmit}>
          {/* Email field */}
          <div className="mb-3">
            <label htmlFor="loginEmail" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="loginEmail"
              aria-describedby="emailHelp"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
  
          {/* Password field */}
          <div className="mb-3">
            <label htmlFor="loginPassword" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="loginPassword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
  
          {/* Submit button */}
          <button type="submit" className="btn btn-primary loginSubmit mt-3">
            Login
          </button>
        </form>
      </div>
    );
  }
  