"use client";

import { Fragment, useState } from 'react';
import Link from 'next/link';

// Screen converted from the About design. State and derived values mirror the design's logic.
const INITIAL_STATE = Object.assign({ menu: false }, {});

class Logic {
  constructor(state, setState, props) {
    this.state = state;
    this.setState = setState;
    this.props = props || {};
  }

  
  extra(s) {
    return {
      values: [
        { t: 'Safety first, always', b: 'From the first chat to the flight home, your safety and your money are protected.' },
        { t: 'Low price & friendly', b: 'Customised itineraries, family trips and group tours at the best value we can find.' },
        { t: 'Trusted travel guide', b: 'We work locally and internationally with professionalism and style.' }
      ],
      voices: [
        { place: 'CANADA', name: 'Ay, Canada', quote: 'We don’t promise visa here, but we will deliver.', body: 'I doubted it until a friend introduced me. The MD told me exactly that, and they did deliver. I recommend Flymatas to anyone.' },
        { place: 'DUBLIN', name: 'Samson, Dublin', quote: 'They won’t disappoint you.', body: 'The best travel agent I know in Nigeria. They got me to Dublin.' }
      ],
      gallery: [
        { t: 'Study abroad', bg: 'linear-gradient(160deg,#1C47AE,#255BD9)' },
        { t: 'Your dream', bg: 'linear-gradient(160deg,#0F1518,#2B353C)' },
        { t: 'Call centre', bg: 'linear-gradient(160deg,#255BD9,#4F86EE)' },
        { t: 'Q&A broadcast', bg: 'linear-gradient(160deg,#1C47AE,#255BD9)' },
        { t: 'Tours & conferences', bg: 'linear-gradient(160deg,#0F1518,#2B353C)' }
      ]
    };
  }
  renderVals() {
    const s = this.state;
    const base = { menuOpen: s.menu, toggleMenu: () => this.setState({ menu: !s.menu }) };
    return Object.assign(base, {}, this.extra(s));
  }
}

