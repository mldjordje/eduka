import Link from "next/link";

export default function Section1() {
    return (
        <>
            {/*================= error section Start =================*/}
            <section className="vl-eror-sec pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center">
                            <div className="vl-eror-area">
                                <div className="eror-thumb">
                                    <img className="w-100" src="assets/img/banner/eror-thumb.png" alt="" />
                                </div>
                                <div className="eror-content">
                                    <h3 className="title">Sorry, Something Went Wrong</h3>
                                    <p className="para pt-16 pb-32">
                                        But don't worry, we've got your back. Here are a few options to get you <br /> back on track: Contact Support: If you believe a problem with our site.
                                    </p>
                                    <div className="eror-btn">
                                        <Link href="/" className="vl-btn-primary">
                                            back To Home
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*================= error section End =================*/}
        </>
    );
}
