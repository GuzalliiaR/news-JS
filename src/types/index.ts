// Описание структуры данных, которые приходят с сервера News API
export interface Source {
    id: string | null;
    name: string;
}

export interface Article {
    source: Source;
    author: string | null;
    title: string;
    description: string | null;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string | null;
}

export interface NewsResponse {
    status: string;
    totalResults: number;
    articles: Article[];
}

export interface SourceInfo {
    id: string | null;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export interface SourceResponse {
    status: string;
    sources: SourceInfo[];
}