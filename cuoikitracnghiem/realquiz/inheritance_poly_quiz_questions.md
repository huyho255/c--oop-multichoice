# Ôn tập kế thừa và đa hình

## Câu 1
Khi sử dụng Tính đa hình (Polymorphism), điều gì cho phép một danh sách kiểu `BankAccount` có thể chứa cả đối tượng `SavingsAccount` và `CheckingAccount`?

- Vì Lớp cha tự động copy các thuộc tính của Lớp con vào bộ nhớ.
- Trình biên dịch C# tự động ép kiểu mọi lớp về lớp Object.
- Vì Tài khoản tiết kiệm và Tài khoản thanh toán đều "LÀ MỘT" (IS-A) Tài khoản ngân hàng.
- Điều này không thể xảy ra, mảng trong C# chỉ chứa được đúng 1 kiểu dữ liệu cố định.

**Đáp án đúng:** Vì Tài khoản tiết kiệm và Tài khoản thanh toán đều "LÀ MỘT" (IS-A) Tài khoản ngân hàng.

---

## Câu 2
Trong C#, từ khóa (hoặc ký tự) nào được sử dụng để chỉ định một lớp kế thừa từ một lớp khác?

- Từ khóa `extends`
- Từ khóa `inherits`
- Dấu mũi tên (`->`)
- Dấu hai chấm `:`

**Đáp án đúng:** Dấu hai chấm `:`

---

## Câu 3
Lỗi sai trong đoạn code sau là gì?

```csharp
public abstract class Employee
{
    public string Name { get; set; }
    public abstract decimal CalculateIncome()
    {
        return 0;
    }
}
```

- Phương thức `CalculateIncome` phải là `static`.
- Tên biến `Name` không tuân thủ quy tắc `_camelCase`.
- Phương thức trừu tượng (abstract method) không được phép có thân hàm `{ }`.
- Lớp trừu tượng không được phép chứa thuộc tính (Property).

**Đáp án đúng:** Phương thức trừu tượng (abstract method) không được phép có thân hàm `{ }`.

---

## Câu 4
Về mặt kiến trúc thiết kế, nếu lớp cha `Employee` có một phương thức `private void SecretMethod()`, và lớp con `Manager` tự viết một phương thức `public void SecretMethod()`. Trình biên dịch sẽ phản ứng thế nào?

- Bắt buộc Lớp con phải thêm từ khóa `override`.
- Báo lỗi biên dịch vì trùng tên phương thức trong hệ thống phân cấp.
- Biên dịch bình thường và không có xung đột. Lớp con không nhìn thấy hàm `private` của lớp cha nên nó coi đây là một hàm hoàn toàn mới.
- Báo lỗi vì từ khóa `public` của lớp con rộng hơn `private` của lớp cha.

**Đáp án đúng:** Biên dịch bình thường và không có xung đột. Lớp con không nhìn thấy hàm `private` của lớp cha nên nó coi đây là một hàm hoàn toàn mới.

---

## Câu 5
Khi khởi tạo một đối tượng của Lớp con (Ví dụ: `new SavingsAccount()`), cơ chế cấp phát không gian nhớ diễn ra như thế nào?

- Lớp cha sẽ chia sẻ vùng nhớ tĩnh (`static`) cho tất cả các Lớp con.
- Chỉ cấp phát vùng nhớ cho các thuộc tính riêng của lớp `SavingsAccount`.
- Vùng nhớ được cấp phát sẽ chứa gộp cả phần thuộc tính của lớp cha (`BankAccount`) lẫn lớp con.
- Hai vùng nhớ tách biệt hoàn toàn sẽ được tạo ra, một cho Cha và một cho Con.

**Đáp án đúng:** Vùng nhớ được cấp phát sẽ chứa gộp cả phần thuộc tính của lớp cha (`BankAccount`) lẫn lớp con.

---

## Câu 6
Đoạn code Đa hình (Polymorphism) sau sẽ in ra kết quả gì?

```csharp
public abstract class Account
{
    public abstract decimal GetFee();
}

public class Checking : Account
{
    public override decimal GetFee() => 11000m;
}

public class Savings : Account
{
    public override decimal GetFee() => 0m;
}

class Program
{
    static void Main()
    {
        Account[] list = new Account[2];
        list[0] = new Checking();
        list[1] = new Savings();

        decimal total = 0;
        foreach (Account acc in list)
        {
            total += acc.GetFee();
        }
        Console.WriteLine(total);
    }
}
```

- `22000`
- `11000`
- `0`
- Lỗi do mảng không thể chứa 2 kiểu đối tượng khác nhau.

**Đáp án đúng:** `11000`

---

## Câu 7
Tìm lỗi sai trong đoạn code đa hình sau?

```csharp
public abstract class Employee
{
    public abstract void Work();
}

public class Manager : Employee
{
    // Lỗi nằm ở đâu?
    public void Work()
    {
        Console.WriteLine("Quản lý đội ngũ.");
    }
}
```

