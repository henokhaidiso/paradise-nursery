import { Link } from 'react-router-dom';

export default function AboutUs() {
  return (
    <main className="page-shell">
      <section className="about-hero">
        <div>
          <p className="eyebrow">OUR ROOTS</p>
          <h1>A little more green.<br /><em>A lot more life.</em></h1>
          <p>At Paradise Nursery, we believe plants do more than decorate a room. They bring calm, character, and a connection to the natural world.</p>
          <Link to="/plants" className="button">Explore our plants <span>→</span></Link>
        </div>
        <img src="https://images.unsplash.com/photo-1497250681960-ef046c08a56e" alt="Sunlit collection of indoor plants" />
      </section>
      <section className="about-values">
        <div><span>01</span><h2>Chosen with care</h2><p>We feature a considered selection of houseplants for different spaces, styles, and experience levels.</p></div>
        <div><span>02</span><h2>Room to grow</h2><p>Our goal is to make plant ownership feel welcoming, simple, and rewarding.</p></div>
        <div><span>03</span><h2>Greener living</h2><p>We celebrate the small daily joy of caring for something living.</p></div>
      </section>
    </main>
  );
}