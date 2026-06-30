# 25 câu trắc nghiệm C# - Exception: try-catch-finally

## Ghi chú nhanh

Chủ đề bao phủ:

- `try`
- `catch`
- `finally`
- `throw`
- luồng chạy khi có lỗi
- nhiều khối `catch`
- thứ tự bắt exception
- các exception thường gặp
- bẫy `catch` rỗng
- `throw;` và `throw e;`
- khi nào nên dùng `TryParse()`

---

## Câu hỏi

### Câu 1
Trong C#, `try` dùng để làm gì?

A. Khai báo biến toàn cục  
B. Bọc đoạn code có khả năng phát sinh exception  
C. Tạo object mới  
D. Kết thúc chương trình ngay lập tức  

**Đáp án: B**

**Giải thích:** `try` dùng để đặt đoạn code có thể gây lỗi runtime.

---

### Câu 2
Trong C#, `catch` dùng để làm gì?

A. Bắt và xử lý exception phát sinh trong `try`  
B. Luôn chạy trước `try`  
C. Khai báo class mới  
D. Tự động sửa tất cả lỗi compile  

**Đáp án: A**

**Giải thích:** Khi code trong `try` ném exception phù hợp, chương trình chuyển sang `catch`.

---

### Câu 3
Trong C#, `finally` dùng để làm gì?

A. Bắt lỗi cụ thể  
B. Ném lỗi mới  
C. Chạy đoạn dọn dẹp dù có lỗi hay không  
D. Bỏ qua toàn bộ exception  

**Đáp án: C**

**Giải thích:** `finally` thường dùng để đóng file, đóng kết nối, giải phóng tài nguyên.

---

### Câu 4
Cấu trúc nào đúng?

A.
```csharp
try
{
}
catch (Exception e)
{
}
finally
{
}
```

B.
```csharp
catch
{
}
try
{
}
```

C.
```csharp
finally
{
}
try
{
}
```

D.
```csharp
try
{
}
else
{
}
```

**Đáp án: A**

**Giải thích:** Thứ tự đúng là `try` → `catch` → `finally`.

---

### Câu 5
Khi một lệnh trong `try` phát sinh exception và được `catch` xử lý, chương trình sẽ làm gì sau khi `catch` xong?

A. Quay lại chạy tiếp dòng bị lỗi trong `try`  
B. Chạy tiếp các dòng còn lại trong `try`  
C. Chạy tiếp sau khối `try-catch-finally`  
D. Luôn tắt chương trình  

**Đáp án: C**

**Giải thích:** Sau khi vào `catch`, chương trình không quay lại dòng lỗi trong `try`.

---

### Câu 6
Cho đoạn code:

```csharp
try
{
    Console.WriteLine("A");
    int x = int.Parse("abc");
    Console.WriteLine("B");
}
catch (Exception)
{
    Console.WriteLine("C");
}
Console.WriteLine("D");
```

Kết quả in ra là gì?

A. A B C D  
B. A C D  
C. C D  
D. A B D  

**Đáp án: B**

**Giải thích:** `int.Parse("abc")` gây lỗi, nên `"B"` không chạy. Sau `catch`, chương trình in `"D"`.

---

### Câu 7
`finally` có chạy khi không có exception không?

A. Có  
B. Không  
C. Chỉ chạy nếu có `catch`  
D. Chỉ chạy nếu exception là `Exception`  

**Đáp án: A**

**Giải thích:** `finally` chạy dù có lỗi hay không.

---

### Câu 8
Cho đoạn code:

```csharp
try
{
    Console.WriteLine("A");
}
catch (Exception)
{
    Console.WriteLine("B");
}
finally
{
    Console.WriteLine("C");
}
```

Kết quả in ra là gì?

A. A  
B. A B  
C. A C  
D. B C  

**Đáp án: C**

**Giải thích:** Không có lỗi nên `catch` không chạy, nhưng `finally` vẫn chạy.

---

### Câu 9
Cho đoạn code:

```csharp
try
{
    Console.WriteLine("A");
    throw new Exception();
}
catch
{
    Console.WriteLine("B");
}
finally
{
    Console.WriteLine("C");
}
Console.WriteLine("D");
```

