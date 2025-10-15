import Link from "next/link";
import MobileMenu from "../MobileMenu";
import MainMenu from "../MainMenu";
import MainMenuOnePage3 from "../MainMenuOnePage3";

export default function Header({ scroll, isMobileMenu, mainMenuStyle, handleMobileMenu, offcanvas_bg, offcanvas_menu, offcanvas_social }: any) {
    return (
        <>
            <header>
                <div id="vl-header-sticky" className={`vl-header-area vl-header-are3a ml-70 mr-70 ${scroll ? "header-sticky top-0 position-fixed" : ""}`}>
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-6 col-6">
                                <div className="vl-logo">
                                    <Link href="/">
                                        <img src="assets/img/logo/vl-logo3.1.png" alt="" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-6 d-none d-lg-block">
                                <div className="vl-main-menu vl-main-menu3 text-center">
                                    <nav className="vl-mobile-menu-active">
                                        {!mainMenuStyle && <MainMenu />}
                                        {mainMenuStyle == "one-page" ? <MainMenuOnePage3 /> : null}
                                    </nav>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-6">
                                {/* header button box */}
                                <div className="d-none d-lg-block">
                                    <div className="vl-header-butto3n">
                                        <Link href="#" className="btn-primary3">
                                            View Our Property
                                            <span>
                                                <i className="fa-regular fa-arrow-right" />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="vl-header-action-item d-block d-lg-none">
                                    <button type="button" className="vl-offcanvas-toggle" onClick={() => handleMobileMenu()}>
                                        <img src="assets/img/icons/vl-line-1.1.svg" alt="" />
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
