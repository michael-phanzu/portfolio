import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ToggleLanguage from "@/components/ToggleLanguage";
import ToggleMode from "../ToggleMode";

export function Header() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: t("header.home"), href: "#home" },
    { name: t("header.about"), href: "#about" },
    { name: t("header.skills"), href: "#skills" },
    { name: t("header.projects"), href: "#projects" },
    { name: t("header.contact"), href: "#contact" },
  ];

  return (
    <header className="bg-background border-border relative z-50">
      <nav className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between p-4">
          {/* Logo à gauche */}
          <div className="w-20 sm:w-40">
            <a
              href="/"
              className="text-lg sm:text-xl font-bold text-foreground hover:text-muted-foreground transition-colors"
            >
              MP
            </a>
          </div>

          {/* Navigation desktop - centrée */}
          <div className="hidden sm:flex sm:space-x-4 md:space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-muted-foreground font-medium transition-colors text-sm md:text-base"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Bloc de droite : Toggles + Burger */}
          <div className="flex items-center gap-2 sm:w-40 sm:justify-end">
            <ToggleMode />
            <ToggleLanguage />

            {/* Bouton burger - visible uniquement sur mobile */}
            <div className="sm:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-foreground hover:text-muted-foreground hover:bg-accent relative z-50"
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Menu mobile plein écran avec animation de glisse */}
      <div
        className={`
          fixed inset-0 z-40 sm:hidden
          transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Fond flou et transparent */}
        <div className="absolute inset-0 bg-background/80 backdrop-blur-md" />

        {/* Contenu du menu - liens taille normale */}
        <div className="relative h-full">
          <div className="h-full overflow-y-auto">
            <div className="flex flex-col items-center justify-start pt-20 px-4">
              <div className="space-y-4 w-full max-w-sm">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block py-2 px-4 text-center text-foreground hover:text-muted-foreground hover:bg-accent/50 rounded-md transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}

                {/* Toggles dans le menu mobile */}
                <div className="flex justify-center gap-4 pt-6">
                  <ToggleMode />
                  <ToggleLanguage />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
