const mongoose = require('./db.js');
const schema = mongoose.Schema;
const viewsSchema = new schema({
    "id":{ type: Number },
    "key":{ type: Number },
    "name":{ type: String},
    "image":{ type: String},
    "desc":{ type: String},
    "content":{ type: String},
    "projectId":{ type: Number },
    "status":{ type: Number },
    "visibilitylevel":{ type: Number },
    "type":{ type: String },
    "updateTime":{ type: String },
    "createTime":{ type: String },
    "isPublish":{ type: Boolean },
    "title":{ type: String },
    "viewsKey":{ type: String }
})
const views = mongoose.model('views',viewsSchema);

module.exports =  views;