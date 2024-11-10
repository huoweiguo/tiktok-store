<template>
    <div>
        <div class="top">
            <div class="go_back" @click="goBack">
                <img src="https://www.jingtuitui.com/static/home/mobile/img/go_back.png" />
            </div>
            <div class="go_home" @click="goHome">
                <img src="https://www.jingtuitui.com/static/home/mobile/img/go_home.png" />
            </div>
        </div>

        <!--  -->
        <div class="this_goods">
            <div class="banner">
                <img src="http://img14.360buyimg.com/pop/jfs/t1/190259/30/41003/91803/65332d60F43bdc10e/48b1380dd3f63800.jpg?imageView2/2/w/521/h/521/q/100/imageMogr2/strip/format/jpg"
                    data-img="http://img14.360buyimg.com/pop/jfs/t1/190259/30/41003/91803/65332d60F43bdc10e/48b1380dd3f63800.jpg?imageView2/2/w/521/h/521/q/100/imageMogr2/strip/format/jpg"
                    class="" _400x400="" />
            </div>
            <div class="this_kind">
                <div class="Piangou">京东</div>
                <div class="this_time">有效期： 01-01 - 01-01</div>
            </div>
            <div class="this_show">
                【补贴6.9包邮】洋臣 盒装双头棉签 2盒【500头/盒】
            </div>
            <div class="this_price">
                <div class="after_quan">
                    到手价<span class="price_c">￥<span class="after_price">14.9</span></span>
                </div>
                <div class="befor_quan">
                    在售价<span class="befor_price">￥14.9</span>
                </div>
            </div>
            <div class="this_bottom">
                <div class="get_price">
                    佣金<span class="this_rute">15%</span>（￥2.235）
                </div>
            </div>
            <div class="this_cut"></div>
            <div class="link">
                <div id="goods_content">
                    <div class="link_photo">
                        <img src="http://img14.360buyimg.com/pop/jfs/t1/190259/30/41003/91803/65332d60F43bdc10e/48b1380dd3f63800.jpg?imageView2/2/w/521/h/521/q/100/imageMogr2/strip/format/jpg"
                            data-img="http://img14.360buyimg.com/pop/jfs/t1/190259/30/41003/91803/65332d60F43bdc10e/48b1380dd3f63800.jpg?imageView2/2/w/521/h/521/q/100/imageMogr2/strip/format/jpg"
                            class="" _400x400="" />
                    </div>
                    <div class="link_show">
                        先领9-5券 http://t.cn/A6n06ZO8
                        👉折不到0.01/支，天然好棉，不掉毛，吸水性强
                        <br />【补贴6.9包邮】洋臣 盒装双头棉签 2盒【500头/盒】<br />
                        <span class="link_cut">-------------</span>
                        <br />京东价：14.9元 <br />到手价：14.9元<br />
                        <span class="link_cut">-------------</span>
                        <br />
                        <span class="gray">抢购：</span><a target="_blank" href="https://item.jd.com/10077806755775.html"
                            biz-itemid="10077806755775" isconvert="1">http://item.jd.com/10077806755775.html</a>
                        <p></p>
                    </div>
                </div>
                <div class="link_butt">
                    <button class="butt1">立即转链</button>
                    <button class="butt2">
                        复制文案
                    </button>
                </div>
            </div>
            <div class="this_cut"></div>
        </div>

        <!--  -->
        <div class="goods-box">
            <div class="goods_cut">
                <div class="cut_img">
                    <img src="https://www.jingtuitui.com/static/home/mobile/img/cut_img.png" />
                </div>
                <div class="cut_tit">领券秒杀精选</div>
            </div>
            <div class="goods-list">
                <div class="time_goods" v-for="i in 10" :key="i">
                    <a href="/m/goods">
                        <div class="time_goods_photo">
                            <img src="https://img14.360buyimg.com/pop/jfs/t1/190259/30/41003/91803/65332d60F43bdc10e/48b1380dd3f63800.jpg?imageView2/2/w/260/h/260/q/100/imageMogr2/strip/format/jpg"
                                data-img="https://img14.360buyimg.com/pop/jfs/t1/190259/30/41003/91803/65332d60F43bdc10e/48b1380dd3f63800.jpg?imageView2/2/w/260/h/260/q/100/imageMogr2/strip/format/jpg"
                                class="" _400x400="" />
                        </div>
                        <div class="time_goods_bottom">
                            <div class="time_goods_top">
                                【补贴6.9包邮】洋臣 盒装双头棉签 2盒【500头/盒】
                            </div>
                            <div class="time_goods_price">
                                到手价
                                <span class="time_after_price">
                                    <span>￥</span>
                                    <span class="time_price_num">14.9</span>
                                </span>
                            </div>
                            <div class="good_buttom">
                                <div class="time_rute">比例：15%<br />佣金：2.235</div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    layout: "mobile",
    data() {
        return {};
    },
    methods: {
        goBack() {
            window.history.back();
        },
        goHome() {
            window.location.href = "/m";
        }
    },
};
</script>
<style lang="less" scoped>
.top {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    margin: 20px;
    z-index: 999;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        height: 40px;
        width: 40px;
    }
}

.this_goods {
    .banner {
        img {
            width: 100%;
        }
    }

    .this_kind {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;

        .Piangou {
            width: 47px;
            height: 23px;
            line-height: 23px;
            background: #fda;
            color: #fc6d23;
            font-size: 13px;
            border-radius: 12px;
            text-align: center;
        }

        .this_time {
            height: 23px;
            font-size: 12px;
            color: #999;
        }

    }

    .this_show {
        font-size: 16px;
        color: #333;
        margin: 0 10px;
    }

    .this_price {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;

        .price_c {
            color: #fc6d23;
        }

        .after_price {
            font-size: 22px;
        }

        .befor_quan {
            font-size: 12px;
            text-decoration: line-through;
            color: #999;
        }
    }

    .this_bottom {
        padding: 10px;
        padding-top: 0;
        font-size: 16px;
    }
}

.this_cut {
    width: 100%;
    height: 10px;
    float: left;
    background: #f5f5f5;
}

.link {
    padding: 20px;

    .link_photo {
        height: 100px;
        max-width: 100px;
        margin-bottom: 10px;

        img {
            display: block;
            width: 100%;
            height: 100%;

        }
    }

    .link_butt {
        margin-top: 30px;
    }
}

.goods-box {
    padding: 10px;

    .goods_cut {
        display: flex;
        font-size: 16px;
        padding: 10px;

        img {
            height: 23px;
            margin-right: 10px;
        }
    }

    .goods-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 10px;

    }

    .time_goods {
        width: calc(50% - 5px);
        border: 1px solid #f5f5f5;
        border-radius: 10px;


        a {
            display: block;
            color: #333;
        }

        .time_goods_photo {
            img {
                width: 100%;
            }
        }

        .time_goods_bottom {
            padding: 10px;
        }

        .time_goods_top {
            font-size: 14px;
            color: #333;
            line-height: 20px;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }

        .time_goods_price {
            font-size: 16px;

            .time_after_price {

                color: #fc6d23;
            }

            .time_price_num {
                font-size: 18px;
            }
        }

        .good_buttom {
            font-size: 12px;
            color: #999;
        }
    }
}
</style>
