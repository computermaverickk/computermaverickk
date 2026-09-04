export const CATEGORIES = [
  "All Guides",
  "Hardware",
  "Operating Systems",
  "Internet & Web",
  "Productivity",
  "Security & Privacy",
  "Troubleshooting"
];

export const HARDWARE_COMPONENTS = [
  {
    id: "cpu",
    name: "CPU (Central Processing Unit)",
    badge: "The Brain",
    shortDesc: "Executes calculations, instructions, and coordinates all tasks.",
    analogy: "Think of the CPU as the master chef in a restaurant kitchen. It takes instructions from software recipes and prepares all data at lightning speed.",
    specsToKnow: "Clock speed (GHz) = how fast it thinks; Cores = how many hands the chef has to multitask simultaneously.",
    beginnerTip: "For everyday browsing and office work, a modern quad-core or 6-core processor is plenty.",
    specs: ["Measured in GHz & Cores", "Intel Core / AMD Ryzen / Apple Silicon", "Runs hot; requires cooling"]
  },
  {
    id: "ram",
    name: "RAM (Random Access Memory)",
    badge: "The Work Desk",
    shortDesc: "Super-fast temporary workspace for apps you are actively using right now.",
    analogy: "Like the physical surface of your desk. The bigger the desk, the more papers and tools you can lay out at once without slowing down.",
    specsToKnow: "Volatile memory: when you turn off or restart your PC, everything in RAM gets completely cleared.",
    beginnerTip: "16 GB is the modern sweet spot for smooth multitasking and zero browser tab slowdowns.",
    specs: ["Measured in Gigabytes (GB)", "DDR4 / DDR5 / Unified Memory", "Instant read/write speeds"]
  },
  {
    id: "storage",
    name: "Storage (SSD / NVMe)",
    badge: "The Filing Cabinet",
    shortDesc: "Permanent storage for your photos, files, games, and operating system.",
    analogy: "A giant filing cabinet in your office. Even when the lights are turned off at night, your files stay safely stored until you need them again.",
    specsToKnow: "SSDs (Solid State Drives) have no moving parts and load Windows/apps in seconds, unlike old spinning HDDs.",
    beginnerTip: "Never buy a computer with only an old mechanical Hard Drive (HDD) for its boot drive. Always insist on an SSD.",
    specs: ["NVMe M.2 or SATA SSD", "512 GB to 2 TB typical size", "Retains data when powered off"]
  },
  {
    id: "gpu",
    name: "GPU (Graphics Card)",
    badge: "The Visual Artist",
    shortDesc: "Dedicated processor designed specifically for rendering pixels, 3D graphics, and video.",
    analogy: "A specialized artist assistant who handles all the drawing, colors, and 3D geometry so the main chef (CPU) can focus on calculations.",
    specsToKnow: "Integrated graphics (inside CPU) are great for YouTube, Netflix & docs. Dedicated graphics cards (NVIDIA/AMD) are for games & 3D rendering.",
    beginnerTip: "If you don't play heavy 3D games or edit 4K video, integrated graphics will save you money and battery life.",
    specs: ["Integrated vs Dedicated", "VRAM (Video Memory)", "Powers multi-monitor setups"]
  },
  {
    id: "motherboard",
    name: "Motherboard",
    badge: "The Nervous System",
    shortDesc: "The master circuit board that connects all internal components together.",
    analogy: "The city's highway and electrical grid. It ensures that the CPU can talk to RAM, storage can talk to memory, and USB ports get power.",
    specsToKnow: "Houses the BIOS/UEFI chip, PCIe slots for graphics cards, and ports on the back of your computer.",
    beginnerTip: "All components must be compatible with your motherboard socket and chipset.",
    specs: ["Form factors: ATX, Micro-ATX, Mini-ITX", "Contains PCIe & M.2 slots", "Controls data buses"]
  },
  {
    id: "psu",
    name: "PSU (Power Supply Unit)",
    badge: "The Heart & Bloodstream",
    shortDesc: "Converts AC wall power into clean, safe DC voltage for every sensitive component.",
    analogy: "The heart of your computer, pumping steady, regulated blood (electricity) to all internal organs without power surges.",
    specsToKnow: "Rated by wattage (e.g. 500W, 750W) and efficiency tiers like 80-Plus Bronze, Gold, and Platinum.",
    beginnerTip: "Never cheap out on a generic, unbranded power supply—a bad power supply can damage all connected parts.",
    specs: ["Wattage ratings (450W - 1000W+)", "80-Plus efficiency certification", "Protects against voltage spikes"]
  }
];

