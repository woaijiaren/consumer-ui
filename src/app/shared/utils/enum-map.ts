export interface EnumEntry<T> {
  id: T;
  title: string;
}

export class EnumMap<T> {
  constructor(private items: EnumEntry<T>[] = []) {
  }

  get(id: T): EnumEntry<T> {
    return this.items.find(it => it.id === id);
  }

  lookup(id: T): string {
    return this.get(id).title;
  }
}
