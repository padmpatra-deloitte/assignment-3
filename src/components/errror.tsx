import React from "react";
import { Link } from "react-router-dom";
import '../styles/error.scss'
function Error() {
    return (
        <div className="Error">
            <div className="container">
                <h1 >404</h1>
                <h4 className="h">OOPS. Looks like the page you're looking for no longer exists</h4>
                <p>Don't worry. Since you're valuable to us we will bring you back to safety

                </p>
                <Link to='/'><button>Back To Home</button></Link>
            </div>

        </div>
    );
}

export default Error;