# 25 câu trắc nghiệm C# - Chủ đề `Exception: lỗi runtime`

## Phạm vi bao phủ

Bộ câu hỏi này bao phủ các ý chính:

- Runtime error là gì
- Exception là gì
- Khác lỗi compile-time và runtime
- `try`, `catch`, `finally`, `throw`
- Luồng chạy khi gặp exception
- Các exception hay gặp: `FormatException`, `DivideByZeroException`, `IndexOutOfRangeException`, `NullReferenceException`
- Thứ tự nhiều `catch`
- `Exception` là class cha
- `e.Message`, `e.StackTrace`
- Khi nào nên dùng `TryParse`
- Bẫy hay gặp khi xử lý lỗi runtime

---

## Câu hỏi

### Câu 1
Runtime error là lỗi xảy ra khi nào?

A. Khi đang viết comment  
B. Khi chương trình đang chạy  
C. Khi đặt tên biến  
D. Khi chưa biên dịch code  

### Câu 2
Exception trong C# là gì?

A. Một object đại diện cho lỗi hoặc tình huống bất thường khi chương trình chạy  
B. Một kiểu dữ liệu chỉ lưu số nguyên  
C. Một vòng lặp đặc biệt  
D. Một loại namespace  

### Câu 3
Lỗi nào sau đây là runtime error?

A. Thiếu dấu `;`  
B. Viết sai từ khóa `public` thành `pubic`  
C. Chia số nguyên cho 0 khi chương trình chạy  
D. Khai báo class sai cú pháp  

### Câu 4
Lỗi compile-time khác runtime error ở điểm nào?

A. Compile-time error xảy ra khi biên dịch, runtime error xảy ra khi chương trình chạy  
B. Runtime error luôn bị phát hiện trước khi chạy  
C. Compile-time error chỉ xảy ra trong `try`  
D. Hai loại lỗi này giống nhau hoàn toàn  

### Câu 5
Từ khóa nào dùng để bọc đoạn code có khả năng phát sinh exception?

A. `catch`  
B. `try`  
C. `finally`  
D. `throw`  

### Câu 6
Từ khóa nào dùng để bắt và xử lý exception?

A. `try`  
B. `catch`  
C. `class`  
D. `namespace`  

### Câu 7
Từ khóa nào dùng để ném exception ra ngoài?

A. `throw`  
B. `return`  
C. `break`  
D. `continue`  

### Câu 8
Khối `finally` dùng để làm gì?

A. Chỉ chạy khi không có lỗi  
B. Chỉ chạy khi có lỗi  
C. Luôn chạy để dọn dẹp tài nguyên, dù có lỗi hay không  
D. Chỉ dùng để khai báo biến  

### Câu 9
Cho code:

```csharp
try
{
    Console.WriteLine("A");
    int x = int.Parse("abc");
    Console.WriteLine("B");
}
catch
{
    Console.WriteLine("Lỗi");
}
```

Kết quả đúng là gì?

A. 
```text
A
B
Lỗi
```

B.
```text
A
Lỗi
```

C.
```text
B
Lỗi
```

D.
```text
Lỗi
A
B
```

### Câu 10
Vì sao dòng `Console.WriteLine("B");` ở câu 9 không chạy?

A. Vì sau khi exception xảy ra trong `try`, các dòng phía sau trong `try` bị bỏ qua  
B. Vì `Console.WriteLine` không in được chữ B  
C. Vì `catch` chạy trước `try`  
D. Vì `int.Parse()` luôn trả về 0  

### Câu 11
Sau khi `catch` xử lý xong exception, chương trình sẽ làm gì?

A. Quay lại chạy tiếp đúng dòng đã lỗi trong `try`  
B. Chạy tiếp sau toàn bộ khối `try-catch`  
C. Tự động tắt máy  
D. Bắt buộc chạy lại từ đầu chương trình  

### Câu 12
Exception nào thường xảy ra với code sau?

```csharp
int x = int.Parse("abc");
```

A. `FormatException`  
B. `DivideByZeroException`  
C. `IndexOutOfRangeException`  
D. `NullReferenceException`  

