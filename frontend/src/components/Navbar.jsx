import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <div className="sticky top-0 z-50 bg-white/80 dark:bg-[#111821]/80 backdrop-blur-xl border-b border-slate-100 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 md:h-20 flex items-center justify-between">
                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-2 cursor-pointer group" onClick={() => navigate('/')}>
                        <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform">
                            <span className="material-symbols-outlined text-white text-2xl">balance</span>
                        </div>
                        <h1 className="text-xl font-black tracking-tight text-slate-900 dark:text-white">LawConnect</h1>
                    </div>

                    {/* Desktop Nav Links */}
                    <nav className="hidden md:flex items-center gap-6">
                        {['Find a Lawyer', 'Practice Areas', 'Legal Advice', 'About Us'].map((item) => (
                            <a key={item} href="#" className="text-sm font-bold text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-white transition-colors">
                                {item}
                            </a>
                        ))}
                    </nav>
                </div>

                <div className="flex items-center gap-4">
                    <button className="hidden sm:flex items-center justify-center p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors relative">
                        <span className="material-symbols-outlined text-slate-600 dark:text-slate-300">notifications</span>
                        <span className="absolute top-2.5 right-2.5 h-2.5 w-2.5 rounded-full bg-primary border-2 border-white dark:border-[#111821]"></span>
                    </button>
                    
                    <div className="h-6 w-px bg-slate-200 dark:bg-slate-800 hidden sm:block"></div>

                    {user ? (
                        <div className="flex items-center gap-3">
                            <button onClick={handleLogout} className="text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-danger flex items-center gap-1 transition-colors">
                                <span className="material-symbols-outlined text-xl">logout</span>
                                <span className="hidden md:inline">Logout</span>
                            </button>
                            <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center font-bold text-slate-700 dark:text-slate-300 border-2 border-primary/20">
                                {user.name?.[0] || 'U'}
                            </div>
                        </div>
                    ) : (
                        <div className="flex items-center gap-2">
                            <button onClick={() => navigate('/auth')} className="text-sm font-bold text-slate-600 dark:text-slate-400 px-4 py-2 hover:text-primary transition-colors">
                                Sign In
                            </button>
                            <button onClick={() => navigate('/auth')} className="text-sm font-bold bg-primary text-white px-6 py-2.5 rounded-xl shadow-lg shadow-primary/20 hover:bg-primary-dark transition-all hover:scale-105">
                                Join Now
                            </button>
                        </div>
                    )}

                    <button className="md:hidden flex items-center justify-center p-2 rounded-xl bg-slate-100 dark:bg-slate-800 transition-colors">
                        <span className="material-symbols-outlined text-slate-900 dark:text-white text-2xl">menu</span>
                        {/* Mobile menu would go here */}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
