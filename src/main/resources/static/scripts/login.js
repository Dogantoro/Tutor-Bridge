// Set root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Set up page
const App = () => {
  return (
    <div>
        <NavBar/>
        <Login/>
    </div>
  );
};

// Render contents
root.render(<App />);

function Login(){
    return (
        <div class="card container-sm p-5 loginForm">
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="InputPassword"/>
                </div>
                <div class="form-check">
                </div>
                <button type="submit" class="btn btn-primary loginSubmit mt-3">Sign In</button>
            </form>
        </div>
    )
}
