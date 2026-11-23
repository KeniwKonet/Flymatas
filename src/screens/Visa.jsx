"use client";

import { Fragment, useState } from 'react';
import Link from 'next/link';

// Screen converted from the Visa design. State and derived values mirror the design's logic.
const INITIAL_STATE = Object.assign({ menu: false }, {"vt": "tourist", "faq": 0});

class Logic {
  constructor(state, setState, props) {
    this.state = state;
    this.setState = setState;
    this.props = props || {};
  }

  
  extra(s) {
    const types = [["tourist", "Tourist & Schengen"], ["student", "Student"], ["work", "Work"], ["pr", "Permanent residency"]].map(([id, label]) => ({ label, on: s.vt === id ? 'true' : 'false', bg: s.vt === id ? '#0F1518' : '#FFFFFF', fg: s.vt === id ? '#FFFFFF' : '#0F1518', pick: () => this.setState({ vt: id }) }));
    const V = {
      tourist: { kicker: 'TOURIST · VISIT · SCHENGEN', title: 'Schengen visit visa, done properly', body: 'One visa opens most of Europe. You can trust us with a close appointment date, a detailed application, proof of funds guidance and full documentation support.', countries: ['Schengen area', 'United Kingdom', 'Canada', 'United States'], docs: ['Valid international passport', 'Bank statements and proof of funds', 'Employment or business letter', 'Flight and hotel reservations', 'Travel insurance (Schengen)'] },
      student: { kicker: 'STUDENT', title: 'Study visas for every level', body: 'From foundation and trade school to master’s degrees. We line up your admission documents, proof of funds and English test so the visa file tells one clear story.', countries: ['United Kingdom', 'Canada', 'Ireland', 'Malta'], docs: ['Admission or offer letter', 'Proof of tuition payment or funds', 'Academic transcripts and certificates', 'English test result, if required', 'Sponsor documents'] },
      work: { kicker: 'WORK', title: 'Work permits and skilled routes', body: 'We check that your job offer and employer qualify, then prepare a work visa file that matches the role exactly.', countries: ['United Kingdom', 'Canada', 'Ireland', 'Singapore'], docs: ['Job offer or sponsorship document', 'CV and reference letters', 'Professional certificates', 'Police clearance, if required', 'Medical tests, if required'] },
      pr: { kicker: 'PERMANENT RESIDENCY', title: 'Canada PR is not as hard as it looks', body: 'Express Entry, the Provincial Nominee Program and more. We help you navigate the process step by step. Message us for the details and requirements, free.', countries: ['Express Entry', 'Provincial Nominee Program', 'Ontario PR pathway'], docs: ['Education credential assessment', 'Language test results', 'Proof of work experience', 'Proof of settlement funds', 'Police clearance'] }
    };
    const faqs = (this.props.__faqs || [["Can you guarantee my visa?", "No, and you should walk away from anyone who says they can. Embassies decide. We make sure your application is complete, consistent and honest, which is what gives you the best chance."], ["How early should I start?", "For most visitor visas, start six to eight weeks before you want to travel. Study and work visas need more time because of admission and sponsorship documents."], ["Will you go with me to biometrics?", "We book the appointment, prepare your folder and brief you on what to expect. You attend in person, as every embassy requires."], ["What does it cost?", "Our service fee depends on the visa type and how much help you need. Embassy fees are separate and paid directly. Your consultant gives you the full figure up front."]]).map((f, i) => ({ q: f[0], a: f[1], open: s.faq === i, exp: s.faq === i ? 'true' : 'false', sign: s.faq === i ? '−' : '+', toggle: () => this.setState({ faq: s.faq === i ? -1 : i }) }));
    return {
      types, visa: V[s.vt], faqs, isTourist: s.vt === 'tourist', isStudent: s.vt === 'student', isWork: s.vt === 'work', isPr: s.vt === 'pr',
      services: [
        { title: 'Close appointment date', tint: '#FFE1E7', icon: 'M4 6h16v14H4zM4 10h16M9 3v4M15 3v4', body: 'We help you secure the earliest visa appointment we can find.' },
        { title: 'Detailed application', tint: '#DCE6FA', icon: 'M6 3h9l4 4v14H6zM14 3v5h5M9 13h7M9 17h5', body: 'Every form filled carefully and consistently, so your story is clear.' },
        { title: 'Proof of funds', tint: '#DDF3FF', icon: 'M4 7h16v10H4zM12 12a2 2 0 1 0 0-.01M4 10h2M18 14h2', body: 'Guidance on bank statements and funds, so your finances make sense to the embassy.' },
        { title: 'Documentation & guidance', tint: '#E8ECF5', icon: 'M4 5h16v11H9l-5 4V5z', body: 'Every document checked, and support from your first chat until your decision.' }
      ],
      steps: [
        { code: 'V1', title: 'Free assessment', body: 'Your purpose, history and documents.' },
        { code: 'V2', title: 'Checklist', body: 'Exactly what you need, nothing extra.' },
        { code: 'V3', title: 'File build', body: 'Forms filled and documents checked.' },
        { code: 'V4', title: 'Appointment', body: 'Biometrics booked and briefing done.' },
        { code: 'V5', title: 'Decision', body: 'We track it and plan your next step.' }
      ]
    };
  }
  renderVals() {
    const s = this.state;
    const base = { menuOpen: s.menu, toggleMenu: () => this.setState({ menu: !s.menu }) };
    return Object.assign(base, {}, this.extra(s));
  }
}

