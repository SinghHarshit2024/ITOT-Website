import { Home, Info, Briefcase, Bell, Image as ImageIcon, PhoneCall, GraduationCap, Link as LinkIcon } from 'lucide-react';

export const navLinks = [
  { name: "Home", path: '/', icon: Home },
  { name: "About", path: '/about', icon: Info },
  { name: "Placement", path: '/placement', icon: Briefcase },
  { name: "Notices", path: '/notices', icon: Bell },
  { name: "Gallery", path: '/gallery', icon: ImageIcon },
];

export const academicsLinks = [
  { name: "Eligibility Criteria", path: '/eligibility' },
  { name: "Admission Process", path: '/admission' },
  { name: "Fees Structure", path: '/fees' },
  { name: "Courses", path: '/courses' },
];

export const quickLinks = [
  { name: "DGT", path: 'https://www.dgt.gov.in/en' },
  { name: "SCVT UP", path: 'https://www.scvtup.in/en' },
  { name: "NIMI Online Admission", path: 'https://www.nimionlineadmission.in/' },
  { name: "Skill India Digital", path: 'https://www.skillindiadigital.gov.in/home' },
  { name: "Bharat Skills CITS", path: 'https://bharatskills.gov.in/Home/CITS' },
];

export const contactLink = { name: "Contact", path: '/contact', icon: PhoneCall };

export { GraduationCap, LinkIcon };
