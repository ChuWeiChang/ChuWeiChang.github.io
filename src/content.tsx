import type { ReactNode } from "react";

export type Lang = "en" | "zh-TW";

export const EMAIL = "chuweichang0319@gmail.com";
export const GITHUB = "https://github.com/ChuWeiChang";
export const NAME = "Chu Wei Chang";

export type Link = { label: string; href: string };

export type Project = {
  title: string;
  href?: string;
  role: string;
  status?: string;
  desc?: ReactNode;
  points: ReactNode[];
  tags: string[];
};

// A milestone with `org` is a job; the timeline marks it with a briefcase.
export type Milestone = { date: string; title: string; org?: string; desc?: ReactNode; links?: Link[] };

// Phases and milestones are listed newest first; the page renders them oldest → newest.
export type Phase = { degree: string; school: string; time: string; milestones: Milestone[] };

export type ViewId = "home" | "work" | "more" | "skills" | "activities" | "life";

export type Fact = { label: string; value: string; href?: string };

// Put image files in public/photos/ and list them below.
// `focus` is the CSS object-position used when the photo is cropped to fit its tile.
export type Photo = { src: string; alt: string; caption?: Record<Lang, string>; focus?: string };

// Home page: work- and research-related photos.
export const PHOTOS: Photo[] = [
  {
    src: "photos/lab_lunch.jpg",
    alt: "INHPC Lab members at a group lunch",
    caption: { en: "Lunch with the INHPC Lab", "zh-TW": "INHPC 實驗室聚餐" },
  },
];

// "Life" page: personal photos.
export const LIFE_PHOTOS: Photo[] = [
  {
    src: "photos/himalayas_volunteering.jpg",
    alt: "Volunteering at a dental clinic in the Himalayas",
    caption: { en: "Volunteering at a dental clinic in the Himalayas", "zh-TW": "喜馬拉雅山區牙科義診志工" },
    focus: "60% 50%",
  },
  {
    src: "photos/mountain_climbing.jpg",
    alt: "Mountain climbing",
    caption: { en: "Mountain climbing", "zh-TW": "登山" },
    focus: "66% 50%",
  },
  { src: "photos/diving.jpg", alt: "Scuba diving", caption: { en: "Scuba diving", "zh-TW": "潛水" }, focus: "50% 55%" },
  { src: "photos/ski.jpg", alt: "Skiing selfie", caption: { en: "Skiing", "zh-TW": "滑雪" }, focus: "50% 75%" },
  {
    src: "photos/meme.jpg",
    alt: "Kung Fu Panda meme: software engineers vs. AI",
    caption: { en: "Software engineers vs. AI", "zh-TW": "軟體工程師 vs. AI" },
  },
];

export type Content = {
  ui: {
    home: string;
    menu: string;
    photos: string;
    legend: { school: string; work: string };
    email: string;
    cv: string;
    switchLang: string;
    theme: { system: string; light: string; dark: string };
  };
  role: string;
  focus: string[];
  facts: Fact[];
  headings: {
    work: string;
    timeline: string;
    more: string;
    skills: string;
    activities: string;
    life: string;
  };
  projects: Project[];
  timeline: Phase[];
  toefl: string;
  more: { name: string; href: string; desc: string }[];
  skills: { label: string; items: string[] }[];
  activities: { role: string; org: string; time: string; desc: string }[];
};

// ---------- shared, language-independent pieces ----------

const repo = (name: string): Link => ({ label: name, href: `${GITHUB}/${name}` });
const KBOX_URL = "https://github.com/sysprog21/kbox";
const JETSEEK: Link = { label: "JetSeek", href: "https://github.com/2025-image-recognization-and-robotics/JetSeek" };
const PR = (n: number, label: string) => <a href={`${KBOX_URL}/pull/${n}`}>#{n}, {label}</a>;

const TAGS = {
  kbox: ["C", "Linux", "seccomp", "LKL", "ASan"],
  perf: ["C", "perf", "Cache", "Branch prediction"],
  jetseek: ["Python", "asyncio", "TCP", "YOLOv8", "Jetson"],
  ultrasound: ["TFLite", "Android", "Segmentation"],
};

