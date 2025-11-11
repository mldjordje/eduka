"use client";
import Link from "next/link";

export default function MainMenu() {
  return (
    <ul>
      <li>
        <Link href="/">Почетна</Link>
      </li>
      <li>
        <Link href="/about">О нама</Link>
      </li>
      <li>
        <Link href="/vesti">Вести</Link>
      </li>
      <li>
        <Link href="/galerija">Галерија</Link>
      </li>
      <li>
        <Link href="/simpozijum">Симпозијум</Link>
      </li>
      <li>
        <Link href="/postanite-clan">Постаните члан</Link>
      </li>
      <li>
        <Link href="/cms">CMS</Link>
      </li>
      <li className="has-dropdown">
        <Link href="https://eduka.rs/edukacije" prefetch={false}>
          Онлајн едукација (КМЕ)
          <span>
            <i className="fa-regular fa-angle-down" />
          </span>
        </Link>
        <ul className="sub-menu">
          <li>
            <a href="https://eduka.co.rs/category/edukacija/едукација-узрс-едука/" target="_blank" rel="noopener noreferrer">
              Едукација – УЗРС Едука
            </a>
          </li>
          <li>
            <a href="https://eduka.co.rs/category/edukacijaедукација-дз-ниш/" target="_blank" rel="noopener noreferrer">
              Едукација – ДЗ Ниш
            </a>
          </li>
        </ul>
      </li>
      <li className="has-dropdown">
        <Link href="#">
          Онлајн едукације
          <span>
            <i className="fa-regular fa-angle-down" />
          </span>
        </Link>
        <ul className="sub-menu">
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
        <Link href="/prijava">Контакт</Link>
      </li>
    </ul>
  );
}
