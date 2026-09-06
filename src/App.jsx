import React, { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Languages,
  Menu,
  Moon,
  Phone,
  Mail,
  Sparkles,
  Sun,
  X,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import logo from "./assets/logo.jpg";
import erpLogin from "./assets/erpLogin.jpg";
import erpDashboard from "./assets/erpDashboard.jpg";
import erpAccounts from "./assets/erpAccounts.jpg";
import erpInvoice from "./assets/erpInvoice.jpg";
import ymtazAppHero from "./assets/ymtazAppHero.jpg";
import ymtazGuideHero from "./assets/ymtazGuideHero.jpg";
import ymtazGuideGrid from "./assets/ymtazGuideGrid.jpg";
import coreHero from "./assets/coreHero.jpg";
import coreCta from "./assets/coreCta.jpg";
import coreBookingService from "./assets/coreBookingService.jpg";
import coreBookingSlots from "./assets/coreBookingSlots.jpg";

const IMAGES = {
  logo,
  erpLogin,
  erpDashboard,
  erpAccounts,
  erpInvoice,
  ymtazAppHero,
  ymtazGuideHero,
  ymtazGuideGrid,
  coreHero,
  coreCta,
  coreBookingService,
  coreBookingSlots,
};

const content = {
  ar: {
    dir: "rtl",
    brandTag: "// فريق برمجة متكامل",
    nav: {
      services: "الخدمات",
      work: "أعمالنا",
      process: "طريقة العمل",
      contact: "تواصل",
      cta: "واتساب",
    },
    hero: {
      eyebrow: "فريق تطوير برمجيات — عملاء حول العالم",
      title: "نبني الأنظمة اللي شركتك هتكبر عليها",
      sub: "Dev Squad Solutions فريق تطوير برمجيات بيحوّل الفكرة لمنتج شغّال: تطبيقات موبايل، حلول ذكاء اصطناعي، أنظمة ERP، منصات SaaS، مواقع ويب، وبرمجيات مؤسسية.",
      primary: "احجز استشارة مجانية",
      secondary: "شاهد أعمالنا",
      stats: [
        { num: "6", lbl: "مجالات تقنية بنغطيها" },
        { num: "30+", lbl: "أنظمة شغّالة فعليًا في السوق" },
        { num: "100%", lbl: "تسليم كود قابل للتوسع" },
      ],
    },
    servicesHead: { title: "الخدمات", tag: "01 — 06" },
    services: [
      {
        name: "تطبيقات الموبايل",
        desc: "تطبيقات iOS و Android بتجربة استخدام سلسة، من الفكرة لحد النشر على المتاجر.",
        stack: ["React Native", "Flutter"],
      },
      {
        name: "حلول الذكاء الاصطناعي",
        desc: "دمج نماذج AI في منتجك — أتمتة، شات بوت، تحليل بيانات، وتوصيات ذكية.",
        stack: ["LLM APIs", "Python"],
      },
      {
        name: "أنظمة ERP",
        desc: "أنظمة إدارة موارد المؤسسات: حسابات، مخازن، مبيعات، وموارد بشرية في مكان واحد.",
        stack: ["Laravel", "PHP", "Mern", ".Net"],
      },
      {
        name: "منصات SaaS",
        desc: "منتجات اشتراك جاهزة للسوق، بنظام باقات، فوترة، وتعدد مستخدمين من أول يوم.",
        stack: ["MERN", "Multi-tenant"],
      },
      {
        name: "منصات الويب",
        desc: "مواقع وداشبوردات ويب سريعة ومتجاوبة، مبنية على أساس تقني قابل للتوسع.",
        stack: ["React", "Node.js"],
      },
      {
        name: "برمجيات المؤسسات",
        desc: "أنظمة داخلية مخصصة للشركات الكبيرة، بتكامل مع الأنظمة الحالية عندك.",
        stack: ["Custom builds", "Integrations"],
      },
    ],
    workHead: {
      title: "أعمالنا",
      tag: "مشاريع حقيقية شغّالة",
      note: "معظم مشاريعنا مرتبطة باتفاقيات سرية (NDA) مع العملاء، فمش بنقدر نعرض كل حاجة — دي نظرة سريعة على شكل شغلنا فعليًا.",
    },
    work: [
      {
        meta: "منصة استشارات قانونية — ويب وموبايل",
        name: "يمتاز (Ymtaz)",
        desc: "منصة سعودية تقدّم الاستشارات والخدمات القانونية للأفراد والشركات، بتطبيق موبايل ونظام حجز مواعيد ودليل أنظمة متكامل.",
        link: "https://www.ymtaz.sa",
        label: "زيارة المنصة",
        images: [
          IMAGES.ymtazAppHero,
          IMAGES.ymtazGuideHero,
          IMAGES.ymtazGuideGrid,
        ],
      },
      {
        meta: "نظام ERP — لوحة تحكم محاسبية",
        name: "نظام ERP المحاسبي",
        desc: "لوحة تحكم لإدارة الحسابات والعمليات المالية للشركات، بتصميم عربي كامل وتقارير مباشرة. الصور دي معاينة سريعة — النظام الكامل خاص بالعميل.",
        link: "https://erp-sys-v1.vercel.app/dashboard",
        label: "زيارة اللوحة",
        images: [
          IMAGES.erpLogin,
          IMAGES.erpDashboard,
          IMAGES.erpAccounts,
          IMAGES.erpInvoice,
        ],
      },
      {
        meta: "مركز حجامة واستشفاء — حجز إلكتروني كامل",
        name: "CORE S+ (Higama Platform)",
        desc: "منصة حجز إلكتروني لمركز علاجي متخصص في الحجامة والاستشفاء الطبيعي، بنظام حجز خطوة بخطوة (اختيار الخدمة، الموعد، البيانات، التأكيد) وتصميم عربي كامل RTL.",
        link: "https://higamaplatform.com/",
        label: "زيارة الموقع",
        images: [
          IMAGES.coreHero,
          IMAGES.coreBookingService,
          IMAGES.coreBookingSlots,
          IMAGES.coreCta,
        ],
      },
    ],
    processHead: { title: "طريقة شغلنا", tag: "من الفكرة للتسليم" },
    process: [
      {
        num: "خطوة 01",
        name: "الفهم",
        desc: "بنسمع مشكلتك واحتياج شغلك كويس قبل ما نكتب سطر كود.",
      },
      {
        num: "خطوة 02",
        name: "التصميم",
        desc: "بنحط مخطط للنظام والواجهات قبل التنفيذ عشان مفيش مفاجآت.",
      },
      {
        num: "خطوة 03",
        name: "التنفيذ",
        desc: "تطوير على مراحل، وتقدر تشوف وتجرب المنتج أول بأول.",
      },
      {
        num: "خطوة 04",
        name: "التسليم والدعم",
        desc: "تسليم كامل للكود، ودعم فني بعد الإطلاق لأي تعديل أو توسعة.",
      },
    ],
    contactHead: {
      title: "عندك فكرة؟ خلينا نبنيها مع بعض",
      sub: "تواصل معانا دلوقتي، وهنرجعلك بخطة واضحة لمشروعك خلال يوم عمل واحد.",
    },
    contact: [
      {
        label: "واتساب",
        value: "+20 15 0884 2515",
        href: "https://wa.me/201508842515",
        icon: "phone",
      },
      {
        label: "البريد الإلكتروني",
        value: "devsquadsolutions@gmail.com",
        href: "mailto:devsquadsolutions@gmail.com",
        icon: "mail",
      },
      {
        label: "لينكدإن",
        value: "/dev-squad-solutions",
        href: "https://www.linkedin.com/company/dev-squad-solutions/",
        icon: "linkedin",
      },
      {
        label: "جيت هاب",
        value: "/DEV-Squad-Solutions",
        href: "https://github.com/DEV-Squad-Solutions",
        icon: "github",
      },
    ],
    footer: "© 2026 DEV SQUAD SOLUTIONS — القاهرة، مصر — بنشتغل عالميًا",
  },
  en: {
    dir: "ltr",
    brandTag: "// software house",
    nav: {
      services: "Services",
      work: "Work",
      process: "Process",
      contact: "Contact",
      cta: "WhatsApp",
    },
    hero: {
      eyebrow: "A software team building for clients worldwide",
      title: "We build the systems your company will grow on",
      sub: "Dev Squad Solutions turns ideas into working products: mobile apps, AI solutions, ERP systems, SaaS platforms, web platforms, and enterprise software.",
      primary: "Book a free consult",
      secondary: "See our work",
      stats: [
        { num: "6", lbl: "technical domains covered" },
        { num: "3+", lbl: "systems live in production" },
        { num: "100%", lbl: "scalable, handed-over code" },
      ],
    },
    servicesHead: { title: "Services", tag: "01 — 06" },
    services: [
      {
        name: "Mobile apps",
        desc: "iOS and Android apps with smooth UX, from concept through store launch.",
        stack: ["React Native", "Flutter"],
      },
      {
        name: "AI solutions",
        desc: "Bringing AI into your product — automation, chatbots, data analysis, smart recommendations.",
        stack: ["LLM APIs", "Python"],
      },
      {
        name: "ERP systems",
        desc: "Enterprise resource planning: accounting, inventory, sales, and HR in one place.",
        stack: ["Laravel", "PHP", "MernStack", ".Net"],
      },
      {
        name: "SaaS platforms",
        desc: "Subscription products ready for market — plans, billing, and multi-tenancy from day one.",
        stack: ["MERN", "Multi-tenant"],
      },
      {
        name: "Web platforms",
        desc: "Fast, responsive websites and dashboards, built on a technical base that scales.",
        stack: ["React", "Node.js", "MernStack", ".Net"],
      },
      {
        name: "Enterprise software",
        desc: "Custom internal systems for large companies, integrated with what you already run.",
        stack: ["Custom builds", "Integrations"],
      },
    ],
    workHead: {
      title: "Our work",
      tag: "Real, live projects",
      note: "Most of our projects are covered by client NDAs, so we can't show everything — here's a quick look at what our work actually looks like.",
    },
    work: [
      {
        meta: "Legal advisory platform — web & mobile",
        name: "Ymtaz",
        desc: "A Saudi platform offering legal advisory and services for individuals and companies, with a mobile app, appointment booking, and a full legal-guide system.",
        link: "https://www.ymtaz.sa",
        label: "Visit platform",
        images: [
          IMAGES.ymtazAppHero,
          IMAGES.ymtazGuideHero,
          IMAGES.ymtazGuideGrid,
        ],
      },
      {
        meta: "ERP — accounting dashboard",
        name: "Accounting ERP System",
        desc: "A dashboard for managing company accounts and financial operations, fully Arabic and with live reporting. These screens are a quick preview — the full system is client-owned.",
        link: "https://erp-sys-v1.vercel.app/dashboard",
        label: "Visit dashboard",
        images: [
          IMAGES.erpLogin,
          IMAGES.erpDashboard,
          IMAGES.erpAccounts,
          IMAGES.erpInvoice,
        ],
      },
      {
        meta: "Hijama & wellness clinic — full online booking",
        name: "CORE S+ (Higama Platform)",
        desc: "An online booking platform for a specialized hijama and natural-wellness clinic, with a step-by-step booking flow (service, time slot, details, confirmation) and a full Arabic RTL design.",
        link: "https://higamaplatform.com/",
        label: "Visit site",
        images: [
          IMAGES.coreHero,
          IMAGES.coreBookingService,
          IMAGES.coreBookingSlots,
          IMAGES.coreCta,
        ],
      },
    ],
    processHead: { title: "How we work", tag: "From idea to handover" },
    process: [
      {
        num: "Step 01",
        name: "Understand",
        desc: "We listen to your problem and what your business actually needs before writing a line of code.",
      },
      {
        num: "Step 02",
        name: "Design",
        desc: "We map out the system and interfaces before building, so there are no surprises later.",
      },
      {
        num: "Step 03",
        name: "Build",
        desc: "Development in stages, so you can see and test the product as it comes together.",
      },
      {
        num: "Step 04",
        name: "Handover & support",
        desc: "Full code handover, plus support after launch for any change or extension.",
      },
    ],
    contactHead: {
      title: "Have an idea? Let's build it together",
      sub: "Reach out now, and we'll come back with a clear plan for your project within one business day.",
    },
    contact: [
      {
        label: "WhatsApp",
        value: "+20 15 0884 2515",
        href: "https://wa.me/201508842515",
        icon: "phone",
      },
      {
        label: "Email",
        value: "devsquadsolutions@gmail.com",
        href: "mailto:devsquadsolutions@gmail.com",
        icon: "mail",
      },
      {
        label: "LinkedIn",
        value: "/dev-squad-solutions",
        href: "https://www.linkedin.com/company/dev-squad-solutions/",
        icon: "linkedin",
      },
      {
        label: "GitHub",
        value: "/DEV-Squad-Solutions",
        href: "https://github.com/DEV-Squad-Solutions",
        icon: "github",
      },
    ],
    footer: "© 2026 DEV SQUAD SOLUTIONS — Cairo, Egypt — Working worldwide",
  },
};

const extraContent = {
  ar: {
    trust: {
      kicker: "قدراتنا",
      title: "مش بس بنكتب كود — بنبني منتجات قابلة للنمو",
      text: "من أول تحليل الفكرة لحد الإطلاق والتسليم، بنهتم بالمعمارية، تجربة المستخدم، الأداء، وقابلية التوسع.",
      items: [
        [
          "01",
          "Product thinking",
          "نحوّل الاحتياج التجاري إلى منتج واضح ومراحل تنفيذ قابلة للقياس.",
        ],
        [
          "02",
          "Scalable architecture",
          "معمارية منظمة تسمح بإضافة features ومستخدمين وتكاملات بدون إعادة بناء النظام.",
        ],
        [
          "03",
          "Performance first",
          "نهتم بسرعة التحميل، استجابة الواجهة، وتقليل الشغل غير الضروري على المتصفح.",
        ],
        [
          "04",
          "Clean handover",
          "كود منظم، واضح، وقابل للصيانة مع تسليم كامل للعميل.",
        ],
      ],
    },
    stack: {
      kicker: "التقنيات",
      title: "Stack نختاره حسب المشكلة، مش حسب الموضة",
      text: "نستخدم الأدوات المناسبة للمشروع مع الحفاظ على أساس هندسي ثابت.",
      items: [
        "React",
        "Next.js",
        "React Native",
        "Laravel",
        "Node.js",
        "Python",
        "MySQL",
        "MongoDB",
        "REST APIs",
        "Docker",
        "Three.js",
        "Cloud",
      ],
    },
    engineering: {
      kicker: "Engineering",
      title: "تفاصيل صغيرة تعمل فرق كبير",
      text: "كل شاشة وكل API وكل animation عندنا لها سبب. الهدف منتج سريع، ثابت، وسهل التطوير.",
      metrics: [
        [
          "01",
          "Responsive by default",
          "تجربة محسوبة للموبايل، التابلت، اللابتوب والشاشات الكبيرة.",
        ],
        [
          "02",
          "API-ready UI",
          "واجهات منظمة لتتكامل بسهولة مع Laravel، Node أو أي Backend.",
        ],
        [
          "03",
          "Reusable systems",
          "Components وpatterns قابلة لإعادة الاستخدام بدل تكرار الكود.",
        ],
        [
          "04",
          "Production mindset",
          "مش بنبني Demo؛ بنبني حاجة تقدر تكمل وتكبر.",
        ],
      ],
    },
    cta: {
      eyebrow: "جاهز نبدأ؟",
      title: "عندك منتج في دماغك؟ خلّيه شغال.",
      text: "ابعتلنا الفكرة حتى لو لسه rough، ونحوّلها لخطة واضحة قابلة للتنفيذ.",
      primary: "ابدأ محادثة",
      secondary: "شوف المشاريع",
    },
  },
  en: {
    trust: {
      kicker: "Capabilities",
      title: "We don't just write code — we build products made to grow",
      text: "From discovery to launch and handover, we care about architecture, UX, performance, and scalability.",
      items: [
        [
          "01",
          "Product thinking",
          "We turn business needs into a clear product and measurable delivery phases.",
        ],
        [
          "02",
          "Scalable architecture",
          "Structured foundations that make new features, users, and integrations easier to add.",
        ],
        [
          "03",
          "Performance first",
          "Fast loading, responsive interfaces, and less unnecessary work in the browser.",
        ],
        [
          "04",
          "Clean handover",
          "Organized, maintainable code with a complete client handover.",
        ],
      ],
    },
    stack: {
      kicker: "Technology",
      title: "A stack chosen for the problem, not the trend",
      text: "We pick the right tools for each product while keeping the engineering foundation consistent.",
      items: [
        "React",
        "Next.js",
        "React Native",
        "Laravel",
        "Node.js",
        "Python",
        "MySQL",
        "MongoDB",
        "REST APIs",
        "Docker",
        "Three.js",
        "Cloud",
      ],
    },
    engineering: {
      kicker: "Engineering",
      title: "Small details. Big difference.",
      text: "Every screen, API, and animation has a reason. The goal is a product that feels fast, stable, and easy to extend.",
      metrics: [
        [
          "01",
          "Responsive by default",
          "A deliberate experience for phones, tablets, laptops, and large displays.",
        ],
        [
          "02",
          "API-ready UI",
          "Structured interfaces that integrate cleanly with Laravel, Node, or any backend.",
        ],
        [
          "03",
          "Reusable systems",
          "Reusable components and patterns instead of duplicated code.",
        ],
        [
          "04",
          "Production mindset",
          "We don't build a demo. We build something you can keep growing.",
        ],
      ],
    },
    cta: {
      eyebrow: "Ready to start?",
      title: "Have a product in mind? Let's make it real.",
      text: "Send us the idea, even if it's rough, and we'll turn it into a clear execution plan.",
      primary: "Start a conversation",
      secondary: "Explore our work",
    },
  },
};

const ICONS = {
  phone: Phone,
  mail: Mail,
  linkedin: FaLinkedin,
  github: FaGithub,
};

function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || visible) return;

    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [visible]);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "reveal-visible" : ""} ${className}`}
      style={{ "--delay": `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function SectionHead({ kicker, title, text }) {
  return (
    <div className="section-head">
      <div>
        {kicker && <div className="section-kicker mono">{kicker}</div>}
        <h2>{title}</h2>
      </div>
      {text && <p>{text}</p>}
    </div>
  );
}

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener?.("change", update);
    return () => media.removeEventListener?.("change", update);
  }, []);

  return reduced;
}