Kết quả in ra là gì?

A. A B C D  
B. A C D  
C. A B D  
D. B C D  

**Đáp án: A**

**Giải thích:** Có lỗi nên vào `catch`, sau đó chạy `finally`, rồi chạy tiếp sau khối xử lý lỗi.

---

### Câu 10
Thứ tự `catch` nào đúng?

A.
```csharp
catch (Exception e) { }
catch (ArgumentOutOfRangeException e) { }
```

B.
```csharp
catch (ArgumentOutOfRangeException e) { }
catch (Exception e) { }
```

C.
```csharp
catch (object e) { }
catch (Exception e) { }
```

D.
```csharp
finally { }
catch (Exception e) { }
```

**Đáp án: B**

**Giải thích:** Exception cụ thể phải đặt trước, exception tổng quát đặt sau.

---

### Câu 11
Vì sao `catch (Exception e)` thường đặt cuối cùng?

A. Vì `Exception` là loại rất cụ thể  
B. Vì `Exception` bắt được hầu hết các exception con  
C. Vì `Exception` chỉ bắt lỗi chia 0  
D. Vì `Exception` không bắt được lỗi nào  

**Đáp án: B**

**Giải thích:** Nhiều loại lỗi như `FormatException`, `NullReferenceException`, `ArgumentException` đều kế thừa từ `Exception`.

---

### Câu 12
Đoạn code nào dễ gây lỗi compile do thứ tự `catch` sai?

A.
```csharp
catch (FormatException e) { }
catch (Exception e) { }
```

B.
```csharp
catch (ArgumentNullException e) { }
catch (ArgumentException e) { }
```

C.
```csharp
catch (Exception e) { }
catch (FormatException e) { }
```

D.
```csharp
catch (DivideByZeroException e) { }
catch (Exception e) { }
```

**Đáp án: C**

**Giải thích:** `Exception` đặt trước sẽ bắt hết, làm `FormatException` phía sau không bao giờ tới được.

---

### Câu 13
`throw` dùng để làm gì?

A. Bắt exception  
B. Ném exception ra ngoài  
C. Đóng file  
D. Ép kiểu dữ liệu  

**Đáp án: B**

**Giải thích:** `throw` tạo hoặc ném lại exception.

---

### Câu 14
Câu nào đúng khi tự kiểm tra tham số `age`?

A.
```csharp
if (age < 0)
{
    throw new ArgumentOutOfRangeException(nameof(age));
}
```

B.
```csharp
if (age < 0)
{
    catch (Exception e) { }
}
```

C.
```csharp
if (age < 0)
{
    finally { }
}
```

D.
```csharp
if (age < 0)
{
    try;
}
```

**Đáp án: A**

**Giải thích:** Tham số ngoài phạm vi hợp lệ nên dùng `ArgumentOutOfRangeException`.

---

### Câu 15
`ArgumentNullException` nên dùng khi nào?

A. Khi chia cho 0  
B. Khi truy cập mảng sai chỉ số  
C. Khi tham số truyền vào không được phép `null` nhưng lại là `null`  
D. Khi sai định dạng số  

**Đáp án: C**

**Giải thích:** `ArgumentNullException` dùng cho tham số bị `null` không hợp lệ.

---

### Câu 16
`FormatException` thường xảy ra trong trường hợp nào?

A. `int.Parse("abc")`  
B. `int x = 10 / 0`  
C. `arr[100]` khi mảng chỉ có 3 phần tử  
D. `User u = null; u.Name`  

**Đáp án: A**

**Giải thích:** `"abc"` không chuyển được sang số nguyên nên gây `FormatException`.

---

### Câu 17
`DivideByZeroException` xảy ra khi nào?

A. Gọi method qua object null  
B. Chia số nguyên cho 0  
C. Truy cập mảng sai chỉ số  
D. Truyền tham số null  

**Đáp án: B**

**Giải thích:** Chia số nguyên cho 0 gây `DivideByZeroException`.

---

### Câu 18
`IndexOutOfRangeException` xảy ra khi nào?

A. Sai định dạng chuỗi  
B. Object đang null  
C. Truy cập mảng vượt chỉ số hợp lệ  
D. Trạng thái object không cho phép hành động  

