import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main className="landing">
      <div className="landing-overlay" />
      <section className="landing-content">
        <p className="eyebrow landing-eyebrow">GROW A LITTLE HAPPINESS</p>
        <h1>Bring the beauty<br />of nature <em>home.</em></h1>
        <p className="landing-copy">
          Thoughtfully selected houseplants to make your space feel calmer,
          brighter, and more alive.
        </p>
        <Link className="button button-cream" to="/plants">Get Started <span>→</span></Link>
        <div className="landing-note"><span>✳</span> A greener home starts here</div>
      </section>
      <div className="landing-bottom">
        <span>PLANTS THAT MAKE A DIFFERENCE</span>
        <span>EST. WITH LOVE · 2024</span>
      </div>
    </main>
  );
}