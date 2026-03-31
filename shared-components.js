(function () {
  const NAV_HTML = `
  <nav class="navbar">
    <div class="nav-inner">
      <a href="index.html" class="nav-logo">Volunteers4<span>TonyPrest</span></a>
      <ul class="nav-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="why-volunteer.html">Why Volunteer</a></li>
        <li><a href="about.html">About the Campaign</a></li>
        <li><a href="signup.html">Volunteer Sign-Up</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
      <button class="hamburger" id="hamburger" aria-label="Open menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>
  <div class="nav-mobile-overlay" id="mobile-overlay">
    <div class="mobile-menu-header">
      <span class="mobile-logo">Volunteers4<em>TonyPrest</em></span>
      <button class="close-menu" id="close-menu" aria-label="Close menu">
        <i class="ph ph-x"></i>
      </button>
    </div>
    <nav class="mobile-nav-links">
      <a href="index.html"><span class="mobile-link-num">01</span>Home</a>
      <a href="why-volunteer.html"><span class="mobile-link-num">02</span>Why Volunteer</a>
      <a href="about.html"><span class="mobile-link-num">03</span>About the Campaign</a>
      <a href="signup.html"><span class="mobile-link-num">04</span>Volunteer Sign-Up</a>
      <a href="contact.html"><span class="mobile-link-num">05</span>Contact</a>
    </nav>
    <div class="mobile-menu-footer">
      <a href="signup.html" class="mobile-cta-btn">Register as a Volunteer</a>
    </div>
  </div>`;

  const FOOTER_HTML = `
  <footer>
    <div class="footer-inner">
      <div class="footer-top">
        <div class="footer-logo">
          Volunteers4<span>TonyPrest</span>
          <p>A grassroots people-powered movement<br>for Delta State, Nigeria</p>
        </div>
        <div class="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="why-volunteer.html">Why Volunteer</a></li>
            <li><a href="about.html">About the Campaign</a></li>
            <li><a href="signup.html">Volunteer Sign-Up</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 style="font-family:'Barlow Condensed',sans-serif;font-size:0.75rem;letter-spacing:0.15em;color:rgba(255,255,255,0.5);text-transform:uppercase;margin-bottom:1rem;">Follow the Movement</h4>
          <div class="footer-social">
            <a href="#" class="footer-social-icon" title="Facebook"><i class="ph ph-facebook-logo"></i></a>
            <a href="#" class="footer-social-icon" title="Twitter/X"><i class="ph ph-x-logo"></i></a>
            <a href="#" class="footer-social-icon" title="Instagram"><i class="ph ph-instagram-logo"></i></a>
            <a href="#" class="footer-social-icon" title="YouTube"><i class="ph ph-youtube-logo"></i></a>
            <a href="https://wa.me/2348000000000" class="footer-social-icon" title="WhatsApp"><i class="ph ph-whatsapp-logo"></i></a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2025 Volunteers4TonyPrest. All rights reserved.</p>
        <p>Website: <a href="https://volunteers4tonyprest.com">volunteers4tonyprest.com</a></p>
      </div>
    </div>
  </footer>`;

  // Inject nav before body content
  const navTarget = document.getElementById('nav-placeholder');
  if (navTarget) navTarget.outerHTML = NAV_HTML;

  const footerTarget = document.getElementById('footer-placeholder');
  if (footerTarget) footerTarget.outerHTML = FOOTER_HTML;
})();
