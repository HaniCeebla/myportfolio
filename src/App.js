import {
  FaCalendarWeek,
  FaEnvelope,
  FaFacebook,
  FaLinkedin,
  FaLocationArrow,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
import "./App.css";
function App() {
  return (
    <div>
      <div
        className="page-wrapper home-3"
        data-background="/img/bg/page-bg-1.jpg"
      >
        {/* <div id="preloader">
    <div className="loader_line"></div>
</div> */}

        <div className="container z-index-3">
          <div className="row">
            <div className="col-xxl-4 col-xl-4 col-lg-4">
              <div className="bostami-parsonal-info-area">
                <div className="bostami-parsonal-info-wrap">
                  <div className="bostami-parsonal-info-img">
                    <img
                      src="/img/parsonal-info/parson-img-4.jpg"
                      alt="avatar"
                    />
                  </div>

                  <h4 className="bostami-parsonal-info-name">
                    Ceebla Cabdillaahi
                  </h4>
                  <span className="bostami-parsonal-info-bio mb-15">
                    Web Designer | Developer
                  </span>

                  <ul className="bostami-parsonal-info-social-link mb-30">
                    <li>
                      <a
                        href="https://www.facebook.com/profile.php?id=100008982971273"
                        className="facebook"
                      >
                        <i className="fa-brands ">
                          <FaFacebook />
                        </i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/ceebla-cabdilaahi-142796275/"
                        className="twitter"
                      >
                        <i className="fa-brands ">
                          <FaLinkedin />
                        </i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://wa.me/+252633994689"
                        className="instagram"
                      >
                        <i className="fa-brands ">
                          <FaWhatsapp />
                        </i>
                      </a>
                    </li>
                  </ul>

                  <div className="bostami-parsonal-info-contact mb-30">
                    <div className="bostami-parsonal-info-contact-item phone">
                      <div className="icon">
                        <i className="fa-solid fa-mobile-screen-button">
                          <FaPhone />
                        </i>
                      </div>
                      <div className="text">
                        <span>Phone</span>
                        <p>+252 63 3994689</p>
                      </div>
                    </div>

                    <div className="bostami-parsonal-info-contact-item email">
                      <div className="icon">
                        <i className="fa-regular fa-envelope-open-text">
                          <FaEnvelope />
                        </i>
                      </div>
                      <div className="text">
                        <span>Email</span>
                        <p>hanicabdillahi@gmail.com</p>
                      </div>
                    </div>

                    <div className="bostami-parsonal-info-contact-item location">
                      <div className="icon">
                        <i className="fa-solid fa-location-dot">
                          <FaLocationArrow />
                        </i>
                      </div>
                      <div className="text">
                        <span>Location</span>
                        <p>Hargeisa</p>
                      </div>
                    </div>

                    <div className="bostami-parsonal-info-contact-item calendar">
                      <div className="icon">
                        <i className="fa-light fa-calendar-days">
                          <FaCalendarWeek />
                        </i>
                      </div>
                      <div className="text">
                        <span>Year of Experiences</span>
                        <p>2+</p>
                      </div>
                    </div>
                  </div>

                  <div className="bostami-parsonal-info-btn">
                    <a
                      className="btn-2 circle"
                      href="https://drive.google.com/file/d/1VMc2D5Ay_haWuQXfPrT_MeIvRAXB52VZ/view?usp=drive_link"
                    >
                      <span className="icon">
                        <i className="fa-regular fa-download"></i>
                      </span>
                      download cv
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <div className="bostami-page-content-wrap">
                <div className="section-wrapper pl-60 pr-60 pt-60">
                  <div className="bostami-page-title-wrap mb-15">
                    <h2 className="page-title">about</h2>
                    <p>
                      Highly skilled and motivated software developer with 2
                      year of experience in designing, developing, anddeploying
                      innovative software solutions. Passionateabout leveraging
                      cutting-edge technologies to createrobust and scalable
                      applications that address real-world challenges.
                    </p>
                  </div>
                </div>

                <div className="section-wrapper pl-60 pr-60">
                  <div className="bostami-section-title-wrap mt-30 mb-20">
                    <h3 className="section-title">What I do!</h3>
                  </div>

                  <div className="bostami-what-do-wrap mb-30">
                    <div className="row">
                      <div className="col-xxl-6 col-xl-6 col-lg-6">
                        <div className="bostami-what-do-item bg-prink">
                          <div className="icon">
                            <i className="fa-light fa-swatchbook"></i>
                          </div>
                          <div className="text">
                            <h4 className="title">Ui/Ux Design</h4>
                            {/* <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                                            euismod tincidunt volutpat.</p> */}
                          </div>
                        </div>
                      </div>

                      <div className="col-xxl-6 col-xl-6 col-lg-6">
                        <div className="bostami-what-do-item bg-catkrill">
                          <div className="icon">
                            <i className="fa-regular fa-grid-2"></i>
                          </div>
                          <div className="text">
                            <h4 className="title">software Development</h4>
                            {/* <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                                            euismod tincidunt volutpat.</p> */}
                          </div>
                        </div>
                      </div>

                      <div className="col-xxl-6 col-xl-6 col-lg-6">
                        <div className="bostami-what-do-item  bg-catkrill">
                          <div className="icon">
                            <i className="fa-regular fa-camera-retro"></i>
                          </div>
                          <div className="text">
                            <h4 className="title">Web Design</h4>
                            {/* <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                                            euismod tincidunt volutpat.</p> */}
                          </div>
                        </div>
                      </div>

                      <div className="col-xxl-6 col-xl-6 col-lg-6">
                        <div className="bostami-what-do-item bg-prink bg-blue">
                          <div className="icon">
                            <i className="fa-regular fa-code"></i>
                          </div>
                          <div className="text">
                            <h4 className="title">Web Development</h4>
                            {/* <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                                            euismod tincidunt volutpat.</p> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bostami-page-content-wrap">
                  <div className="section-wrapper pl-60 pr-60 pt-60">
                    <div className="bostami-page-title-wrap mb-15">
                      <h2 className="page-title">Technologies Stack</h2>
                    </div>

                    <div align="left">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                        height="30"
                        alt="javascript logo"
                      />
                      <img width="12" />
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                        height="30"
                        alt="typescript logo"
                      />
                      <img width="12" />
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                        height="30"
                        alt="react logo"
                      />
                      <img width="12" />
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                        height="30"
                        alt="html5 logo"
                      />
                      <img width="12" />
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                        height="30"
                        alt="css3 logo"
                      />
                      <img width="12" />
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg"
                        height="30"
                        alt="python logo"
                      />
                      <img width="12" />
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                        height="30"
                        alt="csharp logo"
                      />
                      <img width="12" />
                      <spna> </spna>
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
                        height="30"
                        alt="csharp logo"
                      />
                    </div>
                  </div>

                  <div className="section-wrapper pl-60 pr-60 pt-60">
                    <div className="bostami-page-title-wrap mb-15">
                      <h2 className="page-title">Portfolio</h2>
                    </div>
                  </div>

                  <div className="section-wrapper pr-60 pl-60 mb-60">
                    <div className="row">
                      <div className="col-12">
                        <div
                          id="fillter-item-active"
                          className="fillter-item-wrap "
                        >
                          <div className="grid-sizer"></div>

                          <div className="porto">
                            <div className=" isotop-item mockup">
                              <div className="fillter-item bg-prink">
                                <a
                                  className="img"
                                  href="https://rooyaljet.com/"
                                  data-bs-toggle="modal"
                                  data-bs-target="#portfolio-1"
                                >
                                  <img
                                    src="/img/work/work-img-7.png"
                                    style={{
                                      height: "10rem",
                                      objectFit: "cover",
                                    }}
                                    alt=""
                                  />
                                </a>
                                <span className="item-subtitle">
                                  Web design | development{" "}
                                </span>
                                <h6 className="item-title">
                                  <a
                                    href="https://rooyaljet.com/"
                                    data-bs-toggle="modal"
                                    data-bs-target="#portfolio-1"
                                  >
                                    Rooyel jet
                                  </a>
                                </h6>
                              </div>
                            </div>
                            <div className=" isotop-item mockup">
                              <div className="fillter-item bg-prink">
                                <a
                                  className="img"
                                  href="https://www.greenpowerre.com/"
                                  data-bs-toggle="modal"
                                  data-bs-target="#portfolio-1"
                                >
                                  <img
                                    src="/img/work/work-img-9.png"
                                    style={{
                                      height: "10rem",
                                      objectFit: "fit",
                                    }}
                                    alt=""
                                  />
                                </a>
                                <span className="item-subtitle">
                                  Web design | development{" "}
                                </span>
                                <h6 className="item-title">
                                  <a
                                    href="https://www.greenpowerre.com/"
                                    data-bs-toggle="modal"
                                    data-bs-target="#portfolio-1"
                                  >
                                    Greenpower
                                  </a>
                                </h6>
                              </div>
                            </div>
                            <div className=" isotop-item mockup">
                              <div className="fillter-item bg-prink">
                                <a
                                  className="img"
                                  href="https://www.ccclr1.org/"
                                  data-bs-toggle="modal"
                                  data-bs-target="#portfolio-1"
                                >
                                  <img
                                    src="/img/work/work-img-8.png"
                                    alt=""
                                    style={{
                                      height: "10rem",
                                      objectFit: "cover",
                                    }}
                                  />
                                </a>
                                <span className="item-subtitle">
                                  Web design | development{" "}
                                </span>
                                <h6 className="item-title">
                                  <a
                                    href="https://www.ccclr1.org/"
                                    data-bs-toggle="modal"
                                    data-bs-target="#portfolio-1"
                                  >
                                    CCCLR
                                  </a>
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="footer-copyright text-center pt-25 pb-25">
                  <span>© 2024 All Rights Reserved.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
