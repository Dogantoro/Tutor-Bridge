/*function Login(){
    return (
        <div class="card container-sm p-5 loginForm">
            <form id="myForm">
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input name="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input name="password" type="password" class="form-control" id="exampleInputPassword1"/>
                </div>
                <button type="submit" class="btn btn-primary loginSubmit mt-3">Sign In</button>
            </form>
        </div>
    )
}*/

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
            return response.json();
          }
          throw new Error('Network response was not ok.');
        })
        .then(function (data) {
          // Handle success
          console.log('Success:', data);
          alert('Login successful!');
          // Redirect or perform other actions upon successful login
        })
        .catch(function (error) {
          // Handle errors
          console.error('Error:', error);
          alert('Login failed.');
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
  