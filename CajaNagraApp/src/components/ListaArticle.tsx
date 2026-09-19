import { FlatList } from "react-native";
import { useArticlees } from "../contexts/ArticleContext";
import { ArticleCard } from "./ArticleCar";

type Props = {
    ListHeaderComponent?: React.ReactElement;
    ListFooterComponent?: React.ReactElement;
}

export const ListaArticle = ({ ListHeaderComponent, ListFooterComponent }: Props) => {
    const { articlees } = useArticlees();

    return (
        <FlatList
            data={articlees}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <ArticleCard articlet={item} />}
            ListHeaderComponent={ListHeaderComponent}
            ListFooterComponent={ListFooterComponent}
        />
    );
};