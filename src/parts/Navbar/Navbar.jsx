import React from "react";
import { Link } from "react-router-dom";
import {
  IconAvatarmention,
  IconNotification,
  IconSettings,
  ImageBackground,
  ImageUserProfile,
} from "../../assets";

const Navbar = () => {
  return (
    // Navbar
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary text-uppercase">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              class="navbar-nav me-auto mb-2 mb-lg-0"
              style={{ fontSize: "18px" }}
            >
              <li class="nav-item">
                <a
                  class="nav-link active text-light fw-bold"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="#">
                  Profile Management
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="#">
                  Data Search
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="#">
                  Attack Monitoring
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="#">
                  Avatar Management
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="#">
                  Report
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link text-light" href="#">
                  Audit Trails
                </a>
              </li>
            </ul>
            <div className="d-flex gap-4 me-4">
              <img
                src={IconNotification}
                alt="Notifikasi"
                style={{ height: "20px" }}
              />
              <img
                src={IconSettings}
                alt="Setting"
                style={{ height: "20px" }}
              />
            </div>
            <div>
              <img src={ImageUserProfile} alt="Avatar" className="w-75 mt-2" />
            </div>
            {/* <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
