import { createContext, useContext, useState, useRef } from "react";

export type Article = {
    id: number;
    nombre: string;
    ubicacion: string;
    descripcion: string;
    urlImage?: string;
}

type articleesContextType = {
    articlees: Article[];
    addarticle: (Article: Omit<Article, "id">) => void;
    removearticle: (id: number) => void;
    updatearticle: (id: number, data: Partial<Article>) => void;
}

const articleesContext = createContext<articleesContextType | null>(null);

export const ArticleesProvider = ({ children }: { children: React.ReactNode }) => {
    const [articlees, setarticlees] = useState<Article[]>([]);
    const nextId = useRef(1); // contador auto-incremental

    const addarticle = (Article: Omit<Article, "id">) => {
        const nuevo: Article = { id: nextId.current, ...Article };
        nextId.current += 1;
        setarticlees((prev) => [...prev, nuevo]);
    };

    const removearticle = (id: number) => {
        setarticlees((prev) => prev.filter((l) => l.id !== id));
    };

    const updatearticle = (id: number, data: Partial<Article>) => {
        setarticlees((prev) =>
            prev.map((l) => (l.id === id ? { ...l, ...data } : l))
        );
    };

    return (
        <articleesContext.Provider value={{ articlees, addarticle, removearticle, updatearticle }}>
            {children}
        </articleesContext.Provider>
    );
};

export const useArticlees = () => {
    const context = useContext(articleesContext);
    if (!context) throw new Error("usearticlees debe usarse dentro de articleesProvider");
    return context;
};