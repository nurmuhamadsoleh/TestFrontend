import {
  ButtonComponent,
  ButtonOutline,
  ButtonOutlineSmall,
  ButtonOutliteIconLeft,
  ButtonProfile,
  ButtonSolid,
} from "../../component";
import "../../assets/css/background.css";
import { Link } from "react-router-dom";
import React from "react";
import { api, colors } from "../../utils";
import { Navbar } from "../../parts";
import {
  IconAvatarmention,
  IconDataleak,
  IconHotTopic,
  IconLastetsdataleak,
  IconNext,
  IconProfileMonitoring,
  ImageFigure1,
  ImageFigure2,
  ImageFigure3,
  ImageFigure4,
  ImageUserProfile,
} from "../../assets";
import ButtonSmallSolid from "../../component/Button/ButtonSmallSolid";

const Home = () => {
  return (
    <div className="box">
      {/* <div style={{ marginLeft: "20px" }}>
        <ButtonComponent button={"Simpan"} />
        <ButtonOutliteIconLeft name={"link"} />
        <ButtonOutliteIconLeft name={"download"} />
        <ButtonSolid name={"edit user"} />
        <h1 style={{ fontFamily: "source_sans_prolight" }}>
          Nur Muhamad Soleh
        </h1>
        <ButtonOutlineSmall logo={"."} name={"bot account-1"} />
        <ButtonOutlineSmall logo={"."} name={"bot account-2"} />
        <ButtonOutlineSmall logo={"."} name={"bot account-3"} />
        <ButtonOutline name={"Search"} />
        {api}
      </div> */}
      <Navbar />
      {/* Content*/}
      <section id="about" className="about py-4">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 d-flex justify-content-lg-start align-content-lg-center">
              <div className="me-3">
                <img
                  src={ImageUserProfile}
                  alt="userprofile"
                  className="w-auto"
                />
              </div>
              <div className="flex-wrap">
                <h4 className="fw-bold" style={{ color: colors.white }}>
                  Nur Muhamad Soleh
                </h4>
                <span style={{ color: colors.white }}>
                  Lastets login at 16 Oct 2022 10:24 PM
                </span>
                <div className="mt-4">
                  <ButtonOutlineSmall logo={"."} name={"bot account-1"} />
                  <ButtonOutlineSmall logo={"."} name={"bot account-2"} />
                  <ButtonOutlineSmall logo={"."} name={"bot account-3"} />
                </div>
                <div className="mt-5">
                  <ButtonSolid name={"edit user"} />
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-lg-end align-content-lg-start">
              <div className="mt-3" style={{ position: "relative" }}>
                <form>
                  <input
                    type="text"
                    placeholder="keyword search here"
                    style={{
                      height: "40px",
                      borderRadius: "30px",
                      backgroundColor: "transparent",
                      color: colors.white,
                      padding: "20px",
                      width: "400px",
                      outline: "none",
                    }}
                  />
                  <ButtonOutline name={"search"} />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Jumbotron */}
      <section id="jumbotron" className="jumbotron py-2">
        <div className="container-fluid">
          <div className="row pt-3">
            <div className="col-sm-5 mb-5 d-flex">
              <div
                class="card border-0"
                style={{
                  // width: "85rem",
                  backgroundColor: "transparent",
                  // borderRadius: "50%",
                }}
              >
                <div class="card-body d-flex flex-wrap cardColor">
                  <div>
                    <h5 class="card-title fw-bold text-light">
                      Today Top Topic
                    </h5>
                  </div>
                  <div className="ms-auto">
                    <img src={IconHotTopic} alt="Hot Topic" />
                  </div>
                  <div className="row pb-3">
                    <div className="col-sm-6">
                      <h6 class="flex-wrap fw-bold text-light">
                        Title Post Lorem Ipsum
                      </h6>
                      <p
                        class="card-text text-light"
                        style={{ textAlign: "justify", fontSize: "12px" }}
                      >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Necessitatibus, ea quos consectetur aperiam totam nam.
                      </p>
                    </div>
                    <div className="col-sm-3 fw-bold text-light">
                      <h2 style={{ color: colors.blue }}>759</h2>
                      <span>Comments</span>
                    </div>
                    <div className="col-sm-3 fw-bold text-light">
                      <h2 style={{ color: colors.blue }}>934</h2>
                      <span>Views</span>
                    </div>
                  </div>
                  <div className="flex-nowrap">
                    <span className="pe-2 text-light">Post by</span>
                    <span
                      style={{
                        height: "10px",
                        width: "auto",
                        padding: "5px",
                        backgroundColor: colors.brown,
                        borderRadius: "30px",
                        color: colors.white,
                      }}
                    >
                      national297freedom
                    </span>
                    <span className="ps-2">
                      <img src={ImageFigure1} alt="Figure 1" />
                      <img src={ImageFigure2} alt="Figure 2" />
                      <img src={ImageFigure3} alt="Figure 3" />
                      <img src={ImageFigure4} alt="Figure 4" />
                    </span>
                    <span className="pe-2 text-light">34 figure mention</span>
                    <Link to="/" className="fw-bold link">
                      Go Details <img src={IconNext} alt="Icon Next" />
                    </Link>
                    <h1>
                      <hr className="text-black border-bottom border-3 border-light" />
                    </h1>
                  </div>
                  <div>
                    <h5 class="card-title fw-bold text-light">
                      Today Top Topic
                    </h5>
                  </div>
                  <div className="ms-auto">
                    <img src={IconProfileMonitoring} alt="Hot Topic" />
                  </div>
                  <div className="row pb-3">
                    <div className="col-sm-6">
                      <h6 class="flex-wrap fw-bold text-light">
                        Title Post Lorem Ipsum
                      </h6>
                      <p
                        class="card-text text-light"
                        style={{ textAlign: "justify", fontSize: "12px" }}
                      >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Necessitatibus, ea quos consectetur aperiam totam nam.
                      </p>
                    </div>
                    <div className="col-sm-3 fw-bold text-light">
                      <h2 style={{ color: colors.blue }}>759</h2>
                      <span>Coments</span>
                    </div>
                    <div className="col-sm-3 fw-bold text-light">
                      <h2 style={{ color: colors.blue }}>934</h2>
                      <span>Views</span>
                    </div>
                  </div>
                  <div className="flex-nowrap text-light">
                    <span className="pe-2">Post by</span>
                    <span
                      style={{
                        height: "10px",
                        width: "auto",
                        padding: "5px",
                        backgroundColor: colors.brown,
                        borderRadius: "30px",
                      }}
                    >
                      national297freedom
                    </span>
                    <span className="ps-2">
                      <img src={ImageFigure1} alt="Figure 1" />
                      <img src={ImageFigure2} alt="Figure 2" />
                      <img src={ImageFigure3} alt="Figure 3" />
                      <img src={ImageFigure4} alt="Figure 4" />
                    </span>
                    <span className="pe-2">34 figure mention</span>
                    <Link to="/">
                      Go Details <img src={IconNext} alt="Icon Next" />{" "}
                    </Link>
                    <h1>
                      <hr className="text-black border-bottom border-3 border-light" />
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3 mb-5 d-flex justify-content-lg-start align-content-lg-start">
              <div
                class="card border-0"
                style={{
                  // width: "85rem",
                  backgroundColor: "transparent",
                  // borderRadius: "50%",
                }}
              >
                <div class="card-body d-flex flex-wrap cardColor">
                  <div>
                    <h5 class="card-title text-light">Weekly Top Data Leak</h5>
                  </div>
                  <div className="ms-auto">
                    <img src={IconDataleak} alt="Icon Data Leak" />
                  </div>
                  <div className="row pb-1">
                    <div className="col-sm-8">
                      <h4 class="flex-wrap" style={{ color: colors.warning }}>
                        [DomainDataLeak]
                      </h4>
                      <p
                        class="card-text text-light"
                        style={{ textAlign: "justify", fontSize: "12px" }}
                      >
                        Russia & Ukraine.Getcontact, vk.com 59M Data leaks{" "}
                        <span style={{ color: colors.Secondary }}>
                          Fname, Mobile, DOB, Address
                        </span>
                      </p>
                    </div>
                    <div className="col-sm-4 fw-bold">
                      <h2 style={{ color: colors.Secondary }}>759</h2>
                      <span style={{ color: colors.white }}>Comments</span>
                      <p
                        className="fw-lighter"
                        style={{ fontSize: "10px", color: colors.white }}
                      >
                        Desc 14, 2020 03:36AM
                      </p>
                    </div>
                  </div>
                  <div className="row pb-1">
                    <div className="col-sm-8">
                      <h4 class="flex-wrap" style={{ color: colors.red }}>
                        [DomainDataLeak]
                      </h4>
                      <p
                        class="card-text text-light"
                        style={{ textAlign: "justify", fontSize: "12px" }}
                      >
                        Russia & Ukraine.Getcontact, vk.com 59M Data leaks{" "}
                        <span style={{ color: colors.Secondary }}>
                          Fname, Mobile, DOB, Address
                        </span>
                      </p>
                    </div>
                    <div className="col-sm-4 fw-bold">
                      <h2 style={{ color: colors.Secondary }}>547</h2>
                      <span style={{ color: colors.white }}>Comments</span>
                      <p
                        className="fw-lighter"
                        style={{ fontSize: "10px", color: colors.white }}
                      >
                        Desc 14, 2020 03:36AM
                      </p>
                    </div>
                  </div>
                  <div className="row pb-1">
                    <div className="col-sm-8">
                      <h4 class="flex-wrap" style={{ color: colors.orange }}>
                        [DomainDataLeak]
                      </h4>
                      <p
                        class="card-text text-light"
                        style={{ textAlign: "justify", fontSize: "12px" }}
                      >
                        Russia & Ukraine.Getcontact, vk.com 59M Data leaks{" "}
                        <span style={{ color: colors.Secondary }}>
                          Fname, Mobile, DOB, Address
                        </span>
                      </p>
                    </div>
                    <div className="col-sm-4 fw-bold">
                      <h2 style={{ color: colors.Secondary }}>352</h2>
                      <span style={{ color: colors.white }}>Comments</span>
                      <p
                        className="fw-lighter"
                        style={{ fontSize: "10px", color: colors.white }}
                      >
                        Desc 14, 2020 03:36AM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4 mb-5 d-flex justify-content-center align-items-center">
              <div className="gap-2">
                <ButtonOutliteIconLeft name={"Visit Link"} />
                <ButtonOutliteIconLeft name={"Download"} />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About */}
      <section id="about" className="about py-2">
        <div className="container-fluid">
          <div className="row pt-3">
            <div className="col-sm-4 mb-5 d-flex">
              <div
                class="card border-0"
                style={{
                  // width: "85rem",
                  backgroundColor: "transparent",
                  // borderRadius: "50%",
                }}
              >
                <div class="card-body flex-wrap cardColor">
                  <div className="d-flex justify-content-between">
                    <div>
                      <h5 class="card-title fw-bold text-light">
                        Profile Monitoring
                      </h5>
                    </div>
                    <div>
                      <img src={IconProfileMonitoring} alt="Hot Topic" />
                    </div>
                  </div>
                  <div className="row justify-content-between mb-3">
                    <div className="col-sm-6 mt-3">
                      <ButtonProfile name={"ZackXiX65"} />
                      <p>During online on http://www.forum...</p>
                    </div>
                    <div className="col-sm-6 mt-3">
                      <Link to="/" className="fw-bold link">
                        Go Details <img src={IconNext} alt="Icon Next" />
                      </Link>
                    </div>
                    <div className="col-sm-6">
                      <ButtonProfile icon={"."} name={"Bicara Kebuka11"} />
                      <p>Lastest online 10 Oct 2022 10:11 PM</p>
                    </div>
                    <div className="col-sm-6">
                      <Link to="/" className="fw-bold link">
                        Go Details <img src={IconNext} alt="Icon Next" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4 mb-5 d-flex justify-content-between">
              <div
                class="card border-0"
                style={{
                  // width: "85rem",
                  backgroundColor: "transparent",
                  // borderRadius: "50%",
                }}
              >
                <div class="card-body d-flex flex-wrap cardColor">
                  <div>
                    <h5 class="card-title fw-bold text-light">
                      Lastest Data Leak
                    </h5>
                  </div>
                  <div className="ms-auto">
                    <img src={IconLastetsdataleak} alt="Hot Topic" />
                  </div>
                  {/* <div className="ms-auto">
                    <img src={IconDataleak} alt="Icon Data Leak" />
                  </div> */}
                  <div className="row pb-1">
                    <div className="col-sm-3">
                      <p style={{ color: colors.red, whiteSpace: "nowrap" }}>
                        Goverment |
                      </p>
                      <p style={{ color: colors.red, whiteSpace: "nowrap" }}>
                        Goverment |
                      </p>
                      <p style={{ color: colors.red, whiteSpace: "nowrap" }}>
                        Fintech National |
                      </p>
                      <p style={{ color: colors.red, whiteSpace: "nowrap" }}>
                        Marketplace |
                      </p>
                      <p style={{ color: colors.red, whiteSpace: "nowrap" }}>
                        Marketplace |
                      </p>
                    </div>
                    <div className="col-sm-9 fw-bold">
                      <p style={{ color: colors.Secondary }}>
                        http://www.disukcapil.com/datasource
                      </p>
                      <p style={{ color: colors.Secondary }}>
                        http://www.dirjenpajak.com/datasource
                      </p>
                      <p style={{ color: colors.Secondary }}>
                        http://www.bayaronlean.com/datasource
                      </p>
                      <p style={{ color: colors.Secondary }}>
                        http://www.marketplace1.com/datasource
                      </p>
                      <p style={{ color: colors.Secondary }}>
                        http://www.marketplace2.com/datasource
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4 mb-5">
              <div
                class="card border-0"
                style={{
                  // width: "85rem",
                  backgroundColor: "transparent",
                  // borderRadius: "50%",
                }}
              >
                <div class="card-body flex-wrap cardColor">
                  <div className="d-flex justify-content-between">
                    <h5 class="card-title fw-bold text-light">
                      Top Avatar Mention
                    </h5>
                    <div className="ms-auto">
                      <img src={IconAvatarmention} alt="Hot Topic" />
                    </div>
                  </div>
                  {/* <div className="ms-auto">
                    <img src={IconDataleak} alt="Icon Data Leak" />
                  </div> */}
                  <div className="d-flex justify-content-between">
                    <ButtonSmallSolid
                      name={"ZackXiX65"}
                      color={"btn btn-danger"}
                    />
                    <p style={{ color: colors.Secondary }}>366+ mention</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <ButtonSmallSolid name={"ecoMock"} color={"btn btn-info"} />
                    <p style={{ color: colors.Secondary }}>205+ mention</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <ButtonSmallSolid
                      name={"national297freedom"}
                      color={"btn btn-warning"}
                    />
                    <p style={{ color: colors.Secondary }}>194+ mention</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <ButtonSmallSolid
                      name={"Bicarakebuka11"}
                      color={"btn btn-primary"}
                    />
                    <p style={{ color: colors.Secondary }}>76+ mention</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <button
                      style={{
                        marginRight: "5px",
                        borderRadius: "35px",
                        height: "30px",
                        lineHeight: "10px",
                        marginBottom: "10px",
                        backgroundColor: "#310752",
                        border: "none",
                        color: "white",
                      }}
                    >
                      Trackersedap
                    </button>
                    <p style={{ color: colors.Secondary }}>22+ mention</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
