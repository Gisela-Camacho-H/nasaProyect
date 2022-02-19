export default (globalState, action) => {

	switch(action.type){
        case "GET_PHOTO_DAY":
            return {
                ...globalState,
                photoDay: {
                    ...action.payload
                }
            }
		default:
			return globalState
	}
}