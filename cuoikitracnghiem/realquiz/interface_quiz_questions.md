# Ôn tập Interface - Câu hỏi quiz

Nguồn: `interface.pdf`

## Question 1

**Lỗi sai trong đoạn mã sử dụng Đa hình Interface sau là gì?**

```csharp
public interface ILoggable { }
class Program
{
    static void Main()
    {
        ILoggable logger = new ILoggable();
    }
}
```

**Select one:**

- `ILoggable` phải được đổi thành lớp (Class) mới dùng được `new`.
- Thiếu phương thức trong Interface.
- Không thể sử dụng từ khóa `new` để khởi tạo trực tiếp một thực thể từ Giao diện (Interface).
- Biến `logger` phải đổi thành `var`.

**Correct answer:** Không thể sử dụng từ khóa `new` để khởi tạo trực tiếp một thực thể từ Giao diện (Interface).

---

## Question 2

**Trong Interface truyền thống, nếu bạn ghi từ khóa `public` hoặc `private` trước khai báo phương thức, trình biên dịch sẽ phản ứng thế nào?**

**Select one:**

- Báo lỗi biên dịch vì các thành phần trong Interface mặc định đã là `public` và không được phép ghi rõ từ khóa truy cập.
- Trình biên dịch tự động đổi thành `protected`.
- Hoàn toàn bình thường, đây là cú pháp bắt buộc.
- Chỉ cho phép ghi `public`, báo lỗi nếu ghi `private`.

**Correct answer:** Báo lỗi biên dịch vì các thành phần trong Interface mặc định đã là `public` và không được phép ghi rõ từ khóa truy cập.

---

## Question 3

**Theo chuẩn viết code (Coding Convention) của Microsoft, tên của một Interface BẮT BUỘC phải bắt đầu bằng ký tự nào?**

**Select one:**

- Ký tự T (VD: `ITaxable`)
- Ký tự gạch dưới `_` (VD: `_Printable`)
- Ký tự C (VD: `CLoggable`)
- Ký tự I viết hoa (VD: `ILoggable`)

**Correct answer:** Ký tự I viết hoa (VD: `ILoggable`)

---

## Question 4

**Đoạn mã Đa hình (Polymorphism) sau sẽ gặp lỗi ở dòng nào?**

```csharp
public interface IPrintable { void Print(); }
public class BankAccount : IPrintable
{
    public void Print() { }
    public void Withdraw() { }
}

class Program {
    static void Main() {
        IPrintable doc = new BankAccount();
        doc.Print();      // Dòng 10
        doc.Withdraw();   // Dòng 11
    }
}
```

**Select one:**

- Lỗi ở dòng khởi tạo `new BankAccount()`.
- Lỗi ở dòng 10: Biến kiểu Interface không gọi được hàm.
- Lỗi ở dòng 11: Biến `doc` mang "lớp vỏ" là `IPrintable`, nên nó chỉ nhìn thấy hàm `Print()`, không thể nhìn thấy hàm `Withdraw()` của lớp `BankAccount`.
- Code chạy bình thường không có lỗi.

**Correct answer:** Lỗi ở dòng 11: Biến `doc` mang "lớp vỏ" là `IPrintable`, nên nó chỉ nhìn thấy hàm `Print()`, không thể nhìn thấy hàm `Withdraw()` của lớp `BankAccount`.

---

## Question 5

