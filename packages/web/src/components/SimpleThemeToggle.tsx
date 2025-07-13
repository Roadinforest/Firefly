import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { Button } from "./ui/button";
import { useTranslation } from "react-i18next";

export function SimpleThemeToggle() {
  const { theme, setTheme } = useTheme();
  const { t } = useTranslation();

  const toggleTheme = () => {
    console.log("Current theme:", theme);
    if (theme === "light") {
      console.log("Switching to dark");
      setTheme("dark");
    } else {
      console.log("Switching to light");
      setTheme("light");
    }
  };

  return (
    <Button 
      size="icon" 
      onClick={toggleTheme}
      title={t('theme.toggleTheme')}
    >
      {theme === "light" ? (
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      )}
    </Button>
  );
} 