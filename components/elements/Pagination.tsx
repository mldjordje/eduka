import Link from "next/link";

export default function Pagination() {
  return (
    <section className="pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="vl-theme-pagination text-center mt-18 mb-30">
              <ul>
                <li>
                  <Link href="#">
                    <i className="fa-regular fa-angle-left" />
                  </Link>
                </li>
                <li>
                  <Link href="#">1</Link>
                </li>
                <li>
                  <Link href="#">2</Link>
                </li>
                <li>
                  <Link href="#">3</Link>
                </li>
                <li>
                  <Link href="#">...</Link>
                </li>
                <li>
                  <Link href="#">12</Link>
                </li>
                <li>
                  <Link href="#">
                    <i className="fa-regular fa-angle-right" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
