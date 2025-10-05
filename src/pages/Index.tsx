import { useState } from "react";
import Hero from "@/components/Hero";
import RegionSelector from "@/components/RegionSelector";
import EnvironmentalData from "@/components/EnvironmentalData";
import CropRecommendations from "@/components/CropRecommendations";

const Index = () => {
  const [selectedRegion, setSelectedRegion] = useState<{
    lat: number;
    lon: number;
    name: string;
  } | null>(null);
  
  const [environmentalData, setEnvironmentalData] = useState({
    temperature: 0,
    precipitation: 0,
    soilMoisture: 0,
  });

  const handleRegionSelect = (lat: number, lon: number, name: string) => {
    setSelectedRegion({ lat, lon, name });
  };

  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <RegionSelector onRegionSelect={handleRegionSelect} />
      
      {selectedRegion && (
        <>
          <EnvironmentalData
            lat={selectedRegion.lat}
            lon={selectedRegion.lon}
            regionName={selectedRegion.name}
          />
          <CropRecommendations
            temperature={environmentalData.temperature}
            precipitation={environmentalData.precipitation}
            soilMoisture={environmentalData.soilMoisture}
          />
        </>
      )}
    </div>
  );
};

export default Index;
