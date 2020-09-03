export default {
    state: {
        shopByCategory: [
            {
                category: "Men",
                quantity: "35"
            },
            {
                category: "Women",
                quantity: "35"
            },
            {
                category: "Hats",
                quantity: "4"
            },
            {
                category: "Kids",
                quantity: "18"
            },
            {
                category: "Shoes",
                quantity: "22"
            },
            {
                category: "Sunglasses",
                quantity: "18"
            },
            {
                category: "Watches",
                quantity: "2"
            }
        ],
        newArrivals: [
            {
                title: "Blue silk flare sleeved top",
                badge: "new",
                image: require('@/assets/images/products/product1.png')
            },
            {
                title: "New look men's coat",
                badge: "new",
                image: require('@/assets/images/products/product2.png')
            },
            {
                title: "Circle pattern girls shirt",
                badge: "new",
                image: require('@/assets/images/products/product3.png')
            }
        ],
        featuredProducts: [
            {
                title: "Winter collection for women's",
                badge: "hot",
                image: require('@/assets/images/products/product4.png')
            },
            {
                title: "New look men's coat",
                badge: "hot",
                image: require('@/assets/images/products/product5.png')
            },
            {
                title: "Red women's blazer full",
                badge: "-30%",
                image: require('@/assets/images/products/product6.png')
            }
        ],
        topSellers: [
            {
                title: "Men's denim shirts full",
                brand: require('@/assets/brands/Bexim.png'),
                image: require('@/assets/images/products/product7.png')
            },
            {
                title: "Men's denim shirts full",
                brand: require('@/assets/brands/Lighton.png'),
                image: require('@/assets/images/products/product8.png')
            },
            {
                title: "Men's denim shirts full",
                brand: require('@/assets/brands/Rosimo.png'),
                image: require('@/assets/images/products/product9.png')
            }
        ],
        mayAlsoLike: [],
        relatedProducts: [],
        wishlist: []
    },

    mutations: {

    },

    actions: {
        
    },

    getters: {
        shopByCategory(state) {
            return state.shopByCategory
        },
        newArrivals(state) {
            return state.newArrivals
        },
        featuredProducts(state) {
            return state.featuredProducts
        },
        topSellers(state) {
            return state.topSellers
        },
        mayAlsoLike(state) {
            return state.mayAlsoLike
        },
        relatedProducts(state) {
            return state.relatedProducts
        },
        wishlist(state) {
            return state.wishlist
        },
    }
}