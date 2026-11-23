"use client";

import { Fragment, useState } from 'react';
import Link from 'next/link';

// Screen converted from the MyTrips design. State and derived values mirror the design's logic.
const INITIAL_STATE = Object.assign({ menu: false }, {});

class Logic {
  constructor(state, setState, props) {
    this.state = state;
    this.setState = setState;
    this.props = props || {};
  }

  
  extra(s) {
    const S = [['Consultation', 'done'], ['Documents', 'done'], ['Submitted', 'done'], ['Biometrics', 'current'], ['Decision', 'todo'], ['Fly', 'todo']];
    const stages = S.map(([t, st]) => ({ t, state: st === 'done' ? 'DONE' : st === 'current' ? 'IN PROGRESS' : 'UPCOMING', bar: st === 'done' ? '#255BD9' : st === 'current' ? '#FD6886' : '#E3E8F2', tone: st === 'done' ? '#255BD9' : st === 'current' ? '#255BD9' : '#4D555E' }));
    const D = [['International passport', 'ok'], ['Offer letter', 'ok'], ['Bank statements (6 months)', 'ok'], ['IELTS result', 'review'], ['Sponsor letter', 'missing']];
    const docs = D.map(([t, st]) => ({ t, needs: st === 'missing', state: st === 'ok' ? 'APPROVED' : st === 'review' ? 'IN REVIEW' : 'NEEDED', tone: st === 'ok' ? '#15803D' : st === 'review' ? '#255BD9' : '#B91C1C', bg: st === 'ok' ? '#DDF3FF' : st === 'review' ? '#E8ECF5' : '#FFE1E7' }));
    return { stages, docs, docCount: '3 OF 5 APPROVED' };
  }
  renderVals() {
    const s = this.state;
    const base = { menuOpen: s.menu, toggleMenu: () => this.setState({ menu: !s.menu }) };
    return Object.assign(base, {}, this.extra(s));
  }
}

