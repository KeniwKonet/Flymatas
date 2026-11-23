"use client";

import { Fragment, useState } from 'react';
import Link from 'next/link';

// Screen converted from the DestinationUK design. State and derived values mirror the design's logic.
const INITIAL_STATE = Object.assign({ menu: false }, {"purpose": "study", "faq": 0});

class Logic {
  constructor(state, setState, props) {
    this.state = state;
    this.setState = setState;
    this.props = props || {};
  }

  
  extra(s) {
    const purposesBase = [["visit", "Visit & holiday"], ["study", "Study"], ["work", "Work"]].map(([id, label]) => ({ label, on: s.purpose === id ? 'true' : 'false', bg: s.purpose === id ? '#0F1518' : '#FFFFFF', fg: s.purpose === id ? '#FFFFFF' : '#0F1518', pick: () => this.setState({ purpose: id }) }));
    const P = {
      visit: { title: 'Holiday, family visit or business', body: 'London, Manchester, Edinburgh or a few cities in one trip. We plan the itinerary, book flights and hotel, and prepare a visitor visa file that clearly shows why you are travelling and why you will come back.', items: ['Visitor visa application and review', 'Flights from Lagos or Abuja', 'Hotel and airport transfer', 'Day tours and travel insurance'] },
      study: { title: 'University, college or short course', body: 'We match you with partner institutions, help with English tests, prepare your admission and CAS documents, then guide the student visa file step by step.', items: ['School matching and application', 'IELTS and English test guidance', 'Student visa file and proof of funds', 'Pre-departure briefing and arrival support'] },
      work: { title: 'Jobs, placements and skilled routes', body: 'We help you check whether your role and employer qualify, review your certificate of sponsorship and prepare a work visa file that matches the job exactly.', items: ['Route and eligibility check', 'Sponsorship document review', 'Work visa file preparation', 'Relocation and settling-in support'] }
    };
    const faqs = (this.props.__faqs || [["How long does a UK visitor visa take?", "Standard processing is usually around three weeks from your biometrics appointment, but it varies by season. We tell you the current wait when we start your file."], ["Do you guarantee the visa?", "No honest agent can. Only UK Visas and Immigration decides. What we promise is a complete, consistent, well-prepared application, which is what gives you the best chance."], ["Can you help if I was refused before?", "Yes. We read the refusal letter with you, fix what caused it and only reapply when the file is genuinely stronger."], ["Where do I do biometrics?", "At the UK visa application centre in Lagos or Abuja. We book the slot and prepare you for the appointment."]]).map((f, i) => ({ q: f[0], a: f[1], open: s.faq === i, exp: s.faq === i ? 'true' : 'false', sign: s.faq === i ? '−' : '+', toggle: () => this.setState({ faq: s.faq === i ? -1 : i }) }));
    return {
      purposes: purposesBase,
      purpose: P[s.purpose],
      faqs,
      docs: [
        { n: '01', t: 'International passport valid for your whole stay, with blank pages' },
        { n: '02', t: 'Bank statements showing you can fund the trip' },
        { n: '03', t: 'Proof of income: employment letter, payslips or business documents' },
        { n: '04', t: 'Travel plan: where you will stay and what you will do' },
        { n: '05', t: 'Ties to Nigeria: family, job, property or studies to return to' },
        { n: '06', t: 'Previous travel history, if you have any' }
      ],
      steps: [
        { code: 'A1', title: 'Free first chat', body: 'Tell us your plan on WhatsApp or at any office. We tell you honestly which route fits.' },
        { code: 'B2', title: 'We build the file', body: 'Forms filled, documents checked and gaps fixed before anything is submitted.' },
        { code: 'C3', title: 'Biometrics and submission', body: 'We book your appointment and prepare you for what happens there.' },
        { code: 'D4', title: 'Decision and departure', body: 'Visa approved, then ticket, hotel and airport pickup locked in.' }
      ],
      packages: [
        { kicker: 'LEISURE', title: 'London City Break', bg: '#FFE1E7', items: ['Visitor visa support', 'Return flight', '5 nights hotel', 'City tour and airport transfer'] },
        { kicker: 'STUDY', title: 'UK Study Route', bg: '#DCE6FA', items: ['School matching', 'Admission file', 'Student visa file', 'Arrival support'] },
        { kicker: 'WORK', title: 'UK Work Route', bg: '#DDF3FF', items: ['Eligibility check', 'Sponsorship review', 'Work visa file', 'Relocation help'] }
      ]
    };
  }
  renderVals() {
    const s = this.state;
    const base = { menuOpen: s.menu, toggleMenu: () => this.setState({ menu: !s.menu }) };
    return Object.assign(base, {}, this.extra(s));
  }
}

