"use client";

import { Fragment, useState } from 'react';
import Link from 'next/link';

// Screen converted from the Contact design. State and derived values mirror the design's logic.
const INITIAL_STATE = Object.assign({ menu: false }, {});

class Logic {
  constructor(state, setState, props) {
    this.state = state;
    this.setState = setState;
    this.props = props || {};
  }

  
  extra(s) {
    return {
      offices: [{"code": "LOS", "city": "Lagos", "addr": "No 4 Olowu Street, Ikeja, Lagos (opposite Dimaps Battery)"}, {"code": "ABV", "city": "Abuja", "addr": "Block SB3, Flat 16, NNPC (opposite Wema Bank), Area 11, Garki, Abuja"}, {"code": "AKR", "city": "Akure", "addr": "Plot 12 Block B Ikale Street (opposite Ijapo Estate Field), Ijapo Estate, Akure"}, {"code": "OND", "city": "Ondo", "addr": "8A Messiah Majesty Shopping Complex, Ondo Ore Ring Road, Ondo"}],
      channels: [
        { label: 'WHATSAPP', value: '+234 703 322 1729', href: 'https://wa.me/2347033221729', bg: '#DDF3FF', icon: 'M4 5h16v11H9l-5 4V5z' },
        { label: 'CALL', value: '+234 703 322 1729', href: 'tel:+2347033221729', bg: '#DCE6FA', icon: 'M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z' },
        { label: 'BOOKINGS', value: 'bookings@flymatas.com', href: 'mailto:bookings@flymatas.com', bg: '#FFE1E7', icon: 'M3 6h18v12H3zM3 7l9 6 9-6' },
        { label: 'GENERAL', value: 'info@flymatas.com', href: 'mailto:info@flymatas.com', bg: '#E8ECF5', icon: 'M3 6h18v12H3zM3 7l9 6 9-6' }
      ]
    };
  }
  renderVals() {
    const s = this.state;
    const base = { menuOpen: s.menu, toggleMenu: () => this.setState({ menu: !s.menu }) };
    return Object.assign(base, {}, this.extra(s));
  }
}