export default function MyTripsScreen(props) {
  const [state, setRaw] = useState(INITIAL_STATE);
  const setState = (patch) => setRaw((s) => ({ ...s, ...(typeof patch === 'function' ? patch(s) : patch) }));
  const v = new Logic(state, setState, props).renderVals();
  return (
    <>
      <div className="mapbg" style={{ "width": "100%", "overflowX": "hidden" }}>
        <section style={{ "background": "#0F1518", "color": "#fff", "position": "relative" }}>
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
          <div className="wrap" style={{ "paddingTop": "24px", "paddingBottom": "40px", "display": "flex", "flexWrap": "wrap", "justifyContent": "space-between", "alignItems": "flex-end", "gap": "24px" }}>
            <div>
              <span className="mono" style={{ "fontSize": "12px", "color": "#86D5FF" }}>
                MY TRIPS · EXAMPLE ACCOUNT
              </span>
              <h1 className="disp" style={{ "margin": "10px 0 0", "fontSize": "69px", "lineHeight": "1.02" }}>
                {"Welcome back, "}
                <em className="acc" style={{ "color": "#FD6886" }}>
                  [Name].
                </em>
              </h1>
            </div>
            <Link className="btn" href="/book" style={{ "background": "#FD6886", "color": "#0F1518" }}>
              Plan a new trip
            </Link>
          </div>
        </section>
        <section className="wrap" style={{ "paddingTop": "40px" }}>
          <div className="shadow">
            <div className="pass" style={{ "background": "#FFFFFF", "borderRadius": "26px", "display": "flex", "flexWrap": "wrap" }}>
              <div style={{ "flex": "999 1 560px", "padding": "30px", "display": "flex", "flexDirection": "column", "gap": "24px" }}>
                <div style={{ "display": "flex", "justifyContent": "space-between", "flexWrap": "wrap", "gap": "12px", "alignItems": "flex-end" }}>
                  <div style={{ "display": "flex", "alignItems": "flex-end", "gap": "18px" }}>
                    <div>
                      <div className="mono" style={{ "fontSize": "10px", "color": "#4D555E" }}>
                        FROM
                      </div>
                      <div className="disp" style={{ "fontSize": "53px", "lineHeight": "1.02" }}>
                        LOS
                      </div>
                    </div>
                    <span style={{ "color": "#255BD9", "paddingBottom": "8px" }}>
                      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 12h14M13 6l6 6-6 6"></path>
                      </svg>
                    </span>
                    <div>
                      <div className="mono" style={{ "fontSize": "10px", "color": "#4D555E" }}>
                        TO
                      </div>
                      <div className="disp" style={{ "fontSize": "53px", "lineHeight": "1.02", "color": "#255BD9" }}>
                        LHR
                      </div>
                    </div>
                  </div>
                  <div className="mono" style={{ "fontSize": "11px", "color": "#4D555E", "textAlign": "right" }}>
                    STUDY ABROAD · UK
                    <br />
                    REF FM-2611-0042
                  </div>
                </div>
                <ol aria-label="Application progress" style={{ "listStyle": "none", "margin": "0", "padding": "0", "display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(110px, 1fr))", "gap": "10px" }}>
                  {(v.stages || []).map((st, __i9) => (
                    <Fragment key={__i9}>
                      <li style={{ "display": "flex", "flexDirection": "column", "gap": "8px" }}>
                        <span style={{ "height": "8px", "borderRadius": "8px", "background": st.bar }}></span>
                        <span className="mono" style={{ "fontSize": "10px", "color": st.tone }}>
                          {st.state}
                        </span>
                        <span style={{ "fontWeight": "600", "fontSize": "15px" }}>
                          {st.t}
                        </span>
                      </li>
                    </Fragment>
                  ))}
                </ol>
              </div>
              <div className="stub-col perf-v" style={{ "flex": "1 1 260px", "minWidth": "260px", "background": "#EEF3FD", "padding": "30px", "display": "flex", "flexDirection": "column", "justifyContent": "center", "gap": "12px" }}>
                <span className="mono" style={{ "fontSize": "10px", "color": "#4D555E" }}>
                  NEXT STEP
                </span>
                <span className="disp" style={{ "fontSize": "28px", "lineHeight": "1.02" }}>
                  Biometrics appointment
                </span>
                <span style={{ "color": "#4D555E", "fontSize": "14px" }}>
                  [DATE] · Lagos visa centre
                </span>
                <a className="btn" href="https://wa.me/2347033221729" style={{ "background": "#0F1518", "color": "#fff" }}>
                  Message consultant
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="wrap" style={{ "paddingTop": "48px" }}>
          <div className="two">
            <div className="main" style={{ "background": "#FFFFFF", "border": "1px solid #E3E8F2", "borderRadius": "24px", "padding": "28px" }}>
              <div style={{ "display": "flex", "justifyContent": "space-between", "alignItems": "center", "marginBottom": "12px" }}>
                <h2 className="disp" style={{ "margin": "0", "fontSize": "37px" }}>
                  Documents
                </h2>
                <span className="mono" style={{ "fontSize": "11px", "color": "#4D555E" }}>
                  {v.docCount}
                </span>
              </div>
              {(v.docs || []).map((d, __i7) => (
                <Fragment key={__i7}>
                  <div style={{ "display": "flex", "alignItems": "center", "justifyContent": "space-between", "gap": "12px", "padding": "14px 0", "borderTop": "1px solid #E3E8F2" }}>
                    <span style={{ "display": "flex", "gap": "12px", "alignItems": "center" }}>
                      <span style={{ "width": "36px", "height": "36px", "borderRadius": "10px", "background": d.bg, "display": "grid", "placeItems": "center" }} aria-hidden="true">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0F1518" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M6 3h9l4 4v14H6zM14 3v5h5M9 13h7M9 17h5"></path>
                        </svg>
                      </span>
                      <span style={{ "fontWeight": "600" }}>
                        {d.t}
                      </span>
                    </span>
                    <span style={{ "display": "flex", "gap": "10px", "alignItems": "center" }}>
                      <span className="mono" style={{ "fontSize": "10px", "color": d.tone }}>
                        {d.state}
                      </span>
                      {d.needs ? (
                        <>
                          <button type="button" className="btn" style={{ "minHeight": "40px", "padding": "0 14px", "fontSize": "13px", "background": "#0F1518", "color": "#fff" }}>
                            Upload
                          </button>
                        </>
                      ) : null}
                    </span>
                  </div>
                </Fragment>
              ))}
            </div>
            <div className="side" style={{ "display": "flex", "flexDirection": "column", "gap": "16px" }}>
              <div style={{ "background": "#255BD9", "color": "#fff", "borderRadius": "24px", "padding": "24px", "display": "flex", "gap": "16px", "alignItems": "center" }}>
                <span className="disp" aria-hidden="true" style={{ "width": "64px", "height": "64px", "borderRadius": "50%", "background": "#FD6886", "color": "#0F1518", "display": "grid", "placeItems": "center", "fontSize": "22px", "flex": "0 0 auto" }}>
                  [C]
                </span>
                <span>
                  <span className="mono" style={{ "display": "block", "fontSize": "10px", "color": "#DCE6FA" }}>
                    YOUR CONSULTANT
                  </span>
                  <span className="disp" style={{ "fontSize": "22px" }}>
                    [Consultant name]
                  </span>
                  <span style={{ "display": "block", "fontSize": "13px", "color": "#E6EDFF" }}>
                    Lagos office · Ikeja
                  </span>
                </span>
              </div>
              <div style={{ "background": "#FFFFFF", "border": "1px solid #E3E8F2", "borderRadius": "24px", "padding": "24px", "display": "flex", "flexDirection": "column", "gap": "10px" }}>
                <span className="mono" style={{ "fontSize": "11px", "color": "#4D555E" }}>
                  SAVED GUIDES
                </span>
                <Link href="/guides/article" style={{ "fontWeight": "600" }}>
                  List of all international exams
                </Link>
                <Link href="/guides/article" style={{ "fontWeight": "600" }}>
                  Schengen visa application: the basics
                </Link>
              </div>
              <div style={{ "background": "#FFFFFF", "border": "1px solid #E3E8F2", "borderRadius": "24px", "padding": "24px", "display": "flex", "flexDirection": "column", "gap": "10px" }}>
                <span className="mono" style={{ "fontSize": "11px", "color": "#4D555E" }}>
                  PAST TRIPS
                </span>
                <span style={{ "display": "flex", "justifyContent": "space-between" }}>
                  <span style={{ "fontWeight": "600" }}>
                    LOS → DXB holiday
                  </span>
                  <span className="mono" style={{ "fontSize": "11px", "color": "#15803D" }}>
                    COMPLETED
                  </span>
                </span>
              </div>
            </div>
          </div>
        </section>
        <div style={{ "height": "60px" }}></div>
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
