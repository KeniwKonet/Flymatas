"use client";

import { Fragment, useState } from 'react';
import Link from 'next/link';

// Screen converted from the Guides design. State and derived values mirror the design's logic.
const INITIAL_STATE = Object.assign({ menu: false }, {"tag": "All"});

class Logic {
  constructor(state, setState, props) {
    this.state = state;
    this.setState = setState;
    this.props = props || {};
  }

  
  extra(s) {
    const chips = [["All", "All"], ["Visa", "Visa"], ["Canada", "Canada"], ["Study", "Study"], ["Exams", "Exams"], ["Relocation", "Relocation"]].map(([id, label]) => ({ label, on: s.tag === id ? 'true' : 'false', bg: s.tag === id ? '#0F1518' : '#FFFFFF', fg: s.tag === id ? '#FFFFFF' : '#0F1518', pick: () => this.setState({ tag: id }) }));
    const R = [{"tag": "Exams", "title": "List of all international exams", "date": "31 Jan 2025", "tint": "#FFE1E7", "url": "GuideArticle.dc.html"}, {"tag": "Canada", "title": "Trade schools in Canada: a brief", "date": "31 Jan 2025", "tint": "#DCE6FA", "url": "GuideArticle.dc.html"}, {"tag": "Relocation", "title": "Accessing the Ponga relocation opportunity", "date": "31 Jan 2025", "tint": "#DDF3FF", "url": "GuideArticle.dc.html"}, {"tag": "Canada", "title": "Young Professional Fellowship Canada 2025: step by step", "date": "31 Jan 2025", "tint": "#E8ECF5", "url": "GuideArticle.dc.html"}, {"tag": "Visa", "title": "Schengen visa application: the basics you need to know", "date": "31 Jan 2025", "tint": "#DCE6FA", "url": "GuideArticle.dc.html"}, {"tag": "Canada", "title": "Ontario Permanent Residency (PR) pathway: step by step", "date": "31 Jan 2025", "tint": "#FFE1E7", "url": "GuideArticle.dc.html"}, {"tag": "Study", "title": "Study in Malta: 2025 intakes", "date": "21 May", "tint": "#DDF3FF", "url": "GuideArticle.dc.html"}, {"tag": "Study", "title": "Study abroad 2025: where Nigerians are going", "date": "08 Apr", "tint": "#E8ECF5", "url": "GuideArticle.dc.html"}, {"tag": "Study", "title": "The Flymatas study abroad package, explained", "date": "19 Dec", "tint": "#DCE6FA", "url": "GuideArticle.dc.html"}].map(r => Object.assign({}, r, { tagU: r.tag.toUpperCase() }));
    const list = s.tag === 'All' ? R : R.filter(r => r.tag === s.tag);
    return { chips, list, count: list.length + (list.length === 1 ? ' GUIDE' : ' GUIDES') };
  }
  renderVals() {
    const s = this.state;
    const base = { menuOpen: s.menu, toggleMenu: () => this.setState({ menu: !s.menu }) };
    return Object.assign(base, {}, this.extra(s));
  }
}

