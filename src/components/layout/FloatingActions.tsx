import { MessageCircle, Phone } from 'lucide-react';
import { BRAND } from '@/lib/constants';

export default function FloatingActions() {
  return (
    <div className="floating-actions" aria-label="Quick contact options">
      <a href={BRAND.phoneHref} className="floating-actions__call"><Phone size={17} /> Call Now</a>
      <a href={BRAND.whatsapp} target="_blank" rel="noopener" className="floating-actions__whatsapp"><MessageCircle size={17} /> WhatsApp</a>
    </div>
  );
}
