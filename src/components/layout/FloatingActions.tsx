import { MessageCircle } from 'lucide-react';

export default function FloatingActions() {
  return (
    <div className="floating-actions" aria-label="Quick contact options">
      <a href="/contact" className="floating-actions__whatsapp"><MessageCircle size={17} /> Enquire</a>
    </div>
  );
}
