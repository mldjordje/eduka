import Link from "next/link";

const highlights = [
    "Сарађујемо са коморама, здравственим установама и удружењима у земљи и иностранству.",
    "Учествујемо у изради стандарда, правилника и предлога који обликују здравствену праксу.",
    "Надзиремо поштовање етичких и професионалних норми и штитимо интегритет чланова.",
];

export default function Section2() {
    return (
        <section className="vl-mission-area fix pt-100 pb-70">
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-lg-6 mb-30">
                        <div className="vl-mission-content-inner mr-60">
                            <div className="vl-section-title">
                                <h5 className="subtitle">Мисија и вредности</h5>
                                <h2 className="title text-anime-style-3 pt-16 pb-16">Подршка здравственим радницима кроз институционалну сарадњу</h2>
                                <p className="para pb-20">
                                    Делатност удружења усмерена је на планирање и реализацију континуиране медицинске едукације, али и на учешће у креирању политика које утичу на здравствени систем.
                                </p>
                            </div>
                            <ul className="vl-mission-list">
                                {highlights.map((item) => (
                                    <li key={item} className="para pb-10">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="vl-tab-btn pt-12">
                                <Link href="/postanite-clan" className="vl-btn-primary">
                                    Постаните члан
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-30">
                        <div className="vl-mission-iner-thumb">
                            <div className="vl-mission-thumb-iner reveal image-anime">
                                <img className="w-100" src="assets/img/eduka/workshop-demonstration.png" alt="Примена знања у пракси" />
                            </div>
                            <div className="vl-tab-counter-box">
                                <div className="vl-icon">
                                    <span>
                                        <img className="circle" src="assets/img/icons/vl-counter-icon-1.1.svg" alt="" />
                                    </span>
                                </div>
                                <div className="vl-counter-content">
                                    <h3>
                                        <span className="title counter">15</span>
                                        <span>+</span>
                                    </h3>
                                    <span className="deseg">Година искуства</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
