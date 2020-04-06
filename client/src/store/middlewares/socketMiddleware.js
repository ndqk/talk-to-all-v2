

const socketMiddleware = store => next => action =>{
    if(typeof action === 'function'){
        action(next);
    }else{
        next(action);
    }
}

export default socketMiddleware;