export const SHORTCUTS_DATA = {
  windows: [
    { keys: ["Ctrl", "C"], action: "Copy", category: "Essential", description: "Duplicates the selected text, image, or file to clipboard." },
    { keys: ["Ctrl", "V"], action: "Paste", category: "Essential", description: "Inserts the copied item into the active cursor position." },
    { keys: ["Ctrl", "Z"], action: "Undo", category: "Essential", description: "Reverses your last action instantly (works almost everywhere)." },
    { keys: ["Ctrl", "Shift", "Z"], action: "Redo", category: "Essential", description: "Re-applies the action you just undid." },
    { keys: ["Win", "V"], action: "Clipboard History", category: "Productivity", description: "Opens clipboard history to view and paste multiple past copies." },
    { keys: ["Win", "Shift", "S"], action: "Snipping Tool", category: "Productivity", description: "Takes a custom region screenshot directly to your clipboard." },
    { keys: ["Ctrl", "Shift", "Esc"], action: "Task Manager", category: "Troubleshooting", description: "Bypasses menus to directly open Task Manager and kill frozen apps." },
    { keys: ["Win", "D"], action: "Show Desktop", category: "Window Mgmt", description: "Minimizes all windows instantly to reveal your clean desktop." },
    { keys: ["Alt", "Tab"], action: "App Switcher", category: "Window Mgmt", description: "Cycle smoothly between all open application windows." },
    { keys: ["Ctrl", "F"], action: "Find in Page", category: "Browser", description: "Search for any word or sentence on a web page or document." },
    { keys: ["Ctrl", "Shift", "T"], action: "Reopen Tab", category: "Browser", description: "Miraculously restores the browser tab you accidentally closed!" },
    { keys: ["Win", "L"], action: "Lock PC", category: "Security", description: "Instantly locks your computer when stepping away from your desk." }
  ],
  mac: [
    { keys: ["Cmd ⌘", "C"], action: "Copy", category: "Essential", description: "Duplicates the selected text, image, or file to clipboard." },
    { keys: ["Cmd ⌘", "V"], action: "Paste", category: "Essential", description: "Inserts the copied item into the active cursor position." },
    { keys: ["Cmd ⌘", "Z"], action: "Undo", category: "Essential", description: "Reverses your last action instantly (works across macOS)." },
    { keys: ["Cmd ⌘", "Shift", "Z"], action: "Redo", category: "Essential", description: "Re-applies the action you just undid." },
    { keys: ["Cmd ⌘", "Space"], action: "Spotlight Search", category: "Productivity", description: "Lightning-fast universal search for files, apps, calculations & unit conversions." },
    { keys: ["Cmd ⌘", "Shift", "4"], action: "Region Screenshot", category: "Productivity", description: "Crosshair to select and capture an exact screen region to desktop or clipboard." },
    { keys: ["Cmd ⌘", "Option ⌥", "Esc"], action: "Force Quit", category: "Troubleshooting", description: "Opens the Force Quit dialog to terminate unresponsive or frozen Mac apps." },
    { keys: ["Cmd ⌘", "H"], action: "Hide App", category: "Window Mgmt", description: "Instantly hides current application window without closing or quitting it." },
    { keys: ["Cmd ⌘", "Tab"], action: "App Switcher", category: "Window Mgmt", description: "Cycle effortlessly between all active running applications." },
    { keys: ["Cmd ⌘", "F"], action: "Find in Page", category: "Browser", description: "Search for any word or sentence on a webpage, PDF, or document." },
    { keys: ["Cmd ⌘", "Shift", "T"], action: "Reopen Tab", category: "Browser", description: "Miraculously restores the browser tab you accidentally closed!" },
    { keys: ["Ctrl ^", "Cmd ⌘", "Q"], action: "Lock Screen", category: "Security", description: "Instantly locks macOS session when you step away from your computer." }
  ]
};

