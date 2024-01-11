// index.js

import express from "express"; // 요즘방식 => module
import { CouponController } from "./mvc/controllers/coupon.controller.js";
import { ProductController } from "./mvc/controllers/product.controller.js";
const app = express();

const productController = new ProductController();
const couponController = new CouponController();
// 상품 구매하기 API
app.post("/products/buy", productController.buyProduct);

// 상품 환불하기 API
app.post("/products/refund", productController.refundProduct);

// 쿠폰(상품권) API
app.post("/coupons/buy", couponController.buyCoupon);

app.listen(3000, () => {
  console.log("백엔드 API 서버가 켜졌어요!!!");
});
