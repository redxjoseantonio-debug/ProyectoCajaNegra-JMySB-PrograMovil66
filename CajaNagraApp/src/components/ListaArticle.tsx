import { FlatList } from "react-native";
import { Article, useArticlees } from "../contexts/ArticleContext";
import { ArticleCard } from "./ArticleCar";
import React from "react";

type Props = {
    ListHeaderComponent?: React.ReactElement;
    ListFooterComponent?: React.ReactElement;
    ListEmptyoComponent?: React.ReactElement;
    onEdit?: (article: Article) => void;
    data?: Article[];
}

export const ListaArticle = ({ ListHeaderComponent, ListFooterComponent, ListEmptyoComponent, onEdit, data }: Props) => {
    const { articlees } = useArticlees();
    const items = data ?? articlees;

    return (
        <FlatList
            data={items}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <ArticleCard articlet={item} onEdit={onEdit} />}
            ListHeaderComponent={ListHeaderComponent}
            ListFooterComponent={ListFooterComponent}
            ListEmptyComponent={ListEmptyoComponent}
            contentContainerStyle={articlees.length === 0 && { flexGrow: 1}}
        />
    );
};