const transReducer = (state, action) => {
    switch (action.type) {
      case 'ADD TRANSACTION':
        return [action.payload, ...state]
   
      default:
        return state
    }
  }

  export default transReducer;

//   yaha humne reducer create kia h zia khan k
//  code  se reducer ka code uthaya h payload
//   isme ek object h or isko hum export kar k trans 
// context me use karege 