const SKILLS = {
  systems: ["Linux kernel", "ptrace", "seccomp", "Memory management", "perf", "AddressSanitizer", "WebAssembly"],
  langs: ["C", "Rust", "Go", "Python", "SQL", "TypeScript"],
  embedded: ["Jetson / JetBot", "ROS 2", "Gazebo", "TFLite", "PyTorch", "TensorFlow", "LoRA", "Quantization"],
  tools: ["Git", "Docker", "PostgreSQL", "CockroachDB", "ConnectRPC", "Angular"],
};

const MORE = [
  repo("lab0-c"),
  repo("Scheduler_Simulator"),
  repo("Memory_Assign_Simulator"),
  { label: "kalgory-py", href: "https://github.com/kalgory-com/kalgory-py" },
  repo("ECG-segmentation-unet"),
];

const L = {
  os: [repo("Scheduler_Simulator"), repo("Memory_Assign_Simulator")],
  ml: [repo("Cifar10_VGG16"), repo("ECG-segmentation-unet")],
  kernel: [repo("lab0-c")],
  lab: [{ label: "INHPC Lab", href: "http://algorithm.csie.ncku.edu.tw/" }],
  ms2025: [
    repo("Image-processing-2025-hand-segmentation"),
    repo("MRI-GRE_flip_angle-and-HASTE_simulation"),
    JETSEEK,
  ],
  y2026: [{ label: "kbox", href: KBOX_URL }, repo("performance-analyzer")],
};

// ---------- English ----------