### Câu 13
Exception nào thường xảy ra với code sau?

```csharp
int a = 10;
int b = 0;
int c = a / b;
```

A. `FormatException`  
B. `DivideByZeroException`  
C. `ArgumentNullException`  
D. `InvalidOperationException`  

### Câu 14
Exception nào thường xảy ra với code sau?

```csharp
int[] arr = { 1, 2, 3 };
Console.WriteLine(arr[5]);
```

A. `IndexOutOfRangeException`  
B. `FormatException`  
C. `DivideByZeroException`  
D. `ArgumentException`  

### Câu 15
Exception nào thường xảy ra với code sau?

```csharp
User u = null;
Console.WriteLine(u.Name);
```

A. `NullReferenceException`  
B. `FormatException`  
C. `FileNotFoundException`  
D. `OverflowException`  

### Câu 16
`catch (Exception e)` có ý nghĩa gì?

A. Chỉ bắt lỗi chia cho 0  
B. Bắt các exception thuộc `Exception` hoặc class con của `Exception`  
C. Không bắt được lỗi nào  
D. Chỉ bắt lỗi sai định dạng chuỗi  

### Câu 17
Khi có nhiều `catch`, thứ tự đúng là gì?

A. `catch (Exception e)` đặt trước mọi catch cụ thể  
B. Catch cụ thể đặt trước, catch tổng quát `Exception` đặt sau  
C. Thứ tự nào cũng như nhau  
D. Chỉ được có một `catch`  

### Câu 18
Vì sao không nên đặt `catch (Exception e)` trước `catch (FormatException e)`?

A. Vì `Exception` bắt quá rộng, làm catch cụ thể phía sau không còn cơ hội chạy  
B. Vì `Exception` không tồn tại trong C#  
C. Vì `FormatException` không phải exception  
D. Vì `catch` không được dùng nhiều lần  

### Câu 19
Property nào của object exception thường dùng để lấy nội dung lỗi ngắn gọn?

A. `e.Message`  
B. `e.Length`  
C. `e.Value`  
D. `e.Name`  

### Câu 20
`e.StackTrace` thường cho biết gì?

A. Đường đi/vị trí gọi hàm dẫn đến lỗi  
B. Giá trị lớn nhất của int  
C. Tên biến local  
D. Số lượng class trong project  

### Câu 21
Khi dữ liệu nhập từ bàn phím có thể sai định dạng số, cách nào thường tốt hơn lạm dụng exception?

A. `int.Parse()` rồi để lỗi  
B. `int.TryParse()` để kiểm tra trước  
C. Luôn dùng `throw new Exception()`  
D. Không cần kiểm tra gì  

### Câu 22
Phát biểu nào đúng về `throw`?

A. `throw` chỉ in lỗi ra màn hình  
B. `throw` báo rằng hàm không thể tiếp tục đúng logic và ném lỗi cho tầng gọi xử lý  
C. `throw` giống `Console.WriteLine()`  
D. `throw` chỉ dùng trong vòng lặp `for`  

### Câu 23
Nếu một hàm nhận tuổi không hợp lệ, exception phù hợp hơn là gì?

A. `ArgumentOutOfRangeException`  
B. `DivideByZeroException`  
C. `IndexOutOfRangeException`  
D. `NullReferenceException`  

### Câu 24
Nếu tham số truyền vào không được phép `null`, exception phù hợp hơn là gì?

A. `ArgumentNullException`  
B. `FormatException`  
C. `DivideByZeroException`  
D. `IndexOutOfRangeException`  

### Câu 25
Chốt đúng nhất về exception runtime trong C# là gì?

A. Exception là lỗi cú pháp luôn bị phát hiện trước khi chạy  
B. Exception là cơ chế báo và xử lý lỗi phát sinh khi chương trình đang chạy  
C. Exception chỉ dùng để thay thế mọi câu `if`  
D. Exception chỉ xuất hiện trong chương trình có file  

---

## Đáp án nhanh

