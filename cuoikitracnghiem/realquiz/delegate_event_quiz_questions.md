# Ôn tập Delegate và Event

## Câu 1
Toán tử nào trong C# được sử dụng để một dịch vụ bên ngoài "đăng ký lắng nghe" (Subscribe) vào một Sự kiện (Event)?

- Toán tử `->`
- Toán tử `=`
- Toán tử `==`
- Toán tử `+=`

**Đáp án đúng:** Toán tử `+=`

---

## Câu 2
Lỗi kiến trúc bảo mật trong đoạn mã sau là gì?

```csharp
public delegate void BalanceChanged(decimal newBal);
public class Account
{
    public event BalanceChanged OnChanged;
}

class Program
{
    static void Main()
    {
        Account acc = new Account();
        acc.OnChanged?.Invoke(500000m);
    }
}
```

- Lớp `Program` (bên ngoài) KHÔNG ĐƯỢC PHÉP trực tiếp gọi (Invoke) sự kiện của lớp `Account`. Chỉ có `Account` mới được tự Invoke sự kiện của chính nó.
- Thiếu hàm đăng ký `+=`.
- Sự kiện chưa được gán bằng `new`.
- Sai cú pháp kiểm tra Null `?`.

**Đáp án đúng:** Lớp `Program` (bên ngoài) KHÔNG ĐƯỢC PHÉP trực tiếp gọi (Invoke) sự kiện của lớp `Account`. Chỉ có `Account` mới được tự Invoke sự kiện của chính nó.

---

## Câu 3
Trong lớp chứa từ khóa khai báo `event` (Lớp Publisher), lớp này có đặc quyền gì mà các lớp bên ngoài (Subscribers) KHÔNG CÓ?

- Quyền kích hoạt (`Invoke()`) sự kiện đó.
- Quyền đăng ký (`+=`) vào sự kiện.
- Quyền thay đổi tên của sự kiện.
- Quyền hủy đăng ký (`-=`) khỏi sự kiện.

**Đáp án đúng:** Quyền kích hoạt (`Invoke()`) sự kiện đó.

---

## Câu 4
Đoạn mã hủy đăng ký (Unsubscribe) sau sẽ in ra gì?

```csharp
public delegate void PrintDelegate();
class Program
{
    static void Hello() => Console.WriteLine("Hello");
    static void World() => Console.WriteLine("World");

    static void Main()
    {
        PrintDelegate ptr = Hello;
        ptr += World;
        ptr -= Hello;
        ptr();
    }
}
```

- World
- Hello
- Lỗi do cố xóa hàm đầu tiên.
- Hello (Xuống dòng) World

**Đáp án đúng:** World

---

## Câu 5
Điều kiện BẮT BUỘC để một phương thức (hàm) có thể được lưu trữ vào trong một Delegate là gì?

- Phương thức đó phải có "Chữ ký" (Kiểu trả về và Danh sách tham số) khớp 100% với khuôn mẫu của Delegate.
- Phương thức đó bắt buộc phải là phương thức tĩnh (static).
- Phương thức đó phải được đặt trong cùng một Class với Delegate.
- Phương thức đó không được phép có giá trị trả về (`void`).

**Đáp án đúng:** Phương thức đó phải có "Chữ ký" (Kiểu trả về và Danh sách tham số) khớp 100% với khuôn mẫu của Delegate.

---

## Câu 6
Điều gì xảy ra nếu một đối tượng đăng ký (`+=`) cùng một hàm vào một sự kiện 2 lần?

- Trình biên dịch báo lỗi trùng lặp (Duplicated Exception).
- Hàm đó sẽ được chạy 2 lần liên tiếp mỗi khi sự kiện được kích hoạt (Invoke).
- Sự kiện sẽ bỏ qua lượt đăng ký thứ 2.
- Lượt đăng ký thứ 2 sẽ ghi đè lên lượt thứ nhất.

**Đáp án đúng:** Hàm đó sẽ được chạy 2 lần liên tiếp mỗi khi sự kiện được kích hoạt (Invoke).

---

## Câu 7
Toán tử nào được sử dụng để hủy đăng ký một hàm ra khỏi một Sự kiện (Event) khi đối tượng không còn muốn lắng nghe nữa?

- Toán tử `~`
- Toán tử `!=`
- Toán tử `-=`
- Toán tử `--`

**Đáp án đúng:** Toán tử `-=`

---

## Câu 8
Đoạn mã sau in ra kết quả gì?

```csharp
public delegate void Action();
class Program
{
    static void Task1() => Console.WriteLine("Task 1");
    static void Task2() => Console.WriteLine("Task 2");

    static void Main()
    {
        Action myDelegate = Task1;
        myDelegate += Task2;
        myDelegate();
    }
}
```

