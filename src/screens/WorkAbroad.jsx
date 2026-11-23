"use client";

import { Fragment, useState } from 'react';
import Link from 'next/link';

// Screen converted from the WorkAbroad design. State and derived values mirror the design's logic.
const INITIAL_STATE = Object.assign({ menu: false }, {});

class Logic {
  constructor(state, setState, props) {
    this.state = state;
    this.setState = setState;
    this.props = props || {};
  }

  
  extra(s) {
    return {
      options: [
        { gate: 'W1', title: 'Job placements', tint: '#DDF3FF', icon: 'M4 8h16v11H4zM9 8V5h6v3M4 13h16', body: 'Job openings with partner organisations abroad, matched to your skills and experience.' },
        { gate: 'W2', title: 'Internships', tint: '#DCE6FA', icon: 'M2 9l10-5 10 5-10 5-10-5zM6 11v5c3 2 9 2 12 0v-5', body: 'Paid and unpaid internships that give graduates real international experience.' },
        { gate: 'W3', title: 'Fellowships', tint: '#E8ECF5', icon: 'M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9L12 3z', body: 'Programmes like the Young Professional Fellowship Canada, with application support from start to finish.' },
        { gate: 'W4', title: 'Canada PR & relocation', tint: '#FFE1E7', icon: 'M12 21s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12z', body: 'Canada permanent residency through Express Entry, the Provincial Nominee Program and more. Message us for the details and requirements, free.' }
      ],
      pathways: [
        { tag: 'CANADA · FELLOWSHIP', title: 'Young Professional Fellowship Canada 2025', body: 'Who qualifies, what to prepare and how to apply, step by step.' },
        { tag: 'CANADA · PERMANENT RESIDENCY', title: 'Ontario PR pathway', body: 'How the provincial route works and what a strong profile looks like.' },
        { tag: 'RELOCATION', title: 'The Ponga relocation opportunity', body: 'A comprehensive guide to accessing the programme and avoiding common mistakes.' }
      ],
      safety: [
        'Can I verify the employer independently, with a real website, address and registration?',
        'Is there a written job offer, and does it match the visa I am applying for?',
        'Am I paying for services I can see, with a receipt, and not for the job itself?',
        'Does the salary make sense for that role in that country?',
        'Can I visit your office in person and meet the consultant handling my file?'
      ],
      steps: [
        { code: 'W1', title: 'CV review', body: 'We look at your skills, experience and goals.' },
        { code: 'W2', title: 'Route check', body: 'Which countries and visas you actually qualify for.' },
        { code: 'W3', title: 'Applications', body: 'Placements, internships or fellowship applications.' },
        { code: 'W4', title: 'Visa file', body: 'Work visa prepared to match the offer exactly.' },
        { code: 'W5', title: 'Relocation', body: 'Flight, first accommodation and arrival support.' }
      ]
    };
  }
  renderVals() {
    const s = this.state;
    const base = { menuOpen: s.menu, toggleMenu: () => this.setState({ menu: !s.menu }) };
    return Object.assign(base, {}, this.extra(s));
  }
}

