import { ELEVATIONS, QUERIES } from "../lib/constants";

export interface ThemeType {
  queries: typeof QUERIES;
  elevations: typeof ELEVATIONS;
}

export const theme: ThemeType = {
  queries: QUERIES,
  elevations: ELEVATIONS
};
