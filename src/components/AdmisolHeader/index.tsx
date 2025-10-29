import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

interface NavigationItem {
  label: string;
  href?: string;
  to?: string;
  items?: NavigationItem[];
}

const navigationItems: NavigationItem[] = [
  {
    label: 'Product',
    items: [
      {
        label: 'Functies',
        items: [
          { label: 'Office', href: 'https://admisol.be/office' },
          { label: 'Stock', href: 'https://admisol.be/stock' },
          { label: 'Retail', href: 'https://admisol.be/retail' },
          { label: 'Accountancy', href: 'https://admisol.be/accountancy' },
          { label: 'Vrij beroep', href: 'https://admisol.be/vrij-beroep' },
          { label: 'Immo', href: 'https://admisol.be/immo' },
          { label: 'Elektro', href: 'https://admisol.be/elektro' },
        ]
      },
      {
        label: 'Beroep',
        items: [
          { label: 'Ondernemer', href: 'https://admisol.be/office' },
          { label: 'Accountant', href: 'https://admisol.be/accountancy' },
        ]
      }
    ]
  },
  { label: 'Peppol', href: 'https://admisol.be/product/peppol' },
  { label: 'Prijzen', href: 'https://admisol.be/prijzen' },
  { label: 'Integraties', href: 'https://admisol.be/integraties' },
  { label: 'Contact', href: 'https://admisol.be/contact' },
];

const AdmisolHeader: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className={styles.headerWrapper}>
      <header className={styles.header}>
        {/* Skip to content link */}
        <a href="#main-content" className={styles.skipLink}>
          Skip to main content
        </a>

        {/* Logo */}
        <div className={styles.logoWrapper}>
          <a href="https://admisol.be" className={styles.siteLogo} aria-label="Home page">
            <img 
              className={styles.siteLogoImage} 
              src="https://admisol.be/hs-fs/hubfs/admisol-2025.png?width=879&name=admisol-2025.png" 
              width="879" 
              alt="Admisol 2025"
              sizes="(max-width: 879px) 100vw, 879px"
            />
          </a>
        </div>

        {/* Mobile toggles */}
        <button 
          className={`${styles.navigationToggle} ${styles.searchToggle}`} 
          onClick={() => setIsSearchOpen(!isSearchOpen)}
          aria-expanded={isSearchOpen}
          aria-label="open search"
        >
          <svg className={styles.icon} aria-hidden="true" viewBox="0 0 24 24">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
          </svg>
        </button>

        <button 
          className={styles.navigationToggle} 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="main menu" 
          aria-expanded={isMobileMenuOpen}
        >
          <svg className={styles.icon} aria-hidden="true" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            ) : (
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <div className={`${styles.siteNavigationWrapper} ${isMobileMenuOpen ? styles.mobileOpen : ''}`}>
          <nav className={styles.siteNavigation} aria-label="Primary">
            <ul className={styles.menuList}>
              {navigationItems.map((item, index) => (
                <li key={index} className={`${styles.menuItem} ${item.items ? styles.hasSubmenu : ''}`}>
                  {item.items ? (
                    <>
                      <button className={styles.submenuButton}>
                        <span>{item.label}</span>
                        <svg className={styles.dropdownIcon} aria-hidden="true" viewBox="0 0 24 24">
                          <path d="M7.41 8.84L12 13.42l4.59-4.58L18 10.25l-6 6-6-6z"/>
                        </svg>
                      </button>
                      <ul className={styles.submenuList}>
                        <div className={styles.submenuColumnWrapper}>
                          {item.items.map((column, colIndex) => (
                            <li key={colIndex} className={styles.submenuColumn}>
                              <h3 className={styles.submenuColumnHeader}>{column.label}</h3>
                              <ul className={styles.submenuColumnList}>
                                {column.items?.map((subItem, subIndex) => (
                                  <li key={subIndex} className={styles.submenuItem}>
                                    {subItem.href ? (
                                      <a className={styles.submenuItemLink} href={subItem.href} target="_blank" rel="noopener noreferrer">
                                        {subItem.label}
                                      </a>
                                    ) : (
                                      <Link className={styles.submenuItemLink} to={subItem.to || '#'}>
                                        {subItem.label}
                                      </Link>
                                    )}
                                  </li>
                                ))}
                              </ul>
                            </li>
                          ))}
                        </div>
                      </ul>
                    </>
                  ) : (
                    item.href ? (
                      <a className={styles.menuItemLink} href={item.href} target="_blank" rel="noopener noreferrer">
                        {item.label}
                      </a>
                    ) : (
                      <Link className={styles.menuItemLink} to={item.to || '#'}>
                        {item.label}
                      </Link>
                    )
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Desktop Search */}
        <button 
          className={`${styles.navigationToggle} ${styles.desktopSearch}`}
          onClick={() => setIsSearchOpen(!isSearchOpen)}
          aria-expanded={isSearchOpen}
          aria-label="search"
        >
          <svg className={styles.icon} aria-hidden="true" viewBox="0 0 24 24">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
          </svg>
        </button>

        {/* CTA Buttons */}
        <div className={styles.ctaWrapper}>
          <ul className={styles.ctaList}>
            <li className={styles.ctaItem}>
              <a href="https://admisol.be/probeer-admisol-gratis" className={`${styles.cta} ${styles.ctaPrimary}`}>
                Probeer gratis
              </a>
            </li>
            <li className={styles.ctaItem}>
              <a href="https://login.admisol.be/?lng=nl" className={`${styles.cta} ${styles.ctaSecondary}`}>
                Log in
              </a>
            </li>
          </ul>
        </div>
      </header>

      {/* Search overlay */}
      {isSearchOpen && (
        <div className={styles.searchOverlay}>
          <div className={styles.searchField}>
            <form className={styles.searchForm}>
              <button className={styles.searchButton} aria-label="Search">
                <svg className={styles.icon} aria-hidden="true" viewBox="0 0 24 24">
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                </svg>
              </button>
              <input 
                className={styles.searchInput}
                placeholder="Search"
                autoComplete="off"
              />
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdmisolHeader;
