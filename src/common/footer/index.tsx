import "bootstrap/dist/css/bootstrap.min.css";
import LogoOffHouse from "../../assets/images/logo_off_house.png";
import "./footer-custom.css";

const Footer = () => {
  return (
    <footer className="bg-transparent text-dark pt-4 pb-2 mt-5 ">
      <div className="container">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-5 text-center text-md-start ">
          <div>
            <img
              src={LogoOffHouse}
              alt="OffHouse"
              className="me-3 mobile-logo-footer"
              style={{ width: "120px", height: "120px" }}
            />
          </div>

          <div className="me-3">
            <h5 className="fw-bold mobile-font-footer">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="#home"
                  className="text-dark text-decoration-none mobile-font-footer"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#locations"
                  className="text-dark text-decoration-none mobile-font-footer"
                >
                  Locations
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-dark text-decoration-none mobile-font-footer"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#work-with-us"
                  className="text-dark text-decoration-none mobile-font-footer"
                >
                  Work With Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="fw-bold mobile-font-footer">Follow Us</h5>
            <div className="d-flex justify-content-center justify-content-md-start gap-3 align-items-center">
              <a
                href="https://www.instagram.com/offhouse.barbershop"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark "
              >
                <i className="fab fa-instagram mobile-icons-footer"></i>
              </a>
              <a
                href="https://wa.me/6282288149225?text=Halo%20BarberShop%20OffHouse%2C%20saya%20ingin%20booking%20jadwal%20cukur.%20Apakah%20ada%20slot%20kosong%20hari%20ini%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark "
              >
                <i className="fab fa-whatsapp fa-lg mobile-icons-footer"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="text-center pt-3 border-top border-secondary mt-4">
          <small className="mobile-font-footer">
            &copy; {new Date().getFullYear()} OffHouse. All rights reserved.
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
