<template>
    <div class="home">
        <el-row class="pioneer">
            <el-col :sm="12" :xs="24">
                <div class="t1 title">
                    Strategy Canva In Web3
                </div>
                <a href="https://alpha.jiumen.io/" target="_blank" class="demo">
                    <el-button round>Demo</el-button>
                </a>
            </el-col>
            <el-col :sm="12" :xs="24">
                <iframe id="bi_iframe" width="100%" :height="iframeHeigth"
                    src="https://www.youtube.com/embed/RGrgNqop5oI?autoplay=1&controls=0&showinfo=0&modestbranding=1"
                    frameborder="0" title="JIUMEN" style="border-radius: 5px; border-style: hidden;"></iframe>
            </el-col>
        </el-row>

        <el-row class="cards">
            <el-col :span="24">
                <div class="t2">
                    The Information Revolution in Web3
                </div>
            </el-col>
            <el-col :sm="8" :xs="24">
                <div class="t3">
                    Company
                </div>
                <img src="../assets/images/gs.svg" />
            </el-col>
            <el-col :sm="8" :xs="24">
                <div class="t3">
                    DAO
                </div>
                <img src="../assets/images/dao.svg" />
            </el-col>
            <el-col :sm="8" :xs="24">
                <div class="t3">
                    DAO + JIUMEN
                </div>
                <img src="../assets/images/with-jiumen.svg" />
            </el-col>
        </el-row>

        <div class="ecology">
            <div class="safe normal-width">
                <div class="t1 white">
                    You have a good idea?
                </div>
                <p class="white">Feel free to contact us if you have any questions or would like to contribute in our project or you
                    have any suggestions or need additional features .</p>
                <a href="https://zgxopquddtt.typeform.com/to/QcoYqFHi" target="_blank" class="demo">
                    <el-button round>Contact</el-button>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
let isLoadList = true;
const limit = 10;
import BScroll from "@better-scroll/core";
import IconTable from "../components/IconTable.vue";

export default {
    data() {
        return {
            iframeHeigth: 300,
            tableData: [
                {
                    category: "Decentralized",
                    government: -1,
                    turing: 1,
                    poap: 0,
                    poh: 1,
                    os: 1,
                },
                {
                    category: "Security",
                    government: -1,
                    turing: 0,
                    poap: 0,
                    poh: 1,
                    os: 1,
                },
                {
                    category: "Quantifiable",
                    government: -1,
                    turing: -1,
                    poap: -1,
                    poh: -1,
                    os: 1,
                },
                {
                    category: "Scalability",
                    government: -1,
                    turing: -1,
                    poap: -1,
                    poh: -1,
                    os: 1,
                },
                {
                    category: "Self-repair",
                    government: 1,
                    turing: -1,
                    poap: -1,
                    poh: -1,
                    os: 1,
                },
                {
                    category: "Friendly",
                    government: 1,
                    turing: -1,
                    poap: 0,
                    poh: -1,
                    os: 1,
                },
            ],
        };
    },
    components: {
        iconTable: IconTable,
    },
    mounted() {
        const ifmWidth = document.getElementById("bi_iframe").offsetWidth;
        console.log('ifmWidth', ifmWidth);
        this.iframeHeigth = ifmWidth / 2
    },
};
</script>
<style lang="scss">
@import "../theme/colors.scss";

$--primary-pixel: linear-gradient(0deg, $--color-primary 100%, #fff 0);
$--white-pixel: linear-gradient(0deg, #fff 100%, #fff 0);
$--grey-pixel: linear-gradient(0deg, #f8f6f7 100%, #f8f6f7 0);

.home {
    button {
        margin-top: 50px;
    }

    .normal-width {
        max-width: 1200px;
        margin: auto;
        padding: 80px 20px;
    }

    .pioneer {
        text-align: center;
        overflow: hidden;
        margin: 180px 20px;

        .title {
            color: #fff;
            margin-top: 2em;
        }

        .demo button {
            margin-bottom: 2em;
        }
    }

    .grey-box {
        background: #aea1df;

        .support {
            width: 100%;
            margin-top: 60px;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;

            img {
                height: 50px;
                margin: 15px;
            }
        }
    }

    .os {
        i {
            font-size: 1.5em;
        }
    }

    .ecology-name {
        width: 100%;
        text-align: center;
    }

    .ecology-name:last-child {
        margin-bottom: 20px;
    }

    .safe {
        margin-top: 220px !important;
        margin-bottom: 200px !important;

        p {
            text-align: left !important;
        }

        p:nth-child(1) {
            font-size: 3.5em;
            font-weight: bold;
        }

        .t1 {
            margin-bottom: 1em;
        }

        .carousel-item {
            margin: auto 20px;
        }
    }


    .cards {
        background: #fff;
        padding: 50px 0;
        box-shadow: 0 10px 20px #08f3a5;

        .t2 {
            margin-bottom: 30px;
        }

        .el-col {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 20px auto;

            img {
                width: 80%;
                margin: 20px auto;
                max-width: 300px;
            }
        }

        .el-link {
            margin-top: 26px;
            position: absolute;
            bottom: 20px;
            left: 30px;
        }

        .el-row {
            max-width: 1200px;
            margin: auto !important;
        }

        .clearfix {
            font-size: 1.6em;
            font-weight: bold;
        }
    }

    .ecology {
        overflow: hidden;

        p {
            text-align: center;
            margin: 0;
        }

        .circle {
            width: 200%;
            height: 200%;
            border: 1px solid black;
            border-radius: 100%;
            border-bottom: none;
        }
    }

    .pixel-button-4:hover {
        filter: drop-shadow(0 5px 15px #5366dd);
    }

    .pixel-button-4-primary {
        background: $--primary-pixel, $--primary-pixel, $--primary-pixel,
            $--primary-pixel;
    }

    .pixel-button-4-white {
        background: $--white-pixel, $--white-pixel, $--white-pixel, $--white-pixel;
    }

    .pixel-button-4 {
        background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
        background-position: center 50%, center 50%, center 50%, center 50%;
        background-size: calc(100% - 12px) calc(100% - 20px),
            calc(100% - 24px) calc(100% - 8px), 100% calc(100% - 32px),
            calc(100% - 40px) 100%;
        border: none;
        min-height: 60px;
        filter: drop-shadow(0 5px 15px #a2adf3);
        min-width: 150px;
    }

    .timeline {
        width: 100%;
        padding: 20px 0;
        background-color: #001835;

        .title {
            width: 100%;
        }
    }
}

.bottom {
    background-color: #4400ff;
    height: 50px;
}
</style>
