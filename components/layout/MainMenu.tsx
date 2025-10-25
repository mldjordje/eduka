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
        <Link href="/blog">Blog</Link>
      </li>
      <li>
        <Link href="/postanite-clan">Postanite član</Link>
      </li>
      <li>
        <Link href="/cms">CMS</Link>
      </li>
      <li className="has-dropdown">
        <Link href="#">
          Edukacija
          <span>
            <i className="fa-regular fa-angle-down" />
          </span>
        </Link>
        <ul className="sub-menu">
          <li>
            <a href="https://eduka.org.rs/" target="_blank" rel="noopener noreferrer">Онлине-УЗР Едука</a>
          </li>
          <li>
            <a href="https://online.dznis.com/index.php" target="_blank" rel="noopener noreferrer">Онлине-ДЗ Ниш</a>
          </li>
        </ul>
      </li>
      <li>
        <Link href="/prijava">Kontakt</Link>
      </li>
    </ul>
  );
}
