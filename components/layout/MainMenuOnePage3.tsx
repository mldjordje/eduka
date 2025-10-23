import Link from "next/link";

export default function MainMenu() {
    return (
        <ul>
            <li>
                <Link href="#about">O nama</Link>
            </li>
            <li>
                <Link href="#service">Programi</Link>
            </li>
            <li>
                <Link href="#clinic">Video</Link>
            </li>
            <li>
                <Link href="#team">Tim</Link>
            </li>
            <li>
                <Link href="#testimonial">Iskustva</Link>
            </li>
            <li>
                <Link href="#blog">Blog</Link>
            </li>
        </ul>
    );
}
