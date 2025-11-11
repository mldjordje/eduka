import Link from "next/link";

interface SectionHeaderProps {
  title: string;
  current: string;
  isGroup: boolean;
  linkGroup: string;
  pageGroup: string;
  background?: string;
}

export default function SectionHeader({ title, current, isGroup, linkGroup, pageGroup, background = "assets/img/eduka/hero-4.jpg" }: SectionHeaderProps) {
  return (
    <>
      <section className="vl-breadcrumb-area" data-background={background}>
        <div className="container">
          <div className="vl-breadcrumb-content">
            <h2 className="title">{title}</h2>
            <div className="vl-breadcrumb-list">
              <ul>
                <li>
                  <Link href="/">Почетна</Link>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-angle-right" />
                  </span>
                </li>
                <li className={isGroup ? "d-inline-block" : "d-none"}>
                  <Link href={linkGroup}>{pageGroup}</Link>
                </li>
                <li className={isGroup ? "d-inline-block" : "d-none"}>
                  <span>
                    <i className="fa-regular fa-angle-right" />
                  </span>
                </li>
                <li>
                  <span className="active">{current}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