**Thành phần nào sau đây TUYỆT ĐỐI KHÔNG được phép khai báo bên trong một Interface (xét trong các phiên bản C# truyền thống)?**

**Select one:**

- Phương thức (Methods)
- Thuộc tính (Properties)
- Trường dữ liệu lưu trạng thái (Fields - ví dụ: `private int _count;`)
- Sự kiện (Events)

**Correct answer:** Trường dữ liệu lưu trạng thái (Fields - ví dụ: `private int _count;`)

---

## Question 6

**Đặc điểm cốt lõi của một Giao diện (Interface) trong C# là gì?**

**Select one:**

- Nó là một "Bản hợp đồng" cam kết hành vi, chỉ chứa phần khai báo phương thức chứ không chứa mã lệnh thực thi.
- Nó là một lớp đặc biệt dùng để tạo giao diện người dùng (UI).
- Nó tự động chia sẻ "code chung" cho tất cả các lớp thực thi nó.
- Nó dùng để lưu trữ các biến tĩnh (static) của toàn hệ thống.

**Correct answer:** Nó là một "Bản hợp đồng" cam kết hành vi, chỉ chứa phần khai báo phương thức chứ không chứa mã lệnh thực thi.

---

## Question 7

**Khái niệm "Loose Coupling" (Khớp nối lỏng) đạt được thông qua Interface mang lại lợi ích thực tế gì?**

**Select one:**

- Giúp tự động dọn dẹp biến rác (Garbage Collection).
- Giúp mã nguồn chạy nhanh hơn gấp nhiều lần do giảm bộ nhớ.
- Cho phép bỏ qua hoàn toàn các khối `try-catch`.
- Giúp các Module trong hệ thống giao tiếp với nhau qua "Bản hợp đồng" thay vì dính chặt vào một Class cụ thể, giúp dễ dàng bảo trì và thay thế chức năng mà không làm sập hệ thống.

**Correct answer:** Giúp các Module trong hệ thống giao tiếp với nhau qua "Bản hợp đồng" thay vì dính chặt vào một Class cụ thể, giúp dễ dàng bảo trì và thay thế chức năng mà không làm sập hệ thống.

---

## Question 8

**"Thực thi giao diện tường minh" (Explicit Interface Implementation) được sử dụng trong trường hợp nào?**

**Select one:**

- Khi muốn biến một Interface thành một Abstract Class.
- Khi muốn che giấu toàn bộ code của Lớp con.
- Khi muốn ép buộc Lớp con phải gọi hàm của Lớp cha.
- Khi một Lớp thực thi 2 Interface khác nhau nhưng cả 2 Interface đó vô tình có cùng một tên hàm (Xung đột tên hàm - Name Collision).

**Correct answer:** Khi một Lớp thực thi 2 Interface khác nhau nhưng cả 2 Interface đó vô tình có cùng một tên hàm (Xung đột tên hàm - Name Collision).

---

## Question 9

**Toán tử nào trong C# thường được sử dụng để kiểm tra xem một đối tượng có đang thực thi một Interface cụ thể nào đó hay không?**

**Select one:**

- toán tử `in`
- toán tử `is` (hoặc `as`)
- toán tử `==`
- toán tử `typeof`

**Correct answer:** toán tử `is` (hoặc `as`)

---

## Question 10

**Lỗi sai trong đoạn code định nghĩa Interface sau là gì?**

```csharp
public interface ITaxable
{
    decimal CalculateTax()
    {
        return 0m;
    }
}
```

**Select one:**

- Interface truyền thống không được phép có phần thân hàm `{ ... }`.
- Thiếu chữ `public` trước hàm `CalculateTax`.
- Interface không được dùng để tính toán (không trả về `decimal`).
- Tên Interface không hợp lệ.

**Correct answer:** Interface truyền thống không được phép có phần thân hàm `{ ... }`.

---

## Question 11

**Khi một Lớp (Class) thực thi một Interface, từ khóa phạm vi truy cập nào BẮT BUỘC phải đặt trước các phương thức của Interface đó?**

**Select one:**

- `override`
- `public`
- `private`
- `protected`

**Correct answer:** `public`

---

## Question 12

**Đoạn code sau in ra màn hình kết quả gì?**

```csharp
public interface ITaxable { decimal Tax(); }
public class Employee : ITaxable {
    public decimal Tax() => 100m;
}
public class Freelancer : ITaxable {
    public decimal Tax() => 50m;
}
class Program {
    static void Main() {
        ITaxable[] people = { new Employee(), new Freelancer() };
        decimal sum = 0;
        foreach(var p in people) sum += p.Tax();
        Console.WriteLine(sum);
    }
}
```

**Select one:**

- 150
- Lỗi do mảng không thể chứa Interface.
- 100
- 0

**Correct answer:** 150

---

## Question 13

**Ngôn ngữ C# quy định luật Kế thừa đối với Lớp (Class) và Giao diện (Interface) như thế nào?**

**Select one:**

- Một lớp có thể kế thừa nhiều Lớp cha và thực thi 1 Interface.
- Một lớp chỉ có thể kế thừa 1 Lớp cha (Đơn kế thừa) nhưng có thể thực thi KHÔNG GIỚI HẠN số lượng Interface.
- Một lớp có thể kế thừa nhiều Lớp cha và thực thi nhiều Interface (Đa kế thừa).
- Một lớp chỉ có thể kế thừa 1 Lớp cha và thực thi 1 Interface.

**Correct answer:** Một lớp chỉ có thể kế thừa 1 Lớp cha (Đơn kế thừa) nhưng có thể thực thi KHÔNG GIỚI HẠN số lượng Interface.

---

## Question 14

**Cú pháp nào sau đây là ĐÚNG khi một lớp con `CheckingAccount` vừa kế thừa lớp cha `BankAccount`, vừa thực thi giao diện `ILoggable`?**

**Select one:**

- `class CheckingAccount : BankAccount, ILoggable`
- `class CheckingAccount : ILoggable, BankAccount`
- `class CheckingAccount extends BankAccount implements ILoggable`
- `class CheckingAccount : BankAccount : ILoggable`

**Correct answer:** `class CheckingAccount : BankAccount, ILoggable`

---

## Question 15

**Đặc điểm của phương thức được "Thực thi tường minh" (Explicit Implementation) là gì?**

**Select one:**

- Không được phép có từ khóa `public`, và đối tượng phải được ép kiểu về Interface đó thì mới gọi được phương thức này.
- Nó sẽ trở thành một phương thức `static`.
- Bắt buộc phải có từ khóa `public`.
- Nó có thể được gọi trực tiếp bằng một biến đối tượng thông thường.

**Correct answer:** Không được phép có từ khóa `public`, và đối tượng phải được ép kiểu về Interface đó thì mới gọi được phương thức này.

---

## Question 16

**Sự khác biệt lớn nhất giữa Abstract Class và Interface về mặt chia sẻ mã nguồn là gì?**

**Select one:**

- Interface chia sẻ được nhiều biến dữ liệu hơn Abstract Class.
- Cả hai hoàn toàn giống nhau, không có sự khác biệt.
- Abstract Class không thể có code dùng chung, Interface thì có.
- Abstract Class có thể chứa các biến dữ liệu và hàm đã viết sẵn code dùng chung. Interface (trước C# 8.0) thì không thể chứa dữ liệu hay code dùng chung.

**Correct answer:** Abstract Class có thể chứa các biến dữ liệu và hàm đã viết sẵn code dùng chung. Interface (trước C# 8.0) thì không thể chứa dữ liệu hay code dùng chung.

---

## Question 17

**Tính năng "Default Interface Methods" (Phương thức mặc định trong Interface) xuất hiện từ C# 8.0 cho phép điều gì?**

**Select one:**

- Biến Interface thành Lớp cha duy nhất.
- Cho phép Interface khởi tạo được bằng lệnh `new`.
- Cho phép lập trình viên viết luôn mã lệnh (thân hàm) trực tiếp bên trong Interface để cung cấp hành vi mặc định.
- Cho phép Interface khai báo các biến `private`.

**Correct answer:** Cho phép lập trình viên viết luôn mã lệnh (thân hàm) trực tiếp bên trong Interface để cung cấp hành vi mặc định.

---

## Question 18

**Cho biết nguyên nhân vắng lỗi biên dịch trong đoạn mã sau:**

```csharp
public interface IWorkable { void Work(); }
public abstract class Machine : IWorkable
{
    // Lớp này không viết hàm Work()
}
```

**Select one:**

- Lớp `Machine` không được phép kế thừa Interface.
- Không có lỗi! Vì `Machine` là lớp Trừu tượng (abstract), nó được quyền "khất" việc thực thi Interface và đẩy trách nhiệm đó cho các Lớp con kế thừa nó.
- Lỗi vì thiếu từ khóa `override`.
- Lỗi vì Interface không được dùng với từ khóa `abstract`.

**Correct answer:** Không có lỗi! Vì `Machine` là lớp Trừu tượng (abstract), nó được quyền "khất" việc thực thi Interface và đẩy trách nhiệm đó cho các Lớp con kế thừa nó.

---

## Question 19

**Trong thiết kế phần mềm, Lớp trừu tượng (Abstract Class) thể hiện mối quan hệ "IS-A" (Là một). Vậy Interface thể hiện mối quan hệ gì?**

**Select one:**

- CAN-DO (Có khả năng làm gì / Đóng vai trò gì)
- USES-A (Sử dụng một)
- HAS-A (Có một)
- PART-OF (Là một phần của)

**Correct answer:** CAN-DO (Có khả năng làm gì / Đóng vai trò gì)

---

## Question 20

**Lỗi biên dịch trong đoạn mã sau là do đâu?**

```csharp
public interface IPrintable
{
    void Print();
}

public class Report : IPrintable
{
    void Print()
    {
        Console.WriteLine("Đang in báo cáo...");
    }
}
```

**Select one:**

- Lớp `Report` không được phép in ra màn hình.
- Hàm `Print()` trong lớp `Report` bị thừa phần thân hàm.
- Hàm `Print()` trong lớp `Report` phải có từ khóa `override`.
- Hàm `Print()` trong lớp `Report` thiếu từ khóa `public` để thực thi hợp đồng với Interface.

**Correct answer:** Hàm `Print()` trong lớp `Report` thiếu từ khóa `public` để thực thi hợp đồng với Interface.
