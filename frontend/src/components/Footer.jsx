import React from 'react';

export default function Footer() {
    return (
        <div className="px-4 pb-24 pt-8">
            <div className="bg-white dark:bg-[#1a2232] rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 p-6 mb-8">
                <h3 className="text-sm border-b border-slate-100 dark:border-slate-800 pb-3 font-bold text-slate-900 dark:text-white mb-4">LawConnect Corporate</h3>

                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary shadow-sm">
                            <span className="material-symbols-outlined text-[20px]">call</span>
                        </div>
                        <div>
                            <p className="text-[10px] uppercase font-bold tracking-wider text-slate-500 dark:text-slate-400">Phone Support (24/7)</p>
                            <a href="tel:+18005550199" className="text-sm font-black text-slate-900 dark:text-white">+1 (800) 555-0199</a>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary shadow-sm">
                            <span className="material-symbols-outlined text-[20px]">mail</span>
                        </div>
                        <div>
                            <p className="text-[10px] uppercase font-bold tracking-wider text-slate-500 dark:text-slate-400">General Inquiries</p>
                            <a href="mailto:support@lawconnect.com" className="text-sm font-black text-slate-900 dark:text-white">support@lawconnect.com</a>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary shadow-sm">
                            <span className="material-symbols-outlined text-[20px]">location_on</span>
                        </div>
                        <div>
                            <p className="text-[10px] uppercase font-bold tracking-wider text-slate-500 dark:text-slate-400">Headquarters</p>
                            <p className="text-xs font-semibold text-slate-900 dark:text-white">123 Legal Avenue, Suite 400<br />New York, NY 10001</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-4 text-center">
                <p className="text-[10px] text-slate-400 dark:text-slate-600 leading-relaxed mb-2 font-medium">
                    LawConnect does not provide legal advice. All services are provided by independent licensed lawyers.
                </p>
                <p className="text-[10px] text-slate-500 dark:text-slate-500 font-bold">
                    &copy; {new Date().getFullYear()} LawConnect Inc. All rights reserved.
                </p>
            </div>
        </div>
    );
}
