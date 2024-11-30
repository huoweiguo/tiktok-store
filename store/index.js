export const mutations = {
  // 状态更改函数
  PRE_PAGE(state, offset) {
    state.offset -= offset;
  },
  // 下一页
  NEXT_PAGE(state, offset) {
    state.offset += offset;
  },
  GO_PAGE(state, offset) {
    state.offset = offset;
  },
};

export const state = {
  offset: 0,
};
