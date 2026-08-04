import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar } from "lucide-react";
import XIcon from "@/components/icons/x-icon";
import SendIcon from "@/components/icons/send-icon";
import { toast } from "sonner";
import { Button } from "./Button";
import { GlassCard } from "./GlassCard";

interface ServiceInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceTitle: string;
}

export function ServiceInquiryModal({ isOpen, onClose, serviceTitle }: ServiceInquiryModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      service: serviceTitle,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Inquiry sent successfully! I'll get back to you soon.");
        (e.target as HTMLFormElement).reset();
        onClose();
      } else {
        const errorData = await response.json();
        toast.error(errorData.error || "Failed to send inquiry. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative w-full max-w-lg z-10"
          >
            <GlassCard className="p-6 sm:p-8 flex flex-col gap-6 max-h-[90vh] overflow-y-auto">
              <button
                onClick={onClose}
                className="absolute top-6 right-6 text-foreground/50 hover:text-foreground transition-colors"
              >
                <XIcon size={20} />
              </button>

              <div>
                <h3 className="text-2xl font-bold font-heading mb-2">Discuss your project</h3>
                {/* <p className="text-foreground/70 text-sm">
                  Inquiring about: <span className="font-semibold text-foreground">{serviceTitle}</span>
                </p> */}
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label htmlFor="inquiry-name" className="block text-sm font-medium text-foreground/80 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="inquiry-name"
                    name="name"
                    required
                    className="w-full bg-foreground/5 border border-foreground/10 rounded-none px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="inquiry-email" className="block text-sm font-medium text-foreground/80 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="inquiry-email"
                    name="email"
                    required
                    className="w-full bg-foreground/5 border border-foreground/10 rounded-none px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="inquiry-message" className="block text-sm font-medium text-foreground/80 mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="inquiry-message"
                    name="message"
                    required
                    rows={4}
                    className="w-full bg-foreground/5 border border-foreground/10 rounded-none px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all resize-none"
                    placeholder="Tell me about your requirements..."
                  />
                </div>

                <Button type="submit" variant="primary" className="w-full mt-2 gap-2" disabled={isSubmitting}>
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Inquiry <SendIcon size={16} />
                    </>
                  )}
                </Button>
              </form>

              <div className="relative flex items-center py-2">
                <div className="flex-grow border-t border-foreground/10"></div>
                <span className="flex-shrink-0 mx-4 text-foreground/40 text-sm">or</span>
                <div className="flex-grow border-t border-foreground/10"></div>
              </div>

              <Button variant="ghost" className="w-full gap-2" data-cal-link="notyogi" onClick={onClose}>
                Schedule a Meeting <Calendar size={16} />
              </Button>

            </GlassCard>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
