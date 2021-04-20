import './../App.css';
import './../style/Nav.css'
function Nav() {
  return (
<nav className="navbar navbar-expand-lg navbar-dark bd-red-500">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">فتاة الثانوية التي هربت</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="/">الرئيسية</a>
        <a className="nav-link" href="#">القصة</a>
        <a className="nav-link" href="#">الشخصيات</a>
        <a className="nav-link" href="#">حول</a>
      </div>
    </div>
  </div>
</nav>
  );
}

export default Nav;