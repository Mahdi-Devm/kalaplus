import { H2, H4, P } from "@/core/components/custom/ui/typography/Typography";
import { Card, CardContent } from "@/core/components/shadcn/ui/card/card";
import { aboutStats, valuesAbout } from "../../../assets/mock/about/aboutStats";
function AboutValues() {
  return (
    <>
      <div className="text-center space-y-12 mt-10">
        <div className="space-y-4 ">
          <H2 className="text-3xl sm:text-4xl font-bold">
            چیزی که بهش <span className="text-primary">ایمان داریم</span>
          </H2>
          <P className="text-muted-foreground max-w-2xl mx-auto">
            چهار اصل اساسی که در تمام کارهای ما جریان دارد
          </P>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {valuesAbout.map((item, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-background"
            >
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto text-primary text-4xl">
                  {item.icon}
                </div>
                <H4 className="mt-4 text-xl font-bold">{item.title}</H4>
                <P className="text-muted-foreground text-sm">
                  {item.description}
                </P>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
        {aboutStats.map((stat, index) => (
          <div key={index} className="text-center space-y-2">
            <div className="flex items-center justify-center gap-2 text-primary text-3xl sm:text-4xl font-black">
              {stat.number}
            </div>
            <div className="flex items-center justify-center gap-1 text-muted-foreground text-sm">
              {stat.icon}
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default AboutValues;