function HeroScene({ theme }) {
  const mountRef = useRef(null);
  const lineRef = useRef(null);
  const particleRef = useRef(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = Math.max(container.clientWidth, 1);
    const height = Math.max(container.clientHeight, 1);
    const isSmall = width < 700;
    const lowPower =
      navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;
    const particleCount = isSmall || lowPower ? 90 : 180;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(48, width / height, 0.1, 100);
    camera.position.set(0, 0, isSmall ? 7.4 : 6.4);

    const renderer = new THREE.WebGLRenderer({
      antialias: !isSmall,
      alpha: true,
      powerPreference: "high-performance",
    });

    renderer.setPixelRatio(
      Math.min(window.devicePixelRatio || 1, isSmall ? 1.25 : 1.6),
    );
    renderer.setSize(width, height, false);
    renderer.domElement.setAttribute("aria-hidden", "true");
    container.appendChild(renderer.domElement);

    const color = theme === "dark" ? 0xe7b65c : 0xc9832e;

    const geometry = new THREE.IcosahedronGeometry(isSmall ? 1.8 : 2.15, 1);
    const wireGeometry = new THREE.WireframeGeometry(geometry);
    const lineMaterial = new THREE.LineBasicMaterial({
      color,
      transparent: true,
      opacity: theme === "dark" ? 0.7 : 0.5,
    });
    const wire = new THREE.LineSegments(wireGeometry, lineMaterial);
    scene.add(wire);
    lineRef.current = lineMaterial;

    const innerGeometry = new THREE.IcosahedronGeometry(isSmall ? 0.9 : 1.1, 0);
    const innerWireGeometry = new THREE.WireframeGeometry(innerGeometry);
    const innerMaterial = new THREE.LineBasicMaterial({
      color,
      transparent: true,
      opacity: 0.22,
    });
    const inner = new THREE.LineSegments(innerWireGeometry, innerMaterial);
    scene.add(inner);

    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i += 1) {
      positions[i * 3] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3),
    );

    const particleMaterial = new THREE.PointsMaterial({
      color,
      size: isSmall ? 0.025 : 0.032,
      transparent: true,
      opacity: 0.42,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);
    particleRef.current = particleMaterial;

    let targetX = 0;
    let targetY = 0;
    let frameId = 0;
    let running = true;
    let visible = true;

    const onPointerMove = (event) => {
      const rect = container.getBoundingClientRect();
      targetX = ((event.clientX - rect.left) / rect.width - 0.5) * 0.9;
      targetY = ((event.clientY - rect.top) / rect.height - 0.5) * 0.9;
    };

    const onVisibility = () => {
      visible = !document.hidden;
    };

    const observer =
      "IntersectionObserver" in window
        ? new IntersectionObserver(
            ([entry]) => {
              visible = entry.isIntersecting;
            },
            { threshold: 0.01 },
          )
        : null;

    container.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);
    observer?.observe(container);

    const animate = () => {
      if (!running) return;

      if (visible && !reducedMotion) {
        wire.rotation.x += isSmall ? 0.0011 : 0.0015;
        wire.rotation.y += isSmall ? 0.0016 : 0.0022;
        inner.rotation.x -= 0.0008;
        inner.rotation.y -= 0.0012;
        particles.rotation.y += 0.0004;

        camera.position.x += (targetX * 0.8 - camera.position.x) * 0.025;
        camera.position.y += (-targetY * 0.8 - camera.position.y) * 0.025;
        camera.lookAt(0, 0, 0);
        renderer.render(scene, camera);
      }

      frameId = requestAnimationFrame(animate);
    };

    if (reducedMotion) renderer.render(scene, camera);
    else animate();

    const resizeObserver = new ResizeObserver(() => {
      const w = Math.max(container.clientWidth, 1);
      const h = Math.max(container.clientHeight, 1);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h, false);
    });

    resizeObserver.observe(container);

    return () => {
      running = false;
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      observer?.disconnect();
      container.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("visibilitychange", onVisibility);

      geometry.dispose();
      wireGeometry.dispose();
      lineMaterial.dispose();
      innerGeometry.dispose();
      innerWireGeometry.dispose();
      innerMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [reducedMotion, theme]);

  return <div className="hero-scene" ref={mountRef} aria-hidden="true" />;
}

