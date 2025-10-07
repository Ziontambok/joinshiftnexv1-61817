import {
  Hospital,
  Home,
  Brain,
  ActivitySquare,
  Book,
  Heart,
  Building2,
  School,
  Building
} from 'lucide-react';
import { type HealthcareRoleCategory } from '@/types/roles';
import { type HealthcareSetting } from '@/types/settings';

export const healthcareRoles: HealthcareRoleCategory[] = [
  { 
    id: "registered",
    name: "Registered Professionals", 
    roles: ["RN", "RT"] 
  },
  { 
    id: "licensed", 
    name: "Licensed Professionals", 
    roles: ["LPN", "CMA", "CRMA"] 
  },
  { 
    id: "certified", 
    name: "Certified Assistants", 
    roles: ["CNA", "MA-C", "QMAP", "GNA", "CG"] 
  }
];

export const roleDescriptions = {
  "RN": {
    title: "Registered Nurse (RN)",
    description: "Provide and coordinate patient care, educate patients about health conditions, and provide advice and emotional support to patients and their families.",
    requirements: "Active RN license, 1+ year experience, BLS certification",
    salary: "$70,000 - $110,000",
    growth: "High demand with 7% projected growth"
  },
  "RT": {
    title: "Respiratory Therapist (RT)",
    description: "Assess and treat patients with breathing or cardiopulmonary disorders, manage ventilators and artificial airway devices.",
    requirements: "RT license, ACLS certification, 1+ year experience",
    salary: "$65,000 - $90,000",
    growth: "19% projected growth through 2029"
  },
  
  "LPN": {
    title: "Licensed Practical Nurse (LPN)",
    description: "Provide basic medical care under the direction of RNs and doctors. Monitor patients, change dressings, and administer prescribed medications.",
    requirements: "Active LPN license, BLS certification",
    salary: "$48,000 - $63,000",
    growth: "9% projected growth through 2029"
  },
  "CMA": {
    title: "Certified Medical Assistant (CMA)",
    description: "Perform administrative and clinical tasks in healthcare settings, including taking medical histories, measuring vital signs, and assisting with examinations.",
    requirements: "CMA certification, High school diploma or equivalent",
    salary: "$35,000 - $45,000",
    growth: "19% projected growth through 2029"
  },
  "CRMA": {
    title: "Certified Residential Medication Aide (CRMA)",
    description: "Administer medications to residents in assisted living facilities, following precise protocols and maintaining accurate documentation.",
    requirements: "CRMA certification, Previous caregiving experience",
    salary: "$32,000 - $42,000",
    growth: "Steady demand in assisted living settings"
  },
  
  "CNA": {
    title: "Certified Nursing Assistant (CNA)",
    description: "Provide basic care to patients, assisting with activities of daily living like bathing, dressing, and eating. Monitor vital signs and report changes to nursing staff.",
    requirements: "CNA certification, High school diploma or equivalent",
    salary: "$30,000 - $40,000",
    growth: "8% projected growth through 2029"
  },
  "MA-C": {
    title: "Medication Aide-Certified (MA-C)",
    description: "Administer medications to residents in long-term care facilities under supervision, monitoring for side effects and maintaining medication records.",
    requirements: "MA-C certification, Prior CNA experience often required",
    salary: "$32,000 - $42,000",
    growth: "Increasing demand in long-term care settings"
  },
  "QMAP": {
    title: "Qualified Medication Administration Personnel (QMAP)",
    description: "Administer medications to residents in assisted living and group home settings, following state regulations for safe medication management.",
    requirements: "QMAP certification, Basic caregiving experience",
    salary: "$32,000 - $40,000",
    growth: "Growing demand in residential care settings"
  },
  "GNA": {
    title: "Geriatric Nursing Assistant (GNA)",
    description: "Provide specialized care for elderly patients, with additional training in geriatric conditions, dementia care, and fall prevention.",
    requirements: "CNA certification plus GNA specialization",
    salary: "$32,000 - $42,000",
    growth: "High demand due to aging population"
  },
  "CG": {
    title: "Caregiver (CG)",
    description: "Provide companionship and basic care support for patients in their homes or residential facilities, assisting with daily activities and light housekeeping.",
    requirements: "Home Health Aide certification recommended",
    salary: "$26,000 - $35,000",
    growth: "33% projected growth through 2029"
  }
};

export const healthcareSettings: HealthcareSetting[] = [
  {
    category: "Hospital Settings",
    items: [
      {
        name: "Hospitals",
        icon: Hospital,
        description: "Acute care facilities providing emergency services and specialized medical treatments."
      },
      {
        name: "Urgent Care",
        icon: Hospital,
        description: "Walk-in clinics focused on delivery of ambulatory care for acute illness or injury."
      }
    ]
  },
  {
    category: "Residential Care",
    items: [
      {
        name: "Skilled Nursing",
        icon: UserCircle,
        description: "Facilities offering 24-hour medical care by licensed healthcare professionals."
      },
      {
        name: "Assisted Living",
        icon: Home,
        description: "Housing facilities for people who need help with daily care but not full medical care."
      },
      {
        name: "Memory Care",
        icon: Brain,
        description: "Specialized care for residents with Alzheimer's, dementia, or other memory issues."
      }
    ]
  },
  {
    category: "Specialized Care",
    items: [
      {
        name: "Rehabilitation",
        icon: ActivitySquare,
        description: "Services designed to help patients regain physical or mental abilities."
      },
      {
        name: "Post Acute",
        icon: Book,
        description: "Care provided after an acute hospital stay to continue recovery."
      },
      {
        name: "Behavioral Health",
        icon: Heart,
        description: "Facilities focused on mental health, substance abuse, and psychiatric services."
      },
      {
        name: "Home Health",
        icon: Home,
        description: "Medical care provided in a patient's home for illness or injury."
      },
      {
        name: "Hospice",
        icon: Heart,
        description: "End-of-life care focused on comfort and quality of life."
      }
    ]
  },
  {
    category: "Other Settings",
    items: [
      {
        name: "Clinics",
        icon: Building2,
        description: "Outpatient facilities providing routine and preventative healthcare services."
      },
      {
        name: "Schools",
        icon: School,
        description: "Healthcare services provided in educational institutions."
      },
      {
        name: "Correctional Facilities",
        icon: Building,
        description: "Medical services provided within jails, prisons, and detention centers."
      }
    ]
  }
];
import { UserCircle } from 'lucide-react';
