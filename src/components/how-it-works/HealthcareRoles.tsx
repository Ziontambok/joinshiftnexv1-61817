import { Link } from 'react-router-dom';
import { Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { RoleDescription } from './RoleDescription';
import { type HealthcareRoleCategory } from '@/types/roles';
interface HealthcareRolesProps {
  categories: HealthcareRoleCategory[];
  roleDescriptions: Record<string, any>;
}
export const HealthcareRoles = ({
  categories,
  roleDescriptions
}: HealthcareRolesProps) => {
  return <div className="grid md:grid-cols-3 gap-6 mt-10">
      {categories.map(category => {})}
    </div>;
};