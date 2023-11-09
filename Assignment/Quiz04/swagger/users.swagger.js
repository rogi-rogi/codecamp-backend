// users.swagger.js

/**
 * @swagger
 * /users:
 *   get:
 *     summary: 회원 목록 조회 API
 *     tags: [User]
 *     responses:
 *       200:
 *         description: 성공
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 properties:
 *                   email:
 *                     type: String
 *                     example: abc123@aaa.com
 *                   name:
 *                     type: String
 *                     example: full-name
 *                   phone:
 *                     type: String
 *                     example: 010-1234-5678
 *                   personal:
 *                     type: String
 *                     example: 123456-1234567
 *                   prefer:
 *                     type: String
 *                     example: https:site.com
 */
