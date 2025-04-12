"use client";
import {
  ChevronLast,
  ChevronFirst,
  Menu,
  X,
  MessageCircle,
  Settings,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  useContext,
  createContext,
  useState,
  ReactNode,
  FC,
  useEffect,
} from "react";

interface SidebarContextProps {
  expanded: boolean;
}

const SidebarContext = createContext<SidebarContextProps>({ expanded: true });

const Sidebar = ({}) => {
  const [expanded, setExpanded] = useState<boolean>(true);
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileOpen]);

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="lg:hidden p-3 fixed top-4 left-4 z-50 bg-white rounded-md shadow-md"
        onClick={() => setMobileOpen(true)}
      >
        <Menu />
      </button>

      {/* Overlay for mobile view */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside
        className={`fixed lg:relative z-50 h-screen transition-all duration-300 ${
          mobileOpen ? "left-0" : "-left-full"
        } lg:left-0`}
      >
        <nav className="h-full flex flex-col bg-white border-r shadow-sm w-64">
          <div className="p-4 pb-2 flex justify-between items-center">
            <Image
              src="https://img.logoipsum.com/243.svg"
              className={`overflow-hidden transition-all ${
                expanded ? "w-32" : "w-0"
              }`}
              width={100}
              height={100}
              alt="Logo"
            />
            <div className="flex gap-2">
              <button
                onClick={() => setExpanded((curr) => !curr)}
                className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 hidden lg:block"
              >
                {expanded ? <ChevronFirst /> : <ChevronLast />}
              </button>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 lg:hidden"
              >
                <X />
              </button>
            </div>
          </div>

          <SidebarContext.Provider value={{ expanded }}>
            <ul className="flex-1 px-3">
              <Link href="/dashboard">
                <SidebarItem
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 12l2-2m0 0l7-7 7 7M13 5v6h6m4 0v10a1 1 0 01-1 1H5a1 1 0 01-1-1V12h16z"
                      />
                    </svg>
                  }
                  text="Dashboard"
                />
              </Link>

              <Link href="/messages">
                <SidebarItem
                  icon={<MessageCircle className="h-5 w-5 text-gray-500" />}
                  text="Messages"
                />
              </Link>

              <Link href="/settings">
                <SidebarItem
                  icon={<Settings className="h-5 w-5 text-gray-500" />}
                  text="Settings"
                />
              </Link>

              <Link href="/add-message">
                <SidebarItem
                  icon={<MessageCircle className="h-5 w-5 text-gray-500" />}
                  text="Add Message"
                />
              </Link>
            </ul>
          </SidebarContext.Provider>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;

interface SidebarItemProps {
  icon: ReactNode;
  text: string;
  active?: boolean;
  alert?: boolean;
}

export const SidebarItem: FC<SidebarItemProps> = ({
  icon,
  text,
  active = false,
  alert = false,
}) => {
  const { expanded } = useContext(SidebarContext);

  return (
    <li
      className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          active
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
            : "hover:bg-indigo-50 text-gray-600"
        }
    `}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
            expanded ? "" : "top-2"
          }`}
        />
      )}

      {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-indigo-100 text-indigo-800 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          {text}
        </div>
      )}
    </li>
  );
};
