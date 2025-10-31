import Link from "next/link";

export default function MainMenu() {
    return (
        <ul>
            <li>
                <Link href="#about">O nama</Link>
            </li>
            <li>
                <Link href="#service">Usluge</Link>
            </li>
            <li>
                <Link href="#work">Rad</Link>
            </li>
            <li>
                <Link href="#testimonial">Utisci</Link>
            </li>
            <li>
                <Link href="#contact">Kontakt</Link>
            </li>
            <li>
                <Link href="#blog">Vesti</Link>
            </li>
        </ul>
    );
}
