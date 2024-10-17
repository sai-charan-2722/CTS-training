let initialUser = {
    name: "",
    email: "",
    mobile: ""
}

export function userReducer(state = initialUser, action) {
    switch (action.type) {
        case "name-edit":
            return { ...state, name: action.payload }
        case "email-edit":
            return { ...state, email: action.payload }
        case "mobile-edit":
            return { ...state, mobile: action.payload }
        default:
            return state;
    }
}