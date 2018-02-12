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
        switchWidget: function(widget) {
            if(this.currentWidget != widget) {
                this[this.currentWidget] = false;
                this.currentWidget = widget;
                this[widget] = true;
            }else{
                this[widget] = false;
                this.noneWidget = true;
                this.currentWidget="noneWidget"
            }
        },
        toggleSlidebar: function() {
            this.switchWidget("slidebarShow");
        },
        toggleLetters: function() {
            this.switchWidget("lettersShow");
        },
        toggleDiscovery: function() {
            this.switchWidget("discoveryShow");
        },
        toggleAbout: function() {
            this.switchWidget("aboutShow")
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
