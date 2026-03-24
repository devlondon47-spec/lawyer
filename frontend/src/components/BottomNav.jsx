import { useNavigate, useLocation } from 'react-router-dom';

const BottomNav = ({ role }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const getClientTabs = () => [
        { name: 'Home', icon: 'home', path: '/client/dashboard' },
        { name: 'Cases', icon: 'cases', path: '/client/cases' },
        { name: 'Messages', icon: 'chat_bubble', path: '/client/messages', badge: true },
        { name: 'Profile', icon: 'person', path: '/client/profile' },
    ];

    const getLawyerTabs = () => [
        { name: 'Home', icon: 'home', path: '/lawyer/dashboard' },
        { name: 'Cases', icon: 'folder_open', path: '/lawyer/history' },
        { name: 'Messages', icon: 'chat_bubble', path: '/lawyer/messages' },
        { name: 'Profile', icon: 'person', path: '/lawyer/profile' },
    ];

    const tabs = role === 'lawyer' ? getLawyerTabs() : getClientTabs();

    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-[#1a222d]/95 backdrop-blur-lg border-t border-slate-100 dark:border-slate-800 px-6 pb-6 pt-3 z-50 shadow-[0_-8px_30px_rgb(0,0,0,0.08)]">
            <div className="flex justify-between items-end pb-2">
                {tabs.map((tab) => {
                    const isActive = location.pathname.includes(tab.path);
                    return (
                        <div
                            key={tab.name}
                            onClick={() => navigate(tab.path)}
                            className="flex flex-1 flex-col items-center justify-end gap-1 group cursor-pointer"
                        >
                            <div
                                className={`flex h-8 items-center justify-center relative transition-colors ${isActive ? 'text-primary' : 'text-slate-400 group-hover:text-primary dark:group-hover:text-primary'
                                    }`}
                            >
                                <span className={`material-symbols-outlined text-[24px] ${isActive ? 'fill-current' : ''}`}>{tab.icon}</span>
                                {tab.badge && (
                                    <span className="absolute -top-1 -right-1 h-2.5 w-2.5 bg-red-500 rounded-full border-2 border-white dark:border-[#1a222d]"></span>
                                )}
                            </div>
                            <p
                                className={`text-[10px] font-medium leading-none transition-colors ${isActive ? 'text-primary' : 'text-slate-400 group-hover:text-primary dark:group-hover:text-primary'
                                    }`}
                            >
                                {tab.name}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default BottomNav;
