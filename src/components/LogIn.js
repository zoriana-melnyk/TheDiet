import React from "react";
import login from "../img/login.svg"

function LogIn() {

    // constructor(props) {
    //     super(props);
    // }
    return (
        <div className="base-constructor" ref={this.props.containerRef}>
            <div className="header">Login</div>
            <div className="content">
                <div className="image">
                    <img src={login} alt="login-img" />
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" placeholder="username" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" placeholder="password" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type="buttton" className="btn">Login</button>
            </div>
        </div>
    );
}
export { LogIn };