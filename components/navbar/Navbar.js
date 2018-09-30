import Link from 'next/link';

import css from './Navbar.scss';

const Navbar = () => (
  <div className={`${css.navbar} clearfix`}>
    <div className={css.subnav}>
      <svg className={css.redAngle}><use xlinkHref="#angle"></use></svg>
      <Link href="/contact?location=anchorage"><a className={css.locationLink}>Anchorage</a></Link>
      <svg className={css.chevron}><use xlinkHref="#chevron" /></svg>
      <Link href="/contact?location=fairbanks"><a className={css.locationLink}>Fairbanks</a></Link>
      <svg className={css.chevron}><use xlinkHref="#chevron" /></svg>
      <a href="tel:1-907-563-3238">(907) 563-3238</a>
      <Link href="/contact">
        <a className={css.contactLink}>
          <svg className={css.blackAngle}><use xlinkHref="#angle"></use></svg>
          <span>Contact</span>
        </a>
      </Link>
    </div>
    <div className={css.logo}>
      <Link href="/">
        <a title="Home">
          <img src="/static/logo_trailercraft.svg" alt="TrailerCraft Logo" />
        </a>
      </Link>
    </div>
    <nav className={css.mainNav}>
      <button className={`${css.navBtn} symbol`}>
        <img src="/static/truck.png" />
        <span>Trucks</span>
        <svg className={css.dropDownIcon}><use xlinkHref="#dropDown"></use></svg>
      </button>
      <button className={`${css.navBtn} symbol`}>
        <img src="/static/bus.png" />
        <span>Busses</span>
        <svg className={css.dropDownIcon}><use xlinkHref="#dropDown"></use></svg>
      </button>
      <button className={`${css.navBtn} symbol`}>
        <img src="/static/van.png" />
        <span>Vans</span>
        <svg className={css.dropDownIcon}><use xlinkHref="#dropDown"></use></svg>
      </button>
      <button className={`${css.navBtn} symbol`}>
        <img src="/static/plow.png" />
        <span>Plows</span>
        <svg className={css.dropDownIcon}><use xlinkHref="#dropDown"></use></svg>
      </button>
      <button className={`${css.navBtn} symbol`}>
        <img src="/static/trailer.png" />
        <span>Trailers</span>
        <svg className={css.dropDownIcon}><use xlinkHref="#dropDown"></use></svg>
      </button>
      <Link href="/parts-and-services">
        <a className={css.partsAndServices}>Parts & Service</a>
      </Link>
    </nav>
  </div>
);

export default Navbar;
