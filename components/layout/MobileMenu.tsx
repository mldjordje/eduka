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
                <img src="assets/img/logo/logo2.png" alt="Едука" />
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
                    Почетна
                  </Link>
                </li>
                <li>
                  <Link href="/about" onClick={handleMobileMenu}>
                    О нама
                  </Link>
                </li>
                <li>
                  <Link href="/vesti" onClick={handleMobileMenu}>
                    Вести
                  </Link>
                </li>
                <li>
                  <Link href="/galerija" onClick={handleMobileMenu}>
                    Галерија
                  </Link>
                </li>
                <li>
                  <Link href="/simpozijum" onClick={handleMobileMenu}>
                    Симпозијум
                  </Link>
                </li>
                <li>
                  <Link href="/postanite-clan" onClick={handleMobileMenu}>
                    Постаните члан
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
                      <a href="https://starisajt.eduka.co.rs/category/edukacija/едукација-узрс-едука/" target="_blank" rel="noopener noreferrer" onClick={handleMobileMenu}>
                        Едукација – УЗРС Едука
                      </a>
                    </li>
                    <li>
                      <a href="https://starisajt.eduka.co.rs/category/edukacija/едукација-дз-ниш/" target="_blank" rel="noopener noreferrer" onClick={handleMobileMenu}>
                        Едукација – ДЗ Ниш
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="has-dropdown">
                  <Link href="#" onClick={(e) => e.preventDefault()}>
                    Онлајн едукације
                  </Link>
                  <ul className="sub-menu" style={{ display: "block" }}>
                    <li>
                      <a href="https://eduka.org.rs/" target="_blank" rel="noopener noreferrer">
                        Онлајн – УЗР Едука
                      </a>
                    </li>
                    <li>
                      <a href="https://online.dznis.com/index.php" target="_blank" rel="noopener noreferrer">
                        Онлајн – ДЗ Ниш
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/prijava" onClick={handleMobileMenu}>
                    Контакт
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="vl-offcanvas-info mb-40">
            <h3 className="vl-offcanvas-sm-title">Контакт</h3>
            <span>
              <Link href="tel:+381638661256">
                <span>
                  <img src="assets/img/icons/vl-footer-icon-1.1.svg" alt="Телефон" />
                </span>
                063 866 1256
              </Link>
            </span>
            <br />
            <span>
              <Link href="tel:+381184261749">
                <span>
                  <img src="assets/img/icons/vl-footer-icon-1.1.svg" alt="Телефон" />
                </span>
                018 426 1749
              </Link>
            </span>
            <br />
            <span>
              <Link href="tel:+38118503748">
                <span>
                  <img src="assets/img/icons/vl-footer-icon-1.1.svg" alt="Телефон" />
                </span>
                018 503 748
              </Link>
            </span>
            <br />
            <span>
              <Link href="mailto:edukaudruzenje@gmail.com">
                <span>
                  <img src="assets/img/icons/vl-footer-icon-1.3.svg" alt="Е-пошта" />
                </span>
                edukaudruzenje@gmail.com
              </Link>
            </span>
            <br />
            <span>
              <Link href="#">
                <span>
                  <img src="assets/img/icons/vl-footer-icon-1.2.svg" alt="Адреса" />
                </span>
                Војводе Танкосића 15, Ниш
                <br />
                Војводе Мишића 50, Ниш
              </Link>
            </span>
            <div className="pt-16">
              <strong>Радно време:</strong> радним данима од 7–17 часова
            </div>
          </div>
          <div className="vl-offcanvas-social mb-40">
            <h3 className="vl-offcanvas-sm-title">Пратите нас</h3>
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
