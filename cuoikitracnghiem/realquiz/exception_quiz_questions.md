# Quiz: Ôn tập xử lý ngoại lệ

Nguồn: `exception.pdf`

---

## Question 1

Tại sao việc tự tạo Custom Exception (Ngoại lệ tùy biến) lại được khuyến khích trong các hệ thống lớn thay vì dùng chung `Exception` của hệ thống?

- Để trình biên dịch tự động sửa lỗi.
- Để mô tả chính xác tên lỗi của nghiệp vụ đó, giúp dễ dàng phân loại và bắt lỗi độc lập.
- Để chương trình chạy nhanh hơn và tiết kiệm RAM.
- Bởi vì hệ thống không cho phép dùng `Exception` mặc định trong khối `catch`.

**Đáp án đúng:** Để mô tả chính xác tên lỗi của nghiệp vụ đó, giúp dễ dàng phân loại và bắt lỗi độc lập.

---

## Question 2

Lỗi biên dịch trong đoạn code sau là do đâu?

```csharp
try
{
    int a = 10 / 0;
}
```

- Thiếu từ khóa `throw` bên trong khối `try`.
- Phép chia cho 0 không được hỗ trợ trong khối `try`.
- Biến `a` chưa được khai báo kiểu dữ liệu.
- Khối `try` không thể đứng một mình, bắt buộc phải đi kèm với ít nhất một khối `catch` hoặc `finally`.

**Đáp án đúng:** Khối `try` không thể đứng một mình, bắt buộc phải đi kèm với ít nhất một khối `catch` hoặc `finally`.

---

## Question 3

Đoạn mã sau sẽ in ra kết quả gì khi chạy?

```csharp
try {
    int result = 10 / 0;
    Console.WriteLine("A");
}
catch (DivideByZeroException) {
    Console.WriteLine("B");
}
finally {
    Console.WriteLine("C");
}
```

- C
- B (xuống dòng) C
- A (xuống dòng) C
- A (xuống dòng) B (xuống dòng) C

**Đáp án đúng:** B (xuống dòng) C

---

## Question 4

Lỗi sai cú pháp trong đoạn mã ném ngoại lệ sau là gì?

```csharp
public void Deposit(decimal amount)
{
    if (amount < 0)
    {
        throw "Số tiền không hợp lệ!";
    }
}
```

- Từ khóa `throw` phải đi kèm với một đối tượng kế thừa từ `Exception` (VD: `throw new Exception(...)`), không thể ném trực tiếp một chuỗi văn bản.
- Từ khóa `throw` phải được đổi thành `return`.
- Lệnh `throw` không thể nằm bên trong lệnh `if`.
- Phương thức `Deposit` phải trả về kiểu `bool`.

**Đáp án đúng:** Từ khóa `throw` phải đi kèm với một đối tượng kế thừa từ `Exception` (VD: `throw new Exception(...)`), không thể ném trực tiếp một chuỗi văn bản.

---

## Question 5

Khi tạo một Ngoại lệ tùy biến (Custom Exception) cho nghiệp vụ ngân hàng (VD: Lỗi thiếu tiền), lớp mới tạo BẮT BUỘC phải kế thừa từ lớp nào?

- Lớp `BankAccount`
- Không cần kế thừa lớp nào cả.
- Lớp `Exception` hoặc một lớp ngoại lệ có sẵn của hệ thống.
- Lớp `CustomError`

**Đáp án đúng:** Lớp `Exception` hoặc một lớp ngoại lệ có sẵn của hệ thống.

---

## Question 6

Sự khác biệt giữa Lỗi biên dịch (Compile-time Error) và Lỗi thực thi (Run-time Error / Exception) là gì?

- Lỗi biên dịch chỉ xảy ra ở lớp cha, lỗi thực thi chỉ xảy ra ở lớp con.
- Cả hai đều làm chương trình văng ra ngoại lệ và có thể bắt bằng `try-catch`.
- Lỗi biên dịch do sai cú pháp và không thể chạy code; Lỗi thực thi xảy ra khi code đúng cú pháp nhưng gặp sự cố bất ngờ lúc đang chạy.
- Lỗi biên dịch xảy ra lúc đang chạy phần mềm; Lỗi thực thi do gõ sai tên biến.

**Đáp án đúng:** Lỗi biên dịch do sai cú pháp và không thể chạy code; Lỗi thực thi xảy ra khi code đúng cú pháp nhưng gặp sự cố bất ngờ lúc đang chạy.

