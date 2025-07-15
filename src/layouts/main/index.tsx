import { Outlet } from "react-router";
import NavBar from "./navbar";
import SocialLinks from "./social-links";
import HeroEmail from "./hero-email";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-foreground">
      <NavBar />
      <Outlet />
      <SocialLinks />
      <HeroEmail />
    </div>
  );
}
