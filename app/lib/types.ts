export type NewsCategory = {
  id: number;
  name: string;
  parent_id?: number;
  categories?: NewsCategory[];
}
