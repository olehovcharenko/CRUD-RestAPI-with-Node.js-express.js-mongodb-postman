import mongoose from "mongoose";

const post = {
    author: {type: String, required: true},
    title: {type: String, required: true},
    content: {type: String, required: true},
    picture: {type: String}
}

export default mongoose.model('post', post)