export default function WorkAbroadScreen(props) {
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
              <Link className="navlink" href="/work-abroad" aria-current="page" style={{ "borderBottom": "2px solid #FD6886" }}>
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
                  WORK ABROAD
                </span>
              </nav>
              <h1 className="disp hero-h1" style={{ "margin": "0", "color": "#fff", "fontSize": "72px", "lineHeight": "1.02", "fontWeight": "700" }}>
                {"Japa with a job "}
                <em className="acc" style={{ "color": "#FDFDFA" }}>
                  waiting.
                </em>
              </h1>
              <p style={{ "margin": "0", "color": "#F1F5FF", "fontSize": "19px", "lineHeight": "1.55", "maxWidth": "620px" }}>
                Internships, work placements, job openings and fellowships with partner organisations abroad, plus honest career guidance on what your CV can actually get you.
              </p>
              <div style={{ "display": "flex", "flexWrap": "wrap", "gap": "12px" }}>
                <Link className="btn" href="/book" style={{ "background": "#0F1518", "color": "#fff" }}>
                  Check my options
                </Link>
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
                WAYS IN
              </span>
              <h2 className="disp" style={{ "margin": "10px 0 0", "fontSize": "53px", "lineHeight": "1.02", "fontWeight": "700" }}>
                {"Four ways to work "}
                <em className="acc" style={{ "color": "#255BD9" }}>
                  abroad
                </em>
              </h2>
            </div>
          </div>
          <div className="g2">
            {(v.options || []).map((o, __i6) => (
              <Fragment key={__i6}>
                <div className="shadow lift">
                  <article className="tkt-h" style={{ "background": "#FFFFFF", "borderRadius": "22px", "display": "flex", "minHeight": "210px" }}>
                    <div style={{ "flex": "1 1 auto", "minWidth": "0", "padding": "26px 28px", "display": "flex", "flexDirection": "column", "gap": "12px" }}>
                      <span style={{ "width": "44px", "height": "44px", "borderRadius": "12px", "display": "grid", "placeItems": "center", "background": o.tint }} aria-hidden="true">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0F1518" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d={o.icon}></path>
                        </svg>
                      </span>
                      <h3 className="disp" style={{ "margin": "0", "fontSize": "28px", "lineHeight": "1.02" }}>
                        {o.title}
                      </h3>
                      <p style={{ "margin": "0", "color": "#4D555E", "fontSize": "15px", "lineHeight": "1.6" }}>
                        {o.body}
                      </p>
                    </div>
                    <div className="perf-v" style={{ "flex": "0 0 150px", "padding": "22px 18px", "display": "flex", "flexDirection": "column", "justifyContent": "space-between", "alignItems": "center", "background": o.tint }}>
                      <div style={{ "textAlign": "center" }}>
                        <div className="mono" style={{ "fontSize": "10px" }}>
                          GATE
                        </div>
                        <div className="disp" style={{ "fontSize": "41px", "lineHeight": "1" }}>
                          {o.gate}
                        </div>
                      </div>
                      <Link href="/book" className="btn" style={{ "background": "#0F1518", "color": "#fff", "minHeight": "44px", "padding": "0 16px", "fontSize": "14px" }}>
                        Start
                      </Link>
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
                FEATURED PATHWAYS
              </span>
              <h2 className="disp" style={{ "margin": "10px 0 0", "fontSize": "53px", "lineHeight": "1.02", "fontWeight": "700" }}>
                {"Routes we’ve "}
                <em className="acc" style={{ "color": "#255BD9" }}>
                  mapped
                </em>
              </h2>
            </div>
            <p style={{ "margin": "0", "maxWidth": "400px", "color": "#4D555E", "fontSize": "16px", "lineHeight": "1.6" }}>
              Each pathway has a free step-by-step guide written by our consultants.
            </p>
          </div>
          <div className="g3">
            {(v.pathways || []).map((p, __i6) => (
              <Fragment key={__i6}>
                {" "}
                <Link href="/guides/article" className="lift" style={{ "textDecoration": "none", "color": "#0F1518", "background": "#FFFFFF", "border": "1px solid #E3E8F2", "borderRadius": "22px", "padding": "26px", "display": "flex", "flexDirection": "column", "gap": "14px", "minHeight": "260px" }}>
                  <span className="mono" style={{ "fontSize": "11px", "color": "#255BD9" }}>
                    {p.tag}
                  </span>
                  <span className="disp" style={{ "fontSize": "28px", "lineHeight": "1.02" }}>
                    {p.title}
                  </span>
                  <span style={{ "color": "#4D555E", "fontSize": "15px", "lineHeight": "1.6" }}>
                    {p.body}
                  </span>
                  <span style={{ "marginTop": "auto", "display": "flex", "alignItems": "center", "gap": "8px", "fontWeight": "600", "color": "#255BD9" }}>
                    {"Read the step-by-step guide "}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14M13 6l6 6-6 6"></path>
                    </svg>
                  </span>
                </Link>
                {" "}
              </Fragment>
            ))}
          </div>
        </section>
        <section className="wrap" style={{ "paddingTop": "96px" }}>
          <div style={{ "display": "flex", "flexWrap": "wrap", "gap": "40px", "alignItems": "center" }}>
            <div style={{ "flex": "1 1 360px", "maxWidth": "520px" }}>
              <img src="/assets/canada-pr.jpg" alt="Flymatas flyer: Canada permanent residency through Express Entry, Provincial Nomination Program and more" loading="lazy" style={{ "display": "block", "width": "100%", "height": "auto", "borderRadius": "18px", "boxShadow": "0 18px 36px rgba(15,21,24,.15)" }} />
            </div>
            <div style={{ "flex": "999 1 420px", "display": "flex", "flexDirection": "column", "gap": "16px" }}>
              <span className="mono" style={{ "fontSize": "13px", "color": "#255BD9" }}>
                CANADA PERMANENT RESIDENCY
              </span>
              <h2 className="disp" style={{ "margin": "0", "fontSize": "53px", "lineHeight": "1.02" }}>
                {"Express Entry and PNP are "}
                <em className="acc" style={{ "color": "#255BD9" }}>
                  not difficult
                </em>
              </h2>
              <p style={{ "margin": "0", "color": "#4D555E", "fontSize": "17px", "lineHeight": "1.6" }}>
                Canada permanent residency through Express Entry, the Provincial Nominee Program and more. We help you navigate the process step by step. Message us for the details and requirements, free.
              </p>
              <a className="btn" href="https://wa.me/2347033221729?text=Hello%20Flymatas%2C%20please%20send%20me%20the%20details%20and%20requirements%20for%20Canada%20PR." style={{ "background": "#0F1518", "color": "#fff", "alignSelf": "flex-start" }}>
                Get the requirements, free
              </a>
            </div>
          </div>
        </section>
        <section className="wrap" style={{ "paddingTop": "96px" }}>
          <div style={{ "background": "#0F1518", "color": "#fff", "borderRadius": "28px", "padding": "44px", "display": "flex", "flexWrap": "wrap", "gap": "40px" }}>
            <div style={{ "flex": "1 1 320px", "display": "flex", "flexDirection": "column", "gap": "14px" }}>
              <span className="mono" style={{ "fontSize": "12px", "color": "#86D5FF" }}>
                STAY SAFE
              </span>
              <h2 className="disp" style={{ "margin": "0", "fontSize": "53px", "lineHeight": "1.02" }}>
                {"Before you pay "}
                <em className="acc" style={{ "color": "#FD6886" }}>
                  any agent
                </em>
              </h2>
              <p style={{ "margin": "0", "color": "#AEB7BF", "fontSize": "16px", "lineHeight": "1.6" }}>
                Too many Nigerians lose money to fake job offers. Ask these questions of anyone, including us.
              </p>
            </div>
            <ul style={{ "flex": "999 1 460px", "listStyle": "none", "margin": "0", "padding": "0", "display": "flex", "flexDirection": "column", "gap": "4px" }}>
              {(v.safety || []).map((x, __i7) => (
                <Fragment key={__i7}>
                  <li style={{ "display": "flex", "gap": "14px", "alignItems": "flex-start", "padding": "16px 0", "borderBottom": "1px solid #2A343B", "fontSize": "16px", "lineHeight": "1.5" }}>
                    <span style={{ "color": "#86D5FF", "flex": "0 0 auto" }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3zM9 12l2 2 4-4"></path>
                      </svg>
                    </span>
                    {x}
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
                HOW IT WORKS
              </span>
              <h2 className="disp" style={{ "margin": "10px 0 0", "fontSize": "53px", "lineHeight": "1.02", "fontWeight": "700" }}>
                {"From CV to "}
                <em className="acc" style={{ "color": "#255BD9" }}>
                  first day
                </em>
              </h2>
            </div>
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
          <div style={{ "background": "#255BD9", "color": "#fff", "borderRadius": "28px", "padding": "48px", "display": "flex", "flexWrap": "wrap", "justifyContent": "space-between", "alignItems": "center", "gap": "28px", "position": "relative", "overflow": "hidden" }}>
            <div style={{ "maxWidth": "640px", "display": "flex", "flexDirection": "column", "gap": "12px" }}>
              <h2 className="disp" style={{ "margin": "0", "fontSize": "45px", "lineHeight": "1.02", "fontWeight": "700" }}>
                {"Let’s look at "}
                <em className="acc" style={{ "color": "#FDFDFA" }}>
                  your CV.
                </em>
              </h2>
              <p style={{ "margin": "0", "color": "#E6EDFF", "fontSize": "17px", "lineHeight": "1.6" }}>
                Send your CV on WhatsApp. A consultant tells you honestly which routes are open to you.
              </p>
            </div>
            <div style={{ "display": "flex", "flexWrap": "wrap", "gap": "12px" }}>
              <a className="btn" href="https://wa.me/2347033221729" style={{ "background": "#FD6886", "color": "#0F1518" }}>
                Send my CV
              </a>
              <Link className="btn" href="/book" style={{ "background": "transparent", "color": "#fff", "border": "1px solid rgba(255,255,255,.6)" }}>
                Check my options
              </Link>
              <Link className="btn" href="/book" style={{ "background": "transparent", "color": "#fff", "border": "1px solid rgba(255,255,255,.6)" }}>
                Check my options
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