- Hàm `Work()` trong lớp `Manager` phải trả về chuỗi (`string`) thay vì `void`.
- Không thể kế thừa từ một lớp trừu tượng mà không có trường dữ liệu.
- Lớp `Manager` thiếu từ khóa `override` khi ghi đè phương thức trừu tượng `Work()`.
- Lớp `Manager` không có hàm khởi tạo.

**Đáp án đúng:** Lớp `Manager` thiếu từ khóa `override` khi ghi đè phương thức trừu tượng `Work()`.

---

## Câu 8
Lỗi sai trong đoạn code sau là gì?

```csharp
public class BankAccount
{
    private decimal balance;
}

public class CheckingAccount : BankAccount
{
    public void Withdraw(decimal amount)
    {
        balance -= amount;
    }
}
```

- Lớp `CheckingAccount` không dùng đúng cú pháp kế thừa.
- Lớp con không thể truy cập trực tiếp vào biến `private balance` của lớp cha.
- Biến `balance` chưa được khởi tạo giá trị ban đầu.
- Phương thức `Withdraw` phải trả về giá trị `bool`.

**Đáp án đúng:** Lớp con không thể truy cập trực tiếp vào biến `private balance` của lớp cha.

---

## Câu 9
Điều gì xảy ra khi bạn cố gắng dùng từ khóa `new` để tạo đối tượng từ một Lớp trừu tượng (Abstract Class)?

- Trình biên dịch báo lỗi vì Lớp trừu tượng chỉ làm khuôn mẫu, không thể khởi tạo trực tiếp.
- Đối tượng được tạo bình thường nhưng các phương thức trừu tượng sẽ bị rỗng.
- Trình biên dịch tự động tìm Lớp con gần nhất để khởi tạo thay thế.
- Tạo thành công nếu lớp trừu tượng đó có chứa hàm khởi tạo (Constructor).

**Đáp án đúng:** Trình biên dịch báo lỗi vì Lớp trừu tượng chỉ làm khuôn mẫu, không thể khởi tạo trực tiếp.

---

## Câu 10
Trong hàm khởi tạo (Constructor) của Lớp con, từ khóa `base` được dùng để làm gì?

- Khởi tạo một đối tượng hoàn toàn mới của Lớp cha.
- Xóa dữ liệu cũ của Lớp cha trong bộ nhớ.
- Ghi đè (`override`) phương thức của Lớp cha.
- Chuyển tiếp tham số và gọi Hàm khởi tạo của Lớp cha trước khi chạy code của Lớp con.

**Đáp án đúng:** Chuyển tiếp tham số và gọi Hàm khởi tạo của Lớp cha trước khi chạy code của Lớp con.

---

## Câu 11
Đặc điểm của từ khóa phạm vi truy cập `protected` là gì?

- Hoàn toàn giống `private`, không cho phép bất kỳ lớp nào truy cập.
- Chỉ cho phép truy cập từ các hàm tĩnh (`static`) của lớp đó.
- Hoàn toàn giống `public`, cho phép truy cập từ mọi nơi trong dự án.
- Bảo mật với bên ngoài, nhưng cho phép Lớp con (kế thừa nó) được quyền truy cập trực tiếp.

**Đáp án đúng:** Bảo mật với bên ngoài, nhưng cho phép Lớp con (kế thừa nó) được quyền truy cập trực tiếp.

---

## Câu 12
Lợi ích lớn nhất của việc sử dụng Tính Kế thừa (Inheritance) trong Lập trình hướng đối tượng là gì?

- Cho phép một lớp có thể tạo ra nhiều đối tượng khác nhau.
- Che giấu dữ liệu nội bộ của đối tượng để tăng tính bảo mật.
- Tái sử dụng mã nguồn, tránh trùng lặp code (nguyên lý DRY).
- Tự động dọn dẹp vùng nhớ khi đối tượng không còn sử dụng.

**Đáp án đúng:** Tái sử dụng mã nguồn, tránh trùng lặp code (nguyên lý DRY).

---

## Câu 13
Điều kiện bắt buộc nào sau đây ĐÚNG khi nói về mối quan hệ giữa Lớp trừu tượng (Abstract Class) và Phương thức trừu tượng (Abstract Method)?

- Nếu một lớp chứa ít nhất một phương thức trừu tượng, lớp đó BẮT BUỘC phải được khai báo là lớp trừu tượng (`abstract class`).
- Lớp trừu tượng không được phép chứa các phương thức bình thường (phương thức đã có sẵn code).
- Lớp con khi kế thừa lớp trừu tượng có thể chọn không ghi đè phương thức trừu tượng nếu không muốn sử dụng.
- Một lớp bình thường vẫn có thể chứa phương thức trừu tượng.

**Đáp án đúng:** Nếu một lớp chứa ít nhất một phương thức trừu tượng, lớp đó BẮT BUỘC phải được khai báo là lớp trừu tượng (`abstract class`).

---

