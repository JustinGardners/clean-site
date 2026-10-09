import Alpine from "alpinejs";
import { links } from "./accountNavLinks";

// Example x-data component: <div x-data="counter">
Alpine.data("account", () => ({
  links,
}));
