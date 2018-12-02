export interface Person {
  name: string;
  species: Array<string>;
  height: number;
  hair_color: string;
  homeworld: string;
  films: Array<string>;
  vehicles: Array<string>;
}

export interface Film {
  name: string;
}

export interface Vehicle {
  name: string;
}

export interface Planet {
  name: string;
}

export interface Specie {
  name: String;
}
