<template>
    <div class="px-4 py-3 my-5 text-center">
        <h1 class="display-5 fw-bold">Client Application</h1>
        <p class="mb-4">Please enter your portfolio details below.</p>
        <div class="form-wrap">
            <form class="row g-3 form-main">
                <div class="col-md-6">
                    <label for="inputFName">First Name</label>
                    <input type="text" class="form-control" id="inputFName">
                </div>
                <div class="col-md-6">
                    <label for="inputLName">Last Name</label>
                    <input type="text" class="form-control" id="inputLName">
                </div>
                <div class="col-md-6">
                    <label for="inputEmail" class="form-label">Email</label>
                    <input type="email" class="form-control" id="inputEmail">
                </div>
                <div class="col-md-6">
                    <label for="inputPhone" class="form-label">Phone Number</label>
                    <input type="phone" class="form-control" id="inputPhone">
                </div>
                <div class="col-12">
                    <label for="inputAddress" class="form-label">Address</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
                </div>
                <div class="col-12">
                    <label for="inputAddress2" class="form-label">Address 2</label>
                    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
                </div>
                <div class="col-md-6">
                    <label for="inputCity" class="form-label">City</label>
                    <input type="text" class="form-control" id="inputCity">
                </div>
                <div class="col-md-4">
                    <label for="inputState" class="form-label">State</label>
                    <input type="text" class="form-control" id="inputState">
                </div>
                <div class="col-md-2">
                    <label for="inputZip" class="form-label">Zip</label>
                    <input type="text" class="form-control" id="inputZip">
                </div>
                <div class="col-12">
                    <h3 class="lead">Asset Information</h3>
                </div>
                <div class="col-md-4">
                    <label for="asset1" class="form-label">Asset Name (Holding)</label>
                    <input type="text" placeholder="CBA.ASX" class="form-control" id="asset1">
                </div>
                <div class="col-md-4">
                    <label for="pPrice" class="form-label">$ Purchase Price</label>
                    <input type="number" placeholder="0.80" class="form-control" id="pPrice">
                </div>
                <div class="col-md-4">
                    <label for="cPrice" class="form-label">$ Current Price</label>
                    <input type="number" placeholder="0.43" class="form-control" id="cPrice">
                </div>
                <div class="col-md-6">
                    <label for="totalValue" class="form-label">Total Value</label>
                    <p type="text" class="form-control" id="totalValue">$0.00</p>
                </div>
                <div class="col-md-6">
                    <label for="changeAsset" class="form-label">Change in Asset</label>
                    <p type="text" class="form-control" id="changeAsset">$0.00</p>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "ClientForm",
};
</script>

<style scoped>
.form-main {
    text-align: left;
}

.form-wrap {
    max-width: 600px;
    margin: auto;
}
</style>
