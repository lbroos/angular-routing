export interface Book {
    id: number;
    title: string;
    authors: string[];
    description: string;
    publishDate: Date;
    publisher: string;
    startReadingDate?: Date;
    readDate?: Date;
    rating?: number;
}
