import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
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
    <header className="bg-background border-border">
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

          {/* Bloc de droite : Toggles + Burger (Sheet) */}
          <div className="flex items-center gap-2 sm:w-40 sm:justify-end">
            <ToggleMode />
            <ToggleLanguage />

            {/* Bouton burger avec Sheet - visible uniquement sur mobile */}
            <div className="sm:hidden">
              <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-foreground hover:text-muted-foreground hover:bg-accent"
                  >
                    {isMenuOpen ? (
                      <X className="h-5 w-5" />
                    ) : (
                      <Menu className="h-5 w-5" />
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  showCloseButton={false}
                  className="bg-background text-foreground border-border"
                >
                  <SheetHeader>
                    <SheetTitle className="sr-only">Menu</SheetTitle>
                    <SheetDescription className="sr-only">
                      Navigation links
                    </SheetDescription>
                  </SheetHeader>
                  <div className="flex flex-col space-y-2 mt-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block py-3 px-4 text-foreground hover:text-muted-foreground hover:bg-accent rounded-md transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