const en: Content = {
  ui: {
    home: "Home",
    menu: "Menu",
    photos: "Photos",
    legend: { school: "School", work: "Work" },
    email: "Email",
    cv: "CV (PDF)",
    switchLang: "中文",
    theme: { system: "Theme: system", light: "Theme: light", dark: "Theme: dark" },
  },
  role: "Systems Software Engineer",
  focus: ["Linux kernel", "Memory safety", "CPU performance", "Embedded systems"],
  facts: [
    { label: "Now", value: "M.S. student, Medical Informatics, NCKU" },
    { label: "Lab", value: "INHPC Lab · Prof. Sun-Yuan Hsieh", href: "http://algorithm.csie.ncku.edu.tw/" },
    { label: "Research", value: "Coflow scheduling" },
    { label: "Open source", value: "Contributor to kbox", href: KBOX_URL },
    { label: "Seeking", value: "Firmware, embedded and CPU-performance roles" },
    { label: "Based in", value: "Tainan, Taiwan" },
    { label: "Languages", value: "Mandarin (native), English (TOEFL 107)" },
  ],
  headings: {
    work: "Selected work",
    timeline: "Experience & education",
    more: "More projects",
    skills: "Skills",
    activities: "Activities",
    life: "Life",
  },
  projects: [
    {
      title: "kbox",
      href: KBOX_URL,
      role: "Open-source contributor",
      status: "1 merged · 3 in review",
      desc: "kbox boots a real Linux kernel as an in-process library (LKL) and routes seccomp-intercepted syscalls to it, which gives you a rootless sandbox with kernel-level syscall accuracy.",
      points: [
        <>
          Fixed stack-buffer-overflows that AddressSanitizer reported in network setup. The project's hand-rolled{" "}
          <code>ifreq</code> was 32 bytes against the kernel's 40, and its <code>rtentry</code> was 16 bytes short. I
          replaced them with the standard kernel definitions and added <code>_Static_assert</code> size guards.{" "}
          {PR(34, "merged")}
        </>,
        <>
          Fixed a <code>sendfile</code> routing bug where writes to shadow FDs skipped the virtual kernel and went
          straight to the host FD, and added an integration test for it. {PR(65, "in review")}
        </>,
        <>
          Added per-host-FD reference counting so the reverse host→VFD map recovers from its "multiple owners" state
          once shared descriptors close, with unit tests. {PR(68, "in review")}
        </>,
        <>
          Added a <code>make check-perf</code> target that builds without sanitizers at <code>-O2</code>, plus a
          benchmark showing FD lookup stays O(1) at about 1.6&nbsp;ns/op from 64 to 16,384 entries.{" "}
          {PR(70, "in review")}
        </>,
      ],
      tags: TAGS.kbox,
    },
    {
      title: "performance-analyzer",
      href: `${GITHUB}/performance-analyzer`,
      role: "Personal project",
      desc: (
        <>
          C microbenchmarks that measure how code patterns affect the CPU, using hardware counters from{" "}
          <code>perf stat</code>.
        </>
      ),
      points: [
        "Linked-list middle-finding, two-pass vs. fast/slow pointer. Node addresses are shuffled to put pressure on the cache, and the benchmark compares instructions, cycles and L1-dcache misses.",
        "Branching vs. branchless absolute-value sum over unpredictable data, measuring branch misses and IPC.",
      ],
      tags: TAGS.perf,
    },
    {
      title: "JetSeek",
      href: JETSEEK.href,
      role: "Team project · embedded robotics",
      desc: "An autonomous object-searching robot. A JetBot streams camera frames to a PC, and the PC finds the object the user picked and drives the robot to it.",
      points: [
        "Designed an event-driven architecture (asyncio pub/sub) that splits frame receiving, detection, search behavior and motor control into separate modules.",
        "Implemented the length-prefixed JPEG stream over TCP, YOLO inference, and a 10 Hz commander that arbitrates between search and approach.",
        "Wrote a scan-and-relocate exploration strategy with calibrated turning, plus vision-based steering that centers on the target and stops when it's close.",
      ],
      tags: TAGS.jetseek,
    },
    {
      title: "On-device carotid ultrasound screening",
      role: "Capstone → product at Aco Healthcare",
      status: "2nd place",
      points: [
        "Ran segmentation of carotid ultrasound images on a mobile device paired with a wireless handheld probe, using TensorFlow Lite on Android.",
        "Raised segmentation Dice from 64.0% to 82.2% and built object identification with 96.2% accuracy.",
        "Won 2nd place at the capstone exhibition, competing against the whole graduating class.",
      ],
      tags: TAGS.ultrasound,
    },
  ],
  timeline: [
    {
      degree: "M.S. in Medical Informatics",
      school: "National Cheng Kung University",
      time: "2023.09 – present",
      milestones: [
        {
          date: "2026",
          title: "Back to systems",
          links: L.y2026,
        },
        {
          date: "2025 Fall",
          title: "Imaging and robotics coursework",
          links: L.ms2025,
        },
        {
          date: "2025.09",
          title: "Joined the INHPC Lab",
          desc: "Advised by Prof. Sun-Yuan Hsieh. Research direction: coflow scheduling in datacenter networks (thesis topic in progress).",
          links: L.lab,
        },
        {
          date: "2025.01 – 2025.02",
          title: "Software Engineer",
          org: "MayaInfo Co., Ltd.",
          desc: "Customized ERP systems on Google Cloud Platform. Designed workflows, layout prototypes, RESTful APIs and entity-relationship diagrams.",
        },
        {
          date: "2024.06 – 2024.12",
          title: "Computer Vision Engineer (part-time)",
          org: "Aco Healthcare",
          desc: "Automatic mode switching for an ultrasound probe (90% scene-detection accuracy).",
        },
        { date: "2023.09", title: "Started the M.S. program" },
      ],
    },
    {
      degree: "B.S. in Computer Science and Engineering",
      school: "National Cheng Kung University",
      time: "2019.09 – 2023.06",
      milestones: [
        {
          date: "2023.03 – 2023.06",
          title: "Intern Engineer (part-time)",
          org: "Aco Healthcare",
          desc: "Turned my capstone project into a product (Dice 64.0% → 82.2%, 96.2% object identification).",
        },
        {
          date: "2023",
          title: "Capstone: on-device carotid ultrasound screening",
        },
        {
          date: "2023 Spring",
          title: "Linux Kernel Internals",
          links: L.kernel,
        },
        {
          date: "2022",
          title: "First machine-learning projects",
          links: L.ml,
        },
        {
          date: "2021 – 2022",
          title: "Operating Systems",
          links: L.os,
        },
        { date: "2019.09", title: "Started the B.S. program" },
      ],
    },
  ],
  toefl: "TOEFL iBT 107 (R 29 · L 30 · S 24 · W 24)",
  more: MORE.map((m, i) => ({
    name: m.label,
    href: m.href,
    desc: [
      "Queue implementation in C, for the Linux Kernel Internals course.",
      "User-level thread scheduler with signal handling and asynchronous/deferred cancellation.",
      "Virtual-memory simulator: TLB (LRU/random), page replacement (FIFO/clock), global vs. local frame allocation.",
      "Python SDK for a drag-and-drop algorithmic-trading tool. I set up parsing and PyPI publishing.",
      "QRS-complex segmentation and pulse-rate calculation with a U-Net.",
    ][i],
  })),
  skills: [
    { label: "Systems", items: SKILLS.systems },
    { label: "Languages", items: SKILLS.langs },
    { label: "Embedded & ML", items: SKILLS.embedded },
    { label: "Tools", items: SKILLS.tools },
  ],
  activities: [
    {
      role: "Accountant",
      org: "NCKU Yoga Club",
      time: "2025.09 – present",
      desc: "Manages the club's finances. Now in a second consecutive term.",
    },
  ],
};

