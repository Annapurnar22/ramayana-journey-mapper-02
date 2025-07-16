
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import MapPage from "@/pages/Map";
import TripPlanner from "@/pages/TripPlanner";
import Resources from "@/pages/Resources";
import ImmersiveView from "@/pages/ImmersiveView";
import CultureArts from "@/pages/CultureArts";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Header />
          <div className="flex-1 pt-[68px] bg-white">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/immersive" element={<ImmersiveView />} />
              <Route path="/map" element={<MapPage />} />
              <Route path="/trip-planner" element={<TripPlanner />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/culture-arts" element={<CultureArts />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
