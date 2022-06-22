import {
  Navbar,
  HeroSection,
  DownloadSection,
  FeaturesSection,
  FAQsSection,
  FooterSection,
  NewsletterSection,
} from "./Components";
function App() {
  return (
    <div className='App'>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <DownloadSection />
      <FAQsSection />
      <NewsletterSection />
      <FooterSection />
    </div>
  );
}

export default App;
