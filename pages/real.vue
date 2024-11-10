<template>
  <div>
    <div class="header-box">
      <div class="container">
        <div class="types-box">
          <div class="line between">
            <a class="active" href="##">全部</a>
            <a href="##">居家日用</a>
            <a href="##">食品</a>
            <a href="##">生鲜</a>
            <a href="##">图书</a>
            <a href="##">美妆个护</a>
            <a href="##">母婴</a>
            <a href="##">数码家电</a>
            <a href="##">内衣</a>
            <a href="##">配饰</a>
            <a href="##">女装</a>
            <a href="##">男装</a>
            <a href="##">鞋品</a>
            <a href="##">家装家纺</a>
            <a href="##">文娱车品</a>
            <a href="##">箱包</a>
            <a href="##">户外运动</a>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="list-box">
        <goodsItemAll />
      </div>

      <div class="page-box">
        <div>
          <a href="javascript:;">&lt;</a>
          <span class="curr">
            <em class="em"></em>
            <em>1</em>
          </span>
          <a href="javascript:;" data-page="2">2</a>
          <a href="javascript:;" data-page="3">3</a>
          <span class="spr">…</span>
          <a href="javascript:;" class="last" title="尾页" data-page="8">8</a>
          <a href="javascript:;" class="next" data-page="2">&gt;</a>
          <span class="count">共 291 条</span>
          <span class="skip">
            到第<input type="text" min="1" />页
            <button type="button" class="btn">确定</button>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
.header-box {
  // 背景渐变
  min-height: 382px;
  padding-top: 30px;
  background: url(/_nuxt/assets/images/center-bg.png) no-repeat;
  margin-bottom: 30px;

  .title {
    font-size: 30px;
    text-align: center;
    line-height: 3;
  }
}

.text-box {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  padding: 20px;
}

.types-box {
  width: 1200px;
  margin: 30px auto 0;
  padding: 15px 10px;
  background-color: rgba(0, 0, 0, 0.35);
  border-radius: 10px;

  .line {
    display: flex;
    align-items: center;
    color: #333;

    &.between {
      justify-content: space-between;
    }

    a {
      margin: 0 5px;
      padding: 3px 10px;
      color: rgba(255, 255, 255, 0.6);
      cursor: pointer;

      &.active {
        background-color: #fff;
        color: rgba(0, 0, 0, 0.5);
        border-radius: 15px;
      }
    }
  }
}

.list-box {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: -240px;
  margin-bottom: 50px;
}

.page-box {
  text-align: center;
  margin: 50px auto;

  a,
  .curr {
    display: inline-block;
    height: 36px;
    width: 36px;
    line-height: 34px;
    margin: 0 5px;
    border-radius: 4px;
    font-size: 14px;
    color: #333;

    vertical-align: middle;
    border: 1px solid #ddd;
    background-color: #fff;
    text-align: center;
  }

  .curr {
    background: #5086ff;
    color: #fff;
    border: 0;
  }

  .count {
    margin: 0 10px;
  }

  .skip {
    input {
      width: 30px;
      height: 30px;
      margin: 0 5px;
      text-align: center;
    }

    button {
      font-size: 14px;
    }
  }
}
</style>
