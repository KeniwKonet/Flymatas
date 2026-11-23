"use client";

import { Fragment, useState } from 'react';
import Link from 'next/link';

// Screen converted from the News design. State and derived values mirror the design's logic.
const INITIAL_STATE = Object.assign({ menu: false }, {"cat": "All"});

class Logic {
  constructor(state, setState, props) {
    this.state = state;
    this.setState = setState;
    this.props = props || {};
  }

  
  extra(s) {
    const chips = [["All", "All"], ["News", "News"], ["Study", "Study"], ["Visa", "Visa"], ["Canada", "Canada"], ["Varsity", "Varsity"], ["Events", "Events"]].map(([id, label]) => ({ label, on: s.cat === id ? 'true' : 'false', bg: s.cat === id ? '#0F1518' : '#FFFFFF', fg: s.cat === id ? '#FFFFFF' : '#0F1518', pick: () => this.setState({ cat: id }) }));
    const P = [["scholar", "News"], ["pr", "Canada"], ["schengen", "Visa"], ["malta", "Study"], ["sa2025", "Study"], ["canada", "Canada"], ["pof", "News"], ["master", "Varsity"], ["career", "Varsity"], ["package", "Study"], ["events", "Events"]];
    const show = {}; let n = 0;
    P.forEach(([id, cat]) => { const v = s.cat === 'All' || s.cat === cat; show[id] = v; if (v) n++; });
    return { chips, show, empty: n === 0, count: n + (n === 1 ? ' POST' : ' POSTS') };
  }
  renderVals() {
    const s = this.state;
    const base = { menuOpen: s.menu, toggleMenu: () => this.setState({ menu: !s.menu }) };
    return Object.assign(base, {}, this.extra(s));
  }
}

