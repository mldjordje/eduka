import Link from "next/link";
import MobileMenu from "../MobileMenu";
import MainMenu from "../MainMenu";
import MainMenuOnePage4 from "../MainMenuOnePage4";

export default function Header({ scroll, isMobileMenu, mainMenuStyle, handleMobileMenu, offcanvas_bg, offcanvas_menu, offcanvas_social }: any) {
    return (
        <>
            <header>
                <div id="vl-header-sticky" className={`vl-header-are4a vl-transparent-header ${scroll ? "header-sticky top-0 position-fixed" : ""}`}>
                    <div className="container">
                        <div className="row header-style-4 align-items-center">
                            <div className="col-lg-3 col-md-6 col-6">
                                <div className="vl-logo">
                                    <Link href="/">
                                        <img src="assets/img/logo/vl-logo-4.1.png" alt="" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-6 d-none d-lg-block">
                                <div className="vl-main-men4u text-center">
                                    <nav className="vl-mobile-menu-active">
                                        {!mainMenuStyle && <MainMenu />}
                                        {mainMenuStyle == "one-page" ? <MainMenuOnePage4 /> : null}
                                    </nav>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-6">
                                {/* header icon box */}
                                <div className="d-none d-lg-block">
                                    <div className="vl-header-icon-box-fle4x">
                                        <div className="vl-icon">
                                            <span>
                                                <img src="assets/img/icons/vl-header-top-icon-1.1.svg" alt="" />
                                            </span>
                                        </div>
                                        <div className="vl-content">
                                            <div className="title">Hotline 24/7</div>
                                            <Link href="tel:+49309233255" className="number">
                                                +49 30 9233255
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="vl-header-action-item vl-header-action-ite4m d-block d-lg-none">
                                    <button type="button" className="vl-offcanvas-toggle" onClick={() => handleMobileMenu()}>
                                        <img className="vkl-blck" src="assets/img/icons/vl-line-1.1.svg" alt="" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <MobileMenu isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} offcanvas_bg={offcanvas_bg} offcanvas_menu={offcanvas_menu} offcanvas_social={offcanvas_social} />
                </div>
            </header>
        </>
    );
}
