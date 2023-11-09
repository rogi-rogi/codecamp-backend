// starbucks.swagger.js

/**
 * @swagger
 * /starbucks:
 *   get:
 *     summary: 커피목록 조회 API
 *     tags: [Starbucks]
 *     responses:
 *       200:
 *         description: 성공
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 properties:
 *                   name:
 *                     type: String
 *                     example: "아.아."
 *                   kcal:
 *                     type: Integer
 *                     example: 5
 */
