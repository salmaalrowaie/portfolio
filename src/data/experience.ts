import { Experience, SkillCategory } from "@/types/project";

export const experiences: Experience[] = [
  {
    organization: "KAUST",
    role: "Graduate Research Assistant",
    dates: "Aug 2024 – Present",
    bullets: [
      "Conducting research on technology innovation and entrepreneurship in engineering contexts",
      "Collaborating with interdisciplinary teams on product development projects",
      "Applying mechanical engineering principles to emerging technology challenges",
    ],
  },
  {
    organization: "Purdue University",
    role: "Undergraduate Research Assistant",
    dates: "Jan 2023 – May 2024",
    bullets: [
      "Designed and tested mechanical components for research prototypes using SolidWorks and ANSYS",
      "Operated CNC mills, lathes, and 3D printers to fabricate experimental apparatus",
      "Documented experimental procedures and results in technical reports",
    ],
  },
  {
    organization: "Engineering Projects in Community Service (EPICS)",
    role: "Mechanical Design Team Lead",
    dates: "Aug 2022 – May 2024",
    bullets: [
      "Led a team of 4 engineers on community-focused design projects",
      "Managed project timelines, design reviews, and client presentations",
      "Delivered two functional prototypes that were adopted by community partners",
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Software",
    items: [
      "SolidWorks",
      "CATIA",
      "Fusion 360",
      "ANSYS",
      "MATLAB",
      "Python",
      "ANSYS Fluent",
      "CNC/CAM Software",
    ],
  },
  {
    category: "Engineering Skills",
    items: [
      "CAD Modeling",
      "Finite Element Analysis",
      "GD&T",
      "DFM / DFA",
      "Thermal Analysis",
      "CFD",
      "Materials Selection",
      "Testing & Validation",
      "Design Iteration",
      "Product Development",
    ],
  },
  {
    category: "Manufacturing",
    items: [
      "CNC Machining",
      "3D Printing (FDM/SLA)",
      "Laser Cutting",
      "Welding",
      "Casting",
      "Assembly Planning",
      "Rapid Prototyping",
    ],
  },
];