export default function ContactScreen(props) {
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
              <Link className="navlink" href="/guides">
                Guides
              </Link>
              <Link className="navlink" href="/news">
                News
              </Link>
              <Link className="navlink" href="/about">
                About
              </Link>
              <Link className="navlink" href="/contact" aria-current="page" style={{ "borderBottom": "2px solid #FD6886" }}>
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
                  CONTACT
                </span>
              </nav>
              <h1 className="disp hero-h1" style={{ "margin": "0", "color": "#fff", "fontSize": "72px", "lineHeight": "1.02", "fontWeight": "700" }}>
                {"Four terminals. "}
                <em className="acc" style={{ "color": "#FDFDFA" }}>
                  Real people.
                </em>
              </h1>
              <p style={{ "margin": "0", "color": "#F1F5FF", "fontSize": "19px", "lineHeight": "1.55", "maxWidth": "620px" }}>
                Message us on WhatsApp, call, email or walk into any of our offices. Please reach out: a real person answers, and we’re glad to help.
              </p>
            </div>
          </div>
          <svg aria-hidden="true" viewBox="0 0 1440 120" preserveAspectRatio="none" style={{ "position": "absolute", "left": "0", "bottom": "0", "width": "100%", "height": "90px", "display": "block" }}>
            <path d="M0 120 L0 86 L60 86 L60 70 L92 70 L92 86 L150 86 L150 52 L172 52 L172 86 L240 86 L262 64 L284 86 L380 86 L380 60 L398 44 L416 60 L416 86 L520 86 L520 74 L600 74 L600 86 L700 86 L700 40 L716 40 L716 86 L820 86 L840 66 L860 86 L960 86 L960 58 L1000 58 L1000 86 L1100 86 L1100 72 L1160 72 L1160 86 L1260 86 L1280 50 L1300 86 L1440 86 L1440 120 Z" fill="#FDFDFA"></path>
          </svg>
        </section>
        <section className="wrap" style={{ "paddingTop": "72px" }}>
          <div className="g4">
            {(v.channels || []).map((c, __i6) => (
              <Fragment key={__i6}>
                <a href={c.href} className="lift" style={{ "textDecoration": "none", "color": "#0F1518", "background": c.bg, "borderRadius": "22px", "padding": "24px", "display": "flex", "flexDirection": "column", "gap": "14px", "minHeight": "180px" }}>
                  <span style={{ "width": "48px", "height": "48px", "borderRadius": "14px", "background": "#fff", "display": "grid", "placeItems": "center" }} aria-hidden="true">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0F1518" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d={c.icon}></path>
                    </svg>
                  </span>
                  <span className="mono" style={{ "fontSize": "11px" }}>
                    {c.label}
                  </span>
                  <span className="disp" style={{ "fontSize": "20px", "lineHeight": "1", "wordBreak": "break-word" }}>
                    {c.value}
                  </span>
                </a>
              </Fragment>
            ))}
          </div>
        </section>
        <section className="wrap" style={{ "paddingTop": "72px" }}>
          <div className="two">
            <form className="main" aria-label="Send us a message" style={{ "background": "#FFFFFF", "border": "1px solid #E3E8F2", "borderRadius": "26px", "padding": "34px", "display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(220px, 1fr))", "gap": "20px" }}>
              <h2 className="disp" style={{ "gridColumn": "1 / -1", "margin": "0", "fontSize": "45px", "lineHeight": "1.02" }}>
                {"Send us a "}
                <em className="acc" style={{ "color": "#255BD9" }}>
                  message
                </em>
              </h2>
              <div>
                <label className="lbl" htmlFor="k-name">
                  Full name
                </label>
                <input id="k-name" className="input" type="text" autoComplete="name" />
              </div>
              <div>
                <label className="lbl" htmlFor="k-phone">
                  Phone / WhatsApp
                </label>
                <input id="k-phone" className="input" type="tel" autoComplete="tel" placeholder="+234" />
              </div>
              <div>
                <label className="lbl" htmlFor="k-email">
                  Email
                </label>
                <input id="k-email" className="input" type="email" autoComplete="email" />
              </div>
              <div>
                <label className="lbl" htmlFor="k-topic">
                  What is it about?
                </label>
                <select id="k-topic" className="input">
                  <option>
                    Leisure trip
                  </option>
                  <option>
                    Study abroad
                  </option>
                  <option>
                    Work abroad
                  </option>
                  <option>
                    Visa help
                  </option>
                  <option>
                    Medical tourism
                  </option>
                  <option>
                    Migration
                  </option>
                  <option>
                    Flymatas Varsity
                  </option>
                  <option>
                    Something else
                  </option>
                </select>
              </div>
              <div style={{ "gridColumn": "1 / -1" }}>
                <label className="lbl" htmlFor="k-msg">
                  Message
                </label>
                <textarea id="k-msg" className="input" rows="5" />
              </div>
              <div style={{ "gridColumn": "1 / -1" }}>
                <button type="button" className="btn" style={{ "background": "#0F1518", "color": "#fff" }}>
                  Send message
                </button>
              </div>
            </form>
            <aside className="side" style={{ "display": "flex", "flexDirection": "column", "gap": "16px" }}>
              <div style={{ "height": "260px", "borderRadius": "22px", "background": "#DCE6FA", "position": "relative", "overflow": "hidden" }} role="img" aria-label="Map placeholder showing the Akure office">
                <svg width="100%" height="100%" viewBox="0 0 300 260" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                  <path d="M0 60 H300 M0 140 H300 M0 210 H300 M70 0 V260 M170 0 V260 M250 0 V260" stroke="#fff" strokeWidth="8"></path>
                  <path d="M0 100 C80 90 120 180 300 170" stroke="#B9CBF5" strokeWidth="14" fill="none"></path>
                </svg>
                {" "}
                <span style={{ "position": "absolute", "left": "50%", "top": "44%", "transform": "translate(-50%,-100%)", "color": "#FD6886" }}>
                  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#FD6886" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 21s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12zM12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path>
                  </svg>
                </span>
                {" "}
                <span className="mono" style={{ "position": "absolute", "left": "16px", "bottom": "14px", "fontSize": "11px", "background": "#0F1518", "color": "#86D5FF", "padding": "6px 10px", "borderRadius": "8px" }}>
                  {"AKURE · IJAPO E{}"}
                </span>
              </div>
              <div style={{ "background": "#0F1518", "color": "#fff", "borderRadius": "22px", "padding": "24px" }}>
                <span className="mono" style={{ "fontSize": "11px", "color": "#86D5FF" }}>
                  WE’RE AVAILABLE
                </span>
                <div className="disp" style={{ "fontSize": "32px", "marginTop": "8px" }}>
                  24/7
                </div>
                <div style={{ "color": "#AEB7BF", "fontSize": "14px", "marginTop": "6px" }}>
                  Our team is available in person and online. Office opening hours: [HOURS].
                </div>
              </div>
            </aside>
          </div>
        </section>
        <section className="wrap" style={{ "paddingTop": "96px" }}>
          <div style={{ "display": "flex", "justifyContent": "space-between", "alignItems": "flex-end", "gap": "24px", "flexWrap": "wrap", "marginBottom": "36px" }}>
            <div style={{ "maxWidth": "720px" }}>
              <span className="mono" style={{ "fontSize": "13px", "color": "#255BD9" }}>
                OFFICES
              </span>
              <h2 className="disp" style={{ "margin": "10px 0 0", "fontSize": "53px", "lineHeight": "1.02", "fontWeight": "700" }}>
                {"Walk "}
                <em className="acc" style={{ "color": "#255BD9" }}>
                  right in
                </em>
              </h2>
            </div>
          </div>
          <div className="g4">
            {(v.offices || []).map((o, __i6) => (
              <Fragment key={__i6}>
                <address className="lift" style={{ "fontStyle": "normal", "background": "#FFFFFF", "border": "1px solid #E3E8F2", "borderRadius": "20px", "padding": "22px", "display": "flex", "flexDirection": "column", "gap": "12px" }}>
                  <span style={{ "display": "flex", "justifyContent": "space-between", "alignItems": "center" }}>
                    <span className="mono" style={{ "fontSize": "11px", "color": "#4D555E" }}>
                      TERMINAL
                    </span>
                    <span className="mono" style={{ "fontSize": "12px", "background": "#0F1518", "color": "#86D5FF", "padding": "4px 8px", "borderRadius": "6px" }}>
                      {o.code}
                    </span>
                  </span>
                  <span className="disp" style={{ "fontSize": "28px" }}>
                    {o.city}
                  </span>
                  <span style={{ "color": "#4D555E", "fontSize": "14px", "lineHeight": "1.55" }}>
                    {o.addr}
                  </span>
                  <a href="https://maps.google.com" style={{ "fontSize": "14px", "fontWeight": "600", "color": "#255BD9" }}>
                    Get directions
                  </a>
                </address>
              </Fragment>
            ))}
          </div>
          <div style={{ "marginTop": "28px", "display": "flex", "flexWrap": "wrap", "gap": "10px", "alignItems": "center" }}>
            <span className="mono" style={{ "fontSize": "11px", "color": "#4D555E", "marginRight": "6px" }}>
              FOLLOW
            </span>
            <a className="chip" href="https://www.facebook.com/flymatas" style={{ "background": "#EEF3FD", "color": "#0F1518", "textDecoration": "none", "minHeight": "44px" }}>
              Facebook
            </a>
            <a className="chip" href="https://www.instagram.com/flymatas" style={{ "background": "#EEF3FD", "color": "#0F1518", "textDecoration": "none", "minHeight": "44px" }}>
              Instagram
            </a>
            <a className="chip" href="https://x.com/flymatas" style={{ "background": "#EEF3FD", "color": "#0F1518", "textDecoration": "none", "minHeight": "44px" }}>
              X
            </a>
            <a className="chip" href="https://vm.tiktok.com/ZMk4sWchU/" style={{ "background": "#EEF3FD", "color": "#0F1518", "textDecoration": "none", "minHeight": "44px" }}>
              TikTok
            </a>
            <a className="chip" href="https://www.youtube.com/@flymatas" style={{ "background": "#EEF3FD", "color": "#0F1518", "textDecoration": "none", "minHeight": "44px" }}>
              YouTube
            </a>
          </div>
          <div style={{ "marginTop": "20px", "color": "#4D555E", "fontSize": "15px" }}>
            {"Flymatas Aviation Varsity: "}
            <a href="tel:+2348133221729" style={{ "fontWeight": "600" }}>
              +234 813 322 1729
            </a>
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