export const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "What happens to the data stored in RAM when you shut down or restart your computer?",
    options: [
      "It is automatically backed up to Google Drive or iCloud",
      "It is completely wiped and cleared from memory",
      "It gets permanently burned into the motherboard",
      "It moves into the computer screen"
    ],
    correctAnswer: 1,
    explanation: "RAM is volatile memory. Unlike SSDs or hard drives, RAM requires constant electrical power to hold data. When powered down, its contents are instantly cleared."
  },
  {
    id: 2,
    question: "You accidentally closed an important browser tab with all your work. What is the fastest magic shortcut to bring it back?",
    options: [
      "Ctrl + Alt + Del (Windows) / Cmd + Q (Mac)",
      "Ctrl + Shift + T (Windows) / Cmd + Shift + T (Mac)",
      "F5 / Refresh button",
      "Ctrl + P / Cmd + P"
    ],
    correctAnswer: 1,
    explanation: "Ctrl + Shift + T (or Cmd + Shift + T on Mac) restores closed tabs in chronological order across Chrome, Edge, Safari, Firefox, and Brave."
  },
  {
    id: 3,
    question: "Which of the following is the most reliable sign of a phishing email attempt?",
    options: [
      "It has an urgent emotional threat ('Account will be closed in 1 hour!') and an unusual sender address",
      "It has high-resolution company logos in the email",
      "It was sent on a Monday morning",
      "It is written in plain black and white text"
    ],
    correctAnswer: 0,
    explanation: "Scammers rely on artificial urgency and panic (threats of account suspension, unpaid invoices) combined with spoofed or bizarre email domains to trick you into clicking malicious links."
  },
  {
    id: 4,
    question: "Why should you prefer an SSD (Solid State Drive) over an older mechanical HDD (Hard Disk Drive)?",
    options: [
      "SSDs are much heavier and keep your desk stable",
      "SSDs use laser discs like DVDs to store movies",
      "SSDs have zero moving parts, boot 5x-10x faster, and don't make clicking noises",
      "SSDs emit Wi-Fi signals directly into your room"
    ],
    correctAnswer: 2,
    explanation: "SSDs store data electronically on flash memory chips with zero moving parts. This results in nearly instantaneous boot times, faster file transfers, and higher physical durability."
  }
];

