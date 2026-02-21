import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ExitIntentModal from "@/components/ExitIntentModal";
import TrustBar from "@/components/TrustBar";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Story from "./pages/Story";
import Work from "./pages/Work";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/process" element={<Story />} />
          <Route path="/results" element={<Work />} />
          <Route path="/insights" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          {/* Redirects from old routes */}
          <Route path="/story" element={<Navigate to="/process" replace />} />
          <Route path="/work" element={<Navigate to="/results" replace />} />
          <Route path="/blog" element={<Navigate to="/insights" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <ExitIntentModal />
        <TrustBar />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
