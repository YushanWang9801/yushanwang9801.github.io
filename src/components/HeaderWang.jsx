import { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import "../css/HeaderWang.css";

const HeaderWang = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="w-full pt-6 sm:pt-12 px-4 sm:px-10 max-w-[1080px] mx-auto font-['Optima']">
            {/* 使用 grid 布局，分成 3 列，每列宽度相等 */}
            <div className="grid grid-cols-2 md:grid-cols-3 items-center">

                {/* 1. 左侧 Logo - 靠左对齐 */}
                <div className="flex justify-start z-50">
                    <Link to="/">
                        <h1 className="text-xl sm:text-[1.5rem] text-[var(--primary)] hover:text-[var(--secondary)] transition-all tracking-wider font-bold whitespace-nowrap drop-shadow-[0_0_1px_var(--primary)]">
                            YushanWang9801
                        </h1>
                    </Link>
                </div>

                <nav className="hidden md:flex justify-center items-center">
                    <div className={`
                        flex items-center border-2 border-[var(--secondary)] rounded-full px-5 py-2 gap-6 transition-all shadow-xl
                        ${theme === 'dark' ? 'bg-slate-950 border-slate-700' : 'bg-white border-[var(--secondary)]'}
                    `}>
                        {['Project', 'Blog', 'Gallery', 'Me'].map((item) => (
                            <Link
                                key={item}
                                to={`/${item.toLowerCase()}`}
                                className="text-[var(--secondary)] font-bold uppercase text-[12px] lg:text-sm hover:text-[var(--primary)] transition-colors whitespace-nowrap tracking-wider"
                            >
                                {item}
                            </Link>
                        ))}
                    </div>
                </nav>

                {/* 3. 右侧控制区 - 靠右对齐 */}
                <div className="flex justify-end items-center gap-4 z-50">
                    <input
                        type="checkbox"
                        className="custom-switch"
                        checked={theme === "dark"}
                        onChange={toggleTheme}
                    />

                    {/* 移动端汉堡按钮 */}
                    <button
                        className="md:hidden text-2xl text-[var(--secondary)]"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* 移动端全屏菜单 (逻辑不变) */}
            <div className={`fixed inset-0 bg-background z-[45] flex flex-col items-center justify-center gap-8 transition-transform duration-500 md:hidden ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
                {['Project', 'Blog', 'Gallery', 'Me'].map((item) => (
                    <Link key={item} to={`/${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-2xl font-bold uppercase text-[var(--secondary)] hover:text-[var(--primary)]">{item}</Link>
                ))}
            </div>
        </header>
    );
}

export default HeaderWang;