import React, { useState } from "react";
import { useCookies, removeCookie } from "react-cookie";
import { Link, useHistory, useParams } from "react-router-dom";

function Header(props) {
  const [cookies, setCookie, removeCookie] = useCookies([""]);
  let history = useHistory();
  function handelLogout() {
    console.log("logout");
    removeCookie('access_token');
    removeCookie('user_info');
    history.push("/login");
  }

  return (
    <header className="c-header c-header-light c-header-fixed c-header-with-subheader">
      <button className="c-header-toggler c-class-toggler d-lg-none mfe-auto" type="button" data-target="#sidebar" data-class="c-sidebar-show">
        <svg className="c-icon c-icon-lg">
          <use xlinkHref="node_modules/@coreui/icons/sprites/free.svg#cil-menu" />
        </svg>
      </button><a className="c-header-brand d-lg-none" href="#">
        <svg width={118} height={46} alt="CoreUI Logo">
          <use xlinkHref="assets/brand/coreui.svg#full" />
        </svg></a>
      <button className="c-header-toggler c-class-toggler mfs-3 d-md-down-none" type="button" data-target="#sidebar" data-class="c-sidebar-lg-show" responsive="true">
        <svg className="c-icon c-icon-lg">
          <use xlinkHref="node_modules/@coreui/icons/sprites/free.svg#cil-menu" />
        </svg>
      </button>
      <ul className="c-header-nav d-md-down-none">
        <li className="c-header-nav-item px-3"><a className="c-header-nav-link" href="#">Dashboard</a></li>
        <li className="c-header-nav-item px-3"><a className="c-header-nav-link" href="#">Users</a></li>
        <li className="c-header-nav-item px-3"><a className="c-header-nav-link" href="#">Settings</a></li>
      </ul>
      <ul className="c-header-nav ml-auto mr-4">
        <li className="c-header-nav-item d-md-down-none mx-2"><a className="c-header-nav-link" href="#">
          <svg className="c-icon">
            <use xlinkHref="node_modules/@coreui/icons/sprites/free.svg#cil-bell" />
          </svg></a></li>
        <li className="c-header-nav-item d-md-down-none mx-2"><a className="c-header-nav-link" href="#">
          <svg className="c-icon">
            <use xlinkHref="node_modules/@coreui/icons/sprites/free.svg#cil-list-rich" />
          </svg></a></li>
        <li className="c-header-nav-item d-md-down-none mx-2"><a className="c-header-nav-link" href="#">
          <svg className="c-icon">
            <use xlinkHref="node_modules/@coreui/icons/sprites/free.svg#cil-envelope-open" />
          </svg></a></li>
        <li onClick={(e) => handelLogout} className="c-header-nav-item dropdown"><a className="c-header-nav-link" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
          <div className="c-avatar">Thoát:<img className="c-avatar-img" src="https://coreui.io/demo/free/3.4.0/assets/img/avatars/6.jpg" alt="user@email.com" /></div>
        </a>
        </li>
      </ul>
      <div className="c-subheader px-3">
        {/* Breadcrumb*/}
        <ol className="breadcrumb border-0 m-0">
          <li className="breadcrumb-item">Home</li>
          <li className="breadcrumb-item"><a href="#">Admin</a></li>
          <li className="breadcrumb-item active">Dashboard</li>
          {/* Breadcrumb Menu*/}
        </ol>
      </div>
    </header>
  );
}

export default Header;