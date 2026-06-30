# 25 câu trắc nghiệm C# - Chủ đề `Exception: throw`

## Phạm vi bao phủ

Bộ câu hỏi này bao phủ các ý chính:

- `throw` là gì
- `throw new Exception(...)`
- `throw;` và `throw ex;`
- Ném lại exception trong `catch`
- Luồng chạy khi gặp `throw`
- Exception propagation
- Chọn loại exception phù hợp
- Custom exception
- `throw` trong method, property, constructor
- `throw` và `finally`
- Bẫy hay gặp khi thi và khi code

---

## Câu hỏi

### Câu 1
Trong C#, từ khóa `throw` dùng để làm gì?

A. In lỗi ra màn hình  
B. Ném exception để báo chương trình gặp tình huống lỗi  
C. Kết thúc vòng lặp  
D. Tạo biến mới  

### Câu 2
Cú pháp nào đúng để ném một exception mới?

A.
```csharp
throw new Exception("Lỗi xảy ra");
```

B.
```csharp
throw Exception("Lỗi xảy ra");
```

C.
```csharp
new throw Exception("Lỗi xảy ra");
```

D.
```csharp
Exception throw "Lỗi xảy ra";
```

### Câu 3
Sau khi gặp `throw`, đoạn code phía sau trong cùng luồng xử lý sẽ thế nào?

A. Vẫn chạy bình thường ngay lập tức  
B. Bị bỏ qua, chương trình nhảy ra nơi bắt exception phù hợp  
C. Tự động chạy 2 lần  
D. Chỉ bị bỏ qua nếu exception là `FormatException`  

### Câu 4
Cho code:

```csharp
static void Test()
{
    Console.WriteLine("A");
    throw new Exception("Lỗi");
    Console.WriteLine("B");
}
```

Dòng `"B"` sẽ thế nào?

A. Chạy bình thường  
B. Không chạy  
C. Chạy trước `"A"`  
D. Chỉ chạy nếu có `finally`  

### Câu 5
Nếu một exception được `throw` nhưng không có `catch` nào bắt, điều gì thường xảy ra?

A. Chương trình tiếp tục như không có lỗi  
B. Chương trình bị dừng và báo lỗi unhandled exception  
C. Exception tự biến mất  
D. Exception tự chuyển thành warning  

### Câu 6
`throw new ArgumentNullException(nameof(name));` thường dùng khi nào?

A. Khi tham số `name` không được phép null nhưng lại nhận null  
B. Khi chia cho 0  
C. Khi sai chỉ số mảng  
D. Khi ép kiểu thất bại  

### Câu 7
`throw new ArgumentOutOfRangeException(nameof(age));` thường dùng khi nào?

A. Khi tuổi hoặc giá trị tham số nằm ngoài phạm vi hợp lệ  
B. Khi file không tồn tại  
C. Khi object bị null  
D. Khi chuỗi sai định dạng số  

### Câu 8
Cho code:

```csharp
static void SetAge(int age)
{
    if (age < 0)
    {
        throw new ArgumentOutOfRangeException(nameof(age));
    }
}
```

Nếu gọi `SetAge(-5);`, điều gì xảy ra?

A. Không có gì xảy ra  
B. Method ném `ArgumentOutOfRangeException`  
C. Method trả về `-5`  
D. Method tự đổi age thành 0  

### Câu 9
`throw` có thể dùng bên trong `catch` để làm gì?

A. Ném lại exception cho tầng gọi phía trên xử lý tiếp  
B. Xóa exception khỏi bộ nhớ  
C. Biến exception thành string  
D. Bắt buộc chạy lại try từ đầu  

### Câu 10
Trong `catch`, cú pháp nào ném lại exception hiện tại mà giữ stack trace tốt hơn?

A.
```csharp
throw;
```

B.
```csharp
throw ex;
```

C.
```csharp
return ex;
```

D.
```csharp
new throw;
```

### Câu 11
Bẫy lớn của `throw ex;` là gì?

A. Không ném được exception  
B. Có thể làm mất hoặc reset stack trace gốc, khó debug hơn  
C. Chỉ dùng được với `int`  
D. Chỉ chạy trong constructor  

### Câu 12
Cho code:

```csharp
try
{
    int x = int.Parse("abc");
}
catch (FormatException ex)
{
    throw;
}
```

Ý nghĩa của `throw;` là gì?

