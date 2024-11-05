function NavBar() {
  return (
  <nav class="navbar navbar-expand-lg bg-primary"data-bs-theme="dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="./index.html">Tutor Bridge</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="./index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./login.html">Login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./login.html">Register</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./listings.html">Listings</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
}