export default function App() {
  const [theme, setTheme] = useState("dark");
  const [lang, setLang] = useState("ar");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const t = useMemo(
    () => ({ ...content[lang], ...extraContent[lang] }),
    [lang],
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      block: "start",
    });
  };

  return (
    <div className="site" data-theme={theme} dir={t.dir}>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="wrap nav-row">
          <button
            className="brand"
            onClick={() => scrollTo("top")}
            aria-label="Dev Squad Solutions home"
          >
            <img
              src={IMAGES.logo}
              alt="Dev Squad Solutions"
              className="brand-logo"
            />
            <span className="brand-copy">
              <strong>DEV SQUAD</strong>
              <small className="mono">SOLUTIONS</small>
            </span>
          </button>

          <nav className="desktop-nav" aria-label="Main navigation">
            <button onClick={() => scrollTo("services")}>
              {t.nav.services}
            </button>
            <button onClick={() => scrollTo("work")}>{t.nav.work}</button>
            <button onClick={() => scrollTo("process")}>{t.nav.process}</button>
            <button onClick={() => scrollTo("contact")}>{t.nav.contact}</button>
          </nav>

          <div className="nav-tools">
            <button
              className="tool-btn lang-btn"
              onClick={() => setLang(lang === "ar" ? "en" : "ar")}
              aria-label="Toggle language"
            >
              <Languages size={15} />
              <span>{lang === "ar" ? "EN" : "AR"}</span>
            </button>

            <button
              className="tool-btn"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <a
              className="nav-cta"
              href="https://wa.me/201508842515"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.nav.cta}
              <ArrowUpRight size={14} />
            </a>

            <button
              className="tool-btn menu-btn"
              onClick={() => setMenuOpen((value) => !value)}
              aria-expanded={menuOpen}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={17} /> : <Menu size={17} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="mobile-nav wrap">
            <button onClick={() => scrollTo("services")}>
              {t.nav.services}
            </button>
            <button onClick={() => scrollTo("work")}>{t.nav.work}</button>
            <button onClick={() => scrollTo("process")}>{t.nav.process}</button>
            <button onClick={() => scrollTo("contact")}>{t.nav.contact}</button>
            <a
              href="https://wa.me/201508842515"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.nav.cta}
            </a>
          </div>
        )}
      </header>

      <main id="top">
        <section className="hero-section">
          <HeroScene theme={theme} />
          <div className="hero-grid" aria-hidden="true" />

          <div className="wrap hero-content">
            <Reveal>
              <div className="hero-eyebrow">
                <span className="status-dot" />
                <span>{t.hero.eyebrow}</span>
              </div>

              <h1 className="hero-title">{t.hero.title}</h1>
              <p className="hero-sub">{t.hero.sub}</p>

              <div className="hero-actions">
                <a
                  className="btn btn-primary"
                  href="https://wa.me/201508842515"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.hero.primary}
                  <ArrowUpRight size={17} />
                </a>
                <button
                  className="btn btn-secondary"
                  onClick={() => scrollTo("work")}
                >
                  {t.hero.secondary}
                  <ArrowDown size={16} />
                </button>
              </div>

              <div className="hero-proof">
                {t.hero.stats.map((s, i) => (
                  <div className="hero-stat" key={i}>
                    <strong className="mono">{s.num}</strong>
                    <span>{s.lbl}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="hero-bottom-line wrap">
            <span className="mono">DEV / BUILD / SCALE</span>
            <span>
              {lang === "ar"
                ? "من الفكرة إلى منتج حقيقي"
                : "From idea to production"}
            </span>
          </div>
        </section>

        <section className="trust-section">
          <div className="wrap">
            <SectionHead
              kicker={t.trust.kicker}
              title={t.trust.title}
              text={t.trust.text}
            />
            <div className="trust-grid">
              {t.trust.items.map(([num, title, desc]) => (
                <Reveal key={num}>
                  <article className="feature-card">
                    <div className="feature-number mono">{num}</div>
                    <div className="feature-icon">
                      <Check size={16} />
                    </div>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="services">
          <div className="wrap">
            <SectionHead
              kicker="01 — 06"
              title={t.servicesHead.title}
              text={
                lang === "ar"
                  ? "حلول برمجية تتبني على احتياج المشروع، مش قالب جاهز."
                  : "Software solutions shaped around the product, not a template."
              }
            />
            <div className="service-grid">
              {t.services.map((s, i) => (
                <Reveal key={s.name} delay={i * 45}>
                  <article className="service-card">
                    <div className="service-top">
                      <span className="service-index mono">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <Sparkles size={16} />
                    </div>
                    <h3>{s.name}</h3>
                    <p>{s.desc}</p>
                    <div className="tag-list">
                      {s.stack.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="stack-section">
          <div className="wrap stack-layout">
            <SectionHead
              kicker={t.stack.kicker}
              title={t.stack.title}
              text={t.stack.text}
            />
            <div className="stack-cloud">
              {t.stack.items.map((item, i) => (
                <span className="stack-pill" key={item}>
                  <span className="mono">{String(i + 1).padStart(2, "0")}</span>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="work">
          <div className="wrap">
            <SectionHead
              kicker="02 — WORK"
              title={t.workHead.title}
              text={t.workHead.note}
            />
            <div className="work-grid">
              {t.work.map((w, i) => (
                <Reveal key={w.name} delay={i * 70}>
                  <article
                    className={`work-card ${i === 0 ? "work-card-featured" : ""}`}
                  >
                    <div className="work-copy">
                      <div className="work-meta mono">{w.meta}</div>
                      <h3>{w.name}</h3>
                      <p>{w.desc}</p>
                      <a
                        className="work-link"
                        href={w.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {w.label}
                        <ArrowUpRight size={16} />
                      </a>
                    </div>

                    {w.images?.length > 0 && (
                      <div className="work-gallery">
                        {w.images.map((src, j) => (
                          <img
                            key={src}
                            src={src}
                            alt={w.name + " — screen " + (j + 1)}
                            loading="lazy"
                            decoding="async"
                          />
                        ))}
                      </div>
                    )}
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="engineering-section">
          <div className="wrap">
            <SectionHead
              kicker={t.engineering.kicker}
              title={t.engineering.title}
              text={t.engineering.text}
            />
            <div className="engineering-grid">
              {t.engineering.metrics.map(([num, title, desc]) => (
                <Reveal key={num}>
                  <article className="engineering-card">
                    <span className="engineering-num mono">{num}</span>
                    <div>
                      <h3>{title}</h3>
                      <p>{desc}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="process">
          <div className="wrap">
            <SectionHead
              kicker="03 — PROCESS"
              title={t.processHead.title}
              text={t.processHead.tag}
            />
            <div className="process-grid">
              {t.process.map((p, i) => (
                <Reveal key={p.num} delay={i * 50}>
                  <article className="process-card">
                    <div className="process-line">
                      <span className="process-num mono">{p.num}</span>
                      <span className="process-dot" />
                    </div>
                    <h3>{p.name}</h3>
                    <p>{p.desc}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="wrap">
            <div className="contact-card">
              <div className="contact-copy">
                <div className="section-kicker mono">{t.cta.eyebrow}</div>
                <h2>{t.cta.title}</h2>
                <p>{t.cta.text}</p>
                <div className="hero-actions">
                  <a
                    className="btn btn-primary"
                    href="https://wa.me/201508842515"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.cta.primary}
                    <ArrowUpRight size={17} />
                  </a>
                  <button
                    className="btn btn-secondary"
                    onClick={() => scrollTo("work")}
                  >
                    {t.cta.secondary}
                  </button>
                </div>
              </div>

              <div className="contact-list">
                {t.contact.map((c) => {
                  const Icon = ICONS[c.icon];
                  const isMail = c.href.startsWith("mailto:");
                  return (
                    <a
                      className="contact-row"
                      href={c.href}
                      target={isMail ? undefined : "_blank"}
                      rel={isMail ? undefined : "noopener noreferrer"}
                      key={c.label}
                    >
                      <span className="contact-label">
                        <Icon size={16} />
                        {c.label}
                      </span>
                      <span className="contact-value mono">{c.value}</span>
                      <ArrowUpRight size={15} className="contact-arrow" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap footer-row">
          <div className="footer-brand">
            <img src={IMAGES.logo} alt="" className="footer-logo" />
            <span>DEV SQUAD SOLUTIONS</span>
          </div>
          <span className="mono">{t.footer}</span>
        </div>
      </footer>
    </div>
  );
}
