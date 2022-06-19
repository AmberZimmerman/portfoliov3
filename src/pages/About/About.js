import React from "react";
import Lefthero from "../../components/Left-hero";
import Heroimage from "../../components/Hero-image";
import Bio from "../../components/Bio";
import "./About.css";

export default function Home({ currentPage, handlePageChange }) {
  return (
    <section className="hero home-grid">
      <Lefthero />
      <Heroimage />
      <Bio currentPage={currentPage} handlePageChange={handlePageChange} />
    </section>
  );
}
