import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "what-to-wear",
    title: "What to Wear to Stay Warm",
    year: 2024,
    semester: "Fall",
    imageUrl: "/placeholder.svg",
    objectives: "To explore the relationship between clothing insulation and environmental conditions, developing a data-driven approach to thermal comfort analysis.",
    outcomes: "Successfully developed a predictive model for optimal clothing selection based on weather conditions, providing actionable recommendations for thermal comfort.",
    contribution: "Led the research team as the primary data analyst, designed the experimental methodology, collected and analyzed thermal data, and developed the predictive algorithms.",
    technicalDetails: "Utilized thermal analysis software and statistical modeling techniques to analyze the relationship between environmental variables (temperature, humidity, wind speed) and required clothing insulation levels. Implemented regression models and validated predictions against experimental data.",
    skills: ["Thermal Analysis", "Data Modeling", "Experimental Design", "Statistical Analysis", "Technical Writing"],
    media: {
      images: [],
      videos: [],
      reportLinks: []
    }
  },
  {
    id: "cnc-smiley",
    title: "CNC Smiley Face",
    year: 2024,
    semester: "Fall",
    imageUrl: "/placeholder.svg",
    objectives: "To demonstrate proficiency in CAD design and CNC machining by creating a precision-crafted component with complex geometries.",
    outcomes: "Produced a high-precision machined part with tolerances within ±0.001 inches, demonstrating mastery of CNC operations and G-code programming.",
    contribution: "Designed the complete CAD model, generated toolpaths, wrote custom G-code, and operated the CNC machine to produce the final component.",
    technicalDetails: "Created detailed 3D CAD models using SolidWorks, generated optimized toolpaths considering cutting speeds and feed rates, and programmed multi-axis CNC operations. Implemented proper fixturing and work-holding strategies to maintain dimensional accuracy.",
    skills: ["CAD Design", "CNC Machining", "G-code Programming", "SolidWorks", "Manufacturing Processes"],
    media: {
      images: [],
      videos: [],
      reportLinks: []
    }
  },
  {
    id: "transmission-design",
    title: "Transmission Design",
    year: 2024,
    semester: "Spring",
    imageUrl: "/placeholder.svg",
    objectives: "To design a comprehensive mechanical transmission system optimized for torque delivery and efficiency across varying operational conditions.",
    outcomes: "Created a functional transmission design meeting all performance specifications with 92% mechanical efficiency and optimized gear ratios.",
    contribution: "Served as the lead mechanical design engineer, performed all stress calculations, designed gear geometries, and validated the design through FEA simulations.",
    technicalDetails: "Conducted detailed gear tooth stress analysis using AGMA standards, performed shaft design calculations considering torsion and bending, and utilized ANSYS for finite element validation. Optimized gear ratios to match torque-speed requirements while minimizing losses.",
    skills: ["Mechanical Design", "Gear Design", "FEA", "ANSYS", "Stress Analysis", "CAD"],
    media: {
      images: [],
      videos: [],
      reportLinks: []
    }
  },
  {
    id: "pinball-machine",
    title: "Pinball Machine",
    year: 2024,
    semester: "Spring",
    imageUrl: "/placeholder.svg",
    objectives: "To design and build an interactive mechanical game integrating sensors, actuators, and user experience elements in a functional pinball machine.",
    outcomes: "Built a fully functional pinball machine with custom mechanical features, electronic scoring system, and engaging gameplay mechanics.",
    contribution: "Led the mechanical design and system integration, designed custom flipper mechanisms, integrated sensors and actuators, and managed iterative prototyping based on user testing feedback.",
    technicalDetails: "Designed spring-loaded mechanisms for ball launching and flipper actuation, integrated Arduino-based control systems for sensors and solenoids, and implemented mechanical stops and bumpers with precise placement for optimal gameplay. Used rapid prototyping for iterative design improvements.",
    skills: ["Mechanical Design", "Mechatronics", "Arduino Programming", "User Experience Design", "Rapid Prototyping"],
    media: {
      images: [],
      videos: [],
      reportLinks: []
    }
  },
  {
    id: "robotic-arm",
    title: "Robotic Arm Project",
    year: 2024,
    semester: "Spring",
    imageUrl: "/placeholder.svg",
    objectives: "To design and fabricate a multi-axis robotic arm with programmable control system capable of precision pick-and-place operations.",
    outcomes: "Developed a precise robotic arm with 5 degrees of freedom, achieving repeatability within 2mm and successful completion of pick-and-place tasks.",
    contribution: "Designed the complete mechanical structure, implemented forward and inverse kinematics algorithms, programmed servo control systems, and integrated the control software.",
    technicalDetails: "Calculated forward and inverse kinematics using Denavit-Hartenberg parameters, implemented PID control for servo motors, and designed mechanical joints with proper bearing selection and torque calculations. Programmed control interface using Python and Arduino for real-time servo control.",
    skills: ["Robotics", "Kinematics", "Control Systems", "Python", "Arduino", "Mechanical Design"],
    media: {
      images: [],
      videos: [],
      reportLinks: []
    }
  },
  {
    id: "fluid-dynamics",
    title: "Fluid Dynamics Analysis",
    year: 2023,
    semester: "Fall",
    imageUrl: "/placeholder.svg",
    objectives: "To conduct computational fluid dynamics analysis of complex flow patterns and validate results against theoretical predictions.",
    outcomes: "Generated comprehensive flow analysis with validated CFD results showing excellent agreement with analytical solutions (within 5% error).",
    contribution: "Performed all CFD simulations, created optimized mesh geometries, analyzed pressure and velocity distributions, and validated results against theoretical predictions and experimental data.",
    technicalDetails: "Utilized ANSYS Fluent for 3D flow simulations, implemented k-epsilon turbulence models, performed mesh independence studies with grid refinement analysis, and validated boundary conditions. Analyzed pressure drop, velocity profiles, and turbulence characteristics.",
    skills: ["CFD", "ANSYS Fluent", "Turbulence Modeling", "Mesh Generation", "Data Validation"],
    media: {
      images: [],
      videos: [],
      reportLinks: []
    }
  },
  {
    id: "gear-mechanism",
    title: "Gear Mechanism Study",
    year: 2023,
    semester: "Fall",
    imageUrl: "/placeholder.svg",
    objectives: "To analyze and optimize compound gear systems, focusing on efficiency improvements and mechanical advantage optimization.",
    outcomes: "Optimized gear train design achieving 40% improvement in efficiency over baseline through geometry optimization and material selection.",
    contribution: "Conducted all mechanical analysis, performed gear tooth profile optimization, calculated stress concentrations, and validated designs through prototype testing.",
    technicalDetails: "Applied Lewis equation for bending stress analysis, performed contact stress calculations using Hertzian contact theory, optimized tooth profiles using involute gear theory, and validated results through physical testing. Analyzed power losses due to friction and implemented lubrication strategies.",
    skills: ["Gear Design", "Mechanical Analysis", "Optimization", "Stress Analysis", "Material Selection"],
    media: {
      images: [],
      videos: [],
      reportLinks: []
    }
  },
  {
    id: "structural-analysis",
    title: "Structural Analysis Project",
    year: 2023,
    semester: "Spring",
    imageUrl: "/placeholder.svg",
    objectives: "To perform comprehensive finite element analysis of structural components under various loading conditions and validate structural integrity.",
    outcomes: "Validated structural integrity of critical components with factor of safety above 2.5 under worst-case loading scenarios, ensuring safe operation.",
    contribution: "Performed all FEA simulations, defined loading conditions and boundary constraints, analyzed stress distributions and deflections, and optimized component geometry for weight reduction.",
    technicalDetails: "Utilized ANSYS Mechanical for static structural analysis, implemented mesh convergence studies, performed modal analysis for natural frequency determination, and conducted fatigue analysis for cyclic loading. Applied von Mises failure criteria and optimized designs through parametric studies.",
    skills: ["FEA", "ANSYS Mechanical", "Structural Analysis", "Modal Analysis", "Design Optimization"],
    media: {
      images: [],
      videos: [],
      reportLinks: []
    }
  },
  {
    id: "thermodynamics-system",
    title: "Thermodynamics System",
    year: 2023,
    semester: "Spring",
    imageUrl: "/placeholder.svg",
    objectives: "To design and analyze a closed-loop thermodynamic cycle for efficient energy conversion with optimized component selection.",
    outcomes: "Achieved 15% efficiency improvement through thermodynamic cycle optimization, component selection, and heat exchanger design refinement.",
    contribution: "Designed the complete thermodynamic cycle, performed energy and exergy analysis, sized all heat exchangers and turbomachinery, and conducted optimization studies.",
    technicalDetails: "Applied first and second law analysis for cycle performance evaluation, calculated isentropic efficiencies for turbomachinery, designed heat exchangers using LMTD method, and performed pinch point analysis. Optimized operating pressures and temperatures to maximize thermal efficiency while considering practical constraints.",
    skills: ["Thermodynamics", "Heat Transfer", "Cycle Analysis", "Energy Systems", "Exergy Analysis"],
    media: {
      images: [],
      videos: [],
      reportLinks: []
    }
  },
  {
    id: "manufacturing-process",
    title: "Manufacturing Process Design",
    year: 2022,
    semester: "Fall",
    imageUrl: "/placeholder.svg",
    objectives: "To develop an optimized manufacturing process for a mechanical assembly, reducing production time while maintaining strict quality standards.",
    outcomes: "Reduced production time by 30% through process optimization and workflow improvements while maintaining all quality metrics.",
    contribution: "Analyzed existing manufacturing processes, identified bottlenecks, designed improved workflows, implemented quality control checkpoints, and trained team members on new procedures.",
    technicalDetails: "Conducted time-motion studies to identify inefficiencies, implemented lean manufacturing principles to eliminate waste, designed custom fixtures to improve assembly speed, and established statistical process control (SPC) methods for quality assurance. Applied design for manufacturing (DFM) principles to simplify assembly operations.",
    skills: ["Manufacturing Engineering", "Process Optimization", "Lean Manufacturing", "Quality Control", "DFM"],
    media: {
      images: [],
      videos: [],
      reportLinks: []
    }
  }
];
