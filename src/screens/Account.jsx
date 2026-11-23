"use client";

import { Fragment, useState } from 'react';
import Link from 'next/link';

// Screen converted from the Account design. State and derived values mirror the design's logic.
const INITIAL_STATE = Object.assign({ menu: false }, {"tab": "login"});

class Logic {
  constructor(state, setState, props) {
    this.state = state;
    this.setState = setState;
    this.props = props || {};
  }

  
  extra(s) {
    const tabsBase = [["login", "Log in"], ["register", "Create account"]].map(([id, label]) => ({ label, on: s.tab === id ? 'true' : 'false', bg: s.tab === id ? '#0F1518' : 'transparent', fg: s.tab === id ? '#FFFFFF' : '#0F1518', pick: () => this.setState({ tab: id }) }));
    return { tabs: tabsBase, isLogin: s.tab === 'login', isRegister: s.tab === 'register' };
  }
  renderVals() {
    const s = this.state;
    const base = { menuOpen: s.menu, toggleMenu: () => this.setState({ menu: !s.menu }) };
    return Object.assign(base, {}, this.extra(s));
  }
}

export default function AccountScreen(props) {
  const [state, setRaw] = useState(INITIAL_STATE);
  const setState = (patch) => setRaw((s) => ({ ...s, ...(typeof patch === 'function' ? patch(s) : patch) }));
  const v = new Logic(state, setState, props).renderVals();
  return (
    <>
      <div className="mapbg" style={{ "width": "100%", "overflowX": "hidden" }}>
        <section style={{ "minHeight": "100vh", "display": "flex", "flexWrap": "wrap" }}>
          <div style={{ "background": "linear-gradient(180deg,#255BD9 0%,#2F66E0 55%,#3A70E3 100%)", "flex": "1 1 520px", "position": "relative", "overflow": "hidden", "padding": "28px 40px 60px", "display": "flex", "flexDirection": "column", "justifyContent": "space-between", "minHeight": "640px" }}>
            <Link href="/" aria-label="Flymatas home" style={{ "display": "flex", "alignItems": "center", "textDecoration": "none", "position": "relative", "zIndex": "4" }}>
              <img src="/assets/lockup-white.png" alt="Flymatas" style={{ "height": "40px", "width": "auto", "display": "block" }} />
            </Link>
            <div className="cloud drift-a" aria-hidden="true" style={{ "width": "200px", "height": "50px", "top": "160px", "left": "8%", "opacity": ".7" }}></div>
            <div className="flight" aria-hidden="true" style={{ "top": "240px", "zIndex": "2" }}>
              <div className="bob">
                <div className="trail" style={{ "top": "22px" }}></div>
                <svg width="220" height="74" viewBox="0 0 240 80" style={{ "display": "block", "overflow": "visible" }}>
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
            <div style={{ "position": "relative", "zIndex": "4", "display": "flex", "flexDirection": "column", "gap": "14px" }}>
              <h1 className="disp" style={{ "margin": "0", "color": "#fff", "fontSize": "69px", "lineHeight": "1.02" }}>
                {"Your trips, all in "}
                <em className="acc" style={{ "color": "#FDFDFA" }}>
                  one place.
                </em>
              </h1>
              <p style={{ "margin": "0", "color": "#F1F5FF", "fontSize": "17px", "lineHeight": "1.6", "maxWidth": "460px" }}>
                Track your visa file, upload documents, see your bookings and message your consultant, all from your account.
              </p>
            </div>
          </div>
          <div style={{ "flex": "1 1 480px", "padding": "60px 40px", "display": "flex", "alignItems": "center", "justifyContent": "center" }}>
            <div style={{ "width": "100%", "maxWidth": "440px", "display": "flex", "flexDirection": "column", "gap": "24px" }}>
              <div role="tablist" aria-label="Account" style={{ "display": "flex", "gap": "6px", "background": "#EEF3FD", "padding": "5px", "borderRadius": "999px" }}>
                {(v.tabs || []).map((t, __i8) => (
                  <Fragment key={__i8}>
                    <button type="button" role="tab" aria-selected={t.on} onClick={t.pick} style={{ "flex": "1 1 0", "border": "0", "cursor": "pointer", "minHeight": "44px", "borderRadius": "999px", "font": "600 15px 'Outfit', sans-serif", "background": t.bg, "color": t.fg }}>
                      {t.label}
                    </button>
                  </Fragment>
                ))}
              </div>
              {v.isLogin ? (
                <>
                  <form aria-label="Log in" style={{ "display": "flex", "flexDirection": "column", "gap": "18px" }}>
                    <h2 className="disp" style={{ "margin": "0", "fontSize": "45px", "lineHeight": "1.02" }}>
                      {"Welcome "}
                      <em className="acc" style={{ "color": "#255BD9" }}>
                        back
                      </em>
                    </h2>
                    <div>
                      <label className="lbl" htmlFor="l-email">
                        Email or phone
                      </label>
                      <input id="l-email" className="input" type="text" autoComplete="username" />
                    </div>
                    <div>
                      <label className="lbl" htmlFor="l-pass">
                        Password
                      </label>
                      <input id="l-pass" className="input" type="password" autoComplete="current-password" />
                    </div>
                    <Link href="/404" style={{ "fontSize": "14px", "color": "#255BD9", "alignSelf": "flex-end" }} prefetch={false}>
                      Forgot password?
                    </Link>
                    <Link className="btn" href="/account/trips" style={{ "background": "#0F1518", "color": "#fff" }}>
                      Log in
                    </Link>
                  </form>
                </>
              ) : null}
              {v.isRegister ? (
                <>
                  <form aria-label="Create account" style={{ "display": "flex", "flexDirection": "column", "gap": "18px" }}>
                    <h2 className="disp" style={{ "margin": "0", "fontSize": "45px", "lineHeight": "1.02" }}>
                      {"Get your "}
                      <em className="acc" style={{ "color": "#255BD9" }}>
                        boarding pass
                      </em>
                    </h2>
                    <div>
                      <label className="lbl" htmlFor="r-name">
                        Full name
                      </label>
                      <input id="r-name" className="input" type="text" autoComplete="name" />
                    </div>
                    <div>
                      <label className="lbl" htmlFor="r-phone">
                        WhatsApp number
                      </label>
                      <input id="r-phone" className="input" type="tel" autoComplete="tel" placeholder="+234" />
                    </div>
                    <div>
                      <label className="lbl" htmlFor="r-email">
                        Email
                      </label>
                      <input id="r-email" className="input" type="email" autoComplete="email" />
                    </div>
                    <div>
                      <label className="lbl" htmlFor="r-pass">
                        Password
                      </label>
                      <input id="r-pass" className="input" type="password" autoComplete="new-password" />
                    </div>
                    <Link className="btn" href="/account/trips" style={{ "background": "#FD6886", "color": "#0F1518" }}>
                      Create account
                    </Link>
                    <p style={{ "margin": "0", "fontSize": "13px", "color": "#4D555E", "lineHeight": "1.5" }}>
                      By creating an account you agree to the Flymatas terms and privacy policy.
                    </p>
                  </form>
                </>
              ) : null}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
