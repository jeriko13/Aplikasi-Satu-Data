import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";

// views without layouts

import Promosi from "views/tombol/Promosi.js";
import Informasi from "views/tombol/Informasi.js";
import Peta1 from "views/tombol/Peta1.js";
import Peta from "views/tombol/Peta.js";

import Landing from "views/Landing.js";
import Landing2 from "views/Landing2.js";
import Landing3 from "views/Landing3.js";
import Profile from "views/Profile.js";
import Beranda from "views/Beranda.js";
import Index from "views/Index.js";
//import HalamanUtama from "views/bda/HalamanUtama";

import KinerjaOpd from "views/grafik/KinerjaOpd";
import Dashboard from "views/admin/Dashboard";
import Pencarian from "views/Pencarian";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* add routes with layouts */}
      <Route path="/promosi/:id" component={Promosi} />
      <Route path="/informasi/:id" component={Informasi} />
      <Route path="/dashboard" component={Admin} />
      <Route path="/pencarian/:keys" component={Pencarian} />
      <Route path="/peta1/:id" component={Peta1} />
      <Route path="/peta" component={Peta} />
      <Route path="/auth" component={Auth} />
      {/* add routes without layouts */}
      <Route path="/landing" exact component={Landing} />
      <Route path="/landing2" exact component={Landing2} />
      <Route path="/landing3" exact component={Landing3} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/grafik/kinerja-opd" component={KinerjaOpd} />
      <Route path="/" exact component={Beranda} />
      {/* add redirect for first page */}
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