export default function AboutScreen(props) {
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
              <Link className="navlink" href="/about" aria-current="page" style={{ "borderBottom": "2px solid #FD6886" }}>
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
                  ABOUT FLYMATAS
                </span>
              </nav>
              <h1 className="disp hero-h1" style={{ "margin": "0", "color": "#fff", "fontSize": "72px", "lineHeight": "1.02", "fontWeight": "700" }}>
                {"Born in Nigeria. Built for "}
                <em className="acc" style={{ "color": "#FDFDFA" }}>
                  the world.
                </em>
              </h1>
              <p style={{ "margin": "0", "color": "#F1F5FF", "fontSize": "19px", "lineHeight": "1.55", "maxWidth": "620px" }}>
                We are a premier travel and tourism business for leisure travel, study abroad and work abroad. Travel is more than visiting new places: it is new cultures, wider horizons and meaningful connections.
              </p>
            </div>
          </div>
          <svg aria-hidden="true" viewBox="0 0 1440 120" preserveAspectRatio="none" style={{ "position": "absolute", "left": "0", "bottom": "0", "width": "100%", "height": "90px", "display": "block" }}>
            <path d="M0 120 L0 86 L60 86 L60 70 L92 70 L92 86 L150 86 L150 52 L172 52 L172 86 L240 86 L262 64 L284 86 L380 86 L380 60 L398 44 L416 60 L416 86 L520 86 L520 74 L600 74 L600 86 L700 86 L700 40 L716 40 L716 86 L820 86 L840 66 L860 86 L960 86 L960 58 L1000 58 L1000 86 L1100 86 L1100 72 L1160 72 L1160 86 L1260 86 L1280 50 L1300 86 L1440 86 L1440 120 Z" fill="#FDFDFA"></path>
          </svg>
        </section>
        <section className="wrap" style={{ "paddingTop": "72px" }}>
          <div className="g4">
            <div>
              <div className="disp" style={{ "fontSize": "53px" }}>
                3,500+
              </div>
              <div style={{ "color": "#4D555E" }}>
                happy travellers
              </div>
            </div>
            <div>
              <div className="disp" style={{ "fontSize": "53px" }}>
                1,650+
              </div>
              <div style={{ "color": "#4D555E" }}>
                successful tours
              </div>
            </div>
            <div>
              <div className="disp" style={{ "fontSize": "53px" }}>
                99.5%
              </div>
              <div style={{ "color": "#4D555E" }}>
                positive reviews
              </div>
            </div>
            <div>
              <div className="disp" style={{ "fontSize": "53px" }}>
                24/7
              </div>
              <div style={{ "color": "#4D555E" }}>
                our team is available, in person and online
              </div>
            </div>
          </div>
        </section>
        <section className="wrap" style={{ "paddingTop": "96px" }}>
          <div className="g2" style={{ "gap": "28px" }}>
            <div style={{ "background": "#FFE1E7", "borderRadius": "26px", "padding": "36px", "display": "flex", "flexDirection": "column", "gap": "14px" }}>
              <span className="mono" style={{ "fontSize": "12px", "color": "#255BD9" }}>
                MISSION
              </span>
              <p className="disp" style={{ "margin": "0", "fontSize": "32px", "lineHeight": "1.02" }}>
                To become one of the top 5 most sought-after travel and tour companies in Africa, while delivering top-notch services.
              </p>
            </div>
            <div style={{ "background": "#DCE6FA", "borderRadius": "26px", "padding": "36px", "display": "flex", "flexDirection": "column", "gap": "14px" }}>
              <span className="mono" style={{ "fontSize": "12px", "color": "#0F1518" }}>
                VISION
              </span>
              <p className="disp" style={{ "margin": "0", "fontSize": "32px", "lineHeight": "1.02" }}>
                To exceed our clients’ expectations by providing excellent travel and tours services at all times.
              </p>
            </div>
          </div>
          <div className="g3" style={{ "marginTop": "28px" }}>
            {(v.values || []).map((v, __i6) => (
              <Fragment key={__i6}>
                <div style={{ "borderTop": "2px solid #0F1518", "paddingTop": "18px", "display": "flex", "flexDirection": "column", "gap": "8px" }}>
                  <h3 className="disp" style={{ "margin": "0", "fontSize": "28px" }}>
                    {v.t}
                  </h3>
                  <p style={{ "margin": "0", "color": "#4D555E", "fontSize": "15px", "lineHeight": "1.6" }}>
                    {v.b}
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
                LEADERSHIP
              </span>
              <h2 className="disp" style={{ "margin": "10px 0 0", "fontSize": "53px", "lineHeight": "1.02", "fontWeight": "700" }}>
                {"The captain’s "}
                <em className="acc" style={{ "color": "#255BD9" }}>
                  note
                </em>
              </h2>
            </div>
          </div>
          <div className="shadow">
            <div className="pass" style={{ "background": "#FFFFFF", "borderRadius": "26px", "display": "flex", "flexWrap": "wrap" }}>
              <div style={{ "flex": "999 1 460px", "padding": "36px", "display": "flex", "gap": "28px", "flexWrap": "wrap", "alignItems": "center" }}>
                <img src="/assets/founder-portrait.jpg" alt="Ayorinde Alex, founder of Flymatas" style={{ "width": "200px", "height": "260px", "borderRadius": "20px", "objectFit": "cover", "objectPosition": "center 12%", "background": "#8C9091", "flex": "0 0 auto" }} />
                <div style={{ "flex": "1 1 280px", "display": "flex", "flexDirection": "column", "gap": "12px" }}>
                  <span className="mono" style={{ "fontSize": "12px", "color": "#255BD9" }}>
                    FOUNDER · FLYMATAS
                  </span>
                  <h3 className="disp" style={{ "margin": "0", "fontSize": "45px", "lineHeight": "1.02" }}>
                    Ayorinde Alex
                  </h3>
                  <p style={{ "margin": "0", "color": "#4D555E", "fontSize": "16px", "lineHeight": "1.65" }}>
                    “Smile, enjoy and relax. We just want you to relax and be taken care of.” Ayorinde leads a value-driven team that handles every request with care, in person and online, around the clock.
                  </p>
                </div>
              </div>
              <div className="stub-col perf-v" style={{ "flex": "1 1 240px", "minWidth": "240px", "background": "#EEF3FD", "padding": "30px", "display": "flex", "flexDirection": "column", "justifyContent": "center", "gap": "10px" }}>
                <span className="mono" style={{ "fontSize": "10px", "color": "#4D555E" }}>
                  MANAGED BY
                </span>
                <span className="disp" style={{ "fontSize": "22px", "lineHeight": "1.02" }}>
                  Flymatas Business Management Consult
                </span>
                <span style={{ "fontSize": "14px", "color": "#4D555E", "lineHeight": "1.5" }}>
                  One of Nigeria’s leading business management consulting firms, and the solution hub for travel and business management enquiries.
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="wrap" style={{ "paddingTop": "96px" }}>
          <div style={{ "display": "flex", "justifyContent": "space-between", "alignItems": "flex-end", "gap": "24px", "flexWrap": "wrap", "marginBottom": "36px" }}>
            <div style={{ "maxWidth": "720px" }}>
              <span className="mono" style={{ "fontSize": "13px", "color": "#255BD9" }}>
                CLIENT VOICES
              </span>
              <h2 className="disp" style={{ "margin": "10px 0 0", "fontSize": "53px", "lineHeight": "1.02", "fontWeight": "700" }}>
                {"Landed and "}
                <em className="acc" style={{ "color": "#255BD9" }}>
                  happy
                </em>
              </h2>
            </div>
          </div>
          <div className="g2">
            {(v.voices || []).map((v, __i6) => (
              <Fragment key={__i6}>
                <figure className="lift" style={{ "margin": "0", "background": "#FFFFFF", "border": "1px solid #E3E8F2", "borderRadius": "22px", "padding": "30px", "position": "relative", "display": "flex", "flexDirection": "column", "gap": "16px" }}>
                  <svg className="dip" aria-hidden="true" width="120" height="26" viewBox="0 0 120 26" style={{ "right": "56px" }}>
                    <path d="M0 -1 H120 V0 C92 0 86 24 60 24 C34 24 28 0 0 0 Z" fill="#FDFDFA"></path>
                    <path d="M0 0 C28 0 34 24 60 24 C86 24 92 0 120 0" fill="none" stroke="#E3E8F2" strokeWidth="1"></path>
                  </svg>
                  <span className="mono stamp" style={{ "position": "absolute", "top": "40px", "right": "22px", "fontSize": "11px", "fontWeight": "600", "color": "#255BD9", "border": "2px solid #255BD9", "borderRadius": "8px", "padding": "5px 9px" }}>
                    {"ARRIVED · "}{v.place}
                  </span>
                  <blockquote className="disp" style={{ "margin": "0", "fontSize": "32px", "lineHeight": "1.02", "maxWidth": "66%" }}>
                    “{v.quote}”
                  </blockquote>
                  <figcaption style={{ "color": "#4D555E", "fontSize": "15px", "lineHeight": "1.55" }}>
                    {v.body}{" "}
                    <strong style={{ "color": "#0F1518" }}>
                      {v.name}
                    </strong>
                  </figcaption>
                </figure>
              </Fragment>
            ))}
          </div>
        </section>
        <section className="wrap" style={{ "paddingTop": "96px" }}>
          <div style={{ "display": "flex", "justifyContent": "space-between", "alignItems": "flex-end", "gap": "24px", "flexWrap": "wrap", "marginBottom": "36px" }}>
            <div style={{ "maxWidth": "720px" }}>
              <span className="mono" style={{ "fontSize": "13px", "color": "#255BD9" }}>
                GALLERY
              </span>
              <h2 className="disp" style={{ "margin": "10px 0 0", "fontSize": "53px", "lineHeight": "1.02", "fontWeight": "700" }}>
                {"From our "}
                <em className="acc" style={{ "color": "#255BD9" }}>
                  feed
                </em>
              </h2>
            </div>
            <p style={{ "margin": "0", "maxWidth": "400px", "color": "#4D555E", "fontSize": "16px", "lineHeight": "1.6" }}>
              Recent campaigns from our feed. Follow @flymatas for the latest.
            </p>
          </div>
          <div style={{ "display": "grid", "gridTemplateColumns": "repeat(auto-fill, minmax(240px, 1fr))", "gap": "20px" }}>
            <figure className="lift" style={{ "margin": "0", "display": "flex", "flexDirection": "column", "gap": "10px" }}>
              <img src="/assets/japa-dreams.jpg" alt="Flymatas flyer: Your japa dreams are valid" loading="lazy" style={{ "display": "block", "width": "100%", "aspectRatio": "1 / 1", "objectFit": "cover", "borderRadius": "18px", "boxShadow": "0 14px 30px rgba(15,21,24,.12)" }} />
              <figcaption style={{ "fontSize": "14px", "fontWeight": "600", "color": "#0F1518" }}>
                Your japa dreams are valid
              </figcaption>
            </figure>
            <figure className="lift" style={{ "margin": "0", "display": "flex", "flexDirection": "column", "gap": "10px" }}>
              <img src="/assets/canada-study.jpg" alt="Flymatas flyer: Canada study route" loading="lazy" style={{ "display": "block", "width": "100%", "aspectRatio": "1 / 1", "objectFit": "cover", "borderRadius": "18px", "boxShadow": "0 14px 30px rgba(15,21,24,.12)" }} />
              <figcaption style={{ "fontSize": "14px", "fontWeight": "600", "color": "#0F1518" }}>
                Canada study route
              </figcaption>
            </figure>
            <figure className="lift" style={{ "margin": "0", "display": "flex", "flexDirection": "column", "gap": "10px" }}>
              <img src="/assets/schengen.jpg" alt="Flymatas flyer: Schengen visit visa" loading="lazy" style={{ "display": "block", "width": "100%", "aspectRatio": "1 / 1", "objectFit": "cover", "borderRadius": "18px", "boxShadow": "0 14px 30px rgba(15,21,24,.12)" }} />
              <figcaption style={{ "fontSize": "14px", "fontWeight": "600", "color": "#0F1518" }}>
                Schengen visit visa
              </figcaption>
            </figure>
            <figure className="lift" style={{ "margin": "0", "display": "flex", "flexDirection": "column", "gap": "10px" }}>
              <img src="/assets/scholarships.jpg" alt="Flymatas flyer: Legit scholarships abroad" loading="lazy" style={{ "display": "block", "width": "100%", "aspectRatio": "1 / 1", "objectFit": "cover", "borderRadius": "18px", "boxShadow": "0 14px 30px rgba(15,21,24,.12)" }} />
              <figcaption style={{ "fontSize": "14px", "fontWeight": "600", "color": "#0F1518" }}>
                Legit scholarships abroad
              </figcaption>
            </figure>
            <figure className="lift" style={{ "margin": "0", "display": "flex", "flexDirection": "column", "gap": "10px" }}>
              <img src="/assets/canada-pr.jpg" alt="Flymatas flyer: Canada permanent residency" loading="lazy" style={{ "display": "block", "width": "100%", "aspectRatio": "1 / 1", "objectFit": "cover", "borderRadius": "18px", "boxShadow": "0 14px 30px rgba(15,21,24,.12)" }} />
              <figcaption style={{ "fontSize": "14px", "fontWeight": "600", "color": "#0F1518" }}>
                Canada permanent residency
              </figcaption>
            </figure>
            <figure className="lift" style={{ "margin": "0", "display": "flex", "flexDirection": "column", "gap": "10px" }}>
              <img src="/assets/varsity-dreams.jpg" alt="Flymatas flyer: Aviation Varsity: empower your dreams" loading="lazy" style={{ "display": "block", "width": "100%", "aspectRatio": "1 / 1", "objectFit": "cover", "borderRadius": "18px", "boxShadow": "0 14px 30px rgba(15,21,24,.12)" }} />
              <figcaption style={{ "fontSize": "14px", "fontWeight": "600", "color": "#0F1518" }}>
                Aviation Varsity: empower your dreams
              </figcaption>
            </figure>
            <figure className="lift" style={{ "margin": "0", "display": "flex", "flexDirection": "column", "gap": "10px" }}>
              <img src="/assets/career-switch.jpg" alt="Flymatas flyer: Career switch: travel agency management" loading="lazy" style={{ "display": "block", "width": "100%", "aspectRatio": "1 / 1", "objectFit": "cover", "borderRadius": "18px", "boxShadow": "0 14px 30px rgba(15,21,24,.12)" }} />
              <figcaption style={{ "fontSize": "14px", "fontWeight": "600", "color": "#0F1518" }}>
                Career switch: travel agency management
              </figcaption>
            </figure>
            <figure className="lift" style={{ "margin": "0", "display": "flex", "flexDirection": "column", "gap": "10px" }}>
              <img src="/assets/masterclass.jpg" alt="Flymatas flyer: Tour packages masterclass" loading="lazy" style={{ "display": "block", "width": "100%", "aspectRatio": "1 / 1", "objectFit": "cover", "borderRadius": "18px", "boxShadow": "0 14px 30px rgba(15,21,24,.12)" }} />
              <figcaption style={{ "fontSize": "14px", "fontWeight": "600", "color": "#0F1518" }}>
                Tour packages masterclass
              </figcaption>
            </figure>
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
