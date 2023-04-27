<template>
    <div class="px-4 py-2 my-5 text-center">
        <h1 class="display-5 fw-bold">Client Application</h1>
        <p class="mb-4">Please enter your portfolio details below.</p>
        <div class="form-wrap">
            <form class="row g-3 form-main">
                <div class="col-md-6">
                    <label for="inputFName" @click="populateForm()">First Name</label>
                    <input type="text" class="form-control" id="inputFName" v-model="name.first" required>
                </div>
                <div class="col-md-6">
                    <label for="inputLName">Last Name</label>
                    <input type="text" class="form-control" id="inputLName" v-model="name.last" required>
                </div>
                <div class="col-md-6">
                    <label for="inputPhone" class="form-label">Phone Number</label>
                    <input type="tel" class="form-control" id="inputPhone" v-model="phone" required>
                </div>
                <div class="col-md-6">
                    <label for="inputEmail" class="form-label">Email</label>
                    <input type="email" class="form-control" id="inputEmail" v-model="email" required>
                </div>
                <div class="col-12">
                    <h3 class="lead">Bank Details</h3>
                </div>
                <div class="col-md-4">
                    <label for="inputBSB" class="form-label">BSB</label>
                    <input type="text" class="form-control" id="inputBSB" v-model.number="bank.bsb" required>
                </div>
                <div class="col-md-8">
                    <label for="inputBank" class="form-label">Account Number</label>
                    <input type="text" class="form-control" id="inputBank" v-model.number="bank.account" required>
                </div>
                <div class="col-12 md-0">
                    <h3 class="lead">Asset Information</h3>
                </div>
                <div class="asset g-3 mt-1 row" v-for="(asset, index) in assets" :key="index">
                    <div class="col-12">
                        <label for="aName" class="form-label">Asset Name (Holding)</label>
                        <input type="text" placeholder="CBA.ASX" class="form-control" id="aName" v-model="asset.assetName"
                            required>
                    </div>
                    <div class="col-md-4">
                        <label for="aQuantity" class="form-label">Units owned / Quantity</label>
                        <input type="number" placeholder="148238" class="form-control" id="aQuantity"
                            v-model.number="asset.quantity" required>
                    </div>
                    <div class="col-md-4">
                        <label for="pPrice" class="form-label">$ Purchase Price</label>
                        <input type="text" placeholder="0.80" class="form-control" id="pPrice" v-model="asset.purchasePrice"
                            required>
                    </div>
                    <div class="col-md-4">
                        <label for="cPrice" class="form-label">$ Current Price</label>
                        <input type="text" placeholder="0.43" class="form-control" id="cPrice" v-model="asset.currentPrice"
                            required>
                    </div>
                    <div class="col-12">
                        <label for="aTotal" class="form-label">Total Value</label>
                        <p type="text" class="form-control" id="aTotal">${{ calculateTotal(asset).toFixed(2) }}</p>
                    </div>
                    <div class="col-12 mt-0 asset-delete">
                        <span class="text-muted" @click="assets.splice(index, 1)">Delete</span>
                    </div>
                </div>
                <div class="col-12 more-asset">
                    <a @click="addAsset()">+ Add Another Asset</a>
                </div>
                <div class="col-12 form-submit">
                    <button type="submit" @click="submit($event)" class="btn btn-primary mx-1">Submit</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "ClientForm",
    data() {
        return {
            name: {
                first: '',
                last: ''
            },
            phone: '',
            email: '',
            bank: {
                bsb: '',
                account: '',
            },
            assets: [
                {
                    assetName: '',
                    quantity: '',
                    purchasePrice: '',
                    currentPrice: ''
                }
            ]
        }
    },
    methods: {
        addAsset() {
            this.assets.push({
                assetName: '',
                quantity: '',
                purchasePrice: '',
                currentPrice: ''
            });
        },
        calculateTotal(asset) {
            return asset.currentPrice * asset.quantity
        },
        populateForm() {
            this.name = {
                first: "Jane",
                last: "Doe"
            };
            this.phone = "0473344654";
            this.email = "jane@gmail.com";
            this.bank = {
                bsb: "067",
                account: "16323193308",
            };
            this.assets = [
                {
                    assetName: 'CBA.ASX',
                    quantity: '148238',
                    purchasePrice: '0.8',
                    currentPrice: '0.43'
                }
            ];
        },
        submit() {
            //event.preventDefault();
            const data = {
                name: this.name,
                phone: this.phone,
                email: this.email,
                bank: this.bank,
                assets: this.assets
            };
            data.assets.forEach((v) => {
                v.total = this.calculateTotal(v);
            });

            // make sure its valid first
            if (!document.querySelector(":invalid")) {
                console.log(data);
                this.$router.push({ name: 'submit'});
            }
        }
    }
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

.more-asset {
    text-align: center;
}

.more-asset a {
    text-decoration: none;
    color: var(--bs-link-color);
    cursor: pointer;
}

.asset-delete {
    text-align: left;
    cursor: pointer;
    text-decoration: underline;
}
</style>
