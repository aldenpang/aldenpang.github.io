
import { Experience, Education, Honor, Achievement } from './types';

export type Language = 'en' | 'zh' | 'fr';

export const TRANSLATIONS: Record<Language, {
  nav: { about: string; research: string; honors: string; contact: string; tag: string };
  hero: { title: string; subtitle: string; name: string; introPrefix: string; introBody: string };
  sections: { research: string; recognition: string; education: string; contact: string; contactSub: string; projects: string; academiaSubtitle: string };
  experiences: Experience[];
  education: Education[];
  honors: Honor[];
  interests: string[];
  footer: { rights: string; integrity: string; frontier: string };
}> = {
  en: {
    nav: { about: "About", research: "Experience", honors: "Honors", contact: "Contact", tag: "Researcher" },
    hero: { 
      title: "Bridging Research", 
      subtitle: "Innovation", 
      name: "Shuo Pang",
      introPrefix: "I am",
      introBody: "a Senior Technical Strategist and Researcher dedicated to exploring the future at the intersection of HCI, AI, and Real-Time Rendering."
    },
    sections: {
      research: "Work Experiences",
      recognition: "Honors & Achievements",
      education: "Education Experiences",
      contact: "Let's Connect.",
      contactSub: "Human-Computer Interaction, AI, Wearable and User Terminal technologies, and Real-Time Rendering.",
      projects: "Key Projects",
      academiaSubtitle: "Academia"
    },
    experiences: [
      {
        role: "Technical Strategy Researcher",
        company: "Huawei Canada",
        location: "Montreal, Canada",
        period: "2021 ~ 2025",
        description: [
          "Operate as a Senior Technical Researcher at the nexus of academic research and industrial innovation.",
          "Scrutinize academic and industry landscapes to discern emerging trends in HCI, AI, Wearable Technologies, and Real-Time Rendering.",
          "Organize academic salons, fostering environments for knowledge exchange and collaborative discourse.",
          "Collaborate with professors from top-tier Canadian universities to create academically rigorous outputs."
        ]
      },
      {
        role: "Research Supervisor & OVA China VP",
        company: "OVA",
        location: "Montreal, Canada",
        period: "2019 ~ 2021",
        description: [
          "Established key research initiatives in Mixed Reality for Industry 4.0 advancements.",
          "Developed Virtual Reality-based psychological therapies.",
          "Managed client relationships in the Chinese region, translating research innovation into market opportunities."
        ]
      },
      {
        role: "Project Lead and Mentor",
        company: "Artificial Intelligence Concordia / ConcordAI",
        location: "Montreal, Canada",
        period: "2019",
        description: [
          "Corporate mentor specializing in the convergence of Virtual Reality and Artificial Intelligence.",
          "Instructed on machine learning for visual recognition and pioneered real-time conversational AI characters in VR."
        ]
      },
      {
        role: "Chief Technology Officer & VP",
        company: "ShadeRealm Co., Ltd",
        location: "Beijing, China",
        period: "2015 ~ 2019",
        description: [
          "Directed advanced research in VR/AR with emphasis on next-generation HCI methodologies.",
          "Transformed theoretical concepts into solutions for cultural creation and live artistic performances.",
          "Achieved extensive media coverage for innovative user engagement in immersive environments."
        ]
      },
      {
        role: "Tech Lead",
        company: "Suzhou Crenovator Co., Ltd",
        location: "China",
        period: "2013 ~ 2015",
        description: [
          "Technical lead for advanced human motion and expression capture via depth camera technology.",
          "Pioneered unique data compression and reconstruction algorithms with >90% compression ratios.",
          "Integrated work with real-time rendering for accurate interactive human reconstruction."
        ]
      },
      {
        role: "Part-time Lecturer",
        company: "Pekin University & Beijing University of Technology",
        location: "Beijing, China",
        period: "2008 ~ 2014",
        description: [
          "Instructed students in the comprehensive use of Unity3D for interactive media creation.",
          "Integrated theoretical principles with practical application in VR research and development."
        ]
      },
      {
        role: "R&D Manager",
        company: "Beijing Bele Interactive Co., Ltd",
        location: "Beijing, China",
        period: "2006 ~ 2012",
        description: [
          "Specialized in the end-to-end development of real-time rendering engines from scratch.",
          "Focused on rendering optimization including culling (frustum, occlusion) and LOD for peak performance.",
          "Designed scene management systems using spatial data structures for efficient environment organization."
        ]
      }
    ],
    education: [
      { degree: "Master Degree", institution: "Beihang University", location: "Beijing, China", period: "2005 ~ 2006" },
      { degree: "Bachelor Degree", institution: "Ningxia University", location: "Yinchuan, China", period: "2000 ~ 2004" }
    ],
    honors: [
      { year: "2025", title: "US Patent: Natural Finger Pointing Interaction for Wearable Devices" },
      { year: "2025", title: "US Patent: US-2025-0191271 (Computer graphic distribution in realtime engine)" },
      { year: "2016", title: "UCCVR platinum prize on VR game development category" },
      { year: "2014", title: "Bronze Medal, Non-game application, Unity Award 2014 (China)" },
      { year: "2013", title: "“Funjam” Product Launch Conference" },
      { year: "2003", title: "Challenge Cup National First Prize" }
    ],
    interests: ["HCI", "Artificial Intelligence", "Wearable Tech", "Real-Time Rendering", "Spatial Computing"],
    footer: { rights: "All rights reserved.", integrity: "Academic Integrity", frontier: "Technological Frontier" }
  },
  zh: {
    nav: { about: "关于", research: "工作经历", honors: "荣誉", contact: "联系", tag: "研究员" },
    hero: { 
      title: "架起研究与", 
      subtitle: "创新的桥梁", 
      name: "庞硕",
      introPrefix: "我是",
      introBody: "华为加拿大高级技术策划师与战略研究员，致力于在 HCI、AI 与实时渲染的交界处探索未来。"
    },
    sections: {
      research: "职业历程",
      recognition: "荣誉与成就",
      education: "教育背景",
      contact: "联系我",
      contactSub: "专注于人机交互 (HCI)、人工智能 (AI)、可穿戴设备及实时渲染技术。",
      projects: "核心项目",
      academiaSubtitle: "学术背景"
    },
    experiences: [
      {
        role: "技术战略研究员 (高级技术策划师)",
        company: "华为 (加拿大)",
        location: "蒙特利尔, 加拿大",
        period: "2021 ~ 2025",
        description: [
          "任职于学术研究与工业创新的交汇点，深入剖析学术和行业格局以识别新兴趋势。",
          "追踪 HCI、AI、可穿戴技术、用户终端和实时渲染等关键领域的学术动态。",
          "组织学术沙龙，将洞察力转化为综合学术报告，为战略规划提供参考。",
          "与加拿大顶尖大学教授合作，确保技术方案的前沿性与学术严谨性。"
        ]
      },
      {
        role: "研究主管 & OVA 中国区副总裁",
        company: "OVA",
        location: "蒙特利尔, 加拿大",
        period: "2019 ~ 2021",
        description: [
          "主导工业 4.0 领域的混合现实 (MR) 应用研究计划。",
          "领导基于虚拟现实 (VR) 的心理治疗方案开发。",
          "管理中国区客户关系，将研究创新转化为 market 机会。"
        ]
      },
      {
        role: "项目负责人与导师",
        company: "ConcordAI (康考迪亚人工智能)",
        location: "蒙特利尔, 加拿大",
        period: "2019",
        description: [
          "企业导师，专注于虚拟现实与人工智能的融合教育。",
          "指导视觉识别领域的机器学习研究，并首创 VR 环境下的实时对话 AI 角色。"
        ]
      },
      {
        role: "首席技术官 (CTO) & 副总裁",
        company: "北京光影无限科技有限公司 (ShadeRealm)",
        location: "北京, 中国",
        period: "2015 ~ 2019",
        description: [
          "指导 VR/AR 领域的高级研究，侧重于下一代人机交互方法论。",
          "领导团队将理论概念转化为文化创意、交互展示和现场艺术表演的解决方案。",
          "因其在沉浸式环境中的创新用户交互方式获得媒体广泛报道。"
        ]
      },
      {
        role: "技术负责人 (Tech Lead)",
        company: "苏州Crenovator (Suzhou Crenovator)",
        location: "中国",
        period: "2013 ~ 2015",
        description: [
          "专注于基于深度摄像技术的人体运动与表情捕捉研究。",
          "首创数据压缩与重建算法，实现超过 90% 的压缩率。",
          "将该技术与实时渲染结合，实现精确、互动的实时人体运动重建。"
        ]
      },
      {
        role: "兼职讲师",
        company: "北京大学 & 北京工业大学",
        location: "北京, 中国",
        period: "2008 ~ 2014",
        description: [
          "教授 Unity3D 在交互媒体创作中的全面应用。",
          "将理论原则与 VR 研发的实际应用相结合，指导学生完成完整的开发周期。"
        ]
      },
      {
        role: "研发经理",
        company: "北京百利互动 (Beijing Bele Interactive)",
        location: "北京, 中国",
        period: "2006 ~ 2012",
        description: [
          "专注于实时渲染引擎的端到端开发，从零构建包括顶点处理和片段着色的完整渲染管线。",
          "侧重于渲染优化：实现视锥剔除、遮挡剔除及 LOD 技术以提升性能。",
          "设计基于空间数据结构的场景管理系统，并集成骨骼动画与物理模拟系统。"
        ]
      }
    ],
    education: [
      { degree: "硕士学位", institution: "北京航空航天大学 (BUAA)", location: "北京, 中国", period: "2005 ~ 2006" },
      { degree: "学士学位", institution: "宁夏大学", location: "银川, 中国", period: "2000 ~ 2004" }
    ],
    honors: [
      { year: "2025", title: "美国专利：可穿戴设备的自然手指指向交互" },
      { year: "2025", title: "美国专利: US-2025-0191271 (实时引擎中的图形分发技术)" },
      { year: "2016", title: "UCCVR VR 游戏开发类 白金奖" },
      { year: "2014", title: "Unity 大奖 (中国) 非游戏类 铜奖" },
      { year: "2013", title: "“Funjam” 产品发布会荣誉" },
      { year: "2003", title: "“挑战杯” 全国一等奖" }
    ],
    interests: ["人机交互", "人工智能", "可穿戴技术", "实时渲染", "用户终端"],
    footer: { rights: "版权所有。", integrity: "学术诚信", frontier: "技术前沿" }
  },
  fr: {
    nav: { about: "À Propos", research: "Expérience", honors: "Honneurs", contact: "Contact", tag: "Chercheur" },
    hero: { 
      title: "Relier Recherche", 
      subtitle: "et Innovation", 
      name: "Shuo Pang",
      introPrefix: "Je suis",
      introBody: "un stratège technique principal et chercheur dédié à l'exploration du futur à l'intersection de l'HCI, de l'IA et du rendu en temps réel."
    },
    sections: {
      research: "Parcours Professionnel",
      recognition: "Honneurs & Succès",
      education: "Éducation",
      contact: "Contactez-moi.",
      contactSub: "Expert en Interaction Homme-Machine (HCI), IA, Wearables et Rendu Temps Réel.",
      projects: "Contributions Clés",
      academiaSubtitle: "Académies"
    },
    experiences: [
      {
        role: "Chercheur en Stratégie Technique",
        company: "Huawei Canada",
        location: "Montréal, Canada",
        period: "2021 ~ 2025",
        description: [
          "Opérer en tant que planificateur technique principal à l'intersection de la recherche académique et de l'innovation industrielle.",
          "Analyser les paysages académiques et industriels pour identifier les tendances émergentes en HCI, IA, technologies portables et rendu temps réel.",
          "Organiser des salons académiques, favorisant des environnements d'échange de connaissances et de discours collaboratifs.",
          "Collaborer avec des professeurs d'universités canadiennes de premier plan pour créer des résultats académiquement rigoureux."
        ]
      },
      {
        role: "Superviseur de Recherche & VP OVA Chine",
        company: "OVA",
        location: "Montréal, Canada",
        period: "2019 ~ 2021",
        description: [
          "Mise en place d'initiatives de recherche clés en réalité mixte pour les avancées de l'Industrie 4.0.",
          "Développement de thérapies psychologiques basées sur la réalité virtuelle.",
          "Gestion des relations clients dans la région chinoise, traduisant l'innovation de recherche en opportunités de marché."
        ]
      },
      {
        role: "Chef de Projet et Mentor",
        company: "Artificial Intelligence Concordia / ConcordAI",
        location: "Montréal, Canada",
        period: "2019",
        description: [
          "Mentor d'entreprise spécialisé dans la convergence de la réalité virtuelle et de l'intelligence artificielle.",
          "Enseignement de l'apprentissage automatique pour la reconnaissance visuelle et pionnier des personnages d'IA conversationnelle en temps réel dans la VR."
        ]
      },
      {
        role: "Directeur de la Technologie (CTO) & VP",
        company: "ShadeRealm Co., Ltd",
        location: "Pékin, Chine",
        period: "2015 ~ 2019",
        description: [
          "Direction de recherches avancées en VR/AR avec un accent sur les méthodologies HCI de nouvelle génération.",
          "Transformation de concepts théoriques en solutions pour la création culturelle et les performances artistiques en direct.",
          "Obtention d'une large couverture médiatique pour l'engagement innovant des utilisateurs dans des environnements immersifs."
        ]
      },
      {
        role: "Responsable Technique",
        company: "Suzhou Crenovator Co., Ltd",
        location: "Chine",
        period: "2013 ~ 2015",
        description: [
          "Responsable technique pour la capture avancée de mouvements et d'expressions humaines via la technologie de caméra de profondeur.",
          "Pionnier d'algorithmes de compression et de reconstruction de données uniques avec des ratios de compression > 90 %.",
          "Intégration du travail avec le rendu temps réel pour une reconstruction humaine interactive précise."
        ]
      },
      {
        role: "Chargé de Cours à Temps Partiel",
        company: "Pekin University & Beijing University of Technology",
        location: "Pékin, Chine",
        period: "2008 ~ 2014",
        description: [
          "Instruction des étudiants sur l'utilisation complète d'Unity3D pour la création de médias interactifs.",
          "Intégration des principes théoriques avec l'application pratique dans la recherche et le développement VR."
        ]
      },
      {
        role: "Responsable R&D",
        company: "Beijing Bele Interactive Co., Ltd",
        location: "Pékin, Chine",
        period: "2006 ~ 2012",
        description: [
          "Spécialisation dans le développement de bout en bout de moteurs de rendu temps réel à partir de zéro.",
          "Focus sur l'optimisation du rendu, y compris le culling (frustum, occlusion) et le LOD pour des performances de pointe.",
          "Conception de systèmes de gestion de scènes utilisant des structures de données spatiales pour une organisation efficace de l'environnement."
        ]
      }
    ],
    education: [
      { degree: "Maîtrise en Informatique", institution: "Université de Beihang (BUAA)", location: "Pékin, Chine", period: "2005 ~ 2006" },
      { degree: "Baccalauréat en Informatique", institution: "Université de Ningxia", location: "Yinchuan, Chine", period: "2000 ~ 2004" }
    ],
    honors: [
      { year: "2025", title: "Brevet US : Interaction par pointage naturel du doigt pour dispositifs portables" },
      { year: "2025", title: "Brevet US: US-2025-0191271 (Distribution de graphiques informatiques dans un moteur temps réel)" },
      { year: "2016", title: "Prix Platine UCCVR (Développement VR)" },
      { year: "2014", title: "Médaille de Bronze, Unity Award (Chine)" },
      { year: "2013", title: "Conférence de lancement du produit « Funjam »" },
      { year: "2003", title: "Premier Prix National Challenge Cup" }
    ],
    interests: ["HCI", "IA", "Wearables", "Rendu Temps Réel", "Spatial Computing"],
    footer: { rights: "Tous droits réservés.", integrity: "Intégrité Académique", frontier: "Frontière Technologique" }
  }
};
