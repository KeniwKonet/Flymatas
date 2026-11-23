"use client";

import { Fragment, useState } from 'react';
import Link from 'next/link';

// Screen converted from the StudyAbroad design. State and derived values mirror the design's logic.
const INITIAL_STATE = Object.assign({ menu: false }, {"faq": 0});

class Logic {
  constructor(state, setState, props) {
    this.state = state;
    this.setState = setState;
    this.props = props || {};
  }

  
  extra(s) {
    const faqs = (this.props.__faqs || [["Can I study abroad with a third-class or pass degree?", "Often, yes. Many schools look at your whole profile, and some routes, like trade schools and foundation programmes, have flexible entry. We tell you honestly where you stand."], ["How much proof of funds will I need?", "It depends on the country and course. Your consultant gives you the exact figure for your route before you apply. Our founder’s ebook, Understanding How Proof of Funds Works, explains it step by step."], ["Do I need IELTS?", "Many schools and visas need an English test, but some accept alternatives. We check your school’s rules first, so you only sit the exams you need."], ["Can my family come with me?", "Some countries allow dependants on certain courses; others have restricted it. We check the current rules for your route."]]).map((f, i) => ({ q: f[0], a: f[1], open: s.faq === i, exp: s.faq === i ? 'true' : 'false', sign: s.faq === i ? '−' : '+', toggle: () => this.setState({ faq: s.faq === i ? -1 : i }) }));
    return {
      faqs,
      steps: [
        { code: 'A1', title: 'Free chat', body: 'Your results, budget and dream course.' },
        { code: 'A2', title: 'School match', body: 'Partner institutions that fit your profile.' },
        { code: 'A3', title: 'Exams', body: 'IELTS or other tests your school needs.' },
        { code: 'A4', title: 'Admission', body: 'Applications, statements and offer letter.' },
        { code: 'A5', title: 'Visa', body: 'Proof of funds and student visa file.' },
        { code: 'A6', title: 'Pre-departure', body: 'Ticket, accommodation and briefing.' },
        { code: 'A7', title: 'Arrival', body: 'We check in until you are settled.' }
      ],
      countries: [
        { code: 'LHR', country: 'United Kingdom', note: 'UNIVERSITIES · SHORT COURSES', bg: 'linear-gradient(160deg,#0F1518,#2B353C)' },
        { code: 'YYZ', country: 'Canada', note: 'COLLEGES · TRADE SCHOOLS', bg: 'linear-gradient(160deg,#0F1518,#2B353C)' },
        { code: 'DUB', country: 'Ireland', note: 'UNIVERSITIES · WORK ROUTES', bg: 'linear-gradient(160deg,#1C47AE,#255BD9)' },
        { code: 'MLA', country: 'Malta', note: 'ENGLISH-SPEAKING · 2025 INTAKES', bg: 'linear-gradient(160deg,#255BD9,#4F86EE)' },
        { code: 'FCO', country: 'Italy', note: 'PUBLIC UNIVERSITIES', bg: 'linear-gradient(160deg,#1C47AE,#255BD9)' },
        { code: 'SIN', country: 'Singapore', note: 'BUSINESS · TECH', bg: 'linear-gradient(160deg,#255BD9,#4F86EE)' }
      ],
      fields: [
        { t: 'Science', b: 'Health, engineering, computing and the natural sciences.' },
        { t: 'Arts & Humanities', b: 'Media, languages, law, social sciences and design.' },
        { t: 'Administration & Management', b: 'Business, public administration, finance and hospitality.' }
      ],
      exams: ['IELTS', 'TOEFL', 'PTE Academic', 'Duolingo English Test', 'SAT', 'GRE', 'GMAT'],
      guides: [{"tag": "Exams", "title": "List of all international exams", "date": "31 Jan 2025", "tint": "#FFE1E7", "url": "GuideArticle.dc.html"}, {"tag": "Canada", "title": "Trade schools in Canada: a brief", "date": "31 Jan 2025", "tint": "#DCE6FA", "url": "GuideArticle.dc.html"}, {"tag": "Study", "title": "Study in Malta: 2025 intakes", "date": "21 May", "tint": "#DDF3FF", "url": "GuideArticle.dc.html"}]
    };
  }
  renderVals() {
    const s = this.state;
    const base = { menuOpen: s.menu, toggleMenu: () => this.setState({ menu: !s.menu }) };
    return Object.assign(base, {}, this.extra(s));
  }
}