| Câu | Đáp án |
|---:|:---:|
| 1 | B |
| 2 | A |
| 3 | C |
| 4 | A |
| 5 | B |
| 6 | B |
| 7 | A |
| 8 | C |
| 9 | B |
| 10 | A |
| 11 | B |
| 12 | A |
| 13 | B |
| 14 | A |
| 15 | A |
| 16 | B |
| 17 | B |
| 18 | A |
| 19 | A |
| 20 | A |
| 21 | B |
| 22 | B |
| 23 | A |
| 24 | A |
| 25 | B |

---

## Giải thích siêu ngắn

| Câu | Ý chính cần nhớ |
|---:|---|
| 1 | Runtime error xảy ra khi chương trình đang chạy. |
| 2 | Exception là object chứa thông tin lỗi. |
| 3 | Chia cho 0 là lỗi lúc chạy. |
| 4 | Compile-time xảy ra khi biên dịch, runtime xảy ra khi chạy. |
| 5 | `try` bọc đoạn code có thể lỗi. |
| 6 | `catch` bắt và xử lý exception. |
| 7 | `throw` dùng để ném exception. |
| 8 | `finally` thường dùng để dọn dẹp tài nguyên. |
| 9 | `int.Parse("abc")` lỗi nên `"B"` không chạy. |
| 10 | Gặp exception trong `try` thì nhảy xuống `catch`. |
| 11 | Sau `catch`, chương trình chạy tiếp sau khối `try-catch`. |
| 12 | Sai định dạng số gây `FormatException`. |
| 13 | Chia cho 0 gây `DivideByZeroException`. |
| 14 | Truy cập sai chỉ số mảng gây `IndexOutOfRangeException`. |
| 15 | Dùng object `null` gây `NullReferenceException`. |
| 16 | `Exception` là lớp cha của nhiều exception. |
| 17 | Catch cụ thể trước, catch tổng quát sau. |
| 18 | `Exception` đặt trước sẽ bắt hết. |
| 19 | `Message` chứa thông báo lỗi. |
| 20 | `StackTrace` giúp dò đường đi gây lỗi. |
| 21 | Nhập liệu nên ưu tiên `TryParse()` khi có thể. |
| 22 | `throw` báo lỗi cho tầng gọi xử lý. |
| 23 | Tuổi ngoài phạm vi hợp lệ nên dùng `ArgumentOutOfRangeException`. |
| 24 | Tham số null không hợp lệ nên dùng `ArgumentNullException`. |
| 25 | Exception xử lý lỗi phát sinh lúc runtime. |

---

## Bảng chốt nhanh

| Thành phần | Ý nghĩa |
|---|---|
| Runtime error | Lỗi xảy ra khi chương trình đang chạy |
| Exception | Object đại diện cho lỗi |
| `try` | Bọc code có thể lỗi |
| `catch` | Bắt và xử lý lỗi |
| `finally` | Luôn chạy, thường để dọn dẹp |
| `throw` | Ném lỗi ra ngoài |
| `Exception` | Class cha của nhiều loại exception |
| `e.Message` | Nội dung lỗi |
| `e.StackTrace` | Dấu vết đường gọi gây lỗi |
| `FormatException` | Sai định dạng dữ liệu |
| `DivideByZeroException` | Chia cho 0 |
| `IndexOutOfRangeException` | Sai chỉ số mảng |
| `NullReferenceException` | Dùng object đang `null` |
| `ArgumentNullException` | Tham số không được phép null |
| `ArgumentOutOfRangeException` | Tham số ngoài phạm vi hợp lệ |

## Mẹo nhớ

```csharp
try      = thử chạy đoạn có thể lỗi
catch    = bắt lỗi
finally  = dọn dẹp
throw    = ném lỗi
```

Ví dụ chuẩn:

```csharp
try
{
    int x = int.Parse("abc");
    Console.WriteLine(x);
}
catch (FormatException e)
{
    Console.WriteLine("Sai định dạng: " + e.Message);
}
catch (Exception e)
{
    Console.WriteLine("Lỗi khác: " + e.Message);
}
finally
{
    Console.WriteLine("Kết thúc xử lý");
}

Console.WriteLine("Chương trình vẫn chạy tiếp");
```
