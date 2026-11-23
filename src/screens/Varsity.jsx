"use client";

import { Fragment, useState } from 'react';
import Link from 'next/link';

// Screen converted from the Varsity design. State and derived values mirror the design's logic.
const INITIAL_STATE = Object.assign({ menu: false }, {});

class Logic {
  constructor(state, setState, props) {
    this.state = state;
    this.setState = setState;
    this.props = props || {};
  }

  
  extra(s) {
    return {
      courses: [
        { name: 'Flight Ticket Reservation', dur: '[WEEKS]', mode: '[MODE]', bg: '#DCE6FA', icon: 'M3 8a2 2 0 0 0 0 4 2 2 0 0 1 0 4v2h18v-2a2 2 0 0 1 0-4 2 2 0 0 0 0-4V6H3zM14 6v12', body: 'Search, price and book flights the way agents do, including fare rules and changes.' },
        { name: 'Visa Application & Form Filling', dur: '[WEEKS]', mode: '[MODE]', bg: '#FFE1E7', icon: 'M6 3h9l4 4v14H6zM14 3v5h5M9 13h7M9 17h5', body: 'Build complete, consistent visa files and fill embassy forms without costly mistakes.' },
        { name: 'Air Hostess Training', dur: '[WEEKS]', mode: '[MODE]', bg: '#DDF3FF', icon: 'M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9L12 3z', body: 'Grooming, safety basics, service and interview preparation for cabin crew roles.' },
        { name: 'Destination Specialist', dur: '[WEEKS]', mode: '[MODE]', bg: '#E8ECF5', icon: 'M12 21s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12zM12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z', body: 'Know a destination deeply enough to plan, sell and support trips there.' },
        { name: 'Travel Agency Management', dur: '12 weeks', mode: 'Akure campus', bg: '#DCE6FA', icon: 'M4 8h16v11H4zM9 8V5h6v3M4 13h16', body: 'Career switch: become a professional travel agency management expert, with an internationally recognised certificate.' },
        { name: 'Tour Packages Masterclass', dur: '7 days', mode: 'Akure campus', bg: '#FFE1E7', icon: 'M3 20l6-10 4 6 2-3 6 7H3z', body: 'An intensive masterclass for graduates that adds real value to a BSc, HND or MSc.' }
      ],
      who: [
        { t: 'Industry experts', b: 'Programmes built by seasoned travel professionals who share what really works.' },
        { t: 'A curriculum for you', b: 'Travel agent, tour operator or destination specialist: we shape the training around your goal.' },
        { t: 'Learning by doing', b: 'Hands-on exercises and real-world simulations, so you can handle real clients with confidence.' }
      ]
    };
  }
  renderVals() {
    const s = this.state;
    const base = { menuOpen: s.menu, toggleMenu: () => this.setState({ menu: !s.menu }) };
    return Object.assign(base, {}, this.extra(s));
  }
}

