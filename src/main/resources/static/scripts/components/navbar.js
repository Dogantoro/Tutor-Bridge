function NavBar() {
  var NavEnd = <div></div>;

  if (document.cookie.includes("login=true")) {
    NavEnd = (
      <a class="navbar-brand nav-icon" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
        <i class="bi bi-person-circle"></i>
      </a>
    );
  }
  else {
    NavEnd = (
      <div class="btn-group">
        <a class="btn btn-outline-light" href="./login.html">Login</a>
        <a class="btn btn-outline-light" href="./login.html">Register</a>
      </div>
    );
  }

  return (
  <nav class="navbar navbar-expand-sm bg-primary sticky-top" data-bs-theme="dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="./index.html">Tutor Bridge</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="./listings.html">Search Tutors</a>
          </li> 
        </ul>
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            {NavEnd}
          </li>
        </ul> 
      </div>
    </div>
  </nav>
  );
}