---

## Question 7

Điều gì xảy ra khi một lỗi văng ra từ một hàm KHÔNG có khối `try-catch`, nhưng hàm gọi nó (bên ngoài) LẠI CÓ khối `try-catch`?

- Lỗi sẽ bị bỏ lỡ và chương trình vẫn chạy tiếp.
- Lỗi sẽ được đẩy ngược lên ngăn xếp gọi hàm (Call Stack) và bị bắt gọn bởi khối `try-catch` của hàm bên ngoài.
- Chương trình sẽ sập ngay tại hàm bên trong.
- Trình biên dịch báo lỗi yêu cầu hàm bên trong bắt buộc phải có `try-catch`.

**Đáp án đúng:** Lỗi sẽ được đẩy ngược lên ngăn xếp gọi hàm (Call Stack) và bị bắt gọn bởi khối `try-catch` của hàm bên ngoài.

---

## Question 8

Trong C#, có thể có nhiều khối `catch` đi kèm với một khối `try` duy nhất không?

- Có, nhưng trình biên dịch bắt buộc phải đặt lỗi chung chung (`Exception`) ở khối `catch` đầu tiên.
- Không, mỗi khối `try` chỉ được phép có đúng một khối `catch`.
- Có, nhưng trình biên dịch sẽ thực thi tất cả các khối `catch` cùng lúc.
- Có, và trình biên dịch sẽ kiểm tra các khối `catch` từ trên xuống dưới, ưu tiên bắt lỗi cụ thể trước, lỗi chung chung (`Exception`) sau.

**Đáp án đúng:** Có, và trình biên dịch sẽ kiểm tra các khối `catch` từ trên xuống dưới, ưu tiên bắt lỗi cụ thể trước, lỗi chung chung (`Exception`) sau.

---

## Question 9

Câu hỏi tư duy luồng thực thi: Khi đoạn code sau chạy, dòng chữ "Hoàn tất hàm" có được in ra không?

```csharp
try {
    throw new Exception("Lỗi giả lập!");
}
catch (Exception) {
    return; // Thoát hàm ngay lập tức
}
finally {
    Console.WriteLine("Đã dọn dẹp bộ nhớ.");
}
Console.WriteLine("Hoàn tất hàm.");
```

- Không dòng nào được in ra vì lệnh `return` đã ngắt ngang.
- Chỉ in ra "Hoàn tất hàm.".
- Chỉ in ra "Đã dọn dẹp bộ nhớ.". Dòng "Hoàn tất hàm." không được in vì lệnh `return` đã ngắt luồng đi xuống dưới.
- Cả hai dòng "Đã dọn dẹp bộ nhớ." và "Hoàn tất hàm." đều được in.

**Đáp án đúng:** Chỉ in ra "Đã dọn dẹp bộ nhớ.". Dòng "Hoàn tất hàm." không được in vì lệnh `return` đã ngắt luồng đi xuống dưới.

---

## Question 10

Thuộc tính (Property) nào của đối tượng `Exception` chứa chuỗi văn bản mô tả chi tiết nguyên nhân gây ra lỗi?

- `ex.Message`
- `ex.ErrorText`
- `ex.StackTrace`
- `ex.Description`

**Đáp án đúng:** `ex.Message`

---

## Question 11

Tìm lỗi sai logic trong việc định nghĩa Custom Exception sau:

```csharp
public class InvalidSalaryException : Exception
{
    public InvalidSalaryException(string msg)
    {
    }
}
```

- Lớp ngoại lệ không được đặt ở chế độ `public`.
- Lớp thiếu phương thức `override Message()`.
- Tham số `msg` phải có kiểu dữ liệu là `Exception`.
- Hàm khởi tạo chưa dùng từ khóa `: base(msg)` để chuyển lời nhắn lỗi lên lớp cha `Exception` lưu trữ.

**Đáp án đúng:** Hàm khởi tạo chưa dùng từ khóa `: base(msg)` để chuyển lời nhắn lỗi lên lớp cha `Exception` lưu trữ.

---

## Question 12

Mục đích chính của cơ chế xử lý ngoại lệ (Exception Handling) trong C# là gì?

- Tự động sửa chữa các dữ liệu bị sai do người dùng nhập vào.
- Ngăn chặn trình biên dịch báo lỗi cú pháp.
- Ngăn chặn chương trình bị sập (crash) đột ngột khi có lỗi thực thi (runtime error) xảy ra.
- Tăng tốc độ thực thi của chương trình một cách tự động.

