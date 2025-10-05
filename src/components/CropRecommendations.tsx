import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Droplets, Sun, AlertCircle } from "lucide-react";

interface Crop {
  name: string;
  scientificName: string;
  climate: string;
  waterRequirement: string;
  growingSeason: string;
  nutritionalValue: string[];
  challenges: string[];
  image: string;
}

interface CropRecommendationsProps {
  temperature: number;
  precipitation: number;
  soilMoisture: number;
}

const CropRecommendations = ({ temperature, precipitation, soilMoisture }: CropRecommendationsProps) => {
  // Logic to recommend crops based on environmental data
  const getRecommendedCrops = (): Crop[] => {
    const crops: Crop[] = [];
    
    // Hot and dry conditions
    if (temperature > 25 && precipitation < 2) {
      crops.push({
        name: "Sorghum",
        scientificName: "Sorghum bicolor",
        climate: "Hot & Dry",
        waterRequirement: "Low (400-600mm annually)",
        growingSeason: "3-4 months",
        nutritionalValue: ["High in protein", "Rich in fiber", "Iron source"],
        challenges: ["Birds", "Stem borers"],
        image: "🌾"
      });
      
      crops.push({
        name: "Pearl Millet",
        scientificName: "Pennisetum glaucum",
        climate: "Arid to Semi-arid",
        waterRequirement: "Very Low (200-400mm)",
        growingSeason: "2-3 months",
        nutritionalValue: ["High iron", "Protein-rich", "Gluten-free"],
        challenges: ["Downy mildew", "Drought stress"],
        image: "🌿"
      });
    }
    
    // Moderate conditions
    if (temperature >= 15 && temperature <= 28 && precipitation >= 2) {
      crops.push({
        name: "Cowpea",
        scientificName: "Vigna unguiculata",
        climate: "Warm & Moderate rainfall",
        waterRequirement: "Moderate (500-800mm)",
        growingSeason: "2-3 months",
        nutritionalValue: ["High protein", "Vitamins A & C", "Calcium"],
        challenges: ["Aphids", "Root rot"],
        image: "🫘"
      });
      
      crops.push({
        name: "Cassava",
        scientificName: "Manihot esculenta",
        climate: "Tropical to subtropical",
        waterRequirement: "Moderate",
        growingSeason: "8-12 months",
        nutritionalValue: ["Carbohydrates", "Vitamin C", "Potassium"],
        challenges: ["Cassava mosaic disease", "Mealybugs"],
        image: "🥔"
      });
    }
    
    // Add a versatile crop
    crops.push({
      name: "Sweet Potato",
      scientificName: "Ipomoea batatas",
      climate: "Warm, adaptable",
      waterRequirement: "Moderate (500-1000mm)",
      growingSeason: "3-4 months",
      nutritionalValue: ["Vitamin A", "Fiber", "Antioxidants"],
      challenges: ["Weevils", "Viral diseases"],
      image: "🍠"
    });
    
    return crops.slice(0, 4);
  };

  const recommendedCrops = getRecommendedCrops();

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Recommended Crops</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Climate-resilient crops optimized for your region's environmental conditions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recommendedCrops.map((crop) => (
            <Card key={crop.name} className="border-2 hover:shadow-xl transition-all hover:scale-[1.02]">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl flex items-center gap-2">
                      <span className="text-4xl">{crop.image}</span>
                      {crop.name}
                    </CardTitle>
                    <CardDescription className="italic mt-1">{crop.scientificName}</CardDescription>
                  </div>
                  <Badge className="bg-primary">{crop.climate}</Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Droplets className="w-4 h-4 text-blue-500 flex-shrink-0" />
                    <span className="text-muted-foreground">Water:</span>
                    <span className="font-medium">{crop.waterRequirement}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <Sun className="w-4 h-4 text-orange-500 flex-shrink-0" />
                    <span className="text-muted-foreground">Season:</span>
                    <span className="font-medium">{crop.growingSeason}</span>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm font-semibold mb-2 flex items-center gap-2">
                    <Leaf className="w-4 h-4 text-green-500" />
                    Nutritional Benefits
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {crop.nutritionalValue.map((nutrient) => (
                      <Badge key={nutrient} variant="secondary" className="text-xs">
                        {nutrient}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <p className="text-sm font-semibold mb-2 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-orange-500" />
                    Common Challenges
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {crop.challenges.map((challenge) => (
                      <li key={challenge} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CropRecommendations;
