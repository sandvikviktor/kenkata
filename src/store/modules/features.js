export default {
    state: {
        features: [
            {
                title: "Free shipping", 
                text: "For a local customer, we provide free shipping facility", 
                icon: require("@/assets/icons/Shipping.png"), 
            },
            {
                title: "24/7 support", 
                text: "For any inquiry, we are available 24 hours every day", 
                icon: require("@/assets/icons/24-7.png"), 
            },
            {
                title: "Online payment", 
                text: "You can pay quickly and easily with our online payment system", 
                icon: require("@/assets/icons/Payment.png"), 
            },
            {
                title: "Fast delivery", 
                text: "We understand your urgency and we deliver in a fast way", 
                icon: require("@/assets/icons/Delivery.png"), 
            }
        ]
    },

    mutations: {

    },

    actions: {
        
    },

    getters: {
        features(state) {
            return state.features
        }
    }
}