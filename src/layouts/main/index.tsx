import { Outlet } from "react-router";
import NavBar from "./navbar";
import SocialLinks from "./social-links";
import HeroEmail from "./hero-email";
import { Helmet } from "react-helmet";

export default function MainLayout() {
  return (
    <>
      <Helmet>
        <title>Kaarlo Sasiang | Portfolio</title>
        <meta name="description" content="Portfolio website of Kaarlo Sasiang, showcasing projects, experience, and skills." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/src/assets/logo.png" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Kaarlo Sasiang | Portfolio" />
        <meta property="og:description" content="Portfolio website of Kaarlo Sasiang, showcasing projects, experience, and skills." />
        <meta property="og:image" content="/metadata-banner.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-domain.com/" />
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kaarlo Sasiang | Portfolio" />
        <meta name="twitter:description" content="Portfolio website of Kaarlo Sasiang, showcasing projects, experience, and skills." />
        <meta name="twitter:image" content="/metadata-banner.png" />
      </Helmet>
      <div className="min-h-screen bg-foreground">
        <NavBar />
        <Outlet />
        <SocialLinks />
        <HeroEmail />
      </div>
    </>
  );
}
