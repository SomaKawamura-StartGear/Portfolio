import { Section } from "./Section";
import { Contena } from "../components/About/Contena";
import {
  ActivityData,
  type ActivityItem,
} from "../data/ActivityData";

export const Activity = () => {
  return (
    <Section title="Activity" id="activity">
      {ActivityData.map((item: ActivityItem) => (
        <Contena key={item.title} {...item} />
      ))}
    </Section>
  );
};
