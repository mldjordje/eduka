"use client";

import Link from "next/link";

interface MobileMenuProps {
  isMobileMenu: boolean;
  handleMobileMenu: () => void;
  offcanvas_bg?: string;
  offcanvas_menu?: string;
  offcanvas_social?: string;
}

export default function MobileMenu({ isMobileMenu, handleMobileMenu, offcanvas_bg, offcanvas_menu, offcanvas_social }: MobileMenuProps) {
  return (
    <>
      {isMobileMenu && <div className="vl-offcanvas-overlay vl-offcanvas-overlay-open" onClick={handleMobileMenu} />}

      <div className={`vl-offcanvas vl-offcanvas-bg-1 ${isMobileMenu ? "vl-offcanvas-open" : ""} ${offcanvas_bg}`}>
        <div className="vl-offcanvas-wrapper">
          <div className="vl-offcanvas-header d-flex justify-content-between align-items-center mb-40">
            <div className="vl-offcanvas-logo">
              <Link href="/" onClick={handleMobileMenu}>
                <img src="assets/img/logo/logo2.png" alt="Ð•Ð´ÑƒÐºÐ°" />
              </Link>
            </div>
            <div className="vl-offcanvas-close">
              <button className="vl-offcanvas-close-toggle" onClick={handleMobileMenu}>
                <i className="fal fa-times" />
              </button>
            </div>
          </div>
          <div className={`vl-offcanvas-menu ${offcanvas_menu} d-lg-none mb-40`}>
            <nav>
              <ul>
                <li>
                  <Link href="/" onClick={handleMobileMenu}>
                    ÐŸÐ¾Ñ‡ÐµÑ‚Ð½Ð°
                  </Link>
                </li>
                <li>
                  <Link href="/about" onClick={handleMobileMenu}>
                    Ðž Ð½Ð°Ð¼Ð°
                  </Link>
                </li>
                <li>
                  <Link href="/vesti" onClick={handleMobileMenu}>
                    Ð’ÐµÑÑ‚Ð¸
                  </Link>
                </li>
                <li>
                  <Link href="/galerija" onClick={handleMobileMenu}>
                    Ð“Ð°Ð»ÐµÑ€Ð¸Ñ˜Ð°
                  </Link>
                </li>
                <li>
                  <Link href="/simpozijum" onClick={handleMobileMenu}>
                    Ð¡Ð¸Ð¼Ð¿Ð¾Ð·Ð¸Ñ˜ÑƒÐ¼
                  </Link>
                </li>
                <li>
                  <Link href="/postanite-clan" onClick={handleMobileMenu}>
                    ÐŸÐ¾ÑÑ‚Ð°Ð½Ð¸Ñ‚Ðµ Ñ‡Ð»Ð°Ð½
                  </Link>
                </li>
                <li>
                  <Link href="/cms" onClick={handleMobileMenu}>
                    CMS
                  </Link>
                </li>
                <li className="has-dropdown">
                  <Link href="https://eduka.rs/edukacije" prefetch={false} onClick={handleMobileMenu}>
                    КМЕ едукација
                  </Link>
                  <ul className="sub-menu" style={{ display: "block" }}>
                    <li>
                      <a href="https://eduka.co.rs/category/edukacija/ÐµÐ´ÑƒÐºÐ°Ñ†Ð¸Ñ˜Ð°-ÑƒÐ·Ñ€Ñ-ÐµÐ´ÑƒÐºÐ°/" target="_blank" rel="noopener noreferrer" onClick={handleMobileMenu}>
                        Ð•Ð´ÑƒÐºÐ°Ñ†Ð¸Ñ˜Ð° â€“ Ð£Ð—Ð Ð¡ Ð•Ð´ÑƒÐºÐ°
                      </a>
                    </li>
                    <li>
                      <a href="https://eduka.co.rs/category/edukacijaÐµÐ´ÑƒÐºÐ°Ñ†Ð¸Ñ˜Ð°-Ð´Ð·-Ð½Ð¸Ñˆ/" target="_blank" rel="noopener noreferrer" onClick={handleMobileMenu}>
                        Ð•Ð´ÑƒÐºÐ°Ñ†Ð¸Ñ˜Ð° â€“ Ð”Ð— ÐÐ¸Ñˆ
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="has-dropdown">
                  <Link href="#" onClick={(e) => e.preventDefault()}>
                    ÐžÐ½Ð»Ð°Ñ˜Ð½ ÐµÐ´ÑƒÐºÐ°Ñ†Ð¸Ñ˜Ðµ
                  </Link>
                  <ul className="sub-menu" style={{ display: "block" }}>
                    <li>
                      <a href="https://eduka.org.rs/" target="_blank" rel="noopener noreferrer">
                        ÐžÐ½Ð»Ð°Ñ˜Ð½ â€“ Ð£Ð—Ð  Ð•Ð´ÑƒÐºÐ°
                      </a>
                    </li>
                    <li>
                      <a href="https://online.dznis.com/index.php" target="_blank" rel="noopener noreferrer">
                        ÐžÐ½Ð»Ð°Ñ˜Ð½ â€“ Ð”Ð— ÐÐ¸Ñˆ
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/prijava" onClick={handleMobileMenu}>
                    ÐšÐ¾Ð½Ñ‚Ð°ÐºÑ‚
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="vl-offcanvas-info mb-40">
            <h3 className="vl-offcanvas-sm-title">ÐšÐ¾Ð½Ñ‚Ð°ÐºÑ‚</h3>
            <span>
              <Link href="tel:+381638661256">
                <span>
                  <img src="assets/img/icons/vl-footer-icon-1.1.svg" alt="Ð¢ÐµÐ»ÐµÑ„Ð¾Ð½" />
                </span>
                063 866 1256
              </Link>
            </span>
            <br />
            <span>
              <Link href="tel:+381184261749">
                <span>
                  <img src="assets/img/icons/vl-footer-icon-1.1.svg" alt="Ð¢ÐµÐ»ÐµÑ„Ð¾Ð½" />
                </span>
                018 426 1749
              </Link>
            </span>
            <br />
            <span>
              <Link href="tel:+38118503748">
                <span>
                  <img src="assets/img/icons/vl-footer-icon-1.1.svg" alt="Ð¢ÐµÐ»ÐµÑ„Ð¾Ð½" />
                </span>
                018 503 748
              </Link>
            </span>
            <br />
            <span>
              <Link href="mailto:edukaudruzenje@gmail.com">
                <span>
                  <img src="assets/img/icons/vl-footer-icon-1.3.svg" alt="Ð•-Ð¿Ð¾ÑˆÑ‚Ð°" />
                </span>
                edukaudruzenje@gmail.com
              </Link>
            </span>
            <br />
            <span>
              <Link href="#">
                <span>
                  <img src="assets/img/icons/vl-footer-icon-1.2.svg" alt="ÐÐ´Ñ€ÐµÑÐ°" />
                </span>
                Ð’Ð¾Ñ˜Ð²Ð¾Ð´Ðµ Ð¢Ð°Ð½ÐºÐ¾ÑÐ¸Ñ›Ð° 15, ÐÐ¸Ñˆ
                <br />
                Ð’Ð¾Ñ˜Ð²Ð¾Ð´Ðµ ÐœÐ¸ÑˆÐ¸Ñ›Ð° 50, ÐÐ¸Ñˆ
              </Link>
            </span>
            <div className="pt-16">
              <strong>Радно време:</strong> понедељак–петак од 7 до 17 часова
            </div>
          </div>
          <div className="vl-offcanvas-social mb-40">
            <h3 className="vl-offcanvas-sm-title">ÐŸÑ€Ð°Ñ‚Ð¸Ñ‚Ðµ Ð½Ð°Ñ</h3>
            <div className={`vl-footer-social ${offcanvas_social}`}>
              <ul>
                <li>
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-instagram" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-linkedin-in" />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-youtube" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
