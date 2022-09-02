export interface Book {
    title: string;
    author_name: string;
    publication_year: number;
    isbn: string;
    num_pages: number;
}

export interface AppState {
    apiLoading: boolean;
    data: any
}