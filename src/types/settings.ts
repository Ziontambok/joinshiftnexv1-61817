
import { LucideIcon } from 'lucide-react';

export interface SettingItem {
  name: string;
  icon: LucideIcon;
  description: string;
}

export interface HealthcareSetting {
  category: string;
  items: SettingItem[];
}
