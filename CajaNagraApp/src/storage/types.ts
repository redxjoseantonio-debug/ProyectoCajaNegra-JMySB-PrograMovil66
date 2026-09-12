
export interface User{
    id: number;
    username: string;
    password: string;
    created_at: string;
}

export type NewUser = Omit<User, 'id' | 'created_at'>;

export interface InventoryItem {
    id: number;
    user_id: number;
    name: string;
    description: string | null;
    category: string;
    url_image: string;
    amount: number;
    updated_at: string;
}

export type NewInvetoryItem = Omit<InventoryItem, 'id' | 'update_at'>;