**Đáp án: C**

**Giải thích:** Ví dụ mảng có 3 phần tử nhưng truy cập `arr[5]`.

---

### Câu 19
`NullReferenceException` xảy ra khi nào?

A. Gọi field/method qua biến object đang là `null`  
B. Chia cho 0  
C. Tham số ngoài phạm vi  
D. File bị đóng đúng cách  

**Đáp án: A**

**Giải thích:** Biến reference chưa trỏ tới object mà vẫn dùng sẽ gây lỗi.

---

### Câu 20
`InvalidOperationException` thường dùng khi nào?

A. Tham số truyền vào sai kiểu  
B. Trạng thái hiện tại của object không cho phép thực hiện hành động  
C. Sai cú pháp C#  
D. Thiếu dấu chấm phẩy  

**Đáp án: B**

**Giải thích:** Ví dụ tài khoản đã đóng mà vẫn gọi `Withdraw()`.

---

### Câu 21
Vì sao không nên viết `catch` rỗng?

```csharp
try
{
    DoSomething();
}
catch
{
}
```

A. Vì lỗi bị nuốt mất, khó debug và chương trình có thể chạy tiếp trong trạng thái sai  
B. Vì `catch` rỗng luôn làm chương trình nhanh hơn  
C. Vì `catch` rỗng bắt buộc phải có `return`  
D. Vì `catch` rỗng chỉ dùng được trong class abstract  

**Đáp án: A**

**Giải thích:** Ít nhất nên log lỗi, thông báo lỗi, sửa trạng thái hoặc ném lại lỗi.

---

### Câu 22
Trong `catch`, cách nào tốt hơn để ném lại exception mà giữ stack trace gốc?

A.
```csharp
throw;
```

B.
```csharp
throw e;
```

C.
```csharp
return e;
```

D.
```csharp
new throw e;
```

**Đáp án: A**

**Giải thích:** `throw;` giữ stack trace gốc tốt hơn `throw e;`.

---

### Câu 23
Khi nhập dữ liệu người dùng có thể sai định dạng, cách nào thường sạch hơn?

A. Luôn dùng `int.Parse()` rồi bắt `catch`  
B. Dùng `int.TryParse()` để kiểm tra trước  
C. Dùng `finally` để đổi chuỗi thành số  
D. Dùng `throw new Exception()` cho mọi input  

**Đáp án: B**

**Giải thích:** Input sai là tình huống đoán trước được, nên `TryParse()` thường hợp lý hơn.

---

### Câu 24
Có thể viết `try-finally` mà không có `catch` không?

A. Có  
B. Không  
C. Chỉ được nếu có `throw`  
D. Chỉ được nếu method là `static`  

**Đáp án: A**

**Giải thích:** C# cho phép `try-finally`. Khi đó exception không bị xử lý, nhưng `finally` vẫn chạy để dọn dẹp.

---

### Câu 25
Tư duy đúng khi thiết kế exception là gì?

A. Hàm nghiệp vụ nên `throw` khi không xử lý được, nơi gọi biết xử lý thì `try-catch`  
B. Mọi lỗi đều phải `catch` rỗng  
C. Luôn dùng `throw new Exception()` cho mọi tình huống  
D. Không bao giờ dùng `finally`  

**Đáp án: A**

**Giải thích:** Code nghiệp vụ ném lỗi; tầng gọi phù hợp như `Main`, UI hoặc API handler sẽ bắt và hiển thị/xử lý.

---

## Bảng đáp án nhanh

| Câu | Đáp án | Câu | Đáp án | Câu | Đáp án | Câu | Đáp án | Câu | Đáp án |
|---:|:---:|---:|:---:|---:|:---:|---:|:---:|---:|:---:|
| 1 | B | 2 | A | 3 | C | 4 | A | 5 | C |
| 6 | B | 7 | A | 8 | C | 9 | A | 10 | B |
| 11 | B | 12 | C | 13 | B | 14 | A | 15 | C |
| 16 | A | 17 | B | 18 | C | 19 | A | 20 | B |
| 21 | A | 22 | A | 23 | B | 24 | A | 25 | A |
