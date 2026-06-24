export default function Home() {
  return (
    <main>
      <header className="header container">
        <div className="logo">
          <img src="/logo_orbit.jpeg" alt="Orbit API Logo" width="40" height="40" style={{ borderRadius: '8px', objectFit: 'cover' }} />
          Orbit<span>API</span>
        </div>
      </header>

      <section className="hero container">
        <div className="badge">Official Android Release v3.0.1</div>
        <h1>
          The Ultimate WhatsApp<br />
          Business CRM
        </h1>
        <p>
          Transform your customer support and marketing with Orbit API. 
          Manage conversations, organize leads with custom labels, and automate 
          replies directly from your mobile device.
        </p>
        <a href="/OrbitAPI_Sikandar_v3.0.1.apk" download className="btn btn-primary">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          Download for Android (APK)
        </a>
      </section>

      <section className="features container">
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            <h3>Smart Inbox</h3>
            <p>Manage all your customer conversations in one unified inbox with read receipts, multimedia support, and voice notes.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                <line x1="7" y1="7" x2="7.01" y2="7"></line>
              </svg>
            </div>
            <h3>Custom CRM Labels</h3>
            <p>Organize your clients effortlessly. Create unlimited custom-colored labels to track leads, payments, and VIP customers.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
            <h3>Bot Automation</h3>
            <p>Save hours of manual work. Setup automated keyword-based replies and interactive WhatsApp menus for instant customer service.</p>
          </div>
        </div>
      </section>

      <footer className="footer container">
        <p>© 2026 Orbit API. All rights reserved.</p>
      </footer>
    </main>
  );
}
