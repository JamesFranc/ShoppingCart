user = {
    userId: Number,
    name: String,
    registered: Date,
    status: 'active' | 'inactive'
};
activeStatus = (retired) => {
    return retired === null ? 'active' : 'inactive';
}

module.exports = user;