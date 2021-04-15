import React from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import "../../css/googleBtn.css";
import googleLogo from "../../logos/google.png";
const clientId =
  "208996301348-dk6n07licdht39sujvffjqifo0m35tal.apps.googleusercontent.com";

export function GLogin(props) {
  const onSucces = (res) => {
    console.log("[Login Success] currentUser:", res.profileObj);
  };

  const onFailure = (res) => {
    console.log("[Login failed] res:", res);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="구글계정으로 로그인"
        render={(renderProps) => (
          <button
            className="gbtnBox"
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >
            <img className="google_logo" src={googleLogo} alt="" />
            <div className="gbtnText">구글계정으로 로그인</div>
          </button>
        )}
        onSuccess={onSucces}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        insSignedIn={true}
      />
    </div>
  );
}

export function Logout() {
  const onSuccess = () => {
    alert("Logout made successfully 🍊");
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}
