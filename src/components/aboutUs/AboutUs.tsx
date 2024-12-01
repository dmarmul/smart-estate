import s from './AboutUs.module.css';

export const AboutUs: React.FC = () => {
  return (
    <section className={s.aboutUs} id="about-us">
      <div className="container">
        <h2 className={s.title}>About Us</h2>

        <div className={s.text}>
          <p className={s.paragraph}>
            At SmartEstate, we’re passionate about helping you find the{' '}
            <span className={s.marked}>perfect home </span>
            in the heart of Amsterdam. Whether you're searching for a cozy
            apartment by the canals or a modern family home in a vibrant
            neighborhood, we’re here to guide you every step of the way.
          </p>
          <p className={s.paragraph}>
            Our team of local real estate experts combines in-depth knowledge of
            Amsterdam's dynamic property market with a commitment to
            personalized service. We understand that finding the right home is
            more than just a transaction — it’s about finding a place where you
            can truly belong.
          </p>
          <p className={s.paragraph}>
            With a <span className={s.marked}>wide range</span> of listings,
            from trendy lofts to charming historic properties, we offer
            something for every lifestyle and budget. Our{' '}
            <span className={s.marked}>
              user-friendly platform, neighborhood insights,
            </span>{' '}
            and
            <span>exclusive market updates</span> ensure you're always one step
            ahead in your property search.
          </p>
        </div>
      </div>
    </section>
  );
};
