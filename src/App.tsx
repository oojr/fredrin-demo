import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'about'>('home')

  return (
    <>
      <header className="nav-header">
        <div className="nav-brand">
          <img src={reactLogo} height="24" width="24" alt="React Logo" />
          <span>Developer Portfolio</span>
        </div>
        <nav className="nav-links">
          <button
            className={`nav-btn ${activeTab === 'home' ? 'active' : ''}`}
            onClick={() => setActiveTab('home')}
          >
            Home
          </button>
          <button
            className={`nav-btn ${activeTab === 'about' ? 'active' : ''}`}
            onClick={() => setActiveTab('about')}
          >
            About Me
          </button>
        </nav>
      </header>

      <div className="ticks"></div>

      {activeTab === 'home' ? (
        <section id="center">
          <div className="page-badge">Mobile & Full-Stack Engineer</div>
          <h1>Building Native & Web Experiences</h1>
          <p className="page-subtitle" style={{ maxWidth: '680px' }}>
            Crafting high-performance React and React Native applications at work and in personal projects, backed by custom AI developer tools.
          </p>
          <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
            <button className="cta-btn" onClick={() => setActiveTab('about')}>
              Read About Me &rarr;
            </button>
          </div>

          <div className="grid-2" style={{ width: '100%', marginTop: '32px' }}>
            <div className="info-card">
              <svg className="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <h3 className="card-title">React & React Native Work</h3>
              <p className="card-desc">
                Delivering production mobile and web applications both professionally in engineering teams and independently in side projects.
              </p>
            </div>

            <div className="info-card">
              <svg className="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              <h3 className="card-title">Custom AI Coding Assistant</h3>
              <p className="card-desc">
                Built a bespoke AI developer tool designed specifically to streamline mobile app creation, component generation, and rapid iteration.
              </p>
            </div>
          </div>
        </section>
      ) : (
        <section className="about-container">
          <div className="about-header">
            <div className="page-badge">About Me</div>
            <h1 className="about-title">Mobile Builder, AI Innovator & Generalist</h1>
            <p className="about-lead">
              I construct modern applications across web and mobile using React & React Native, push the boundaries of productivity with custom AI tooling, and constantly expand into new paradigms like Rust.
            </p>
          </div>

          <div className="milestone-banner">
            <div className="milestone-stat">
              <span className="stat-number">1 &rarr; 5</span>
              <div className="stat-label">
                <span className="stat-heading">Substantial iOS Apps Built This Year</span>
                <span className="stat-sub">Accelerated from a single app to 5 full-featured, published native iOS projects in 12 months.</span>
              </div>
            </div>
          </div>

          <div className="grid-2">
            <div className="info-card">
              <svg className="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <h3 className="card-title">React & React Native Development</h3>
              <p className="card-desc">
                Whether collaborating in engineering environments at work or building independently, I build cross-platform mobile apps with React Native and responsive web apps with React. My focus is on crisp UI, fluid navigation, and clean state architecture.
              </p>
              <div className="tag-group">
                <span className="tag">React</span>
                <span className="tag">React Native</span>
                <span className="tag">TypeScript</span>
                <span className="tag">iOS</span>
              </div>
            </div>

            <div className="info-card">
              <svg className="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 01-2 2h-0a2 2 0 01-2-2v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <h3 className="card-title">Custom AI Tooling for Mobile</h3>
              <p className="card-desc">
                To amplify my workflow, I created my own dedicated AI coding assistant tailor-made for mobile development. It automates repetitive boilerplate, scaffolds native modules, and assists in generating fluid component structures in seconds.
              </p>
              <div className="tag-group">
                <span className="tag">AI Agents</span>
                <span className="tag">LLM Workflows</span>
                <span className="tag">Code Generation</span>
              </div>
            </div>
          </div>

          <div className="info-card" style={{ width: '100%', boxSizing: 'border-box' }}>
            <svg className="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <h3 className="card-title">Generalist Mindset & Rust Exploration</h3>
            <p className="card-desc">
              I view myself as a software generalist who adapts quickly to whatever technology best solves the problem at hand. By pairing engineering fundamentals with modern AI tooling, I seamlessly operate across multiple ecosystems—including writing high-performance systems and backend utilities in <strong>Rust</strong>.
            </p>
            <div className="code-box">
              <span className="cmt">// Leveraging Rust + AI for core system extensions</span>{'\n'}
              <span className="kw">fn</span> <span className="fn">main</span>() {'{\n'}
              {'    '}<span className="kw">let</span> engineer = Engineer::new(<span className="str">"Generalist"</span>);
              {'    '}engineer.build_with_ai(&amp;[<span className="str">"React"</span>, <span className="str">"React Native"</span>, <span className="str">"Rust"</span>]);
              {'}'}
            </div>
            <div className="tag-group">
              <span className="tag">Rust</span>
              <span className="tag">Polyglot</span>
              <span className="tag">AI-Assisted Dev</span>
              <span className="tag">Systems Engineering</span>
            </div>
          </div>
        </section>
      )}

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Core Stack & Expertise</h2>
          <p>Technologies used on a daily basis</p>
          <ul>
            <li>
              <a href="https://reactnative.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                React Native
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                React & Web
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect & Follow</h2>
          <p>Find my work across the web</p>
          <ul>
            <li>
              <a href="https://github.com" target="_blank">
                <svg className="button-icon" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://x.com" target="_blank">
                <svg className="button-icon" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
