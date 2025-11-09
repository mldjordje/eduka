"use client";
import Link from "next/link";

export default function MainMenu() {
  return (
    <ul>
      <li>
        <Link href="/">Početna</Link>
      </li>
      <li>
        <Link href="/about">O nama</Link>
      </li>
      <li>
        <Link href="/vesti">Vesti</Link>
      </li>
      <li>
        <Link href="/galerija">Galerija</Link>
      </li>
      <li>
        <Link href="/simpozijum">Simpozijum</Link>
      </li>
      <li>
        <Link href="/postanite-clan">Postanite član</Link>
      </li>
      <li>
        <Link href="/cms">CMS</Link>
      </li>
      <li className="has-dropdown">
        <Link href="#">
          KME edukacija
          <span>
            <i className="fa-regular fa-angle-down" />
          </span>
        </Link>
        <ul className="sub-menu">
          <li>
            <a href="https://eduka.co.rs/category/edukacija/едукација-узрс-едука/" target="_blank" rel="noopener noreferrer">Edukacija – UZRS Eduka</a>
          </li>
          <li>
            <a href="https://eduka.co.rs/category/edukacijaедукација-дз-ниш/" target="_blank" rel="noopener noreferrer">Edukacija – DZ Niš</a>
          </li>
        </ul>
      </li>
      <li className="has-dropdown">
        <Link href="#">
          Online edukacije
          <span>
            <i className="fa-regular fa-angle-down" />
          </span>
        </Link>
        <ul className="sub-menu">
          <li>
            <a href="https://eduka.org.rs/" target="_blank" rel="noopener noreferrer">Онлине – УЗР Едука</a>
          </li>
          <li>
            <a href="https://online.dznis.com/index.php" target="_blank" rel="noopener noreferrer">Онлине – ДЗ Ниш</a>
          </li>
        </ul>
      </li>
      <li>
        <Link href="/prijava">Kontakt</Link>
      </li>
    </ul>
  );
}
