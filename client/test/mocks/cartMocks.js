const data = {
    ...mockInitState
};

const mockInitState = {
    items: [
        { id:2,title:'really big treat', desc:  "How do I eat this faster?", price:3.20, ref: Item2, credit:'Photo by Susan Yin on Unsplash'},
        { id:1,title:'big treat', desc:  "OH THIS TREAT IS BIG, AND GOOD", price:2.20, ref: Item1, credit:'Photo by Charles Deluvio on Unsplash'},
        { id:3,title:'little treat', desc:  "this treat is kind of small but still good", price:1.20, ref: Item3, credit:'Photo by Masimo Grabar on Unsplash'},
    ],
    itemsInCart: [],
    total: (0.00).toFixed(2)
}