export default function StudyAbroadScreen(props) {
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
              <Link className="navlink" href="/study-abroad" aria-current="page" style={{ "borderBottom": "2px solid #FD6886" }}>
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
                  STUDY ABROAD
                </span>
              </nav>
              <h1 className="disp hero-h1" style={{ "margin": "0", "color": "#fff", "fontSize": "72px", "lineHeight": "1.02", "fontWeight": "700" }}>
                {"From WAEC result to "}
                <em className="acc" style={{ "color": "#FDFDFA" }}>
                  lecture hall.
                </em>
              </h1>
              <p style={{ "margin": "0", "color": "#F1F5FF", "fontSize": "19px", "lineHeight": "1.55", "maxWidth": "620px" }}>
                We match you with partner schools abroad, prepare you for the exams, build the admission and visa files, and stay with you until you land on campus.
              </p>
              <div style={{ "display": "flex", "flexWrap": "wrap", "gap": "12px" }}>
                <Link className="btn" href="/book" style={{ "background": "#0F1518", "color": "#fff" }}>
                  Start my application
                </Link>
                <a className="btn" href="#study-fairs" style={{ "background": "rgba(255,255,255,.2)", "color": "#fff", "border": "1px solid rgba(255,255,255,.55)" }}>
                  Next study fair
                </a>
              </div>
            </div>
          </div>
          <svg aria-hidden="true" viewBox="0 0 1440 120" preserveAspectRatio="none" style={{ "position": "absolute", "left": "0", "bottom": "0", "width": "100%", "height": "90px", "display": "block" }}>
            <path d="M0 120 L0 86 L60 86 L60 70 L92 70 L92 86 L150 86 L150 52 L172 52 L172 86 L240 86 L262 64 L284 86 L380 86 L380 60 L398 44 L416 60 L416 86 L520 86 L520 74 L600 74 L600 86 L700 86 L700 40 L716 40 L716 86 L820 86 L840 66 L860 86 L960 86 L960 58 L1000 58 L1000 86 L1100 86 L1100 72 L1160 72 L1160 86 L1260 86 L1280 50 L1300 86 L1440 86 L1440 120 Z" fill="#FDFDFA"></path>
          </svg>
        </section>
        <section className="wrap" style={{ "paddingTop": "80px" }}>
          <div style={{ "display": "flex", "justifyContent": "space-between", "alignItems": "flex-end", "gap": "24px", "flexWrap": "wrap", "marginBottom": "36px" }}>
            <div style={{ "maxWidth": "720px" }}>
              <span className="mono" style={{ "fontSize": "13px", "color": "#255BD9" }}>
                HOW IT WORKS
              </span>
              <h2 className="disp" style={{ "margin": "10px 0 0", "fontSize": "53px", "lineHeight": "1.02", "fontWeight": "700" }}>
                {"Seven stops to "}
                <em className="acc" style={{ "color": "#255BD9" }}>
                  campus
                </em>
              </h2>
            </div>
            <p style={{ "margin": "0", "maxWidth": "400px", "color": "#4D555E", "fontSize": "16px", "lineHeight": "1.6" }}>
              Every student gets the same consultant from the first chat to the airport.
            </p>
          </div>
          <ol style={{ "listStyle": "none", "margin": "0", "padding": "0", "display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(150px, 1fr))", "gap": "18px", "position": "relative" }}>
            {(v.steps || []).map((st, __i6) => (
              <Fragment key={__i6}>
                <li style={{ "display": "flex", "flexDirection": "column", "gap": "12px", "position": "relative" }}>
                  <div style={{ "display": "flex", "alignItems": "center", "gap": "10px" }}>
                    <span className="mono" style={{ "width": "44px", "height": "44px", "borderRadius": "50%", "background": "#0F1518", "color": "#86D5FF", "display": "grid", "placeItems": "center", "fontSize": "12px", "fontWeight": "600", "flex": "0 0 auto" }}>
                      {st.code}
                    </span>
                    <span aria-hidden="true" style={{ "flex": "1 1 auto", "borderTop": "2px dashed #B9C4DA" }}></span>
                  </div>
                  <span className="disp" style={{ "fontSize": "19px", "fontWeight": "700", "lineHeight": "1" }}>
                    {st.title}
                  </span>
                  <span style={{ "color": "#4D555E", "fontSize": "14px", "lineHeight": "1.55" }}>
                    {st.body}
                  </span>
                </li>
              </Fragment>
            ))}
          </ol>
        </section>
        <section className="wrap" style={{ "paddingTop": "96px" }}>
          <div style={{ "display": "flex", "justifyContent": "space-between", "alignItems": "flex-end", "gap": "24px", "flexWrap": "wrap", "marginBottom": "36px" }}>
            <div style={{ "maxWidth": "720px" }}>
              <span className="mono" style={{ "fontSize": "13px", "color": "#255BD9" }}>
                WHERE NIGERIANS ARE STUDYING
              </span>
              <h2 className="disp" style={{ "margin": "10px 0 0", "fontSize": "53px", "lineHeight": "1.02", "fontWeight": "700" }}>
                {"Popular study "}
                <em className="acc" style={{ "color": "#255BD9" }}>
                  routes
                </em>
              </h2>
            </div>
          </div>
          <div className="g3">
            {(v.countries || []).map((c, __i6) => (
              <Fragment key={__i6}>
                {" "}
                <Link href="/destinations/united-kingdom" className="lift" style={{ "textDecoration": "none", "color": "#fff", "borderRadius": "22px", "padding": "24px", "minHeight": "200px", "display": "flex", "flexDirection": "column", "justifyContent": "space-between", "background": c.bg }}>
                  <span className="mono" style={{ "fontSize": "11px" }}>
                    {c.note}
                  </span>
                  <span>
                    <span className="disp" style={{ "display": "block", "fontSize": "53px", "lineHeight": "1.02" }}>
                      {c.code}
                    </span>
                    <span style={{ "fontWeight": "600" }}>
                      {c.country}
                    </span>
                  </span>
                </Link>
                {" "}
              </Fragment>
            ))}
          </div>
        </section>
        <section className="wrap" style={{ "paddingTop": "96px" }}>
          <div className="g2" style={{ "gap": "32px" }}>
            <div style={{ "background": "#0F1518", "color": "#fff", "borderRadius": "24px", "padding": "32px", "display": "flex", "flexDirection": "column", "gap": "16px" }}>
              <span className="mono" style={{ "fontSize": "12px", "color": "#86D5FF" }}>
                FIELDS WE PLACE STUDENTS IN
              </span>
              {(v.fields || []).map((f, __i7) => (
                <Fragment key={__i7}>
                  <div style={{ "padding": "16px 0", "borderBottom": "1px solid #2A343B" }}>
                    <div className="disp" style={{ "fontSize": "26px" }}>
                      {f.t}
                    </div>
                    <div style={{ "color": "#AEB7BF", "fontSize": "14px", "marginTop": "4px" }}>
                      {f.b}
                    </div>
                  </div>
                </Fragment>
              ))}
            </div>
            <div style={{ "background": "#FFFFFF", "border": "1px solid #E3E8F2", "borderRadius": "24px", "padding": "32px", "display": "flex", "flexDirection": "column", "gap": "16px" }}>
              <span className="mono" style={{ "fontSize": "12px", "color": "#255BD9" }}>
                EXAMS WE PREPARE YOU FOR
              </span>
              <div style={{ "display": "flex", "flexWrap": "wrap", "gap": "8px" }}>
                {(v.exams || []).map((e, __i8) => (
                  <Fragment key={__i8}>
                    <span className="chip" style={{ "background": "#EEF3FD", "color": "#0F1518", "minHeight": "40px", "fontSize": "14px" }}>
                      {e}
                    </span>
                  </Fragment>
                ))}
              </div>
              <p style={{ "margin": "0", "color": "#4D555E", "fontSize": "15px", "lineHeight": "1.6" }}>
                Not sure which test your school needs? Our free guide lists every major international exam and what it is for.
              </p>
              <Link className="btn" href="/guides/article" style={{ "background": "#0F1518", "color": "#fff", "alignSelf": "flex-start" }}>
                Read the exams guide
              </Link>
            </div>
          </div>
        </section>
        <section className="wrap" style={{ "paddingTop": "96px" }}>
          <div className="g2" style={{ "gap": "28px" }}>
            <div style={{ "background": "#0F1518", "color": "#fff", "borderRadius": "26px", "padding": "34px", "display": "flex", "flexDirection": "column", "gap": "16px" }}>
              <img src="/assets/canada-study.jpg" alt="Flymatas flyer: you can trust us with everything about the Canada study route" loading="lazy" style={{ "display": "block", "width": "100%", "height": "auto", "borderRadius": "18px", "aspectRatio": "16 / 10", "objectFit": "cover", "objectPosition": "center 62%" }} />
              <span className="mono" style={{ "fontSize": "12px", "color": "#86D5FF" }}>
                CANADA STUDY ROUTE
              </span>
              <h2 className="disp" style={{ "margin": "0", "fontSize": "37px", "lineHeight": "1.02" }}>
                {"Trust us with "}
                <em className="acc" style={{ "color": "#FD6886" }}>
                  everything Canada.
                </em>
              </h2>
              <ul style={{ "listStyle": "none", "margin": "0", "padding": "0", "display": "flex", "flexDirection": "column" }}>
                <li style={{ "display": "flex", "gap": "12px", "padding": "14px 0", "borderBottom": "1px solid #2A343B" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#86D5FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12l5 5 9-10"></path>
                  </svg>
                  {" Admission processing: undergraduate, master’s, diploma and PhD"}
                </li>
                <li style={{ "display": "flex", "gap": "12px", "padding": "14px 0", "borderBottom": "1px solid #2A343B" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#86D5FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12l5 5 9-10"></path>
                  </svg>
                  {" Study permit and visa application"}
                </li>
                <li style={{ "display": "flex", "gap": "12px", "padding": "14px 0", "borderBottom": "1px solid #2A343B" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#86D5FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12l5 5 9-10"></path>
                  </svg>
                  {" Proof of funds guidance"}
                </li>
                <li style={{ "display": "flex", "gap": "12px", "padding": "14px 0" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#86D5FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12l5 5 9-10"></path>
                  </svg>
                  {" Letters and documents: SOP, letter of explanation, letter of financial explanation and CV"}
                </li>
              </ul>
              <Link className="btn" href="/book" style={{ "background": "#FD6886", "color": "#0F1518", "alignSelf": "flex-start" }}>
                Book a clarity call
              </Link>
            </div>
            <div style={{ "background": "#DCE6FA", "borderRadius": "26px", "padding": "34px", "display": "flex", "flexDirection": "column", "gap": "16px", "position": "relative" }}>
              <svg className="dip" aria-hidden="true" width="120" height="26" viewBox="0 0 120 26" style={{ "right": "56px" }}>
                <path d="M0 -1 H120 V0 C92 0 86 24 60 24 C34 24 28 0 0 0 Z" fill="#FDFDFA"></path>
                <path d="M0 0 C28 0 34 24 60 24 C86 24 92 0 120 0" fill="none" stroke="#DCE6FA" strokeWidth="1"></path>
              </svg>
              <img src="/assets/scholarships.jpg" alt="Flymatas flyer: legit scholarships abroad WhatsApp group" loading="lazy" style={{ "display": "block", "width": "100%", "height": "auto", "borderRadius": "18px", "aspectRatio": "16 / 10", "objectFit": "cover", "objectPosition": "70% 35%" }} />
              <span className="mono" style={{ "fontSize": "12px", "color": "#255BD9" }}>
                FREE WHATSAPP GROUP
              </span>
              <h2 className="disp" style={{ "margin": "0", "fontSize": "37px", "lineHeight": "1.02" }}>
                {"Legit scholarships "}
                <em className="acc" style={{ "color": "#255BD9" }}>
                  abroad
                </em>
              </h2>
              <p style={{ "margin": "0", "color": "#4D555E", "fontSize": "16px", "lineHeight": "1.6" }}>
                Learn how to secure scholarships the right way. Send “Add me to Flymatas Scholarship Training Group” on WhatsApp and we’ll add you. The group is open to Africans only.
              </p>
              <a className="btn" href="https://wa.me/2347033221729?text=Add%20me%20to%20Flymatas%20Scholarship%20Training%20Group" style={{ "background": "#0F1518", "color": "#fff", "alignSelf": "flex-start" }}>
                Join the scholarship group
              </a>
            </div>
          </div>
        </section>
        <section id="study-fairs" className="wrap" style={{ "paddingTop": "96px" }}>
          <div className="shadow">
            <div className="pass" style={{ "background": "#FFFFFF", "borderRadius": "26px", "display": "flex", "flexWrap": "wrap" }}>
              <div style={{ "flex": "999 1 460px", "padding": "34px", "display": "flex", "flexDirection": "column", "gap": "12px" }}>
                <span className="mono" style={{ "fontSize": "12px", "color": "#255BD9" }}>
                  EVENT · STUDY ABROAD FAIR
                </span>
                <h2 className="disp" style={{ "margin": "0", "fontSize": "45px", "lineHeight": "1.02" }}>
                  {"Meet the schools "}
                  <em className="acc" style={{ "color": "#255BD9" }}>
                    face to face.
                  </em>
                </h2>
                <p style={{ "margin": "0", "color": "#4D555E", "fontSize": "16px", "lineHeight": "1.6" }}>
                  Talk to representatives from overseas institutions, ask about courses and scholarships, and get advice on the full process in one afternoon.
                </p>
              </div>
              <div className="stub-col perf-v" style={{ "flex": "1 1 240px", "minWidth": "240px", "background": "#EEF3FD", "padding": "30px", "display": "flex", "flexDirection": "column", "gap": "10px", "justifyContent": "center" }}>
                <div className="mono" style={{ "fontSize": "10px", "color": "#4D555E" }}>
                  DATE
                </div>
                <div className="disp" style={{ "fontSize": "26px" }}>
                  [DATE]
                </div>
                <div className="mono" style={{ "fontSize": "10px", "color": "#4D555E" }}>
                  VENUE
                </div>
                <div style={{ "fontWeight": "600" }}>
                  [VENUE]
                </div>
                <Link className="btn" href="/experiences" style={{ "background": "#0F1518", "color": "#fff", "marginTop": "8px" }}>
                  Reserve a seat
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="wrap" style={{ "paddingTop": "96px" }}>
          <div style={{ "display": "flex", "justifyContent": "space-between", "alignItems": "flex-end", "gap": "24px", "flexWrap": "wrap", "marginBottom": "36px" }}>
            <div style={{ "maxWidth": "720px" }}>
              <span className="mono" style={{ "fontSize": "13px", "color": "#255BD9" }}>
                READ FIRST
              </span>
              <h2 className="disp" style={{ "margin": "10px 0 0", "fontSize": "53px", "lineHeight": "1.02", "fontWeight": "700" }}>
                {"Free study "}
                <em className="acc" style={{ "color": "#255BD9" }}>
                  guides
                </em>
              </h2>
            </div>
          </div>
          <div className="g3">
            {(v.guides || []).map((r, __i6) => (
              <Fragment key={__i6}>
                {" "}
                <a href={r.url} className="lift" style={{ "textDecoration": "none", "background": "#FFFFFF", "border": "1px solid #E3E8F2", "borderRadius": "18px", "padding": "22px", "display": "flex", "gap": "16px", "alignItems": "flex-start", "color": "#0F1518" }}>
                  <span style={{ "flex": "0 0 auto", "width": "44px", "height": "56px", "borderRadius": "6px 14px 6px 6px", "background": r.tint, "display": "grid", "placeItems": "center" }} aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0F1518" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M6 3h9l4 4v14H6zM14 3v5h5M9 13h7M9 17h5"></path>
                    </svg>
                  </span>
                  <span style={{ "display": "flex", "flexDirection": "column", "gap": "6px" }}>
                    <span className="mono" style={{ "fontSize": "11px", "color": "#4D555E" }}>
                      {r.tag}
                    </span>
                    <span className="disp" style={{ "fontSize": "19px", "lineHeight": "1" }}>
                      {r.title}
                    </span>
                  </span>
                </a>
              </Fragment>
            ))}
          </div>
        </section>
        <section className="wrap" style={{ "paddingTop": "96px" }}>
          <div style={{ "display": "flex", "justifyContent": "space-between", "alignItems": "flex-end", "gap": "24px", "flexWrap": "wrap", "marginBottom": "36px" }}>
            <div style={{ "maxWidth": "720px" }}>
              <span className="mono" style={{ "fontSize": "13px", "color": "#255BD9" }}>
                QUESTIONS
              </span>
              <h2 className="disp" style={{ "margin": "10px 0 0", "fontSize": "53px", "lineHeight": "1.02", "fontWeight": "700" }}>
                {"Students "}
                <em className="acc" style={{ "color": "#255BD9" }}>
                  always ask
                </em>
              </h2>
            </div>
          </div>
          <div style={{ "display": "flex", "flexDirection": "column", "gap": "12px" }}>
            {(v.faqs || []).map((q, __i6) => (
              <Fragment key={__i6}>
                <div style={{ "background": "#FFFFFF", "border": "1px solid #E3E8F2", "borderRadius": "18px" }}>
                  <button type="button" onClick={q.toggle} aria-expanded={q.exp} style={{ "width": "100%", "minHeight": "64px", "display": "flex", "justifyContent": "space-between", "alignItems": "center", "gap": "16px", "padding": "18px 22px", "background": "transparent", "border": "0", "cursor": "pointer", "textAlign": "left", "font": "600 18px 'Outfit', sans-serif", "color": "#0F1518" }}>
                    {q.q}
                    <span aria-hidden="true" className="mono" style={{ "fontSize": "20px", "color": "#255BD9" }}>
                      {q.sign}
                    </span>
                  </button>
                  {" "}
                  {q.open ? (
                    <>
                      <p style={{ "margin": "0", "padding": "0 22px 22px", "color": "#4D555E", "fontSize": "16px", "lineHeight": "1.65", "maxWidth": "820px" }}>
                        {q.a}
                      </p>
                    </>
                  ) : null}
                </div>
              </Fragment>
            ))}
          </div>
        </section>
        <section className="wrap" style={{ "paddingTop": "96px" }}>
          <div style={{ "background": "#255BD9", "color": "#fff", "borderRadius": "28px", "padding": "48px", "display": "flex", "flexWrap": "wrap", "justifyContent": "space-between", "alignItems": "center", "gap": "28px", "position": "relative", "overflow": "hidden" }}>
            <div style={{ "maxWidth": "640px", "display": "flex", "flexDirection": "column", "gap": "12px" }}>
              <h2 className="disp" style={{ "margin": "0", "fontSize": "45px", "lineHeight": "1.02", "fontWeight": "700" }}>
                {"Your seat in class "}
                <em className="acc" style={{ "color": "#FDFDFA" }}>
                  is waiting.
                </em>
              </h2>
              <p style={{ "margin": "0", "color": "#E6EDFF", "fontSize": "17px", "lineHeight": "1.6" }}>
                Send your results and the course you want. We reply with schools that fit your grades and budget.
              </p>
            </div>
            <div style={{ "display": "flex", "flexWrap": "wrap", "gap": "12px" }}>
              <a className="btn" href="https://wa.me/2347033221729" style={{ "background": "#FD6886", "color": "#0F1518" }}>
                Start on WhatsApp
              </a>
              <Link className="btn" href="/book" style={{ "background": "transparent", "color": "#fff", "border": "1px solid rgba(255,255,255,.6)" }}>
                Start my application
              </Link>
              <Link className="btn" href="/book" style={{ "background": "transparent", "color": "#fff", "border": "1px solid rgba(255,255,255,.6)" }}>
                Start my application
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