export default function VarsityScreen(props) {
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
              <Link className="navlink" href="/varsity" aria-current="page" style={{ "borderBottom": "2px solid #FD6886" }}>
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
            <button className="mob btn" type="button" aria-label="Open menu" onClick={v.toggleMenu} style={{ "background": "rgba(255,255,255,.18)", "color": "#fff", "width": "48px", "padding": "0" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16"></path>
              </svg>
            </button>
          </header>
          {v.menuOpen ? (
            <>
              <nav aria-label="Mobile" className="wrap" style={{ "position": "relative", "zIndex": "6", "display": "flex", "flexDirection": "column", "gap": "4px", "paddingBottom": "16px" }}>
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
                <Link className="navlink" href="/contact">
                  Contact
                </Link>
                <Link className="navlink" href="/account">
                  Log in
                </Link>
                <Link className="btn" href="/book" style={{ "background": "#FD6886", "color": "#0F1518", "marginTop": "8px" }}>
                  Plan my trip
                </Link>
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
                  FLYMATAS AVIATION VARSITY
                </span>
              </nav>
              <h1 className="disp hero-h1" style={{ "margin": "0", "color": "#fff", "fontSize": "72px", "lineHeight": "1.02", "fontWeight": "700" }}>
                {"Become the agent people "}
                <em className="acc" style={{ "color": "#FDFDFA" }}>
                  trust.
                </em>
              </h1>
              <p style={{ "margin": "0", "color": "#F1F5FF", "fontSize": "19px", "lineHeight": "1.55", "maxWidth": "620px" }}>
                Flymatas Aviation Varsity trains the next generation of Nigerian travel professionals on the exact work we do every day: reservations, visa files, cabin crew prep and running an agency.
              </p>
              <div style={{ "display": "flex", "flexWrap": "wrap", "gap": "12px" }}>
                <a className="btn" href="https://flymatasvarsity.com" style={{ "background": "#0F1518", "color": "#fff" }}>
                  Visit the training portal
                </a>
                <a className="btn" href="tel:+2348133221729" style={{ "background": "#FD6886", "color": "#0F1518" }}>
                  Call +234 813 322 1729
                </a>
                <a className="btn" href="#courses" style={{ "background": "rgba(255,255,255,.2)", "color": "#fff", "border": "1px solid rgba(255,255,255,.55)" }}>
                  See courses
                </a>
              </div>
            </div>
          </div>
          <svg aria-hidden="true" viewBox="0 0 1440 120" preserveAspectRatio="none" style={{ "position": "absolute", "left": "0", "bottom": "0", "width": "100%", "height": "90px", "display": "block" }}>
            <path d="M0 120 L0 86 L60 86 L60 70 L92 70 L92 86 L150 86 L150 52 L172 52 L172 86 L240 86 L262 64 L284 86 L380 86 L380 60 L398 44 L416 60 L416 86 L520 86 L520 74 L600 74 L600 86 L700 86 L700 40 L716 40 L716 86 L820 86 L840 66 L860 86 L960 86 L960 58 L1000 58 L1000 86 L1100 86 L1100 72 L1160 72 L1160 86 L1260 86 L1280 50 L1300 86 L1440 86 L1440 120 Z" fill="#FDFDFA"></path>
          </svg>
        </section>
        <section className="wrap" style={{ "paddingTop": "80px" }}>
          <div className="g3">
            <figure className="lift" style={{ "margin": "0" }}>
              <img src="/assets/career-switch.jpg" alt="Flymatas Aviation Varsity flyer: career switch, become a professional travel agency management expert in 12 weeks" loading="lazy" style={{ "display": "block", "width": "100%", "height": "auto", "borderRadius": "18px", "aspectRatio": "1 / 1", "objectFit": "cover", "boxShadow": "0 14px 30px rgba(15,21,24,.12)" }} />
            </figure>
            <figure className="lift" style={{ "margin": "0" }}>
              <img src="/assets/varsity-dreams.jpg" alt="Flymatas Aviation Varsity flyer: empower your dreams in 12 weeks" loading="lazy" style={{ "display": "block", "width": "100%", "height": "auto", "borderRadius": "18px", "aspectRatio": "1 / 1", "objectFit": "cover", "boxShadow": "0 14px 30px rgba(15,21,24,.12)" }} />
            </figure>
            <figure className="lift" style={{ "margin": "0" }}>
              <img src="/assets/masterclass.jpg" alt="Flymatas Aviation Varsity flyer: tour packages masterclass for graduates, 7 days" loading="lazy" style={{ "display": "block", "width": "100%", "height": "auto", "borderRadius": "18px", "aspectRatio": "1 / 1", "objectFit": "cover", "boxShadow": "0 14px 30px rgba(15,21,24,.12)" }} />
            </figure>
          </div>
        </section>
        <section id="courses" className="wrap" style={{ "paddingTop": "80px" }}>
          <div style={{ "display": "flex", "justifyContent": "space-between", "alignItems": "flex-end", "gap": "24px", "flexWrap": "wrap", "marginBottom": "36px" }}>
            <div style={{ "maxWidth": "720px" }}>
              <span className="mono" style={{ "fontSize": "13px", "color": "#255BD9" }}>
                COURSES
              </span>
              <h2 className="disp" style={{ "margin": "10px 0 0", "fontSize": "53px", "lineHeight": "1.02", "fontWeight": "700" }}>
                {"Ways into "}
                <em className="acc" style={{ "color": "#255BD9" }}>
                  travel
                </em>
              </h2>
            </div>
            <p style={{ "margin": "0", "maxWidth": "400px", "color": "#4D555E", "fontSize": "16px", "lineHeight": "1.6" }}>
              Every course is practical, with real-world simulations. Fees and the remaining durations to be confirmed by the Varsity.
            </p>
          </div>
          <div className="g3">
            {(v.courses || []).map((c, __i6) => (
              <Fragment key={__i6}>
                <div className="shadow lift">
                  <article className="tkt-v" style={{ "background": "#FFFFFF", "borderRadius": "22px", "overflow": "hidden" }}>
                    <div style={{ "height": "214px", "padding": "24px", "background": c.bg, "display": "flex", "flexDirection": "column", "justifyContent": "space-between" }}>
                      <span style={{ "width": "48px", "height": "48px", "borderRadius": "14px", "background": "#fff", "display": "grid", "placeItems": "center" }} aria-hidden="true">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0F1518" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d={c.icon}></path>
                        </svg>
                      </span>
                      <h3 className="disp" style={{ "margin": "0", "fontSize": "32px", "lineHeight": "1.02" }}>
                        {c.name}
                      </h3>
                    </div>
                    <div className="perf-h" style={{ "padding": "22px", "display": "flex", "flexDirection": "column", "gap": "14px" }}>
                      <p style={{ "margin": "0", "color": "#4D555E", "fontSize": "14px", "lineHeight": "1.6" }}>
                        {c.body}
                      </p>
                      <div className="mono" style={{ "display": "grid", "gridTemplateColumns": "repeat(3, minmax(0,1fr))", "gap": "8px", "fontSize": "10px", "color": "#4D555E" }}>
                        <div>
                          DURATION
                          <div style={{ "fontSize": "12px", "color": "#0F1518" }}>
                            {c.dur}
                          </div>
                        </div>
                        <div>
                          WHERE
                          <div style={{ "fontSize": "12px", "color": "#0F1518" }}>
                            {c.mode}
                          </div>
                        </div>
                        <div>
                          FEE
                          <div style={{ "fontSize": "12px", "color": "#0F1518" }}>
                            [FEE]
                          </div>
                        </div>
                      </div>
                      <a href="https://flymatasvarsity.com" className="btn" style={{ "background": "#0F1518", "color": "#fff", "minHeight": "44px", "fontSize": "14px" }}>
                        Enrol
                      </a>
                    </div>
                  </article>
                </div>
              </Fragment>
            ))}
          </div>
        </section>
        <section className="wrap" style={{ "paddingTop": "96px" }}>
          <div style={{ "display": "flex", "justifyContent": "space-between", "alignItems": "flex-end", "gap": "24px", "flexWrap": "wrap", "marginBottom": "36px" }}>
            <div style={{ "maxWidth": "720px" }}>
              <span className="mono" style={{ "fontSize": "13px", "color": "#255BD9" }}>
                WHY TRAIN WITH US
              </span>
              <h2 className="disp" style={{ "margin": "10px 0 0", "fontSize": "53px", "lineHeight": "1.02", "fontWeight": "700" }}>
                {"Learn from people who "}
                <em className="acc" style={{ "color": "#255BD9" }}>
                  do the work
                </em>
              </h2>
            </div>
            <p style={{ "margin": "0", "maxWidth": "400px", "color": "#4D555E", "fontSize": "16px", "lineHeight": "1.6" }}>
              Campus: Ijapo Estate, opposite Ijapo Field, CJM, Akure, Ondo State.
            </p>
          </div>
          <div className="g3">
            {(v.who || []).map((w, __i6) => (
              <Fragment key={__i6}>
                <div style={{ "borderTop": "2px solid #0F1518", "paddingTop": "18px", "display": "flex", "flexDirection": "column", "gap": "8px" }}>
                  <h3 className="disp" style={{ "margin": "0", "fontSize": "26px" }}>
                    {w.t}
                  </h3>
                  <p style={{ "margin": "0", "color": "#4D555E", "fontSize": "15px", "lineHeight": "1.6" }}>
                    {w.b}
                  </p>
                </div>
              </Fragment>
            ))}
          </div>
        </section>
        <section className="wrap" style={{ "paddingTop": "96px" }}>
          <div style={{ "background": "#255BD9", "color": "#fff", "borderRadius": "28px", "padding": "48px", "display": "flex", "flexWrap": "wrap", "justifyContent": "space-between", "alignItems": "center", "gap": "28px", "position": "relative", "overflow": "hidden" }}>
            <div style={{ "maxWidth": "640px", "display": "flex", "flexDirection": "column", "gap": "12px" }}>
              <h2 className="disp" style={{ "margin": "0", "fontSize": "45px", "lineHeight": "1.02", "fontWeight": "700" }}>
                {"Learn from people who "}
                <em className="acc" style={{ "color": "#FDFDFA" }}>
                  do it daily.
                </em>
              </h2>
              <p style={{ "margin": "0", "color": "#E6EDFF", "fontSize": "17px", "lineHeight": "1.6" }}>
                Every course is taught from real files, real bookings and real client situations at Flymatas.
              </p>
            </div>
            <div style={{ "display": "flex", "flexWrap": "wrap", "gap": "12px" }}>
              <a className="btn" href="https://flymatasvarsity.com" style={{ "background": "#FF6C", "color": "#0F1518" }}>
                Visit the training portal
              </a>
            </div>
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
      </div>
    </>
  );
}
