import Link from "next/link";

export default function Section1() {
    return (
        <>
            {/*================= Faq section Start =================*/}
            <section className="vl-faq-iner pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 mx-auto">
                            <div className="vl-faq-tab-iner">
                                <ul className="nav nav-pills" id="pills-tab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                                            All
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
                                            Dentist
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
                                            Dental
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="pills-clinic-tab" data-bs-toggle="pill" data-bs-target="#pills-clinic" type="button" role="tab" aria-controls="pills-clinic" aria-selected="false">
                                            Clinic
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="vl-faq-inerpa">
                                <div className="row">
                                    <div className="tab-content" id="pills-tabContent">
                                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex={0}>
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="accordion" id="accordionExample">
                                                        {/* single item */}
                                                        <div className="vl-accordion-item">
                                                            <h2 className="accordion-header" id="headingOne">
                                                                <button className="vl-accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                                    What are the options for replacing missing teeth?
                                                                    <span className="vl-faqarrow">
                                                                        <i className="fa-regular fa-angle-down" />
                                                                    </span>
                                                                </button>
                                                            </h2>
                                                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                                <div className="vl-accordion-body">
                                                                    <p className="para">
                                                                        We understand that you may have questions about our <br /> mission, how donations are used, &amp; ways you can get.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* single item */}
                                                        <div className="vl-accordion-item">
                                                            <h2 className="accordion-header" id="headingTwo">
                                                                <button className="vl-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                                    What is the difference between a crown and a filling?
                                                                    <span className="vl-faqarrow">
                                                                        <i className="fa-regular fa-angle-down" />
                                                                    </span>
                                                                </button>
                                                            </h2>
                                                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                                <div className="vl-accordion-body">
                                                                    <p className="para">
                                                                        We understand that you may have questions about our <br /> mission, how donations are used, &amp; ways you can get.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* single item */}
                                                        <div className="vl-accordion-item">
                                                            <h2 className="accordion-header" id="heading3">
                                                                <button className="vl-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                                                    How often should I brush and floss my teeth?
                                                                    <span className="vl-faqarrow">
                                                                        <i className="fa-regular fa-angle-down" />
                                                                    </span>
                                                                </button>
                                                            </h2>
                                                            <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#accordionExample">
                                                                <div className="vl-accordion-body">
                                                                    <p className="para">
                                                                        We understand that you may have questions about our <br /> mission, how donations are used, &amp; ways you can get.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* single item */}
                                                        <div className="vl-accordion-item">
                                                            <h2 className="accordion-header" id="heading4">
                                                                <button className="vl-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                                                    When should my child have their first dental visit?
                                                                    <span className="vl-faqarrow">
                                                                        <i className="fa-regular fa-angle-down" />
                                                                    </span>
                                                                </button>
                                                            </h2>
                                                            <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#accordionExample">
                                                                <div className="vl-accordion-body">
                                                                    <p className="para">
                                                                        We understand that you may have questions about our <br /> mission, how donations are used, &amp; ways you can get.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* single item */}
                                                        <div className="vl-accordion-item">
                                                            <h2 className="accordion-header" id="heading5">
                                                                <button className="vl-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                                                                    How can I schedule or reschedule an appointment?
                                                                    <span className="vl-faqarrow">
                                                                        <i className="fa-regular fa-angle-down" />
                                                                    </span>
                                                                </button>
                                                            </h2>
                                                            <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#accordionExample">
                                                                <div className="vl-accordion-body">
                                                                    <p className="para">
                                                                        We understand that you may have questions about our <br /> mission, how donations are used, &amp; ways you can get.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* single item */}
                                                        <div className="vl-accordion-item">
                                                            <h2 className="accordion-header" id="heading6">
                                                                <button className="vl-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                                                                    What should I expect during my first appointment?
                                                                    <span className="vl-faqarrow">
                                                                        <i className="fa-regular fa-angle-down" />
                                                                    </span>
                                                                </button>
                                                            </h2>
                                                            <div id="collapse6" className="accordion-collapse collapse" aria-labelledby="heading6" data-bs-parent="#accordionExample">
                                                                <div className="vl-accordion-body">
                                                                    <p className="para">
                                                                        We understand that you may have questions about our <br /> mission, how donations are used, &amp; ways you can get.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* single item */}
                                                        <div className="vl-accordion-item">
                                                            <h2 className="accordion-header" id="heading7">
                                                                <button className="vl-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                                                                    Are veneers the right choice for me?
                                                                    <span className="vl-faqarrow">
                                                                        <i className="fa-regular fa-angle-down" />
                                                                    </span>
                                                                </button>
                                                            </h2>
                                                            <div id="collapse7" className="accordion-collapse collapse" aria-labelledby="heading7" data-bs-parent="#accordionExample">
                                                                <div className="vl-accordion-body">
                                                                    <p className="para">
                                                                        We understand that you may have questions about our <br /> mission, how donations are used, &amp; ways you can get.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="accordion" id="accordionExample1">
                                                        {/* single item */}
                                                        <div className="vl-accordion-item">
                                                            <h2 className="accordion-header" id="heading8">
                                                                <button className="vl-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
                                                                    How does Invisalign compare to traditional braces?
                                                                    <span className="vl-faqarrow">
                                                                        <i className="fa-regular fa-angle-down" />
                                                                    </span>
                                                                </button>
                                                            </h2>
                                                            <div id="collapse8" className="accordion-collapse collapse" aria-labelledby="heading8" data-bs-parent="#accordionExample1">
                                                                <div className="vl-accordion-body">
                                                                    <p className="para">
                                                                        We understand that you may have questions about our <br /> mission, how donations are used, &amp; ways you can get.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* single item */}
                                                        <div className="vl-accordion-item">
                                                            <h2 className="accordion-header" id="heading9">
                                                                <button className="vl-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse9" aria-expanded="false" aria-controls="collapse9">
                                                                    What should I do if I have a toothache?
                                                                    <span className="vl-faqarrow">
                                                                        <i className="fa-regular fa-angle-down" />
                                                                    </span>
                                                                </button>
                                                            </h2>
                                                            <div id="collapse9" className="accordion-collapse collapse" aria-labelledby="heading9" data-bs-parent="#accordionExample1">
                                                                <div className="vl-accordion-body">
                                                                    <p className="para">
                                                                        We understand that you may have questions about our <br /> mission, how donations are used, &amp; ways you can get.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* single item */}
                                                        <div className="vl-accordion-item">
                                                            <h2 className="accordion-header" id="heading10">
                                                                <button className="vl-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse10" aria-expanded="false" aria-controls="collapse10">
                                                                    How do I handle a knocked-out tooth?
                                                                    <span className="vl-faqarrow">
                                                                        <i className="fa-regular fa-angle-down" />
                                                                    </span>
                                                                </button>
                                                            </h2>
                                                            <div id="collapse10" className="accordion-collapse collapse" aria-labelledby="heading10" data-bs-parent="#accordionExample1">
                                                                <div className="vl-accordion-body">
                                                                    <p className="para">
                                                                        We understand that you may have questions about our <br /> mission, how donations are used, &amp; ways you can get.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* single item */}
                                                        <div className="vl-accordion-item">
                                                            <h2 className="accordion-header" id="heading11">
                                                                <button className="vl-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse11" aria-expanded="false" aria-controls="collapse11">
                                                                    What is the process for getting dental implants?
                                                                    <span className="vl-faqarrow">
                                                                        <i className="fa-regular fa-angle-down" />
                                                                    </span>
                                                                </button>
                                                            </h2>
                                                            <div id="collapse11" className="accordion-collapse collapse" aria-labelledby="heading11" data-bs-parent="#accordionExample1">
                                                                <div className="vl-accordion-body">
                                                                    <p className="para">
                                                                        We understand that you may have questions about our <br /> mission, how donations are used, &amp; ways you can get.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* single item */}
                                                        <div className="vl-accordion-item">
                                                            <h2 className="accordion-header" id="heading12">
                                                                <button className="vl-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse12" aria-expanded="false" aria-controls="collapse12">
                                                                    Do you offer treatments for TMJ or jaw pain?
                                                                    <span className="vl-faqarrow">
                                                                        <i className="fa-regular fa-angle-down" />
                                                                    </span>
                                                                </button>
                                                            </h2>
                                                            <div id="collapse12" className="accordion-collapse collapse" aria-labelledby="heading12" data-bs-parent="#accordionExample1">
                                                                <div className="vl-accordion-body">
                                                                    <p className="para">
                                                                        We understand that you may have questions about our <br /> mission, how donations are used, &amp; ways you can get.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* single item */}
                                                        <div className="vl-accordion-item">
                                                            <h2 className="accordion-header" id="heading13">
                                                                <button className="vl-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse13" aria-expanded="false" aria-controls="collapse13">
                                                                    How long does it take to recover from oral surgery?
                                                                    <span className="vl-faqarrow">
                                                                        <i className="fa-regular fa-angle-down" />
                                                                    </span>
                                                                </button>
                                                            </h2>
                                                            <div id="collapse13" className="accordion-collapse collapse" aria-labelledby="heading13" data-bs-parent="#accordionExample1">
                                                                <div className="vl-accordion-body">
                                                                    <p className="para">
                                                                        We understand that you may have questions about our <br /> mission, how donations are used, &amp; ways you can get.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* single item */}
                                                        <div className="vl-accordion-item">
                                                            <h2 className="accordion-header" id="heading14">
                                                                <button className="vl-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse14" aria-expanded="false" aria-controls="collapse14">
                                                                    What foods should I avoid after a dental procedure?
                                                                    <span className="vl-faqarrow">
                                                                        <i className="fa-regular fa-angle-down" />
                                                                    </span>
                                                                </button>
                                                            </h2>
                                                            <div id="collapse14" className="accordion-collapse collapse" aria-labelledby="heading14" data-bs-parent="#accordionExample1">
                                                                <div className="vl-accordion-body">
                                                                    <p className="para">
                                                                        We understand that you may have questions about our <br /> mission, how donations are used, &amp; ways you can get.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex={0}>
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="accordion" id="accordionExample2">
                                                        {/* single item */}
                                                        <div className="vl-accordion-item">
                                                            <h2 className="accordion-header" id="heading15">
                                                                <button className="vl-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse15" aria-expanded="false" aria-controls="collapse15">
                                                                    What are the options for replacing missing teeth?
                                                                    <span className="vl-faqarrow">
                                                                        <i className="fa-regular fa-angle-down" />
                                                                    </span>
                                                                </button>
                                                            </h2>
                                                            <div id="collapse15" className="accordion-collapse collapse" aria-labelledby="heading15" data-bs-parent="#accordionExample2">
                                                                <div className="vl-accordion-body">
                                                                    <p className="para">
                                                                        We understand that you may have questions about our <br /> mission, how donations are used, &amp; ways you can get.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* single item */}
                                                        <div className="vl-accordion-item">
                                                            <h2 className="accordion-header" id="heading16">
                                                                <button className="vl-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse16" aria-expanded="false" aria-controls="collapse16">
                                                                    What is the difference between a crown and a filling?
                                                                    <span className="vl-faqarrow">
                                                                        <i className="fa-regular fa-angle-down" />
                                                                    </span>
                                                                </button>
                                                            </h2>
                                                            <div id="collapse16" className="accordion-collapse collapse" aria-labelledby="heading16" data-bs-parent="#accordionExample2">
                                                                <div className="vl-accordion-body">
                                                                    <p className="para">
                                                                        We understand that you may have questions about our <br /> mission, how donations are used, &amp; ways you can get.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* single item */}
                                                        <div className="vl-accordion-item">
                                                            <h2 className="accordion-header" id="heading17">
                                                                <button className="vl-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse17" aria-expanded="false" aria-controls="collapse17">
                                                                    How often should I brush and floss my teeth?
                                                                    <span className="vl-faqarrow">
                                                                        <i className="fa-regular fa-angle-down" />
                                                                    </span>
                                                                </button>
                                                            </h2>
                                                            <div id="collapse17" className="accordion-collapse collapse" aria-labelledby="heading17" data-bs-parent="#accordionExample2">
                                                                <div className="vl-accordion-body">
                                                                    <p className="para">
                                                                        We understand that you may have questions about our <br /> mission, how donations are used, &amp; ways you can get.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* single item */}
                                                        <div className="vl-accordion-item">
                                                            <h2 className="accordion-header" id="heading18">
                                                                <button className="vl-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse18" aria-expanded="false" aria-controls="collapse18">
                                                                    When should my child have their first dental visit?
                                                                    <span className="vl-faqarrow">
                                                                        <i className="fa-regular fa-angle-down" />
                                                                    </span>
                                                                </button>
                                                            </h2>
                                                            <div id="collapse18" className="accordion-collapse collapse" aria-labelledby="heading18" data-bs-parent="#accordionExample2">
                                                                <div className="vl-accordion-body">
                                                                    <p className="para">
                                                                        We understand that you may have questions about our <br /> mission, how donations are used, &amp; ways you can get.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* single item */}
                                                        <div className="vl-accordion-item">
                                                            <h2 className="accordion-header" id="heading19">
                                                                <button className="vl-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse19" aria-expanded="false" aria-controls="collapse19">
                                                                    How can I schedule or reschedule an appointment?
                                                                    <span className="vl-faqarrow">
                                                                        <i className="fa-regular fa-angle-down" />
                                                                    </span>
                                                                </button>
                                                            </h2>
                                                            <div id="collapse19" className="accordion-collapse collapse" aria-labelledby="heading19" data-bs-parent="#accordionExample2">
                                                                <div className="vl-accordion-body">
                                                                    <p className="para">
                                                                        We understand that you may have questions about our <br /> mission, how donations are used, &amp; ways you can get.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* single item */}
                                                        <div className="vl-accordion-item">
                                                            <h2 className="accordion-header" id="heading20">
                                                                <button className="vl-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse20" aria-expanded="false" aria-controls="collapse20">
                                                                    What should I expect during my first appointment?
                                                                    <span className="vl-faqarrow">
                                                                        <i className="fa-regular fa-angle-down" />
                                                                    </span>
                                                                </button>
                                                            </h2>
                                                            <div id="collapse20" className="accordion-collapse collapse" aria-labelledby="heading20" data-bs-parent="#accordionExample2">
                                                                <div className="vl-accordion-body">
                                                                    <p className="para">
                                                                        We understand that you may have questions about our <br /> mission, how donations are used, &amp; ways you can get.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* single item */}
                                                        <div className="vl-accordion-item">
                                                            <h2 className="accordion-header" id="heading21">
                                                                <button className="vl-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse21" aria-expanded="false" aria-controls="collapse21">
                                                                    Are veneers the right choice for me?
                                                                    <span className="vl-faqarrow">
                                                                        <i className="fa-regular fa-angle-down" />
                                                                    </span>
                                                                </button>
                                                            </h2>
                                                            <div id="collapse21" className="accordion-collapse collapse" aria-labelledby="heading21" data-bs-parent="#accordionExample2">
                                                                <div className="vl-accordion-body">
                                                                    <p className="para">
                                                                        We understand that you may have questions about our <br /> mission, how donations are used, &amp; ways you can get.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="accordion" id="accordionExample3">
                                                        {/* single item */}
                                                        <div className="vl-accordion-item">
                                                            <h2 className="accordion-header" id="heading22">
                                                                <button className="vl-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse22" aria-expanded="false" aria-controls="collapse22">
                                                                    How does Invisalign compare to traditional braces?
                                                                    <span className="vl-faqarrow">
                                                                        <i className="fa-regular fa-angle-down" />
                                                                    </span>
                                                                </button>
                                                            </h2>
                                                            <div id="collapse22" className="accordion-collapse collapse" aria-labelledby="heading22" data-bs-parent="#accordionExample3">
                                                                <div className="vl-accordion-body">
                                                                    <p className="para">
                                                                        We understand that you may have questions about our <br /> mission, how donations are used, &amp; ways you can get.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* single item */}
                                                        <div className="vl-accordion-item">
                                                            <h2 className="accordion-header" id="heading23">
                                                                <button className="vl-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse23" aria-expanded="false" aria-controls="collapse23">
                                                                    What should I do if I have a toothache?
                                                                    <span className="vl-faqarrow">
                                                                        <i className="fa-regular fa-angle-down" />
                                                                    </span>
                                                                </button>
                                                            </h2>
                                                            <div id="collapse23" className="accordion-collapse collapse" aria-labelledby="heading23" data-bs-parent="#accordionExample3">
                                                                <div className="vl-accordion-body">
                                                                    <p className="para">
                                                                        We understand that you may have questions about our <br /> mission, how donations are used, &amp; ways you can get.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* single item */}
                                                        <div className="vl-accordion-item">
                                                            <h2 className="accordion-header" id="heading24">
                                                                <button className="vl-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse24" aria-expanded="false" aria-controls="collapse24">
                                                                    How do I handle a knocked-out tooth?
                                                                    <span className="vl-faqarrow">
                                                                        <i className="fa-regular fa-angle-down" />
                                                                    </span>
                                                                </button>
                                                            </h2>
                                                            <div id="collapse24" className="accordion-collapse collapse" aria-labelledby="heading24" data-bs-parent="#accordionExample3">
                                                                <div className="vl-accordion-body">
                                                                    <p className="para">
                                                                        We understand that you may have questions about our <br /> mission, how donations are used, &amp; ways you can get.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* single item */}
                                                        <div className="vl-accordion-item">
                                                            <h2 className="accordion-header" id="heading25">
                                                                <button className="vl-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse25" aria-expanded="false" aria-controls="collapse25">
                                                                    What is the process for getting dental implants?
                                                                    <span className="vl-faqarrow">
                                                                        <i className="fa-regular fa-angle-down" />
                                                                    </span>
                                                                </button>
                                                            </h2>
                                                            <div id="collapse25" className="accordion-collapse collapse" aria-labelledby="heading25" data-bs-parent="#accordionExample3">
                                                                <div className="vl-accordion-body">
                                                                    <p className="para">
                                                                        We understand that you may have questions about our <br /> mission, how donations are used, &amp; ways you can get.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* single item */}
                                                        <div className="vl-accordion-item">
                                                            <h2 className="accordion-header" id="heading26">
                                                                <button className="vl-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse26" aria-expanded="false" aria-controls="collapse26">
                                                                    Do you offer treatments for TMJ or jaw pain?
                                                                    <span className="vl-faqarrow">
                                                                        <i className="fa-regular fa-angle-down" />
                                                                    </span>
                                                                </button>
                                                            </h2>
                                                            <div id="collapse26" className="accordion-collapse collapse" aria-labelledby="heading26" data-bs-parent="#accordionExample3">
                                                                <div className="vl-accordion-body">
                                                                    <p className="para">
                                                                        We understand that you may have questions about our <br /> mission, how donations are used, &amp; ways you can get.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* single item */}
                                                        <div className="vl-accordion-item">
                                                            <h2 className="accordion-header" id="heading27">
                                                                <button className="vl-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse27" aria-expanded="false" aria-controls="collapse27">
                                                                    How long does it take to recover from oral surgery?
                                                                    <span className="vl-faqarrow">
                                                                        <i className="fa-regular fa-angle-down" />
                                                                    </span>
                                                                </button>
                                                            </h2>
                                                            <div id="collapse27" className="accordion-collapse collapse" aria-labelledby="heading27" data-bs-parent="#accordionExample3">
                                                                <div className="vl-accordion-body">
                                                                    <p className="para">
                                                                        We understand that you may have questions about our <br /> mission, how donations are used, &amp; ways you can get.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* single item */}
                                                        <div className="vl-accordion-item">
                                                            <h2 className="accordion-header" id="heading28">
                                                                <button className="vl-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse28" aria-expanded="false" aria-controls="collapse28">
                                                                    What foods should I avoid after a dental procedure?
                                                                    <span className="vl-faqarrow">
                                                                        <i className="fa-regular fa-angle-down" />
                                                                    </span>
                                                                </button>
                                                            </h2>
                                                            <div id="collapse28" className="accordion-collapse collapse" aria-labelledby="heading28" data-bs-parent="#accordionExample3">
                                                                <div className="vl-accordion-body">
                                                                    <p className="para">
                                                                        We understand that you may have questions about our <br /> mission, how donations are used, &amp; ways you can get.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex={0}>
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="accordion" id="accordionExample4">
                                                        {/* single item */}
                                                        <div className="vl-accordion-item">
                                                            <h2 className="accordion-header" id="heading29">
                                                                <button className="vl-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse29" aria-expanded="false" aria-controls="collapse29">
                                                                    What are the options for replacing missing teeth?
                                                                    <span className="vl-faqarrow">
                                                                        <i className="fa-regular fa-angle-down" />
                                                                    </span>
                                                                </button>
                                                            </h2>
                                                            <div id="collapse29" className="accordion-collapse collapse" aria-labelledby="heading29" data-bs-parent="#accordionExample4">
                                                                <div className="vl-accordion-body">
                                                                    <p className="para">
                                                                        We understand that you may have questions about our <br /> mission, how donations are used, &amp; ways you can get.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* single item */}
                                                        <div className="vl-accordion-item">
                                                            <h2 className="accordion-header" id="heading30">
                                                                <button className="vl-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse30" aria-expanded="false" aria-controls="collapse30">
                                                                    What is the difference between a crown and a filling?
                                                                    <span className="vl-faqarrow">
                                                                        <i className="fa-regular fa-angle-down" />
                                                                    </span>
                                                                </button>
                                                            </h2>
                                                            <div id="collapse30" className="accordion-collapse collapse" aria-labelledby="heading30" data-bs-parent="#accordionExample4">
                                                                <div className="vl-accordion-body">
                                                                    <p className="para">
                                                                        We understand that you may have questions about our <br /> mission, how donations are used, &amp; ways you can get.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* single item */}
                                                        <div className="vl-accordion-item">
                                                            <h2 className="accordion-header" id="heading31">
                                                                <button className="vl-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse31" aria-expanded="false" aria-controls="collapse31">
                                                                    How often should I brush and floss my teeth?
                                                                    <span className="vl-faqarrow">
                                                                        <i className="fa-regular fa-angle-down" />
                                                                    </span>
                                                                </button>
                                                            </h2>
                                                            <div id="collapse31" className="accordion-collapse collapse" aria-labelledby="heading31" data-bs-parent="#accordionExample4">
                                                                <div className="vl-accordion-body">
                                                                    <p className="para">
                                                                        We understand that you may have questions about our <br /> mission, how donations are used, &amp; ways you can get.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* single item */}
                                                        <div className="vl-accordion-item">
                                                            <h2 className="accordion-header" id="heading32">
                                                                <button className="vl-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse32" aria-expanded="false" aria-controls="collapse32">
                                                                    When should my child have their first dental visit?
                                                                    <span className="vl-faqarrow">
                                                                        <i className="fa-regular fa-angle-down" />
                                                                    </span>
                                                                </button>
                                                            </h2>
                                                            <div id="collapse32" className="accordion-collapse collapse" aria-labelledby="heading32" data-bs-parent="#accordionExample4">
                                                                <div className="vl-accordion-body">
                                                                    <p className="para">
                                                                        We understand that you may have questions about our <br /> mission, how donations are used, &amp; ways you can get.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* single item */}
                                                        <div className="vl-accordion-item">
                                                            <h2 className="accordion-header" id="heading33">
                                                                <button className="vl-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse33" aria-expanded="false" aria-controls="collapse33">
                                                                    How can I schedule or reschedule an appointment?
                                                                    <span className="vl-faqarrow">
                                                                        <i className="fa-regular fa-angle-down" />
                                                                    </span>
                                                                </button>
                                                            </h2>
                                                            <div id="collapse33" className="accordion-collapse collapse" aria-labelledby="heading33" data-bs-parent="#accordionExample4">
                                                                <div className="vl-accordion-body">
                                                                    <p className="para">
                                                                        We understand that you may have questions about our <br /> mission, how donations are used, &amp; ways you can get.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* single item */}
                                                        <div className="vl-accordion-item">
                                                            <h2 className="accordion-header" id="heading34">
                                                                <button className="vl-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse34" aria-expanded="false" aria-controls="collapse34">
                                                                    What should I expect during my first appointment?
                                                                    <span className="vl-faqarrow">
                                                                        <i className="fa-regular fa-angle-down" />
                                                                    </span>
                                                                </button>
                                                            </h2>
                                                            <div id="collapse34" className="accordion-collapse collapse" aria-labelledby="heading34" data-bs-parent="#accordionExample4">
                                                                <div className="vl-accordion-body">
                                                                    <p className="para">
                                                                        We understand that you may have questions about our <br /> mission, how donations are used, &amp; ways you can get.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* single item */}
                                                        <div className="vl-accordion-item">
                                                            <h2 className="accordion-header" id="heading35">
                                                                <button className="vl-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse35" aria-expanded="false" aria-controls="collapse35">
                                                                    Are veneers the right choice for me?
                                                                    <span className="vl-faqarrow">
                                                                        <i className="fa-regular fa-angle-down" />
                                                                    </span>
                                                                </button>
                                                            </h2>
                                                            <div id="collapse35" className="accordion-collapse collapse" aria-labelledby="heading35" data-bs-parent="#accordionExample4">
                                                                <div className="vl-accordion-body">
                                                                    <p className="para">
                                                                        We understand that you may have questions about our <br /> mission, how donations are used, &amp; ways you can get.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="accordion" id="accordionExample5">
                                                        {/* single item */}
                                                        <div className="vl-accordion-item">
                                                            <h2 className="accordion-header" id="heading36">
                                                                <button className="vl-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse36" aria-expanded="false" aria-controls="collapse36">
                                                                    How does Invisalign compare to traditional braces?
                                                                    <span className="vl-faqarrow">
                                                                        <i className="fa-regular fa-angle-down" />
                                                                    </span>
                                                                </button>
                                                            </h2>
                                                            <div id="collapse36" className="accordion-collapse collapse" aria-labelledby="heading36" data-bs-parent="#accordionExample5">
                                                                <div className="vl-accordion-body">
                                                                    <p className="para">
                                                                        We understand that you may have questions about our <br /> mission, how donations are used, &amp; ways you can get.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* single item */}
                                                        <div className="vl-accordion-item">
                                                            <h2 className="accordion-header" id="heading37">
                                                                <button className="vl-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse37" aria-expanded="false" aria-controls="collapse37">
                                                                    What should I do if I have a toothache?
                                                                    <span className="vl-faqarrow">
                                                                        <i className="fa-regular fa-angle-down" />
                                                                    </span>
                                                                </button>
                                                            </h2>
                                                            <div id="collapse37" className="accordion-collapse collapse" aria-labelledby="heading37" data-bs-parent="#accordionExample5">
                                                                <div className="vl-accordion-body">
                                                                    <p className="para">
                                                                        We understand that you may have questions about our <br /> mission, how donations are used, &amp; ways you can get.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* single item */}
                                                        <div className="vl-accordion-item">
                                                            <h2 className="accordion-header" id="heading38">
                                                                <button className="vl-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse38" aria-expanded="false" aria-controls="collapse38">
                                                                    How do I handle a knocked-out tooth?
                                                                    <span className="vl-faqarrow">
                                                                        <i className="fa-regular fa-angle-down" />
                                                                    </span>
                                                                </button>
                                                            </h2>
                                                            <div id="collapse38" className="accordion-collapse collapse" aria-labelledby="heading38" data-bs-parent="#accordionExample5">
                                                                <div className="vl-accordion-body">
                                                                    <p className="para">
                                                                        We understand that you may have questions about our <br /> mission, how donations are used, &amp; ways you can get.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* single item */}
                                                        <div className="vl-accordion-item">
                                                            <h2 className="accordion-header" id="heading39">
                                                                <button className="vl-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse39" aria-expanded="false" aria-controls="collapse39">
                                                                    What is the process for getting dental implants?
                                                                    <span className="vl-faqarrow">
                                                                        <i className="fa-regular fa-angle-down" />
                                                                    </span>
                                                                </button>
                                                            </h2>
                                                            <div id="collapse39" className="accordion-collapse collapse" aria-labelledby="heading39" data-bs-parent="#accordionExample5">
                                                                <div className="vl-accordion-body">
                                                                    <p className="para">
                                                                        We understand that you may have questions about our <br /> mission, how donations are used, &amp; ways you can get.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* single item */}
                                                        <div className="vl-accordion-item">
                                                            <h2 className="accordion-header" id="heading40">
                                                                <button className="vl-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse40" aria-expanded="false" aria-controls="collapse40">
                                                                    Do you offer treatments for TMJ or jaw pain?
                                                                    <span className="vl-faqarrow">
                                                                        <i className="fa-regular fa-angle-down" />
                                                                    </span>
                                                                </button>
                                                            </h2>
                                                            <div id="collapse40" className="accordion-collapse collapse" aria-labelledby="heading40" data-bs-parent="#accordionExample5">
                                                                <div className="vl-accordion-body">
                                                                    <p className="para">
                                                                        We understand that you may have questions about our <br /> mission, how donations are used, &amp; ways you can get.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* single item */}
                                                        <div className="vl-accordion-item">
                                                            <h2 className="accordion-header" id="heading41">
                                                                <button className="vl-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse41" aria-expanded="false" aria-controls="collapse41">
                                                                    How long does it take to recover from oral surgery?
                                                                    <span className="vl-faqarrow">
                                                                        <i className="fa-regular fa-angle-down" />
                                                                    </span>
                                                                </button>
                                                            </h2>
                                                            <div id="collapse41" className="accordion-collapse collapse" aria-labelledby="heading41" data-bs-parent="#accordionExample5">
                                                                <div className="vl-accordion-body">
                                                                    <p className="para">
                                                                        We understand that you may have questions about our <br /> mission, how donations are used, &amp; ways you can get.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* single item */}
                                                        <div className="vl-accordion-item">
                                                            <h2 className="accordion-header" id="heading42">
                                                                <button className="vl-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse42" aria-expanded="false" aria-controls="collapse42">
                                                                    What foods should I avoid after a dental procedure?
                                                                    <span className="vl-faqarrow">
                                                                        <i className="fa-regular fa-angle-down" />
                                                                    </span>
                                                                </button>
                                                            </h2>
                                                            <div id="collapse42" className="accordion-collapse collapse" aria-labelledby="heading42" data-bs-parent="#accordionExample5">
                                                                <div className="vl-accordion-body">
                                                                    <p className="para">
                                                                        We understand that you may have questions about our <br /> mission, how donations are used, &amp; ways you can get.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="pills-clinic" role="tabpanel" aria-labelledby="pills-clinic-tab" tabIndex={0}>
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="accordion" id="accordionExample6">
                                                        {/* single item */}
                                                        <div className="vl-accordion-item">
                                                            <h2 className="accordion-header" id="heading43">
                                                                <button className="vl-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse43" aria-expanded="false" aria-controls="collapse43">
                                                                    What are the options for replacing missing teeth?
                                                                    <span className="vl-faqarrow">
                                                                        <i className="fa-regular fa-angle-down" />
                                                                    </span>
                                                                </button>
                                                            </h2>
                                                            <div id="collapse43" className="accordion-collapse collapse" aria-labelledby="heading43" data-bs-parent="#accordionExample6">
                                                                <div className="vl-accordion-body">
                                                                    <p className="para">
                                                                        We understand that you may have questions about our <br /> mission, how donations are used, &amp; ways you can get.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* single item */}
                                                        <div className="vl-accordion-item">
                                                            <h2 className="accordion-header" id="heading44">
                                                                <button className="vl-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse44" aria-expanded="false" aria-controls="collapse44">
                                                                    What is the difference between a crown and a filling?
                                                                    <span className="vl-faqarrow">
                                                                        <i className="fa-regular fa-angle-down" />
                                                                    </span>
                                                                </button>
                                                            </h2>
                                                            <div id="collapse44" className="accordion-collapse collapse" aria-labelledby="heading44" data-bs-parent="#accordionExample6">
                                                                <div className="vl-accordion-body">
                                                                    <p className="para">
                                                                        We understand that you may have questions about our <br /> mission, how donations are used, &amp; ways you can get.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* single item */}
                                                        <div className="vl-accordion-item">
                                                            <h2 className="accordion-header" id="heading45">
                                                                <button className="vl-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse45" aria-expanded="false" aria-controls="collapse45">
                                                                    How often should I brush and floss my teeth?
                                                                    <span className="vl-faqarrow">
                                                                        <i className="fa-regular fa-angle-down" />
                                                                    </span>
                                                                </button>
                                                            </h2>
                                                            <div id="collapse45" className="accordion-collapse collapse" aria-labelledby="heading45" data-bs-parent="#accordionExample6">
                                                                <div className="vl-accordion-body">
                                                                    <p className="para">
                                                                        We understand that you may have questions about our <br /> mission, how donations are used, &amp; ways you can get.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* single item */}
                                                        <div className="vl-accordion-item">
                                                            <h2 className="accordion-header" id="heading46">
                                                                <button className="vl-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse46" aria-expanded="false" aria-controls="collapse46">
                                                                    When should my child have their first dental visit?
                                                                    <span className="vl-faqarrow">
                                                                        <i className="fa-regular fa-angle-down" />
                                                                    </span>
                                                                </button>
                                                            </h2>
                                                            <div id="collapse46" className="accordion-collapse collapse" aria-labelledby="heading46" data-bs-parent="#accordionExample6">
                                                                <div className="vl-accordion-body">
                                                                    <p className="para">
                                                                        We understand that you may have questions about our <br /> mission, how donations are used, &amp; ways you can get.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* single item */}
                                                        <div className="vl-accordion-item">
                                                            <h2 className="accordion-header" id="heading47">
                                                                <button className="vl-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse47" aria-expanded="false" aria-controls="collapse47">
                                                                    How can I schedule or reschedule an appointment?
                                                                    <span className="vl-faqarrow">
                                                                        <i className="fa-regular fa-angle-down" />
                                                                    </span>
                                                                </button>
                                                            </h2>
                                                            <div id="collapse47" className="accordion-collapse collapse" aria-labelledby="heading47" data-bs-parent="#accordionExample6">
                                                                <div className="vl-accordion-body">
                                                                    <p className="para">
                                                                        We understand that you may have questions about our <br /> mission, how donations are used, &amp; ways you can get.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* single item */}
                                                        <div className="vl-accordion-item">
                                                            <h2 className="accordion-header" id="heading48">
                                                                <button className="vl-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse48" aria-expanded="false" aria-controls="collapse48">
                                                                    What should I expect during my first appointment?
                                                                    <span className="vl-faqarrow">
                                                                        <i className="fa-regular fa-angle-down" />
                                                                    </span>
                                                                </button>
                                                            </h2>
                                                            <div id="collapse48" className="accordion-collapse collapse" aria-labelledby="heading48" data-bs-parent="#accordionExample6">
                                                                <div className="vl-accordion-body">
                                                                    <p className="para">
                                                                        We understand that you may have questions about our <br /> mission, how donations are used, &amp; ways you can get.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* single item */}
                                                        <div className="vl-accordion-item">
                                                            <h2 className="accordion-header" id="heading49">
                                                                <button className="vl-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse49" aria-expanded="false" aria-controls="collapse49">
                                                                    Are veneers the right choice for me?
                                                                    <span className="vl-faqarrow">
                                                                        <i className="fa-regular fa-angle-down" />
                                                                    </span>
                                                                </button>
                                                            </h2>
                                                            <div id="collapse49" className="accordion-collapse collapse" aria-labelledby="heading49" data-bs-parent="#accordionExample6">
                                                                <div className="vl-accordion-body">
                                                                    <p className="para">
                                                                        We understand that you may have questions about our <br /> mission, how donations are used, &amp; ways you can get.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="accordion" id="accordionExample7">
                                                        {/* single item */}
                                                        <div className="vl-accordion-item">
                                                            <h2 className="accordion-header" id="heading50">
                                                                <button className="vl-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse50" aria-expanded="false" aria-controls="collapse50">
                                                                    How does Invisalign compare to traditional braces?
                                                                    <span className="vl-faqarrow">
                                                                        <i className="fa-regular fa-angle-down" />
                                                                    </span>
                                                                </button>
                                                            </h2>
                                                            <div id="collapse50" className="accordion-collapse collapse" aria-labelledby="heading50" data-bs-parent="#accordionExample7">
                                                                <div className="vl-accordion-body">
                                                                    <p className="para">
                                                                        We understand that you may have questions about our <br /> mission, how donations are used, &amp; ways you can get.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* single item */}
                                                        <div className="vl-accordion-item">
                                                            <h2 className="accordion-header" id="heading51">
                                                                <button className="vl-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse51" aria-expanded="false" aria-controls="collapse51">
                                                                    What should I do if I have a toothache?
                                                                    <span className="vl-faqarrow">
                                                                        <i className="fa-regular fa-angle-down" />
                                                                    </span>
                                                                </button>
                                                            </h2>
                                                            <div id="collapse51" className="accordion-collapse collapse" aria-labelledby="heading51" data-bs-parent="#accordionExample7">
                                                                <div className="vl-accordion-body">
                                                                    <p className="para">
                                                                        We understand that you may have questions about our <br /> mission, how donations are used, &amp; ways you can get.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* single item */}
                                                        <div className="vl-accordion-item">
                                                            <h2 className="accordion-header" id="heading52">
                                                                <button className="vl-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse52" aria-expanded="false" aria-controls="collapse52">
                                                                    How do I handle a knocked-out tooth?
                                                                    <span className="vl-faqarrow">
                                                                        <i className="fa-regular fa-angle-down" />
                                                                    </span>
                                                                </button>
                                                            </h2>
                                                            <div id="collapse52" className="accordion-collapse collapse" aria-labelledby="heading52" data-bs-parent="#accordionExample7">
                                                                <div className="vl-accordion-body">
                                                                    <p className="para">
                                                                        We understand that you may have questions about our <br /> mission, how donations are used, &amp; ways you can get.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* single item */}
                                                        <div className="vl-accordion-item">
                                                            <h2 className="accordion-header" id="heading53">
                                                                <button className="vl-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse53" aria-expanded="false" aria-controls="collapse53">
                                                                    What is the process for getting dental implants?
                                                                    <span className="vl-faqarrow">
                                                                        <i className="fa-regular fa-angle-down" />
                                                                    </span>
                                                                </button>
                                                            </h2>
                                                            <div id="collapse53" className="accordion-collapse collapse" aria-labelledby="heading53" data-bs-parent="#accordionExample7">
                                                                <div className="vl-accordion-body">
                                                                    <p className="para">
                                                                        We understand that you may have questions about our <br /> mission, how donations are used, &amp; ways you can get.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* single item */}
                                                        <div className="vl-accordion-item">
                                                            <h2 className="accordion-header" id="heading54">
                                                                <button className="vl-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse54" aria-expanded="false" aria-controls="collapse54">
                                                                    Do you offer treatments for TMJ or jaw pain?
                                                                    <span className="vl-faqarrow">
                                                                        <i className="fa-regular fa-angle-down" />
                                                                    </span>
                                                                </button>
                                                            </h2>
                                                            <div id="collapse54" className="accordion-collapse collapse" aria-labelledby="heading54" data-bs-parent="#accordionExample7">
                                                                <div className="vl-accordion-body">
                                                                    <p className="para">
                                                                        We understand that you may have questions about our <br /> mission, how donations are used, &amp; ways you can get.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* single item */}
                                                        <div className="vl-accordion-item">
                                                            <h2 className="accordion-header" id="heading55">
                                                                <button className="vl-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse55" aria-expanded="false" aria-controls="collapse55">
                                                                    How long does it take to recover from oral surgery?
                                                                    <span className="vl-faqarrow">
                                                                        <i className="fa-regular fa-angle-down" />
                                                                    </span>
                                                                </button>
                                                            </h2>
                                                            <div id="collapse55" className="accordion-collapse collapse" aria-labelledby="heading55" data-bs-parent="#accordionExample7">
                                                                <div className="vl-accordion-body">
                                                                    <p className="para">
                                                                        We understand that you may have questions about our <br /> mission, how donations are used, &amp; ways you can get.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* single item */}
                                                        <div className="vl-accordion-item">
                                                            <h2 className="accordion-header" id="heading56">
                                                                <button className="vl-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse56" aria-expanded="false" aria-controls="collapse56">
                                                                    What foods should I avoid after a dental procedure?
                                                                    <span className="vl-faqarrow">
                                                                        <i className="fa-regular fa-angle-down" />
                                                                    </span>
                                                                </button>
                                                            </h2>
                                                            <div id="collapse56" className="accordion-collapse collapse" aria-labelledby="heading56" data-bs-parent="#accordionExample7">
                                                                <div className="vl-accordion-body">
                                                                    <p className="para">
                                                                        We understand that you may have questions about our <br /> mission, how donations are used, &amp; ways you can get.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*================= Faq section End =================*/}
        </>
    );
}
