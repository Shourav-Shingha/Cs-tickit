import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div>
      <footer className=" grid grid-cols-1 lg:grid-cols-5  footer sm:footer-horizontal bg-black text-white p-10 border-b border-gray-500">
        <nav className="lg:mr-10">
          <p>
            <span className="text-2xl font-semibold">Cs-Ticket System</span>
            <br />
            A Customer Support (CS) Ticket System manages and tracks <br />{" "}
            customer issues efficiently. Each inquiry creates <br /> a ticket
            with details like priority, status, and customer info. <br />
            Agents can assign, update, and resolve tickets.
          </p>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Our Mission</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Products & Services</a>
          <a className="link link-hover">Customer Stories</a>
          <a className="link link-hover">Download Apps</a>
        </nav>
        <nav>
          <h6 className="footer-title">Information</h6>
          <a className="link link-hover">Terms & Condition</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Join Us</a>
        </nav>
        <nav>
          <h6 className="footer-title">Social Links</h6>
          <a className="link link-hover flex items-center gap-2">
            <FaXTwitter /> @CS-Ticket System
          </a>
          <a className="link link-hover flex items-center gap-2">
            {" "}
            <FaLinkedinIn /> @CS-Ticket System
          </a>
          <a className="link link-hover flex items-center gap-2">
            <FaFacebookSquare /> @CS-Ticket System
          </a>
          <a className="link link-hover flex items-center gap-2">
            <MdOutlineEmail /> support@cst.com
          </a>
        </nav>
      </footer>
      <footer className="footer sm:footer-horizontal footer-center bg-black text-white p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - Ticket System. All rights reserved.
          </p>
        </aside>
      </footer>
    </div>
  );
};
// © 2025 CS — Ticket System. All rights reserved.
export default Footer;
