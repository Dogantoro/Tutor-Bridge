/*function Register() {
    return (
        <div class="card container-sm p-5 loginForm">
            <form>
                <div class="mb-3">
                    <label for="nameInput" class="form-label">Name</label>
                    <input type="text" class="form-control" id="nameInput"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword"/>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                    <label class="form-check-label" for="invalidCheck">
                        Agree to terms and conditions
                    </label>
                    <div class="invalid-feedback">
                        You must agree before submitting.
                    </div>
                </div>
                <button type="submit" class="btn btn-primary loginSubmit mt-3">Sign Up</button>
            </form>
        </div>
    )
}*/

// library is already included in login.js so should not be included again

// Include Bootstrap CSS dynamically
// var link = document.createElement('link');
// link.rel = 'stylesheet';
// link.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css';
// document.head.appendChild(link);


//var parentDiv = document.getElementById('register-tab-pane');

// Function to create and append the registration form
/*function Register() {  // this function should return the component or append it inside the div with the "register-tab-pane"
    // Create the main div
    var div = document.createElement('div');
    div.className = 'card container-sm p-5 loginForm';

    // Create the form element
    var form = document.createElement('form');

    // Name field
    var divName = document.createElement('div');
    divName.className = 'mb-3';

    var labelName = document.createElement('label');
    labelName.setAttribute('for', 'nameInput');
    labelName.className = 'form-label';
    labelName.textContent = 'Name';

    var inputName = document.createElement('input');
    inputName.type = 'text';
    inputName.className = 'form-control';
    inputName.id = 'nameInput';

    divName.appendChild(labelName);
    divName.appendChild(inputName);

    // Email field
    var divEmail = document.createElement('div');
    divEmail.className = 'mb-3';

    var labelEmail = document.createElement('label');
    labelEmail.setAttribute('for', 'exampleInputEmail');
    labelEmail.className = 'form-label';
    labelEmail.textContent = 'Email address';

    var inputEmail = document.createElement('input');
    inputEmail.type = 'email';
    inputEmail.className = 'form-control';
    inputEmail.id = 'exampleInputEmail';
    inputEmail.setAttribute('aria-describedby', 'emailHelp');

    divEmail.appendChild(labelEmail);
    divEmail.appendChild(inputEmail);

    // Password field
    var divPassword = document.createElement('div');
    divPassword.className = 'mb-3';

    var labelPassword = document.createElement('label');
    labelPassword.setAttribute('for', 'exampleInputPassword');
    labelPassword.className = 'form-label';
    labelPassword.textContent = 'Password';

    var inputPassword = document.createElement('input');
    inputPassword.type = 'password';
    inputPassword.className = 'form-control';
    inputPassword.id = 'exampleInputPassword';

    divPassword.appendChild(labelPassword);
    divPassword.appendChild(inputPassword);

    // Checkbox
    var divCheck = document.createElement('div');
    divCheck.className = 'form-check';

    var inputCheck = document.createElement('input');
    inputCheck.className = 'form-check-input';
    inputCheck.type = 'checkbox';
    inputCheck.value = '';
    inputCheck.id = 'invalidCheck';
    inputCheck.required = true;

    var labelCheck = document.createElement('label');
    labelCheck.className = 'form-check-label';
    labelCheck.setAttribute('for', 'invalidCheck');
    labelCheck.textContent = 'Agree to terms and conditions';

    var divFeedback = document.createElement('div');
    divFeedback.className = 'invalid-feedback';
    divFeedback.textContent = 'You must agree before submitting.';

    divCheck.appendChild(inputCheck);
    divCheck.appendChild(labelCheck);
    divCheck.appendChild(divFeedback);

    // Submit button
    var buttonSubmit = document.createElement('button');
    buttonSubmit.type = 'submit';
    buttonSubmit.className = 'btn btn-primary loginSubmit mt-3';
    buttonSubmit.textContent = 'Sign Up';

    // Append all to the form
    form.appendChild(divName);
    form.appendChild(divEmail);
    form.appendChild(divPassword);
    form.appendChild(divCheck);
    form.appendChild(buttonSubmit);

    // Append form to div
    div.appendChild(form);

    // Append div to body
    document.body.appendChild(div);

    // Add event listener to form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Collect form data
        var name = inputName.value;
        var email = inputEmail.value;
        var password = inputPassword.value;
        var agree = inputCheck.checked;

        // Prepare data to send
        var data = {
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
        .then(function(response) {
            if (response.ok) {
                return response.text();
            }
            throw new Error('Network response was not ok.');
        })
        .then(function(data) {
            // Handle success
            console.log('Success:', data);
            if(data == email) {
                document.cookies = "login=true; path=/";
                alert('Registration successful!')
            }
        })
        .catch(function(error) {
            // Handle errors
            console.error('Error:', error);
            alert('Registration failed.');
        });
    });
}*/

// Initialize the registration form
// register();

// commented out the function call cause the component should be rendered in the App function in login.js

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
            return response.json();
          }
          throw new Error('Network response was not ok.');
        })
        .then(function (data) {
          // Handle success
          console.log('Success:', data);
          alert('Registration successful!');
        })
        .catch(function (error) {
          // Handle errors
          console.error('Error:', error);
          alert('Registration failed.');
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
  