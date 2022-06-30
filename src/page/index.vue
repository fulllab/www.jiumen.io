<template>
    <div class="index">
        <el-container>
            <el-header>
                <el-row class="appbar" type="flex" justify="space-between">
                    <el-col span="8">
                        <router-link to="/">
                            <img class="logo" src="../assets/images/jiumen-logo-w.svg" />
                        </router-link>
                    </el-col>
                    <el-col span="16" class="content">
                        <a href="https://github.com/fulllab/" target="_blank" class="iconfont"> &#xe64a;</a>
                    </el-col>
                </el-row>
            </el-header>

            <el-main>
                <router-view></router-view>
            </el-main>
            <el-footer>
                <div class="footer-content">
                    <div>
                        <p class="text-second">© JIUMEN - Powered by ZeroDAO</p>
                    </div>
                </div>
            </el-footer>
        </el-container>
    </div>
</template>

<script>
import localstorage from "@/util/localstorage";

export default {
    name: "HomeIndex",
    data() {
        return {
            apps: [[]],
            chaTime: "",
            drawer: false,
        };
    },
    created() {
        this.menuSele = this.$route.path;
        let navLanguage = localstorage.fetch("language") || navigator.language;
        if (typeof this.$i18n.messages[navLanguage] == "undefined") {
            navLanguage = "en-US";
        }
        this.$i18n.locale = navLanguage;
    },
    methods: {
        changeLang(language) {
            this.$i18n.locale = language;
            localstorage.set("language", language, 0);
        },
    },
};
</script>
<style lang="less">
body {
    margin: 0;
    background-color: #13ae67;
}

.el-header {
    background-color: #f9faff;
}

.el-footer {
    background-color: #eefdff;
    background-image: linear-gradient(119deg, #eefdff 0%, #fbf7ff 99%);
    height: auto !important;
    padding: 20px;

    .footer-content {
        display: flex;
        justify-content: space-between;
        max-width: 1024px;
        margin: auto;

        .footer-nav {
            display: flex;
            flex-flow: column;
            text-align: left;

            .footer-nav-title {
                margin-bottom: 20px;
                font-weight: bold;
            }

            a,
            span {
                text-align: left;
                margin-top: 5px;
                justify-content: left;
            }
        }

        img {
            width: 120px;
        }
    }

    .icon-buttons {
        margin-top: 30px;
    }
}

.t1 {
    font-size: 3em;
    font-weight: bold;
}

.regular-text {
    color: #606266;
}

.t2 {
    font-size: 2em;
    font-weight: bold;
    text-align: center;
}

.t3 {
    font-size: 1.5em;
}

.t4 {
    font-size: 1.2em;
}

.el-button--text {
    span {
        color: #303133;
    }
}

.index {
    width: 100%;

    .appbar {
        width: 100%;
        height: 5em;
        padding: 2em 0;

        .content {
            text-align: right;
            a {
                font-size: 20px;
                color: white;
                text-decoration:none;
            }
        }

        .menu {
            .iconfont {
                font-size: 20px;
            }
        }

        .nav {
            a {
                font-size: 18px;
                line-height: 26px;
                color: #fff;
            }
        }
    }

    .el-drawer__body {
        text-align: right;

        a {
            font-size: 26px;
            margin-right: 15px;
            color: #fff;
        }

        img {
            margin: 15px 15px 25px auto;
        }

        .el-dropdown {
            margin-right: 15px;
        }
    }

    .ide {
        width: 100%;
        text-align: center;

        .title {
            p:nth-child(1) {
                margin-top: 3em;
                text-shadow: 5px 3px 1px #fb6c84;
            }

            p:nth-child(2) {
                margin-top: -1em;
            }
        }

        .ide-bg {
            margin: auto;

            .el-card {
                margin: 0.2em;
            }

            p {
                white-space: nowrap;
            }
        }

        .el-card__body {
            p:nth-child(1) {
                font-size: 2em;
                line-height: 1em;
                margin: 0;
            }
        }
    }
}
</style>
<style lang="scss">
@font-face {
    font-family: "ColorTube";
    src: url(../assets/css/ColorTube-2.otf);
}

.ColorTube {
    font-family: "ColorTube";
}

.iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
}

.title {
    p:nth-child(1) {
        margin-top: 3em;
    }

    p:nth-child(2) {
        margin-top: -1em;
    }
}

.primary {
    color: #002fda;
}

.logo {
    height: 120px;
    width: auto;
}

.el-header {
    background-color: transparent !important;
}

.fault-text {
    position: relative;
    color: #0322db;

    &::after,
    &::before {
        width: 100%;
        overflow: hidden;
        position: absolute;
        top: 0;
        background-color: #fff;
        clip: rect(0, 900px, 0, 0);
        color: #0322db;
        content: attr(data-text);
        animation: shake 3s linear infinite alternate-reverse;
    }

    &::before {
        left: -1px;
        text-shadow: 2px 0 #f85305;
    }

    &::after {
        left: 1px;
        text-shadow: -2px 0 #f66;
        animation-duration: 2s;
    }
}

@keyframes shake {
    $steps: 20;

    @for $i from 0 through $steps {
        #{percentage($i * (1 / $steps))} {
            clip: rect(random(100) + px, 9999px, random(100) + px, 0);
        }
    }
}

.el-main {
    margin: -60px 0 0 0;
    padding: 0;
}
</style>