// ---------- 繁體中文 ----------

const zhTW: Content = {
  ui: {
    home: "首頁",
    menu: "選單",
    photos: "照片",
    legend: { school: "學業", work: "工作" },
    email: "電子郵件",
    cv: "履歷 (PDF)",
    switchLang: "English",
    theme: { system: "主題：跟隨系統", light: "主題：淺色", dark: "主題：深色" },
  },
  role: "系統軟體工程師",
  focus: ["Linux 核心", "記憶體安全", "CPU 效能", "嵌入式系統"],
  facts: [
    { label: "現況", value: "國立成功大學 醫學資訊研究所 碩士生" },
    { label: "實驗室", value: "INHPC 前瞻智慧計算與應用實驗室 · 謝孫源教授", href: "http://algorithm.csie.ncku.edu.tw/" },
    { label: "研究", value: "Coflow 排程" },
    { label: "開源", value: "kbox 貢獻者", href: KBOX_URL },
    { label: "求職方向", value: "韌體、嵌入式與 CPU 效能相關職缺" },
    { label: "所在地", value: "台灣台南" },
    { label: "語言", value: "中文（母語）、英文（TOEFL 107）" },
  ],
  headings: {
    work: "精選作品",
    timeline: "經歷與學歷",
    more: "其他專案",
    skills: "技能",
    activities: "課外活動",
    life: "生活",
  },
  projects: [
    {
      ...en.projects[0],
      role: "開源貢獻者",
      status: "1 已合併 · 3 審查中",
      desc: "kbox 將真正的 Linux 核心以函式庫形式（LKL）載入行程中，並把 seccomp 攔截到的系統呼叫轉送給它，提供不需 root、具核心等級準確度的沙箱環境。",
      points: [
        <>
          修復 AddressSanitizer 在網路設定中偵測到的 stack-buffer-overflow：專案自訂的 <code>ifreq</code> 只有 32
          bytes（核心為 40），<code>rtentry</code> 少了 16 bytes。改用 Linux 核心標準定義並加上{" "}
          <code>_Static_assert</code> 大小檢查。{PR(34, "已合併")}
        </>,
        <>
          修正 <code>sendfile</code> 的路由錯誤：寫入 shadow FD 時繞過虛擬核心、直接寫到 host FD；並新增整合測試。
          {PR(65, "審查中")}
        </>,
        <>
          為每個 host FD 加入參照計數，讓 host→VFD 反向對照表在共享描述子關閉後能從「多重擁有者」狀態恢復，並附單元測試。
          {PR(68, "審查中")}
        </>,
        <>
          新增 <code>make check-perf</code>：以 <code>-O2</code>、不含 sanitizer 編譯，並以基準測試證明 FD 查詢為
          O(1)，從 64 到 16,384 筆皆約 1.6&nbsp;ns/op。{PR(70, "審查中")}
        </>,
      ],
    },
    {
      ...en.projects[1],
      role: "個人專案",
      desc: (
        <>
          以 <code>perf stat</code> 硬體計數器量測不同程式寫法對 CPU 行為影響的 C 微基準測試。
        </>
      ),
      points: [
        "鏈結串列找中點：兩次走訪 vs. 快慢指標。打亂節點記憶體位置以增加快取壓力，比較指令數、週期數與 L1-dcache miss。",
        "在難以預測的資料上比較分支與無分支的絕對值加總，量測 branch miss 與 IPC。",
      ],
    },
    {
      ...en.projects[2],
      role: "團隊專案 · 嵌入式機器人",
      desc: "自主搜尋物體的機器人：JetBot 將影像串流到 PC，PC 找到使用者指定的物體並驅動機器人前往。",
      points: [
        "設計事件驅動架構（asyncio pub/sub），將影像接收、偵測、搜尋行為與馬達控制拆成獨立模組。",
        "實作基於 TCP 的長度前綴 JPEG 串流、YOLO 推論，以及以 10 Hz 在搜尋與接近之間仲裁的指令模組。",
        "掃描並移位的探索策略（含轉向校正），以及以視覺置中目標、接近後停止的導引控制。",
      ],
    },
    {
      ...en.projects[3],
      title: "裝置端頸動脈超音波篩檢",
      role: "畢業專題 → Aco Healthcare 產品",
      status: "第二名",
      points: [
        "搭配無線手持超音波探頭，以 TensorFlow Lite 在 Android 行動裝置上執行頸動脈超音波影像分割。",
        "分割 Dice 從 64.0% 提升至 82.2%，並實作準確率 96.2% 的物件辨識。",
        "於同屆畢業專題展獲得第二名。",
      ],
    },
  ],
  timeline: [
    {
      degree: "醫學資訊研究所 碩士",
      school: "國立成功大學",
      time: "2023.09 – 現在",
      milestones: [
        {
          date: "2026",
          title: "回到系統領域",
          links: L.y2026,
        },
        {
          date: "2025 秋",
          title: "影像與機器人相關課程",
          links: L.ms2025,
        },
        {
          date: "2025.09",
          title: "加入 INHPC 前瞻智慧計算與應用實驗室",
          desc: "指導教授：謝孫源教授。研究方向：資料中心網路中的 coflow 排程（論文題目確定中）。",
          links: L.lab,
        },
        {
          date: "2025.01 – 2025.02",
          title: "軟體工程師",
          org: "MayaInfo Co., Ltd.",
          desc: "在 Google Cloud Platform 上客製化 ERP 系統，設計工作流程、版面原型、RESTful API 與 ERD。",
        },
        {
          date: "2024.06 – 2024.12",
          title: "電腦視覺工程師（兼職）",
          org: "Aco Healthcare",
          desc: "超音波探頭自動模式切換（場景辨識準確率 90%）。",
        },
        { date: "2023.09", title: "進入碩士班" },
      ],
    },
    {
      degree: "資訊工程學系 學士",
      school: "國立成功大學",
      time: "2019.09 – 2023.06",
      milestones: [
        {
          date: "2023.03 – 2023.06",
          title: "實習工程師（兼職）",
          org: "Aco Healthcare",
          desc: "將畢業專題發展為產品（Dice 64.0% → 82.2%，物件辨識 96.2%）。",
        },
        {
          date: "2023",
          title: "畢業專題：裝置端頸動脈超音波篩檢",
        },
        {
          date: "2023 春",
          title: "Linux 核心設計",
          links: L.kernel,
        },
        {
          date: "2022",
          title: "第一次接觸機器學習",
          links: L.ml,
        },
        {
          date: "2021 – 2022",
          title: "作業系統",
          links: L.os,
        },
        { date: "2019.09", title: "進入大學部" },
      ],
    },
  ],
  toefl: "TOEFL iBT 107（閱讀 29 · 聽力 30 · 口說 24 · 寫作 24）",
  more: en.more.map((m, i) => ({
    ...m,
    desc: [
      "Linux 核心設計課程的 C 語言佇列實作。",
      "使用者層級執行緒排程器，含訊號處理與非同步／延遲取消。",
      "虛擬記憶體模擬器：TLB（LRU／隨機）、頁面替換（FIFO／clock）、全域與區域 frame 配置。",
      "拖拉式演算法交易工具的 Python SDK，負責解析與 PyPI 發佈流程。",
      "以 U-Net 分割 QRS 波並計算心率。",
    ][i],
  })),
  skills: [
    { label: "系統", items: SKILLS.systems },
    { label: "程式語言", items: SKILLS.langs },
    { label: "嵌入式與 ML", items: SKILLS.embedded },
    { label: "工具", items: SKILLS.tools },
  ],
  activities: [
    {
      role: "會計",
      org: "成大瑜珈社",
      time: "2025.09 – 現在",
      desc: "負責社團財務管理，連續兩屆擔任。",
    },
  ],
};

export const content: Record<Lang, Content> = { en, "zh-TW": zhTW };
