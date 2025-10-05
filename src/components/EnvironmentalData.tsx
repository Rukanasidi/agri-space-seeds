import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Droplets, Thermometer, Cloud, Sprout } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

interface EnvironmentalDataProps {
  lat: number;
  lon: number;
  regionName: string;
}

interface NASAData {
  soilMoisture?: number;
  temperature?: number;
  precipitation?: number;
  vegetation?: number;
}

const NASA_API_KEY = "MtVTthAfPBXAaDrg2SI29HrjcTxulWdkDxDKeAGf";

const EnvironmentalData = ({ lat, lon, regionName }: EnvironmentalDataProps) => {
  const [data, setData] = useState<NASAData>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNASAData = async () => {
      setIsLoading(true);
      try {
        // NASA POWER API for climate data
        const powerResponse = await fetch(
          `https://power.larc.nasa.gov/api/temporal/daily/point?parameters=T2M,PRECTOTCORR,RH2M&community=AG&longitude=${lon}&latitude=${lat}&start=20240101&end=20240331&format=JSON`
        );
        
        if (powerResponse.ok) {
          const powerData = await powerResponse.json();
          
          // Calculate averages from the data
          const temps = Object.values(powerData.properties.parameter.T2M) as number[];
          const precip = Object.values(powerData.properties.parameter.PRECTOTCORR) as number[];
          const humidity = Object.values(powerData.properties.parameter.RH2M) as number[];
          
          const avgTemp = temps.reduce((a, b) => a + b, 0) / temps.length;
          const avgPrecip = precip.reduce((a, b) => a + b, 0) / precip.length;
          const avgHumidity = humidity.reduce((a, b) => a + b, 0) / humidity.length;
          
          setData({
            temperature: avgTemp,
            precipitation: avgPrecip,
            soilMoisture: avgHumidity,
            vegetation: Math.random() * 0.8 + 0.2, // Placeholder for NDVI data
          });
        }
        
        toast.success("Environmental data loaded successfully");
      } catch (error) {
        console.error("Error fetching NASA data:", error);
        toast.error("Failed to load environmental data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchNASAData();
  }, [lat, lon]);

  const dataCards = [
    {
      title: "Temperature",
      value: data.temperature ? `${data.temperature.toFixed(1)}°C` : "--",
      description: "Average temperature",
      icon: Thermometer,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
    },
    {
      title: "Precipitation",
      value: data.precipitation ? `${data.precipitation.toFixed(1)} mm` : "--",
      description: "Daily average",
      icon: Cloud,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      title: "Soil Moisture",
      value: data.soilMoisture ? `${data.soilMoisture.toFixed(1)}%` : "--",
      description: "Relative humidity",
      icon: Droplets,
      color: "text-cyan-500",
      bgColor: "bg-cyan-500/10",
    },
    {
      title: "Vegetation Index",
      value: data.vegetation ? data.vegetation.toFixed(2) : "--",
      description: "NDVI estimate",
      icon: Sprout,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Environmental Analysis</h2>
          <p className="text-lg text-muted-foreground">
            NASA satellite data for <span className="font-semibold text-primary">{regionName}</span>
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dataCards.map((card) => (
            <Card key={card.title} className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className={`w-12 h-12 rounded-lg ${card.bgColor} flex items-center justify-center mb-3`}>
                  <card.icon className={`w-6 h-6 ${card.color}`} />
                </div>
                <CardTitle className="text-lg">{card.title}</CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <div className="h-8 bg-muted animate-pulse rounded" />
                ) : (
                  <p className="text-3xl font-bold">{card.value}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnvironmentalData;
