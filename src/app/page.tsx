"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";
import illust from "@/app/illustration.png";
import logo from "@/app/logo.svg";

import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram } from "react-icons/io5";
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export default function Home() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!email.trim()) {
      setError("Whoops! It looks like you forgot to add your email");
      return;
    }

    if (!emailRegex.test(email.trim())) {
      setError("Please provide a valid email address");
      return;
    }

    setSuccess("Thanks! We’ll notify you 🔔");
    setEmail("");
  };

  return (
    <main className="min-h-screen bg-white flex flex-col items-center px-4 ">
      <div className="flex-1 flex flex-col items-center w-full max-w-3xl pt-12 sm:pt-16">
        {/* LOGO */}
        <Image
          src={logo}
          alt="Ping logo"
          width={90}
          height={28}
          className="h-auto w-auto"
          priority
        />

        {/* HEADING + SUBTEXT */}
        <section className="mt-10 text-center space-y-3">
          <h1 className="text-[28px] sm:text-[40px] md:text-[48px] font-extralight text-[hsl(0,0%,59%)]">
            We are launching{" "}
            <span className="font-bold text-[hsl(209,33%,12%)]">soon!</span>
          </h1>
          <p className="text-[16px] sm:text-[20px] text-[#656565]">
            Subscribe and get notified
          </p>
        </section>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="mt-8 w-full flex flex-col gap-3 sm:flex-row sm:items-start"
          noValidate
        >
          <div className="flex-1">
            <input
               id="email"
      type="email"
              placeholder="Your email address..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full rounded-full border text-[#656565] font-medium px-6 py-3.5 text-sm outline-none bg-white shadow-sm placeholder:text-[hsl(0,0%,59%)] 
              ${
                error
                  ? "border-[hsl(354,49%,60%)]"
                  : "border-[hsl(223,100%,88%)]"
              }`}
            />
            {error && (
              <p  id="email-error" className="mt-2 text-xs text-[hsl(354,100%,66%)] italic text-left ml-7 ">
                {error}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="rounded-full px-8 py-3.5 text-sm font-semibold cursor-pointer text-white shadow-lg 
                       bg-[hsl(223,87%,63%)] hover:bg-[hsl(223,87%,58%)] transition 
                       sm:min-w-[160px]"
          >
            Notify Me
          </button>
        </form>

        {success && !error && (
          <p className="mt-3 text-sm text-green-600 font-medium" aria-live="polite">{success}</p>
        )}

        {/* ILLUSTRATION */}
        <div className="mt-12 sm:mt-16 w-full flex justify-center">
          <Image
            src={illust}
            alt="Dashboard illustration"
            width={900}
            height={550}
            className="w-full max-w-2xl h-auto"
          />
        </div>
      </div>

      {/* FOOTER */}
      <footer className="w-full max-w-3xl flex flex-col items-center gap-4 pb-10">
  <div className="flex items-center gap-4">
    <button className="h-10 w-10 flex items-center justify-center cursor-pointer rounded-full border border-gray-300 hover:bg-gray-00 hover:text-white transition">
      <IoLogoFacebook className="text-xl text-[hsl(223,87%,63%)]" />
    </button>

    <button className="h-10 w-10 flex items-center justify-center cursor-pointer rounded-full border border-gray-300 hover:bg-gray-100 hover:text-white transition">
      <IoLogoTwitter className="text-xl text-[hsl(223,87%,63%)]" />
    </button>

    <button className="h-10 w-10 flex items-center justify-center cursor-pointer rounded-full border border-gray-300 hover:bg-gray-100 hover:text-white transition">
      <IoLogoInstagram className="text-xl text-[hsl(223,87%,63%)]" />
    </button>
  </div>

  <p className="text-[11px] text-[hsl(0,0%,59%)]">
    © Copyright Ping. All rights reserved.
  </p>
</footer>

    </main>
  );
}
