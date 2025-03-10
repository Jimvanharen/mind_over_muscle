import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  image: string;
  quote: string;
}

export default function TestimonialCard({
  name,
  role,
  image,
  quote,
}: TestimonialCardProps) {
  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src={image} alt={name} />
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <h4 className="text-lg font-semibold">{name}</h4>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="relative">
          <Quote className="h-6 w-6 text-primary/20 absolute -top-2 -left-2" />
          <p className="pt-2 italic">{quote}</p>
        </div>
      </CardContent>
    </Card>
  );
}
