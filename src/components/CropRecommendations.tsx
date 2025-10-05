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
    
    // Very hot and very dry (desert/arid) - temp > 30°C, precip < 1mm
    if (temperature > 30 && precipitation < 1) {
      crops.push(
        {
          name: "Date Palm",
          scientificName: "Phoenix dactylifera",
          climate: "Arid & Hot",
          waterRequirement: "Very Low (150-300mm annually)",
          growingSeason: "Year-round fruiting",
          nutritionalValue: ["High energy", "Potassium", "Natural sugars"],
          challenges: ["Scale insects", "Date palm disease"],
          image: "🌴"
        },
        {
          name: "Cactus Pear",
          scientificName: "Opuntia ficus-indica",
          climate: "Desert conditions",
          waterRequirement: "Extremely Low (200mm)",
          growingSeason: "3-4 months",
          nutritionalValue: ["Vitamin C", "Fiber", "Antioxidants"],
          challenges: ["Cochineal insects", "Rot in excess moisture"],
          image: "🌵"
        }
      );
    }
    
    // Hot and dry conditions (semi-arid) - temp 25-30°C, precip 1-5mm
    else if (temperature >= 25 && temperature <= 30 && precipitation < 5) {
      crops.push(
        {
          name: "Sorghum",
          scientificName: "Sorghum bicolor",
          climate: "Hot & Semi-arid",
          waterRequirement: "Low (400-600mm annually)",
          growingSeason: "3-4 months",
          nutritionalValue: ["High in protein", "Rich in fiber", "Iron source"],
          challenges: ["Birds", "Stem borers"],
          image: "🌾"
        },
        {
          name: "Pearl Millet",
          scientificName: "Pennisetum glaucum",
          climate: "Arid to Semi-arid",
          waterRequirement: "Very Low (200-400mm)",
          growingSeason: "2-3 months",
          nutritionalValue: ["High iron", "Protein-rich", "Gluten-free"],
          challenges: ["Downy mildew", "Drought stress"],
          image: "🌿"
        },
        {
          name: "Chickpea",
          scientificName: "Cicer arietinum",
          climate: "Warm & Dry",
          waterRequirement: "Low (300-500mm)",
          growingSeason: "3-5 months",
          nutritionalValue: ["Protein", "Folate", "Manganese"],
          challenges: ["Fusarium wilt", "Pod borer"],
          image: "🫘"
        }
      );
    }
    
    // Warm and moderate rainfall - temp 20-25°C, precip 5-15mm
    else if (temperature >= 20 && temperature <= 25 && precipitation >= 5 && precipitation <= 15) {
      crops.push(
        {
          name: "Cowpea",
          scientificName: "Vigna unguiculata",
          climate: "Warm & Moderate rainfall",
          waterRequirement: "Moderate (500-800mm)",
          growingSeason: "2-3 months",
          nutritionalValue: ["High protein", "Vitamins A & C", "Calcium"],
          challenges: ["Aphids", "Root rot"],
          image: "🫘"
        },
        {
          name: "Sweet Potato",
          scientificName: "Ipomoea batatas",
          climate: "Warm, adaptable",
          waterRequirement: "Moderate (500-1000mm)",
          growingSeason: "3-4 months",
          nutritionalValue: ["Vitamin A", "Fiber", "Antioxidants"],
          challenges: ["Weevils", "Viral diseases"],
          image: "🍠"
        },
        {
          name: "Pigeon Pea",
          scientificName: "Cajanus cajan",
          climate: "Tropical & Subtropical",
          waterRequirement: "Moderate (600-900mm)",
          growingSeason: "4-5 months",
          nutritionalValue: ["Protein", "Iron", "Folate"],
          challenges: ["Pod fly", "Wilt disease"],
          image: "🌱"
        }
      );
    }
    
    // Warm and wet tropical - temp 20-25°C, precip > 15mm
    else if (temperature >= 20 && temperature <= 25 && precipitation > 15) {
      crops.push(
        {
          name: "Cassava",
          scientificName: "Manihot esculenta",
          climate: "Tropical, high rainfall",
          waterRequirement: "High (1000-1500mm)",
          growingSeason: "8-12 months",
          nutritionalValue: ["Carbohydrates", "Vitamin C", "Potassium"],
          challenges: ["Cassava mosaic disease", "Mealybugs"],
          image: "🥔"
        },
        {
          name: "Taro",
          scientificName: "Colocasia esculenta",
          climate: "Tropical wetlands",
          waterRequirement: "Very High (1500-2000mm)",
          growingSeason: "6-12 months",
          nutritionalValue: ["Dietary fiber", "Vitamin E", "Manganese"],
          challenges: ["Taro leaf blight", "Root rot"],
          image: "🌿"
        },
        {
          name: "Yam",
          scientificName: "Dioscorea spp.",
          climate: "Humid tropics",
          waterRequirement: "High (1200-1500mm)",
          growingSeason: "8-10 months",
          nutritionalValue: ["Carbohydrates", "Potassium", "Vitamin C"],
          challenges: ["Anthracnose", "Yam beetles"],
          image: "🍠"
        }
      );
    }
    
    // Cool and moderate - temp 10-20°C, any precipitation
    else if (temperature >= 10 && temperature < 20) {
      if (precipitation < 5) {
        // Cool and dry
        crops.push(
          {
            name: "Barley",
            scientificName: "Hordeum vulgare",
            climate: "Cool & Dry",
            waterRequirement: "Low (300-500mm)",
            growingSeason: "3-4 months",
            nutritionalValue: ["Fiber", "Selenium", "B vitamins"],
            challenges: ["Rust diseases", "Powdery mildew"],
            image: "🌾"
          },
          {
            name: "Lentils",
            scientificName: "Lens culinaris",
            climate: "Cool temperate",
            waterRequirement: "Low (300-400mm)",
            growingSeason: "3-4 months",
            nutritionalValue: ["Protein", "Iron", "Folate"],
            challenges: ["Ascochyta blight", "Aphids"],
            image: "🫘"
          }
        );
      } else {
        // Cool and moderate to wet
        crops.push(
          {
            name: "Potato",
            scientificName: "Solanum tuberosum",
            climate: "Cool temperate",
            waterRequirement: "Moderate (500-700mm)",
            growingSeason: "3-4 months",
            nutritionalValue: ["Vitamin C", "Potassium", "B6"],
            challenges: ["Late blight", "Colorado beetle"],
            image: "🥔"
          },
          {
            name: "Quinoa",
            scientificName: "Chenopodium quinoa",
            climate: "Cool highlands",
            waterRequirement: "Low-Moderate (300-600mm)",
            growingSeason: "4-6 months",
            nutritionalValue: ["Complete protein", "Iron", "Magnesium"],
            challenges: ["Birds", "Downy mildew"],
            image: "🌾"
          },
          {
            name: "Faba Bean",
            scientificName: "Vicia faba",
            climate: "Cool season",
            waterRequirement: "Moderate (600-800mm)",
            growingSeason: "4-5 months",
            nutritionalValue: ["Protein", "Folate", "Iron"],
            challenges: ["Chocolate spot", "Aphids"],
            image: "🫘"
          }
        );
      }
    }
    
    // Cold conditions - temp < 10°C
    else if (temperature < 10) {
      crops.push(
        {
          name: "Turnip",
          scientificName: "Brassica rapa",
          climate: "Cold hardy",
          waterRequirement: "Moderate (400-600mm)",
          growingSeason: "2-3 months",
          nutritionalValue: ["Vitamin C", "Fiber", "Calcium"],
          challenges: ["Club root", "Flea beetles"],
          image: "🥕"
        },
        {
          name: "Kale",
          scientificName: "Brassica oleracea",
          climate: "Cold tolerant",
          waterRequirement: "Moderate (500-700mm)",
          growingSeason: "2-3 months",
          nutritionalValue: ["Vitamin K", "Vitamin C", "Calcium"],
          challenges: ["Cabbage worms", "Aphids"],
          image: "🥬"
        }
      );
    }
    
    // Fallback - adaptable crops
    if (crops.length === 0) {
      crops.push(
        {
          name: "Sweet Potato",
          scientificName: "Ipomoea batatas",
          climate: "Highly adaptable",
          waterRequirement: "Moderate (500-1000mm)",
          growingSeason: "3-4 months",
          nutritionalValue: ["Vitamin A", "Fiber", "Antioxidants"],
          challenges: ["Weevils", "Viral diseases"],
          image: "🍠"
        }
      );
    }
    
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