export default function DestinationUKScreen(props) {
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
              <Link className="navlink" href="/destinations" aria-current="page" style={{ "borderBottom": "2px solid #FD6886" }}>
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
                <Link className="crumb" href="/destinations">
                  DESTINATIONS
                </Link>
                <span aria-hidden="true">
                  /
                </span>
                <span>
                  UNITED KINGDOM
                </span>
              </nav>
              <h1 className="disp hero-h1" style={{ "margin": "0", "color": "#fff", "fontSize": "72px", "lineHeight": "1.02", "fontWeight": "700" }}>
                {"London is "}
                <em className="acc" style={{ "color": "#FDFDFA" }}>
                  calling.
                </em>
              </h1>
              <p style={{ "margin": "0", "color": "#F1F5FF", "fontSize": "19px", "lineHeight": "1.55", "maxWidth": "620px" }}>
                Study at a UK university, visit family, or take the classic city break. Whatever brings you, we build the visa file, book the flight and stay on WhatsApp until you land at Heathrow.
              </p>
              <div style={{ "display": "flex", "flexWrap": "wrap", "gap": "12px" }}>
                <Link className="btn" href="/book" style={{ "background": "#0F1518", "color": "#fff" }}>
                  Book this route
                </Link>
                <a className="btn" href="https://wa.me/2347033221729" style={{ "background": "rgba(255,255,255,.2)", "color": "#fff", "border": "1px solid rgba(255,255,255,.55)" }}>
                  Ask a consultant
                </a>
              </div>
            </div>
            <div className="shadow" style={{ "flex": "1 1 340px", "maxWidth": "420px" }}>
              <div className="tkt-v" style={{ "background": "#FFFFFF", "borderRadius": "22px", "overflow": "hidden" }}>
                <div style={{ "height": "214px", "padding": "22px", "background": "linear-gradient(160deg,#0F1518,#2B353C)", "color": "#fff", "display": "flex", "flexDirection": "column", "justifyContent": "space-between" }}>
                  <span className="mono" style={{ "fontSize": "11px" }}>
                    BOARDING PASS · FM-LHR
                  </span>
                  <div style={{ "display": "flex", "justifyContent": "space-between", "alignItems": "flex-end" }}>
                    <div>
                      <div className="mono" style={{ "fontSize": "11px" }}>
                        FROM
                      </div>
                      <div className="disp" style={{ "fontSize": "53px", "lineHeight": "1.02", "fontWeight": "700" }}>
                        LOS
                      </div>
                    </div>
                    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14M13 6l6 6-6 6"></path>
                    </svg>
                    <div style={{ "textAlign": "right" }}>
                      <div className="mono" style={{ "fontSize": "11px" }}>
                        TO
                      </div>
                      <div className="disp" style={{ "fontSize": "53px", "lineHeight": "1.02", "fontWeight": "700" }}>
                        LHR
                      </div>
                    </div>
                  </div>
                </div>
                <div className="perf-h mono" style={{ "padding": "20px 22px", "display": "grid", "gridTemplateColumns": "repeat(3, minmax(0,1fr))", "gap": "10px", "fontSize": "10px", "color": "#4D555E" }}>
                  <div>
                    FLIGHT TIME
                    <div style={{ "fontSize": "13px", "color": "#0F1518", "fontWeight": "600" }}>
                      ~6h 30m
                    </div>
                  </div>
                  <div>
                    VISA
                    <div style={{ "fontSize": "13px", "color": "#0F1518", "fontWeight": "600" }}>
                      Required
                    </div>
                  </div>
                  <div>
                    CURRENCY
                    <div style={{ "fontSize": "13px", "color": "#0F1518", "fontWeight": "600" }}>
                      GBP £
                    </div>
                  </div>
                </div>
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
                WHY ARE YOU GOING?
              </span>
              <h2 className="disp" style={{ "margin": "10px 0 0", "fontSize": "53px", "lineHeight": "1.02", "fontWeight": "700" }}>
                {"One city, "}
                <em className="acc" style={{ "color": "#255BD9" }}>
                  three journeys
                </em>
              </h2>
            </div>
          </div>
          <div role="group" aria-label="Purpose of trip" style={{ "display": "flex", "flexWrap": "wrap", "gap": "8px" }}>
            {(v.purposes || []).map((c, __i6) => (
              <Fragment key={__i6}>
                <button type="button" aria-pressed={c.on} onClick={c.pick} style={{ "minHeight": "44px", "padding": "0 18px", "borderRadius": "999px", "border": "1.5px solid #0F1518", "cursor": "pointer", "font": "600 14px 'Outfit', sans-serif", "background": c.bg, "color": c.fg }}>
                  {c.label}
                </button>
              </Fragment>
            ))}
          </div>
          <div style={{ "marginTop": "24px", "background": "#FFFFFF", "border": "1px solid #E3E8F2", "borderRadius": "24px", "padding": "32px", "display": "flex", "flexWrap": "wrap", "gap": "32px" }}>
            <div style={{ "flex": "999 1 420px", "display": "flex", "flexDirection": "column", "gap": "14px" }}>
              <h3 className="disp" style={{ "margin": "0", "fontSize": "32px", "lineHeight": "1.02" }}>
                {v.purpose.title}
              </h3>
              <p style={{ "margin": "0", "color": "#4D555E", "fontSize": "16px", "lineHeight": "1.65" }}>
                {v.purpose.body}
              </p>
            </div>
            <ul style={{ "flex": "1 1 300px", "listStyle": "none", "margin": "0", "padding": "0", "display": "flex", "flexDirection": "column", "gap": "12px" }}>
              {(v.purpose.items || []).map((it, __i7) => (
                <Fragment key={__i7}>
                  <li style={{ "display": "flex", "gap": "10px", "alignItems": "flex-start", "fontSize": "15px" }}>
                    <span style={{ "color": "#255BD9", "flex": "0 0 auto" }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 12l5 5 9-10"></path>
                      </svg>
                    </span>
                    {it}
                  </li>
                </Fragment>
              ))}
            </ul>
          </div>
        </section>
        <section className="wrap" style={{ "paddingTop": "96px" }}>
          <div style={{ "display": "flex", "justifyContent": "space-between", "alignItems": "flex-end", "gap": "24px", "flexWrap": "wrap", "marginBottom": "36px" }}>
            <div style={{ "maxWidth": "720px" }}>
              <span className="mono" style={{ "fontSize": "13px", "color": "#255BD9" }}>
                PAPERWORK
              </span>
              <h2 className="disp" style={{ "margin": "10px 0 0", "fontSize": "53px", "lineHeight": "1.02", "fontWeight": "700" }}>
                {"What you’ll "}
                <em className="acc" style={{ "color": "#255BD9" }}>
                  need
                </em>
              </h2>
            </div>
            <p style={{ "margin": "0", "maxWidth": "400px", "color": "#4D555E", "fontSize": "16px", "lineHeight": "1.6" }}>
              A starting checklist for a UK Standard Visitor visa. Study and work visas need more; we tell you exactly what.
            </p>
          </div>
          <div className="g2">
            <div style={{ "background": "#0F1518", "color": "#fff", "borderRadius": "24px", "padding": "32px" }}>
              <span className="mono" style={{ "fontSize": "12px", "color": "#86D5FF" }}>
                {"TYPICAL VISITOR VISA "}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12l5 5 9-10"></path>
                </svg>
                LIST
              </span>
              <ul style={{ "listStyle": "none", "margin": "18px 0 0", "padding": "0", "display": "flex", "flexDirection": "column", "gap": "14px" }}>
                {(v.docs || []).map((dc, __i8) => (
                  <Fragment key={__i8}>
                    <li style={{ "display": "flex", "gap": "12px", "alignItems": "flex-start", "fontSize": "15px", "lineHeight": "1.5", "paddingBottom": "14px", "borderBottom": "1px solid #2A343B" }}>
                      <span className="mono" style={{ "color": "#86D5FF", "fontSize": "12px", "flex": "0 0 28px" }}>
                        {dc.n}
                      </span>
                      {dc.t}
                    </li>
                  </Fragment>
                ))}
              </ul>
              <p style={{ "margin": "18px 0 0", "color": "#9AA5AF", "fontSize": "13px", "lineHeight": "1.5" }}>
                Requirements change. Your consultant confirms the current list for your exact visa before you pay any fee.
              </p>
            </div>
            <div style={{ "display": "flex", "flexDirection": "column", "gap": "18px" }}>
              {(v.steps || []).map((st, __i7) => (
                <Fragment key={__i7}>
                  <div style={{ "display": "flex", "gap": "16px", "alignItems": "flex-start", "background": "#FFFFFF", "border": "1px solid #E3E8F2", "borderRadius": "18px", "padding": "20px" }}>
                    <span className="mono" style={{ "width": "44px", "height": "44px", "borderRadius": "50%", "background": "#FD6886", "color": "#0F1518", "display": "grid", "placeItems": "center", "fontSize": "12px", "fontWeight": "600", "flex": "0 0 auto" }}>
                      {st.code}
                    </span>
                    <div>
                      <div className="disp" style={{ "fontSize": "20px", "lineHeight": "1" }}>
                        {st.title}
                      </div>
                      <div style={{ "color": "#4D555E", "fontSize": "14px", "lineHeight": "1.55", "marginTop": "6px" }}>
                        {st.body}
                      </div>
                    </div>
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
        </section>
        <section className="wrap" style={{ "paddingTop": "96px" }}>
          <div style={{ "display": "flex", "justifyContent": "space-between", "alignItems": "flex-end", "gap": "24px", "flexWrap": "wrap", "marginBottom": "36px" }}>
            <div style={{ "maxWidth": "720px" }}>
              <span className="mono" style={{ "fontSize": "13px", "color": "#255BD9" }}>
                PACKAGES
              </span>
              <h2 className="disp" style={{ "margin": "10px 0 0", "fontSize": "53px", "lineHeight": "1.02", "fontWeight": "700" }}>
                {"Pick your "}
                <em className="acc" style={{ "color": "#255BD9" }}>
                  ticket
                </em>
              </h2>
            </div>
            <p style={{ "margin": "0", "maxWidth": "400px", "color": "#4D555E", "fontSize": "16px", "lineHeight": "1.6" }}>
              Prices depend on season and dates, so your consultant quotes the full cost before you commit.
            </p>
          </div>
          <div className="g3">
            {(v.packages || []).map((p, __i6) => (
              <Fragment key={__i6}>
                <div className="shadow lift">
                  <article className="tkt-v" style={{ "background": "#FFFFFF", "borderRadius": "22px", "overflow": "hidden" }}>
                    <div style={{ "height": "214px", "padding": "24px", "background": p.bg, "display": "flex", "flexDirection": "column", "justifyContent": "space-between" }}>
                      <span className="mono" style={{ "fontSize": "11px" }}>
                        {p.kicker}
                      </span>
                      <h3 className="disp" style={{ "margin": "0", "fontSize": "37px", "lineHeight": "1.02", "fontWeight": "700" }}>
                        {p.title}
                      </h3>
                    </div>
                    <div className="perf-h" style={{ "padding": "22px", "display": "flex", "flexDirection": "column", "gap": "14px" }}>
                      <ul style={{ "listStyle": "none", "margin": "0", "padding": "0", "display": "flex", "flexDirection": "column", "gap": "8px" }}>
                        {(p.items || []).map((it, __i12) => (
                          <Fragment key={__i12}>
                            <li style={{ "display": "flex", "gap": "8px", "fontSize": "14px", "color": "#0F1518" }}>
                              <span style={{ "color": "#255BD9" }}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <path d="M5 12l5 5 9-10"></path>
                                </svg>
                              </span>
                              {it}
                            </li>
                          </Fragment>
                        ))}
                      </ul>
                      <div style={{ "display": "flex", "justifyContent": "space-between", "alignItems": "center", "gap": "12px", "paddingTop": "12px", "borderTop": "1px solid #E3E8F2" }}>
                        <div className="mono" style={{ "fontSize": "10px", "color": "#4D555E" }}>
                          FROM
                          <div className="disp" style={{ "fontSize": "22px", "color": "#0F1518" }}>
                            [PRICE]
                          </div>
                        </div>
                        <Link href="/book" className="btn" style={{ "background": "#0F1518", "color": "#fff", "minHeight": "44px", "fontSize": "14px" }}>
                          Choose
                        </Link>
                      </div>
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
                QUESTIONS
              </span>
              <h2 className="disp" style={{ "margin": "10px 0 0", "fontSize": "53px", "lineHeight": "1.02", "fontWeight": "700" }}>
                {"Before you "}
                <em className="acc" style={{ "color": "#255BD9" }}>
                  ask
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
                {"Your UK file, "}
                <em className="acc" style={{ "color": "#FDFDFA" }}>
                  done properly.
                </em>
              </h2>
              <p style={{ "margin": "0", "color": "#E6EDFF", "fontSize": "17px", "lineHeight": "1.6" }}>
                Send one message. A consultant reviews your situation and tells you honestly what route fits.
              </p>
            </div>
            <div style={{ "display": "flex", "flexWrap": "wrap", "gap": "12px" }}>
              <a className="btn" href="https://wa.me/2347033221729" style={{ "background": "#FD6886", "color": "#0F1518" }}>
                Start on WhatsApp
              </a>
              <Link className="btn" href="/book" style={{ "background": "transparent", "color": "#fff", "border": "1px solid rgba(255,255,255,.6)" }}>
                Book this route
              </Link>
              <Link className="btn" href="/book" style={{ "background": "transparent", "color": "#fff", "border": "1px solid rgba(255,255,255,.6)" }}>
                Book this route
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
