export interface Recommendations {
    id: number;
    title: string;
    description: string;
    friend_id: number;
    status: string;
    created_at: string;
    updated_at: string;
    friend: {
        id: number;
        name: string;
        cpf: string;
        email: string;
        phone: string;
        created_at: string;
        updated_at: string;
    };
}