A. Ném lại chính exception vừa bắt  
B. Tạo exception mới hoàn toàn không liên quan  
C. Chuyển exception thành `null`  
D. Bỏ qua lỗi và chạy tiếp  

### Câu 13
Có được dùng `throw;` bên ngoài khối `catch` không?

A. Có, luôn được  
B. Không, `throw;` chỉ hợp lệ khi đang ở trong `catch`  
C. Có, nếu method là static  
D. Có, nếu exception là `Exception`  

### Câu 14
Cú pháp nào đúng khi muốn ném exception mới bên ngoài `catch`?

A.
```csharp
throw new InvalidOperationException("Trạng thái không hợp lệ");
```

B.
```csharp
throw;
```

C.
```csharp
catch throw;
```

D.
```csharp
return throw Exception();
```

### Câu 15
Exception propagation nghĩa là gì?

A. Exception được truyền ngược lên các tầng gọi method cho đến khi có `catch` bắt  
B. Exception tự chuyển thành số nguyên  
C. Exception chỉ sống trong một dòng code  
D. Exception không thể đi ra khỏi method  

### Câu 16
Cho code:

```csharp
static void A()
{
    B();
}

static void B()
{
    throw new Exception("Lỗi");
}

static void Main()
{
    try
    {
        A();
    }
    catch (Exception)
    {
        Console.WriteLine("Bắt lỗi");
    }
}
```

Exception được bắt ở đâu?

A. Trong `B()`  
B. Trong `A()`  
C. Trong `catch` của `Main()`  
D. Không bị bắt  

### Câu 17
`finally` có chạy khi trong `try` có `throw` không?

A. Có, nếu chương trình đi qua khối `try-finally`  
B. Không bao giờ  
C. Chỉ chạy nếu không có exception  
D. Chỉ chạy nếu exception là `FormatException`  

### Câu 18
Cho code:

```csharp
try
{
    throw new Exception("Lỗi");
}
finally
{
    Console.WriteLine("Dọn dẹp");
}
```

Khối `finally` có chạy không?

A. Có  
B. Không  
C. Chỉ khi có `catch`  
D. Chỉ khi có `return`  

### Câu 19
Khi nào nên dùng `throw` thay vì chỉ `Console.WriteLine("Lỗi")`?

A. Khi lỗi làm method không thể tiếp tục đúng logic và cần báo cho tầng gọi biết  
B. Khi muốn in ra màn hình đẹp hơn  
C. Khi muốn bỏ qua lỗi hoàn toàn  
D. Khi muốn tạo biến local  

### Câu 20
Trong property setter, có thể dùng `throw` để làm gì?

A. Chặn giá trị không hợp lệ được gán vào property  
B. Tạo class mới  
C. Gọi constructor cha  
D. Tự động override property  

### Câu 21
Code nào hợp lý trong property setter?

A.
```csharp
set
{
    if (value < 0)
        throw new ArgumentOutOfRangeException(nameof(value));

    age = value;
}
```

B.
```csharp
set
{
    throw;
    age = value;
}
```

C.
```csharp
set
{
    return value;
}
```

D.
```csharp
set
{
    catch(value);
}
```

### Câu 22
Custom exception là gì?

A. Exception do người lập trình tự định nghĩa, thường kế thừa từ `Exception`  
B. Một biến kiểu int  
C. Một method static bắt buộc  
D. Một vòng lặp xử lý lỗi  

### Câu 23
Code nào là custom exception hợp lệ?

A.
```csharp
class InvalidAgeException : Exception
{
    public InvalidAgeException(string message) : base(message)
    {
    }
}
```

B.
```csharp
class InvalidAgeException : int
{
}
```

C.
```csharp
exception InvalidAgeException
{
}
```

D.
```csharp
class InvalidAgeException()
{
}
```

### Câu 24
Khi bắt exception rồi ném exception mới có thêm ngữ cảnh, nên làm gì để không mất lỗi gốc?

A. Truyền exception gốc vào inner exception  
B. Xóa exception gốc  
C. Chỉ in ra `"Lỗi"`  
D. Dùng `return null`  

Ví dụ:

```csharp
catch (Exception ex)
{
    throw new Exception("Không thể xử lý dữ liệu", ex);
}
```

### Câu 25
Chốt đúng nhất về `throw` trong C# là gì?

A. `throw` chỉ dùng để in thông báo lỗi  
B. `throw` là cơ chế chủ động ném exception khi chương trình gặp trạng thái không hợp lệ hoặc không thể tiếp tục đúng logic  
C. `throw` chỉ dùng trong vòng lặp  
D. `throw` thay thế hoàn toàn mọi câu `if`  

