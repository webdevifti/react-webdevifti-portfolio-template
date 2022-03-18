import React from 'react'

const HomeBlogsItem = () => {
    const blogItem = [
        {
            id: 1,
            category: "wordpress",
            slug: "wordpress",
            title: "Wordpress making life more easy for web publisher",
            excerpt: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere officia libero, pariatur quaerat inventore ipsa velit impedit saepe atque architecto.",
            thumbnail: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/192070916/original/2b7cfe23990b9c8cb76dace615dc6170425565ec/youtube-thumbnail-background-design-with-editable-text-free-vector.jpg"
        },
        {
            id: 2,
            category: "react",
            slug: "react",
            title: "Wordpress making life more easy for web publisher",
            excerpt: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere officia libero, pariatur quaerat inventore ipsa velit impedit saepe atque architecto.",
            thumbnail: "https://t4.ftcdn.net/jpg/03/90/34/35/360_F_390343554_mFXTy9eDIB85bnyfC40J6bFar6KRRcb4.jpg"
        },
        {
            id: 3,
            category: "wordpress",
            slug: "php",
            title: "Wordpress making life more easy for web publisher",
            excerpt: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere officia libero, pariatur quaerat inventore ipsa velit impedit saepe atque architecto.",
            thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfAYMIpgbNqLFSRN0T8QBlrRegfr8DyjkJLQ&usqp=CAU"
        }
    ]
    return (
        <div className="blog-content-section">
            {blogItem.map((item) => {
                return (
                    <div key={item.id} className="blog-card">
                        <div className="blog-thumbnail-image">
                            <img src={item.thumbnail} alt="" />
                        </div>
                        <div className="blog-category">
                            <p>{item.category}</p>
                        </div>
                        <div className="blog-title">
                            <h3>{item.title}</h3>
                        </div>
                        <div className="blog-excerpt">
                            <p>{item.excerpt}</p>
                        </div>
                        <div className="readmore-area">
                            <a href="/blog/" className="btn btn-read-more">Read More</a>
                        </div>
                    </div>
                )
               
            })}
           
        </div>
    )
}

export default HomeBlogsItem
