export type DefaultItem = Record<any, any>;

export type DefaultItemIdentifierKey = any;

export interface HookArguments<T = DefaultItem, K = DefaultItemIdentifierKey> {
  initialItems: T[];
  itemIdentifierKey: K;
  initialSelectedItems?: T[];
}

export interface Action {
  type: ActionType;
  payload: Omit<Partial<HookArguments>, "itemIdentifierKey"> & {
    item?: DefaultItem;
  };
}

export enum ActionType {
  INITIALIZE_ITEMS,
  TOGGLE_SELECTED_STATUS
}

export type Item<T> = T & {
  isSelected: boolean;
}

export interface State<T = DefaultItem, K = DefaultItemIdentifierKey> {
  items: Item<T>[];
  itemIdentifierKey: K;
}
