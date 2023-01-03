export interface TourProps {
  id: number;
  image: string;
  info: string;
  price: string;
  name: string;
  removeTour: (id: number) => void;
}
