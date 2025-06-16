import { getDetail,getArticles} from "@/libs/client";
import Link from "next/link"

export async function generateStaticParams(){
    const { contents } = await getArticles();

    const paths = contents.map((article)=>{
        return {
            articleId: article.id,
        };
    });
    return [...paths];
}

export default async function StaticDetailPage({
    params : { articleId },
}: {
    params: { articleId : string};
}) {
    const article = await getDetail(articleId);

    return(
    <>
        <p>{article.title}</p>
        <div
            dangerouslySetInnerHTML={{
            __html: `${article.body}`,
            }}
        />
    </>
    )
}

