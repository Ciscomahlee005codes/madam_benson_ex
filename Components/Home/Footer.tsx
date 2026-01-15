import {
  Mail,
  Phone,
  ShieldCheck,
  Twitter,
  Send,
  Instagram,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(255,255,255,0.06),_transparent)]" />

      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-10">

        {/* TOP */}
        <div className="grid gap-14 md:grid-cols-4">

          {/* Brand */}
          <div>
            <h3 className="text-2xl font-semibold tracking-wide">
              Madam<span className="text-amber-400">Benson</span>
            </h3>

            <p className="mt-4 text-gray-400 leading-relaxed max-w-sm">
              A secure and trusted platform for buying and selling cryptocurrency
              and gift cards with speed and transparency.
            </p>

            {/* Trust badge */}
            <div className="mt-6 flex items-center gap-2 text-sm text-emerald-400">
              <ShieldCheck size={18} />
              <span>Secure & Trusted Platform</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-5">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              {[
                ['Market', '#market'],
                ['Trade', '#trade'],
                ['Testimonials', '#testimonials'],
                ['FAQ', '#faq'],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="hover:text-white transition"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-5">Legal</h4>
            <ul className="space-y-3 text-gray-400">
              {[
                'Privacy Policy',
                'Terms of Service',
                'Risk Disclosure',
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-5">Contact</h4>

            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3">
                <Mail size={18} />
                support@madambenson.com
              </li>

              <li className="flex items-center gap-3">
                <Phone size={18} />
                +234 800 000 0000
              </li>

              <li className="text-sm text-emerald-400">
                24/7 Customer Support
              </li>
            </ul>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-16 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Copyright */}
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Madam Benson Exchange. All rights reserved.
          </p>

          {/* Socials */}
          <div className="flex items-center gap-4">
            {[
              { icon: Twitter, label: 'Twitter' },
              { icon: Send, label: 'Telegram' },
              { icon: Instagram, label: 'Instagram' },
            ].map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="
                  p-3 rounded-full
                  border border-white/10
                  bg-white/5 backdrop-blur
                  text-gray-400
                  hover:text-white hover:border-white/30
                  hover:-translate-y-1
                  transition-all
                "
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