- Task 1 (Xuống dòng) Task 2 (Hai hàm chạy tuần tự)
- Lỗi vì Delegate chỉ lưu được 1 hàm.
- Task 1
- Task 2

**Đáp án đúng:** Task 1 (Xuống dòng) Task 2 (Hai hàm chạy tuần tự)

---

## Câu 9
Lỗi biên dịch trong đoạn mã đăng ký sự kiện sau là do đâu?

```csharp
public delegate void AlertHandler(string msg);
public class System
{
    public event AlertHandler OnAlert;
}

class Program
{
    static void ShowAlert(int code) { /* ... */ }

    static void Main()
    {
        System sys = new System();
        sys.OnAlert += ShowAlert;
    }
}
```

- Thiếu dấu ngoặc đơn `()` khi gọi hàm `ShowAlert`.
- Biến `sys` chưa được cấp phát bộ nhớ.
- Chữ ký hàm không khớp: Delegate yêu cầu tham số `string`, nhưng hàm `ShowAlert` lại nhận tham số `int`.
- Hàm `ShowAlert` phải là hàm `public`.

**Đáp án đúng:** Chữ ký hàm không khớp: Delegate yêu cầu tham số `string`, nhưng hàm `ShowAlert` lại nhận tham số `int`.

---

## Câu 10
Một Delegate có thể có kiểu trả về khác `void` không (Ví dụ: `public delegate int MathOp(int a, int b);`)?

- Không, Delegate bắt buộc phải luôn trả về `void`.
- Có, và nó sẽ trả về một mảng chứa kết quả của tất cả các hàm.
- Có. Nhưng nếu Delegate này chứa nhiều hàm (Multicast Delegate), kết quả trả về cuối cùng khi gọi Delegate sẽ chỉ là kết quả của hàm cuối cùng được thêm vào danh sách.
- Có, nhưng chỉ được phép chứa duy nhất 1 hàm bên trong.

**Đáp án đúng:** Có. Nhưng nếu Delegate này chứa nhiều hàm (Multicast Delegate), kết quả trả về cuối cùng khi gọi Delegate sẽ chỉ là kết quả của hàm cuối cùng được thêm vào danh sách.

---

## Câu 11
Tại sao C# lại thiết kế thêm từ khóa `event` để bọc bên ngoài `delegate` thay vì chỉ dùng một biến `delegate` public?

- Không có khác biệt gì, dùng từ khóa nào cũng được.
- Để bảo vệ Delegate: Ngăn chặn các lớp bên ngoài sử dụng toán tử gán `=` (vô tình xóa mất các hàm đã đăng ký khác) và cấm lớp bên ngoài tự ý Invoke sự kiện.
- Để bắt buộc sự kiện đó phải chạy đa luồng (Multithreading).
- Vì biến `delegate` không thể chứa được nhiều hơn 1 hàm.

**Đáp án đúng:** Để bảo vệ Delegate: Ngăn chặn các lớp bên ngoài sử dụng toán tử gán `=` (vô tình xóa mất các hàm đã đăng ký khác) và cấm lớp bên ngoài tự ý Invoke sự kiện.

---

## Câu 12
Lỗi sai trong đoạn mã khai báo Delegate sau là gì?

```csharp
public void delegate TransactionHandler(decimal amount);
```

- Khai báo Delegate phải nằm bên trong một hàm.
- Tên Delegate không hợp lệ.
- Sai vị trí từ khóa. Cú pháp đúng phải là: `public delegate void TransactionHandler(decimal amount);`
- Thiếu từ khóa `public`.

**Đáp án đúng:** Sai vị trí từ khóa. Cú pháp đúng phải là: `public delegate void TransactionHandler(decimal amount);`

---

## Câu 13
Nếu một Sự kiện (Event) được kích hoạt (Invoke) khi chưa có bất kỳ đối tượng nào đăng ký lắng nghe (Subscriber), và bạn không dùng cú pháp kiểm tra Null, lỗi gì sẽ xảy ra?

- `FormatException`
- `ArgumentException`
- `NullReferenceException`
- Trình biên dịch báo lỗi màu đỏ.

**Đáp án đúng:** `NullReferenceException`

---

## Câu 14
Đứng dưới góc độ kiến trúc phần mềm, lợi ích lớn nhất của việc dùng Event thay vì gọi trực tiếp các dịch vụ (như gọi thẳng hàm SMS, Email từ trong hàm Rút tiền) là gì?

