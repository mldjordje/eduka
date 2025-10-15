"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

interface TeamMember {
    id: number;
    name: string;
    position: string;
    avatar: string;
    bio: string;
}

export default function Section1() {
    const [team, setTeam] = useState<TeamMember[]>([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        fetch("../data/team.json")
            .then((res) => res.json())
            .then((data) => setTeam(data));
    }, []);

    // Pagination
    const ITEMS_PER_PAGE = 8;
    const totalPages = Math.ceil(team.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentTeam = team.slice(startIndex, endIndex);

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) setCurrentPage(page);
    };

    return (
        <>
            {/*================= Team section Start =================*/}
            <section className="vl-team-iner-sec pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        {currentTeam.map((member) => (
                            <div className="col-lg-3 col-md-6 mb-30" key={member.id}>
                                {/* single team item */}
                                <div className="vl-single-team-bo3x">
                                    <div className="team-thumb image-anime">
                                        <img className="w-100" src={member.avatar} alt={member.name} />
                                        {/* team social icon */}
                                        <div className="team-social">
                                            <ul>
                                                <li>
                                                    <Link href="#">
                                                        <i className="fa-brands fa-x-twitter" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#">
                                                        <i className="fa-brands fa-linkedin-in" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#">
                                                        <i className="fa-brands fa-instagram" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#">
                                                        <i className="fa-brands fa-facebook-f" />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="team-content">
                                        <h4 className="title">{member.name}</h4>
                                        <span className="description">{member.position}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Pagination below */}
                    <div className="row">
                        <div className="col-lg-6 mx-auto">
                            <div className="vl-theme-pagination text-center mt-18 mb-30">
                                <ul>
                                    <li className={`page-item${currentPage === 1 ? " disabled" : ""}`}>
                                        <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>
                                            <i className="fa-regular fa-angle-left" />
                                        </button>
                                    </li>
                                    {Array.from({ length: totalPages }, (_, i) => (
                                        <li key={i} className={`page-item${currentPage === i + 1 ? " active" : ""}`}>
                                            <button className="page-link" onClick={() => handlePageChange(i + 1)}>
                                                {i + 1}
                                            </button>
                                        </li>
                                    ))}
                                    <li className={`page-item${currentPage === totalPages ? " disabled" : ""}`}>
                                        <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>
                                            <i className="fa-regular fa-angle-right" />
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*================= Team section End =================*/}
        </>
    );
}
