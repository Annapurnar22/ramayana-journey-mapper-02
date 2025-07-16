
const Footer = () => (
  <footer className="bg-gradient-to-r from-orange-100 via-orange-50 to-sky-100 border-t border-orange-200 py-5 mt-12">
    <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-orange-800 text-sm">
      <span>
        &copy; {new Date().getFullYear()} Ramayana Journeys &middot; Inspired by <a href="https://artsandculture.google.com/story/8gWB7ABpntvssA?hl=en" target="_blank" rel="noopener noreferrer" className="underline text-sky-700 hover:text-sky-900">Google Arts & Culture</a>
      </span>
      <nav className="flex gap-4 mt-2 md:mt-0">
        <a href="https://www.valmikiramayan.net/" target="_blank" rel="noopener noreferrer" className="hover:underline">Valmiki Ramayana</a>
        <a href="https://en.wikipedia.org/wiki/Ramayana" target="_blank" rel="noopener noreferrer" className="hover:underline">Wikipedia</a>
        <a href="https://www.makemytrip.com/promos/holidays-pilgrimage-20072022.html" target="_blank" rel="noopener noreferrer" className="hover:underline">Inspired by MakeMyTrip</a>
      </nav>
    </div>
  </footer>
);

export default Footer;
