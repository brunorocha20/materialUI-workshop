import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
const auth = firebase.auth();

function SignOut() {
  return (
    auth.currentUser && (
      <button className="button-57" onClick={() => auth.signOut()}>
        <span className="text">Sign Out</span>
        <span>Don't 😢</span>
      </button>
    )
  );
}

export default SignOut;
