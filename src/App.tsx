import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LogoOffHouse from "../src/assets/images/logo_off_house.png";
import Footer from "./common/footer";

function App() {
  return (
    <>
      <nav className="navbar navbar-light bg-transparent fixed-top py-3">
        <div className="container-fluid">
          <div className="d-flex d-lg-none justify-content-between align-items-center w-100">
            <img
              src={LogoOffHouse}
              alt="OffHouse"
              style={{ width: "80px", height: "80px" }}
            />
            <ul className="navbar-nav d-flex flex-row gap-3">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  <span className="fw-bold mobile-font">HOME</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#locations">
                  <span className="fw-bold mobile-font">LOCATIONS</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  <span className="fw-bold mobile-font">SERVICES</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#work-with-us">
                  <span className="fw-bold mobile-font">WORK WITH US</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="container d-none d-lg-flex justify-content-center align-items-center px-5 gap-5">
            <img
              src={LogoOffHouse}
              alt="OffHouse"
              className="me-5"
              style={{
                width: "120px",
                height: "120px",
              }}
            />

            <ul className="navbar-nav d-flex flex-row gap-4">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  <span className="fw-bold">HOME</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#locations">
                  <span className="fw-bold">LOCATIONS</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  <span className="fw-bold">SERVICES</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#work-with-us">
                  <span className="fw-bold">WORK WITH US</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div
        id="home"
        style={{
          paddingTop: "100px",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p className="fw-bold">Home Section</p>
      </div>
      <div
        id="locations"
        style={{
          paddingTop: "100px",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p className="fw-bold">Locations Section</p>
      </div>
      <div
        id="services"
        style={{
          paddingTop: "100px",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p className="fw-bold">Services Section</p>
      </div>
      <div
        id="work-with-us"
        style={{
          paddingTop: "100px",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p className="fw-bold">Work With Us Section</p>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
