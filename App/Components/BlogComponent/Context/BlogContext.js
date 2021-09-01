import createDataContext from './createDataContext';

const reducer = (state, action) => {
    switch (action.type) {
        case 'add_blogPost':
            return [...state, { id: Math.floor(Math.random() * 99999), title: action.payload.title, description: action.payload.description }]
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
    return (post, callback) => {
        dispatch({ type: 'add_blogPost', payload: post })
        callback();
    }
}

const editBlogPost = (dispatch) => {
    return (post, callback) => {
        // console.log(post)
        dispatch({ type: 'edit_blogPost', payload: post })
        callback();
    }
}
const deleteBlogPost = (dispatch) => {
    return (id) => {
        dispatch({ type: 'delete_blogPost', payload: id })
    }
}

export const { Context, Provider } = createDataContext(reducer, { addBlogPost, editBlogPost, deleteBlogPost }, [])
