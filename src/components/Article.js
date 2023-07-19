// Article
// Make an Article component as a child of ArticleList. It should return:

// an <article> element, with the following elements inside:
// an <h3> element displaying the title of the article, passed as a prop
// a <small> element displaying the date of the article, passed as a prop
// a default value of "January 1, 1970" should be used if no date is passed as a prop
// a <p> element displaying the preview of the article, passed as a prop


function Article({title,preview,date}){
    const formattedDate = date || "January 1, 1970";
    return(
        <article>
            <h3>{title}</h3>
            <small>{formattedDate}</small>
            <p>{preview}</p>
        </article>
    )
}
export default Article;