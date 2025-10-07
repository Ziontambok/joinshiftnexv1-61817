
export interface Role {
  title: string;
  description: string;
  requirements: string;
  salary: string;
  growth: string;
}

export interface HealthcareRoleCategory {
  id: string;
  name: string;
  roles: string[];
}
