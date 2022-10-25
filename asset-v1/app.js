/* 0.5.0 2022-5-20 0:0:0 */
var app = new function() {
    this.name = "Two Faces", this.version = "9", this.date = "2022", this.folder = "asset-v1/", this.looptime = 5640, this.bpm = 85, this.totalframe = 246, this.nbpolo = 7, this.nbloopbonus = 4, this.bonusloopA = !0, this.bonusendloopA = !4, this.recmaxloop = 34, this.recminloop = 8, this.recmintime = Math.round(this.looptime / 1e3) * this.recminloop, this.spritepolo = "polo-sprite.png", this.spritepicto = "game-picto.png", this.colBck = "#121212", this.col0 = "#AAE0B5", this.col1 = "#77B685", this.col2 = "#469657", this.col3 = "#296836", this.col4 = "#0C3925", this.animearray = [{
        name: "1_conductor",
        color: "007C87",
        uniqsnd: !0
    }, {
        name: "2_marvin",
        color: "007C87",
        uniqsnd: !0
    }, {
        name: "3_cloky",
        color: "007C87",
        uniqsnd: !1
    }, {
        name: "4_shoebill",
        color: "007C87",
        uniqsnd: !0
    }, {
        name: "5_oxygen",
        color: "007C87",
        uniqsnd: !1
    }, {
        name: "6_oscar",
        color: "8F023D",
        uniqsnd: !1
    }, {
        name: "7_detector",
        color: "8F023D",
        uniqsnd: !1
    }, {
        name: "8_reffrey",
        color: "8F023D",
        uniqsnd: !0
    }, {
        name: "9_flower",
        color: "8F023D",
        uniqsnd: !1
    }, {
        name: "10_velda",
        color: "8F023D",
        uniqsnd: !1
    }, {
        name: "11_major",
        color: "F8BC4D",
        uniqsnd: !0
    }, {
        name: "12_pipes",
        color: "F8BC4D",
        uniqsnd: !1
    }, {
        name: "13_omega",
        color: "F8BC4D",
        uniqsnd: !1
    }, {
        name: "14_glaucoma",
        color: "F8BC4D",
        uniqsnd: !1
    }, {
        name: "15_neuralgia",
        color: "F8BC4D",
        uniqsnd: !1
    }, {
        name: "16_guard",
        color: "479758",
        uniqsnd: !1
    }, {
        name: "17_magician",
        color: "479758",
        uniqsnd: !1
    }, {
        name: "18_choir",
        color: "479758",
        uniqsnd: !1
    }, {
        name: "19_faces",
        color: "479758",
        uniqsnd: !1
    }, {
        name: "20_future",
        color: "479758",
        uniqsnd: !1
    }], this.bonusarray = [{
        name: "Magic",
        src: "v1-b1-magic-hb.mp4",
        code: "1,3,4,11,17",
        sound: "bonus-magic",
        aspire: "aspire"
    }];
    for (var n = 0, o = this.animearray.length; n < o; n++) {
        var a = this.animearray[n].name;
        this.animearray[n].soundA = a + "_a", this.animearray[n].soundB = this.animearray[n].uniqsnd ? a + "_a" : a + "_b", this.animearray[n].anime = a + "-sprite.png", this.animearray[n].animeData = a + ".json"
    }
};