- Tạo ra Khớp nối lỏng (Loose Coupling): Lớp phát tin không cần biết ai đang nghe, dễ dàng thêm/bớt dịch vụ mà không cần sửa code cốt lõi.
- Tiết kiệm bộ nhớ RAM vì không cần khởi tạo đối tượng.
- Giúp mã nguồn chạy nhanh hơn gấp nhiều lần.
- Trình biên dịch sẽ tự động bắt mọi lỗi xảy ra bên trong Event.

**Đáp án đúng:** Tạo ra Khớp nối lỏng (Loose Coupling): Lớp phát tin không cần biết ai đang nghe, dễ dàng thêm/bớt dịch vụ mà không cần sửa code cốt lõi.

---

## Câu 15
Cú pháp hiện đại (từ C# 6.0) để kích hoạt một sự kiện một cách an toàn, tránh lỗi Null là gì?

- `OnEvent.Start();`
- `OnEvent?.Invoke();`
- `OnEvent();`
- `OnEvent = null;`

**Đáp án đúng:** `OnEvent?.Invoke();`

---

## Câu 16
Trong mô hình Hướng sự kiện (Event-Driven), mẫu kiến trúc nào thường được sử dụng cùng với Delegate và Event?

- Factory Pattern
- MVC (Model - View - Controller)
- Singleton Pattern
- Publisher - Subscriber (Phát tin - Nhận tin)

**Đáp án đúng:** Publisher - Subscriber (Phát tin - Nhận tin)

---

## Câu 17
Trong mô hình Publisher - Subscriber, câu lệnh `acc.OnBalanceChanged += SmsService;` mang ý nghĩa gì?

- Hàm `SmsService` đang ra lệnh cho tài khoản `acc` phải đổi số dư.
- Kích hoạt sự kiện ngay lập tức.
- Dịch vụ SMS đang ghi danh (Subscribe) vào sự kiện của tài khoản `acc` để chờ được thông báo.
- Tài khoản `acc` đang xóa dịch vụ SMS khỏi hệ thống.

**Đáp án đúng:** Dịch vụ SMS đang ghi danh (Subscribe) vào sự kiện của tài khoản `acc` để chờ được thông báo.

---

## Câu 18
Lỗi sai trong đoạn mã xử lý Event sau là gì?

```csharp
public delegate void Notify();
public class System
{
    public event Notify OnUpdate;
    public void UpdateData()
    {
        OnUpdate = null;
        OnUpdate?.Invoke();
    }
}
```

- Hàm `UpdateData` thiếu tham số truyền vào.
- `OnUpdate` không thể được gán bằng `null`.
- Trong hàm `UpdateData`, việc gán `OnUpdate = null` sẽ xóa sạch danh sách tất cả các dịch vụ đang đăng ký trước đó, làm mất tác dụng của Event.
- Lệnh Invoke sai cú pháp.

**Đáp án đúng:** Trong hàm `UpdateData`, việc gán `OnUpdate = null` sẽ xóa sạch danh sách tất cả các dịch vụ đang đăng ký trước đó, làm mất tác dụng của Event.

---

## Câu 19
Khái niệm nào sau đây mô tả chính xác nhất bản chất của Delegate (Đại diện) trong C#?

- Là một kiểu dữ liệu đặc biệt dùng để lưu trữ tham chiếu đến một hoặc nhiều phương thức (hàm).
- Là một kiểu dữ liệu dùng để lưu trữ các con số có độ chính xác cao.
- Là một lớp cha mà mọi sự kiện đều phải kế thừa.
- Là một từ khóa dùng để cấp quyền truy cập cơ sở dữ liệu.

**Đáp án đúng:** Là một kiểu dữ liệu đặc biệt dùng để lưu trữ tham chiếu đến một hoặc nhiều phương thức (hàm).

---

## Câu 20
Nếu ta khai báo một sự kiện chỉ bằng Delegate công khai (`public NotifyHandler OnAction;`) mà KHÔNG có từ khóa `event` bọc bên ngoài. Lỗ hổng nguy hiểm nhất về mặt kiến trúc là gì?

- Bất kỳ lớp nào bên ngoài cũng có thể dùng toán tử gán `=` thay vì `+=`, làm ghi đè và vô tình xóa sổ toàn bộ các dịch vụ đang đăng ký theo dõi trước đó.
- Không thể sử dụng toán tử `+=` được nữa.
- Trình biên dịch sẽ lập tức báo lỗi cú pháp.
- Chương trình sẽ chạy rất chậm do thiếu cơ chế tối ưu của event.

**Đáp án đúng:** Bất kỳ lớp nào bên ngoài cũng có thể dùng toán tử gán `=` thay vì `+=`, làm ghi đè và vô tình xóa sổ toàn bộ các dịch vụ đang đăng ký theo dõi trước đó.
