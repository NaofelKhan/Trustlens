"use client";
import {Outfit, Montserrat} from 'next/font/google';
import { Mail, Phone, MapPin, HelpCircle } from "lucide-react";




const montserrat = Montserrat({ subsets: ['latin'], weight: '300' });
const outfit = Outfit({ subsets: ['latin'], weight: '500' });
export default function ContactBento() {
  return (
    <div className="min-h-screen bg-gradient-to-br p-6">
      <div className="max-w-6xl mx-auto grid gap-6">
        
        {/* Top Grid: Contact Info + Form */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Left - Contact Info */}
          <div className="col-span-1 rounded-2xl p-6 border border-[#701CF5]">
            <h2 className={`${outfit.className} text-xl font-semibold mb-4`}>Get in Touch</h2>
            <p className={`text-sm text-[#797979] mb-6 ${montserrat.className}`}>
              We’re here to help you with any questions or support requests.
            </p>

            <div className="space-y-4">
              <div className={`flex items-start gap-3`}>
                <Mail size={18} />
                <div>
                  <p className={`${outfit.className}`}>Email Support</p>
                  <p className={`${montserrat.className} text-sm text-[#797979]`}>support@domain.com</p>
                </div>
              </div>

              <div className={`flex items-start gap-3`}>
                <Phone size={18} />
                <div>
                  <p className={`${outfit.className}`}>Phone Support</p>
                  <p className={`${montserrat.className} text-sm text-[#797979]`}>+1 (555) 123-4567</p>
                  <p className={`${montserrat.className} text-sm text-[#797979]`}>Mon–Fri, 9am–5pm EST</p>
                </div>
              </div>

              <div className={`flex items-start gap-3 ${montserrat.className}`}>
                <MapPin size={18} />
                <div>
                  <p className={`${outfit.className}`}>Office</p>
                  <p className="text-sm text-[#797979]">
                    1234 Example Street, Dhaka, Bangladesh
                  </p>
                </div>
              </div>

              <div className={`flex items-start gap-3`}>
                <HelpCircle size={18} />
                <div>
                  <p className={`${outfit.className}`}>Common Issues</p>
                  <ul className={`text-sm text-[#797979] list-disc list-inside ${montserrat.className}`}>
                    <li>Technical Issues</li>
                    <li>Service Complaints</li>
                    <li>Feature Requests</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="col-span-2 rounded-2xl border border-[#701CF5] p-6">
            <h2 className={`${outfit.className} text-lg font-semibold mb-4`}>Send us a Message</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className={`w-full rounded-lg bg-white/10 border border-white/30 p-3 text-sm focus:outline-none focus:ring-1 focus:ring-purple-400 shadow-md ${montserrat.className}`}
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className={`w-full rounded-lg bg-white/10 border border-white/30 p-3 text-sm focus:outline-none focus:ring-1 focus:ring-purple-400 shadow-md ${montserrat.className}`}
                />
              </div>

              <select className={`w-full rounded-lg bg-white/10 border border-white/30 p-3 text-sm focus:outline-none focus:ring-1 focus:ring-purple-400 shadow-md ${montserrat.className}`}>
                <option className={`${montserrat.className}`}>Select the type of issue</option>
                <option className={`${montserrat.className}`}>Technical Issue</option>
                <option className={`${montserrat.className}`}>Billing</option>
                <option className={`${montserrat.className}`}>Feature Request</option>
              </select>

              <input
                type="text"
                placeholder="Subject"
                className={`w-full rounded-lg bg-white/10 border border-white/30 p-3 text-sm focus:outline-none focus:ring-1 focus:ring-purple-400 shadow-md ${montserrat.className}`}
              />

              <textarea
                placeholder="Message"
                rows={4}
                className={`w-full rounded-lg bg-white/10 border border-white/30 p-3 text-sm focus:outline-none focus:ring-1 focus:ring-purple-400 shadow-md ${montserrat.className}`}
              ></textarea>

              <button
                type="submit"
                className={`w-full py-3 rounded-lg bg-gradient-to-r from-[#701CF5] to-[#108F80] text-white font-semibold hover:opacity-90 transition ${montserrat.className}`}
              >
                Send a message
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Grid: FAQ */}
        <div className="rounded-2xl border border-[#701CF5] p-6">
          <h2 className={`${outfit.className} text-lg font-semibold mb-6`}>Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className={`${outfit.className} font-medium mb-1`}>How accurate is your AI analysis?</h3>
              <p className={`${montserrat.className} text-sm text-[#797979]`}>
                Our AI achieves 92% accuracy by analyzing historical trends & reviews.
              </p>
            </div>
            <div>
              <h3 className={`${outfit.className} font-medium mb-1`}>Is the service free to use?</h3>
              <p className={`${montserrat.className} text-sm text-[#797979]`}>
                Yes! We offer free features, with Premium plans for advanced analytics.
              </p>
            </div>
            <div>
              <h3 className={`${outfit.className} font-medium mb-1`}>How often are prices updated?</h3>
              <p className={`${montserrat.className} text-sm text-[#797979]`}>
                Prices refresh every 30 minutes to keep you informed with real-time data.
              </p>
            </div>
            <div>
              <h3 className={`${outfit.className} font-medium mb-1`}>How do price alerts work?</h3>
              <p className={`${montserrat.className} text-sm text-[#797979]`}>
                Set custom targets, and our system alerts you via email or push notifications.
              </p>
            </div>
            <div>
              <h3 className={`${outfit.className} font-medium mb-1`}>Can I trust the review sources?</h3>
              <p className={`${montserrat.className} text-sm text-[#797979]`}>
                Yes, we aggregate from verified platforms and cross-check for authenticity.
              </p>
            </div>
            <div>
              <h3 className={`${outfit.className} font-medium mb-1`}>Can I request new features?</h3>
              <p className={`${montserrat.className} text-sm text-[#797979]`}>
                Absolutely! We welcome suggestions and prioritize based on user feedback.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
