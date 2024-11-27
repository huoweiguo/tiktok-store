export default function ({ req, redirect }) {
  if (process.server) {
    const MobileDetect = require("mobile-detect");
    const md = new MobileDetect(req.headers["user-agent"]);

    const isMobile = md.mobile();
    const isMobileUrl = req.url.includes("/m/");

    // 检查是否是移动端地址
    if (isMobileUrl) {
      if (!isMobile) {
        // 如果不是移动设备，重定向到PC端页面
        return redirect("/");
      }
    } else if (isMobile) {
      // 如果是移动设备，重定向到移动端页面
      return redirect("/m/");
    }
  }
}
