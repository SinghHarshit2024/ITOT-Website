import { Monitor, Zap, Wrench, Palette } from 'lucide-react';
import { CourseCategory } from '../types';

export const CATEGORIES: CourseCategory[] = [
  {
    title: "IT & Digital Services",
    icon: Monitor,
    color: "blue",
    courses: [
      { 
        name: "Computer Software Application (CSA)", 
        duration: "1 Year", 
        eligibility: "10th Pass + ITI / Diploma / B.Tech",
        category: "IT & Digital Services",
        prospects: ["Software Trainer", "IT Coordinator", "Database Admin Assistant"],
        description: "Master the art of pedagogical software training. This course focuses on advanced software applications, database management, and programming fundamentals to prepare instructors for the IT sector.",
        studyMaterials: {
          syllabusUrl: "/Documents/Syllabus/CSA_Syllabus.pdf",
          tmBookUrl: "/Documents/TM/TM_Book.pdf",
          ttBookUrls: ["/Documents/TT/CSA_TT.pdf"]
        }
      },
      { 
        name: "Computer Hardware and Networking Maintenance (CHNM)", 
        duration: "1 Year", 
        eligibility: "10th Pass + ITI / Diploma / B.Tech",
        category: "IT & Digital Services",
        prospects: ["Network Instructor", "System Admin", "Hardware Consultant"],
        description: "A comprehensive program covering computer hardware troubleshooting, network configuration, and system maintenance essential for modern IT infrastructure.",
        studyMaterials: {
          syllabusUrl: "/Documents/Syllabus/CHNM_Syllabus.pdf",
          tmBookUrl: "/Documents/TM/TM_Book.pdf",
          ttBookUrls: ["/Documents/TT/CHNM_TT.pdf"]
        }
      },
      { 
        name: "Office Management", 
        duration: "1 Year", 
        eligibility: "10th Pass + ITI / Diploma / B.Tech",
        category: "IT & Digital Services",
        prospects: ["Administrative Trainer", "Executive Assistant", "Office Manager"],
        description: "Focused on administrative excellence, digital office tools, communication skills, and organizational management.",
        studyMaterials: {
          syllabusUrl: "/Documents/Syllabus/OfficeManagement_Syllabus.pdf",
          tmBookUrl: "/Documents/TM/TM_Book.pdf",
          ttBookUrls: ["/Documents/TT/OfficeManagement_TT.pdf"]
        }
      },
      { 
        name: "Secretarial Practice (Hindi)", 
        duration: "1 Year", 
        eligibility: "10th Pass + ITI / Diploma / B.Tech",
        category: "IT & Digital Services",
        prospects: ["Language Instructor", "Personal Secretary", "Content Manager"],
        description: "Specialized training in secretarial duties, shorthand, and office correspondence specifically in the Hindi language.",
        studyMaterials: {
          syllabusUrl: "/Documents/Syllabus/SecretarialHindi_Syllabus.pdf",
          tmBookUrl: "/Documents/TM/TM_Book.pdf",
          ttBookUrls: ["/Documents/TT/SecretarialHindi_TT.pdf"]
        }
      },
    ]
  },
  {
    title: "Electrical & Electronics",
    icon: Zap,
    color: "amber",
    courses: [
      { 
        name: "Electrician", 
        duration: "1 Year", 
        eligibility: "10th Pass + ITI / Diploma / B.Tech", 
        category: "Electrical & Electronics",
        prospects: ["Electrical Instructor", "Maintenance Engineer", "Automation Specialist"],
        description: "Advanced training in electrical systems, wiring, and industrial maintenance for specialized instructors.",
        studyMaterials: {
          syllabusUrl: "/Documents/Syllabus/Electrician_Syllabus.pdf",
          tmBookUrl: "/Documents/TM/TM_Book.pdf",
          ttBookUrls: ["/Documents/TT/Electrician_TT_Volume1.pdf", "/Documents/TT/Electrician_TT_Volume2.pdf"]
        }
      },
      { 
        name: "Electronics Mechanic", 
        duration: "1 Year", 
        eligibility: "10th Pass + ITI / Diploma / B.Tech", 
        category: "Electrical & Electronics",
        prospects: ["Electronic Lab In-charge", "R&D Assistant", "Service Trainer"],
        description: "Covers electronic circuits, component testing, and repair of modern consumer and industrial electronics.",
        studyMaterials: {
          syllabusUrl: "/Documents/Syllabus/ElectronicsMechanic_Syllabus.pdf",
          tmBookUrl: "/Documents/TM/TM_Book.pdf",
          ttBookUrls: ["/Documents/TT/ElectronicsMechanic_TT.pdf"]
        }
      },
      { 
        name: "Instrument Mechanic", 
        duration: "1 Year", 
        eligibility: "10th Pass + ITI / Diploma / B.Tech", 
        category: "Electrical & Electronics",
        prospects: ["Process Control Expert", "Calibration Specialist", "Instrumentation Trainer"],
        description: "Training in process control instrumentation, calibration, and maintenance of industrial sensors.",
        studyMaterials: {
          syllabusUrl: "/Documents/Syllabus/InstrumentMechanic_Syllabus.pdf",
          tmBookUrl: "/Documents/TM/TM_Book.pdf",
          ttBookUrls: ["/Documents/TT/InstrumentMechanic_TT.pdf"]
        }
      },
      { 
        name: "Mechanic Refrigeration and Air-Conditioning", 
        duration: "1 Year", 
        eligibility: "10th Pass + ITI / Diploma / B.Tech", 
        category: "Electrical & Electronics",
        prospects: ["HVAC Instructor", "Service Head", "Facility Manager"],
        description: "Advanced RAC systems training, covering both domestic and industrial cooling solutions.",
        studyMaterials: {
          syllabusUrl: "/Documents/Syllabus/MRAC_Syllabus.pdf",
          tmBookUrl: "/Documents/TM/TM_Book.pdf",
          ttBookUrls: ["/Documents/TT/MRAC_TT.pdf"]
        }
      },
      { 
        name: "Electrician Power Distribution", 
        duration: "1 Year", 
        eligibility: "10th Pass + ITI / Diploma / B.Tech", 
        category: "Electrical & Electronics",
        prospects: ["Power Systems Trainer", "Distribution Network Engineer", "Maintenance Specialist"],
        description: "Advanced training in power distribution networks, industrial supply maintenance, and electrical safety protocols for large scale infrastructure.",
        studyMaterials: {
          syllabusUrl: "/Documents/Syllabus/PowerDistribution_Syllabus.pdf",
          tmBookUrl: "/Documents/TM/TM_Book.pdf",
          ttBookUrls: ["/Documents/TT/PowerDistribution_TT.pdf"]
        }
      },
    ]
  },
  {
    title: "Mechanical & Civil Works",
    icon: Wrench,
    color: "gray",
    courses: [
      { 
        name: "Fitter", 
        duration: "1 Year", 
        eligibility: "10th Pass + ITI / Diploma / B.Tech", 
        category: "Mechanical & Civil Works",
        prospects: ["Workshop Instructor", "Assembly Specialist", "Quality Control"],
        description: "Focused on precision fitting, machinery maintenance, and industrial assembly techniques.",
        studyMaterials: {
          syllabusUrl: "/Documents/Syllabus/Fitter_Syllabus.pdf",
          tmBookUrl: "/Documents/TM/TM_Book.pdf",
          ttBookUrls: ["/Documents/TT/Fitter_TT.pdf"]
        }
      },
      { 
        name: "Turner", 
        duration: "1 Year", 
        eligibility: "10th Pass + ITI / Diploma / B.Tech", 
        category: "Mechanical & Civil Works",
        prospects: ["Machining Trainer", "CNC Operator", "Tool Designer"],
        description: "Specialized training in lathe operations, metal shaping, and high-precision component manufacturing.",
        studyMaterials: {
          syllabusUrl: "/Documents/Syllabus/Turner_Syllabus.pdf",
          tmBookUrl: "/Documents/TM/TM_Book.pdf",
          ttBookUrls: ["/Documents/TT/Turner_TT.pdf"]
        }
      },
      { 
        name: "Draughtsman Civil", 
        duration: "1 Year", 
        eligibility: "10th Pass + ITI / Diploma / B.Tech", 
        category: "Mechanical & Civil Works",
        prospects: ["CAD Instructor", "Architecture Assistant", "Planning In-charge"],
        description: "Techniques for civil engineering drawings, structural design, and CAD application.",
        studyMaterials: {
          syllabusUrl: "/Documents/Syllabus/DMC_Syllabus.pdf",
          tmBookUrl: "/Documents/TM/TM_Book.pdf",
          ttBookUrls: ["/Documents/TT/DMC_TT.pdf"]
        }
      },
      { 
        name: "Plumber", 
        duration: "1 Year", 
        eligibility: "10th Pass + ITI / Diploma / B.Tech", 
        category: "Mechanical & Civil Works",
        prospects: ["Sanitation Trainer", "Site Supervisor", "Contractor"],
        description: "Training in modern plumbing systems, blueprint reading, and industrial plumbing solutions.",
        studyMaterials: {
          syllabusUrl: "/Documents/Syllabus/Plumber_Syllabus.pdf",
          tmBookUrl: "/Documents/TM/TM_Book.pdf",
          ttBookUrls: ["/Documents/TT/Plumber_TT.pdf"]
        }
      },
      { 
        name: "Draughtsman Mechanical", 
        duration: "1 Year", 
        eligibility: "10th Pass + ITI / Diploma / B.Tech", 
        category: "Mechanical & Civil Works",
        prospects: ["Mechanical CAD Instructor", "Design Engineer Assistant", "Drafting Consultant"],
        description: "Comprehensive training in mechanical engineering drawings, machine component design, and CAD standards.",
        studyMaterials: {
          syllabusUrl: "/Documents/Syllabus/DraughtsmanMechanical_Syllabus.pdf",
          tmBookUrl: "/Documents/TM/TM_Book.pdf",
          ttBookUrls: ["/Documents/TT/DraughtsmanMechanical_TT.pdf"]
        }
      },
      { 
        name: "Mechanic Diesel", 
        duration: "1 Year", 
        eligibility: "10th Pass + ITI / Diploma / B.Tech", 
        category: "Mechanical & Civil Works",
        prospects: ["Diesel Engine Trainer", "Heavy Vehicle Consultant", "Service Manager"],
        description: "Specialized training in maintenance, troubleshooting, and repair of various diesel engine systems.",
        studyMaterials: {
          syllabusUrl: "/Documents/Syllabus/MechanicDiesel_Syllabus.pdf",
          tmBookUrl: "/Documents/TM/TM_Book.pdf",
          ttBookUrls: ["/Documents/TT/MechanicDiesel_TT.pdf"]
        }
      },
      { 
        name: "Mechanic Tractor", 
        duration: "1 Year", 
        eligibility: "10th Pass + ITI / Diploma / B.Tech", 
        category: "Mechanical & Civil Works",
        prospects: ["Agri-machinery Trainer", "Farm Equipment Consultant", "Service Supervisor"],
        description: "Focused on maintenance and repair of agricultural tractors and related equipment used in farming.",
        studyMaterials: {
          syllabusUrl: "/Documents/Syllabus/MechanicTractor_Syllabus.pdf",
          tmBookUrl: "/Documents/TM/TM_Book.pdf",
          ttBookUrls: ["/Documents/TT/MechanicTractor_TT.pdf"]
        }
      },
    ]
  },
  {
    title: "Creative & Lifestyle",
    icon: Palette,
    color: "rose",
    courses: [
      { 
        name: "Cosmetology", 
        duration: "1 Year", 
        eligibility: "10th Pass + ITI / Diploma / B.Tech", 
        category: "Creative & Lifestyle",
        prospects: ["Beauty Trainer", "Salon Owner", "Skin Care Specialist"],
        description: "Advanced beauty culture training, covering skin care, hair styling, and holistic wellness.",
        studyMaterials: {
          syllabusUrl: "/Documents/Syllabus/Cosmetology_Syllabus.pdf",
          tmBookUrl: "/Documents/TM/TM_Book.pdf",
          ttBookUrls: ["/Documents/TT/Cosmetology_TT.pdf"]
        }
      },
      { 
        name: "Dress Making", 
        duration: "1 Year", 
        eligibility: "10th Pass + ITI / Diploma / B.Tech", 
        category: "Creative & Lifestyle",
        prospects: ["Fashion Pedagogy", "Apparel Designer", "Boutique Head"],
        description: "Specialized fashion design, pattern making, and garment construction for instructors.",
        studyMaterials: {
          syllabusUrl: "/Documents/Syllabus/DressMaking_Syllabus.pdf",
          tmBookUrl: "/Documents/TM/TM_Book.pdf",
          ttBookUrls: ["/Documents/TT/DressMaking_TT.pdf"]
        }
      },
      { 
        name: "Sewing Technology", 
        duration: "1 Year", 
        eligibility: "10th Pass + ITI / Diploma / B.Tech", 
        category: "Creative & Lifestyle",
        prospects: ["Industrial Sewing Specialist", "Production Manager", "Textile Trainer"],
        description: "Industrial sewing techniques, garment technology, and mass production efficiency.",
        studyMaterials: {
          syllabusUrl: "/Documents/Syllabus/SewingTechnology_Syllabus.pdf",
          tmBookUrl: "/Documents/TM/TM_Book.pdf",
          ttBookUrls: ["/Documents/TT/SewingTechnology_TT.pdf"]
        }
      },
      { 
        name: "Painting Technology", 
        duration: "1 Year", 
        eligibility: "10th Pass + ITI / Diploma / B.Tech", 
        category: "Creative & Lifestyle",
        prospects: ["Surface Finishing Trainer", "Industrial Painter", "Coating Consultant"],
        description: "Covers advanced spray painting techniques, surface preparation, and industrial coating technologies.",
        studyMaterials: {
          syllabusUrl: "/Documents/Syllabus/PaintingTechnology_Syllabus.pdf",
          tmBookUrl: "/Documents/TM/TM_Book.pdf",
          ttBookUrls: ["/Documents/TT/PaintingTechnology_TT.pdf"]
        }
      },
    ]
  }
];

export const ALL_COURSES = CATEGORIES.flatMap(cat => cat.courses);
