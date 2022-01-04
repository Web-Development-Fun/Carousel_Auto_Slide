import "./App.css";

function App(props) {

  
  return (
    <div className="App">
      {/*     <div className="header-wrap" id="header">
        <div className="main-navbar-wrap">
          <div className="container clearflix">
            <div className="header-logo">
              <a href="/" class="logo">
                <img src="https://www.cdnsol.com/images/cdn_logo.svg" alt="logo" />
              </a>
            </div>

            <div className="main-navbar">
              <div class="main-menu-top">
                <div className="menu-toggle">
                  <span class="menu-toggle-icon">
                    <span></span>
                  </span>
                </div>

                <div className="main-menu-wrap clearflix">
                  <div class="main-menu-inner" Style="max-height:150px">
                    <ul className="main-menu">
                      <li className="has-submenu">
                      <a data-toggle="collapse" class="menu-a" href="#about-menu" role="button" aria-expanded="false" aria-controls="about-menu">Company</a>
                      </li>
                      <li className="has-submenu">
                      <a data-toggle="collapse" class="menu-a" href="#service-menu" role="button" aria-expanded="false" aria-controls="service-menu">Services</a>
                      </li>
                      <li className="has-submenu">
                      <a data-toggle="collapse" class="menu-a" href="#technology-menu" role="button" aria-expanded="false" aria-controls="technology-menu">Technology</a>
                      </li>
                      <li className="has-submenu">
                      <a data-toggle="collapse" class="menu-a" href="#industry-menu" role="button" aria-expanded="false" aria-controls="industry-menu">Industries</a>
                      </li>
                      <li className="has-submenu">
                      <a data-toggle="collapse" class="menu-a" href="#insights-menu" role="button" aria-expanded="false" aria-controls="insights-menu">Insights</a>
                      </li>
                    </ul>
                    <div class="menu-right-btn position-relative">
                        <a href="contact" class="letstalk for-desk">Inquiry Now</a>
                        <a href="contact" id="letstalk-modal" class="letstalk for-mob">Inquiry Now</a>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  */}

      <nav class="navbar navbar-expand" Style="background-color:none">
        <a href="/#" class="navbar-brand" id="logo">
          <img
            src="https://www.cdnsol.com/images/cdn_logo.svg"
            height="70px"
            alt="CoolBrand"
          />
        </a>
        <button
          type="button"
          class="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse navbar-right" id="navbarCollapse">
          <ul
            className="navbar-nav navbar-brand ml-auto"
            Style=" padding:15px 0;"
          >
            <li className="nav-item dropdown">
              <a
                class="nav-link"
                href="/#"
                id="navbardrop1"
              >
                Company
              </a>
              <div className="dropdown-menu" Style="width: 550px;">
                <div className="row">
                  <div class="col-md-5">
                    <div class="info-box-menu">
                      <h6>Work with</h6>
                      <h3>CDN Solutions Group</h3>
                      <p>
                        We build a better future with
                        <br /> technologies.{" "}
                      </p>
                      <div class="menu-inner-btn">
                        <a href="contact" class="contactus">
                          Let's get started
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-7 menu-right-wrap">
                    <div className="row">
                      <div className="col-md-6">
                        <li class="dropdown-item">About Us</li>
                        <a class="dropdown-item" href="/#">
                          Engagement Models
                        </a>
                        <a class="dropdown-item" href="/#">
                          Our Work
                        </a>
                      </div>
                      <div className="col-md-6">
                        <a class="dropdown-item" href="/#">
                          Career
                        </a>
                        <a class="dropdown-item" href="/#">
                          Case Studies
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="nav-item dropdown">
              <a
                class="nav-link"
                href="/#"
                id="navbardrop2"
              >
                Services
              </a>
              <div className="dropdown-menu" Style="width: 750px;">
                <div className="row">
                  <div class="col-md-5">
                    <div class="info-box-menu">
                      <h6>Work with</h6>
                      <h3>CDN Solutions Group</h3>
                      <p>
                        Experience the excellence of our
                        <br /> dedicated professionals who are
                        <br /> adept in delivering top-notch
                        <br /> solutions.{" "}
                      </p>{" "}
                      <div class="menu-inner-btn">
                        <a href="contact" class="contactus">
                          Let's get started
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="row">
                      <div className="col-md-6">
                        <a class="dropdown-item" href="/#">
                          Team Augmentation
                        </a>
                        <a class="dropdown-item" href="/#">
                          Web Development
                        </a>
                        <a class="dropdown-item" href="/#">
                          Mobile App Development
                        </a>
                        <a class="dropdown-item" href="/#">
                          E-Commerce Development
                        </a>
                      </div>
                      <div className="col-md-6">
                        <a class="dropdown-item" href="/#">
                          SOftware Development
                        </a>
                        <a class="dropdown-item" href="/#">
                          Chatbot Development
                        </a>
                        <a class="dropdown-item" href="/#">
                          IT Consultancy
                        </a>
                        <a class="dropdown-item" href="/#">
                          Wireframing & Prototyping
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="nav-item dropdown">
              <a
                class="nav-link"
                href="/#"
                id="navbardrop3"
              >
                Technology
              </a>
              <div className="dropdown-menu" Style="width: 600px;">
                <div className="row">
                  <div class="col-md-5">
                    <div class="info-box-menu">
                      <h6>Work with</h6>
                      <h3>CDN Solutions Group</h3>
                      <p>
                        We offer Technologies that offers
                        <br /> millions of possibilities.{" "}
                      </p>{" "}
                      <div class="menu-inner-btn">
                        <a href="contact" class="contactus">
                          Let's get started
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="row">
                      <div className="col-md-6">
                        <li class="dropdown-item">IoT</li>
                        <a class="dropdown-item" href="/#">
                          Blockchain
                        </a>
                        <a class="dropdown-item" href="/#">
                          Wearables
                        </a>
                      </div>
                      <div className="col-md-6">
                        <a class="dropdown-item" href="/#">
                          iBeacon
                        </a>
                        <a class="dropdown-item" href="/#">
                          AR/VR
                        </a>
                        <a class="dropdown-item" href="/#">
                          Cloud Computing
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="nav-item dropdown">
              <a
                class="nav-link"
                href="/#"
                id="navbardrop4"
              >
                Vertical
              </a>
              <div className="dropdown-menu" Style="width: 700px;">
                <div className="row">
                  <div className="col-md-12 menu-right-wrap">
                    <div className="row">
                      <div className="col-md-3">
                        <a class="dropdown-item" href="/#">
                          Start-ups
                        </a>
                        <a class="dropdown-item" href="/#">
                          Healthcare
                        </a>
                        <a class="dropdown-item" href="/#">
                          Consumer
                        </a>
                        <a class="dropdown-item" href="/#">
                          Travel & Tourism
                        </a>
                        <a class="dropdown-item" href="/#">
                          Education
                        </a>
                      </div>
                      <div className="col-md-3">
                        <a class="dropdown-item" href="/#">
                          Food & Restaurent
                        </a>
                        <a class="dropdown-item" href="/#">
                          Warehouse
                        </a>
                        <a class="dropdown-item" href="/#">
                          Real Estate
                        </a>
                        <a class="dropdown-item" href="/#">
                          Banking & Finance
                        </a>
                        <a class="dropdown-item" href="/#">
                          Pharmaceuticals
                        </a>
                      </div>
                      <div className="col-md-3">
                        <a class="dropdown-item" href="/#">
                          Energy & Utility
                        </a>
                        <a class="dropdown-item" href="/#">
                          E-Commerce
                        </a>
                        <a class="dropdown-item" href="/#">
                          Manufacturing
                        </a>
                        <a class="dropdown-item" href="/#">
                          Retail automotive
                        </a>
                        <a class="dropdown-item" href="/#">
                          Social Networking
                        </a>
                      </div>
                      <div className="col-md-3">
                        <a class="dropdown-item" href="/#">
                          Automotive
                        </a>
                        <a class="dropdown-item" href="/#">
                          Agriculture
                        </a>
                        <a class="dropdown-item" href="/#">
                          Government
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="nav-item dropdown">
              <a
                class="nav-link"
                href="/#"
                id="navbardrop5"
              >
                Insights
              </a>
              <div className="dropdown-menu" Style="width: 650px;">
                <div className="row">
                  <div class="col-md-4">
                    <div class="info-box-menu">
                      <h6>Work with</h6>
                      <h3>CDN Solutions Group</h3>
                      <p>Lets get what you need.</p>{" "}
                      <div class="menu-inner-btn">
                        <a href="contact" class="contactus">
                          Let's get started
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="row">
                      <div className="col-md-6">
                        <li class="dropdown-item">Samaagam</li>
                        <a class="dropdown-item" href="/#">
                          Press Releases
                        </a>
                      </div>
                      <div className="col-md-6">
                        <a class="dropdown-item" href="/#">
                          Blogs
                        </a>
                        <a class="dropdown-item" href="/#">
                          News
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div
            class="navbar-nav ms-auto menu-right-btn position-relative"
            Style="padding-right:100px;padding-top:5px"
          >
            <button type="button" id="btn" class="ourwork2" Style="width:150px">
              Inquiry Now
            </button>
          </div>
        </div>
      </nav>

      <section className="banner-section pt-0">
        <div className="carousel slide " id="myCarousel" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
            <li data-target="#myCarousel" data-slide-to="3"></li>
            <li data-target="#myCarousel" data-slide-to="4"></li>
            <li data-target="#myCarousel" data-slide-to="5"></li>
            <li data-target="#myCarousel" data-slide-to="6"></li>
          </ol>

          <div
            class="swiper-wrapper carousel-inner"
            Style="transition-duration:0ms"
          >
            <div
              class="swiper-slide item active"
              data-swiper-autoplay="20000"
              Style="height: 313px; opacity: 1; transform: translate3d(0px, 0px, 0px); transition-duration: 0ms;"
            >
              <div id="slider_1">
                <div class="slider_1 container">
                  <div class="row">
                    <div class="row-1 text-left mb-0">
                      <h1>We Help You To</h1>
                      <div class="type-wrap">
                        <div id="typed-strings" Style="display:none">
                          <span>Create Future.</span>
                          <span>Make Life Easier.</span>
                          <span>Uplift Your Business.</span>
                          {/*<span>Deliver Beyond Expectation.</span>*/}
                          <span>Imagine Possibilities.</span>
                          <span>Inspire The Next.</span>
                        </div>
                        <span id="typed" Style="white-space: pre;">
                          Inspire The Next.
                          <span class="typed-cursor typed-cursor--blink">
                            |
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="row row-1">
                    <div class="w-50">
                      <p class="text-left" Style="width:50%">
                        We are shaping your dreams into reality as your dreams
                        are special to us. We develop apps, website and software
                        in your budget &amp; as per your timeline.
                      </p>
                    </div>
                  </div>
                  <div class="row hide-banner-icon justify-content-around mb-2">
                    <div>
                      <img
                        src="https://www.cdnsol.com/images/aiml-micon.svg"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="https://www.cdnsol.com/images/blockchain-micon.svg"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="https://www.cdnsol.com/images/prototype-micon.svg"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="https://www.cdnsol.com/images/uiux-micon.svg"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="https://www.cdnsol.com/images/mobile-apps-micon.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="row hide-banner-icon justify-content-around">
                    <div>
                      <img
                        src="https://www.cdnsol.com/images/software-micon.svg"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="https://www.cdnsol.com/images/arvr-micon.svg"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="https://www.cdnsol.com/images/cloud-micon.svg"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="https://www.cdnsol.com/images/wbsite-micon.svg"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="https://www.cdnsol.com/images/iot-micon.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="row row-2 text-left bottom-banner-button">
                    <div class="d-flex w-100 mt-4">
                      <div class="pull-left mr-20">
                        <a href="contact" class="contactus">
                          Contact Us
                        </a>
                      </div>
                      <div class="pull-left">
                        <a href="our-work" class="ourwork2">
                          Our Work
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="banner-shape">
                  <div class="banner-hexa">
                    <div class="icons-hexa icons-hexa-1">
                      <img
                        src="https://www.cdnsol.com/images/website.svg"
                        alt="icons"
                      />
                    </div>
                    <div class="icons-hexa icons-hexa-2">
                      <img
                        src="https://www.cdnsol.com/images/mobile_app.svg"
                        alt="icons"
                      />
                    </div>
                    <div class="icons-hexa icons-hexa-3">
                      <img
                        src="https://www.cdnsol.com/images/software.svg"
                        alt="icons"
                      />
                    </div>
                    <div class="icons-hexa icons-hexa-4">
                      <img
                        src="https://www.cdnsol.com/images/prototype.svg"
                        alt="icons"
                      />
                    </div>
                    <div class="icons-hexa icons-hexa-5">
                      <img
                        src="https://www.cdnsol.com/images/cloud.svg"
                        alt="icons"
                      />
                    </div>
                    <div class="icons-hexa icons-hexa-6">
                      <img
                        src="https://www.cdnsol.com/images/ai_ml.svg"
                        alt="icons"
                      />
                    </div>
                    <div class="icons-hexa icons-hexa-7">
                      <img
                        src="https://www.cdnsol.com/images/blockchain.svg"
                        alt="icons"
                      />
                    </div>
                    <div class="icons-hexa icons-hexa-8">
                      <img
                        src="https://www.cdnsol.com/images/ar_vr.svg"
                        alt="icons"
                      />
                    </div>
                    <div class="icons-hexa icons-hexa-9">
                      <img
                        src="https://www.cdnsol.com/images/iot.svg"
                        alt="icons"
                      />
                    </div>
                    <div class="icons-hexa icons-hexa-10">
                      <img
                        src="https://www.cdnsol.com/images/ui_ux.svg"
                        alt="icons"
                      />
                    </div>
                  </div>
                </div>
                <svg
                  class="svg-banner"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 288 288"
                >
                  <linearGradient
                    id="PSgrad_0"
                    x1="70.711%"
                    x2="0%"
                    y1="70.711%"
                    y2="0%"
                  >
                    <stop
                      offset="0%"
                      stop-color="rgb(237 32 123 / 5%)"
                      stop-opacity="1"
                    ></stop>
                    <stop
                      offset="100%"
                      stop-color="rgb(0 175 239 / 5%)"
                      stop-opacity="1"
                    ></stop>
                  </linearGradient>
                  <path fill="url(#PSgrad_0)">
                    <animate
                      repeatCount="indefinite"
                      attributeName="d"
                      dur="5s"
                      values="M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45 c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2 c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7 c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z; M51,171.3c-6.1-17.7-15.3-17.2-20.7-32c-8-21.9,0.7-54.6,20.7-67.1c19.5-12.3,32.8,5.5,67.7-3.4C145.2,62,145,49.9,173,43.4 c12-2.8,41.4-9.6,60.2,6.6c19,16.4,16.7,47.5,16,57.7c-1.7,22.8-10.3,25.5-9.4,46.4c1,22.5,11.2,25.8,9.1,42.6 c-2.2,17.6-16.3,37.5-33.5,40.8c-22,4.1-29.4-22.4-54.9-22.6c-31-0.2-40.8,39-68.3,35.7c-17.3-2-32.2-19.8-37.3-34.8 C48.9,198.6,57.8,191,51,171.3z; M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45 c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2 c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7 c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z  "
                    ></animate>
                  </path>
                </svg>
              </div>
            </div>

            <div
              class="swiper-slide item"
              data-swiper-autoplay="15000"
              Style="height: 290px; opacity: 1; transform: translate3d(0px, 0px, 0px); transition-duration: 0ms;"
            >
              <div id="slider_2">
                <div class="slider_2" Style="padding-left:100px">
                  <div class="row row-1 text-left">
                    <h1 class="w-100">Custom Software Development</h1>
                    <p Style="padding-top:25px">
                      At CDN Solutions we leverage 2 decade-long experience in
                      creating
                      <br /> top-notched, customized, and high-performing
                      enterprise software <br />
                      solutions that help enterprises become future-ready.
                    </p>
                  </div>
                  <div class="row row-2 text-left">
                    <h5>Services</h5>
                    <div class="row icons">
                      <div class="icons-tech d-flex align-items-center">
                        <div class="icon-img">
                          <img
                            src="https://www.cdnsol.com/images/hc-soft-cons.svg"
                            alt="Software Consulting"
                          />
                        </div>
                        <div>Software Consulting</div>
                      </div>
                      <div class="icons-tech d-flex align-items-center">
                        <div class="icon-img">
                          <img
                            src="https://www.cdnsol.com/images/hc-erp.svg"
                            alt="ERP"
                          />
                        </div>
                        <div>ERP</div>
                      </div>
                    </div>
                    <div class="row icons">
                      <div class="icons-tech d-flex align-items-center">
                        <div class="icon-img">
                          <img
                            src="https://www.cdnsol.com/images/hc-qa.svg"
                            alt="QA &amp; Testing<"
                          />
                        </div>
                        <div> QA &amp; Testing</div>
                      </div>
                      <div class="icons-tech d-flex align-items-center">
                        <div class="icon-img">
                          <img
                            src="https://www.cdnsol.com/images/hc-uxpin.svg"
                            alt="UX/UI Design"
                          />
                        </div>
                        <div>UX/UI Design</div>
                      </div>
                    </div>
                    <div class="row row-2 text-left">
                      <div class="d-flex w-100 mt-4">
                        <div class="pull-left mr-20">
                          <a href="contact" class="contactus">
                            Contact Us
                          </a>
                        </div>
                        <div class="pull-left">
                          <a href="our-work" class="ourwork2">
                            Our Work
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="swiper-slide item"
              data-swiper-autoplay="15000"
              Style="height: 247px; opacity: 1; transform: translate3d(0px, 0px, 0px); transition-duration: 0ms;"
            >
              <div id="slider_3">
                <div class="slider_3" Style="padding-left:100px">
                  <div class="row row-1 text-left">
                    <h1 class="w-100">Mobile App Development</h1>
                    <p Style="padding-top:20px">
                      Our Mobile App Development Services is so designed that
                      can shape your
                      <br />
                      dreams into reality. We've been at the front line of
                      Mobile Application
                      <br /> Development across the globe for 20 years.
                    </p>
                  </div>
                  <div class="row row-2 text-left">
                    <h5>Services</h5>
                    <div class="row icons">
                      <div class="icons-tech d-flex align-items-center">
                        <div class="icon-img">
                          <img
                            src="https://www.cdnsol.com/images/hc-ios.svg"
                            alt="iOS"
                          />
                        </div>
                        <div>iOS</div>
                      </div>
                      <div class="icons-tech d-flex align-items-center">
                        <div class="icon-img">
                          <img
                            src="https://www.cdnsol.com/images/hc-android.svg"
                            alt="Android"
                          />
                        </div>
                        <div>Android</div>
                      </div>
                      <div class="icons-tech d-flex align-items-center">
                        <div class="icon-img">
                          <img
                            src="https://www.cdnsol.com/images/hc-xamrin.svg"
                            alt="Xamrin"
                          />
                        </div>
                        <div>Xamarin</div>
                      </div>
                    </div>
                    <div class="row icons">
                      <div class="icons-tech d-flex align-items-center">
                        <div class="icon-img">
                          <img
                            src="https://www.cdnsol.com/images/hc-reactnative.svg"
                            alt="React Native"
                          />
                        </div>
                        <div>React Native</div>
                      </div>
                      <div class="icons-tech d-flex align-items-center">
                        <div class="icon-img">
                          <img
                            src="https://www.cdnsol.com/images/hc-phonegape.svg"
                            alt="Cross Platform"
                          />
                        </div>
                        <div>Cross Platform</div>
                      </div>
                    </div>
                    <div class="row row-2 text-left">
                      <div class="d-flex w-100 mt-4">
                        <div class="pull-left mr-20">
                          <a href="contact" class="contactus">
                            Contact Us
                          </a>
                        </div>
                        <div class="pull-left">
                          <a href="our-work" class="ourwork2">
                            Our Work
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="swiper-slide item"
              data-swiper-autoplay="15000"
              Style="height: 260px; opacity: 1; transform: translate3d(0px, 0px, 0px); transition-duration: 0ms;"
            >
              <div id="slider_4">
                <div
                  class="slider_4"
                  Style="padding-left:100px ;padding-top:50px"
                >
                  <div class="row row-1 text-left">
                    <h1 class="w-100">Web Design and Development</h1>
                    <p>
                      Cross-browser and cross-device driven by mobile
                      responsiveness all under one umbrella.
                      <br />
                      We will tweak the best of web development solutions for
                      you.
                    </p>
                  </div>
                  <div class="row row-2 text-left">
                    <h5>Services</h5>
                    <div class="row icons">
                      <div class="icons-tech d-flex align-items-center">
                        <div class="icon-img">
                          <img
                            src="https://www.cdnsol.com/images/hc-angularjs.svg"
                            alt="AngularJS"
                          />
                        </div>
                        <div>AngularJS</div>
                      </div>
                      <div class="icons-tech d-flex align-items-center">
                        <div class="icon-img">
                          <img
                            src="https://www.cdnsol.com/images/hc-python.svg"
                            alt="Python"
                          />
                        </div>
                        <div>Python</div>
                      </div>
                      <div class="icons-tech d-flex align-items-center">
                        <div class="icon-img">
                          <img
                            src="https://www.cdnsol.com/images/hc-php.svg"
                            alt="PHP"
                          />
                        </div>
                        <div>PHP</div>
                      </div>
                    </div>
                    <div class="row icons">
                      <div class="icons-tech d-flex align-items-center">
                        <div class="icon-img">
                          <img
                            src="https://www.cdnsol.com/images/hc-reactjs.svg"
                            alt="ReactJS"
                          />
                        </div>
                        <div>ReactJS</div>
                      </div>
                      <div class="icons-tech d-flex align-items-center">
                        <div class="icon-img">
                          <img
                            src="https://www.cdnsol.com/images/hc-ror.svg"
                            alt="ROR"
                          />
                        </div>
                        <div>ROR</div>
                      </div>
                      <div class="icons-tech d-flex align-items-center">
                        <div class="icon-img">
                          <img
                            src="https://www.cdnsol.com/images/hc-java.svg"
                            alt="Java"
                          />
                        </div>
                        <div>Java</div>
                      </div>
                    </div>
                    <div class="row row-2 text-left">
                      <div class="d-flex w-100 mt-4">
                        <div class="pull-left mr-20">
                          <a href="contact" class="contactus">
                            Contact Us
                          </a>
                        </div>
                        <div class="pull-left">
                          <a href="our-work" class="ourwork2">
                            Our Work
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="swiper-slide item"
              data-swiper-autoplay="15000"
              Style="height: 285px; opacity: 1; transform: translate3d(0px, 0px, 0px); transition-duration: 0ms;"
            >
              <div id="slider_5">
                <div class="slider_5" Style="padding-left:100px">
                  <div class="row row-1 text-left">
                    <h1 class="w-100">IT Consultancy</h1>
                    <p>
                      Despite the arising innovation that you choose for your
                      business- Big data, cloud-based services,
                      <br /> business solutions developments etc now readily
                      available,
                      <br /> while guaranteeing that your business prospers and
                      obtains
                      <br />
                      client deals with our IT Solution Provider team.
                    </p>
                  </div>
                  <div class="row row-2 text-left">
                    <h5>Services</h5>
                    <div class="row icons">
                      <div class="icons-tech d-flex align-items-center">
                        <div class="icon-img">
                          <img
                            src="https://www.cdnsol.com/images/hc-blockchain.svg"
                            alt="Blockchain"
                          />
                        </div>
                        <div>Blockchain</div>
                      </div>
                      <div class="icons-tech d-flex align-items-center">
                        <div class="icon-img">
                          <img
                            src="https://www.cdnsol.com/images/hc-ibeacon.svg"
                            alt="iBeacon"
                          />
                        </div>
                        <div>iBeacon</div>
                      </div>
                      <div class="icons-tech d-flex align-items-center">
                        <div class="icon-img">
                          <img
                            src="https://www.cdnsol.com/images/hc-iot.svg"
                            alt="IoT"
                          />
                        </div>
                        <div>IoT</div>
                      </div>
                    </div>
                    <div class="row icons">
                      <div class="icons-tech d-flex align-items-center">
                        <div class="icon-img">
                          <img
                            src="https://www.cdnsol.com/images/hc-arvr.svg"
                            alt="AR/VR"
                          />
                        </div>
                        <div>AR/VR</div>
                      </div>
                      <div class="icons-tech d-flex align-items-center">
                        <div class="icon-img">
                          <img
                            src="https://www.cdnsol.com/images/hc-cloudc.svg"
                            alt="Cloud Computing"
                          />
                        </div>
                        <div>Cloud Computing</div>
                      </div>
                    </div>
                    <div class="row row-2 text-left">
                      <div class="d-flex w-100 mt-4">
                        <div class="pull-left mr-20">
                          <a href="contact" class="contactus">
                            Contact Us
                          </a>
                        </div>
                        <div class="pull-left">
                          <a href="our-work" class="ourwork2">
                            Our Work
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="swiper-slide item"
              data-swiper-autoplay="15000"
              Style="height: 238px; opacity: 1; transform: translate3d(0px, 0px, 0px); transition-duration: 0ms;"
            >
              <div id="slider_6">
                <div class="slider_6" Style="padding-left:100px">
                  <div class="row row-1 text-left">
                    <h1 class="w-100">E-commerce Development</h1>
                    <p>
                      Supporting eCommerce organizations adding their client to
                      reach and develop their revenue through <br /> the ideal
                      mix of omnichannel presence, know-your-client tools, and
                      client-driven solutions.
                    </p>
                  </div>
                  <div class="row row-2 text-left">
                    <h5>Services</h5>
                    <div class="row icons">
                      <div class="icons-tech w-25 d-flex align-items-center">
                        <div class="icon-img">
                          <img
                            src="https://www.cdnsol.com/images/android.svg"
                            alt="Magento"
                          />
                        </div>
                        <div>Magento</div>
                      </div>
                      <div class="icons-tech w-75 d-flex align-items-center">
                        <div class="icon-img">
                          <img
                            src="https://www.cdnsol.com/images/hc-cpmd.svg"
                            alt="Custom Plug-in &amp; Module Development"
                          />
                        </div>
                        <div>Custom Plug-in &amp; Module Development</div>
                      </div>
                    </div>
                    <div class="row icons">
                      <div class="icons-tech w-25 d-flex align-items-center">
                        <div class="icon-img">
                          <img
                            src="https://www.cdnsol.com/images/hc-cartd.svg"
                            alt="Cart Development"
                          />
                        </div>
                        <div>Cart Development</div>
                      </div>
                      <div class="icons-tech w-75 d-flex align-items-center">
                        <div class="icon-img">
                          <img
                            src="https://www.cdnsol.com/images/hc-pgi.svg"
                            alt="Python Gateway Integration"
                          />
                        </div>
                        <div>Python Gateway Integration</div>
                      </div>
                    </div>
                    <div class="row row-2 text-left">
                      <div class="d-flex w-100 mt-4">
                        <div class="pull-left mr-20">
                          <a href="contact" class="contactus">
                            Contact Us
                          </a>
                        </div>
                        <div class="pull-left">
                          <a href="our-work" class="ourwork2">
                            Our Work
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="swiper-slide item"
              data-swiper-autoplay="15000"
              Style="height: 199px; opacity: 1; transform: translate3d(0px, 0px, 0px); transition-duration: 0ms;"
            >
              <div id="slider_7">
                <div class="slider_7" Style="padding-left:100px">
                  <div class="row row-1 text-left">
                    <h1 class="w-100">Ongoing Solutions</h1>
                    <p>
                      We trust in maintaining relationships for life.We keep up
                      the significant level <br />
                      of robust support services during as well as post-project
                      completion.
                    </p>
                  </div>
                  <div class="row row-2 text-left">
                    <h5>Services</h5>
                    <div class="row icons">
                      <div class="icons-tech d-flex align-items-center">
                        <div class="icon-img">
                          <img
                            src="https://www.cdnsol.com/images/hc-support.svg"
                            alt="Bug fixes"
                          />
                        </div>
                        <div>Bug fixes</div>
                      </div>
                      <div class="icons-tech d-flex align-items-center">
                        <div class="icon-img">
                          <img
                            src="https://www.cdnsol.com/images/hc-support1.svg"
                            alt="Enhancements"
                          />
                        </div>
                        <div>Enhancements</div>
                      </div>
                      <div class="icons-tech d-flex align-items-center">
                        <div class="icon-img">
                          <img
                            src="https://www.cdnsol.com/images/hc-support2.svg"
                            alt="MIS Report"
                          />
                        </div>
                        <div>MIS Report</div>
                      </div>
                    </div>
                    <div class="row icons">
                      <div class="icons-tech  d-flex align-items-center">
                        <div class="icon-img">
                          <img
                            src="https://www.cdnsol.com/images/hc-support.svg"
                            alt="android"
                          />
                        </div>
                        <div>Support</div>
                      </div>
                      <div class="icons-tech  d-flex align-items-center">
                        <div class="icon-img">
                          <img
                            src="https://www.cdnsol.com/images/hc-support1.svg"
                            alt="Migrations/Porting"
                          />
                        </div>
                        <div>Migrations/Porting</div>
                      </div>
                      <div class="icons-tech  d-flex align-items-center">
                        <div class="icon-img">
                          <img
                            src="https://www.cdnsol.com/images/hc-support2.svg"
                            alt="Root Cause Analysis"
                          />
                        </div>
                        <div>Root Cause Analysis</div>
                      </div>
                    </div>
                    <div class="row icons">
                      <div class="icons-tech col-6  col  d-flex align-items-center">
                        <div class="icon-img">
                          <img
                            src="https://www.cdnsol.com/images/hc-support.svg"
                            alt="Technical, Functional &amp; Operational Support"
                          />
                        </div>
                        <div>
                          Technical, Functional &amp; Operational Support
                        </div>
                      </div>
                    </div>
                    <div class="row row-2 text-left">
                      <div class="d-flex w-100 mt-4">
                        <div class="pull-left mr-20">
                          <a href="contact" class="contactus">
                            Contact Us
                          </a>
                        </div>
                        <div class="pull-left">
                          <a href="our-work" class="ourwork2">
                            Our Work
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a href="#why-choose" id="mouse" class="mouse">
              <div>
                <img
                  src="https://www.cdnsol.com/images/down_arrow.png"
                  class="m-auto"
                  alt="Scroll"
                />
              </div>
              <div>
                <span>Scroll</span>
              </div>
            </a>
          </div>

          <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
        </div>
      </section>
    </div>
  );
}

export default App;
