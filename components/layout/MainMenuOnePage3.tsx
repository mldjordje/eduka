import Link from "next/link";

export default function MainMenu() {
    return (
        <ul>
            <li>
                <Link href="#about">About us</Link>
            </li>
            <li>
                <Link href="#service">Service</Link>
            </li>
            <li>
                <Link href="#clinic">Clinic</Link>
            </li>
            <li>
                <Link href="#team">Team</Link>
            </li>
            <li>
                <Link href="#testimonial">Testimonial</Link>
            </li>
            <li>
                <Link href="#blog">Blog</Link>
            </li>
        </ul>
    );
}
