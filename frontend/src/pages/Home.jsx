import { useNavigate } from 'react-router-dom';
import { Suspense } from 'react';
import Hero3D from '../components/Hero3D';
import Footer from '../components/Footer';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="flex-1 min-h-screen">
            {/* 3D Hero Section */}
            <div className="relative w-full h-[300px] md:h-[500px] overflow-hidden bg-gradient-to-br from-[#060e1f] via-[#0b1e40] to-[#101622]">
                <Suspense fallback={<div className="w-full h-full flex items-center justify-center text-white/40 text-sm">Loading 3D Scene...</div>}>
                    <Hero3D />
                </Suspense>
                
                {/* Overlay content on top of 3D canvas */}
                <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-20 z-10 bg-gradient-to-r from-[#060e1f] via-[#060e1f]/40 to-transparent">
                    <div className="max-w-xl">
                        <span className="inline-block mb-4 px-4 py-1.5 text-xs font-bold tracking-widest uppercase bg-blue-600/80 text-white rounded-full w-fit backdrop-blur-sm border border-blue-400/30 animate-fade-in-down">
                            ✦ Verified Legal Experts
                        </span>
                        <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-4 drop-shadow-lg">
                            Trusted Legal Professionals
                        </h2>
                        <p className="text-slate-200 text-lg font-medium mb-8 max-w-md">
                            Find the right lawyer for your case with confidence and ease.
                        </p>
                        <button onClick={() => navigate('/auth')} className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-2xl transition-all hover:scale-105">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto w-full px-4 md:px-8 -mt-10 relative z-20 pb-20">
                {/* Search Bar */}
                <div className="bg-white dark:bg-[#1a2232] rounded-3xl shadow-2xl p-3 border border-slate-200 dark:border-slate-700 transition-all hover:shadow-primary/5">
                    <div className="flex flex-col md:flex-row items-center gap-4 px-4">
                        <div className="flex items-center gap-3 flex-1 h-14 w-full">
                            <span className="material-symbols-outlined text-slate-400 text-2xl">search</span>
                            <input className="w-full bg-transparent border-none text-slate-900 dark:text-white placeholder-slate-400 focus:ring-0 text-lg" placeholder="Search by case type or location" type="text" />
                        </div>
                        <div className="h-8 w-px bg-slate-200 dark:bg-slate-700 hidden md:block"></div>
                        <button className="w-full md:w-auto bg-primary text-white px-10 h-14 rounded-2xl font-bold shadow-lg hover:bg-primary-dark transition-all">
                            Search
                        </button>
                    </div>
                </div>

                {/* Practice Areas */}
                <div className="py-12">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Practice Areas</h3>
                            <p className="text-slate-500 text-sm mt-1">Select a category to find specialized help</p>
                        </div>
                        <a className="text-sm font-bold text-primary hover:underline underline-offset-4 decoration-2" href="#">View All</a>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {[
                            { icon: 'gavel', label: 'Criminal Law', color: 'bg-red-50 text-red-600 dark:bg-red-500/10' },
                            { icon: 'family_star', label: 'Family Law', color: 'bg-pink-50 text-pink-600 dark:bg-pink-500/10' },
                            { icon: 'corporate_fare', label: 'Business Law', color: 'bg-blue-50 text-blue-600 dark:bg-blue-500/10' },
                            { icon: 'real_estate_agent', label: 'Estate Planning', color: 'bg-green-50 text-green-600 dark:bg-green-500/10' },
                            { icon: 'account_balance', label: 'Civil Rights', color: 'bg-purple-50 text-purple-600 dark:bg-purple-500/10' },
                            { icon: 'work', label: 'Employment', color: 'bg-orange-50 text-orange-600 dark:bg-orange-500/10' },
                        ].map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center gap-4 p-6 bg-white dark:bg-[#1a2232] rounded-3xl border border-slate-100 dark:border-slate-800 cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group" onClick={() => navigate('/auth')}>
                                <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                    <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                                </div>
                                <span className="text-sm font-bold text-slate-700 dark:text-slate-300 text-center">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Promo Banner */}
                <div className="py-6">
                    <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#0b50da] to-[#062c7a] shadow-2xl border border-blue-500/20 p-8 md:p-12">
                        <div className="absolute right-0 top-0 w-96 h-96 rounded-full bg-white/5 blur-[80px] -translate-y-1/2 translate-x-1/2" />
                        <div className="absolute left-0 bottom-0 w-64 h-64 rounded-full bg-blue-400/10 blur-[60px] translate-y-1/2 -translate-x-1/2" />
                        
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                            <div>
                                <h3 className="text-3xl md:text-4xl font-black text-white mb-3">3 Free Messages</h3>
                                <p className="text-blue-100/80 text-lg max-w-md">Connect with a top-rated attorney today. No commitment required, start your consultation now.</p>
                            </div>
                            <button onClick={() => navigate('/auth')} className="shrink-0 bg-white text-blue-700 px-10 py-5 rounded-2xl text-lg font-black shadow-xl hover:scale-105 transition-transform">
                                Consult Now
                            </button>
                        </div>
                    </div>
                </div>

                {/* Top Rated Lawyers */}
                <div className="py-12">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Top Rated Lawyers</h3>
                            <p className="text-slate-500 text-sm mt-1">Recommended by hundreds of clients</p>
                        </div>
                        <a className="text-sm font-bold text-primary hover:underline" onClick={() => navigate('/auth')}>See All</a>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { name: 'Sarah Jenkins', area: 'Family Law', exp: '12 Yrs', rating: 4.9, reviews: 124, img: 'SJ' },
                            { name: 'Marcus Thompson', area: 'Criminal Law', exp: '18 Yrs', rating: 4.8, reviews: 89, img: 'MT' },
                            { name: 'Elena Rodriguez', area: 'Corporate Law', exp: '10 Yrs', rating: 5.0, reviews: 56, img: 'ER' },
                        ].map((lawyer, idx) => (
                            <div key={idx} onClick={() => navigate('/auth')} className="group flex gap-5 p-6 bg-white dark:bg-[#1a2232] rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 cursor-pointer hover:shadow-2xl hover:-translate-y-1 transition-all">
                                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-700 flex-shrink-0 flex items-center justify-center text-white font-black text-2xl shadow-xl group-hover:scale-105 transition-transform">
                                    {lawyer.img}
                                </div>
                                <div className="flex flex-col flex-1 justify-center">
                                    <h4 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">{lawyer.name}</h4>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">{lawyer.area} • {lawyer.exp} Exp.</p>
                                    <div className="flex items-center gap-1.5 bg-slate-50 dark:bg-slate-800/50 w-fit px-3 py-1 rounded-full border border-slate-100 dark:border-slate-700">
                                        <span className="material-symbols-outlined text-yellow-500 text-[18px] fill-current">star</span>
                                        <span className="text-sm font-bold text-slate-900 dark:text-white">{lawyer.rating}</span>
                                        <span className="text-xs text-slate-400">({lawyer.reviews})</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                <Footer />
            </div>
        </div>
    );
};

export default Home;
