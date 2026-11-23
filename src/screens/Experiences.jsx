"use client";

import { Fragment, useState } from 'react';
import Link from 'next/link';

// Screen converted from the Experiences design. State and derived values mirror the design's logic.
const INITIAL_STATE = Object.assign({ menu: false }, {});

class Logic {
  constructor(state, setState, props) {
    this.state = state;
    this.setState = setState;
    this.props = props || {};
  }

  
  extra(s) {
    return {
      events: [
        { title: 'Cultural Festivals', bg: 'linear-gradient(160deg,#255BD9,#4F86EE)', icon: 'M9 18V5l12-2v13M9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM21 16a3 3 0 1 1-6 0 3 3 0 0 1 6 0z', body: 'The colour, music and dance of the world’s great festivals, from the Rio Carnival and Holi in India to the Calabar Carnival here in Nigeria.' },
        { title: 'Eco-Adventure Escapes', bg: 'linear-gradient(160deg,#1C47AE,#255BD9)', icon: 'M5 19c8 0 14-6 14-14-8 0-14 6-14 14zM5 19l7-7', body: 'Hiking, wildlife safaris and eco-volunteering in pristine places, while supporting conservation and sustainable tourism.' },
        { title: 'Gastronomic Experiences', bg: 'linear-gradient(160deg,#0F1518,#2B353C)', icon: 'M7 3v8a3 3 0 0 0 6 0V3M10 3v18M17 3c-2 2-2 6 0 8v10', body: 'Culinary journeys from food tours in busy street markets to gourmet dining in Michelin-starred restaurants.' },
        { title: 'Study Abroad Fairs', bg: 'linear-gradient(160deg,#1C47AE,#255BD9)', icon: 'M2 9l10-5 10 5-10 5-10-5zM6 11v5c3 2 9 2 12 0v-5', body: 'Meet representatives from institutions across the globe, learn about courses and scholarships, and get valuable advice on studying abroad.' },
        { title: 'Work Abroad Seminars', bg: 'linear-gradient(160deg,#0F1518,#2B353C)', icon: 'M4 8h16v11H4zM9 8V5h6v3M4 13h16', body: 'Discover work opportunities, understand international job markets and connect with potential employers.' },
        { title: 'Exclusive Group Tours', bg: 'linear-gradient(160deg,#1C47AE,#255BD9)', icon: 'M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM2 21c0-4 3-6 7-6s7 2 7 6M16 3.5a4 4 0 0 1 0 7.5M22 21c0-3-1.5-5-4-5.7', body: 'Travel with like-minded people. Solo or in a small group, you explore together and make new friends on the way.' },
        { title: 'Photography Expeditions', bg: 'linear-gradient(160deg,#255BD9,#4F86EE)', icon: 'M4 8h4l2-3h4l2 3h4v11H4zM12 17a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z', body: 'Trips led by seasoned photographers for every level: learn new techniques and shoot breathtaking landscapes.' }
      ],
      activities: [
        { t: 'Tent camping', icon: 'M3 20L12 4l9 16H3zM12 4v16M9 20l3-6 3 6' },
        { t: 'Mountain hiking', icon: 'M3 20l6-10 4 6 2-3 6 7H3z' },
        { t: 'Mountain biking', icon: 'M6 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM18 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 15l4-7h5l3 7M10 8l2 7' },
        { t: 'Fishing & swimming', icon: 'M3 12c3-5 9-6 13-3l5-3v12l-5-3c-4 3-10 2-13-3zM15 11h.01' },
        { t: 'Discovery tours', icon: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM15.5 8.5l-2 5-5 2 2-5 5-2z' },
        { t: 'RV spots & couple cabins', icon: 'M3 11l9-7 9 7v9H3zM9 20v-6h6v6' }
      ],
      concierge: [
        { t: 'Social engagements', b: 'Plans for weddings, reunions and celebrations abroad.' },
        { t: 'Special events', b: 'Conferences, summits and launches, from logistics to tickets.' },
        { t: 'Security', b: 'Trusted security arrangements for high-profile travellers.' },
        { t: 'Invitation packages', b: 'Invitation letters and supporting documents organised properly.' },
        { t: 'Seating & convenience', b: 'Seating plans, transport and on-the-ground coordination.' },
        { t: 'Photos & press', b: 'Photography and media coverage for your event or visit.' },
        { t: 'Visitation packages', b: 'Delegations and family visits planned end to end.' },
        { t: 'Etiquette advice', b: 'Local customs and protocol briefings before you arrive.' }
      ]
    };
  }
  renderVals() {
    const s = this.state;
    const base = { menuOpen: s.menu, toggleMenu: () => this.setState({ menu: !s.menu }) };
    return Object.assign(base, {}, this.extra(s));
  }
}

export default function ExperiencesScreen(props) {
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
                  EXPERIENCES
                </span>
              </nav>
              <h1 className="disp hero-h1" style={{ "margin": "0", "color": "#fff", "fontSize": "72px", "lineHeight": "1.02", "fontWeight": "700" }}>
                {"A trip is more than a "}
                <em className="acc" style={{ "color": "#FDFDFA" }}>
                  seat number.
                </em>
              </h1>
              <p style={{ "margin": "0", "color": "#F1F5FF", "fontSize": "19px", "lineHeight": "1.55", "maxWidth": "620px" }}>
                Festivals, fairs, seminars, group tours and photography trips, plus the outdoors and concierge services for events and official visits.
              </p>
            </div>
          </div>
          <svg aria-hidden="true" viewBox="0 0 1440 120" preserveAspectRatio="none" style={{ "position": "absolute", "left": "0", "bottom": "0", "width": "100%", "height": "90px", "display": "block" }}>
            <path d="M0 120 L0 86 L60 86 L60 70 L92 70 L92 86 L150 86 L150 52 L172 52 L172 86 L240 86 L262 64 L284 86 L380 86 L380 60 L398 44 L416 60 L416 86 L520 86 L520 74 L600 74 L600 86 L700 86 L700 40 L716 40 L716 86 L820 86 L840 66 L860 86 L960 86 L960 58 L1000 58 L1000 86 L1100 86 L1100 72 L1160 72 L1160 86 L1260 86 L1280 50 L1300 86 L1440 86 L1440 120 Z" fill="#FDFDFA"></path>
          </svg>
        </section>
        <section className="wrap" style={{ "paddingTop": "72px" }}>
          <div style={{ "display": "flex", "justifyContent": "space-between", "alignItems": "flex-end", "gap": "24px", "flexWrap": "wrap", "marginBottom": "36px" }}>
            <div style={{ "maxWidth": "720px" }}>
              <span className="mono" style={{ "fontSize": "13px", "color": "#255BD9" }}>
                EVENTS
              </span>
              <h2 className="disp" style={{ "margin": "10px 0 0", "fontSize": "53px", "lineHeight": "1.02", "fontWeight": "700" }}>
                {"Seven ways to "}
                <em className="acc" style={{ "color": "#255BD9" }}>
                  escape the ordinary
                </em>
              </h2>
            </div>
            <p style={{ "margin": "0", "maxWidth": "400px", "color": "#4D555E", "fontSize": "16px", "lineHeight": "1.6" }}>
              Event dates and itineraries are shared as each event approaches. Register your interest and we’ll keep you posted.
            </p>
          </div>
          <div className="g3">
            {(v.events || []).map((e, __i6) => (
              <Fragment key={__i6}>
                <div className="shadow lift">
                  <article className="tkt-v" style={{ "background": "#FFFFFF", "borderRadius": "22px", "overflow": "hidden" }}>
                    <div style={{ "height": "214px", "padding": "24px", "background": e.bg, "color": "#fff", "display": "flex", "flexDirection": "column", "justifyContent": "space-between" }}>
                      <span style={{ "width": "48px", "height": "48px", "borderRadius": "14px", "background": "rgba(255,255,255,.2)", "display": "grid", "placeItems": "center" }} aria-hidden="true">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d={e.icon}></path>
                        </svg>
                      </span>
                      <h3 className="disp" style={{ "margin": "0", "fontSize": "37px", "lineHeight": "1.02" }}>
                        {e.title}
                      </h3>
                    </div>
                    <div className="perf-h" style={{ "padding": "22px", "display": "flex", "flexDirection": "column", "gap": "14px" }}>
                      <p style={{ "margin": "0", "color": "#4D555E", "fontSize": "15px", "lineHeight": "1.6" }}>
                        {e.body}
                      </p>
                      <div className="mono" style={{ "fontSize": "10px", "color": "#4D555E" }}>
                        DATES AND ITINERARY
                        <div style={{ "fontSize": "13px", "color": "#0F1518" }}>
                          Shared as the event approaches
                        </div>
                      </div>
                      <Link href="/book" className="btn" style={{ "background": "#0F1518", "color": "#fff", "minHeight": "44px", "fontSize": "14px" }}>
                        Register interest
                      </Link>
                    </div>
                  </article>
                </div>
              </Fragment>
            ))}
          </div>
        </section>
        <section style={{ "marginTop": "96px", "background": "#0F1518", "color": "#fff", "padding": "88px 0" }}>
          <div className="wrap">
            <div style={{ "display": "flex", "justifyContent": "space-between", "alignItems": "flex-end", "gap": "24px", "flexWrap": "wrap", "marginBottom": "36px" }}>
              <div style={{ "maxWidth": "720px" }}>
                <span className="mono" style={{ "fontSize": "13px", "color": "#FD6886" }}>
                  OUTDOORS
                </span>
                <h2 className="disp" style={{ "margin": "10px 0 0", "fontSize": "53px", "lineHeight": "1.02", "fontWeight": "700" }}>
                  {"For people who find hotel pools "}
                  <em className="acc" style={{ "color": "#FD6886" }}>
                    boring
                  </em>
                </h2>
              </div>
            </div>
            <div className="g3">
              {(v.activities || []).map((a, __i7) => (
                <Fragment key={__i7}>
                  <div className="lift" style={{ "background": "#1A2228", "border": "1px solid #2A343B", "borderRadius": "20px", "padding": "24px", "display": "flex", "gap": "16px", "alignItems": "center" }}>
                    <span style={{ "width": "52px", "height": "52px", "borderRadius": "14px", "background": "#255BD9", "display": "grid", "placeItems": "center", "flex": "0 0 auto" }} aria-hidden="true">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d={a.icon}></path>
                      </svg>
                    </span>
                    <span className="disp" style={{ "fontSize": "22px", "lineHeight": "1.02" }}>
                      {a.t}
                    </span>
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
                CONCIERGE
              </span>
              <h2 className="disp" style={{ "margin": "10px 0 0", "fontSize": "53px", "lineHeight": "1.02", "fontWeight": "700" }}>
                {"Events and visits, "}
                <em className="acc" style={{ "color": "#255BD9" }}>
                  handled
                </em>
              </h2>
            </div>
            <p style={{ "margin": "0", "maxWidth": "400px", "color": "#4D555E", "fontSize": "16px", "lineHeight": "1.6" }}>
              For delegations, family events and official visits abroad.
            </p>
          </div>
          <div className="g4">
            {(v.concierge || []).map((c, __i6) => (
              <Fragment key={__i6}>
                <div style={{ "borderTop": "2px solid #0F1518", "paddingTop": "16px", "display": "flex", "flexDirection": "column", "gap": "8px" }}>
                  <h3 className="disp" style={{ "margin": "0", "fontSize": "22px" }}>
                    {c.t}
                  </h3>
                  <p style={{ "margin": "0", "color": "#4D555E", "fontSize": "14px", "lineHeight": "1.6" }}>
                    {c.b}
                  </p>
                </div>
              </Fragment>
            ))}
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
