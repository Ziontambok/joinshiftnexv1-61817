
import { useState } from 'react';
import { ChevronDown, ChevronUp, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { cn } from '@/lib/utils';
import { type HealthcareSetting } from '@/types/settings';

interface HealthcareSettingsProps {
  settings: HealthcareSetting[];
}

export const HealthcareSettings = ({ settings }: HealthcareSettingsProps) => {
  const [openCategories, setOpenCategories] = useState<string[]>([]);

  const toggleCategory = (category: string) => {
    setOpenCategories(current =>
      current.includes(category)
        ? current.filter(c => c !== category)
        : [...current, category]
    );
  };

  return (
    <div className="space-y-4">
      {settings.map((category, idx) => (
        <Collapsible
          key={idx}
          open={openCategories.includes(category.category)}
          onOpenChange={() => toggleCategory(category.category)}
          className="rounded-xl overflow-hidden border border-gray-100 shadow-md"
        >
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              className={cn(
                "w-full justify-between text-left p-5 hover:bg-gray-50 rounded-none",
                openCategories.includes(category.category) ? "bg-gradient-to-r from-gray-50 to-white" : ""
              )}
            >
              <span className="text-lg font-bold text-shiftnex-deep-blue">{category.category}</span>
              {openCategories.includes(category.category) ? (
                <ChevronUp className="h-5 w-5 text-shiftnex-teal transition-transform duration-300" />
              ) : (
                <ChevronDown className="h-5 w-5 text-shiftnex-teal transition-transform duration-300" />
              )}
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="px-4 pb-6 bg-gradient-to-b from-gray-50 to-white animate-accordion-down">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
              {category.items.map((setting, i) => (
                <div
                  key={i}
                  className="p-5 bg-white rounded-xl border border-teal-100 hover:border-teal-300 shadow-md hover:shadow-lg transition-all flex flex-col items-center text-center hover:-translate-y-1 duration-300"
                >
                  <div className="mb-4 bg-gradient-to-br from-teal-50 to-blue-50 p-3 rounded-full">
                    {/* Render the icon component by instantiating it */}
                    {<setting.icon size={24} className="text-shiftnex-teal" />}
                  </div>
                  <span className="font-bold text-shiftnex-deep-blue mb-2">{setting.name}</span>
                  <p className="text-sm text-gray-600">{setting.description}</p>
                  <div className="mt-3 flex items-center gap-1 text-xs text-teal-600">
                    <CheckCircle size={12} />
                    <span>Available for shifts</span>
                  </div>
                </div>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      ))}
    </div>
  );
};
