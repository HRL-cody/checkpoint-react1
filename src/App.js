import React from "react";
import logo from "./logo.svg";

import "./App.css";

function App() {
  return (
    <div className="App">
      
      <h1>sign up to be hired</h1>
      <body>
      <form>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4">Email</label>
            <input type="email" className="form-control" id="inputEmail4" />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword4">Password</label>
            <input
              type="password"
              className="form-control"
              id="inputPassword4"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress">Address</label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="1002 tunis"
          />
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputCity">City</label>
            <input type="text" className="form-control" id="inputCity" />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="inputState">State</label>
            <select id="inputState" className="form-control">
              <option selected>Choose...</option>
              <option>Tunis</option>
              <option>Ben Arous</option>
              <option>Manouba</option>
              <option>Bizert</option>
              <option>Beja</option>
              <option>Nabeul</option>
              <option>sousse</option>
              <option>Monastir</option>
              <option>Mahdia</option>
              <option>Kairouan</option>
              <option>Kef</option>
              <option>Jandouda</option>
              <option>kbeli</option>
              <option>Kasserine</option>
              <option>Medenine</option>
              <option>Tataouin</option>
              <option>Touzeur</option>
              <option>Zaghwen</option>
              <option>Siliana</option>
              <option>Sidi Bouzid</option>
              <option>sfax</option>
              <option>Gabes</option>
              <option>Gafsa</option>
              <option>tataouin</option>
            </select>
          </div>
          <div className="form-group col-md-2">
            <label htmlFor="inputZip">Zip</label>
            <input type="text" className="form-control" id="inputZip" />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="inputState">What Are You Looking For</label>
            <select id="inputState" className="form-control">
              <option selected>Choose...</option>
              <option>Final Year Study Project Traineeship</option>
              <option>Internship</option>
              <option>postgraduate jobs</option>
            </select>
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="inputState">speciality</label>
            <select id="inputState" className="form-control">
              <option selected>Choose...</option>
              <option>Engeneering</option>
              <option>Web developement</option>
              <option>salesman</option>
            </select>
          </div>
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="inputState">Univercity</label>
          <select id="inputState" className="form-control">
            <option selected>Choose...</option>
            <option>ISET</option>
            <option>ISIT COM</option>
            <option>ESPRIT</option>
          </select>
        </div>
        <div className="form-group">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
            />
            <label className="form-check-label" htmlFor="gridCheck">
              I agree To the term of Service
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Sign in
        </button>
        <button type="submit" className="btn btn-primary">
          LOG IN INSTEAD
        </button>
      </form>
      </body>
      
    </div>
  );
}

export default App;