export default function GuidesScreen(props) {
  const [state, setRaw] = useState(INITIAL_STATE);
  const setState = (patch) => setRaw((s) => ({ ...s, ...(typeof patch === 'function' ? patch(s) : patch) }));
  const v = new Logic(state, setState, props).renderVals();
  return (
    <>
      <div className="mapbg" style={{ "width": "100%", "overflowX": "hidden" }}>
        <section className="sky" style={{ "position": "relative", "overflow": "hidden", "paddingBottom": "130px" }}>
          <div className="cloud drift-a" aria-hidden="true" style={{ "width": "220px", "height": "54px", "top": "140px", "left": "5%", "opacity": ".65" }}></div>
          <div className="cloud drift-b" aria-hidden="true" style={{ "width": "280px", "height": "64px", "top": "210px", "right": "6%", "opacity": ".5" }}></div>
          <div className="flight" aria-hidden="true" style={{ "top": "118px", "zIndex": "2" }}>
            <div className="bob">
              <div className="trail" style={{ "top": "22px" }}></div>
              <div className="trail" style={{ "top": "30px", "opacity": ".6" }}></div>
              <svg width="210" height="70" viewBox="0 0 240 80" style={{ "display": "block", "overflow": "visible" }}>
                <path d="M110 44 L66 6 L88 6 L150 40 Z" fill="#B9CBF5"></path>
                <path d="M18 40 L4 6 L32 6 L60 34 Z" fill="#FD6886"></path>
                <path d="M10 44 C10 36 30 31 60 31 L198 31 C222 31 238 38 238 44 C238 50 222 55 198 55 L60 55 C30 55 10 52 10 44 Z" fill="#FFFFFF"></path>
                <path d="M30 49 L236 47 C234 51 222 55 198 55 L60 55 C40 55 30 53 30 49 Z" fill="#0F1518"></path>
                <path d="M36 46 L234 44" stroke="#FD6886" strokeWidth="2"></path>
                <path d="M216 36 L229 37.5 L232 42 L216 41 Z" fill="#0F1518"></path>
                <g fill="#255BD9">
                  <circle cx="80" cy="39" r="2"></circle>
                  <circle cx="95" cy="39" r="2"></circle>
                  <circle cx="110" cy="39" r="2"></circle>
                  <circle cx="125" cy="39" r="2"></circle>
                  <circle cx="140" cy="39" r="2"></circle>
                  <circle cx="155" cy="39" r="2"></circle>
                  <circle cx="170" cy="39" r="2"></circle>
                  <circle cx="185" cy="39" r="2"></circle>
                  <circle cx="200" cy="39" r="2"></circle>
                </g>
                <path d="M22 46 L2 58 L18 58 L48 48 Z" fill="#FD6886"></path>
                <path d="M108 48 L78 78 L100 78 L152 50 Z" fill="#E6EDFF" stroke="#B9CBF5" strokeWidth="1"></path>
                <rect x="104" y="57" width="30" height="11" rx="5.5" fill="#0F1518"></rect>
              </svg>
            </div>
          </div>
          <div className="cloud drift-c" aria-hidden="true" style={{ "width": "200px", "height": "46px", "top": "150px", "left": "52%", "zIndex": "3", "opacity": ".85" }}></div>
          <header className="wrap" style={{ "position": "relative", "zIndex": "5", "display": "flex", "alignItems": "center", "justifyContent": "space-between", "gap": "24px", "paddingTop": "22px", "paddingBottom": "22px" }}>
            <Link href="/" aria-label="Flymatas home" style={{ "display": "flex", "alignItems": "center", "textDecoration": "none" }}>
              <img src="/assets/lockup-white.png" alt="Flymatas" style={{ "height": "38px", "width": "auto", "display": "block" }} />
            </Link>
            <nav className="desk" aria-label="Main" style={{ "alignItems": "center", "gap": "22px" }}>
              <Link className="navlink" href="/destinations">
                Destinations
              </Link>
              <Link className="navlink" href="/study-abroad">
                Study
              </Link>
              <Link className="navlink" href="/work-abroad">
                Work
              </Link>
              <Link className="navlink" href="/visa">
                Visa
              </Link>
              <Link className="navlink" href="/varsity">
                Varsity
              </Link>
              <Link className="navlink" href="/guides" aria-current="page" style={{ "borderBottom": "2px solid #FD6886" }}>
                Guides
              </Link>
              <Link className="navlink" href="/news">
                News
              </Link>
              <Link className="navlink" href="/about">
                About
              </Link>
              <Link className="navlink" href="/contact">
                Contact
              </Link>
            </nav>
            <div className="desk" style={{ "alignItems": "center", "gap": "12px" }}>
              <Link className="navlink" href="/account">
                Log in
              </Link>
              {" "}
              <Link className="btn" href="/book" style={{ "background": "#FD6886", "color": "#0F1518" }}>
                Book a clarity call
              </Link>
            </div>
            <button className="mob btn" type="button" aria-label="Menu" aria-expanded={v.menuOpen} onClick={v.toggleMenu} style={{ "background": "rgba(255,255,255,.18)", "color": "#fff", "width": "48px", "padding": "0" }}>
              <svg className="i-open" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16"></path>
              </svg>
              <svg className="i-close" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18"></path>
              </svg>
            </button>
          </header>
          {v.menuOpen ? (
            <>
              <nav aria-label="Mobile" className="wrap mnav">
                <Link className="navlink" href="/">
                  Home
                </Link>
                <Link className="navlink" href="/destinations">
                  Destinations
                </Link>
                <Link className="navlink" href="/study-abroad">
                  Study abroad
                </Link>
                <Link className="navlink" href="/work-abroad">
                  Work abroad
                </Link>
                <Link className="navlink" href="/visa">
                  Visa help
                </Link>
                <Link className="navlink" href="/varsity">
                  Aviation Varsity
                </Link>
                <Link className="navlink" href="/guides">
                  Free guides
                </Link>
                <Link className="navlink" href="/news">
                  News
                </Link>
                <Link className="navlink" href="/about">
                  About
                </Link>
                <Link className="navlink" href="/contact">
                  Contact
                </Link>
                <div className="mnav-acc">
                  <Link href="/account">
                    Log in
                  </Link>
                  <Link href="/account/trips">
                    My trips
                  </Link>
                </div>
                <Link className="btn" href="/book" style={{ "background": "#FD6886", "color": "#0F1518" }}>
                  Plan my trip
                </Link>
                <a className="btn" href="https://wa.me/2347033221729" style={{ "background": "transparent", "color": "#fff", "border": "1px solid #3A454D" }}>
                  Chat on WhatsApp
                </a>
              </nav>
            </>
          ) : null}
          <div className="wrap" style={{ "position": "relative", "zIndex": "4", "paddingTop": "140px", "display": "flex", "flexWrap": "wrap", "gap": "40px", "alignItems": "flex-end", "justifyContent": "space-between" }}>
            <div style={{ "flex": "999 1 560px", "minWidth": "0", "display": "flex", "flexDirection": "column", "gap": "18px" }}>
              <nav aria-label="Breadcrumb" className="mono" style={{ "fontSize": "12px", "color": "#E6EDFF", "display": "flex", "gap": "8px", "flexWrap": "wrap" }}>
                <Link className="crumb" href="/">
                  HOME
                </Link>
                <span aria-hidden="true">
                  /
                </span>
                <span>
                  FREE GUIDES
                </span>
              </nav>
              <h1 className="disp hero-h1" style={{ "margin": "0", "color": "#fff", "fontSize": "72px", "lineHeight": "1.02", "fontWeight": "700" }}>
                {"Free guides. No "}
                <em className="acc" style={{ "color": "#FDFDFA" }}>
                  gatekeeping.
                </em>
              </h1>
              <p style={{ "margin": "0", "color": "#F1F5FF", "fontSize": "19px", "lineHeight": "1.55", "maxWidth": "620px" }}>
                What our consultants tell clients across the desk, written down for free: exams, Canada routes, relocation and Schengen basics.
              </p>
            </div>
          </div>
          <svg aria-hidden="true" viewBox="0 0 1440 120" preserveAspectRatio="none" style={{ "position": "absolute", "left": "0", "bottom": "0", "width": "100%", "height": "90px", "display": "block" }}>
            <path d="M0 120 L0 86 L60 86 L60 70 L92 70 L92 86 L150 86 L150 52 L172 52 L172 86 L240 86 L262 64 L284 86 L380 86 L380 60 L398 44 L416 60 L416 86 L520 86 L520 74 L600 74 L600 86 L700 86 L700 40 L716 40 L716 86 L820 86 L840 66 L860 86 L960 86 L960 58 L1000 58 L1000 86 L1100 86 L1100 72 L1160 72 L1160 86 L1260 86 L1280 50 L1300 86 L1440 86 L1440 120 Z" fill="#FDFDFA"></path>
          </svg>
        </section>
        <section className="wrap" style={{ "paddingTop": "72px" }}>
          <div style={{ "display": "flex", "flexWrap": "wrap", "justifyContent": "space-between", "alignItems": "center", "gap": "16px", "marginBottom": "28px" }}>
            <div role="group" aria-label="Topic" style={{ "display": "flex", "flexWrap": "wrap", "gap": "8px" }}>
              {(v.chips || []).map((c, __i7) => (
                <Fragment key={__i7}>
                  <button type="button" aria-pressed={c.on} onClick={c.pick} style={{ "minHeight": "44px", "padding": "0 18px", "borderRadius": "999px", "border": "1.5px solid #0F1518", "cursor": "pointer", "font": "600 14px 'Outfit', sans-serif", "background": c.bg, "color": c.fg }}>
                    {c.label}
                  </button>
                </Fragment>
              ))}
            </div>
            <span className="mono" style={{ "fontSize": "12px", "color": "#4D555E" }}>
              {v.count}
            </span>
          </div>
          <Link href="/guides/article" className="lift" style={{ "textDecoration": "none", "color": "#fff", "display": "flex", "flexWrap": "wrap", "gap": "32px", "alignItems": "flex-end", "justifyContent": "space-between", "background": "#0F1518", "borderRadius": "26px", "padding": "40px", "marginBottom": "28px" }}>
            <span style={{ "display": "flex", "flexDirection": "column", "gap": "12px", "maxWidth": "720px" }}>
              <span className="mono" style={{ "fontSize": "12px", "color": "#86D5FF" }}>
                FEATURED · VISA · 8 MIN READ
              </span>
              <span className="disp" style={{ "fontSize": "53px", "lineHeight": "1.02" }}>
                {"Schengen visa application: "}
                <em className="acc" style={{ "color": "#FD6886" }}>
                  the basics
                </em>
              </span>
              <span style={{ "color": "#AEB7BF", "fontSize": "16px", "lineHeight": "1.6" }}>
                One visa, most of Europe. What it covers, where to apply and the documents Nigerian applicants get wrong most often.
              </span>
            </span>
            <span className="btn" style={{ "background": "#FD6886", "color": "#0F1518" }}>
              Read the guide
            </span>
          </Link>
          <div style={{ "display": "flex", "flexWrap": "wrap", "gap": "28px", "alignItems": "center", "background": "#DCE6FA", "borderRadius": "26px", "padding": "32px", "marginBottom": "28px", "position": "relative" }}>
            <svg className="dip" aria-hidden="true" width="120" height="26" viewBox="0 0 120 26" style={{ "right": "56px" }}>
              <path d="M0 -1 H120 V0 C92 0 86 24 60 24 C34 24 28 0 0 0 Z" fill="#FDFDFA"></path>
              <path d="M0 0 C28 0 34 24 60 24 C86 24 92 0 120 0" fill="none" stroke="#DCE6FA" strokeWidth="1"></path>
            </svg>
            <img src="/assets/pof-ebook.jpg" alt="Cover: Understanding How Proof of Fund Works, by Ayorinde Alex" style={{ "flex": "0 0 150px", "width": "150px", "height": "auto", "borderRadius": "6px 12px 12px 6px", "boxShadow": "0 18px 30px rgba(15,21,24,.25)" }} />
            <div style={{ "flex": "999 1 380px", "display": "flex", "flexDirection": "column", "gap": "10px" }}>
              <span className="mono" style={{ "fontSize": "12px", "color": "#255BD9" }}>
                EBOOK BY OUR FOUNDER
              </span>
              <h2 className="disp" style={{ "margin": "0", "fontSize": "37px", "lineHeight": "1.02" }}>
                {"Understanding how proof of funds "}
                <em className="acc" style={{ "color": "#255BD9" }}>
                  works
                </em>
              </h2>
              <p style={{ "margin": "0", "color": "#4D555E", "fontSize": "16px", "lineHeight": "1.6" }}>
                A complete guide to getting your proof of funds right and securing your visa, by Ayorinde Alex.
              </p>
            </div>
            <div style={{ "display": "flex", "flexDirection": "column", "gap": "10px", "alignItems": "flex-start" }}>
              <span className="disp" style={{ "fontSize": "37px", "lineHeight": "1" }}>
                ₦5,000
              </span>
              <span style={{ "fontSize": "14px", "color": "#4D555E" }}>
                or $5 if you’re outside Nigeria
              </span>
              <a className="btn" href="https://wa.me/2347033221729?text=Hello%20Flymatas%2C%20please%20I%20would%20like%20the%20proof%20of%20funds%20ebook." style={{ "background": "#0F1518", "color": "#fff" }}>
                Get the ebook
              </a>
            </div>
          </div>
          <div className="g3">
            {(v.list || []).map((r, __i6) => (
              <Fragment key={__i6}>
                {" "}
                <a href={r.url} className="lift" style={{ "textDecoration": "none", "color": "#0F1518", "background": "#FFFFFF", "border": "1px solid #E3E8F2", "borderRadius": "20px", "overflow": "hidden", "display": "flex", "flexDirection": "column" }}>
                  <span style={{ "height": "120px", "background": r.tint, "display": "flex", "alignItems": "flex-end", "justifyContent": "space-between", "padding": "18px" }}>
                    <span className="mono" style={{ "fontSize": "11px" }}>
                      {r.tagU}
                    </span>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0F1518" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M6 3h9l4 4v14H6zM14 3v5h5M9 13h7M9 17h5"></path>
                    </svg>
                  </span>
                  <span style={{ "padding": "20px", "display": "flex", "flexDirection": "column", "gap": "10px", "flex": "1 1 auto" }}>
                    <span className="disp" style={{ "fontSize": "22px", "lineHeight": "1.02" }}>
                      {r.title}
                    </span>
                    <span className="mono" style={{ "marginTop": "auto", "fontSize": "11px", "color": "#4D555E" }}>
                      {r.date}{" · FREE DOWNLOAD"}
                    </span>
                  </span>
                </a>
                {" "}
              </Fragment>
            ))}
          </div>
        </section>
        <footer style={{ "marginTop": "96px", "background": "#0F1518", "color": "#fff", "padding": "72px 0 36px" }}>
          <div className="wrap" style={{ "display": "flex", "flexDirection": "column", "gap": "48px" }}>
            <div style={{ "display": "flex", "justifyContent": "space-between", "alignItems": "flex-end", "gap": "32px", "flexWrap": "wrap" }}>
              <h2 className="disp" style={{ "margin": "0", "fontSize": "60px", "lineHeight": "1.02", "fontWeight": "700" }}>
                Final call for
                <br />
                {"passenger: "}
                <em className="acc" style={{ "color": "#FD6886" }}>
                  you.
                </em>
              </h2>
              <div style={{ "display": "flex", "flexWrap": "wrap", "gap": "12px" }}>
                <a className="btn" href="https://wa.me/2347033221729" style={{ "background": "#FD6886", "color": "#0F1518" }}>
                  Chat on WhatsApp
                </a>
                <Link className="btn" href="/book" style={{ "background": "transparent", "color": "#fff", "border": "1px solid #3A454D" }}>
                  Plan my trip
                </Link>
              </div>
            </div>
            <div className="g4" style={{ "gap": "32px", "paddingTop": "40px", "borderTop": "1px solid #2A343B" }}>
              <div style={{ "display": "flex", "flexDirection": "column", "gap": "12px" }}>
                <img src="/assets/lockup-white.png" alt="Flymatas" style={{ "height": "40px", "width": "auto", "alignSelf": "flex-start" }} />
                <span className="mono" style={{ "fontSize": "11px", "color": "#FD6886" }}>
                  ESCAPE THE ORDINARY
                </span>
                <p style={{ "margin": "0", "color": "#AEB7BF", "fontSize": "14px", "lineHeight": "1.6" }}>
                  Just let us fix your travels. Leisure, study abroad and work abroad from Lagos, Abuja, Akure and Ondo.
                </p>
              </div>
              <nav aria-label="Footer" style={{ "display": "flex", "flexDirection": "column", "gap": "10px", "fontSize": "14px" }}>
                <span className="mono" style={{ "fontSize": "11px", "color": "#9AA5AF" }}>
                  EXPLORE
                </span>
                <Link href="/destinations" style={{ "color": "#fff" }}>
                  Destinations
                </Link>
                <Link href="/study-abroad" style={{ "color": "#fff" }}>
                  Study abroad
                </Link>
                <Link href="/work-abroad" style={{ "color": "#fff" }}>
                  Work abroad
                </Link>
                <Link href="/visa" style={{ "color": "#fff" }}>
                  Visa help
                </Link>
                <Link href="/book" style={{ "color": "#fff" }}>
                  Medical tourism
                </Link>
                <Link href="/book" style={{ "color": "#fff" }}>
                  Migration
                </Link>
                <Link href="/varsity" style={{ "color": "#fff" }}>
                  Aviation Varsity
                </Link>
                <Link href="/guides" style={{ "color": "#fff" }}>
                  Free guides
                </Link>
                <Link href="/news" style={{ "color": "#fff" }}>
                  {"News & blog"}
                </Link>
              </nav>
              <nav aria-label="Company" style={{ "display": "flex", "flexDirection": "column", "gap": "10px", "fontSize": "14px" }}>
                <span className="mono" style={{ "fontSize": "11px", "color": "#9AA5AF" }}>
                  COMPANY
                </span>
                <Link href="/about" style={{ "color": "#fff" }}>
                  About us
                </Link>
                <Link href="/experiences" style={{ "color": "#fff" }}>
                  Experiences
                </Link>
                <Link href="/contact" style={{ "color": "#fff" }}>
                  Contact
                </Link>
                <Link href="/account" style={{ "color": "#fff" }}>
                  My trips
                </Link>
                <a href="https://www.instagram.com/flymatas" style={{ "color": "#fff" }}>
                  Instagram
                </a>
                <a href="https://vm.tiktok.com/ZMk4sWchU/" style={{ "color": "#fff" }}>
                  TikTok
                </a>
                <a href="https://www.youtube.com/@flymatas" style={{ "color": "#fff" }}>
                  YouTube
                </a>
              </nav>
              <form aria-label="Newsletter" style={{ "display": "flex", "flexDirection": "column", "gap": "10px" }}>
                <label htmlFor="nl" className="mono" style={{ "fontSize": "11px", "color": "#9AA5AF" }}>
                  TRAVEL UPDATES BY EMAIL
                </label>
                <div style={{ "display": "flex", "gap": "8px", "flexWrap": "wrap" }}>
                  <input id="nl" type="email" placeholder="you@email.com" style={{ "flex": "1 1 160px", "minWidth": "0", "minHeight": "48px", "borderRadius": "999px", "border": "1px solid #3A454D", "background": "#1A2228", "color": "#fff", "padding": "0 18px", "font": "15px 'Outfit', sans-serif" }} />
                  <button type="button" className="btn" style={{ "background": "#fff", "color": "#0F1518" }}>
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
            <div style={{ "display": "flex", "justifyContent": "space-between", "gap": "16px", "flexWrap": "wrap", "color": "#9AA5AF", "fontSize": "13px" }}>
              <span>
                {"© 2026 Flymatas Travels & Tours. Managed by Flymatas Business Management Consult."}
              </span>
              <span style={{ "display": "flex", "gap": "18px" }}>
                <Link href="/404" style={{ "color": "#9AA5AF" }} prefetch={false}>
                  Privacy policy
                </Link>
                <Link href="/404" style={{ "color": "#9AA5AF" }} prefetch={false}>
                  Terms
                </Link>
              </span>
            </div>
          </div>
        </footer>
        <div className="mbar" role="region" aria-label="Quick actions">
          <button type="button" className="mbar-menu" aria-expanded={v.menuOpen} aria-label="Menu" onClick={v.toggleMenu}>
            <svg className="i-open" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16"></path>
            </svg>
            <svg className="i-close" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18"></path>
            </svg>
            <span>
              Menu
            </span>
          </button>
          <Link className="mbar-plan" href="/book">
            Plan my trip
          </Link>
          <a className="mbar-wa" href="https://wa.me/2347033221729" aria-label="Chat on WhatsApp">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M3 21l1.7-5A8.5 8.5 0 1 1 8 19.3L3 21z"></path>
              <path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1.2-1.4-2-1-1 .8a4 4 0 0 1-2.1-2.1l.8-1-1-2L9 9.5z"></path>
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}
