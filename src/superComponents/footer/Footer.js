import React from "react";
import "./Footer.css";


function Footer() {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 footer-contact">
              <h3>Chess In Lakecity</h3>
              <p>
                Chess in Lakecity Office:<br /> Dagliyo ki Mangri,
                Opp Celebration Mall, Bhuvana, Udaipur, 313001
                <br />
                <strong>Phone:</strong> +91-9829476158, 9413045606{" "}
                <i className="fa fa-whatsapp"></i>, 7976840672
                <br />
                <strong>Email:</strong> lakecitychess64@gmail.com
              </p>
            </div>

            <div className="col-lg-4 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i> <a href="index.php">Home</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i> <a href="about.php">About Us</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i> <a href="news.php">News</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i> <a href="registration.php">Registration</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i> <a href="contact.php">Contact Us</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 footer-links">
              <h4>Get Social With Us</h4>
              <div className="social-links mt-3">
                <a href="https://www.facebook.com/chessinlakecity/?ref=pages_you_manage" className="facebook">
                <i class="bi bi-facebook"></i>
                </a>
                <a href="https://instagram.com/chessinlakecity?igshid=YmMyMTA2M2Y=" className="instagram">
                <i class="bi bi-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/chessinlakecity-chess-274632240/" className="linkedin">
                <i class="bi bi-linkedin"></i>
                </a>
              </div>
              <br />
              <h4>Other links</h4>
              <a href="https://www.facebook.com/chessinlakecity">
                <img src="assets/11.png" width="50" height="50"/>
              </a>
              <a href="https://www.facebook.com/Fide-Rated-Chess-Tournament-in-lakecity-1772683306284269/">
                <img src="assets/sp.png" width="50" height="50" className="bg-light"/>
              </a>
              <a href="https://www.facebook.com/Buddhibal-SEVA-Sansthan-Udaipur-753504884704033/?ref=pages_you_manage">
                <img src="assets/sp5.png" width="50" height="50"/>
              </a>
            </div>
          </div>
          <div className="d-flex flex-column align-items-center align-items-lg-start">
            <div className="copyright">
              &copy; Copyright <strong><span>ChessInLakeCity</span></strong>. All Rights Reserved
            </div>
            <div className="credits">
              Designed by: KeenInfotech
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
