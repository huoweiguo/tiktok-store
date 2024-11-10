<template>
    <div>
        <div class="choice_kind">
            <div class="slide-box">
                <div class="slide-item">
                    <div class="isCollect">全部商品</div>
                </div>
                <div class="slide-item">
                    <div class="">居家日用</div>
                </div>
                <div class="slide-item">
                    <div class="">食品</div>
                </div>
                <div class="slide-item">
                    <div class="">生鲜</div>
                </div>
                <div class="slide-item">
                    <div class="">图书</div>
                </div>
                <div class="slide-item">
                    <div class="">美妆个护</div>
                </div>
                <div class="slide-item">
                    <div class="">母婴</div>
                </div>
                <div class="slide-item">
                    <div class="">数码家电</div>
                </div>
                <div class="slide-item">
                    <div class="">内衣</div>
                </div>
                <div class="slide-item">
                    <div class="">配饰</div>
                </div>
                <div class="slide-item">
                    <div class="">女装</div>
                </div>
                <div class="slide-item">
                    <div class="">男装</div>
                </div>
                <div class="slide-item">
                    <div class="">鞋品</div>
                </div>
                <div class="slide-item">
                    <div class="">家装家纺</div>
                </div>
                <div class="slide-item">
                    <div class="">文娱车品</div>
                </div>
                <div class="slide-item">
                    <div class="">箱包</div>
                </div>
                <div class="slide-item">
                    <div class="">户外运动</div>
                </div>
            </div>
        </div>

        <div class="goods_list">
            <div class="goods_mod" v-for="i in 10" :key="i">
                <a href="/m/goods">
                    <div class="goods_photo">
                        <img src="https://img14.360buyimg.com/pop/jfs/t1/190259/30/41003/91803/65332d60F43bdc10e/48b1380dd3f63800.jpg?imageView2/2/w/272/h/272/q/100/imageMogr2/strip/format/jpg"
                            data-img="https://img14.360buyimg.com/pop/jfs/t1/190259/30/41003/91803/65332d60F43bdc10e/48b1380dd3f63800.jpg?imageView2/2/w/272/h/272/q/100/imageMogr2/strip/format/jpg"
                            class="" _400x400="">
                    </div>
                    <div class="goods_right">
                        <div class="goods_show">
                            【补贴6.9包邮】洋臣 盒装双头棉签 2盒【500头/盒】 </div>
                        <div style="height: 30px;"></div>
                        <div class="goods_price">
                            券后价
                            <span class="after_price">￥
                                <span class="price_num">14.9</span>
                            </span>
                            <span class="price_befor">￥14.9</span>
                        </div>
                        <div class="rute">
                            佣金比例：15%（￥2.235）
                        </div>
                    </div>
                </a>
            </div>
        </div>


        <!-- footer -->
        <MFooterBar active="sift"></MFooterBar>
    </div>
</template>

<script>
export default {
    layout: "mobile",
};
</script>

<style lang="less" scoped>
.choice_kind {
    overflow: auto;

    .slide-box {
        display: flex;
        align-items: center;

        .slide-item {
            flex: 0 0 auto;
            padding: 10px;

            &>div {
                padding: 5px 0;
                // border-bottom: 2px solid #4A9BF7;

                &.isCollect {
                    border-bottom: 2px solid #4A9BF7;
                    font-weight: bold;
                }
            }
        }
    }
}

.goods_list {
    margin: 10px;

    .goods_mod {
        margin-bottom: 10px;
        border-radius: 10px;
        border: 1px solid #eee;

        a {
            display: flex;
            gap: 10px;
            padding: 10px;
            color: #333;
        }

        .goods_photo {
            width: 142px;

            img {
                display: block;
                width: 100%;
                height: 100%;

            }
        }

        .goods_show {
            height: 40px;
            line-height: 20px;
            font-size: 14px;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            margin: 5px 0;
        }

        .goods_price {
            height: 25px;
            line-height: 25px;
            font-size: 14px;
            margin: 0 auto;

            .after_price {
                color: #4A9BF7;
                font-size: 18px;
            }

            .price_befor {
                color: #999;
                text-decoration: line-through;
            }

        }

        .rute {
            font-size: 12px;
            color: #999;
        }
    }
}
</style>
