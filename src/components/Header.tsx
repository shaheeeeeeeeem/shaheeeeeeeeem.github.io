import { AFFILIATION, EMAIL, GITHUB_URL, LINKEDIN_URL, NAME } from '../content'

export default function Header() {
  const links = [
    { label: 'GitHub', href: GITHUB_URL },
    { label: 'Email', href: EMAIL ? `mailto:${EMAIL}` : '' },
    { label: 'LinkedIn', href: LINKEDIN_URL },
  ]

  return (
    <header className="masthead">
      <h1>{NAME}</h1>
      <p className="affiliation">{AFFILIATION}</p>
      <ul className="contact">
        {links.map((link) => (
          <li key={link.label}>
            {link.href ? (
              <a href={link.href}>{link.label}</a>
            ) : (
              <span className="pending">{link.label}</span>
            )}
          </li>
        ))}
      </ul>
    </header>
  )
}
