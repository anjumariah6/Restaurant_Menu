import {signOut } from "firebase/auth";
import { auth } from "./Firebase";

function Logout() {
    signOut(auth)
      .then(() => {
        alert('Sign out successful');
      })
      .catch((error) => console.log(error));
}

export default Logout