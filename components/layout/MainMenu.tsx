"use client";
import Link from "next/link";

export default function MainMenu() {
    return (
       <ul>
  <li>
    <Link href="/">Početna</Link>
  </li>

  <li>
    <Link href="/o-nama">O nama</Link>
  </li>

  <li>
    <Link href="/vesti">Vesti</Link>
  </li>

  <li>
    <Link href="/postanite-clan">Postanite član</Link>
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
        <Link href="/edukacija/online">Online edukacija</Link>
      </li>
      <li>
        <Link href="/edukacija/kme">KME edukacija</Link>
      </li>
    </ul>
  </li>
</ul>

    );
}
