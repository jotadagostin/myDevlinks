import Image from "next/image";
import { ThemeToggle } from "./components/theme-toggle";
import { LinkButton } from "./components/link-button";
import { SocialIcons } from "./components/social-icons";
import links from "@/app/data/links.json";

export default function Home() {
  return (
    <main
      className="
        min-h-screen w-full bg-cover bg-center bg-no-repeat
        bg-[url('/bg-mobile-light.png')]
        dark:bg-[url('/bg-mobile-dark.png')]
        md:bg-[url('/bg-desktop-light.png')]
        dark:md:bg-[url('/bg-desktop-dark.png')]
      "
    >
      <div className="flex min-h-screen items-center justify-center px-4 py-12">
        <div className="flex w-full max-w-sm flex-col items-center gap-6">
          {/* Avatar */}
          <div className="relative h-20 w-20 overflow-hidden rounded-full ring-2 ring-[rgba(255,255,255,0.5)] [html:not(.dark)_&]:ring-[rgba(0,0,0,0.5)]">
            <Image
              src="/avatar-darkmode.png"
              alt="Foto de perfil"
              fill
              className="object-cover transition-opacity duration-300 opacity-0 dark:opacity-100"
              priority
            />
            <Image
              src="/avatar-lightmode.png"
              alt="Foto de perfil"
              fill
              className="object-cover transition-opacity duration-300 opacity-100 dark:opacity-0"
              priority
            />
          </div>

          {/* Username */}
          <p className="text-[14px] font-normal leading-6 text-[#ffffff] [html:not(.dark)_&]:text-[#000000]">
            @juliasilva
          </p>

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Links */}
          <div className="flex w-full flex-col gap-3">
            {links.map((link) => (
              <LinkButton key={link.label} href={link.url} label={link.label} />
            ))}
          </div>

          {/* Social Icons */}
          <SocialIcons />

          {/* Footer */}
          <p className="text-[14px] font-normal leading-6 text-[#ffffff] [html:not(.dark)_&]:text-[#000000]">
            Made with ❤️ by{" "}
            <a
              href="#"
              className="underline underline-offset-2 opacity-70 hover:opacity-100 transition-opacity"
            >
              Rocketseat
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
