// ArticleList
// Make an ArticleList component as a child of App. It should return:

// a <main> element with the following components inside:
// an array of Article components (one component for each post passed down as a prop to ArticleList)
// make sure to assign a unique key prop to each Article
import Article from "./Article";

function ArticleList({ListItems}){

const Items=ListItems.map((items)=>{
    return (
        <Article key={items.id} title={items.title} date={items.date} preview={items.preview} minutes={items.preview}/>
    )
})


return (
    <main>
    {Items}
    </main>
)
}
export default ArticleList;