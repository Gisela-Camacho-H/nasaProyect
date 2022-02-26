export default (globalState, action) => {

	switch(action.type){
        case "GET_PHOTO_DAY":
            return {
                ...globalState,
                photoDay: {
                    ...action.payload
                }
            }
        case "GET_SELECTED_PHOTO_DAY":
            return {
                ...globalState,
                selectedPhotoDay: {
                    ...action.payload
                }
            }
        case "GET_MARS_PHOTOS":
                return {
                    ...globalState,
                    photoMars: action.payload // [{.......}, {.....}, {.....}]
                }
        default:
		return globalState
	}
}