import Link from "next/link";

export default function MainMenu() {
    return (
        <ul>
            <li>
                <Link href="#about">O udruženju</Link>
            </li>
            <li>
                <Link href="#service">Edukacije</Link>
            </li>
            <li>
                <Link href="#price">Članstvo</Link>
            </li>
            <li>
                <Link href="#testimonial">Utisci</Link>
            </li>
            <li>
                <Link href="#faq">Česta pitanja</Link>
            </li>
            <li>
                <Link href="#blog">Aktuelnosti</Link>
            </li>
        </ul>
    );
}
