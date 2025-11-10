import Link from "next/link";

interface SectionHeaderProps {
  title: string;
  current: string;
  isGroup: boolean;
  linkGroup: string;
  pageGroup: string;
  background?: string;
}

export default function SectionHeader({ title, current, isGroup, linkGroup, pageGroup, background = "assets/img/eduka/hero-2.jpg" }: SectionHeaderProps) {
  return (
    <>
      {/*================= Breadcrumb section start =================*/}
      <section className="vl-breadcrumb-area" data-background={background}>
        <div className="container">
          <div className="vl-breadcrumb-content">
            <h2 className="title">{title}</h2>
            <div className="vl-breadcrumb-list">
              <ul>
                <li>
                  <Link href="/">Početna</Link>
                </li>

                <li>
                  <Link href="#">
                    <span>
                      <i className="fa-regular fa-angle-right" />
                    </span>
                  </Link>
                </li>

                <li className={isGroup ? "d-inline-block" : "d-none"}>
                  <Link href={linkGroup}>{pageGroup}</Link>
                </li>

                <li className={isGroup ? "d-inline-block" : "d-none"}>
                  <Link href="#">
                    <span>
                      <i className="fa-regular fa-angle-right" />
                    </span>
                  </Link>
                </li>

                <li>
                  <Link href="#" className="active">
                    {current}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/*================= Breadcrumb section End =================*/}
    </>
  );
}
