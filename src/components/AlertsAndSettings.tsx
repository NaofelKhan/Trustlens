"use client";

import { useState } from "react";
import { Bell, Mail, Smartphone, MessageSquare } from "lucide-react";
import {Montserrat,Outfit} from 'next/font/google'



const montserrat = Montserrat({ subsets: ['latin'], weight: '300' });
const outfit = Outfit({ subsets: ['latin'], weight: '500' });

export default function AlertsAndSettings() {
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [pushAlerts, setPushAlerts] = useState(false);
  const [smsAlerts, setSmsAlerts] = useState(true);

  return (
    <div className="mt-40 flex items-center justify-cente p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full">
        {/* Recent Alerts */}
        <div className="rounded-2xl bg-white/20 backdrop-blur-lg pr-4 pl-4 shadow-lg pb-4">
          <h2 className={`${outfit.className} text-lg font-semibold mt-4 mb-2 flex items-center gap-2`}>
            <Bell size={18} /> Recent Alerts
          </h2>

          <div className={`space-y-4 ${montserrat.className}`}>
            <div className="py-3 rounded-xl border border-black bg-white/10">
                <div className="pr-60 pl-2">
                    <p className="font-medium text-black">iPhone 15 Pro</p>
                    <p className="text-sm text-[#797979]">
                        Price dropped to $999 (target: $899)
                    </p>
                    <span className="text-xs text-[#797979]">2 hours ago</span>
                </div>
            </div>

            <div className="p-3 rounded-xl border border-black bg-white/10">
              <p className="font-medium text-black">MacBook Air M3</p>
              <p className="text-sm text-[#797979]">
                Target price reached $1099
              </p>
              <span className="text-xs text-[#797979]">1 day ago</span>
            </div>

            <div className="p-3 rounded-xl border border-black bg-white/10">
              <p className="font-medium text-black">Sony WH-1000XM5</p>
              <p className="text-sm text-[#797979]">Price increased by 15%</p>
              <span className="text-xs text-[#797979]">3 days ago</span>
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="rounded-2xl bg-white/20 backdrop-blur-lg p-4 shadow-lg border border-white/20">
          <h2 className={`${outfit.className} text-lg font-semibold mb-4 flex items-center gap-2`}>
            <Mail size={18} /> Notification Settings
          </h2>

          <div className={`${montserrat.className} space-y-4`}>
            {/* Email Alerts */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Mail size={18} /> <span>Email Alerts</span>
              </div>
              <input
                type="checkbox"
                checked={emailAlerts}
                onChange={() => setEmailAlerts(!emailAlerts)}
                className="toggle-checkbox"
              />
            </div>

            {/* Push Notification */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Smartphone size={18} /> <span>Push Notification</span>
              </div>
              <input
                type="checkbox"
                checked={pushAlerts}
                onChange={() => setPushAlerts(!pushAlerts)}
                className="toggle-checkbox"
              />
            </div>

            {/* SMS Alerts */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MessageSquare size={18} /> <span>SMS Alerts</span>
              </div>
              <input
                type="checkbox"
                checked={smsAlerts}
                onChange={() => setSmsAlerts(!smsAlerts)}
                className="toggle-checkbox"
              />
            </div>

            {/* Dropdown */}
            <div>
              <label className="text-sm font-medium">Alert Frequency</label>
              <select className="mt-1 w-full rounded-lg bg-white/10 border border-white/30 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400">
                <option className={`${montserrat.className}`}>Instant</option>
                <option className={`${montserrat.className}`}>Hourly</option>
                <option className={`${montserrat.className}`}>Daily</option>
                <option className={`${montserrat.className}`}>Weekly</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
