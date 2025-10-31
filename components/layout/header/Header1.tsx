import Link from "next/link";
import MobileMenu from "../MobileMenu";
import MainMenu from "../MainMenu";
import MainMenuOnePage1 from "../MainMenuOnePage1";

export default function Header({ scroll, isMobileMenu, mainMenuStyle, handleMobileMenu, offcanvas_bg, offcanvas_menu, offcanvas_social }: any) {
    return (
      <>
        <header>
          <div
            id="vl-header-sticky"
            className={`vl-header-area vl-transparent-header ${
              scroll ? "header-sticky top-0 position-fixed" : ""
            }`}
          >
            <div className="container">
              <div className="row header-style-1 align-items-center">
                <div className="col-lg-3 col-md-6 col-6">
                  <div className="vl-logo">
                    <Link href="/">
                      <img
                        src="assets/img/logo/logo2.png"
                        alt="logo"
                        style={{ maxWidth: "120px", height: "auto" }}
                      />
                    </Link>
                  </div>
                </div>

                <div className="col-lg-6 d-none d-lg-block">
                  <div className="vl-main-menu text-center">
                    <nav className="vl-mobile-menu -active">
                      {!mainMenuStyle && <MainMenu />}
                      {mainMenuStyle == "one-page" ? (
                        <MainMenuOnePage1 />
                      ) : null}
                    </nav>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-6">
                  {/* header icon box */}
                  <div className="d-none d-lg-block">
                    <div className="vl-header-icon-box-flex">
                      <div className="vl-icon">
                        <span>
                          <img
                            src="assets/img/icons/vl-header-top-icon-1.1.svg"
                            alt=""
                          />
                        </span>
                      </div>
                      <div className="vl-content">
                        <div className="title">Pozovite nas</div>
                        <Link href="tel:+381184261749" className="number">
                          018 426 1749
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="vl-header-action-item d-block d-lg-none">
                    <button
                      type="button"
                      className="vl-offcanvas-toggle"
                      onClick={() => handleMobileMenu()}
                    >
                      <img src="assets/img/icons/vl-line-1.1.svg" alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <MobileMenu
              isMobileMenu={isMobileMenu}
              handleMobileMenu={handleMobileMenu}
              offcanvas_bg={offcanvas_bg}
              offcanvas_menu={offcanvas_menu}
              offcanvas_social={offcanvas_social}
            />
          </div>
        </header>
      </>
    );
}