**Đáp án đúng:** Ngăn chặn chương trình bị sập (crash) đột ngột khi có lỗi thực thi (runtime error) xảy ra.

---

## Question 13

Đoạn code sau gặp lỗi biên dịch (Compile-time error) vì lý do gì?

```csharp
try {
    // Logic rút tiền
}
catch (Exception ex) {
    Console.WriteLine("Lỗi chung");
}
catch (ArgumentException ex) {
    Console.WriteLine("Lỗi tham số");
}
```

- Thiếu khối `finally`.
- Khối `catch` chứa lớp cha `Exception` phải được đặt ở vị trí cuối cùng, không được đặt trước lớp con `ArgumentException`.
- Biến `ex` bị khai báo trùng tên 2 lần.
- Không thể có 2 khối `catch` đi kèm 1 khối `try`.

**Đáp án đúng:** Khối `catch` chứa lớp cha `Exception` phải được đặt ở vị trí cuối cùng, không được đặt trước lớp con `ArgumentException`.

---

## Question 14

Đoạn code sau sẽ văng ra loại ngoại lệ hệ thống nào?

```csharp
string customerName = null;
int nameLength = customerName.Length;
```

- `FormatException`
- `IndexOutOfRangeException`
- `ArgumentNullException`
- `NullReferenceException`

**Đáp án đúng:** `NullReferenceException`

---

## Question 15

Lớp (Class) nào là lớp cha cao nhất của mọi ngoại lệ trong ngôn ngữ C#?

- `System.Error`
- `System.SystemException`
- `System.Exception`
- `System.Fault`

**Đáp án đúng:** `System.Exception`

---

## Question 16

Khối lệnh nào sau đây LUÔN LUÔN được thực thi bất kể có ngoại lệ xảy ra hay không?

- Khối `throw`
- Khối `try`
- Khối `finally`
- Khối `catch`

**Đáp án đúng:** Khối `finally`

---

## Question 17

Từ khóa nào được sử dụng để CHỦ ĐỘNG tạo ra (ném ra) một ngoại lệ khi phát hiện dữ liệu vi phạm logic nghiệp vụ?

- `throw`
- `catch`
- `raise`
- `return`

**Đáp án đúng:** `throw`

---

## Question 18

Đoạn mã Xử lý ngoại lệ phân tầng sau in ra kết quả gì?

```csharp
try {
    int.Parse("100abc"); // Gây ra lỗi FormatException
}
catch (NullReferenceException) {
    Console.WriteLine("Lỗi rỗng.");
}
catch (FormatException) {
    Console.WriteLine("Lỗi định dạng.");
}
catch (Exception) {
    Console.WriteLine("Lỗi hệ thống.");
}
```

- Lỗi rỗng.
- Lỗi định dạng.
- Lỗi định dạng. (Xuống dòng) Lỗi hệ thống.
- Lỗi hệ thống.

**Đáp án đúng:** Lỗi định dạng.

---

## Question 19

Trong cấu trúc bẫy lỗi `try-catch-finally`, khối `try` có nhiệm vụ gì?

- Tự động ném ra các lỗi mới.
- Luôn luôn thực thi để dọn dẹp tài nguyên (như ngắt kết nối database).
- Đón bắt và phân loại các lỗi vừa xảy ra.
- Bao bọc đoạn mã chứa logic nghiệp vụ quan trọng có nguy cơ phát sinh lỗi.

**Đáp án đúng:** Bao bọc đoạn mã chứa logic nghiệp vụ quan trọng có nguy cơ phát sinh lỗi.

---

## Question 20

Trong cấu trúc Xử lý ngoại lệ, giả sử bên trong khối `try` có một lệnh `return;` để thoát hàm ngay lập tức. Chuyện gì sẽ xảy ra với khối `finally` ngay sau đó?

- Khối `finally` bị bỏ qua hoàn toàn do hàm đã thoát.
- Trình biên dịch báo lỗi vì không được phép đặt `return` bên trong khối `try`.
- Khối `finally` VẪN ĐƯỢC THỰC THI ngầm trước khi hàm thực sự trả về và thoát ra ngoài.
- Chương trình sẽ bị treo (deadlock).

**Đáp án đúng:** Khối `finally` VẪN ĐƯỢC THỰC THI ngầm trước khi hàm thực sự trả về và thoát ra ngoài.