---

## Đáp án nhanh

| Câu | Đáp án |
|---:|:---:|
| 1 | B |
| 2 | A |
| 3 | B |
| 4 | B |
| 5 | B |
| 6 | A |
| 7 | A |
| 8 | B |
| 9 | A |
| 10 | A |
| 11 | B |
| 12 | A |
| 13 | B |
| 14 | A |
| 15 | A |
| 16 | C |
| 17 | A |
| 18 | A |
| 19 | A |
| 20 | A |
| 21 | A |
| 22 | A |
| 23 | A |
| 24 | A |
| 25 | B |

---

## Giải thích siêu ngắn

| Câu | Ý chính cần nhớ |
|---:|---|
| 1 | `throw` dùng để ném exception. |
| 2 | Ném exception mới dùng `throw new ...`. |
| 3 | Gặp `throw` thì nhảy ra nơi bắt lỗi phù hợp. |
| 4 | Dòng sau `throw` không chạy. |
| 5 | Không có `catch` thì thành unhandled exception. |
| 6 | `ArgumentNullException` dùng cho tham số null không hợp lệ. |
| 7 | `ArgumentOutOfRangeException` dùng cho giá trị ngoài phạm vi. |
| 8 | `age < 0` làm method ném exception. |
| 9 | Có thể ném lại lỗi trong `catch`. |
| 10 | `throw;` giữ stack trace tốt hơn khi rethrow. |
| 11 | `throw ex;` là bẫy vì có thể làm mất dấu vết lỗi gốc. |
| 12 | `throw;` ném lại exception hiện tại. |
| 13 | `throw;` chỉ hợp lệ trong `catch`. |
| 14 | Ngoài `catch`, muốn ném lỗi phải `throw new ...`. |
| 15 | Exception propagation là lỗi truyền ngược lên tầng gọi. |
| 16 | `Main()` bắt được lỗi phát sinh từ `B()` thông qua `A()`. |
| 17 | `finally` vẫn chạy khi có `throw`. |
| 18 | `finally` chạy để dọn dẹp. |
| 19 | Dùng `throw` khi method không thể tiếp tục đúng logic. |
| 20 | Setter có thể ném lỗi để chặn giá trị sai. |
| 21 | Setter kiểm tra `value`, sai thì ném exception. |
| 22 | Custom exception là exception tự định nghĩa. |
| 23 | Custom exception thường kế thừa `Exception`. |
| 24 | Inner exception giúp giữ lỗi gốc khi bọc lỗi mới. |
| 25 | `throw` dùng để chủ động báo lỗi bất thường. |

---

## Bảng chốt nhanh

| Cú pháp | Ý nghĩa |
|---|---|
| `throw new Exception("msg");` | Ném exception mới |
| `throw;` | Ném lại exception hiện tại trong `catch`, giữ stack trace |
| `throw ex;` | Không nên dùng để rethrow vì có thể làm mất stack trace gốc |
| `throw new Exception("msg", ex);` | Bọc lỗi mới nhưng giữ lỗi gốc trong inner exception |
| `ArgumentNullException` | Tham số không được null |
| `ArgumentOutOfRangeException` | Tham số ngoài phạm vi hợp lệ |
| `InvalidOperationException` | Trạng thái hiện tại không cho phép thực hiện hành động |
| `NotImplementedException` | Chức năng chưa được triển khai |
| `NotSupportedException` | Chức năng không được hỗ trợ |

## Mẹo nhớ

```csharp
throw new ...  // tạo lỗi mới
throw;         // ném lại lỗi đang bắt
throw ex;      // tránh dùng khi rethrow
```

Ví dụ chuẩn:

```csharp
static void SetAge(int age)
{
    if (age < 0)
    {
        throw new ArgumentOutOfRangeException(nameof(age), "Tuổi không được âm");
    }

    Console.WriteLine("Tuổi hợp lệ");
}
```

Ví dụ rethrow đúng:

```csharp
try
{
    int x = int.Parse("abc");
}
catch (FormatException)
{
    // Ghi log nếu cần
    throw; // giữ stack trace gốc
}
```

Ví dụ bọc lỗi có inner exception:

```csharp
try
{
    int x = int.Parse("abc");
}
catch (FormatException ex)
{
    throw new Exception("Không thể chuyển chuỗi sang số", ex);
}
```
