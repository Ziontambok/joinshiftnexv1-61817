
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

export const HealthcareRoles = ({ categories, roleDescriptions }: HealthcareRolesProps) => {
  return (
    <div className="grid md:grid-cols-3 gap-6 mt-10">
      {categories.map((category) => (
        <div
          key={category.id}
          className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100"
        >
          <h4 className="font-bold text-xl text-shiftnex-deep-blue mb-5">{category.name}</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {category.roles.map((role) => (
              <TooltipProvider key={role}>
                <Tooltip>
                  <Popover>
                    <PopoverTrigger asChild>
                      <TooltipTrigger asChild>
                        <button
                          className="px-4 py-2 bg-white shadow-md rounded-lg border border-purple-100 text-purple-800 font-bold hover:bg-purple-50 transition-all flex items-center gap-1 group hover:-translate-y-1 duration-300"
                        >
                          {role}
                          <Info size={14} className="text-purple-400 group-hover:text-purple-600 transition-colors" />
                        </button>
                      </TooltipTrigger>
                    </PopoverTrigger>
                    <TooltipContent className="bg-black/80 text-white border-0 px-3 py-1.5">
                      Click for details
                    </TooltipContent>
                    <PopoverContent className="w-80 p-0 bg-white shadow-2xl rounded-xl border-0 overflow-hidden">
                      {roleDescriptions[role] && (
                        <div className="p-0">
                          <div className="bg-gradient-to-r from-shiftnex-teal to-purple-500 p-4 mb-0">
                            <h5 className="font-bold text-white text-lg">{roleDescriptions[role].title}</h5>
                          </div>
                          <div className="p-4">
                            <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                              {roleDescriptions[role].description}
                            </p>
                            <RoleDescription role={roleDescriptions[role]} />
                            <div className="mt-4 text-center">
                              <Link to={`/careers/${role.toLowerCase()}`}>
                                <Button className="bg-gradient-to-r from-shiftnex-teal to-purple-500 hover:opacity-90 text-white border-0">
                                  View {role} Opportunities
                                </Button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      )}
                    </PopoverContent>
                  </Popover>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
