import { Cards2Data, Cards2DataText } from "@/constants/index";
import { CardHeader, CardContent, Card } from "./ui/card";
import MotionComponent1 from "./MotionComponent1";

const Cards2Kosina = ({
  title,
  data,
  text,
}: {
  title: string;
  data: Cards2Data[];
  text: Cards2DataText;
}) => {
  return (
    <div className="">
      <div className="container px-2 md:px-4 mx-auto py-10 md:py-16 border-b-2 space-y-10 md:space-y-20">
        <h2 className="text-4xl md:text-5xl text-center text-primary font-bold">
          {title}
        </h2>
        <div className="space-y-6 md:space-y-8">
          <div className="grid md:grid-cols-3 text-center gap-6 md:gap-8 items-stretch">
            {data.slice(0, 3).map((item) => {
              return (
                <MotionComponent1 key={item.id}>
                  <OneCard key={item.id} item={item} />
                </MotionComponent1>
              );
            })}
          </div>
          <div className="grid md:grid-cols-2 text-center gap-6 md:gap-8 items-stretch">
            {data.slice(3).map((item) => {
              return (
                <MotionComponent1 key={item.id}>
                  <OneCard key={item.id} item={item} />
                </MotionComponent1>
              );
            })}
          </div>
        </div>
        <h3 className="text-2xl md:text-4xl text-center text-primary font-bold">
          Amberg PVC & ALU stolarija - Kada kvalitet i dizajn idu ruku pod ruku.
        </h3>
        <p className="first-letter:pl-6 text-xl md:text-3xl">{text.text}</p>
      </div>
    </div>
  );
};

export default Cards2Kosina;

const OneCard = ({ item }: { item: Cards2Data }) => {
  const IconComponent = item.icon;

  return (
    <Card className="h-full">
      <CardContent className="relative z-10 pt-5 text-lg space-y-5">
        <div className="text-3xl md:text-4xl text-primary">
          <IconComponent className="mx-auto" />
        </div>
        <p className=" text-left">{item.text}</p>
      </CardContent>
    </Card>
  );
};
