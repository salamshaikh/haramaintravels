// src/pages/Home.jsx
import React from "react";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import PackagesSection from "../components/PackagesSection";
import ProcessSteps from "../components/ProcessSteps";
import VideoHighlight from "../components/VideoHighlight";
import BookingForm from "../components/BookingForm";
import Testimonials from "../components/Testimonials";
import TeamSection from "../components/TeamSection";
import FAQSection from "../components/FAQSection";
import BlogSection from "../components/BlogSection";
import Partners from "../components/Partners";
import DonationBanner from "../components/DonationBanner";
import Footer from "../components/Footer";
import HeaderNav from "../components/HeaderNav";
import HeroSlider from "../components/HeroSlider";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <>
      <HeaderNav />
      <HeroSlider />
        <section id="about"><AboutSection /></section>
        <section id="services"><ServicesSection /></section>
        <section id="packages"><PackagesSection /></section>
        <section id="process"><ProcessSteps /></section>
        <section id="video"><VideoHighlight /></section>
        <section id="booking"><BookingForm /></section>
        <section id="testimonials"><Testimonials /></section>
        {/* <section id="team"><TeamSection /></section> */}
        <section id="faq"><FAQSection /></section>
        {/* <section id="blog"><BlogSection /></section>
        <section id="partners"><Partners /></section> */}
        <section id="donate"><DonationBanner /></section>
        <section id="contact"><Contact /></section>

      <Footer />
    </>
  );
};

export default Home;
