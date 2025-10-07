
import { type Role } from '@/types/roles';

interface RoleDescriptionProps {
  role: Role;
}

export const RoleDescription = ({ role }: RoleDescriptionProps) => {
  return (
    <div className="p-4">
      <div className="space-y-3 text-sm bg-gray-50 p-3 rounded-lg">
        <div className="flex items-start">
          <span className="font-semibold text-gray-700 w-28">Requirements:</span>
          <span className="text-gray-600">{role.requirements}</span>
        </div>
        <div className="flex items-start">
          <span className="font-semibold text-gray-700 w-28">Salary Range:</span>
          <span className="text-gray-600">{role.salary}</span>
        </div>
        <div className="flex items-start">
          <span className="font-semibold text-gray-700 w-28">Job Outlook:</span>
          <span className="text-gray-600">{role.growth}</span>
        </div>
      </div>
    </div>
  );
};
