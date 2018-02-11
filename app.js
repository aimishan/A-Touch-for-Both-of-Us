main = new Vue({
    el: "#main-container",
    data: {
        slidebarShow: false,
        lettersShow: false,
        discoveryShow: false,
        aboutShow: false,
        controlbarShow: false,
        currentImg: 0,
        image: ["1.png", "2.png", "3.png"]
    },
    methods: {
        toggleSlidebar: function() {
            this.slidebarShow = !this.slidebarShow
        },
        toggleLetters: function() {
            this.lettersShow = !this.lettersShow
        },
        toggleDiscovery: function() {
            this.discoveryShow = !this.discoveryShow
            this.controlbarShow = !this.controlbarShow
        },
        toggleAbout: function() {
            this.aboutShow = !this.aboutShow
        },
        switchPhotoLeft: function() {
            if(this.currentImg < 2)
                this.currentImg += 1
        },
        switchPhotoRight: function() {
            if(this.currentImg > 0)
                this.currentImg -= 1
        }
    }
})
