const farmer_router = require('./routes/farmer')
const vendor_router = require('./routes/vendor')
const buy_prod_router = require('./routes/buy_prod')
const rent_prod_router = require('./routes/rent_prod')
const fpo_router = require('./routes/fpo_app')
const job_router = require('./routes/job_list')

module.exports = {
    farmer_router,
    vendor_router,
    buy_prod_router,
    rent_prod_router,
    fpo_router,
    job_router
}
    