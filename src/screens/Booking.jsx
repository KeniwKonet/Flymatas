"use client";

import { Fragment, useState } from 'react';
import Link from 'next/link';

// Screen converted from the Booking design. State and derived values mirror the design's logic.
const INITIAL_STATE = Object.assign({ menu: false }, {"step": 1, "type": "study"});

class Logic {
  constructor(state, setState, props) {
    this.state = state;
    this.setState = setState;
    this.props = props || {};
  }

  
  extra(s) {
    const T = [
      ['leisure', 'Leisure trip', 'Holidays, honeymoons, family and group tours.', 'M3 20h18M5 20c0-5 3-9 7-9s7 4 7 9M12 11V4M9 6l3-2 3 2'],
      ['study', 'Study abroad', 'Admission, exams, student visa and arrival.', 'M2 9l10-5 10 5-10 5-10-5zM6 11v5c3 2 9 2 12 0v-5'],
      ['work', 'Work abroad', 'Jobs, placements, fellowships and PR routes.', 'M4 8h16v11H4zM9 8V5h6v3M4 13h16'],
      ['visa', 'Visa only', 'You have the plan; we do the paperwork.', 'M6 3h9l4 4v14H6zM14 3v5h5M9 13h7M9 17h5'],
      ['medical', 'Medical tourism', 'Treatment abroad, with visa, travel and stay arranged.', 'M12 20s-7-4.4-9-9.2C1.6 7.3 4 4 7.4 4c2 0 3.6 1 4.6 2.6C13 5 14.6 4 16.6 4 20 4 22.4 7.3 21 10.8 19 15.6 12 20 12 20zM12 9v6M9 12h6'],
      ['migration', 'Migration', 'Relocating for good: PR routes and settling in.', 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18']
    ];
    const types = T.map(([id, label, body, icon]) => ({ label, body, icon, on: s.type === id ? 'true' : 'false', bg: s.type === id ? '#FFE1E7' : '#FFFFFF', border: s.type === id ? '#FD6886' : '#E3E8F2', state: s.type === id ? 'SELECTED' : 'SELECT', pick: () => this.setState({ type: id }) }));
    const titles = ['What kind of trip?', 'Tell us the basics', 'Where do we reach you?', 'You’re checked in.'];
    const pct = [6, 36, 66, 96][s.step - 1];
    const typeLabel = { leisure: 'LEISURE TRIP', study: 'STUDY ABROAD', work: 'WORK ABROAD', visa: 'VISA ONLY', medical: 'MEDICAL TOURISM', migration: 'MIGRATION' }[s.type];
    return {
      stepNum: s.step, stepTitle: titles[s.step - 1], s1: s.step === 1, s2: s.step === 2, s3: s.step === 3, s4: s.step === 4,
      types, typeLabel, progress: pct + '%', planeLeft: pct + '%',
      showNav: s.step < 4, backVis: s.step > 1 ? 'visible' : 'hidden', nextLabel: s.step === 3 ? 'Send my request' : 'Continue',
      back: () => this.setState({ step: Math.max(1, s.step - 1) }),
      next: () => this.setState({ step: Math.min(4, s.step + 1) }),
      nextSteps: [
        { t: 'MSG', title: 'A consultant reaches out', body: 'On the WhatsApp number you gave, to book your clarity call. Our team is available 24/7.' },
        { t: 'QTE', title: 'Honest options and full cost', body: 'Routes, documents needed and a clear quote. No hidden fees later.' },
        { t: 'GO', title: 'You decide, we start', body: 'Only when you are happy do we begin your file or bookings.' }
      ]
    };
  }
  renderVals() {
    const s = this.state;
    const base = { menuOpen: s.menu, toggleMenu: () => this.setState({ menu: !s.menu }) };
    return Object.assign(base, {}, this.extra(s));
  }
}

export default function BookingScreen(props) {
  const [state, setRaw] = useState(INITIAL_STATE);
  const setState = (patch) => setRaw((s) => ({ ...s, ...(typeof patch === 'function' ? patch(s) : patch) }));
  const v = new Logic(state, setState, props).renderVals();
  return (
    <>
      <div className="mapbg" style={{ "width": "100%", "overflowX": "hidden" }}>
        <section className="sky" style={{ "position": "relative", "overflow": "hidden", "paddingBottom": "80px" }}>
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
          <div className="wrap" style={{ "position": "relative", "zIndex": "4", "paddingTop": "40px", "display": "flex", "flexDirection": "column", "gap": "14px" }}>
            <span className="mono" style={{ "fontSize": "12px", "color": "#E6EDFF" }}>
              {"BOOK A CLARITY CALL · STEP "}{v.stepNum}{" OF 4"}
            </span>
            <h1 className="disp" style={{ "margin": "0", "color": "#fff", "fontSize": "63px", "lineHeight": "1.02", "fontWeight": "700" }}>
              {v.stepTitle}
            </h1>
          </div>
          <div className="wrap" style={{ "position": "relative", "zIndex": "4", "marginTop": "36px" }}>
            <div style={{ "position": "relative", "height": "70px" }}>
              <div aria-hidden="true" style={{ "position": "absolute", "left": "0", "right": "0", "top": "34px", "borderTop": "2px dashed rgba(255,255,255,.6)" }}></div>
              <div aria-hidden="true" style={{ "position": "absolute", "left": "0", "top": "33px", "height": "4px", "width": v.progress, "background": "#86D5FF", "borderRadius": "4px", "transition": "width .7s" }}></div>
              <div className="glide" aria-hidden="true" style={{ "position": "absolute", "top": "0", "left": v.planeLeft, "transform": "translateX(-50%)" }}>
                <svg width="150" height="50" viewBox="0 0 240 80" style={{ "display": "block", "overflow": "visible" }}>
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
              <div className="mono" style={{ "position": "absolute", "left": "0", "right": "0", "top": "52px", "display": "flex", "justifyContent": "space-between", "fontSize": "11px", "color": "#fff" }}>
                <span>
                  TRIP
                </span>
                <span>
                  DETAILS
                </span>
                <span>
                  CONTACT
                </span>
                <span>
                  CONFIRMED
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="wrap" style={{ "paddingTop": "48px" }}>
          {v.s1 ? (
            <>
              <div className="g3">
                {(v.types || []).map((t, __i8) => (
                  <Fragment key={__i8}>
                    {" "}
                    <button type="button" onClick={t.pick} aria-pressed={t.on} className="lift" style={{ "textAlign": "left", "cursor": "pointer", "background": t.bg, "color": "#0F1518", "border": `2px solid ${t.border}`, "borderRadius": "22px", "padding": "24px", "display": "flex", "flexDirection": "column", "gap": "14px", "minHeight": "240px", "font": "inherit" }}>
                      <span style={{ "width": "48px", "height": "48px", "borderRadius": "14px", "background": "#fff", "display": "grid", "placeItems": "center" }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0F1518" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d={t.icon}></path>
                        </svg>
                      </span>
                      <span className="disp" style={{ "fontSize": "26px", "lineHeight": "1.02" }}>
                        {t.label}
                      </span>
                      <span style={{ "fontSize": "14px", "color": "#4D555E", "lineHeight": "1.5" }}>
                        {t.body}
                      </span>
                      <span className="mono" style={{ "marginTop": "auto", "fontSize": "11px", "color": "#255BD9" }}>
                        {t.state}
                      </span>
                    </button>
                    {" "}
                  </Fragment>
                ))}
              </div>
            </>
          ) : null}
          {" "}
          {v.s2 ? (
            <>
              <div style={{ "background": "#FFFFFF", "border": "1px solid #E3E8F2", "borderRadius": "24px", "padding": "32px", "display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(240px, 1fr))", "gap": "22px" }}>
                <div>
                  <label className="lbl" htmlFor="b-to">
                    Where to?
                  </label>
                  <select id="b-to" className="input">
                    <option>
                      United Kingdom
                    </option>
                    <option>
                      Canada
                    </option>
                    <option>
                      Switzerland
                    </option>
                    <option>
                      France
                    </option>
                    <option>
                      Thailand
                    </option>
                    <option>
                      Singapore
                    </option>
                    <option>
                      Italy
                    </option>
                    <option>
                      Malta
                    </option>
                    <option>
                      Ireland
                    </option>
                    <option>
                      Not sure yet
                    </option>
                  </select>
                </div>
                <div>
                  <label className="lbl" htmlFor="b-from">
                    Leaving from
                  </label>
                  <select id="b-from" className="input">
                    <option>
                      Lagos (LOS)
                    </option>
                    <option>
                      Abuja (ABV)
                    </option>
                    <option>
                      Akure (AKR)
                    </option>
                  </select>
                </div>
                <div>
                  <label className="lbl" htmlFor="b-when">
                    Rough travel date
                  </label>
                  <input id="b-when" className="input" type="month" />
                </div>
                <div>
                  <label className="lbl" htmlFor="b-who">
                    Who is travelling?
                  </label>
                  <select id="b-who" className="input">
                    <option>
                      Just me
                    </option>
                    <option>
                      Couple
                    </option>
                    <option>
                      Family
                    </option>
                    <option>
                      Group (5+)
                    </option>
                  </select>
                </div>
                <div>
                  <label className="lbl" htmlFor="b-budget">
                    Budget range
                  </label>
                  <select id="b-budget" className="input">
                    <option>
                      Help me decide
                    </option>
                    <option>
                      Below ₦3m
                    </option>
                    <option>
                      ₦3m – ₦7m
                    </option>
                    <option>
                      ₦7m – ₦15m
                    </option>
                    <option>
                      Above ₦15m
                    </option>
                  </select>
                </div>
                <div>
                  <label className="lbl" htmlFor="b-passport">
                    Passport status
                  </label>
                  <select id="b-passport" className="input">
                    <option>
                      Valid passport
                    </option>
                    <option>
                      Expiring soon
                    </option>
                    <option>
                      No passport yet
                    </option>
                  </select>
                </div>
                <div style={{ "gridColumn": "1 / -1" }}>
                  <label className="lbl" htmlFor="b-notes">
                    Anything we should know?
                  </label>
                  <textarea id="b-notes" className="input" rows="4" placeholder="Previous refusals, preferred schools, honeymoon dates…" />
                </div>
              </div>
            </>
          ) : null}
          {" "}
          {v.s3 ? (
            <>
              <div style={{ "background": "#FFFFFF", "border": "1px solid #E3E8F2", "borderRadius": "24px", "padding": "32px", "display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(240px, 1fr))", "gap": "22px" }}>
                <div>
                  <label className="lbl" htmlFor="c-name">
                    Full name
                  </label>
                  <input id="c-name" className="input" type="text" autoComplete="name" placeholder="As on your passport" />
                </div>
                <div>
                  <label className="lbl" htmlFor="c-wa">
                    WhatsApp number
                  </label>
                  <input id="c-wa" className="input" type="tel" autoComplete="tel" placeholder="+234" />
                </div>
                <div>
                  <label className="lbl" htmlFor="c-email">
                    Email
                  </label>
                  <input id="c-email" className="input" type="email" autoComplete="email" placeholder="you@email.com" />
                </div>
                <div>
                  <label className="lbl" htmlFor="c-office">
                    Nearest office
                  </label>
                  <select id="c-office" className="input">
                    <option>
                      Lagos (Ikeja)
                    </option>
                    <option>
                      Abuja (Garki)
                    </option>
                    <option>
                      Akure (Ijapo)
                    </option>
                    <option>
                      Ondo
                    </option>
                    <option>
                      I prefer online
                    </option>
                  </select>
                </div>
                <label style={{ "gridColumn": "1 / -1", "display": "flex", "gap": "12px", "alignItems": "flex-start", "fontSize": "14px", "color": "#4D555E", "lineHeight": "1.5" }}>
                  <input type="checkbox" style={{ "width": "20px", "height": "20px", "marginTop": "1px", "accentColor": "#255BD9" }} />
                  Contact me on WhatsApp about this trip. Flymatas never shares my details.
                </label>
              </div>
            </>
          ) : null}
          {" "}
          {v.s4 ? (
            <>
              <div className="g2" style={{ "alignItems": "start" }}>
                <div className="shadow">
                  <div className="pass" style={{ "background": "#FFFFFF", "borderRadius": "26px", "display": "flex", "flexWrap": "wrap" }}>
                    <div style={{ "flex": "999 1 300px", "padding": "28px", "display": "flex", "flexDirection": "column", "gap": "18px" }}>
                      <span className="mono" style={{ "fontSize": "11px", "color": "#4D555E" }}>
                        {"REQUEST RECEIVED · "}{v.typeLabel}
                      </span>
                      <div style={{ "display": "flex", "alignItems": "flex-end", "gap": "18px" }}>
                        <div>
                          <div className="mono" style={{ "fontSize": "10px", "color": "#4D555E" }}>
                            FROM
                          </div>
                          <div className="disp" style={{ "fontSize": "53px", "lineHeight": "1.02", "fontWeight": "700" }}>
                            LOS
                          </div>
                        </div>
                        <span style={{ "color": "#255BD9", "paddingBottom": "10px" }}>
                          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M5 12h14M13 6l6 6-6 6"></path>
                          </svg>
                        </span>
                        <div>
                          <div className="mono" style={{ "fontSize": "10px", "color": "#4D555E" }}>
                            TO
                          </div>
                          <div className="disp" style={{ "fontSize": "53px", "lineHeight": "1.02", "fontWeight": "700", "color": "#255BD9" }}>
                            LHR
                          </div>
                        </div>
                      </div>
                      <div className="mono" style={{ "display": "grid", "gridTemplateColumns": "repeat(3, minmax(0,1fr))", "gap": "10px", "fontSize": "10px", "color": "#4D555E" }}>
                        <div>
                          PASSENGER
                          <div style={{ "fontSize": "13px", "color": "#0F1518", "fontWeight": "600" }}>
                            [NAME]
                          </div>
                        </div>
                        <div>
                          REFERENCE
                          <div style={{ "fontSize": "13px", "color": "#0F1518", "fontWeight": "600" }}>
                            FM-2611-0042
                          </div>
                        </div>
                        <div>
                          STATUS
                          <div style={{ "fontSize": "13px", "color": "#15803D", "fontWeight": "600" }}>
                            CHECKED IN
                          </div>
                        </div>
                      </div>
                      <div className="barcode" aria-hidden="true"></div>
                    </div>
                    <div className="stub-col perf-v" style={{ "flex": "1 1 220px", "minWidth": "220px", "background": "#EEF3FD", "padding": "28px", "display": "flex", "flexDirection": "column", "justifyContent": "center", "alignItems": "center", "gap": "10px", "textAlign": "center" }}>
                      <span className="mono stamp" style={{ "fontSize": "14px", "fontWeight": "600", "color": "#255BD9", "border": "2px solid #255BD9", "borderRadius": "10px", "padding": "8px 12px" }}>
                        CLEARED FOR TAKE-OFF
                      </span>
                    </div>
                  </div>
                </div>
                <div style={{ "display": "flex", "flexDirection": "column", "gap": "16px" }}>
                  <h2 className="disp" style={{ "margin": "0", "fontSize": "45px", "lineHeight": "1.02" }}>
                    {"What happens "}
                    <em className="acc" style={{ "color": "#255BD9" }}>
                      next
                    </em>
                  </h2>
                  {(v.nextSteps || []).map((n, __i9) => (
                    <Fragment key={__i9}>
                      <div style={{ "display": "flex", "gap": "14px", "alignItems": "flex-start" }}>
                        <span className="mono" style={{ "width": "40px", "height": "40px", "borderRadius": "50%", "background": "#0F1518", "color": "#86D5FF", "display": "grid", "placeItems": "center", "fontSize": "11px", "flex": "0 0 auto" }}>
                          {n.t}
                        </span>
                        <div>
                          <div style={{ "fontWeight": "600" }}>
                            {n.title}
                          </div>
                          <div style={{ "color": "#4D555E", "fontSize": "14px", "lineHeight": "1.55" }}>
                            {n.body}
                          </div>
                        </div>
                      </div>
                    </Fragment>
                  ))}
                  <div style={{ "display": "flex", "gap": "12px", "flexWrap": "wrap", "marginTop": "8px" }}>
                    <a className="btn" href="https://wa.me/2347033221729" style={{ "background": "#FD6886", "color": "#0F1518" }}>
                      Message us on WhatsApp
                    </a>
                    <Link className="btn" href="/account/trips" style={{ "background": "#0F1518", "color": "#fff" }}>
                      Track in My Trips
                    </Link>
                  </div>
                </div>
              </div>
            </>
          ) : null}
          {" "}
          {v.showNav ? (
            <>
              <div style={{ "display": "flex", "justifyContent": "space-between", "alignItems": "center", "gap": "12px", "marginTop": "28px", "flexWrap": "wrap" }}>
                <button type="button" onClick={v.back} className="btn" style={{ "background": "transparent", "color": "#0F1518", "border": "1.5px solid #0F1518", "visibility": v.backVis }}>
                  Back
                </button>
                <button type="button" onClick={v.next} className="btn" style={{ "background": "#0F1518", "color": "#fff" }}>
                  {v.nextLabel}{" "}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6"></path>
                  </svg>
                </button>
              </div>
            </>
          ) : null}
        </section>
        <div style={{ "height": "40px" }}></div>
      </div>
    </>
  );
}
