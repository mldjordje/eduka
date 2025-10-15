"use client";
import { useState } from "react";
import "@/node_modules/react-modal-video/css/modal-video.css";
import ModalVideo from "react-modal-video";
import Link from "next/link";

export default function Section1({ left, single }: { left?: boolean; single?: boolean }) {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            {/*================= Blog Details section Start =================*/}
            <section className="vl-blog-details pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className={`col-lg-4 mb-30 ${left ? "" : "order-2"} ${single ? "d-none" : ""}`}>
                            <div className="vl-sidebar">
                                {/* search widget */}
                                <div className="vl-widegt-1 vl-off-white-bg mb-30">
                                    <h4 className="title pb-24">Search</h4>
                                    <div className="vl-searh-form-wid">
                                        <form action="#">
                                            <input type="text" placeholder="Search..." />
                                            <span>
                                                <i className="fa-regular fa-magnifying-glass" />
                                            </span>
                                        </form>
                                    </div>
                                </div>
                                {/* rec post widget */}
                                <div className="vl-widegt-rec-post vl-off-white-bg mb-30">
                                    <h4 className="title pb-24">Recent Blogs</h4>
                                    {/* single post item */}
                                    <div className="vl-rec-post-flex">
                                        <div className="vl-thumb">
                                            <Link href="#">
                                                <img src="assets/img/blog/vl-rec-blog-1.1.png" alt="" />
                                            </Link>
                                        </div>
                                        <div className="vl-content">
                                            <div className="meta">
                                                <ul>
                                                    <li>
                                                        <Link href="#">
                                                            <span>
                                                                <img src="assets/img/icons/vl-rec-date-icon1.1.svg" alt="" />
                                                            </span>
                                                            10/10/2025
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <h3 className="title">
                                                <Link href="/blog-single">
                                                    Foods for Healthy <br /> Teeth: What to Eat an...
                                                </Link>
                                            </h3>
                                        </div>
                                    </div>
                                    {/* single post item */}
                                    <div className="vl-rec-post-flex">
                                        <div className="vl-thumb">
                                            <Link href="">
                                                <img src="assets/img/blog/vl-rec-blog-1.2.png" alt="" />
                                            </Link>
                                        </div>
                                        <div className="vl-content">
                                            <div className="meta">
                                                <ul>
                                                    <li>
                                                        <Link href="#">
                                                            <span>
                                                                <img src="assets/img/icons/vl-rec-date-icon1.1.svg" alt="" />
                                                            </span>
                                                            16/10/2025
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <h3 className="title">
                                                <Link href="/blog-single">
                                                    How to Care for Your <br /> Teeth After a Filling or...
                                                </Link>
                                            </h3>
                                        </div>
                                    </div>
                                    {/* single post item */}
                                    <div className="vl-rec-post-flex">
                                        <div className="vl-thumb">
                                            <Link href="">
                                                <img src="assets/img/blog/vl-rec-blog-1.3.png" alt="" />
                                            </Link>
                                        </div>
                                        <div className="vl-content">
                                            <div className="meta">
                                                <ul>
                                                    <li>
                                                        <Link href="#">
                                                            <span>
                                                                <img src="assets/img/icons/vl-rec-date-icon1.1.svg" alt="" />
                                                            </span>
                                                            08/10/2025
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <h3 className="title">
                                                <Link href="/blog-single">
                                                    Braces vs. Invisalign: <br /> Which is Right for You?
                                                </Link>
                                            </h3>
                                        </div>
                                    </div>
                                    {/* single post item */}
                                    <div className="vl-rec-post-flex">
                                        <div className="vl-thumb">
                                            <Link href="">
                                                <img src="assets/img/blog/vl-rec-blog-1.4.png" alt="" />
                                            </Link>
                                        </div>
                                        <div className="vl-content">
                                            <div className="meta">
                                                <ul>
                                                    <li>
                                                        <Link href="#">
                                                            <span>
                                                                <img src="assets/img/icons/vl-rec-date-icon1.1.svg" alt="" />
                                                            </span>
                                                            07/10/2025
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <h3 className="title">
                                                <Link href="/blog-single">
                                                    Foods That Promote <br /> Strong Teeth and Gums...
                                                </Link>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                {/* tag widget */}
                                <div className="vl-tags-widget vl-off-white-bg mb-14">
                                    <h4 className="title pb-24">Popular Tags</h4>
                                    <div className="vl-tags-list">
                                        <ul>
                                            <li>
                                                <Link href="#">HealthySmiles</Link>
                                            </li>
                                            <li>
                                                <Link href="#">OralHealthMatters</Link>
                                            </li>
                                            <li>
                                                <Link href="#">PreventiveDentistry</Link>
                                            </li>
                                            <li>
                                                <Link href="#">BrightSmiles</Link>
                                            </li>
                                            <li>
                                                <Link href="#">DentistryExperts</Link>
                                            </li>
                                            <li>
                                                <Link href="#">TeethWhitening</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* auth widget */}
                                <div className="vl-auth-widget vl-off-white-bg mb-15">
                                    <h4 className="title pb-24">Our Author</h4>
                                    <div className="vl-auth-box-grid">
                                        <div className="vl-auth-thumb">
                                            <Link href="/team">
                                                <img src="assets/img/team/vl-auth-iner1.1.png" alt="" />
                                            </Link>
                                            <Link href="/team">
                                                <img src="assets/img/team/vl-auth-iner1.2.png" alt="" />
                                            </Link>
                                            <Link href="/team">
                                                <img src="assets/img/team/vl-auth-iner1.3.png" alt="" />
                                            </Link>
                                            <Link href="/team">
                                                <img src="assets/img/team/vl-auth-iner1.4.png" alt="" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                {/* phone widget */}
                                <div className="vl-widegt-3 vl-off-white-bg mb-30">
                                    <h4 className="title pb-24">
                                        If You Need Any Help <br /> Contact With Us
                                    </h4>
                                    <Link href="tel:+1234567890" className="phone">
                                        <span>
                                            <i className="fa-light fa-phone" />
                                        </span>
                                        +123 456 7890
                                    </Link>
                                </div>
                                {/* social widget */}
                                <div className="vl-widegt-4 vl-off-white-bg mb-30">
                                    <h4 className="title pb-24">Follow Us</h4>
                                    <div className="vl-sidebar-social">
                                        <ul>
                                            <li>
                                                <Link href="#">
                                                    <span>
                                                        <i className="fa-brands fa-facebook-f" />
                                                    </span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <span>
                                                        <i className="fa-brands fa-x-twitter" />
                                                    </span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <span>
                                                        <i className="fa-brands fa-linkedin-in" />
                                                    </span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <span>
                                                        <i className="fa-brands fa-instagram" />
                                                    </span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`col-lg-8 mb-30 ${left ? "" : "order-1"} ${single ? "mx-auto" : ""}`}>
                            <div className={`vl-sidebar-details ${left ? "ml-80" : "mr-80"} ${single ? "me-0" : ""}`}>
                                {/* thumbnail */}
                                <div className="vl-blog-large-thumb-iner mb-32">
                                    <img className="w-100 br-8" src="assets/img/blog/vl-blog-large-thumb1.1.png" alt="" />
                                </div>
                                {/* meta */}
                                <div className="vl-blog-meta-list">
                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <span>
                                                    <img className="auth-thumb" src="assets/img/team/auth-meta1.1.png" alt="" />
                                                </span>
                                                Adil Rashid
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <span>
                                                    <img className="icon" src="assets/img/icons/vl-blog-details-date-icon1.1.svg" alt="" />
                                                </span>
                                                8/10/2025
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <span>
                                                    <img className="icon" src="assets/img/icons/vl-tag-1.1.svg" alt="" />
                                                </span>
                                                Dental &amp; Dentist Clinic
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <span>
                                                    <img className="icon" src="assets/img/icons/vl-chat1.1.svg" alt="" />
                                                </span>
                                                2 Comments
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                {/* content one */}
                                <div className="vl-sidebar-conten2t mb-32">
                                    <h3 className="title">
                                        Dental Implants vs. Dentures: Which <br /> is Right for You?
                                    </h3>
                                    <p className="para pt-16">Welcome to our blog, where we share valuable insights, expert tips, &amp; the latest updates in dental care. At we believe in empowering our patients with knowledge make informed decisions about their health. Whether you’re curious about preventive care, interested.</p>
                                    <p className="para pt-16">Explore topics ranging from everyday oral hygiene tips to advanced treatment options, all designed to help you achieve a healthy, confident smile stay connected for regular.</p>
                                </div>
                                {/* icon block */}
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 mb-30">
                                        <div className="vl-deatils-icon-block-flex">
                                            <div className="icon">
                                                <span>
                                                    <img src="assets/img/icons/vl-service-details-icon1.1.svg" alt="" />
                                                </span>
                                            </div>
                                            <div className="content">
                                                <h4 className="title pb-16">Advanced Dentistry</h4>
                                                <p className="para">Using the latest technology, we provide effective &amp; comfortable.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 mb-30">
                                        <div className="vl-deatils-icon-block-flex">
                                            <div className="icon">
                                                <span>
                                                    <img src="assets/img/icons/vl-service-details-icon1.2.svg" alt="" />
                                                </span>
                                            </div>
                                            <div className="content">
                                                <h4 className="title pb-16">Preventive Restorative</h4>
                                                <p className="para">Our clinic specializes maintaining oral health restoring functionality.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* content one */}
                                <div className="vl-sidebar-conten1t mb-32">
                                    <h3 className="title">Comprehensive Dental Care for Every Need</h3>
                                    <p className="para pt-16">We understand that staying informed about your oral health essential. Our blog provides helpful articles on everything from preventive care to the latest advancements dentistry. Whether you’re looking for tips on improving your daily oral hygiene routine or exploring.</p>
                                </div>
                                {/* check box */}
                                <div className="row">
                                    <div className="col-lg-12 mb-16">
                                        <div className="vl-service-check-lis2t">
                                            <ul>
                                                <li>
                                                    <span>
                                                        <i className="fa-regular fa-check" />
                                                    </span>
                                                    Tailored Care for Every Stage of Life
                                                </li>
                                                <li>
                                                    <span>
                                                        <i className="fa-regular fa-check" />
                                                    </span>
                                                    Comprehensive Care for Every Smile
                                                </li>
                                                <li>
                                                    <span>
                                                        <i className="fa-regular fa-check" />
                                                    </span>
                                                    Tailored Solutions Your Dental Needs
                                                </li>
                                                <li>
                                                    <span>
                                                        <i className="fa-regular fa-check" />
                                                    </span>
                                                    Tailored Solutions for Your Dental Needs
                                                </li>
                                                <li>
                                                    <span>
                                                        <i className="fa-regular fa-check" />
                                                    </span>
                                                    Preventive, Restorative, and Cosmetic
                                                </li>
                                                <li>
                                                    <span>
                                                        <i className="fa-regular fa-check" />
                                                    </span>
                                                    Expert Care for All Ages
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* video thumb area */}
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 mb-30">
                                        <div className="vl-blog-sm-thumb">
                                            <img className="w-100" src="assets/img/blog/vl-blog-sm-thumb-1.1.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 mb-30">
                                        <div className="vl-service-video-thum2b p-relative">
                                            <img className="w-100 br-8" src="assets/img/blog/vl-blog-sm-video-thumb-1.2.png" alt="" />
                                            <div className="popup-video vl-play-btn" onClick={() => setOpen(true)}>
                                                <span>
                                                    <i className="fa-solid fa-play" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* tags */}
                                <div className="row">
                                    <div className="col-lg-7 mb-30">
                                        <div className="vl-single-tags">
                                            <h4 className="title">Our Tags:</h4>
                                            <ul>
                                                <li>
                                                    <Link href="#">Dentist</Link>
                                                </li>
                                                <li>
                                                    <Link href="#">Creative</Link>
                                                </li>
                                                <li>
                                                    <Link href="#">Development</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 mb-30">
                                        <div className="vl-blog-share">
                                            <h4 className="title">Share:</h4>
                                            <ul>
                                                <li>
                                                    <Link href="#">
                                                        <span>
                                                            <i className="fa-brands fa-facebook-f" />
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#">
                                                        <span>
                                                            <i className="fa-brands fa-x-twitter" />
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#">
                                                        <span>
                                                            <i className="fa-brands fa-linkedin-in" />
                                                        </span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* blog comments */}
                                <div className="vl-blog-comemts">
                                    <h4 className="title mb-30">Blog Comments (2)</h4>
                                    {/* single comment */}
                                    <div className="vl-single-coments-box mb-30">
                                        <div className="vl-cmnts-flex">
                                            <div className="vl-auth-flex">
                                                <div className="auth">
                                                    <span>
                                                        <img src="assets/img/team/vl-auth-iner1.4.png" alt="" />
                                                    </span>
                                                </div>
                                                <div className="content">
                                                    <h4 className="title">
                                                        <Link href="/testimonial">Matthew Larson</Link>
                                                    </h4>
                                                    <span>8/10/2025</span>
                                                </div>
                                            </div>
                                            <div className="vl-replay">
                                                <h4 className="title">
                                                    <Link href="#">
                                                        <span>
                                                            <img src="assets/img/icons/vl-replay.svg" alt="" />
                                                        </span>
                                                        Replay
                                                    </Link>
                                                </h4>
                                            </div>
                                        </div>
                                        <p className="para">We love hearing from our readers! If you have any questions, thoughts, or personal experiences related to our blog posts, feel free to share them in the comments below. Your feedback helps us create content that’s meaningful and useful to you.</p>
                                    </div>
                                    {/* single comment */}
                                    <div className="vl-single-coments-box ml-30 mb-30">
                                        <div className="vl-cmnts-flex">
                                            <div className="vl-auth-flex">
                                                <div className="auth">
                                                    <span>
                                                        <img src="assets/img/team/vl-auth-iner1.3.png" alt="" />
                                                    </span>
                                                </div>
                                                <div className="content">
                                                    <h4 className="title">
                                                        <Link href="/testimonial">Sergio Daugherty</Link>
                                                    </h4>
                                                    <span>8/10/2025</span>
                                                </div>
                                            </div>
                                            <div className="vl-replay">
                                                <h4 className="title">
                                                    <Link href="#">
                                                        <span>
                                                            <img src="assets/img/icons/vl-replay.svg" alt="" />
                                                        </span>
                                                        Replay
                                                    </Link>
                                                </h4>
                                            </div>
                                        </div>
                                        <p className="para">Whether you want to learn more about a topic or share your own dental tips, we encourage an open conversation. Our team is here to answer any questions and engage with you as you take charge of your oral health.</p>
                                    </div>
                                </div>
                                {/* comments form */}
                                <div className="vl-coments-form">
                                    <h4 className="title">Leave a Reply</h4>
                                    <p className="para pb-32">Provide clear contact information, including phone number, email, and address.</p>
                                    <form action="#">
                                        <div className="vl-cmnts-form">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <input className="mb-20" type="text" placeholder="First Name" />
                                                </div>
                                                <div className="col-lg-6">
                                                    <input className="mb-20" type="text" placeholder="Last Name" />
                                                </div>
                                                <div className="col-lg-6">
                                                    <input className="mb-20" name="email" type="email" placeholder="Email" />
                                                </div>
                                                <div className="col-lg-6">
                                                    <input className="mb-20" type="number" placeholder="Phone" />
                                                </div>
                                                <div className="col-lg-12">
                                                    <input className="mb-20" type="text" placeholder="Subject" />
                                                </div>
                                                <div className="col-lg-12">
                                                    <textarea name="message" id="mesage" placeholder="Message" defaultValue={""} />
                                                </div>
                                                <div className="vl-cmt-btn mt-30">
                                                    <button className="vl-btn-primary">Send Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*================= Blog Details section End =================*/}
            <ModalVideo channel="youtube" videoId="wn_wKQ_UR90" isOpen={isOpen} onClose={() => setOpen(false)} />
        </>
    );
}