export const RESOURCES = [
  {
    id: "hardware-demystified",
    title: "Demystifying Hardware: CPU, RAM & Storage Explained",
    category: "Hardware",
    difficulty: "Beginner",
    readTime: "5 min read",
    icon: "Cpu",
    summary: "Stop feeling intimidated by tech specs. Learn what CPU, RAM, and SSDs actually do using simple everyday analogies.",
    overview: "Computer specs often look like an alien language of gigahertz, gigabytes, and PCIe generations. In reality, a computer's internals mirror a regular office setup. Once you understand the role of each piece, buying or upgrading a computer becomes stress-free.",
    keyConcepts: [
      {
        title: "The Golden Office Analogy",
        description: "CPU = The Worker sitting at the desk. RAM = The physical surface area of the desk. Storage (SSD) = The filing cabinet across the room.",
        takeaway: "If you have a tiny desk (low RAM), you have to keep walking back and forth to the cabinet (storage), slowing your work down dramatically."
      },
      {
        title: "Clock Speed vs Multi-Core",
        description: "Clock speed (GHz) determines how quickly a single core processes instructions. Multiple cores allow the CPU to juggle different programs at once without stuttering.",
        takeaway: "For web browsing and document editing, single-core speed matters most; for video rendering and gaming, more cores shine."
      },
      {
        title: "Why SSDs Changed Everything",
        description: "Old Hard Disk Drives (HDDs) used mechanical spinning magnetic platters and read heads like a record player. Solid State Drives (SSDs) use flash memory chips.",
        takeaway: "Replacing an HDD with an SSD is the single biggest speed boost you can give an older computer."
      }
    ],
    stepByStep: [
      "Check your current specs: On Windows press Ctrl+Shift+Esc > Performance tab. On Mac click Apple Logo > About This Mac.",
      "Identify your bottlenecks: If memory usage is constantly >85%, you need more RAM.",
      "Check your storage drive type: Ensure your Windows C: drive or macOS container is on an SSD.",
      "Keep internal fans clean: Dust buildup causes thermal throttling, which slows down your CPU to prevent overheating."
    ],
    proTips: [
      "16GB RAM is the modern baseline for comfortable multitasking with modern web browsers.",
      "Never open an active Power Supply Unit (PSU); capacitors store lethal charge even when unplugged.",
      "High storage space doesn't automatically make a computer faster—drive speed (NVMe vs SATA) does."
    ],
    tags: ["Hardware", "CPU", "RAM", "SSD", "Buying Guide"]
  },
  {
    id: "file-system-mastery",
    title: "File Organization 101: Never Lose a Document Again",
    category: "Operating Systems",
    difficulty: "Beginner",
    readTime: "6 min read",
    icon: "FolderTree",
    summary: "Master folders, file paths, extensions (.pdf, .docx, .zip), and clean organization habits on Windows and Mac.",
    overview: "Is your desktop an unruly sea of random downloads, screenshots, and 'document_final_v2_FINAL.docx'? Mastering digital file systems takes less than 15 minutes and saves hours of daily frustration.",
    keyConcepts: [
      {
        title: "Understanding File Extensions",
        description: "The 3 or 4 letters after the dot tell your operating system what program opens that file (e.g. .jpg = image, .mp4 = video, .pdf = document, .exe/.dmg = installer).",
        takeaway: "Never change a file's extension manually unless you are converting it with proper software, or it may fail to open."
      },
      {
        title: "The 3-Tier Folder Hierarchy",
        description: "Organize by Area > Project > Resource. For example: Documents > Finances > 2026 Taxes > Receipts.",
        takeaway: "Avoid creating folders deeper than 4 levels down, as deep nested trees become harder to search."
      },
      {
        title: "Naming Conventions That Actually Work",
        description: "Adopt ISO 8601 date formatting: YYYY-MM-DD_FileName. For example: '2026-09-05_ApartmentLease.pdf'.",
        takeaway: "Sorting by file name automatically sorts your files in perfect chronological order."
      }
    ],
    stepByStep: [
      "Clean out your Downloads folder weekly. Downloads is an inbox, not a permanent archive!",
      "Turn on 'Show File Extensions' in Windows Explorer View settings or Mac Finder Preferences.",
      "Pin your 4 most used folders to 'Quick Access' (Windows) or the Finder Sidebar (Mac).",
      "Use built-in search filters: In Windows, type 'ext:.pdf' or 'datemodified:this week' in the search bar."
    ],
    proTips: [
      "Store cloud files (Google Drive, OneDrive, iCloud) inside a dedicated synced directory, not scattered across root drives.",
      "Use descriptive names instead of vague labels like 'Resume.docx'—prefer 'JaneDoe_SoftwareResume_2026.docx'.",
      "Learn to compress files into .ZIP archives when emailing multiple documents together."
    ],
    tags: ["Windows", "macOS", "Productivity", "Files", "Storage"]
  },
  {
    id: "internet-basics-networking",
    title: "How the Internet Works: Wi-Fi, Routers & DNS Explained",
    category: "Internet & Web",
    difficulty: "Beginner",
    readTime: "7 min read",
    icon: "Globe",
    summary: "Unravel how a click in your browser travels across undersea fiber cables and returns a website in milliseconds.",
    overview: "When you type google.com into your browser address bar and press Enter, dozens of protocols and physical systems collaborate across continents in under 100 milliseconds. Here is the friendly, jargon-free breakdown.",
    keyConcepts: [
      {
        title: "IP Addresses: The Web's Mailing Address",
        description: "Every device connected to the internet has an IP address (like 142.250.190.46). It functions just like a postal address so servers know where to send data packets.",
        takeaway: "Your router gives your phone/laptop a private local IP (e.g., 192.168.1.15), while your ISP assigns one public IP to your modem."
      },
      {
        title: "DNS: The Internet's Phonebook",
        description: "Humans remember names ('computermaverick.org'), but computers only understand numbers (IP addresses). DNS (Domain Name System) translates names to numbers.",
        takeaway: "When your internet says 'Connected without Internet', often your DNS server is temporarily unreachable."
      },
      {
        title: "Modem vs Router (They aren't the same!)",
        description: "The Modem translates signals from your physical street cable/fiber into digital bits. The Router directs those bits wirelessly or via Ethernet to your individual household devices.",
        takeaway: "Many ISPs provide a 2-in-1 combo unit, but their underlying jobs remain distinct."
      }
    ],
    stepByStep: [
      "Test your internet speed at Speedtest.net or Fast.com. Note your download, upload, and ping (latency).",
      "Check 2.4 GHz vs 5 GHz Wi-Fi: 5 GHz is much faster but has shorter range; 2.4 GHz penetrates walls better.",
      "Switch to a faster, privacy-respecting DNS: Set primary DNS to Cloudflare (1.1.1.1) or Google (8.8.8.8).",
      "Restarting router rule: Wait a full 30 seconds after unplugging so all electrical capacitors discharge completely before plugging back in."
    ],
    proTips: [
      "Ethernet cable connection will always beat Wi-Fi in stability and lower latency for gaming and video calls.",
      "Never place your Wi-Fi router on the floor or behind a thick metal appliance or microwave.",
      "HTTPS (the padlock icon) encrypts data between your browser and the website; your ISP cannot read your passwords or page contents."
    ],
    tags: ["Networking", "Wi-Fi", "DNS", "Routers", "Internet"]
  },
  {
    id: "security-phishing-defense",
    title: "Bulletproof Security: Spotting Scams & Setting Strong Passwords",
    category: "Security & Privacy",
    difficulty: "Beginner",
    readTime: "6 min read",
    icon: "ShieldCheck",
    summary: "Protect your personal information, detect tricky phishing scams, and learn why password managers are a superpower.",
    overview: "Over 90% of security breaches are not caused by Hollywood-style hackers cracking firewalls, but by tricking humans through social engineering and reused passwords. With a few basic mental models, you can make yourself an impossible target.",
    keyConcepts: [
      {
        title: "The Anatomy of a Phishing Scam",
        description: "Phishing uses urgency, fear, or greed to force quick clicks: 'Your bank account is frozen!', 'Tax refund waiting!', 'Netflix payment failed!'.",
        takeaway: "Legitimate institutions will never ask for your password, PIN, or Social Security number via email or text message."
      },
      {
        title: "The Danger of Password Reuse",
        description: "If you use the same password on a random recipe website and on your main email, when that recipe site gets breached, hackers test that password everywhere.",
        takeaway: "Use unique passwords for every site. A free password manager (Bitwarden, 1Password, or built-in browser keychain) makes this effortless."
      },
      {
        title: "Two-Factor Authentication (2FA)",
        description: "2FA requires both your password (something you know) and a confirmation code on your phone (something you have).",
        takeaway: "Even if someone steals your password, they cannot log into your account without that second verification factor."
      }
    ],
    stepByStep: [
      "Check if your email was in a known data leak on haveibeenpwned.com.",
      "Enable 2FA on your primary email, bank, and social media accounts immediately.",
      "Inspect links before clicking: Hover your cursor over links to see the real destination URL in the bottom-left preview bar.",
      "Install a trusted ad-blocker like uBlock Origin to prevent deceptive 'Download' button popups."
    ],
    proTips: [
      "A 4-word passphrase ('correct-horse-battery-staple') is exponentially harder to crack than a short symbol soup like 'P@ss1!'.",
      "Always navigate to your bank's website directly by typing the URL yourself rather than clicking links in emails.",
      "Keep your OS and browser updated: updates contain critical security patches against newly discovered exploits."
    ],
    tags: ["Cybersecurity", "Privacy", "Passwords", "Phishing", "2FA"]
  },
  {
    id: "troubleshooting-crash-guide",
    title: "First-Aid Troubleshooting: When Your Computer Freezes or Crashes",
    category: "Troubleshooting",
    difficulty: "Quick Guide",
    readTime: "4 min read",
    icon: "AlertTriangle",
    summary: "The foolproof 5-step triage checklist when an app hangs, the screen freezes, or your PC refuses to respond.",
    overview: "Don't panic when your screen stops responding. Most computer freezes are simple software deadlocks that can be safely resolved in seconds without losing your work or pulling the power cord.",
    keyConcepts: [
      {
        title: "App Hang vs Complete OS Freeze",
        description: "If your mouse pointer moves, your operating system is healthy! Only that single application has hung.",
        takeaway: "Do not restart the whole computer if only one program is unresponsive; force-quit just that specific app."
      },
      {
        title: "The Role of Task Manager / Force Quit",
        description: "Task Manager tells the OS kernel to revoke resources and terminate unresponsive processes cleanly.",
        takeaway: "Windows: Ctrl + Shift + Esc. Mac: Command + Option + Escape."
      },
      {
        title: "Why Restarting Actually Solves 80% of Glitches",
        description: "Modern OS kernels have hundreds of background processes. Memory leaks and corrupted threads accumulate. A reboot resets memory registers to a fresh baseline.",
        takeaway: "Restarting is not an admission of defeat; it is standard computer hygiene."
      }
    ],
    stepByStep: [
      "Step 1: Wait 15 seconds. Heavy operations (like exporting a file or updating a database) can temporarily pause the interface.",
      "Step 2: Press Esc or Alt+F4 / Cmd+W to close the dialog window gracefully.",
      "Step 3: Open Task Manager (Ctrl+Shift+Esc) or Force Quit (Cmd+Opt+Esc) and kill the offending app.",
      "Step 4: Restart your graphic drivers if the screen is black or glitching: On Windows, press Win + Ctrl + Shift + B (the screen will beep and flicker).",
      "Step 5: If fully locked up, hold down the physical power button for 8 seconds until the system shuts down."
    ],
    proTips: [
      "Avoid pulling the wall power plug directly; holding down the power button lets the motherboard perform emergency power staging.",
      "Blue Screen of Death (BSOD) on Windows? Look at the 'Stop Code' at the bottom (e.g. MEMORY_MANAGEMENT or DRIVER_IRQL_NOT_LESS_OR_EQUAL) to search for solutions.",
      "Check free disk space: If your boot drive has less than 10GB free, the OS cannot create swap memory and will freeze frequently."
    ],
    tags: ["Troubleshooting", "Freezes", "Task Manager", "Fixes", "Windows", "Mac"]
  },
  {
    id: "terminal-command-line-101",
    title: "Terminal & Command Line 101: Your Friendly Starter Guide",
    category: "Productivity",
    difficulty: "Intermediate",
    readTime: "8 min read",
    icon: "Terminal",
    summary: "Learn why developers and power users love the terminal, and master 7 safe, essential commands without breaking anything.",
    overview: "The black command line terminal window looks intimidating, like a Hollywood movie hacker screen. But beneath the surface, it is simply a direct text conversation with your computer's operating system without the graphical interface layer.",
    keyConcepts: [
      {
        title: "GUI vs CLI",
        description: "GUI (Graphical User Interface) is pointing and clicking icons. CLI (Command Line Interface) is typing plain English commands.",
        takeaway: "The CLI lets you automate repetitive tasks in seconds that would take hours of clicking."
      },
      {
        title: "Current Working Directory",
        description: "The terminal is always 'standing' in one specific folder on your drive (called your working directory).",
        takeaway: "Commands you type will execute inside that folder unless you specify a different path."
      },
      {
        title: "The Tab Key is Your Superpower",
        description: "You never need to type out long folder or file names. Type the first two letters and press Tab—it auto-completes!",
        takeaway: "If you press Tab twice, it displays all matching files."
      }
    ],
    stepByStep: [
      "Open your terminal: On Mac, press Cmd+Space and type 'Terminal'. On Windows, open 'PowerShell' or 'Windows Terminal'.",
      "Check where you are: Type `pwd` (Mac/Linux) or `cd` (Windows) and hit enter.",
      "List files in the folder: Type `ls` (Mac/Linux) or `dir` (Windows).",
      "Move between folders: Type `cd Documents` to enter Documents, or `cd ..` to go up one folder level.",
      "Clear the screen: Type `clear` (or `cls` on Windows) to clean up."
    ],
    proTips: [
      "Press the Up Arrow key on your keyboard to instantly cycle back through previously executed commands.",
      "To cancel a command that is taking too long or running in an infinite loop, press Ctrl + C.",
      "Never paste a command from a random website into your terminal if you don't know what it does."
    ],
    tags: ["Terminal", "CLI", "Command Line", "Developer Basics", "PowerShell"]
  },
  {
    id: "ports-and-cables-guide",
    title: "Ports & Cables Decoded: USB-C, HDMI, DisplayPort & Thunderbolt",
    category: "Hardware",
    difficulty: "Beginner",
    readTime: "5 min read",
    icon: "Cable",
    summary: "Never guess which cable to plug in again. The ultimate guide to USB standards, video cords, and adapter sanity.",
    overview: "Why does USB-C look identical across different cables, yet one charges your laptop in 30 minutes while another barely transfers a photo? We demystify modern ports, bandwidths, and display connectors.",
    keyConcepts: [
      {
        title: "USB Connector Shape vs USB Protocol Speed",
        description: "USB-C is just the physical oval plug shape! The speed inside can range from sluggish USB 2.0 (480 Mbps) up to Thunderbolt 4 (40,000 Mbps).",
        takeaway: "Always check the cable's wattage (e.g. 100W PD) and data speed rating before purchasing."
      },
      {
        title: "HDMI vs DisplayPort",
        description: "HDMI is king for TVs, consoles, and projectors. DisplayPort is the preferred gold standard for high-refresh-rate PC gaming monitors.",
        takeaway: "HDMI 2.1 supports 4K at 120Hz; DisplayPort 1.4 / 2.1 supports high resolutions with native Variable Refresh Rate (FreeSync/G-Sync)."
      },
      {
        title: "Thunderbolt: The Ultimate Cable",
        description: "Developed by Intel and Apple, Thunderbolt uses the USB-C shape and provides massive bandwidth to drive dual 4K displays and external GPUs over one cord.",
        takeaway: "Look for the little lightning bolt symbol next to the USB-C port to know if it supports Thunderbolt."
      }
    ],
    stepByStep: [
      "Inspect the sides of your laptop to see which symbols are next to your USB-C ports (lightning bolt = Thunderbolt, 'D' icon = DisplayPort video out).",
      "If connecting a high-refresh monitor (144Hz+), connect via DisplayPort rather than older HDMI 1.4 cables.",
      "Get a multi-port USB-C Hub with Power Delivery pass-through for laptops that only have USB-C ports.",
      "Never force a cable into a port; modern reversible USB-C slides in smoothly in both directions."
    ],
    proTips: [
      "A cheap charging cable that came with a toy or vape often has no data wires inside at all—only power wires!",
      "Always make sure your monitor cable is plugged into your dedicated graphics card at the bottom of your desktop PC, NOT into the motherboard port at the top.",
      "Braided nylon cables last 3x-5x longer than cheap rubber cables that fray at the connector neck."
    ],
    tags: ["Hardware", "Ports", "USB-C", "HDMI", "DisplayPort", "Cables"]
  },
  {
    id: "browser-mastery-efficiency",
    title: "Browser Mastery: Supercharge Chrome, Edge, Safari & Firefox",
    category: "Productivity",
    difficulty: "Beginner",
    readTime: "5 min read",
    icon: "Compass",
    summary: "Unlock tab groups, search engine keywords, private windows vs VPNs, and essential browser extensions.",
    overview: "Most computer users spend 90% of their daily screen time inside a web browser. Learning just a handful of browser mechanics will transform your day-to-day productivity.",
    keyConcepts: [
      {
        title: "Incognito / Private Browsing Myths",
        description: "Private mode does NOT make you invisible or anonymous on the internet. Your ISP, school, or employer can still see which websites you visit.",
        takeaway: "Private browsing simply prevents your history, cookies, and form data from being saved on that specific local machine."
      },
      {
        title: "Tab Groups & Pinning",
        description: "Right-click any browser tab and select 'Add to Tab Group'. You can color-code projects and collapse 20 tabs into a single neat label.",
        takeaway: "Right-click your email or calendar tab and choose 'Pin' so it sits neatly in the corner and cannot be closed accidentally."
      },
      {
        title: "Search Bar Omnibox Tricks",
        description: "You can use your browser address bar as a calculator (type '45 * 12'), currency converter ('50 USD in EUR'), or timer ('timer 10 minutes').",
        takeaway: "No need to go to Google homepage first; type your calculation or search term directly in the top address bar."
      }
    ],
    stepByStep: [
      "Reopen closed tabs: Press Ctrl+Shift+T (Windows) or Cmd+Shift+T (Mac).",
      "Mute loud audio tabs: Look for the speaker icon on the tab strip to find and mute rogue music or videos with one click.",
      "Bookmark management: Press Ctrl+D (Cmd+D on Mac) to bookmark. Create a 'Daily Work' folder on your bookmarks bar.",
      "Audit your browser extensions: Remove old extensions you no longer use, as extensions consume RAM and have access to page data."
    ],
    proTips: [
      "Middle-click (clicking the scroll wheel) on any link opens it directly in a new background tab without switching focus.",
      "Middle-click on an open tab closes it instantly without having to aim for the tiny 'x' button.",
      "Clear cache and cookies if a specific website is behaving strangely or failing to log you in."
    ],
    tags: ["Browsers", "Chrome", "Safari", "Productivity", "Shortcuts"]
  }
];
