import { User } from "interfaces";

export interface ListProps {
  people: User[];
  remove: (id: number) => void;
}
