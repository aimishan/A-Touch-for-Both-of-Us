main = new Vue({
    el: "#main-container",
    data: {
        slidebarShow: false,
        lettersShow: false,
        discoveryShow: false,
        aboutShow: false,
        noneWidget: true,
        currentImg: 0,
        image: ["1.png", "2.png", "3.png"],
        currentEssay: 0,
        currentWidget: "noneWidget"
    },
    watch: {
        slidebarShow: function() {
            if(this.slidebarShow == false)
                this.currentEssay = 0;
        },
        lettersShow: function() {
            if(this.lettersShow == true)
                $("#essays-container").css("z-index", 5)
            else $("#essays-container").css("z-index", 7)
        }
    },
    computed: {
        controlbarShow: function() {
            return this.discoveryShow
        }
    },
    methods: {
        toggleSlidebar: function() {
            if(this.currentWidget != "slidebarShow") {
                this[this.currentWidget] = false;
                this.currentWidget = "slidebarShow";
                this.slidebarShow = true;
            }else{
                this.slidebarShow = false;
                this.noneWidget = true;
                this.currentWidget="noneWidget"
            }
            if(this.currentEssay != 0)  this.currentEssay = 0;
        },
        toggleLetters: function() {
            if(this.currentWidget != "lettersShow") {
                this[this.currentWidget] = false;
                this.currentWidget = "lettersShow";
                this.lettersShow = true;
            }else{
                this.lettersShow = false;
                this.noneWidget = true;
                this.currentWidget="noneWidget"
            }
        },
        toggleDiscovery: function() {
            if(this.currentWidget != "discoveryShow") {
                this[this.currentWidget] = false;
                this.currentWidget = "discoveryShow";
                this.discoveryShow = true;
            }else{
                this.discoveryShow = false;
                this.noneWidget = true;
                this.currentWidget="noneWidget"
            }
        },
        toggleAbout: function() {
            if(this.currentWidget != "aboutShow") {
                this[this.currentWidget] = false;
                this.currentWidget = "aboutShow";
                this.aboutShow = true;
            }else{
                this.aboutShow = false;
                this.noneWidget = true;
                this.currentWidget="noneWidget"
            }
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
