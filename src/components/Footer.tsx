import { EMAIL, GITHUB_URL, LINKEDIN_URL, NAME } from '../content'

export default function Footer() {
  const links = [
    { label: 'GitHub', href: GITHUB_URL },
    { label: 'Email', href: EMAIL ? `mailto:${EMAIL}` : '' },
    { label: 'LinkedIn', href: LINKEDIN_URL },
  ].filter((link) => link.href)

  return (
    <footer className="footer">
      {links.length > 0 && (
        <div className="footer-links">
          {links.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      )}
      <div>
        {NAME} {'\u00b7'} {new Date().getFullYear()}
      </div>
    </footer>
  )
}
