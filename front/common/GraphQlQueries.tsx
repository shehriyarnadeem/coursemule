export const getUserArticles = ($username: string, $page?: number) => {
    return (`
    {
        user(username: "${$username}") {
            publication {
                posts(page: ${$page}) {
                    title
                    brief
                    slug
                    coverImage
                    brief
                    dateAdded
                }
            }
        }
    }`
    );
}

export const getBlogPost = (slug: string, hostname: string = "shehriyarnadeem") => {
  
    return (
        `{
            post(
            slug: "${slug}",
            hostname:"${hostname}"
            ){
              slug
              title
              content
              contentMarkdown
              dateUpdated
              brief
              author{
                  photo
                  name
              }
              coverImage
              dateAdded
              type
            }}
        `
    )
}