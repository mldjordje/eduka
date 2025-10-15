import Link from "next/link";

export default function MainMenu() {
    return (
        <ul>
            <li>
                <Link href="#about">About us</Link>
            </li>
            <li>
                <Link href="#service">Services</Link>
            </li>
            <li>
                <Link href="#work">Work</Link>
            </li>
            <li>
                <Link href="#testimonial">Testimonial</Link>
            </li>
            <li>
                <Link href="#contact">Contact</Link>
            </li>
            <li>
                <Link href="#blog">Blog</Link>
            </li>
        </ul>
    );
}