export default function VisaScreen(props) {
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
              <Link className="navlink" href="/visa" aria-current="page" style={{ "borderBottom": "2px solid #FD6886" }}>
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
                  VISA ASSISTANCE
                </span>
              </nav>
              <h1 className="disp hero-h1" style={{ "margin": "0", "color": "#fff", "fontSize": "72px", "lineHeight": "1.02", "fontWeight": "700" }}>
                {"We don’t promise visas. We "}
                <em className="acc" style={{ "color": "#FDFDFA" }}>
                  deliver.
                </em>
              </h1>
              <p style={{ "margin": "0", "color": "#F1F5FF", "fontSize": "19px", "lineHeight": "1.55", "maxWidth": "620px" }}>
                No honest agent can guarantee a visa. What we guarantee is a complete, consistent, carefully checked application, which is what gives you the best chance.
              </p>
              <div style={{ "display": "flex", "flexWrap": "wrap", "gap": "12px" }}>
                <Link className="btn" href="/book" style={{ "background": "#0F1518", "color": "#fff" }}>
                  Start my visa file
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
                PICK YOUR VISA
              </span>
              <h2 className="disp" style={{ "margin": "10px 0 0", "fontSize": "53px", "lineHeight": "1.02", "fontWeight": "700" }}>
                {"Which stamp do you "}
                <em className="acc" style={{ "color": "#255BD9" }}>
                  need?
                </em>
              </h2>
            </div>
          </div>
          <div role="group" aria-label="Visa type" style={{ "display": "flex", "flexWrap": "wrap", "gap": "8px" }}>
            {(v.types || []).map((c, __i6) => (
              <Fragment key={__i6}>
                <button type="button" aria-pressed={c.on} onClick={c.pick} style={{ "minHeight": "44px", "padding": "0 18px", "borderRadius": "999px", "border": "1.5px solid #0F1518", "cursor": "pointer", "font": "600 14px 'Outfit', sans-serif", "background": c.bg, "color": c.fg }}>
                  {c.label}
                </button>
              </Fragment>
            ))}
          </div>
          <div style={{ "marginTop": "24px" }} className="g2">
            <div style={{ "background": "#FFFFFF", "border": "1px solid #E3E8F2", "borderRadius": "24px", "padding": "32px", "display": "flex", "flexDirection": "column", "gap": "14px" }}>
              {v.isTourist ? (
                <>
                  <img src="/assets/schengen.jpg" alt="Flymatas flyer: Schengen visit visa" loading="lazy" style={{ "display": "block", "width": "100%", "height": "auto", "borderRadius": "18px", "aspectRatio": "16 / 9", "objectFit": "cover", "objectPosition": "center 55%" }} />
                </>
              ) : null}
              {v.isStudent ? (
                <>
                  <img src="/assets/canada-study.jpg" alt="Flymatas flyer: Canada study route" loading="lazy" style={{ "display": "block", "width": "100%", "height": "auto", "borderRadius": "18px", "aspectRatio": "16 / 9", "objectFit": "cover", "objectPosition": "center 60%" }} />
                </>
              ) : null}
              {v.isWork ? (
                <>
                  <img src="/assets/japa-dreams.jpg" alt="Flymatas flyer: your japa dreams are valid" loading="lazy" style={{ "display": "block", "width": "100%", "height": "auto", "borderRadius": "18px", "aspectRatio": "16 / 9", "objectFit": "cover", "objectPosition": "center 60%" }} />
                </>
              ) : null}
              {v.isPr ? (
                <>
                  <img src="/assets/canada-pr.jpg" alt="Flymatas flyer: Canada permanent residency through Express Entry" loading="lazy" style={{ "display": "block", "width": "100%", "height": "auto", "borderRadius": "18px", "aspectRatio": "16 / 9", "objectFit": "cover", "objectPosition": "center 30%" }} />
                </>
              ) : null}
              <span className="mono" style={{ "fontSize": "12px", "color": "#255BD9" }}>
                {v.visa.kicker}
              </span>
              <h3 className="disp" style={{ "margin": "0", "fontSize": "37px", "lineHeight": "1.02" }}>
                {v.visa.title}
              </h3>
              <p style={{ "margin": "0", "color": "#4D555E", "fontSize": "16px", "lineHeight": "1.65" }}>
                {v.visa.body}
              </p>
              <div style={{ "display": "flex", "flexWrap": "wrap", "gap": "8px" }}>
                {(v.visa.countries || []).map((c, __i8) => (
                  <Fragment key={__i8}>
                    <span className="chip" style={{ "background": "#EEF3FD", "color": "#0F1518" }}>
                      {c}
                    </span>
                  </Fragment>
                ))}
              </div>
            </div>
            <div style={{ "background": "#0F1518", "color": "#fff", "borderRadius": "24px", "padding": "32px" }}>
              <span className="mono" style={{ "fontSize": "12px", "color": "#86D5FF" }}>
                TYPICAL DOCUMENTS
              </span>
              <ul style={{ "listStyle": "none", "margin": "16px 0 0", "padding": "0", "display": "flex", "flexDirection": "column" }}>
                {(v.visa.docs || []).map((d, __i8) => (
                  <Fragment key={__i8}>
                    <li style={{ "display": "flex", "gap": "12px", "padding": "14px 0", "borderBottom": "1px solid #2A343B", "fontSize": "15px" }}>
                      <span style={{ "color": "#86D5FF" }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M5 12l5 5 9-10"></path>
                        </svg>
                      </span>
                      {d}
                    </li>
                  </Fragment>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <section className="wrap" style={{ "paddingTop": "96px" }}>
          <div style={{ "display": "flex", "justifyContent": "space-between", "alignItems": "flex-end", "gap": "24px", "flexWrap": "wrap", "marginBottom": "36px" }}>
            <div style={{ "maxWidth": "720px" }}>
              <span className="mono" style={{ "fontSize": "13px", "color": "#255BD9" }}>
                WHAT WE DO
              </span>
              <h2 className="disp" style={{ "margin": "10px 0 0", "fontSize": "53px", "lineHeight": "1.02", "fontWeight": "700" }}>
                {"Help at every "}
                <em className="acc" style={{ "color": "#255BD9" }}>
                  level
                </em>
              </h2>
            </div>
            <p style={{ "margin": "0", "maxWidth": "400px", "color": "#4D555E", "fontSize": "16px", "lineHeight": "1.6" }}>
              Take the full service or only the part you need.
            </p>
          </div>
          <div className="g4">
            {(v.services || []).map((v, __i6) => (
              <Fragment key={__i6}>
                <div className="lift" style={{ "background": "#FFFFFF", "border": "1px solid #E3E8F2", "borderRadius": "22px", "padding": "24px", "display": "flex", "flexDirection": "column", "gap": "12px", "minHeight": "240px" }}>
                  <span style={{ "width": "44px", "height": "44px", "borderRadius": "12px", "background": v.tint, "display": "grid", "placeItems": "center" }} aria-hidden="true">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0F1518" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d={v.icon}></path>
                    </svg>
                  </span>
                  <h3 className="disp" style={{ "margin": "0", "fontSize": "24px", "lineHeight": "1.02" }}>
                    {v.title}
                  </h3>
                  <p style={{ "margin": "0", "color": "#4D555E", "fontSize": "14px", "lineHeight": "1.6" }}>
                    {v.body}
                  </p>
                </div>
              </Fragment>
            ))}
          </div>
        </section>
        <section className="wrap" style={{ "paddingTop": "96px" }}>
          <div style={{ "display": "flex", "justifyContent": "space-between", "alignItems": "flex-end", "gap": "24px", "flexWrap": "wrap", "marginBottom": "36px" }}>
            <div style={{ "maxWidth": "720px" }}>
              <span className="mono" style={{ "fontSize": "13px", "color": "#255BD9" }}>
                THE PROCESS
              </span>
              <h2 className="disp" style={{ "margin": "10px 0 0", "fontSize": "53px", "lineHeight": "1.02", "fontWeight": "700" }}>
                {"From first chat to "}
                <em className="acc" style={{ "color": "#255BD9" }}>
                  stamp
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
          <div style={{ "display": "flex", "justifyContent": "space-between", "alignItems": "flex-end", "gap": "24px", "flexWrap": "wrap", "marginBottom": "36px" }}>
            <div style={{ "maxWidth": "720px" }}>
              <span className="mono" style={{ "fontSize": "13px", "color": "#255BD9" }}>
                QUESTIONS
              </span>
              <h2 className="disp" style={{ "margin": "10px 0 0", "fontSize": "53px", "lineHeight": "1.02", "fontWeight": "700" }}>
                {"Honest "}
                <em className="acc" style={{ "color": "#255BD9" }}>
                  answers
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
                {"Refused before? "}
                <em className="acc" style={{ "color": "#FDFDFA" }}>
                  Let’s read the letter.
                </em>
              </h2>
              <p style={{ "margin": "0", "color": "#E6EDFF", "fontSize": "17px", "lineHeight": "1.6" }}>
                Send us your refusal letter. We tell you what went wrong and whether a new application makes sense.
              </p>
            </div>
            <div style={{ "display": "flex", "flexWrap": "wrap", "gap": "12px" }}>
              <a className="btn" href="https://wa.me/2347033221729" style={{ "background": "#FF6C", "color": "#0F1518" }}>
                Send my refusal letter
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
