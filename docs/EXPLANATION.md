# Giải thích bài IA#1 - cartTotal

Tài liệu do trợ lý soạn để Trần Vinh Quang (24127523) đọc và tự kiểm tra mức hiểu.
Việc có tài liệu này chưa chứng minh sinh viên đã giải thích được code.

## 1. Luồng xử lý của hàm

Đọc cùng [src/cart.js](../src/cart.js).

1. `items.length === 0`: giỏ rỗng trả về `0` ngay, không tính VAT hoặc phí ship.
2. `let subtotal = 0`: tạo biến cộng dồn tiền hàng. Dùng `let` vì giá trị thay đổi.
3. `for (const { price, qty } of items)`: duyệt từng sản phẩm; destructuring lấy
   `price` và `qty` từ object. `name` là tên sản phẩm, không tham gia tính tiền.
4. `price < 0`: nếu giá âm, ném `RangeError`. `throw` dừng hàm và chuyển lỗi cho
   nơi gọi; không đổi lỗi thành tổng tiền `0`.
5. `!Number.isInteger(qty) || qty <= 0`: số lượng phải vừa là số nguyên, vừa lớn
   hơn 0. Số `1.5`, chuỗi `'2'`, `NaN` và `Infinity` đều không được chấp nhận.
6. `subtotal += price * qty`: cộng tiền của sản phẩm sau khi kiểm tra hợp lệ.
7. `vat = subtotal * options.vatRate`: VAT tính trên tổng tiền hàng.
8. `subtotal >= options.freeShipFrom ? 0 : options.shipFee`: dùng toán tử ba
   ngôi để chọn phí ship. Bằng ngưỡng đã được miễn ship. Xét tiền hàng trước VAT.
9. `Math.round(subtotal + vat + shipping)`: cộng đủ các thành phần rồi mới làm
   tròn một lần. Giá trị trả về có kiểu `number`.

Hàm được `export` để file test có thể `import`. `"type": "module"` trong
package.json cho phép cú pháp ES modules này.

## 2. Ví dụ cần tự tính lại

Hai áo giá 180.000 và một sổ giá 45.000:

- Tiền hàng: 2 x 180.000 + 45.000 = 405.000.
- VAT 8%: 32.400.
- Tiền hàng dưới ngưỡng 500.000 nên phí ship là 30.000.
- Tổng: 405.000 + 32.400 + 30.000 = 467.400, trả về số `467400`.

Nếu tiền hàng là 470.000, VAT 8% làm tiền hàng cộng VAT thành 507.600. Vẫn phải
trả ship vì ngưỡng xét trên 470.000. Kết quả là 537.600.

Giá bằng 0 vẫn hợp lệ. Giỏ chứa một món miễn phí chưa phải giỏ rỗng: với ngưỡng
500.000 và ship 30.000 thì tổng là 30.000.

`toFixed(0)` trả về chuỗi. `Math.round()` trả về số nên đáp ứng yêu cầu kiểu dữ liệu.
Không làm tròn riêng từng món hoặc từng thành phần. Ví dụ 10.2 tiền hàng + 0.204
VAT + 0.2 ship = 10.604, làm tròn cuối cùng thành 11.

## 3. Cách đọc 19 test

Xem [test/cart.test.js](../test/cart.test.js). `test(name, callback)` đăng ký
một phép kiểm tra. `assert.equal(actual, expected)` ở chế độ strict so sánh
cả giá trị lẫn kiểu. `assert.throws(() => ..., RangeError)` kiểm tra loại lỗi.
Arrow function trì hoãn lời gọi để `assert.throws` có thể bắt lỗi đó.

| Nhóm | Số test | Điều cần chứng minh |
| --- | ---: | --- |
| Ví dụ mẫu và kiểu trả về | 2 | Tổng là 467400; kết quả là number |
| Quy tắc ship | 4 | Dưới, bằng, trên ngưỡng; ngưỡng xét trước VAT |
| Giỏ rỗng và giá 0 | 2 | Giỏ rỗng trả 0; món giá 0 vẫn hợp lệ |
| Giá âm | 1 | Món sai ở sau món hợp lệ vẫn gây RangeError |
| Số lượng sai | 6 | 0, -1, 1.5, '2', NaN, Infinity đều gây RangeError |
| Làm tròn | 4 | Làm tròn xuống/lên; gộp các món và các thành phần trước khi làm tròn |

Test giỏ rỗng truyền `{ vatRate: 0.08 }` theo đúng ví dụ ở slide 11. Vì trả về
ngay khi giỏ rỗng, hàm không cần đọc các tùy chọn ship trong trường hợp này.

Các giá trị kỳ vọng được tính từ đề, không gọi lại công thức của hàm trong
assertion. Khi có lỗi, tên test giúp biết quy tắc nào bị vi phạm.

## 4. Harness hoạt động như thế nào

- `AGENTS.md` mô tả stack, quy tắc, lệnh kiểm tra và những điều không được làm.
- `.editorconfig` hỗ trợ editor giữ thụt lề và xuống dòng thống nhất.
- `.gitattributes` yêu cầu Git chuẩn hóa file text thành LF.
- `scripts/check-format.js` dùng `node:fs` và `node:path`, đều có sẵn trong Node.
  Hàm `collectJavaScriptFiles` duyệt các thư mục source/test/scripts. Script đọc
  từng file, chuẩn hóa CRLF trong bộ nhớ, kiểm tra các dòng và gom lỗi vào mảng.
  Nếu có lỗi, in vị trí và đặt `process.exitCode = 1`; nếu không thì báo thành công.
- Gate chỉ kiểm tra tab, khoảng trắng cuối dòng, newline cuối file và thụt lề JS
  theo bội số 2. Nó không kiểm tra đầy đủ cú pháp/style như ESLint hay Prettier.
- `npm run check` dùng `&&`: chỉ chạy test sau khi format gate thành công.
- GitHub Actions chạy cùng lệnh trên máy Linux với Node 22 và 24, khi push hoặc
  có pull request. Ma trận này tạo hai job kiểm tra hai phiên bản Node.

Workflow tham khảo [hướng dẫn Node.js của GitHub](https://docs.github.com/en/actions/tutorials/build-and-test-code/nodejs)
và [setup-node](https://github.com/actions/setup-node). Không bật cache hoặc chạy
`npm ci` vì project không có dependencies hay lockfile để cài.

## 5. Câu hỏi tự luyện trước khi nộp

Thử trả lời bằng lời của mình, sau đó đối chiếu với code:

1. Nếu đổi `>=` thành `>` thì trường hợp nào sai và test nào phát hiện?
2. Tại sao giỏ rỗng phải được xử lý trước khi tính phí ship?
3. Chỉ kiểm tra `qty > 0` có loại được `1.5` hoặc chuỗi `'2'` không?
4. VAT được tính trên giá trị nào? Phí ship có bị tính VAT không?
5. Tại sao dùng `Math.round` ở cuối thay vì `toFixed` hoặc làm tròn từng món?
6. Vì sao `assert.throws` nhận một hàm thay vì gọi cartTotal ngay?
7. Test chạy thành công ở máy cá nhân có chứng minh CI đã chạy không?
8. Những file nào do AI viết? Bạn đã thực sự sửa, giữ hoặc loại bỏ phần nào?

Sau khi tự đọc hoặc sửa bài, bổ sung việc thực sự đã làm vào AI-LOG. Không ghi
đã tự viết code hay đã giải thích được chỉ vì tài liệu này tồn tại.
