"use client";
import Link from "next/link";

export default function MainMenu() {
  return (
    <ul>
      <li>
        <Link href="/">Početna</Link>
      </li>
      <li>
        <Link href="/about">O udruženju</Link>
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
            <Link href="/service">Online edukacija</Link>
          </li>
          <li>
            <Link href="/service-single">Akreditovane KME</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link href="/blog">Aktuelnosti</Link>
      </li>
      <li>
        <Link href="/pricing-plan">Članstvo</Link>
      </li>
      <li>
        <Link href="/contact">Kontakt</Link>
      </li>
    </ul>
  );
}
