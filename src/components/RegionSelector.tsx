import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Search } from "lucide-react";
import { toast } from "sonner";

interface RegionSelectorProps {
  onRegionSelect: (lat: number, lon: number, regionName: string) => void;
}

const RegionSelector = ({ onRegionSelect }: RegionSelectorProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      toast.error("Please enter a location to search");
      return;
    }
    
    setIsLoading(true);
    try {
      // Using OpenStreetMap Nominatim API for geocoding (free and no API key required)
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchQuery)}&limit=1`
      );
      const data = await response.json();
      
      if (data && data.length > 0) {
        const { lat, lon, display_name } = data[0];
        onRegionSelect(parseFloat(lat), parseFloat(lon), display_name);
        toast.success(`Loading data for ${display_name}`);
        setSearchQuery(""); // Clear search after successful selection
      } else {
        toast.error("Location not found. Please try a different search term.");
      }
    } catch (error) {
      console.error("Error searching location:", error);
      toast.error("Failed to search location. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handlePresetSelect = (region: typeof presetRegions[0]) => {
    onRegionSelect(region.lat, region.lon, region.name);
    toast.success(`Loading data for ${region.name}`);
  };

  const presetRegions = [
    { name: "Sub-Saharan Africa", lat: -8.7832, lon: 34.5085 },
    { name: "Middle East", lat: 29.2985, lon: 42.5510 },
    { name: "South Asia", lat: 22.3511, lon: 78.6677 },
    { name: "Amazon Basin", lat: -3.4653, lon: -62.2159 },
  ];

  return (
    <section id="region-selector" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <Card className="border-2 shadow-lg">
          <CardHeader className="text-center">
            <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <CardTitle className="text-3xl">Select Your Region</CardTitle>
            <CardDescription className="text-base">
              Search for any location or choose from regions facing climate challenges
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="flex gap-2">
              <Input
                placeholder="Enter city, country, or coordinates..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                className="flex-1"
              />
              <Button 
                onClick={handleSearch} 
                disabled={isLoading || !searchQuery.trim()}
                className="bg-primary hover:bg-primary/90"
                type="button"
              >
                <Search className="w-4 h-4 mr-2" />
                {isLoading ? "Searching..." : "Search"}
              </Button>
            </div>
            
            <div className="space-y-3">
              <p className="text-sm font-medium text-muted-foreground">Quick Select:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {presetRegions.map((region) => (
                  <Button
                    key={region.name}
                    variant="outline"
                    onClick={() => handlePresetSelect(region)}
                    className="justify-start h-auto py-4 hover:bg-primary/5 hover:border-primary transition-colors"
                    type="button"
                  >
                    <MapPin className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
                    <span className="text-left">{region.name}</span>
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default RegionSelector;
