<template>
    <div>
        <div class="top">
            <a class="on" href="##">今日销量</a>
            <a href="##">推广排行榜</a>
        </div>

        <div class="goods-list">
            <div class="goods_item" v-for=" i in 10" :key="i">
                <div class="goods_info">
                    <div class="goods_photo">
                        <img class="" _400x400=""
                            src="https://img14.360buyimg.com/pop/jfs/t1/227345/35/20180/74452/665c7bcdF19151954/d10d7399c5fa1b61.jpg?imageView2/2/w/272/h/272/q/100/imageMogr2/strip/format/jpg"
                            data-img="https://img14.360buyimg.com/pop/jfs/t1/227345/35/20180/74452/665c7bcdF19151954/d10d7399c5fa1b61.jpg?imageView2/2/w/272/h/272/q/100/imageMogr2/strip/format/jpg">
                    </div>
                    <div class="goods_right">
                        <div class="goods_show">
                            数学口算题卡一二三四五六年级8分钟口算题人教版数学思维训练 计算题 五年级上册 </div>
                        <div class="goods_price">
                            券后价
                            <span class="after_price">
                                <span>￥</span>
                                <span class="price_num">31.9</span>
                            </span>
                        </div>
                        <div class="rute">
                            佣金比例：30%（￥957）
                        </div>
                    </div>
                </div>
                <div class="bottom_box">
                    <div class="today_send">
                        查看人数<span>73960</span>
                    </div>
                    <div class="btn">
                        立即推广
                    </div>

                </div>
            </div>
        </div>

        <!-- footer -->
        <MFooterBar active="today"></MFooterBar>
    </div>
</template>

<script>
export default {
    layout: "mobile",
};
</script>
<style lang='less' scoped>
.top {
    display: flex;
    justify-content: space-around;

    a {
        flex: 1;
        font-size: 16px;
        color: #333;
        text-align: center;
        padding: 10px 0;
        background: rgba(255, 76, 76, 0.1);
        color: #ff4c4c;

        &.on {
            color: #fff;
            background: #ff4c4c;
        }
    }
}

.goods-list {
    margin: 10px;

    .goods_item {
        border: 1px solid #eee;
        border-radius: 10px;
        margin-bottom: 10px;
        padding: 10px;

    }

    .goods_info {
        display: flex;
    }

    .goods_photo {
        width: 96px;

        img {
            display: block;
            width: 100%;

        }
    }

    .goods_right {
        flex: 1;

        .goods_show {
            font-size: 14px;
            margin-bottom: 10px;
        }

        .goods_price {
            color: #666;

            .after_price {
                color: #ff4c4c;
            }

            .price_num {
                font-size: 18px;
            }
        }

        .rute {
            color: #666;
        }
    }

    .bottom_box {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 10px;

        .today_send {
            color: #666;
            font-size: 12px;

        }

        .btn {
            background-color: #4A9BF7;
            color: #fff;
            border-radius: 50px;
            padding: 5px 10px;
            font-size: 12px;
        }
    }
}
</style>