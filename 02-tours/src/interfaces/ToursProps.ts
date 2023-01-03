import { TourProps } from "./TourProps";

export interface ToursProps {
  tours: TourProps[];
  removeTour: (id: number) => void;
}
