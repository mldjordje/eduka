import Link from "next/link";

const steps = [
    {
        title: "Континуирана подршка",
        description: "Након сваке обуке обезбеђујемо материјале, консултације и смернице за примену у пракси.",
    },
    {
        title: "Развој и тестирање",
        description: "Програме креирамо са стручњацима и стално их унапређујемо кроз повратне информације чланова.",
    },
    {
        title: "Планирање и стратегија",
        description: "Разумемо потребе чланова и утврђујемо циљеве едукација како бисмо постигли мерљиве резултате.",
    },
];

export default function Section3() {
    return (
        <>
            <section className="vl-comon-black-bg fix p-relative z-index-1 pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mx-auto">
                            <div className="vl-work-inner-content">
                                <div className="vl-section-title text-center mb-60">
                                    <h5 className="subtitle">Наш рад</h5>
                                    <h2 className="title pt-16 text-anime-style-3">Како градимо знање и праксу</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {steps.map((step, index) => (
                            <div className="col-lg-4 col-md-6 mb-30" key={step.title}>
                                <div className="vl-work-icon-bo4x-inner">
                                    <div className="icon">
                                        <span>
                                            <img src="assets/img/logo/logo.png" alt="Лого Едука" style={{ width: 64, height: "auto" }} />
                                        </span>
                                        <div className="number">{index + 1}</div>
                                    </div>
                                    <div className="content">
                                        <h4 className="title">
                                            <Link href="/about">{step.title}</Link>
                                        </h4>
                                        <p className="para pt-16">{step.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
