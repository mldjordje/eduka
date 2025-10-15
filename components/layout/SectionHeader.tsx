import Link from "next/link";

export default function SectionHeader({ title, current, isGroup, linkGroup, pageGroup }: { title: string; current: string; isGroup: boolean; linkGroup: string; pageGroup: string }) {
  return (
    <>
      {/*================= Breadcrumb section start =================*/}
      <section className="vl-breadcrumb-area" data-background="assets/img/breadcrumb/vl-about-breadcrumb.png">
        <div className="container">
          <div className="vl-breadcrumb-content">
            <h2 className="title">{title}</h2>
            <div className="vl-breadcrumb-list">
              <ul>
                <li>
                  <Link href="/">Home</Link>
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
