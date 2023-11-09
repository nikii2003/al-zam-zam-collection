import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";


function Footer() {
  return (
    <div>
      <footer>
        <div className="footer-div">
          <h1 className="al-zam-zam-collecton-heading">
            Al-ZAM-ZAM-COLLECTION
          </h1>
          <p className="footer-desciption">
          "Welcome to Al-Zam-Zam Collection, your ultimate resource for outstanding tutorials<br/> on e-commerce brilliance. will find great  Upgrade your shopping at Al-Zam-Zam Collection—simple
            <br/> guides for effortless orders and speedy deliveries. Power up your digital commerce journey,<br/> tailored exclusively to make online shopping
          </p>
          <div className="footer-icon-img">
        <Link to="https://www.linkedin.com/in/nikitakadiwike/"> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAARVBMVEVHcEwAd7UAd7X///8Ad7UAd7UAd7UAd7UAd7UAd7UAcLIAaq4AZawAdbTB2ura7PVroMp1p80re7fy+fyrzOJSkMKHs9TfsXiuAAAACnRSTlMA2f//Q7YW91eNyjh/sgAAAOFJREFUOI3dk9sOgzAIhmurq7Zgz77/ow5ajcvSuvv9F0LKFwIIQoh50X0ts2BtcqyN4utDvBITWzQGe3GthahxG4I13RQzAyYmpVLs5lgZgKxIO4wBx4CzY2D/kUFaxwnGNVCX3n/2iYhfgAXgBMaS6BtjvLquAJZMKmgOtlBcSsl5uAETuMjDWC7WedWU4QbqW2hAUpcKdoFbNUUPOIpvkxsAGaiNSto+UCSes+XRdIrkv/oMyL8FHImAzJaB5jVAMwEk2hDaG2ibVz12Xo+nKeUiztsbaHrV8x5cv5Ybxd/u3ReZwFWTfAAAAABJRU5ErkJggg=="  className="img1"/></Link>
         <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAbFBMVEVHcEwAqkUAqkUAqkUAqkUAqkUAqkUAqkUAqkUAqkUAqkUAsEYHn0IcUDMERyQAZi4ZaDg/Qke8vL62trioqKt5eH0AAAQhHSr///+Gh4ohJSyVlJjt7u78/PwPHB/Pz9BlY2kOfjoKCRkhNi9cT4LSAAAAC3RSTlMAN3yoyN7y+/+5uI5418wAAAElSURBVHgBdJIHkoMwDEVFF727pnrvf0bKYBOLTd6UBHhqMx8cQRjFSZohZmkSR2EAhCDHfxSeE+FXIrAk+J0s+VlPegRoKR2ese+R289V3Ry01UcpNsF+7+p+GHemmTUf5ZxQct4Lh2SnEUBoBaWcsDGyygohRESYpdS3vUdTujtiX7izx+PBntsf1yKGhAo1V4ptLV7vo0UCKRXKSimztdDtIaSQUWG7VzFPyACvwpsbbwRehbalSyIdIaTW030/152Z0SUdE0NLSs603Gc3YD8zJsI0TfrFGjyJIaJLGmP4u/QjE1Kh7t7oJyaEgIxgLlBepE5hD4zBCwBQOEEZ09RIKc7Qln87dj0ywcV+HXKCRvgBf8bhYCWU9fBnXk5I5iWY/QHACSzdofpmggAAAABJRU5ErkJggg=="className="img1"/>
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdpglznF0U2kN9xuifTHG6LzBx3cCL7jVyJHCufkW2vyZr-Ua0CUZ1&s=0" className="img1"/>
        
        </div>
        </div>

      </footer>
    </div>
  );
}

export default Footer;
