import React from 'react';
import './index.css';
import { useCart } from './CartContext';
import Cart from './Cart';

function App() {
  const { toggleCart, addToCart, cartCount } = useCart();
  const [testiIndex, setTestiIndex] = React.useState(0);

  const testimonialsData = [
    { text: "Pre-workout fuel, post-workout recovery, or anytime energy — makhana keeps you going strong and tastes awesome.", avatar: "/icon_protein_1773162535801.png", name: "Active Lifestyle", date: "21 July, 2023" },
    { text: "Kids love the crunch, parents love the nutrition. It's an absolute win-win for the whole family's health.", avatar: "/icon_calorie_1773162551562.png", name: "Family-Friendly", date: "21 July, 2023" },
    { text: "Beat the 3 PM slump with a protein-rich snack that actually makes you feel good and keeps you productive.", avatar: "/icon_gluten_1773162586764.png", name: "Office Essential", date: "21 July, 2023" },
    { text: "It perfectly satisfies the 5 PM cravings with zero guilt, the perfect tangy taste!", avatar: "/icon_minerals_1773162607816.png", name: "Guilt-free Snacker", date: "15 August, 2023" }
  ];

  const nextTesti = () => setTestiIndex(p => (p + 1) % testimonialsData.length);
  const prevTesti = () => setTestiIndex(p => (p - 1 + testimonialsData.length) % testimonialsData.length);

  return (
    <div className="app">
      <Cart />
      {/* Navbar representing the screenshot */}
      <header className="navbar container">
        <div className="logo">SNACK<span className="brand-sa">सा</span></div>
        <nav className="nav-links">
          <a href="#products">PRODUCTS</a>
          <a href="#story">STORY</a>
          <a href="#manufacturing">MANUFACTURING</a>
          <a href="#packaging">PACKAGING</a>
        </nav>
        <div className="search-bar">
          <span className="search-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </span>
          <input type="text" placeholder="Search" />
          <span className="cart-icon" onClick={toggleCart} style={{ cursor: 'pointer', position: 'relative' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            {cartCount > 0 && (
              <span style={{ position: 'absolute', top: '-8px', right: '-8px', background: 'var(--orange)', color: 'white', borderRadius: '50%', padding: '2px 6px', fontSize: '10px', fontWeight: 'bold' }}>
                {cartCount}
              </span>
            )}
          </span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-top container">
          <div className="hero-content">
            <h1>SNACK CLEAN.<br />SNACK SMART.</h1>
            <p>Discover the power of plant-based protein with our premium roasted makhana. High in protein, low in fat, and absolutely guilt-free. The perfect snack for your active lifestyle.</p>
            <div className="hero-buttons">
              <button className="btn btn-primary"><span className="btn-icon"></span> Online Shop</button>
              <button className="btn btn-text">Get Info &rarr;</button>
            </div>
          </div>
          <div className="hero-image">
            <img src="/makhana_hero_1773162485570.png" alt="Makhana Pack" />
          </div>
        </div>

        {/* Orange Banner (Maps to Benefits) */}
        <div className="orange-banner">
          <div className="container banner-grid">
            <div className="banner-item">
              <div className="banner-icon-circle">
                <img src="/icon_protein_1773162535801.png" alt="Protein" />
              </div>
              <div className="banner-text">
                <h4>High Protein</h4>
                <p>Plant-based protein to keep you energized.</p>
              </div>
            </div>
            <div className="banner-item">
              <div className="banner-icon-circle">
                <img src="/icon_calorie_1773162551562.png" alt="Low Calorie" />
              </div>
              <div className="banner-text">
                <h4>Low Calorie</h4>
                <p>Guilt-free snacking with fewer calories.</p>
              </div>
            </div>
            <div className="banner-item">
              <div className="banner-icon-circle">
                <img src="/icon_gluten_1773162586764.png" alt="Gluten-Free" />
              </div>
              <div className="banner-text">
                <h4>Naturally Gluten-Free</h4>
                <p>Perfect for cleaner dietary choices.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SHOP YOUR WAY (Maps to Flavours Section) */}
      <section className="shop-your-way container">
        <div className="section-header">
          <h2>SHOP YOUR WAY</h2>
          <button className="btn-view-all">View All <span className="arrow-circle">&rarr;</span></button>
        </div>
        <div className="shop-grid">
          <div className="shop-pill">
            <span>Peri Peri Punch</span>
            <div className="shop-pill-img-placeholder" style={{ backgroundImage: "url('/can1.jpeg')" }}></div>
          </div>
          <div className="shop-pill">
            <span>Pudina</span>
            <div className="shop-pill-img-placeholder" style={{ backgroundImage: "url('/can2.jpeg')" }}></div>
          </div>
          <div className="shop-pill">
            <span>Tangy Tomato</span>
            <div className="shop-pill-img-placeholder" style={{ backgroundImage: "url('/can3.jpeg')" }}></div>
          </div>
          <div className="shop-pill">
            <span>Cream and Onion</span>
            <div className="shop-pill-img-placeholder" style={{ backgroundImage: "url('/can4.jpeg')" }}></div>
          </div>
          <div className="shop-pill">
            <span>Salt and Pepper</span>
            <div className="shop-pill-img-placeholder" style={{ backgroundImage: "url('/salt_pepper.jpeg')" }}></div>
          </div>
          <div className="shop-pill">
            <span>Spicy Tomato</span>
            <div className="shop-pill-img-placeholder" style={{ backgroundImage: "url('/spicy_tomato.jpeg')" }}></div>
          </div>
        </div>
      </section>

      {/* OUR MOST-LOVED SNACKS (Product Cards) */}
      <section className="most-loved-snacks">
        <div className="container">
          <div className="text-center mb-4">
            <h2>OUR MOST-LOVED SNACKS</h2>
            <p className="subtitle-sm">Tried, tasted, and trusted by thousands of healthy snackers.</p>
          </div>

          <div className="product-grid">
            <div className="product-card">
              <div className="product-img-wrap">
                <img src="/can1.jpeg" alt="Peri Peri Punch" />
              </div>
              <div className="product-info">
                <div>
                  <h4>Peri Peri Punch</h4>
                  <span className="price">$10.23</span>
                </div>
                <button className="cart-btn" onClick={() => addToCart({ id: 'p1', name: 'Peri Peri Punch', price: 10.23, image: '/can1.jpeg' })}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="product-card">
              <div className="product-img-wrap">
                <img src="/can2.jpeg" alt="Pudina" />
              </div>
              <div className="product-info">
                <div>
                  <h4>Pudina</h4>
                  <span className="price">$10.23</span>
                </div>
                <button className="cart-btn" onClick={() => addToCart({ id: 'p2', name: 'Pudina', price: 10.23, image: '/can2.jpeg' })}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="product-card">
              <div className="product-img-wrap">
                <img src="/can3.jpeg" alt="Tangy Tomato" />
              </div>
              <div className="product-info">
                <div>
                  <h4>Tangy Tomato</h4>
                  <span className="price">$10.23</span>
                </div>
                <button className="cart-btn" onClick={() => addToCart({ id: 'p3', name: 'Tangy Tomato', price: 10.23, image: '/can3.jpeg' })}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="product-card">
              <div className="product-img-wrap">
                <img src="/can4.jpeg" alt="Cream and Onion" />
              </div>
              <div className="product-info">
                <div>
                  <h4>Cream and Onion</h4>
                  <span className="price">$10.23</span>
                </div>
                <button className="cart-btn" onClick={() => addToCart({ id: 'p4', name: 'Cream and Onion', price: 10.23, image: '/can4.jpeg' })}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="product-card">
              <div className="product-img-wrap">
                <img src="/salt_pepper.jpeg" alt="Salt and Pepper" />
              </div>
              <div className="product-info">
                <div>
                  <h4>Salt and Pepper</h4>
                  <span className="price">$10.23</span>
                </div>
                <button className="cart-btn" onClick={() => addToCart({ id: 'p5', name: 'Salt and Pepper', price: 10.23, image: '/salt_pepper.jpeg' })}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="product-card">
              <div className="product-img-wrap">
                <img src="/spicy_tomato.jpeg" alt="Spicy Tomato" />
              </div>
              <div className="product-info">
                <div>
                  <h4>Spicy Tomato</h4>
                  <span className="price">$10.23</span>
                </div>
                <button className="cart-btn" onClick={() => addToCart({ id: 'p6', name: 'Spicy Tomato', price: 10.23, image: '/spicy_tomato.jpeg' })}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div >
          <div className="text-center mt-4 pt-2">
            <button className="btn-view-all center-btn">View All <span className="arrow-circle">&rarr;</span></button>
          </div>
        </div >
      </section >

      {/* HOW IT WORKS? (Quality Promise Steps) */}
      < section className="how-it-works container" >
        <h2 className="text-center mb-5">HOW IT WORKS?</h2>
        <div className="steps-container">
          <div className="step-item">
            <div className="step-icon bg-green">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22c4.97-4.43 8-9.05 8-13A8 8 0 0 0 4 9c0 3.95 3.03 8.57 8 13z"></path>
              </svg>
            </div>
            <h4>Ethical Sourcing</h4>
            <p>Partnering with Bihar farmers for the freshest lotus seeds.</p>
          </div>
          <div className="step-dots">
            <div className="dot green"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
          <div className="step-item">
            <div className="step-icon bg-orange">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
                <path d="M17 18h1"></path>
                <path d="M12 18h1"></path>
                <path d="M7 18h1"></path>
              </svg>
            </div>
            <h4>Hygienic Processing</h4>
            <p>Certified, sanitary facilities to prepare and pack.</p>
          </div>
          <div className="step-dots">
            <div className="dot orange"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
          <div className="step-item">
            <div className="step-icon bg-purple">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
            </div>
            <h4>Rigorous Quality</h4>
            <p>Careful inspection before packaging guarantees the best.</p>
          </div>
        </div>
      </section >

      {/* CREATE YOUR PERFECT SNACK BOX (Nutrition Spotlight/Comparison) */}
      < section className="perfect-box-section container" >
        <div className="perfect-box">
          <div className="perfect-box-content">
            <h2>NUTRITION WITHOUT COMPROMISE</h2>
            <p>Choose 4 to 12 of your favorite Snackसा cans and save up to 15% on your custom bundle.</p>
            <button className="btn btn-primary"><span className="btn-icon"></span> Start Bundling</button>
          </div>
          <div className="perfect-box-image-area">
            <img src="/group_snacking_1773162932336.png" className="perfect-main-img" alt="Nutrition Facts" />
            <div className="oval-badge">
              BUNDLE 8+ SNACKS & UNLOCK AN EXCLUSIVE 15% DISCOUNT!
            </div>
          </div>
        </div>
      </section >

      {/* LOVED BY SNACKERS NATIONWIDE (Testimonials map to Movement) */}
      < section className="testimonials container" >
        <h2 className="text-center mb-4">LOVED BY SNACKERS NATIONWIDE</h2>
        <div className="testimonials-track">
          <button className="nav-arrow left" onClick={prevTesti}>&larr;</button>
          <div className="testimonial-cards">
            {[0, 1, 2].map((offset) => {
              const t = testimonialsData[(testiIndex + offset) % testimonialsData.length];
              return (
                <div className="t-card" key={t.name + offset}>
                  <div className="quote-icon">❝</div>
                  <p>{t.text}</p>
                  <div className="t-user">
                    <img src={t.avatar} alt="user" className="avatar" />
                    <div>
                      <h5>{t.name}</h5>
                      <span>{t.date}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <button className="nav-arrow right" onClick={nextTesti}>&rarr;</button>
        </div>
      </section >

      {/* INFO SECTION (Replaces Story Section) */}
      < section className="info-section" >
        <div className="container">
          <div className="section-header">
            <h2>SMART SNACKING FACTS</h2>
            <button className="btn-view-all">All Facts <span className="arrow-circle">&rarr;</span></button>
          </div>
          <div className="info-grid">
            <div className="info-card featured">
              <img src="/makhana_harvest_1773162485504.png" alt="Harvest" />
              <div className="info-content">
                <h3>The Ancient Superseed Rethought</h3>
                <p>Harvested from the Euryale Ferox plant, makhana has been prized in Ayurvedic traditions for centuries. We source ours directly from Bihar to bring this ancient nutrition into your modern lifestyle.</p>
                <div className="info-footer">
                  <span className="badge">Sustainability</span>
                </div>
              </div>
            </div>

            <div className="small-info-grid">
              <div className="info-card-small">
                <img src="/makhana_vs_chips_1773162517296.png" alt="Comparison" />
                <div className="info-desc green-bg">
                  <h4>Better Than Potato Chips</h4>
                  <p>All the satisfying crunch you crave, with significantly less fat and zero deep-frying.</p>
                </div>
              </div>
              <div className="info-card-small">
                <img src="/plant_protein_new.jpeg" alt="Quality" />
                <div className="info-desc">
                  <h4>Plant-Based Protein Power</h4>
                  <p>Naturally rich in essential amino acids to fuel your body and keep you full longer.</p>
                </div>
              </div>
              <div className="info-card-small">
                <img src="/media__1773163592314.png" alt="Natural" />
                <div className="info-desc">
                  <h4>Absolutely No Junk</h4>
                  <p>Guilt-free snacking made with pure ingredients and absolutely nothing artificial.</p>
                </div>
              </div>
              <div className="info-card-small">
                <img src="/group_snacking_1773162932336.png" alt="Lifestyle" />
                <div className="info-desc">
                  <h4>Fits Any Lifestyle</h4>
                  <p>Whether you're keto, vegan, or gluten-free, Snackसा fits right into your daily routine.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* NEWSLETTER */}
      < section className="newsletter-section container" >
        <div className="newsletter-box">
          <h2>GET 15% OFF YOUR FIRST ORDER</h2>
          <p>Plus healthy snacking tips, exclusive deals, and early access to new drops.</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Type your email" />
            <button className="btn-subscribe">Subscribe Now</button>
          </div>
        </div>
      </section >

      {/* FOOTER */}
      < footer className="footer-section" >
        <div className="container footer-top">
          <div className="footer-links">
            <a href="#shop">SHOP</a>
            <a href="#about">ABOUT</a>
            <a href="#contact">CONTACT</a>
          </div>
          <div className="socials">
            <span className="sc-icon">f</span>
            <span className="sc-icon">ig</span>
            <span className="sc-icon">in</span>
          </div>
          <div className="footer-links right-align">
            <a href="#home">HOME</a>
            <a href="#shop-snacks">SHOP SNACKS</a>
            <a href="#faqs">FAQS</a>
          </div>
        </div>

        <div className="massive-logo-wrap text-center">
          <h1 className="massive-logo">SNACK<span className="brand-sa">सा</span></h1>
        </div>

        <div className="footer-bottom container">
          <p>© 2024, Snackसा Powered by Shopify</p>
          <div className="email-chip">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '8px', verticalAlign: 'middle' }}>
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            example@gmail.com
          </div>
          <div className="legal-links">
            <a href="#">Terms & Regulations</a>
            <a href="#">Privacy</a>
          </div>
        </div>
      </footer >

    </div >
  );
}

export default App;
