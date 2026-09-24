import { createContext, useContext, useState, useRef, useCallback, useEffect } from "react";
import { supabase } from "../lib/supabase";
import { useAuth } from "./AuthContext";

export type Article = { id: number; nombre: string; ubicacion: string; descripcion: string; urlImage?: string };


const fromRow = (r: any): Article => ({
  id: r.id,
  nombre: r.nombre,
  ubicacion: r.ubicacion,
  descripcion: r.descripcion ?? "",
  urlImage: r.url_image ?? undefined,
});

type articleesContextType = {
    articlees: Article[];
    loading: boolean;
    addarticle: (a: Omit<Article, "id">) => Promise<void>;
    removearticle: (id: number) => Promise<void>;
    updatearticle: (id: number, data: Partial<Article>) => Promise<void>;
    refresh: () => Promise<void>;
}

const articleesContext = createContext<articleesContextType | null>(null);

export const ArticleesProvider = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  const [articlees, setarticlees] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);

  const refresh = useCallback(async () => {
    if (!user) { setarticlees([]); return; }   // cerró sesión: limpia la lista
    setLoading(true);
    const { data, error } = await supabase
      .from("articles").select("*").order("created_at", { ascending: false });
    setLoading(false);
    if (error) { console.log(error.message); return; }
    setarticlees(data.map(fromRow));
  }, [user?.id]);

  useEffect(() => { refresh(); }, [refresh]);

  const addarticle = async (a: Omit<Article, "id">) => {
    const { data, error } = await supabase
      .from("articles")
      .insert({ nombre: a.nombre, ubicacion: a.ubicacion, descripcion: a.descripcion, url_image: a.urlImage ?? null })
      .select().single();
    if (error) throw error;
    setarticlees((prev) => [fromRow(data), ...prev]);
  };

  const removearticle = async (id: number) => {
    const { error } = await supabase.from("articles").delete().eq("id", id);
    if (error) throw error;
    setarticlees((prev) => prev.filter((x) => x.id !== id));
  };

  const updatearticle = async (id: number, d: Partial<Article>) => {
    const { error } = await supabase.from("articles")
      .update({ nombre: d.nombre, ubicacion: d.ubicacion, descripcion: d.descripcion, url_image: d.urlImage })
      .eq("id", id);
    if (error) throw error;
    setarticlees((prev) => prev.map((x) => (x.id === id ? { ...x, ...d } : x)));
  };

  return (
    <articleesContext.Provider value={{ articlees, loading, addarticle, removearticle, updatearticle, refresh }}>
      {children}
    </articleesContext.Provider>
  );
};

export const useArticlees = () => {
    const context = useContext(articleesContext);
    if (!context) throw new Error("usearticlees debe usarse dentro de articleesProvider");
    return context;
};