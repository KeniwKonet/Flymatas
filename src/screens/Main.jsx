"use client";

import { Fragment, useState } from 'react';
import Link from 'next/link';

// Screen converted from the Main design. State and derived values mirror the design's logic.
const INITIAL_STATE = { tab: 'leisure', dest: 'United Kingdom', menu: false };

class Logic {
  constructor(state, setState, props) {
    this.state = state;
    this.setState = setState;
    this.props = props || {};
  }

  
  renderVals() {
    const s = this.state;
    const D = [
      { key: 'CH', country: 'Switzerland', city: 'Zurich', code: 'ZRH', forWhat: 'Leisure', bg: 'linear-gradient(160deg,#255BD9,#4F86EE)', blurb: 'Lake Zurich mornings, trains up into the snow, and one Schengen visa that opens most of Europe.' },
      { key: 'UK', country: 'United Kingdom', city: 'London', code: 'LHR', forWhat: 'Study', bg: 'linear-gradient(160deg,#0F1518,#2B353C)', blurb: 'Top universities, short courses and the classic London trip. We build your UK visa file and check every page.' },
      { key: 'FR', country: 'France', city: 'Paris', code: 'CDG', forWhat: 'Leisure', bg: 'linear-gradient(160deg,#1C47AE,#255BD9)', blurb: 'The Eiffel Tower lit up at night, croissants at 7am, and a Schengen application prepared line by line.' },
      { key: 'TH', country: 'Thailand', city: 'Bangkok', code: 'BKK', forWhat: 'Leisure', bg: 'linear-gradient(160deg,#0F1518,#2B353C)', blurb: 'Temples in the morning, island beaches by evening. A favourite for honeymoons and group trips.' },
      { key: 'SG', country: 'Singapore', city: 'Singapore', code: 'SIN', forWhat: 'Work', bg: 'linear-gradient(160deg,#255BD9,#4F86EE)', blurb: 'Clean, fast and career-minded. Strong for study, work placements and stopovers across Asia.' },
      { key: 'IT', country: 'Italy', city: 'Rome', code: 'FCO', forWhat: 'Study', bg: 'linear-gradient(160deg,#1C47AE,#255BD9)', blurb: 'Ancient streets, art on every corner, and affordable degrees at Italian public universities.' }
    ];
    const selected = D.find(d => d.country === s.dest);
    const dests = D.map(d => ({
      ...d,
      isCH: d.key === 'CH', isUK: d.key === 'UK', isFR: d.key === 'FR', isTH: d.key === 'TH', isSG: d.key === 'SG', isIT: d.key === 'IT',
      selected: d.country === s.dest,
      pick: () => this.setState({ dest: d.country })
    }));
    const tabDefs = [['leisure','Leisure trip'],['study','Study abroad'],['work','Work abroad'],['visa','Visa help']];
    const tabs = tabDefs.map(([id, label]) => ({
      label, on: s.tab === id ? 'true' : 'false',
      bg: s.tab === id ? '#0F1518' : 'transparent',
      fg: s.tab === id ? '#FFFFFF' : '#0F1518',
      pick: () => this.setState({ tab: id })
    }));
    const tabWord = { leisure: 'a leisure trip to', study: 'study abroad in', work: 'work abroad in', visa: 'a visa for' }[s.tab];
    const msg = 'Hello Flymatas, I would like help with ' + tabWord + ' ' + s.dest + '.';
    return {
      menuOpen: s.menu,
      toggleMenu: () => this.setState({ menu: !s.menu }),
      tabs,
      isLeisure: s.tab === 'leisure', isStudy: s.tab === 'study', isWork: s.tab === 'work', isVisa: s.tab === 'visa',
      dest: s.dest,
      destCode: selected ? selected.code : 'ANY',
      destOptions: ['Switzerland','United Kingdom','France','Thailand','Singapore','Italy','Canada','Anywhere'],
      setDest: (e) => this.setState({ dest: e.target.value }),
      waLink: 'https://wa.me/2347033221729?text=' + encodeURIComponent(msg),
      board: [
        { code: 'ZRH', city: 'Zurich, Switzerland', status: 'BOARDING', tone: '#86D5FF', delay: '0.1s' },
        { code: 'LHR', city: 'London, United Kingdom', status: 'VISA DESK', tone: '#86D5FF', delay: '0.25s' },
        { code: 'CDG', city: 'Paris, France', status: 'ON TIME', tone: '#AEB7BF', delay: '0.4s' },
        { code: 'BKK', city: 'Bangkok, Thailand', status: 'BOARDING', tone: '#86D5FF', delay: '0.55s' },
        { code: 'SIN', city: 'Singapore', status: 'ON TIME', tone: '#AEB7BF', delay: '0.7s' },
        { code: 'FCO', city: 'Rome, Italy', status: 'GATE OPEN', tone: '#FD6886', delay: '0.85s' }
      ],
      dests,
      journeys: [
        { gate: 'A1', kicker: 'LEISURE TRAVEL', title: 'Holidays without the planning headache', tint: '#FFE1E7', cta: 'Explore', link: 'Destinations.dc.html', icon: 'M3 20h18M5 20c0-5 3-9 7-9s7 4 7 9M12 11V4M9 6l3-2 3 2', body: 'Thai beaches, Swiss lakes, Paris streets. You choose the vibe, and we sort the flight, hotel, airport pickup and every tour in between.', tags: ['Honeymoons','Family trips','Group tours'] },
        { gate: 'B2', kicker: 'STUDY ABROAD', title: 'From WAEC result to lecture hall', tint: '#DCE6FA', cta: 'Apply', link: 'StudyAbroad.dc.html', icon: 'M2 9l10-5 10 5-10 5-10-5zM6 11v5c3 2 9 2 12 0v-5', body: 'Admission processing for undergraduate, master’s, diploma and PhD programmes, plus your study permit, proof of funds guidance, and your SOP, letters and CV.', tags: ['Universities','Trade schools','Exams'] },
        { gate: 'C3', kicker: 'WORK ABROAD', title: 'Japa with a job waiting', tint: '#DDF3FF', cta: 'Start', link: 'WorkAbroad.dc.html', icon: 'M4 8h16v11H4zM9 8V5h6v3M4 13h16', body: 'Internships, placements and jobs with partner organisations abroad, plus Canada PR through Express Entry and the Provincial Nominee Program.', tags: ['Jobs','Internships','Fellowships'] },
        { gate: 'D4', kicker: 'VISA ASSISTANCE', title: 'No promises. Just delivery.', tint: '#E8ECF5', cta: 'Get help', link: 'Visa.dc.html', icon: 'M6 3h9l4 4v14H6zM14 3v5h5M9 13h7M9 17h5', body: 'Schengen, UK, Canada and more. We help you get a close appointment date, prepare a detailed application, guide your proof of funds and check every document.', tags: ['Schengen','Student visa','PR pathways'] },
        { gate: 'E5', kicker: 'MEDICAL TOURISM', title: 'Care abroad, planned calmly', tint: '#FFE1E7', cta: 'Plan it', link: 'Booking.dc.html', icon: 'M12 20s-7-4.4-9-9.2C1.6 7.3 4 4 7.4 4c2 0 3.6 1 4.6 2.6C13 5 14.6 4 16.6 4 20 4 22.4 7.3 21 10.8 19 15.6 12 20 12 20zM12 9v6M9 12h6', body: 'Treatment or a check-up abroad: we arrange the medical visa, flights, accommodation near the hospital and travel for a companion, so you can focus on getting well.', tags: ['Medical visa','Companion travel','Accommodation'] },
        { gate: 'F6', kicker: 'MIGRATION', title: 'Relocate for the long run', tint: '#DDF3FF', cta: 'Start', link: 'WorkAbroad.dc.html', icon: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18', body: 'Moving abroad for good? We map your route, from permanent residency and family relocation to settling in, and handle the paperwork with you.', tags: ['PR routes','Family relocation','Settling in'] }
      ],
      experiences: [
        { tag: 'CULTURE', title: 'Cultural Festivals', body: 'From the Rio Carnival and Holi in India to the Calabar Carnival here at home: music, dance and tradition, up close.' },
        { tag: 'EDUCATION', title: 'Study Abroad Fairs', body: 'Meet representatives from institutions across the globe, learn about courses and scholarships, and get honest advice.' },
        { tag: 'NATURE', title: 'Eco-Adventure Escapes', body: 'Hiking, wildlife safaris and eco-volunteering in pristine, eco-sensitive destinations.' }
      ],
      activities: ['Tent camping','Mountain hiking','Mountain biking','Fishing & swimming','RV & trailer spots','Couple cabins'],
      courses: [
        { n: '01', name: 'Flight Ticket Reservation' },
        { n: '02', name: 'Visa Application & Form Filling' },
        { n: '03', name: 'Air Hostess Training' },
        { n: '04', name: 'Destination Specialist' },
        { n: '05', name: 'Travel Agency Management · 12 weeks' },
        { n: '06', name: 'Tour Packages Masterclass · 7 days' }
      ],
      features: [
        { n: '01', title: 'Book in one message', body: 'Send one WhatsApp message or walk into Ikeja, Garki, Ijapo or Ondo. No twenty-page forms.' },
        { n: '02', title: 'Cancellations without drama', body: 'Plans change. Your consultant reworks the trip instead of going quiet on you.' },
        { n: '03', title: 'Trips cut to fit', body: 'Solo, honeymoon, family, church group or office retreat, each planned to fit you.' },
        { n: '04', title: 'Adventure on the menu', body: 'Camping, hiking, biking and safaris for people who find hotel pools boring.' },
        { n: '05', title: 'A guide, not just a map link', body: 'Someone who knows the city meets you, from arrival to departure.' },
        { n: '06', title: 'Fewer layovers', body: 'Direct routes where they exist, so you spend less time stuck at transit desks.' }
      ],
      reports: [
        { tag: 'EXAMS', title: 'List of all international exams', tint: '#FFE1E7', url: 'https://flymatas.com/list-of-all-international-exams/' },
        { tag: 'CANADA', title: 'Trade schools in Canada: a brief', tint: '#DCE6FA', url: 'https://flymatas.com/brief-about-trade-schools-in-canada-extracted-from-the-internet/' },
        { tag: 'RELOCATION', title: 'Accessing the Ponga relocation opportunity', tint: '#DDF3FF', url: 'https://flymatas.com/comprehensive-guide-to-accessing-the-ponga-relocation-opportunity/' },
        { tag: 'CANADA', title: 'Young Professional Fellowship Canada 2025', tint: '#E8ECF5', url: 'https://flymatas.com/step-by-step-guide-prepared-by-flymatas-for-young-professional-fellowship-canada-2025/' },
        { tag: 'VISA', title: 'Schengen visa application: the basics', tint: '#DCE6FA', url: 'https://flymatas.com/schengen-visa-application-the-basics-you-need-to-know/' },
        { tag: 'CANADA', title: 'Ontario Permanent Residency (PR) pathway', tint: '#FFE1E7', url: 'https://flymatas.com/a-step-by-step-guide-for-ontario-permanent-residency-pr-pathway/' }
      ],
      voices: [
        { place: 'CANADA', name: 'Ay, Canada', quote: 'We don’t promise visa here, but we will deliver.', body: 'I doubted it until a friend introduced me. The MD told me exactly that, and they did deliver. I recommend Flymatas to anyone.' },
        { place: 'DUBLIN', name: 'Samson, Dublin', quote: 'They won’t disappoint you.', body: 'The best travel agent I know in Nigeria. They got me to Dublin.' }
      ],
      offices: [
        { code: 'LOS', city: 'Lagos', addr: 'No 4 Olowu Street, Ikeja, Lagos (opposite Dimaps Battery)' },
        { code: 'ABV', city: 'Abuja', addr: 'Block SB3, Flat 16, NNPC (opposite Wema Bank), Area 11, Garki, Abuja' },
        { code: 'AKR', city: 'Akure', addr: 'Plot 12 Block B Ikale Street (opposite Ijapo Estate Field), Ijapo Estate, Akure' },
        { code: 'OND', city: 'Ondo', addr: '8A Messiah Majesty Shopping Complex, Ondo Ore Ring Road, Ondo' }
      ]
    };
  }
}

export default function MainScreen(props) {
  const [state, setRaw] = useState(INITIAL_STATE);
  const setState = (patch) => setRaw((s) => ({ ...s, ...(typeof patch === 'function' ? patch(s) : patch) }));
  const v = new Logic(state, setState, props).renderVals();
  return (
    <>
      <div className="mapbg" style={{ "width": "100%", "overflowX": "hidden" }}>
        <section className="sky" style={{ "position": "relative", "overflow": "hidden", "paddingBottom": "150px" }}>
          <div className="cloud drift-a" aria-hidden="true" style={{ "width": "220px", "height": "54px", "top": "150px", "left": "6%", "opacity": ".7" }}></div>
          <div className="cloud drift-b" aria-hidden="true" style={{ "width": "300px", "height": "70px", "top": "250px", "right": "4%", "opacity": ".55" }}></div>
          <div className="flight-far" aria-hidden="true" style={{ "top": "112px" }}>
            <div className="trail" style={{ "top": "9px", "width": "22vw", "height": "2px" }}></div>
            <svg width="96" height="32" viewBox="0 0 240 80" style={{ "display": "block" }}>
              <path d="M18 40 L6 8 L30 8 L58 34 Z" fill="#FD6886"></path>
              <path d="M10 44 C10 36 30 32 60 32 L200 32 C222 32 236 38 236 44 C236 50 222 54 200 54 L60 54 C30 54 10 52 10 44 Z" fill="#fff"></path>
              <path d="M110 46 L80 76 L100 76 L150 48 Z" fill="#DCE6FA"></path>
            </svg>
          </div>
          <div className="flight" aria-hidden="true" style={{ "top": "168px", "zIndex": "2" }}>
            <div className="bob">
              <div className="trail" style={{ "top": "34px" }}></div>
              <div className="trail" style={{ "top": "44px", "opacity": ".6" }}></div>
              <svg width="300" height="100" viewBox="0 0 240 80" style={{ "display": "block", "overflow": "visible" }}>
                {" "}
                <path d="M110 44 L66 6 L88 6 L150 40 Z" fill="#B9CBF5"></path>
                {" "}
                <path d="M18 40 L4 6 L32 6 L60 34 Z" fill="#FD6886"></path>
                {" "}
                <path d="M14 8 L30 8 L36 14 L18 14 Z" fill="#0F1518" opacity=".25"></path>
                {" "}
                <path d="M10 44 C10 36 30 31 60 31 L198 31 C222 31 238 38 238 44 C238 50 222 55 198 55 L60 55 C30 55 10 52 10 44 Z" fill="#FFFFFF"></path>
                {" "}
                <path d="M30 49 L236 47 C234 51 222 55 198 55 L60 55 C40 55 30 53 30 49 Z" fill="#0F1518"></path>
                {" "}
                <path d="M36 46 L234 44" stroke="#FD6886" strokeWidth="2"></path>
                {" "}
                <path d="M216 36 L229 37.5 L232 42 L216 41 Z" fill="#0F1518"></path>
                {" "}
                <g fill="#255BD9">
                  <circle cx="72" cy="39" r="2"></circle>
                  <circle cx="82" cy="39" r="2"></circle>
                  <circle cx="92" cy="39" r="2"></circle>
                  <circle cx="102" cy="39" r="2"></circle>
                  <circle cx="112" cy="39" r="2"></circle>
                  <circle cx="122" cy="39" r="2"></circle>
                  <circle cx="132" cy="39" r="2"></circle>
                  <circle cx="142" cy="39" r="2"></circle>
                  <circle cx="152" cy="39" r="2"></circle>
                  <circle cx="162" cy="39" r="2"></circle>
                  <circle cx="172" cy="39" r="2"></circle>
                  <circle cx="182" cy="39" r="2"></circle>
                  <circle cx="192" cy="39" r="2"></circle>
                  <circle cx="202" cy="39" r="2"></circle>
                </g>
                {" "}
                <path d="M22 46 L2 58 L18 58 L48 48 Z" fill="#FD6886"></path>
                {" "}
                <path d="M108 48 L78 78 L100 78 L152 50 Z" fill="#E6EDFF" stroke="#B9CBF5" strokeWidth="1"></path>
                {" "}
                <rect x="104" y="57" width="30" height="11" rx="5.5" fill="#0F1518"></rect>
                {" "}
                <rect x="128" y="58.5" width="5" height="8" rx="2" fill="#FD6886"></rect>
                {" "}
                <text x="40" y="27" fontFamily="Outfit, sans-serif" fontWeight="800" fontSize="9" fill="#fff">
                  F
                </text>
                {" "}
              </svg>
            </div>
          </div>
          <div className="cloud drift-c" aria-hidden="true" style={{ "width": "260px", "height": "60px", "top": "228px", "left": "44%", "zIndex": "3", "opacity": ".9" }}></div>
          <header className="wrap" style={{ "position": "relative", "zIndex": "5", "display": "flex", "alignItems": "center", "justifyContent": "space-between", "gap": "24px", "paddingTop": "22px", "paddingBottom": "22px" }}>
            <a href="#top" aria-label="Flymatas home" style={{ "display": "flex", "alignItems": "center", "gap": "10px", "textDecoration": "none", "color": "#fff" }}>
              <img src="/assets/lockup-white.png" alt="Flymatas" style={{ "height": "38px", "width": "auto", "display": "block" }} />
            </a>
            <nav className="desk" aria-label="Main" style={{ "alignItems": "center", "gap": "26px" }}>
              <Link className="navlink" href="/study-abroad">
                Study
              </Link>
              {" "}
              <Link className="navlink" href="/work-abroad">
                Work
              </Link>
              {" "}
              <Link className="navlink" href="/visa">
                Visa
              </Link>
              {" "}
              <Link className="navlink" href="/destinations">
                Destinations
              </Link>
              {" "}
              <Link className="navlink" href="/varsity">
                Varsity
              </Link>
              {" "}
              <Link className="navlink" href="/guides">
                Guides
              </Link>
              <Link className="navlink" href="/news">
                News
              </Link>
              {" "}
              <Link className="navlink" href="/about">
                About
              </Link>
              {" "}
              <Link className="navlink" href="/contact">
                Contact
              </Link>
            </nav>
            <div className="desk" style={{ "alignItems": "center", "gap": "12px" }}>
              <Link className="navlink" href="/account">
                Log in
              </Link>
              {" "}
              <a className="btn" href="https://wa.me/2347033221729" style={{ "background": "#FD6886", "color": "#0F1518" }}>
                Book on WhatsApp
              </a>
            </div>
            <button className="mob btn" type="button" aria-label="Open menu" onClick={v.toggleMenu} style={{ "background": "rgba(255,255,255,.18)", "color": "#fff", "width": "48px", "padding": "0" }}>
              {" "}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16"></path>
              </svg>
              {" "}
            </button>
          </header>
          {v.menuOpen ? (
            <>
              <nav aria-label="Mobile" className="wrap" style={{ "position": "relative", "zIndex": "6", "display": "flex", "flexDirection": "column", "gap": "4px", "paddingBottom": "16px" }}>
                <Link className="navlink" href="/study-abroad">
                  Study
                </Link>
                <Link className="navlink" href="/work-abroad">
                  Work
                </Link>
                <Link className="navlink" href="/visa">
                  Visa
                </Link>
                <Link className="navlink" href="/destinations">
                  Destinations
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
                <a className="btn" href="https://wa.me/2347033221729" style={{ "background": "#FD6886", "color": "#0F1518", "marginTop": "8px" }}>
                  Book on WhatsApp
                </a>
              </nav>
            </>
          ) : null}
          {" "}
          <div className="wrap hero-grid" style={{ "position": "relative", "zIndex": "4", "paddingTop": "220px" }}>
            <div style={{ "display": "flex", "flexDirection": "column", "gap": "22px" }}>
              <span className="mono" style={{ "color": "#fff", "fontSize": "13px", "textTransform": "uppercase", "display": "flex", "alignItems": "center", "gap": "10px" }}>
                <span className="blink" style={{ "width": "8px", "height": "8px", "borderRadius": "50%", "background": "#FD6886", "display": "inline-block" }}></span>
                {" Lagos · Abuja · Akure · Ondo "}
              </span>
              <h1 className="disp hero-h1" style={{ "margin": "0", "color": "#fff", "fontSize": "92px", "lineHeight": "1.02", "fontWeight": "700" }}>
                Japa the
                <br />
                <em className="acc" style={{ "color": "#FDFDFA" }}>
                  right
                </em>
                {" way."}
              </h1>
              <p style={{ "margin": "0", "color": "#F1F5FF", "fontSize": "19px", "lineHeight": "1.55", "maxWidth": "560px" }}>
                Your japa dreams are valid, and we can help you make them real. Study, work or holiday abroad without the agent wahala: we sort the admission, the visa and the flight, and our team is there for you 24/7.
              </p>
              <div style={{ "display": "flex", "flexWrap": "wrap", "gap": "12px" }}>
                <a className="btn" href="#book" style={{ "background": "#0F1518", "color": "#fff" }}>
                  Book a clarity call
                </a>
                <a className="btn" href="#destinations" style={{ "background": "rgba(255,255,255,.2)", "color": "#fff", "border": "1px solid rgba(255,255,255,.55)" }}>
                  Just a holiday, please
                </a>
              </div>
              <span className="mono" style={{ "color": "#E6EDFF", "fontSize": "12px" }}>
                ESCAPE THE ORDINARY · JUST LET US FIX YOUR TRAVELS
              </span>
            </div>
            <div aria-label="Popular routes from Lagos" style={{ "background": "#0F1518", "borderRadius": "22px", "padding": "22px 22px 14px", "boxShadow": "0 30px 60px rgba(10,22,48,.35)" }}>
              <div style={{ "display": "flex", "justifyContent": "space-between", "alignItems": "center", "marginBottom": "14px" }}>
                <span className="mono" style={{ "color": "#FD6886", "fontSize": "12px" }}>
                  DEPARTURES · LOS
                </span>
                <span className="mono" style={{ "color": "#9AA5AF", "fontSize": "12px" }}>
                  POPULAR ROUTES
                </span>
              </div>
              <div className="mono" style={{ "display": "grid", "gridTemplateColumns": "70px minmax(0,1fr) 110px", "gap": "8px", "color": "#9AA5AF", "fontSize": "11px", "padding": "0 6px 8px", "borderBottom": "1px solid #2A343B" }}>
                <span>
                  CODE
                </span>
                <span>
                  DESTINATION
                </span>
                <span style={{ "textAlign": "right" }}>
                  STATUS
                </span>
              </div>
              {(v.board || []).map((r, __i7) => (
                <Fragment key={__i7}>
                  <div className="mono" style={{ "display": "grid", "gridTemplateColumns": "70px minmax(0,1fr) 110px", "gap": "8px", "alignItems": "center", "padding": "10px 6px", "borderBottom": "1px solid #1E272D" }}>
                    <span className="flap" style={{ "color": "#86D5FF", "fontWeight": "700", "fontSize": "17px", "animationDelay": r.delay }}>
                      {r.code}
                    </span>
                    <span style={{ "color": "#fff", "fontSize": "14px" }}>
                      {r.city}
                    </span>
                    <span style={{ "textAlign": "right", "fontSize": "11px", "color": r.tone }}>
                      {r.status}
                    </span>
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
          {" "}
          <svg aria-hidden="true" viewBox="0 0 1440 120" preserveAspectRatio="none" style={{ "position": "absolute", "left": "0", "bottom": "0", "width": "100%", "height": "120px", "display": "block" }}>
            {" "}
            <path d="M0 120 L0 86 L60 86 L60 70 L92 70 L92 86 L150 86 L150 52 L172 52 L172 86 L240 86 L262 64 L284 86 L380 86 L380 60 L398 44 L416 60 L416 86 L520 86 L520 74 L600 74 L600 86 L700 86 L700 40 L716 40 L716 86 L820 86 L840 66 L860 86 L960 86 L960 58 L1000 58 L1000 86 L1100 86 L1100 72 L1160 72 L1160 86 L1260 86 L1280 50 L1300 86 L1440 86 L1440 120 Z" fill="#FDFDFA"></path>
            {" "}
          </svg>
        </section>
        <section id="book" className="wrap" style={{ "position": "relative", "zIndex": "8", "marginTop": "-120px" }}>
          <div className="shadow">
            <div className="pass" style={{ "background": "#FFFFFF", "borderRadius": "26px", "display": "flex", "flexWrap": "wrap" }}>
              <div style={{ "flex": "999 1 560px", "minWidth": "0", "padding": "26px 32px 30px", "display": "flex", "flexDirection": "column", "gap": "22px" }}>
                <div style={{ "display": "flex", "justifyContent": "space-between", "alignItems": "center", "gap": "16px", "flexWrap": "wrap" }}>
                  <span className="mono" style={{ "fontSize": "12px", "color": "#4D555E" }}>
                    {"BOARDING PASS · FLYMATAS TRAVELS & TOURS"}
                  </span>
                  <div role="tablist" aria-label="Trip type" style={{ "display": "flex", "flexWrap": "wrap", "gap": "6px", "background": "#EEF3FD", "padding": "5px", "borderRadius": "999px" }}>
                    {(v.tabs || []).map((t, __i10) => (
                      <Fragment key={__i10}>
                        {" "}
                        <button type="button" role="tab" aria-selected={t.on} onClick={t.pick} style={{ "border": "0", "cursor": "pointer", "minHeight": "40px", "padding": "0 16px", "borderRadius": "999px", "font": "600 14px 'Outfit', sans-serif", "background": t.bg, "color": t.fg }}>
                          {t.label}
                        </button>
                        {" "}
                      </Fragment>
                    ))}
                  </div>
                </div>
                {v.isLeisure ? (
                  <>
                    <div style={{ "display": "flex", "flexWrap": "wrap", "gap": "24px" }}>
                      <div className="field">
                        <label htmlFor="f-from">
                          From
                        </label>
                        <select id="f-from">
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
                      <div className="field">
                        <label htmlFor="f-to">
                          To
                        </label>
                        <select id="f-to" value={v.dest} onChange={v.setDest}>
                          {(v.destOptions || []).map((o, __i13) => (
                            <Fragment key={__i13}>
                              <option value={o}>
                                {o}
                              </option>
                            </Fragment>
                          ))}
                        </select>
                      </div>
                      <div className="field">
                        <label htmlFor="f-date">
                          Depart
                        </label>
                        <input id="f-date" type="date" />
                      </div>
                      <div className="field">
                        <label htmlFor="f-pax">
                          Travellers
                        </label>
                        <select id="f-pax">
                          <option>
                            1 adult
                          </option>
                          <option>
                            2 adults
                          </option>
                          <option>
                            Family
                          </option>
                          <option>
                            Group
                          </option>
                        </select>
                      </div>
                    </div>
                  </>
                ) : null}
                {v.isStudy ? (
                  <>
                    <div style={{ "display": "flex", "flexWrap": "wrap", "gap": "24px" }}>
                      <div className="field">
                        <label htmlFor="s-to">
                          Study in
                        </label>
                        <select id="s-to" value={v.dest} onChange={v.setDest}>
                          {(v.destOptions || []).map((o, __i13) => (
                            <Fragment key={__i13}>
                              <option value={o}>
                                {o}
                              </option>
                            </Fragment>
                          ))}
                        </select>
                      </div>
                      <div className="field">
                        <label htmlFor="s-lvl">
                          Level
                        </label>
                        <select id="s-lvl">
                          <option>
                            Undergraduate
                          </option>
                          <option>
                            Master's
                          </option>
                          <option>
                            Trade school
                          </option>
                          <option>
                            Language course
                          </option>
                        </select>
                      </div>
                      <div className="field">
                        <label htmlFor="s-area">
                          Field
                        </label>
                        <select id="s-area">
                          <option>
                            Science
                          </option>
                          <option>
                            {"Arts & Humanities"}
                          </option>
                          <option>
                            {"Administration & Management"}
                          </option>
                        </select>
                      </div>
                      <div className="field">
                        <label htmlFor="s-int">
                          Intake
                        </label>
                        <input id="s-int" type="month" />
                      </div>
                    </div>
                  </>
                ) : null}
                {v.isWork ? (
                  <>
                    <div style={{ "display": "flex", "flexWrap": "wrap", "gap": "24px" }}>
                      <div className="field">
                        <label htmlFor="w-to">
                          Work in
                        </label>
                        <select id="w-to" value={v.dest} onChange={v.setDest}>
                          {(v.destOptions || []).map((o, __i13) => (
                            <Fragment key={__i13}>
                              <option value={o}>
                                {o}
                              </option>
                            </Fragment>
                          ))}
                        </select>
                      </div>
                      <div className="field">
                        <label htmlFor="w-type">
                          Opportunity
                        </label>
                        <select id="w-type">
                          <option>
                            Job placement
                          </option>
                          <option>
                            Internship
                          </option>
                          <option>
                            Fellowship
                          </option>
                        </select>
                      </div>
                      <div className="field">
                        <label htmlFor="w-field">
                          Your field
                        </label>
                        <input id="w-field" type="text" placeholder="e.g. Nursing, IT" />
                      </div>
                    </div>
                  </>
                ) : null}
                {v.isVisa ? (
                  <>
                    <div style={{ "display": "flex", "flexWrap": "wrap", "gap": "24px" }}>
                      <div className="field">
                        <label htmlFor="v-to">
                          Visa for
                        </label>
                        <select id="v-to" value={v.dest} onChange={v.setDest}>
                          {(v.destOptions || []).map((o, __i13) => (
                            <Fragment key={__i13}>
                              <option value={o}>
                                {o}
                              </option>
                            </Fragment>
                          ))}
                        </select>
                      </div>
                      <div className="field">
                        <label htmlFor="v-type">
                          Visa type
                        </label>
                        <select id="v-type">
                          <option>
                            Tourist / Schengen
                          </option>
                          <option>
                            Student
                          </option>
                          <option>
                            Work
                          </option>
                          <option>
                            Permanent residency
                          </option>
                        </select>
                      </div>
                      <div className="field">
                        <label htmlFor="v-help">
                          Help needed
                        </label>
                        <select id="v-help">
                          <option>
                            Full application
                          </option>
                          <option>
                            Form filling only
                          </option>
                          <option>
                            Document review
                          </option>
                        </select>
                      </div>
                    </div>
                  </>
                ) : null}
              </div>
              <div className="stub-col perf-v" style={{ "flex": "1 1 240px", "minWidth": "240px", "maxWidth": "100%", "padding": "26px 28px 30px", "display": "flex", "flexDirection": "column", "justifyContent": "space-between", "gap": "18px", "background": "#EEF3FD", "borderLeftWidth": "2px" }}>
                <div style={{ "display": "flex", "justifyContent": "space-between", "alignItems": "flex-end" }}>
                  <div>
                    <div className="mono" style={{ "fontSize": "11px", "color": "#4D555E" }}>
                      FROM
                    </div>
                    <div className="disp" style={{ "fontSize": "32px", "fontWeight": "700" }}>
                      LOS
                    </div>
                  </div>
                  <svg width="40" height="20" viewBox="0 0 40 20" aria-hidden="true">
                    <path d="M2 10 H32" stroke="#0F1518" strokeWidth="2" className="march"></path>
                    <path d="M30 4 L38 10 L30 16" fill="none" stroke="#0F1518" strokeWidth="2"></path>
                  </svg>
                  <div style={{ "textAlign": "right" }}>
                    <div className="mono" style={{ "fontSize": "11px", "color": "#4D555E" }}>
                      TO
                    </div>
                    <div className="disp" style={{ "fontSize": "32px", "fontWeight": "700", "color": "#255BD9" }}>
                      {v.destCode}
                    </div>
                  </div>
                </div>
                <a className="btn" href={v.waLink} style={{ "background": "#0F1518", "color": "#fff", "width": "100%" }}>
                  Get my plan on WhatsApp
                </a>
                <span style={{ "fontSize": "12px", "color": "#4D555E", "textAlign": "center" }}>
                  This opens WhatsApp with your trip typed out. A Flymatas consultant replies with options and the full cost.
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="wrap" style={{ "paddingTop": "64px", "paddingBottom": "24px" }}>
          <div className="g4" style={{ "alignItems": "center" }}>
            <div>
              <div className="disp" style={{ "fontSize": "45px", "fontWeight": "700" }}>
                3,500+
              </div>
              <div style={{ "color": "#4D555E", "fontSize": "15px" }}>
                happy travellers
              </div>
            </div>
            <div>
              <div className="disp" style={{ "fontSize": "45px", "fontWeight": "700" }}>
                1,650+
              </div>
              <div style={{ "color": "#4D555E", "fontSize": "15px" }}>
                successful tours
              </div>
            </div>
            <div>
              <div className="disp" style={{ "fontSize": "45px", "fontWeight": "700" }}>
                99.5%
              </div>
              <div style={{ "color": "#4D555E", "fontSize": "15px" }}>
                positive reviews
              </div>
            </div>
            <div>
              <div className="disp" style={{ "fontSize": "45px", "fontWeight": "700" }}>
                4
              </div>
              <div style={{ "color": "#4D555E", "fontSize": "15px" }}>
                offices: Lagos · Abuja · Akure · Ondo
              </div>
            </div>
          </div>
        </section>
        <section id="journeys" className="wrap" style={{ "paddingTop": "96px", "paddingBottom": "40px" }}>
          <div style={{ "display": "flex", "justifyContent": "space-between", "alignItems": "flex-end", "gap": "24px", "flexWrap": "wrap", "marginBottom": "40px" }}>
            <div style={{ "maxWidth": "640px" }}>
              <span className="mono" style={{ "fontSize": "13px", "color": "#255BD9" }}>
                CHOOSE YOUR GATE
              </span>
              <h2 className="disp" style={{ "margin": "10px 0 0", "fontSize": "53px", "lineHeight": "1", "fontWeight": "700" }}>
                {"Six gates. Pick "}
                <em className="acc" style={{ "color": "#255BD9" }}>
                  yours.
                </em>
              </h2>
            </div>
            <p style={{ "margin": "0", "maxWidth": "400px", "color": "#4D555E", "fontSize": "16px", "lineHeight": "1.6" }}>
              Everyone walks in with the same question: “Can I really go?” Every gate starts with an honest look at your papers, your budget and your timeline.
            </p>
          </div>
          <div className="g2">
            {(v.journeys || []).map((j, __i6) => (
              <Fragment key={__i6}>
                <div className="shadow lift">
                  <article className="tkt-h" style={{ "background": "#FFFFFF", "borderRadius": "22px", "display": "flex", "minHeight": "230px" }}>
                    <div style={{ "flex": "1 1 auto", "minWidth": "0", "padding": "26px 28px", "display": "flex", "flexDirection": "column", "gap": "14px" }}>
                      <div style={{ "display": "flex", "alignItems": "center", "gap": "12px" }}>
                        <span style={{ "width": "44px", "height": "44px", "borderRadius": "12px", "display": "grid", "placeItems": "center", "background": j.tint, "color": "#0F1518" }} aria-hidden="true">
                          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d={j.icon}></path>
                          </svg>
                        </span>
                        <span className="mono" style={{ "fontSize": "12px", "color": "#4D555E" }}>
                          {j.kicker}
                        </span>
                      </div>
                      <h3 className="disp" style={{ "margin": "0", "fontSize": "28px", "fontWeight": "700" }}>
                        {j.title}
                      </h3>
                      <p style={{ "margin": "0", "color": "#4D555E", "fontSize": "15px", "lineHeight": "1.6" }}>
                        {j.body}
                      </p>
                      <div style={{ "display": "flex", "flexWrap": "wrap", "gap": "6px", "marginTop": "auto" }}>
                        {(j.tags || []).map((tg, __i12) => (
                          <Fragment key={__i12}>
                            <span className="chip" style={{ "background": "#EEF3FD", "color": "#0F1518" }}>
                              {tg}
                            </span>
                          </Fragment>
                        ))}
                      </div>
                    </div>
                    <div className="perf-v" style={{ "flex": "0 0 150px", "padding": "22px 18px", "display": "flex", "flexDirection": "column", "justifyContent": "space-between", "alignItems": "center", "background": j.tint }}>
                      <div style={{ "textAlign": "center" }}>
                        <div className="mono" style={{ "fontSize": "11px" }}>
                          GATE
                        </div>
                        <div className="disp" style={{ "fontSize": "41px", "fontWeight": "700", "lineHeight": "1" }}>
                          {j.gate}
                        </div>
                      </div>
                      <a href={j.link} className="btn" style={{ "background": "#0F1518", "color": "#fff", "minHeight": "44px", "padding": "0 16px", "fontSize": "14px" }}>
                        {j.cta}
                      </a>
                    </div>
                  </article>
                </div>
              </Fragment>
            ))}
          </div>
        </section>
        <section id="destinations" style={{ "paddingTop": "96px", "paddingBottom": "40px" }}>
          <div className="wrap">
            <div style={{ "display": "flex", "justifyContent": "space-between", "alignItems": "flex-end", "gap": "24px", "flexWrap": "wrap", "marginBottom": "40px" }}>
              <div style={{ "maxWidth": "640px" }}>
                <span className="mono" style={{ "fontSize": "13px", "color": "#255BD9" }}>
                  TICKETS OUT OF LAGOS
                </span>
                <h2 className="disp" style={{ "margin": "10px 0 0", "fontSize": "53px", "lineHeight": "1", "fontWeight": "700" }}>
                  {"Pick a ticket. We’ll handle "}
                  <em className="acc" style={{ "color": "#255BD9" }}>
                    the rest.
                  </em>
                </h2>
              </div>
              <svg aria-hidden="true" width="300" height="60" viewBox="0 0 300 60">
                <path d="M10 50 Q150 -20 290 50" fill="none" stroke="#255BD9" strokeWidth="2" className="march"></path>
                <circle cx="10" cy="50" r="6" fill="#0F1518"></circle>
                <circle cx="290" cy="50" r="6" fill="#FD6886"></circle>
              </svg>
            </div>
            <div className="g3">
              {(v.dests || []).map((d, __i7) => (
                <Fragment key={__i7}>
                  <div className="shadow lift">
                    <article className="tkt-v" style={{ "background": "#FFFFFF", "borderRadius": "22px", "overflow": "hidden" }}>
                      <div style={{ "height": "214px", "position": "relative", "padding": "20px 22px", "background": d.bg, "color": "#fff", "display": "flex", "flexDirection": "column", "justifyContent": "space-between" }}>
                        <div style={{ "display": "flex", "justifyContent": "space-between", "alignItems": "flex-start" }}>
                          <span className="mono" style={{ "fontSize": "12px", "background": "rgba(10,22,48,.35)", "padding": "6px 10px", "borderRadius": "999px" }}>
                            {d.country}
                          </span>
                          {d.selected ? (
                            <>
                              {" "}
                              <span className="mono stamp" style={{ "fontSize": "11px", "fontWeight": "700", "border": "2px solid #fff", "padding": "6px 10px", "borderRadius": "8px" }}>
                                ON YOUR PASS
                              </span>
                              {" "}
                            </>
                          ) : null}
                        </div>
                        <div style={{ "position": "absolute", "right": "18px", "bottom": "16px", "opacity": ".9" }} aria-hidden="true">
                          {d.isCH ? (
                            <>
                              <svg width="140" height="92" viewBox="0 0 120 80" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinejoin="round">
                                <path d="M0 78 L38 32 L50 44 L70 8 L94 48 L104 38 L120 56"></path>
                                <path d="M62 22 L70 8 L78 24 L70 20 Z" fill="#fff"></path>
                              </svg>
                            </>
                          ) : null}
                          {" "}
                          {d.isUK ? (
                            <>
                              <svg width="140" height="92" viewBox="0 0 120 80" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinejoin="round">
                                <path d="M50 78 V22 H70 V78"></path>
                                <path d="M48 22 L60 4 L72 22"></path>
                                <circle cx="60" cy="34" r="6"></circle>
                                <path d="M60 34 V30 M60 34 H63"></path>
                                <path d="M50 50 H70 M50 64 H70"></path>
                                <path d="M0 78 H120"></path>
                              </svg>
                            </>
                          ) : null}
                          {" "}
                          {d.isFR ? (
                            <>
                              <svg width="140" height="92" viewBox="0 0 120 80" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinejoin="round">
                                <path d="M42 78 L56 34 L58 6 L62 6 L64 34 L78 78"></path>
                                <path d="M49 78 Q60 58 71 78"></path>
                                <path d="M52 50 H68 M55 34 H65"></path>
                              </svg>
                            </>
                          ) : null}
                          {" "}
                          {d.isTH ? (
                            <>
                              <svg width="140" height="92" viewBox="0 0 120 80" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinejoin="round">
                                <path d="M34 78 V62 H86 V78"></path>
                                <path d="M42 62 Q60 18 78 62"></path>
                                <path d="M60 30 V4"></path>
                                <path d="M50 46 H70"></path>
                                <path d="M0 78 H120"></path>
                              </svg>
                            </>
                          ) : null}
                          {" "}
                          {d.isSG ? (
                            <>
                              <svg width="140" height="92" viewBox="0 0 120 80" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinejoin="round">
                                <path d="M30 78 V30 H44 V78 M53 78 V30 H67 V78 M76 78 V30 H90 V78"></path>
                                <path d="M22 26 L100 21 L100 27 L22 31 Z"></path>
                                <path d="M0 78 H120"></path>
                              </svg>
                            </>
                          ) : null}
                          {" "}
                          {d.isIT ? (
                            <>
                              <svg width="140" height="92" viewBox="0 0 120 80" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinejoin="round">
                                <path d="M10 78 V40 Q60 22 110 40 V78"></path>
                                <path d="M10 54 Q60 40 110 54 M10 66 H110"></path>
                                <path d="M26 78 V68 M42 78 V68 M58 78 V68 M74 78 V68 M90 78 V68"></path>
                              </svg>
                            </>
                          ) : null}
                        </div>
                        <div>
                          <div className="disp" style={{ "fontSize": "60px", "fontWeight": "700", "lineHeight": "1.02" }}>
                            {d.code}
                          </div>
                          <div style={{ "fontSize": "15px", "fontWeight": "600" }}>
                            {d.city}
                          </div>
                        </div>
                      </div>
                      <div className="perf-h" style={{ "padding": "20px 22px 22px", "display": "flex", "flexDirection": "column", "gap": "16px" }}>
                        <div className="mono" style={{ "display": "grid", "gridTemplateColumns": "repeat(3, minmax(0,1fr))", "gap": "8px", "fontSize": "11px", "color": "#4D555E" }}>
                          <div>
                            FROM
                            <div style={{ "fontSize": "15px", "color": "#0F1518", "fontWeight": "700" }}>
                              LOS
                            </div>
                          </div>
                          <div>
                            FOR
                            <div style={{ "fontSize": "15px", "color": "#0F1518", "fontWeight": "700" }}>
                              {d.forWhat}
                            </div>
                          </div>
                          <div>
                            FARE
                            <div style={{ "fontSize": "15px", "color": "#0F1518", "fontWeight": "700" }}>
                              On request
                            </div>
                          </div>
                        </div>
                        <p style={{ "margin": "0", "color": "#4D555E", "fontSize": "14px", "lineHeight": "1.55" }}>
                          {d.blurb}
                        </p>
                        <div style={{ "display": "flex", "alignItems": "center", "gap": "14px" }}>
                          <div className="barcode" style={{ "flex": "1 1 auto" }} aria-hidden="true"></div>
                          <a href="#book" onClick={d.pick} className="btn" style={{ "background": "#FD6886", "color": "#0F1518", "minHeight": "44px", "padding": "0 18px", "fontSize": "14px" }}>
                            Book this route
                          </a>
                        </div>
                      </div>
                    </article>
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
        </section>
        <section style={{ "marginTop": "96px", "background": "#0F1518", "color": "#fff", "padding": "96px 0" }}>
          <div className="wrap">
            <div style={{ "display": "flex", "justifyContent": "space-between", "alignItems": "flex-end", "gap": "24px", "flexWrap": "wrap", "marginBottom": "40px" }}>
              <div style={{ "maxWidth": "640px" }}>
                <span className="mono" style={{ "fontSize": "13px", "color": "#FD6886" }}>
                  BEYOND THE FLIGHT
                </span>
                <h2 className="disp" style={{ "margin": "10px 0 0", "fontSize": "53px", "lineHeight": "1", "fontWeight": "700" }}>
                  {"A trip is more than a "}
                  <em className="acc" style={{ "color": "#FD6886" }}>
                    seat number
                  </em>
                </h2>
              </div>
              <p style={{ "margin": "0", "maxWidth": "380px", "color": "#AEB7BF", "fontSize": "16px", "lineHeight": "1.6" }}>
                {"We plan the things you’ll actually talk about when you get home. "}
                <Link href="/experiences" style={{ "color": "#FD6886", "fontWeight": "600" }}>
                  See all seven events
                </Link>
              </p>
            </div>
            <div className="g3">
              {(v.experiences || []).map((x, __i7) => (
                <Fragment key={__i7}>
                  <article className="lift" style={{ "background": "#1A2228", "border": "1px solid #2A343B", "borderRadius": "22px", "padding": "28px", "display": "flex", "flexDirection": "column", "gap": "14px", "minHeight": "260px" }}>
                    <span className="mono" style={{ "fontSize": "12px", "color": "#86D5FF" }}>
                      {x.tag}
                    </span>
                    <h3 className="disp" style={{ "margin": "0", "fontSize": "26px", "fontWeight": "700" }}>
                      {x.title}
                    </h3>
                    <p style={{ "margin": "0", "color": "#AEB7BF", "fontSize": "15px", "lineHeight": "1.6" }}>
                      {x.body}
                    </p>
                  </article>
                </Fragment>
              ))}
            </div>
            <div style={{ "marginTop": "36px", "display": "flex", "flexWrap": "wrap", "gap": "10px", "alignItems": "center" }}>
              <span className="mono" style={{ "fontSize": "12px", "color": "#9AA5AF", "marginRight": "6px" }}>
                OUTDOOR ACTIVITIES
              </span>
              {(v.activities || []).map((a, __i7) => (
                <Fragment key={__i7}>
                  <span className="chip" style={{ "background": "#222C33", "color": "#fff" }}>
                    {a}
                  </span>
                </Fragment>
              ))}
            </div>
          </div>
        </section>
        <section id="varsity" className="wrap" style={{ "paddingTop": "96px", "paddingBottom": "40px" }}>
          <div className="g2" style={{ "alignItems": "center", "gap": "56px" }}>
            <div style={{ "display": "flex", "flexDirection": "column", "gap": "18px" }}>
              <span className="mono" style={{ "fontSize": "13px", "color": "#255BD9" }}>
                FLYMATAS VARSITY
              </span>
              <h2 className="disp" style={{ "margin": "0", "fontSize": "53px", "lineHeight": "1", "fontWeight": "700" }}>
                {"Become the agent people "}
                <em className="acc" style={{ "color": "#255BD9" }}>
                  trust
                </em>
              </h2>
              <p style={{ "margin": "0", "color": "#4D555E", "fontSize": "17px", "lineHeight": "1.6" }}>
                Too many travellers have lost money to fake agents. Flymatas Aviation Varsity trains the next generation of Nigerian travel professionals on the exact work we do every day: reservations, visa files, cabin crew prep and running an agency.
              </p>
              <div style={{ "display": "flex", "flexWrap": "wrap", "gap": "12px" }}>
                <a className="btn" href="https://flymatasvarsity.com" style={{ "background": "#255BD9", "color": "#fff" }}>
                  Visit the Aviation Varsity
                </a>
              </div>
            </div>
            <ol style={{ "listStyle": "none", "margin": "0", "padding": "0", "display": "grid", "gridTemplateColumns": "repeat(2, minmax(0,1fr))", "gap": "14px" }}>
              {(v.courses || []).map((c, __i7) => (
                <Fragment key={__i7}>
                  <li className="lift" style={{ "background": "#FFFFFF", "border": "1px solid #E3E8F2", "borderRadius": "18px", "padding": "18px", "display": "flex", "flexDirection": "column", "gap": "10px" }}>
                    <span className="disp" style={{ "fontSize": "18px", "fontWeight": "700", "lineHeight": "1.2" }}>
                      {c.name}
                    </span>
                  </li>
                </Fragment>
              ))}
            </ol>
          </div>
        </section>
        <section className="wrap" style={{ "paddingTop": "96px", "paddingBottom": "40px" }}>
          <span className="mono" style={{ "fontSize": "13px", "color": "#255BD9" }}>
            WHY FLYMATAS
          </span>
          <h2 className="disp" style={{ "margin": "10px 0 40px", "fontSize": "53px", "lineHeight": "1", "fontWeight": "700", "maxWidth": "760px" }}>
            {"Why travellers keep "}
            <em className="acc" style={{ "color": "#255BD9" }}>
              coming back
            </em>
          </h2>
          <div className="g3">
            {(v.features || []).map((f, __i6) => (
              <Fragment key={__i6}>
                <div style={{ "borderTop": "2px solid #0F1518", "paddingTop": "18px", "display": "flex", "flexDirection": "column", "gap": "8px" }}>
                  <h3 className="disp" style={{ "margin": "0", "fontSize": "22px", "fontWeight": "700" }}>
                    {f.title}
                  </h3>
                  <p style={{ "margin": "0", "color": "#4D555E", "fontSize": "15px", "lineHeight": "1.6" }}>
                    {f.body}
                  </p>
                </div>
              </Fragment>
            ))}
          </div>
        </section>
        <section id="guides" className="wrap" style={{ "paddingTop": "96px", "paddingBottom": "40px" }}>
          <div style={{ "display": "flex", "justifyContent": "space-between", "alignItems": "flex-end", "gap": "24px", "flexWrap": "wrap", "marginBottom": "36px" }}>
            <div style={{ "maxWidth": "640px" }}>
              <span className="mono" style={{ "fontSize": "13px", "color": "#255BD9" }}>
                FREE TRAVEL GUIDES
              </span>
              <h2 className="disp" style={{ "margin": "10px 0 0", "fontSize": "53px", "lineHeight": "1", "fontWeight": "700" }}>
                {"Free guides. No "}
                <em className="acc" style={{ "color": "#255BD9" }}>
                  gatekeeping.
                </em>
              </h2>
            </div>
            <p style={{ "margin": "0", "maxWidth": "400px", "color": "#4D555E", "fontSize": "16px", "lineHeight": "1.6" }}>
              What our consultants tell clients across the desk, written down for free: exams, Canada routes and Schengen basics.
            </p>
          </div>
          <div className="g3">
            {(v.reports || []).map((r, __i6) => (
              <Fragment key={__i6}>
                {" "}
                <a href={r.url} className="lift" style={{ "textDecoration": "none", "background": "#FFFFFF", "border": "1px solid #E3E8F2", "borderRadius": "18px", "padding": "22px", "display": "flex", "gap": "16px", "alignItems": "flex-start", "color": "#0F1518" }}>
                  <span style={{ "flex": "0 0 auto", "width": "44px", "height": "56px", "borderRadius": "6px 14px 6px 6px", "background": r.tint, "display": "grid", "placeItems": "center" }} aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0F1518" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 4v11M7 10l5 5 5-5M5 20h14"></path>
                    </svg>
                  </span>
                  <span style={{ "display": "flex", "flexDirection": "column", "gap": "6px" }}>
                    <span className="mono" style={{ "fontSize": "11px", "color": "#4D555E" }}>
                      {r.tag}
                    </span>
                    <span className="disp" style={{ "fontSize": "18px", "fontWeight": "700", "lineHeight": "1.25" }}>
                      {r.title}
                    </span>
                  </span>
                </a>
                {" "}
              </Fragment>
            ))}
          </div>
        </section>
        <section className="wrap" style={{ "paddingTop": "96px", "paddingBottom": "40px" }}>
          <div style={{ "display": "flex", "justifyContent": "space-between", "alignItems": "flex-end", "gap": "24px", "flexWrap": "wrap", "marginBottom": "36px" }}>
            <div style={{ "maxWidth": "640px" }}>
              <span className="mono" style={{ "fontSize": "13px", "color": "#255BD9" }}>
                {"NEWS & BLOG"}
              </span>
              <h2 className="disp" style={{ "margin": "10px 0 0", "fontSize": "53px", "lineHeight": "1.02", "fontWeight": "700" }}>
                {"Latest from "}
                <em className="acc" style={{ "color": "#255BD9" }}>
                  Flymatas
                </em>
              </h2>
            </div>
            <Link className="btn" href="/news" style={{ "background": "#0F1518", "color": "#fff" }}>
              {"All news & posts"}
            </Link>
          </div>
          <div className="g3">
            <Link href="/news" className="lift" style={{ "textDecoration": "none", "color": "#0F1518", "background": "#FFFFFF", "border": "1px solid #E3E8F2", "borderRadius": "22px", "overflow": "hidden", "display": "flex", "flexDirection": "column" }}>
              <img src="/assets/scholarships.jpg" alt="" loading="lazy" style={{ "display": "block", "width": "100%", "aspectRatio": "16 / 10", "objectFit": "cover", "objectPosition": "70% 35%" }} />
              <span style={{ "padding": "20px 22px 24px", "display": "flex", "flexDirection": "column", "gap": "8px" }}>
                <span className="mono" style={{ "fontSize": "11px", "color": "#255BD9" }}>
                  NEWS
                </span>
                <span className="disp" style={{ "fontSize": "26px", "lineHeight": "1.05" }}>
                  Legit scholarships abroad: join our free WhatsApp group
                </span>
              </span>
            </Link>
            <Link href="/news" className="lift" style={{ "textDecoration": "none", "color": "#0F1518", "background": "#FFFFFF", "border": "1px solid #E3E8F2", "borderRadius": "22px", "overflow": "hidden", "display": "flex", "flexDirection": "column" }}>
              <img src="/assets/canada-pr.jpg" alt="" loading="lazy" style={{ "display": "block", "width": "100%", "aspectRatio": "16 / 10", "objectFit": "cover", "objectPosition": "center 30%" }} />
              <span style={{ "padding": "20px 22px 24px", "display": "flex", "flexDirection": "column", "gap": "8px" }}>
                <span className="mono" style={{ "fontSize": "11px", "color": "#255BD9" }}>
                  CANADA
                </span>
                <span className="disp" style={{ "fontSize": "26px", "lineHeight": "1.05" }}>
                  Canada PR through Express Entry and PNP is not difficult
                </span>
              </span>
            </Link>
            <Link href="/news" className="lift" style={{ "textDecoration": "none", "color": "#0F1518", "background": "#FFFFFF", "border": "1px solid #E3E8F2", "borderRadius": "22px", "overflow": "hidden", "display": "flex", "flexDirection": "column" }}>
              <img src="/assets/schengen.jpg" alt="" loading="lazy" style={{ "display": "block", "width": "100%", "aspectRatio": "16 / 10", "objectFit": "cover", "objectPosition": "center 55%" }} />
              <span style={{ "padding": "20px 22px 24px", "display": "flex", "flexDirection": "column", "gap": "8px" }}>
                <span className="mono" style={{ "fontSize": "11px", "color": "#255BD9" }}>
                  VISA
                </span>
                <span className="disp" style={{ "fontSize": "26px", "lineHeight": "1.05" }}>
                  Schengen visit visa: what we handle for you
                </span>
              </span>
            </Link>
          </div>
        </section>
        <section id="about" className="wrap" style={{ "paddingTop": "96px", "paddingBottom": "40px" }}>
          <div className="g2" style={{ "gap": "32px" }}>
            <div style={{ "background": "#255BD9", "color": "#fff", "borderRadius": "26px", "padding": "36px", "display": "flex", "flexDirection": "column", "gap": "20px" }}>
              <span className="mono" style={{ "fontSize": "13px", "color": "#FDFDFA" }}>
                WHO WE ARE
              </span>
              <h2 className="disp" style={{ "margin": "0", "fontSize": "41px", "lineHeight": "1.05", "fontWeight": "700" }}>
                {"Born in Nigeria. Built for "}
                <em className="acc" style={{ "color": "#FDFDFA" }}>
                  the world.
                </em>
              </h2>
              <p style={{ "margin": "0", "color": "#E6EDFF", "fontSize": "16px", "lineHeight": "1.65" }}>
                {"Flymatas Travels & Tours is a premier travel and tourism business for leisure travel, study abroad and work abroad. Our team of travel enthusiasts and industry professionals takes care of every detail, from seamless logistics to personalised itineraries. We are managed by Flymatas Business Management Consult, one of Nigeria’s leading business management consulting firms."}
              </p>
              <div style={{ "display": "flex", "flexWrap": "wrap", "gap": "8px" }}>
                <span className="chip" style={{ "background": "rgba(255,255,255,.16)", "color": "#fff" }}>
                  Safety first, always
                </span>
                <span className="chip" style={{ "background": "rgba(255,255,255,.16)", "color": "#fff" }}>
                  {"Low price & friendly"}
                </span>
                <span className="chip" style={{ "background": "rgba(255,255,255,.16)", "color": "#fff" }}>
                  Trusted travel guide
                </span>
              </div>
              <div style={{ "marginTop": "auto", "display": "flex", "alignItems": "center", "gap": "14px", "paddingTop": "18px", "borderTop": "1px solid rgba(255,255,255,.25)" }}>
                <img src="/assets/founder-portrait.jpg" alt="Ayorinde Alex" style={{ "width": "64px", "height": "64px", "borderRadius": "50%", "objectFit": "cover", "objectPosition": "42% 14%", "background": "#8C9091", "flex": "0 0 auto", "border": "2px solid rgba(255,255,255,.6)" }} />
                <span>
                  <span style={{ "display": "block", "fontWeight": "600" }}>
                    Ayorinde Alex
                  </span>
                  <span style={{ "fontSize": "14px", "color": "#DCE6FA" }}>
                    Founder, Flymatas
                  </span>
                </span>
              </div>
            </div>
            <div style={{ "display": "flex", "flexDirection": "column", "gap": "20px" }}>
              {(v.voices || []).map((v, __i7) => (
                <Fragment key={__i7}>
                  <figure className="lift" style={{ "margin": "0", "background": "#FFFFFF", "border": "1px solid #E3E8F2", "borderRadius": "22px", "padding": "28px", "position": "relative", "display": "flex", "flexDirection": "column", "gap": "16px" }}>
                    <svg className="dip" aria-hidden="true" width="120" height="26" viewBox="0 0 120 26">
                      <path d="M0 -1 H120 V0 C92 0 86 24 60 24 C34 24 28 0 0 0 Z" fill="#FDFDFA"></path>
                      <path d="M0 0 C28 0 34 24 60 24 C86 24 92 0 120 0" fill="none" stroke="#E3E8F2" strokeWidth="1"></path>
                    </svg>
                    <span className="mono stamp" style={{ "position": "absolute", "top": "40px", "right": "22px", "fontSize": "11px", "fontWeight": "700", "color": "#255BD9", "border": "2px solid #255BD9", "borderRadius": "8px", "padding": "5px 9px" }}>
                      {"ARRIVED · "}{v.place}
                    </span>
                    <blockquote className="disp" style={{ "margin": "0", "fontSize": "22px", "fontWeight": "700", "lineHeight": "1.25", "maxWidth": "66%" }}>
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
          </div>
        </section>
        <section id="contact" className="wrap" style={{ "paddingTop": "96px", "paddingBottom": "40px" }}>
          <span className="mono" style={{ "fontSize": "13px", "color": "#255BD9" }}>
            OUR TERMINALS
          </span>
          <h2 className="disp" style={{ "margin": "10px 0 36px", "fontSize": "53px", "lineHeight": "1", "fontWeight": "700" }}>
            {"Four terminals. Real offices, "}
            <em className="acc" style={{ "color": "#255BD9" }}>
              real people.
            </em>
          </h2>
          <div className="g4">
            {(v.offices || []).map((o, __i6) => (
              <Fragment key={__i6}>
                <address className="lift" style={{ "fontStyle": "normal", "background": "#FFFFFF", "border": "1px solid #E3E8F2", "borderRadius": "20px", "padding": "22px", "display": "flex", "flexDirection": "column", "gap": "12px" }}>
                  <span style={{ "display": "flex", "justifyContent": "space-between", "alignItems": "center" }}>
                    <span className="mono" style={{ "fontSize": "11px", "color": "#4D555E" }}>
                      TERMINAL
                    </span>
                    <span className="mono" style={{ "fontSize": "12px", "fontWeight": "700", "background": "#0F1518", "color": "#86D5FF", "padding": "4px 8px", "borderRadius": "6px" }}>
                      {o.code}
                    </span>
                  </span>
                  <span className="disp" style={{ "fontSize": "26px", "fontWeight": "700" }}>
                    {o.city}
                  </span>
                  <span style={{ "color": "#4D555E", "fontSize": "14px", "lineHeight": "1.55" }}>
                    {o.addr}
                  </span>
                </address>
              </Fragment>
            ))}
          </div>
          <div style={{ "marginTop": "24px", "display": "flex", "flexWrap": "wrap", "gap": "12px" }}>
            <a className="btn" href="tel:+2347033221729" style={{ "background": "#0F1518", "color": "#fff" }}>
              Call +234 703 322 1729
            </a>
            <a className="btn" href="mailto:info@flymatas.com" style={{ "background": "#FFFFFF", "color": "#0F1518", "border": "1px solid #CFD6E4" }}>
              info@flymatas.com
            </a>
            <a className="btn" href="mailto:bookings@flymatas.com" style={{ "background": "#FFFFFF", "color": "#0F1518", "border": "1px solid #CFD6E4" }}>
              bookings@flymatas.com
            </a>
          </div>
        </section>
        <footer style={{ "marginTop": "96px", "background": "#0F1518", "color": "#fff", "padding": "80px 0 36px", "position": "relative", "overflow": "hidden" }}>
          <div className="wrap" style={{ "display": "flex", "flexDirection": "column", "gap": "56px" }}>
            <div style={{ "display": "flex", "justifyContent": "space-between", "alignItems": "flex-end", "gap": "32px", "flexWrap": "wrap" }}>
              <div>
                <span className="mono" style={{ "fontSize": "13px", "color": "#FD6886" }}>
                  FINAL CALL
                </span>
                <h2 className="disp" style={{ "margin": "12px 0 0", "fontSize": "68px", "lineHeight": "1.02", "fontWeight": "700" }}>
                  Final call for
                  <br />
                  {"passenger: "}
                  <em className="acc" style={{ "color": "#FD6886" }}>
                    you.
                  </em>
                </h2>
              </div>
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
                  Flymatas Varsity
                </Link>
                <Link href="/guides" style={{ "color": "#fff" }}>
                  Free guides
                </Link>
                <Link href="/news" style={{ "color": "#fff" }}>
                  {"News & blog"}
                </Link>
              </nav>
              <nav aria-label="Follow us" style={{ "display": "flex", "flexDirection": "column", "gap": "10px", "fontSize": "14px" }}>
                <span className="mono" style={{ "fontSize": "11px", "color": "#9AA5AF" }}>
                  FOLLOW
                </span>
                <a href="https://www.facebook.com/flymatas" style={{ "color": "#fff" }}>
                  Facebook
                </a>
                <a href="https://www.instagram.com/flymatas" style={{ "color": "#fff" }}>
                  Instagram
                </a>
                <a href="https://x.com/flymatas" style={{ "color": "#fff" }}>
                  X
                </a>
                <a href="https://www.youtube.com/@flymatas" style={{ "color": "#fff" }}>
                  YouTube
                </a>
                <a href="https://vm.tiktok.com/ZMk4sWchU/" style={{ "color": "#fff" }}>
                  TikTok
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
                {"© 2026 Flymatas Travels & Tours. All rights reserved."}
              </span>
              <span style={{ "display": "flex", "gap": "18px" }}>
                <Link href="/404" style={{ "color": "#9AA5AF" }} prefetch={false}>
                  Privacy policy
                </Link>
                <a href="#" style={{ "color": "#9AA5AF" }}>
                  Terms
                </a>
              </span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
