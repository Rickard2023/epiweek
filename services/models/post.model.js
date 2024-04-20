import { Schema, model } from "mongoose";

/*
template for Postman
{
    "category": "test_cat",
    "title": "test_title",
    "cover": "test_cover",
    "readTime": {"value": 1, "unit": "minute"},
    "author": {"name": "test_auth", "img": "https://fumettologica.it/wp-content/uploads/2022/04/scrat-era-glaciale.jpg"},
    "content": "https://fumettologica.it/2022/04/era-glaciale-scrat-video-finale/"
}
*/
const postSchema = new Schema (
    {
        category: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        cover: {
            type: String,
            required: true
        },
        readTime: {
            value: {
                type: Number,
                required: true
            },
            unit: {
                type: String,
                required: true
            }
        },

        author: {

            name:{
                type: String,
                required: true
            },
            img:{
                type: String,
                required: true
            }
        },

        content: {
            type: String,
            required: true
        }
    },

    {
        collection: "posts"
    }
)

export default model("Post", postSchema);