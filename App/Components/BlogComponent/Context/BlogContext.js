import createDataContext from './createDataContext';
import jsonserver from '../Api/jsonserver'
const reducer = (state, action) => {
    switch (action.type) {
        case 'get_blogPost':
            return action.payload
        case 'add_blogPost':
            return [...state, { id: action.payload.id, title: action.payload.title, description: action.payload.description }]
        case 'edit_blogPost':
            return state.map((post) => {
                return post.id === action.payload.id ? action.payload : post
            })
        case 'delete_blogPost':
            return state.filter((post) => post.id !== action.payload)
        default:
            return state
    }
}

const addBlogPost = (dispatch) => {
    return async (post, callback) => {
        if (post.title && post.description) {
            const response = await jsonserver.post('/blogpost', post)
            // console.log(response);
            dispatch({ type: 'add_blogPost', payload: response.data })
            callback();
        }
    }
}

const getBlogPost = (dispatch) => {
    return async () => {
        const response = await jsonserver.get('/blogpost')
        dispatch({ type: 'get_blogPost', payload: response.data })
    }
}

const editBlogPost = (dispatch) => {
    return async (post, callback) => {
        // console.log(post)
        if (post.title && post.description) {
            const response = await jsonserver.put(`/blogpost/${post.id}`, post)
            dispatch({ type: 'edit_blogPost', payload: post })
            callback();
        }
    }
}
const deleteBlogPost = (dispatch) => {
    return async (id) => {
        const response = await jsonserver.delete(`/blogpost/${id}`)
        dispatch({ type: 'delete_blogPost', payload: id })
    }
}

export const { Context, Provider } = createDataContext(reducer, { getBlogPost, addBlogPost, editBlogPost, deleteBlogPost }, [])
