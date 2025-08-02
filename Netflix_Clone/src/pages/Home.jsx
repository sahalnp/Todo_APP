import React from 'react'
import { redirect, useNavigate } from 'react-router-dom';
import { useUser } from '../hooks/Context';

export const Home = () => {
  const {setUser}=useUser()
  const navigate=useNavigate()
  const logout=()=>{
    localStorage.removeItem("auth");
    localStorage.removeItem("authExpiry");
    if (setUser) setUser(null); 
    navigate('/login', { replace: true });

  }
  return (
    <div>
      {/* Floating Icons */}
      <div className="floating-icon"></div>
      <div className="floating-icon"></div>
      <div className="floating-icon"></div>

      {/* Header */}
      <header className="header" id="header">
        <a href="#" className="logo">NETFLIX</a>
        <nav>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#series">TV Shows</a></li>
            <li><a href="#movies">Movies</a></li>
            <li><a href="#new">New & Popular</a></li>
            <li><a href="#list">My List</a></li>
          </ul>
        </nav>
        <div className="user-menu">
          <button className="profile-btn">🔍</button>
          <button className="profile-btn">🔔</button>
          <button className="profile-btn">👤</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <h1 className="hero-title">Stranger Things</h1>
          <p className="hero-description">
            When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-play" >▶ Play</button>
            <button className="btn btn-info">ℹ More Info</button>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="content-section" id="trending">
        <h2 className="section-title">Trending Now</h2>
        <div className="categories">
          <button className="category-btn active" onClick={(e) => filterContent('all', e)}>All</button>
          <button className="category-btn" onClick={(e) => filterContent('action', e)}>Action</button>
          <button className="category-btn" onClick={(e) => filterContent('comedy', e)}>Comedy</button>
          <button className="category-btn" onClick={(e) => filterContent('drama', e)}>Drama</button>
          <button className="category-btn" onClick={(e) => filterContent('horror', e)}>Horror</button>
        </div>
        <div className="movie-row" id="trending-row">
          <div className="movie-card" data-genre="action">
            <div className="movie-info">
              <div className="movie-title">The Witcher</div>
              <div className="movie-genre">Action • Fantasy</div>
            </div>
          </div>
          <div className="movie-card" data-genre="comedy">
            <div className="movie-info">
              <div className="movie-title">The Good Place</div>
              <div className="movie-genre">Comedy • Fantasy</div>
            </div>
          </div>
          <div className="movie-card" data-genre="drama">
            <div className="movie-info">
              <div className="movie-title">Crown</div>
              <div className="movie-genre">Drama • Biography</div>
            </div>
          </div>
          <div className="movie-card" data-genre="horror">
            <div className="movie-info">
              <div className="movie-title">Dark</div>
              <div className="movie-genre">Horror • Sci-Fi</div>
            </div>
          </div>
          <div className="movie-card" data-genre="action">
            <div className="movie-info">
              <div className="movie-title">Money Heist</div>
              <div className="movie-genre">Action • Crime</div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section" id="popular">
        <h2 className="section-title">Popular on Netflix</h2>
        <div className="movie-row">
          <div className="movie-card">
            <div className="movie-info">
              <div className="movie-title">Squid Game</div>
              <div className="movie-genre">Thriller • Drama</div>
            </div>
          </div>
          <div className="movie-card">
            <div className="movie-info">
              <div className="movie-title">Bridgerton</div>
              <div className="movie-genre">Romance • Drama</div>
            </div>
          </div>
          <div className="movie-card">
            <div className="movie-info">
              <div className="movie-title">Ozark</div>
              <div className="movie-genre">Crime • Drama</div>
            </div>
          </div>
          <div className="movie-card">
            <div className="movie-info">
              <div className="movie-title">The Umbrella Academy</div>
              <div className="movie-genre">Action • Adventure</div>
            </div>
          </div>
          <div className="movie-card">
            <div className="movie-info">
              <div className="movie-title">Black Mirror</div>
              <div className="movie-genre">Sci-Fi • Thriller</div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section" id="new">
        <h2 className="section-title">New Releases</h2>
        <div className="movie-row">
          <div className="movie-card">
            <div className="movie-info">
              <div className="movie-title">Wednesday</div>
              <div className="movie-genre">Comedy • Horror</div>
            </div>
          </div>
          <div className="movie-card">
            <div className="movie-info">
              <div className="movie-title">The Night Agent</div>
              <div className="movie-genre">Action • Thriller</div>
            </div>
          </div>
          <div className="movie-card">
            <div className="movie-info">
              <div className="movie-title">Ginny & Georgia</div>
              <div className="movie-genre">Comedy • Drama</div>
            </div>
          </div>
          <div className="movie-card">
            <div className="movie-info">
              <div className="movie-title">You</div>
              <div className="movie-genre">Thriller • Romance</div>
            </div>
          </div>
          <div className="movie-card">
            <div className="movie-info">
              <div className="movie-title">Cobra Kai</div>
              <div className="movie-genre">Action • Comedy</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-links">
            <div className="footer-section">
              <h3>Company</h3>
              <a href="#">About Netflix</a>
              <a href="#">Jobs</a>
              <a href="#">Press</a>
              <a href="#">Blog</a>
            </div>
            <div className="footer-section">
              <h3>Support</h3>
              <a href="#">Help Center</a>
              <a href="#">Contact Us</a>
              <a href="#">Supported Devices</a>
              <a href="#">Accessibility</a>
            </div>
            <div className="footer-section">
              <h3>Legal</h3>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
              <a href="#">Corporate Information</a>
            </div>
            <div className="footer-section">
              <h3>Connect</h3>
              <a href="#">Facebook</a>
              <a href="#">Twitter</a>
              <a href="#">Instagram</a>
              <a href="#">YouTube</a>
            </div>
          </div>
          <p style={{color: '#999', marginTop: '30px'}}>
            © 2025 Netflix Clone. This is a demo project for educational purposes.
          </p>
        </div>
      </footer>
      <button onClick={logout}>logout</button>
    </div>
  )
}

