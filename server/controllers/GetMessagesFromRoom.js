const Account = require('../mongo_db/model/Account');


module.exports = (messages) => {
    return new Promise(async (resolve, reject) => {
        let userIDs = messages.map(data => data.from);
        Account.find({_id : {$in : userIDs}})
            .then(listUser => {
                let res = userIDs.map(data => listUser.find(dt => dt.id == data));
                let list = messages.map((data, index) => {
                    return {
                        from : data.from,
                        fullname : res[index].fullname,
                        avata : res[index].avata,
                        message : data.message
                    }
                })
                resolve(list);
            })
        
    })
}
