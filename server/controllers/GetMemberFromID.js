const Account = require('../mongo_db/model/Account');

module.exports =  (memberID) => {
    return new Promise((resolve, reject) => {
        Account.find({_id : {$in: memberID}})
            .then(res => {
                let member = res.map(data => {
                    return {
                    id : data.id,
                    fullname : data.fullname,
                    avata : data.avata
                    }
                })
                resolve(member);
            });
    })
}