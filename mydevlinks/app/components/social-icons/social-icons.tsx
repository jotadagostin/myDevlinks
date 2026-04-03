import { FaGithub, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

const socials = [
  { icon: FaGithub, href: "https://github.com/", label: "GitHub" },
  { icon: FaInstagram, href: "https://instagram.com/", label: "Instagram" },
  { icon: FaYoutube, href: "https://youtube.com/", label: "YouTube" },
  { icon: FaLinkedin, href: "https://linkedin.com/", label: "LinkedIn" },
];

export function SocialIcons() {
  return (
    <div className="flex items-center justify-center gap-5">
      {socials.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="
            text-xl transition-opacity duration-200 hover:opacity-60
            text-black dark:text-white
          "
        >
          <Icon />
        </a>
      ))}
    </div>
  );
}