export default function NewsScreen(props) {
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
              <Link className="navlink" href="/news" aria-current="page" style={{ "borderBottom": "2px solid #FD6886" }}>
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
                  {"NEWS & BLOG"}
                </span>
              </nav>
              <h1 className="disp hero-h1" style={{ "margin": "0", "color": "#fff", "fontSize": "72px", "lineHeight": "1.02", "fontWeight": "700" }}>
                {"News from the "}
                <em className="acc" style={{ "color": "#FDFDFA" }}>
                  departure lounge.
                </em>
              </h1>
              <p style={{ "margin": "0", "color": "#F1F5FF", "fontSize": "19px", "lineHeight": "1.55", "maxWidth": "620px" }}>
                Announcements, study and visa updates, events and stories from the Flymatas team, written in plain words for real travellers.
              </p>
            </div>
          </div>
          <svg aria-hidden="true" viewBox="0 0 1440 120" preserveAspectRatio="none" style={{ "position": "absolute", "left": "0", "bottom": "0", "width": "100%", "height": "90px", "display": "block" }}>
            <path d="M0 120 L0 86 L60 86 L60 70 L92 70 L92 86 L150 86 L150 52 L172 52 L172 86 L240 86 L262 64 L284 86 L380 86 L380 60 L398 44 L416 60 L416 86 L520 86 L520 74 L600 74 L600 86 L700 86 L700 40 L716 40 L716 86 L820 86 L840 66 L860 86 L960 86 L960 58 L1000 58 L1000 86 L1100 86 L1100 72 L1160 72 L1160 86 L1260 86 L1280 50 L1300 86 L1440 86 L1440 120 Z" fill="#FDFDFA"></path>
          </svg>
        </section>
        <section className="wrap" style={{ "paddingTop": "72px" }}>
          <Link href="/guides/article" className="lift" style={{ "textDecoration": "none", "color": "#fff", "display": "flex", "flexWrap": "wrap", "background": "#0F1518", "borderRadius": "28px", "overflow": "hidden", "marginBottom": "40px" }}>
            <img src="/assets/japa-dreams.jpg" alt="Flymatas flyer: your japa dreams are valid" style={{ "flex": "1 1 380px", "minWidth": "0", "maxWidth": "100%", "width": "460px", "aspectRatio": "1 / 1", "objectFit": "cover", "display": "block" }} />
            <span style={{ "flex": "999 1 420px", "padding": "44px", "display": "flex", "flexDirection": "column", "justifyContent": "center", "gap": "16px", "position": "relative" }}>
              <span className="mono" style={{ "fontSize": "12px", "color": "#86D5FF" }}>
                FEATURED · ANNOUNCEMENT
              </span>
              <span className="disp" style={{ "fontSize": "60px", "lineHeight": "1.02" }}>
                {"Your japa dreams are "}
                <em className="acc" style={{ "color": "#FD6886" }}>
                  valid.
                </em>
              </span>
              <span style={{ "color": "#AEB7BF", "fontSize": "17px", "lineHeight": "1.6", "maxWidth": "560px" }}>
                We can help you make them real. Book a free clarity call with a Flymatas consultant and get honest answers about your route, your documents and your budget.
              </span>
              <span className="btn" style={{ "background": "#FD6886", "color": "#0F1518", "alignSelf": "flex-start" }}>
                Read the announcement
              </span>
            </span>
          </Link>
          <div style={{ "display": "flex", "flexWrap": "wrap", "justifyContent": "space-between", "alignItems": "center", "gap": "16px", "marginBottom": "28px" }}>
            <div role="group" aria-label="Category" style={{ "display": "flex", "flexWrap": "wrap", "gap": "8px" }}>
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
          <div className="g3">
            {v.show.scholar ? (
              <>
                <Link href="/guides/article" className="lift" style={{ "textDecoration": "none", "color": "#0F1518", "background": "#FFFFFF", "border": "1px solid #E3E8F2", "borderRadius": "22px", "overflow": "hidden", "display": "flex", "flexDirection": "column" }}>
                  <img src="/assets/scholarships.jpg" alt="" loading="lazy" style={{ "display": "block", "width": "100%", "aspectRatio": "16 / 10", "objectFit": "cover", "objectPosition": "70% 35%" }} />
                  <span style={{ "padding": "22px", "display": "flex", "flexDirection": "column", "gap": "10px", "flex": "1 1 auto" }}>
                    <span className="mono" style={{ "fontSize": "11px", "color": "#255BD9" }}>
                      NEWS
                    </span>
                    <span className="disp" style={{ "fontSize": "26px", "lineHeight": "1.02" }}>
                      Legit scholarships abroad: join our free WhatsApp group
                    </span>
                    <span style={{ "color": "#4D555E", "fontSize": "15px", "lineHeight": "1.55" }}>
                      Learn how to secure scholarships the right way. Send one message to join. The group is open to Africans only.
                    </span>
                    <span style={{ "marginTop": "auto", "paddingTop": "6px", "fontWeight": "600", "color": "#255BD9", "display": "flex", "alignItems": "center", "gap": "8px" }}>
                      {"Read more "}
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 12h14M13 6l6 6-6 6"></path>
                      </svg>
                    </span>
                  </span>
                </Link>
              </>
            ) : null}
            {v.show.pr ? (
              <>
                <Link href="/guides/article" className="lift" style={{ "textDecoration": "none", "color": "#0F1518", "background": "#FFFFFF", "border": "1px solid #E3E8F2", "borderRadius": "22px", "overflow": "hidden", "display": "flex", "flexDirection": "column" }}>
                  <img src="/assets/canada-pr.jpg" alt="" loading="lazy" style={{ "display": "block", "width": "100%", "aspectRatio": "16 / 10", "objectFit": "cover", "objectPosition": "center 30%" }} />
                  <span style={{ "padding": "22px", "display": "flex", "flexDirection": "column", "gap": "10px", "flex": "1 1 auto" }}>
                    <span className="mono" style={{ "fontSize": "11px", "color": "#255BD9" }}>
                      CANADA
                    </span>
                    <span className="disp" style={{ "fontSize": "26px", "lineHeight": "1.02" }}>
                      Canada PR through Express Entry and PNP is not difficult
                    </span>
                    <span style={{ "color": "#4D555E", "fontSize": "15px", "lineHeight": "1.55" }}>
                      We explain the main routes to Canadian permanent residency and help you through each step. Ask us for the requirements, free.
                    </span>
                    <span style={{ "marginTop": "auto", "paddingTop": "6px", "fontWeight": "600", "color": "#255BD9", "display": "flex", "alignItems": "center", "gap": "8px" }}>
                      {"Read more "}
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 12h14M13 6l6 6-6 6"></path>
                      </svg>
                    </span>
                  </span>
                </Link>
              </>
            ) : null}
            {v.show.schengen ? (
              <>
                <Link href="/guides/article" className="lift" style={{ "textDecoration": "none", "color": "#0F1518", "background": "#FFFFFF", "border": "1px solid #E3E8F2", "borderRadius": "22px", "overflow": "hidden", "display": "flex", "flexDirection": "column" }}>
                  <img src="/assets/schengen.jpg" alt="" loading="lazy" style={{ "display": "block", "width": "100%", "aspectRatio": "16 / 10", "objectFit": "cover", "objectPosition": "center 55%" }} />
                  <span style={{ "padding": "22px", "display": "flex", "flexDirection": "column", "gap": "10px", "flex": "1 1 auto" }}>
                    <span className="mono" style={{ "fontSize": "11px", "color": "#255BD9" }}>
                      VISA
                    </span>
                    <span className="disp" style={{ "fontSize": "26px", "lineHeight": "1.02" }}>
                      Schengen visit visa: what we handle for you
                    </span>
                    <span style={{ "color": "#4D555E", "fontSize": "15px", "lineHeight": "1.55" }}>
                      A close appointment date, a detailed application, proof of funds guidance and full documentation support.
                    </span>
                    <span style={{ "marginTop": "auto", "paddingTop": "6px", "fontWeight": "600", "color": "#255BD9", "display": "flex", "alignItems": "center", "gap": "8px" }}>
                      {"Read more "}
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 12h14M13 6l6 6-6 6"></path>
                      </svg>
                    </span>
                  </span>
                </Link>
              </>
            ) : null}
            {v.show.malta ? (
              <>
                <Link href="/guides/article" className="lift" style={{ "textDecoration": "none", "color": "#0F1518", "background": "#FFFFFF", "border": "1px solid #E3E8F2", "borderRadius": "22px", "overflow": "hidden", "display": "flex", "flexDirection": "column" }}>
                  <span aria-hidden="true" style={{ "display": "flex", "alignItems": "flex-end", "justifyContent": "space-between", "aspectRatio": "16 / 10", "padding": "22px", "background": "#1C47AE", "color": "#fff" }}>
                    <span className="disp" style={{ "fontSize": "69px", "lineHeight": "1.02" }}>
                      MLA
                    </span>
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M6 3h9l4 4v14H6zM14 3v5h5M9 13h7M9 17h5"></path>
                    </svg>
                  </span>
                  <span style={{ "padding": "22px", "display": "flex", "flexDirection": "column", "gap": "10px", "flex": "1 1 auto" }}>
                    <span className="mono" style={{ "fontSize": "11px", "color": "#255BD9" }}>
                      STUDY · 21 MAY
                    </span>
                    <span className="disp" style={{ "fontSize": "26px", "lineHeight": "1.02" }}>
                      Study in Malta – 2025
                    </span>
                    <span style={{ "color": "#4D555E", "fontSize": "15px", "lineHeight": "1.55" }}>
                      English-speaking, Mediterranean and popular with Nigerian students. What to know before you apply.
                    </span>
                    <span style={{ "marginTop": "auto", "paddingTop": "6px", "fontWeight": "600", "color": "#255BD9", "display": "flex", "alignItems": "center", "gap": "8px" }}>
                      {"Read more "}
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 12h14M13 6l6 6-6 6"></path>
                      </svg>
                    </span>
                  </span>
                </Link>
              </>
            ) : null}
            {v.show.sa2025 ? (
              <>
                <Link href="/guides/article" className="lift" style={{ "textDecoration": "none", "color": "#0F1518", "background": "#FFFFFF", "border": "1px solid #E3E8F2", "borderRadius": "22px", "overflow": "hidden", "display": "flex", "flexDirection": "column" }}>
                  <span aria-hidden="true" style={{ "display": "flex", "alignItems": "flex-end", "justifyContent": "space-between", "aspectRatio": "16 / 10", "padding": "22px", "background": "#0F1518", "color": "#fff" }}>
                    <span className="disp" style={{ "fontSize": "69px", "lineHeight": "1.02" }}>
                      2025
                    </span>
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M6 3h9l4 4v14H6zM14 3v5h5M9 13h7M9 17h5"></path>
                    </svg>
                  </span>
                  <span style={{ "padding": "22px", "display": "flex", "flexDirection": "column", "gap": "10px", "flex": "1 1 auto" }}>
                    <span className="mono" style={{ "fontSize": "11px", "color": "#255BD9" }}>
                      STUDY · 08 APR
                    </span>
                    <span className="disp" style={{ "fontSize": "26px", "lineHeight": "1.02" }}>
                      Study Abroad 2025
                    </span>
                    <span style={{ "color": "#4D555E", "fontSize": "15px", "lineHeight": "1.55" }}>
                      Where students are heading this year, and how to get your application ready early.
                    </span>
                    <span style={{ "marginTop": "auto", "paddingTop": "6px", "fontWeight": "600", "color": "#255BD9", "display": "flex", "alignItems": "center", "gap": "8px" }}>
                      {"Read more "}
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 12h14M13 6l6 6-6 6"></path>
                      </svg>
                    </span>
                  </span>
                </Link>
              </>
            ) : null}
            {v.show.canada ? (
              <>
                <Link href="/guides/article" className="lift" style={{ "textDecoration": "none", "color": "#0F1518", "background": "#FFFFFF", "border": "1px solid #E3E8F2", "borderRadius": "22px", "overflow": "hidden", "display": "flex", "flexDirection": "column" }}>
                  <img src="/assets/canada-study.jpg" alt="" loading="lazy" style={{ "display": "block", "width": "100%", "aspectRatio": "16 / 10", "objectFit": "cover", "objectPosition": "center 62%" }} />
                  <span style={{ "padding": "22px", "display": "flex", "flexDirection": "column", "gap": "10px", "flex": "1 1 auto" }}>
                    <span className="mono" style={{ "fontSize": "11px", "color": "#255BD9" }}>
                      CANADA
                    </span>
                    <span className="disp" style={{ "fontSize": "26px", "lineHeight": "1.02" }}>
                      You can trust us with everything about the Canada study route
                    </span>
                    <span style={{ "color": "#4D555E", "fontSize": "15px", "lineHeight": "1.55" }}>
                      Admission processing, study permit, proof of funds guidance, and your SOP, letters and CV.
                    </span>
                    <span style={{ "marginTop": "auto", "paddingTop": "6px", "fontWeight": "600", "color": "#255BD9", "display": "flex", "alignItems": "center", "gap": "8px" }}>
                      {"Read more "}
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 12h14M13 6l6 6-6 6"></path>
                      </svg>
                    </span>
                  </span>
                </Link>
              </>
            ) : null}
            {v.show.pof ? (
              <>
                <Link href="/guides/article" className="lift" style={{ "textDecoration": "none", "color": "#0F1518", "background": "#FFFFFF", "border": "1px solid #E3E8F2", "borderRadius": "22px", "overflow": "hidden", "display": "flex", "flexDirection": "column" }}>
                  <img src="/assets/pof-ebook.jpg" alt="" loading="lazy" style={{ "display": "block", "width": "100%", "aspectRatio": "16 / 10", "objectFit": "cover", "objectPosition": "center 30%" }} />
                  <span style={{ "padding": "22px", "display": "flex", "flexDirection": "column", "gap": "10px", "flex": "1 1 auto" }}>
                    <span className="mono" style={{ "fontSize": "11px", "color": "#255BD9" }}>
                      NEWS
                    </span>
                    <span className="disp" style={{ "fontSize": "26px", "lineHeight": "1.02" }}>
                      New ebook: Understanding how proof of funds works
                    </span>
                    <span style={{ "color": "#4D555E", "fontSize": "15px", "lineHeight": "1.55" }}>
                      Our founder Ayorinde Alex explains how to get your proof of funds right. ₦5,000, or $5 outside Nigeria.
                    </span>
                    <span style={{ "marginTop": "auto", "paddingTop": "6px", "fontWeight": "600", "color": "#255BD9", "display": "flex", "alignItems": "center", "gap": "8px" }}>
                      {"Read more "}
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 12h14M13 6l6 6-6 6"></path>
                      </svg>
                    </span>
                  </span>
                </Link>
              </>
            ) : null}
            {v.show.master ? (
              <>
                <Link href="/guides/article" className="lift" style={{ "textDecoration": "none", "color": "#0F1518", "background": "#FFFFFF", "border": "1px solid #E3E8F2", "borderRadius": "22px", "overflow": "hidden", "display": "flex", "flexDirection": "column" }}>
                  <img src="/assets/masterclass.jpg" alt="" loading="lazy" style={{ "display": "block", "width": "100%", "aspectRatio": "16 / 10", "objectFit": "cover", "objectPosition": "center 40%" }} />
                  <span style={{ "padding": "22px", "display": "flex", "flexDirection": "column", "gap": "10px", "flex": "1 1 auto" }}>
                    <span className="mono" style={{ "fontSize": "11px", "color": "#255BD9" }}>
                      VARSITY
                    </span>
                    <span className="disp" style={{ "fontSize": "26px", "lineHeight": "1.02" }}>
                      Tour Packages Masterclass for graduates
                    </span>
                    <span style={{ "color": "#4D555E", "fontSize": "15px", "lineHeight": "1.55" }}>
                      Seven days of intensive training that adds real value to a BSc, HND or MSc. At the Akure campus.
                    </span>
                    <span style={{ "marginTop": "auto", "paddingTop": "6px", "fontWeight": "600", "color": "#255BD9", "display": "flex", "alignItems": "center", "gap": "8px" }}>
                      {"Read more "}
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 12h14M13 6l6 6-6 6"></path>
                      </svg>
                    </span>
                  </span>
                </Link>
              </>
            ) : null}
            {v.show.career ? (
              <>
                <Link href="/guides/article" className="lift" style={{ "textDecoration": "none", "color": "#0F1518", "background": "#FFFFFF", "border": "1px solid #E3E8F2", "borderRadius": "22px", "overflow": "hidden", "display": "flex", "flexDirection": "column" }}>
                  <img src="/assets/career-switch.jpg" alt="" loading="lazy" style={{ "display": "block", "width": "100%", "aspectRatio": "16 / 10", "objectFit": "cover", "objectPosition": "center 40%" }} />
                  <span style={{ "padding": "22px", "display": "flex", "flexDirection": "column", "gap": "10px", "flex": "1 1 auto" }}>
                    <span className="mono" style={{ "fontSize": "11px", "color": "#255BD9" }}>
                      VARSITY
                    </span>
                    <span className="disp" style={{ "fontSize": "26px", "lineHeight": "1.02" }}>
                      Career switch: become a travel agency management expert in 12 weeks
                    </span>
                    <span style={{ "color": "#4D555E", "fontSize": "15px", "lineHeight": "1.55" }}>
                      An internationally recognised certificate from Flymatas Aviation Varsity.
                    </span>
                    <span style={{ "marginTop": "auto", "paddingTop": "6px", "fontWeight": "600", "color": "#255BD9", "display": "flex", "alignItems": "center", "gap": "8px" }}>
                      {"Read more "}
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 12h14M13 6l6 6-6 6"></path>
                      </svg>
                    </span>
                  </span>
                </Link>
              </>
            ) : null}
            {v.show.package ? (
              <>
                <Link href="/guides/article" className="lift" style={{ "textDecoration": "none", "color": "#0F1518", "background": "#FFFFFF", "border": "1px solid #E3E8F2", "borderRadius": "22px", "overflow": "hidden", "display": "flex", "flexDirection": "column" }}>
                  <span aria-hidden="true" style={{ "display": "flex", "alignItems": "flex-end", "justifyContent": "space-between", "aspectRatio": "16 / 10", "padding": "22px", "background": "#255BD9", "color": "#fff" }}>
                    <span className="disp" style={{ "fontSize": "69px", "lineHeight": "1.02" }}>
                      LOS
                    </span>
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M6 3h9l4 4v14H6zM14 3v5h5M9 13h7M9 17h5"></path>
                    </svg>
                  </span>
                  <span style={{ "padding": "22px", "display": "flex", "flexDirection": "column", "gap": "10px", "flex": "1 1 auto" }}>
                    <span className="mono" style={{ "fontSize": "11px", "color": "#255BD9" }}>
                      STUDY · 19 DEC
                    </span>
                    <span className="disp" style={{ "fontSize": "26px", "lineHeight": "1.02" }}>
                      The Flymatas study abroad package
                    </span>
                    <span style={{ "color": "#4D555E", "fontSize": "15px", "lineHeight": "1.55" }}>
                      What the package covers, from your first chat and admission to your visa and arrival.
                    </span>
                    <span style={{ "marginTop": "auto", "paddingTop": "6px", "fontWeight": "600", "color": "#255BD9", "display": "flex", "alignItems": "center", "gap": "8px" }}>
                      {"Read more "}
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 12h14M13 6l6 6-6 6"></path>
                      </svg>
                    </span>
                  </span>
                </Link>
              </>
            ) : null}
            {v.show.events ? (
              <>
                <Link href="/guides/article" className="lift" style={{ "textDecoration": "none", "color": "#0F1518", "background": "#FFFFFF", "border": "1px solid #E3E8F2", "borderRadius": "22px", "overflow": "hidden", "display": "flex", "flexDirection": "column" }}>
                  <span aria-hidden="true" style={{ "display": "flex", "alignItems": "flex-end", "justifyContent": "space-between", "aspectRatio": "16 / 10", "padding": "22px", "background": "#0F1518", "color": "#fff" }}>
                    <span className="disp" style={{ "fontSize": "69px", "lineHeight": "1.02" }}>
                      7
                    </span>
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M6 3h9l4 4v14H6zM14 3v5h5M9 13h7M9 17h5"></path>
                    </svg>
                  </span>
                  <span style={{ "padding": "22px", "display": "flex", "flexDirection": "column", "gap": "10px", "flex": "1 1 auto" }}>
                    <span className="mono" style={{ "fontSize": "11px", "color": "#255BD9" }}>
                      EVENTS
                    </span>
                    <span className="disp" style={{ "fontSize": "26px", "lineHeight": "1.02" }}>
                      Seven events to escape the ordinary
                    </span>
                    <span style={{ "color": "#4D555E", "fontSize": "15px", "lineHeight": "1.55" }}>
                      Cultural festivals, study fairs, work abroad seminars, group tours, photography trips and more.
                    </span>
                    <span style={{ "marginTop": "auto", "paddingTop": "6px", "fontWeight": "600", "color": "#255BD9", "display": "flex", "alignItems": "center", "gap": "8px" }}>
                      {"Read more "}
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 12h14M13 6l6 6-6 6"></path>
                      </svg>
                    </span>
                  </span>
                </Link>
              </>
            ) : null}
          </div>
          {v.empty ? (
            <>
              <p style={{ "margin": "24px 0 0", "color": "#4D555E", "fontSize": "16px" }}>
                No posts in this category yet. Please check back soon.
              </p>
            </>
          ) : null}
        </section>
        <section className="wrap" style={{ "paddingTop": "96px" }}>
          <div className="g2" style={{ "gap": "28px" }}>
            <div style={{ "background": "#DCE6FA", "borderRadius": "26px", "padding": "36px", "display": "flex", "flexDirection": "column", "gap": "14px", "position": "relative" }}>
              <svg className="dip" aria-hidden="true" width="120" height="26" viewBox="0 0 120 26" style={{ "right": "56px" }}>
                <path d="M0 -1 H120 V0 C92 0 86 24 60 24 C34 24 28 0 0 0 Z" fill="#FDFDFA"></path>
                <path d="M0 0 C28 0 34 24 60 24 C86 24 92 0 120 0" fill="none" stroke="#DCE6FA" strokeWidth="1"></path>
              </svg>
              <span className="mono" style={{ "fontSize": "12px", "color": "#255BD9" }}>
                NEWSLETTER
              </span>
              <h2 className="disp" style={{ "margin": "0", "fontSize": "45px", "lineHeight": "1.02" }}>
                {"Get updates "}
                <em className="acc" style={{ "color": "#255BD9" }}>
                  first
                </em>
              </h2>
              <p style={{ "margin": "0", "color": "#4D555E", "fontSize": "16px", "lineHeight": "1.6" }}>
                New scholarships, visa changes, event dates and offers, straight to your inbox. No spam, we promise.
              </p>
              <form aria-label="Newsletter sign-up" style={{ "display": "flex", "flexWrap": "wrap", "gap": "10px" }}>
                <label htmlFor="nn-email" className="lbl" style={{ "width": "100%", "margin": "0" }}>
                  Email address
                </label>
                <input id="nn-email" className="input" type="email" autoComplete="email" placeholder="you@email.com" style={{ "flex": "1 1 220px" }} />
                <button type="button" className="btn" style={{ "background": "#0F1518", "color": "#fff" }}>
                  Subscribe
                </button>
              </form>
            </div>
            <div style={{ "background": "#FFFFFF", "border": "1px solid #E3E8F2", "borderRadius": "26px", "padding": "36px", "display": "flex", "flexDirection": "column", "gap": "14px" }}>
              <span className="mono" style={{ "fontSize": "12px", "color": "#255BD9" }}>
                LOOKING FOR STEP-BY-STEP HELP?
              </span>
              <h2 className="disp" style={{ "margin": "0", "fontSize": "45px", "lineHeight": "1.02" }}>
                {"Free travel "}
                <em className="acc" style={{ "color": "#255BD9" }}>
                  guides
                </em>
              </h2>
              <p style={{ "margin": "0", "color": "#4D555E", "fontSize": "16px", "lineHeight": "1.6" }}>
                International exams, Canada routes, relocation programmes and Schengen basics, all free to read and download.
              </p>
              <Link className="btn" href="/guides" style={{ "background": "#FD6886", "color": "#0F1518", "alignSelf": "flex-start" }}>
                Browse free guides
              </Link>
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
