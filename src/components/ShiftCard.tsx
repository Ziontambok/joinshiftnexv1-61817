
import React from 'react';
import { MapPin, Clock, DollarSign, Calendar, Building, Shield, ImageIcon } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export interface ShiftCardProps {
  facilityName: string;
  facilityType?: string;
  location: string;
  payRate: string;
  shiftType?: 'Instant' | 'Block' | 'Job';
  dateOrPeriod: string;
  benefits?: string[];
  distance?: string;
  image?: string;
}

const ShiftCard = ({
  facilityName,
  facilityType = 'Hospital',
  location,
  payRate,
  shiftType = 'Instant', 
  dateOrPeriod,
  benefits = [],
  distance,
  image,
}: ShiftCardProps) => {
  // Determine badge color based on shift type
  const badgeColorClass = 
    shiftType === 'Instant' ? 'bg-soft-orange' : 
    shiftType === 'Block' ? 'bg-soft-teal' : 'bg-soft-blue';
  
  const [imageError, setImageError] = React.useState(false);

  const handleImageError = () => {
    setImageError(true);
  };
  
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:-translate-y-1 h-full border border-gray-100 rounded-xl shadow-sm hover:shadow-md">
      <div className="relative h-44">
        {imageError ? (
          <div className="w-full h-full flex items-center justify-center bg-gray-100">
            <ImageIcon className="w-12 h-12 text-gray-400" />
          </div>
        ) : (
          <img 
            src={image || 'https://images.unsplash.com/photo-1504439468489-c8920d796a29?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'} 
            alt={facilityName} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            onError={handleImageError}
            loading="lazy"
          />
        )}
        <div className="absolute top-3 right-3">
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white ${badgeColorClass}`}>
            {shiftType}
          </span>
        </div>
      </div>
      
      <CardContent className="pt-5">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="font-semibold text-lg text-soft-blue line-clamp-1">RN</h3>
            <div className="flex items-center text-gray-600 text-sm">
              <Building size={14} className="mr-1" />
              <span>{facilityType}</span>
            </div>
          </div>
          <div className="text-right">
            <div className="font-bold text-soft-orange text-lg">{payRate}</div>
            <div className="text-xs text-gray-500">per hour</div>
          </div>
        </div>
        
        <div className="space-y-2.5 mt-4">
          <div className="flex items-center text-gray-600">
            <MapPin size={16} className="mr-2 text-soft-teal flex-shrink-0" />
            <span className="text-sm">{location}</span>
            {distance && (
              <span className="ml-1 text-xs text-gray-500">({distance})</span>
            )}
          </div>
          
          <div className="flex items-center text-gray-600">
            <Calendar size={16} className="mr-2 text-soft-teal flex-shrink-0" />
            <span className="text-sm">{dateOrPeriod}</span>
          </div>
        </div>
        
        {benefits.length > 0 && (
          <div className="mt-4">
            <div className="flex items-center text-gray-700 mb-2">
              <Shield size={16} className="mr-2 text-soft-teal flex-shrink-0" />
              <span className="text-sm font-medium">Benefits</span>
            </div>
            <div className="flex flex-wrap gap-1.5 mt-1">
              {benefits.map((benefit, index) => (
                <span 
                  key={index} 
                  className="px-2 py-0.5 bg-gray-50 text-gray-600 text-xs rounded-full border border-gray-100"
                >
                  {benefit}
                </span>
              ))}
            </div>
          </div>
        )}
      </CardContent>
      
      <CardFooter className="pt-0 pb-5">
        <Button className="w-full bg-soft-teal hover:bg-soft-teal/90 text-white rounded-xl font-medium">
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ShiftCard;