## Câu 14
Đoạn code sau sẽ gặp lỗi biên dịch (compile-time error) vì lý do gì?

```csharp
public class BankAccount
{
    public string AccountNumber { get; set; }

    public BankAccount(string accNum)
    {
        AccountNumber = accNum;
    }
}

public class SavingsAccount : BankAccount
{
    public int TermMonths { get; set; }

    public SavingsAccount(string accNum, int term)
    {
        TermMonths = term;
    }
}
```

- Lớp `BankAccount` thiếu phương thức in thông tin.
- Lớp `SavingsAccount` không gọi `base(accNum)` trong khi lớp cha không có constructor mặc định (không tham số).
- Thuộc tính `TermMonths` không được phép khai báo là `public`.
- Hàm khởi tạo của `SavingsAccount` phải có cùng số lượng tham số với `BankAccount`.

**Đáp án đúng:** Lớp `SavingsAccount` không gọi `base(accNum)` trong khi lớp cha không có constructor mặc định (không tham số).

---

## Câu 15
Tìm lỗi sai trong việc khởi tạo đối tượng sau?

```csharp
public abstract class BankAccount
{
    public string AccountNumber { get; set; }
}

public class CheckingAccount : BankAccount { }

class Program
{
    static void Main(string[] args)
    {
        BankAccount acc = new BankAccount();
    }
}
```

- Lớp `BankAccount` thiếu hàm khởi tạo.
- Biến `acc` phải được khai báo bằng từ khóa `var`.
- Không thể sử dụng class trống như `CheckingAccount`.
- Không thể sử dụng từ khóa `new` để tạo trực tiếp một đối tượng từ lớp trừu tượng `BankAccount`.

**Đáp án đúng:** Không thể sử dụng từ khóa `new` để tạo trực tiếp một đối tượng từ lớp trừu tượng `BankAccount`.

---

## Câu 16
Để ghi đè (cung cấp mã lệnh chi tiết) cho một phương thức trừu tượng từ Lớp cha, Lớp con phải sử dụng từ khóa nào?

- `override`
- `new`
- `virtual`
- `abstract`

**Đáp án đúng:** `override`

---

## Câu 17
Tìm lỗi sai về quyền truy cập khi ghi đè phương thức trong đoạn mã sau:

```csharp
public abstract class BankAccount
{
    protected abstract void PrintReceipt();
}

public class SavingsAccount : BankAccount
{
    public override void PrintReceipt()
    {
        Console.WriteLine("In biên lai tiết kiệm.");
    }
}
```

- Lớp cha không thể có phương thức `protected abstract`.
- Hàm `PrintReceipt` của lớp cha thiếu phần thân `{ }`.
- Từ khóa truy cập khi ghi đè phải giống hệt lớp cha (Không thể đổi `protected` thành `public`).
- `SavingsAccount` thiếu hàm khởi tạo gọi `base()`.

**Đáp án đúng:** Từ khóa truy cập khi ghi đè phải giống hệt lớp cha (Không thể đổi `protected` thành `public`).

---

## Câu 18
Đoạn code sau sẽ in ra màn hình kết quả gì?

```csharp
public class Employee
{
    public virtual void PrintInfo()
    {
        Console.WriteLine("Tôi là Nhân viên.");
    }
}

public class Manager : Employee
{
    public override void PrintInfo()
    {
        base.PrintInfo();
        Console.WriteLine("Tôi quản lý 10 người.");
    }
}

class Program
{
    static void Main()
    {
        Manager mgr = new Manager();
        mgr.PrintInfo();
    }
}
```

- Tôi quản lý 10 người.
- Tôi quản lý 10 người. (Xuống dòng) Tôi là Nhân viên.
- Lỗi biên dịch vì hàm `PrintInfo` bị gọi 2 lần.
- Tôi là Nhân viên. (Xuống dòng) Tôi quản lý 10 người.

**Đáp án đúng:** Tôi là Nhân viên. (Xuống dòng) Tôi quản lý 10 người.

---

## Câu 19
Phát biểu nào sau đây là ĐÚNG về Phương thức trừu tượng (Abstract Method)?

- Các Lớp con không bắt buộc phải thực thi (`implement`) phương thức này.
- Có thể được khai báo ở trong cả Lớp bình thường và Lớp trừu tượng.
- Phải có phần thân hàm `{ }` chứa code mặc định.
- Không có thân hàm và bắt buộc các Lớp con kế thừa phải ghi đè (`override`) nó.

**Đáp án đúng:** Không có thân hàm và bắt buộc các Lớp con kế thừa phải ghi đè (`override`) nó.

---

## Câu 20
Mệnh đề logic nào biểu diễn chính xác nhất mối quan hệ Kế thừa giữa Lớp cha và Lớp con?

- `USES-A` (Sử dụng một)
- `HAS-A` (Có một)
- `IS-A` (Là một)
- `PART-OF` (Là một phần của)

**Đáp án đúng:** `IS-A` (Là một)
