# 50 câu trắc nghiệm C# - Delegate

## Mục tiêu

Bộ câu hỏi bao phủ:

- Delegate là gì
- Khai báo delegate
- Delegate phải khớp chữ ký method
- Gán method cho delegate
- Gọi delegate
- Delegate null và `?.Invoke()`
- Delegate làm tham số method
- Callback
- Multicast delegate
- `=`, `+=`, `-=`
- Anonymous method
- Lambda expression
- `Action`, `Func`, `Predicate`
- Delegate và event
- Dự đoán kết quả in ra
- Phát hiện lỗi thường gặp

---

## Câu 1

Delegate trong C# hiểu đơn giản là gì?

A. Một biến có thể giữ tham chiếu tới method  
B. Một class không có constructor  
C. Một kiểu dữ liệu chỉ lưu số nguyên  
D. Một lệnh dùng để bắt exception  

**Đáp án: A**

**Giải thích:** Delegate là kiểu dữ liệu dùng để lưu method có chữ ký phù hợp.

---

## Câu 2

Câu nào mô tả đúng nhất về delegate?

A. Delegate là biến giữ hành động  
B. Delegate là object không thể gọi được  
C. Delegate chỉ dùng cho field  
D. Delegate chỉ dùng cho constructor  

**Đáp án: A**

**Giải thích:** Method là hành động, delegate là biến có thể giữ và gọi hành động đó.

---

## Câu 3

Cú pháp khai báo delegate nào đúng?

A.
```csharp
public delegate int BinaryOp(int x, int y);
```

B.
```csharp
public int delegate BinaryOp(int x, int y);
```

C.
```csharp
delegate public BinaryOp(int x, int y);
```

D.
```csharp
public delegate BinaryOp int(int x, int y);
```

**Đáp án: A**

**Giải thích:** Cú pháp đúng: `[access] delegate [return type] [DelegateName]([parameters]);`.

---

## Câu 4

Cho delegate:

```csharp
public delegate int BinaryOp(int x, int y);
```

Method nào gán được cho delegate này?

A.
```csharp
static int Add(int a, int b) { return a + b; }
```

B.
```csharp
static void Add(int a, int b) { }
```

C.
```csharp
static int Add(int a) { return a; }
```

D.
```csharp
static double Add(int a, int b) { return a + b; }
```

**Đáp án: A**

**Giải thích:** Delegate yêu cầu method nhận 2 `int` và trả về `int`.

---

## Câu 5

Delegate kiểm tra điều gì khi gán method?

A. Tên method phải giống tên delegate  
B. Tên tham số phải giống nhau  
C. Kiểu trả về và danh sách tham số phải phù hợp  
D. Method bắt buộc phải nằm trong cùng class  

**Đáp án: C**

**Giải thích:** Delegate quan tâm chữ ký method: kiểu trả về, số lượng tham số, kiểu tham số.

---

## Câu 6

Cho code:

```csharp
public delegate int BinaryOp(int x, int y);

static int Add(int a, int b)
{
    return a + b;
}

BinaryOp op = Add;
Console.WriteLine(op(2, 3));
```

Kết quả là gì?

A. `2`  
B. `3`  
C. `5`  
D. Lỗi vì delegate không gọi được như method  

**Đáp án: C**

**Giải thích:** `op` đang trỏ tới `Add`, nên `op(2, 3)` tương đương `Add(2, 3)`.

---

## Câu 7

Hai cách gọi delegate nào tương đương nhau?

A. `op(2, 3)` và `op.Invoke(2, 3)`  
B. `op = Invoke(2, 3)` và `op(2, 3)`  
C. `delegate op(2, 3)` và `op.Invoke()`  
D. `op.Call(2, 3)` và `op.Run(2, 3)`  

**Đáp án: A**

**Giải thích:** Có thể gọi delegate trực tiếp hoặc dùng `.Invoke()`.

---

## Câu 8

Cho code:

```csharp
public delegate void MyDelegate(string msg);

static void Print(string s)
{
    Console.WriteLine(s);
}

MyDelegate d = Print;
d("Hello");
```

Kết quả là gì?

A. `s`  
B. `msg`  
C. `Hello`  
D. Lỗi vì tên tham số khác nhau  

**Đáp án: C**

**Giải thích:** Tên tham số không cần giống nhau, chỉ cần kiểu tham số phù hợp.

---

## Câu 9

Cho delegate:

```csharp
public delegate void ShowMessage(string msg);
```

Method nào KHÔNG gán được?

A.
```csharp
static void Print(string s) { }
```

B.
```csharp
static void Log(string message) { }
```

C.
```csharp
static int Print(string s) { return 1; }
```

D.
```csharp
static void Display(string text) { }
```

**Đáp án: C**

**Giải thích:** Delegate yêu cầu kiểu trả về `void`, nhưng method C trả về `int`.

---

## Câu 10

Cho code:

```csharp
public delegate int BinaryOp(int x, int y);

static int Add(int x, int y) => x + y;
static int Sub(int x, int y) => x - y;

BinaryOp op = Add;
Console.WriteLine(op(10, 3));

op = Sub;
Console.WriteLine(op(10, 3));
```

Kết quả là gì?

A.
```text
13
7
```

B.
```text
7
13
```

C.
```text
13
13
```

D. Lỗi vì delegate không đổi method được

**Đáp án: A**

**Giải thích:** Delegate có thể đổi method đang trỏ tới lúc runtime.

---

## Câu 11

Delegate có thể truyền vào method khác để làm gì?

A. Tạo callback / truyền hành vi vào hàm  
B. Ép class thành struct  
C. Thay thế constructor  
D. Bắt buộc method thành static  

**Đáp án: A**

**Giải thích:** Delegate giúp method nhận một hành vi để gọi lại khi cần.

---

## Câu 12

Cho code:

```csharp
public delegate int BinaryOp(int x, int y);

static void PrintResult(int a, int b, BinaryOp op)
{
    Console.WriteLine(op(a, b));
}

static int Add(int x, int y) => x + y;

PrintResult(4, 5, Add);
```

Kết quả là gì?

A. `4`  
B. `5`  
C. `9`  
D. Lỗi vì không truyền được method vào method khác  

**Đáp án: C**

**Giải thích:** `PrintResult` nhận delegate `op`, sau đó gọi `op(4, 5)`.

---

## Câu 13

Callback trong delegate nghĩa là gì?

A. Method được truyền vào và được gọi lại ở nơi khác  
B. Method chỉ chạy trong constructor  
C. Method không có tham số  
D. Method bị xóa khỏi bộ nhớ  

**Đáp án: A**

**Giải thích:** Callback là hành vi được truyền vào để class/method khác gọi khi cần.

---

## Câu 14

Cho code:

```csharp
public delegate void Notify(string msg);

static void A(string msg)
{
    Console.WriteLine("A: " + msg);
}

Notify n = A;
n("Hello");
```

Kết quả là gì?

A. `Hello: A`  
B. `A: Hello`  
C. `msg`  
D. Lỗi vì delegate không nhận string  

**Đáp án: B**

**Giải thích:** Delegate `n` gọi method `A`.

---

## Câu 15

Delegate chưa trỏ tới method nào thì giá trị là gì?

A. `0`  
B. `false`  
C. `null`  
D. Chuỗi rỗng  

**Đáp án: C**

**Giải thích:** Delegate là reference type, có thể `null`.

---

## Câu 16

Cho code:

```csharp
public delegate void Notify(string msg);

Notify n = null;
n("Hello");
```

Kết quả là gì?

A. Không in gì và không lỗi  
B. Lỗi runtime do gọi delegate null  
C. In `Hello`  
D. Lỗi compile vì delegate không được null  

**Đáp án: B**

**Giải thích:** Gọi delegate đang `null` gây `NullReferenceException`.

---

## Câu 17

Cách gọi delegate an toàn khi có thể null là gì?

A.
```csharp
n?.Invoke("Hello");
```

B.
```csharp
n.InvokeNull("Hello");
```

C.
```csharp
null.Invoke(n);
```

D.
```csharp
delegate.InvokeNull(n);
```

**Đáp án: A**

**Giải thích:** `?.Invoke()` chỉ gọi nếu delegate khác `null`.

---

## Câu 18

Cho code:

```csharp
public delegate void Notify(string msg);

Notify n = null;
n?.Invoke("Hello");

Console.WriteLine("Done");
```

Kết quả là gì?

A. `Hello`  
B. `Done`  
C. Lỗi runtime  
D. Không in gì  

**Đáp án: B**

**Giải thích:** `n` null nên không gọi, sau đó vẫn in `Done`.

---

## Câu 19

`+=` với delegate dùng để làm gì?

A. Thêm method vào danh sách gọi của delegate  
B. Xóa toàn bộ delegate  
C. Chuyển delegate thành string  
D. Gọi delegate ngay lập tức  

**Đáp án: A**

**Giải thích:** `+=` dùng để tạo multicast delegate.

---

## Câu 20

`-=` với delegate dùng để làm gì?

A. Thêm method mới  
B. Gỡ method khỏi danh sách gọi  
C. Tạo delegate mới bắt buộc null  
D. Gọi method cuối cùng  

**Đáp án: B**

**Giải thích:** `-=` hủy đăng ký một method khỏi delegate.

---

## Câu 21

Cho code:

```csharp
public delegate void Notify();

static void A() => Console.WriteLine("A");
static void B() => Console.WriteLine("B");

Notify n = A;
n += B;
n();
```

Kết quả là gì?

A.
```text
A
B
```

B.
```text
B
A
```

C. Chỉ in `B`  
D. Lỗi vì delegate chỉ chứa được một method  

**Đáp án: A**

**Giải thích:** Multicast delegate gọi method theo thứ tự đăng ký.

---

## Câu 22

Cho code:

```csharp
public delegate void Notify();

static void A() => Console.WriteLine("A");
static void B() => Console.WriteLine("B");

Notify n = A;
n += B;
n -= A;
n();
```

Kết quả là gì?

A. `A`  
B. `B`  
C.
```text
A
B
```

D. Lỗi vì không được dùng `-=`  

**Đáp án: B**

**Giải thích:** Sau khi gỡ `A`, delegate chỉ còn `B`.

---

## Câu 23

Cho code:

```csharp
public delegate void Notify();

static void A() => Console.WriteLine("A");

Notify n = A;
n += A;
n();
```

Kết quả là gì?

A. In `A` một lần  
B. In `A` hai lần  
C. Không in gì  
D. Lỗi vì không được thêm cùng method hai lần  

**Đáp án: B**

**Giải thích:** Cùng một method có thể được thêm nhiều lần vào invocation list.

---

## Câu 24

Multicast delegate thường nên có kiểu trả về gì?

A. `void`  
B. `int`  
C. `double`  
D. `bool`  

**Đáp án: A**

**Giải thích:** Nếu nhiều method cùng trả kết quả, kết quả cuối cùng dễ gây hiểu nhầm. Vì vậy multicast delegate thường dùng `void`.

---

## Câu 25

Cho code:

```csharp
public delegate int GetNumber();

static int A()
{
    Console.WriteLine("A");
    return 1;
}

static int B()
{
    Console.WriteLine("B");
    return 2;
}

GetNumber g = A;
g += B;

Console.WriteLine(g());
```

Kết quả là gì?

A.
```text
A
B
1
```

B.
```text
A
B
2
```

C.
```text
B
A
2
```

D. Lỗi vì multicast không được trả về `int`

**Đáp án: B**

**Giải thích:** Cả `A` và `B` đều chạy, nhưng giá trị trả về là của method cuối cùng trong danh sách gọi.

---

## Câu 26

`delegate` khác `event` ở điểm nào?

A. Delegate là kiểu dữ liệu, event là cơ chế đóng gói delegate để đăng ký/hủy an toàn hơn  
B. Event không liên quan gì tới delegate  
C. Delegate chỉ dùng trong vòng lặp  
D. Event luôn trả về int  

**Đáp án: A**

**Giải thích:** Event được xây dựng dựa trên delegate.

---

## Câu 27

Vì sao không nên public field delegate để phát thông báo?

A. Bên ngoài có thể gán `null` hoặc gọi delegate bừa bãi  
B. Delegate public luôn lỗi compile  
C. Delegate public không chứa được method  
D. Delegate public chỉ chạy một lần  

**Đáp án: A**

**Giải thích:** Public delegate field dễ phá vỡ đóng gói. Event an toàn hơn cho cơ chế thông báo.

---

## Câu 28

Cách nào tốt hơn khi muốn bên ngoài chỉ được đăng ký/hủy handler?

A.
```csharp
public event Notify OnChanged;
```

B.
```csharp
public Notify OnChanged;
```

C.
```csharp
public int OnChanged;
```

D.
```csharp
public string OnChanged;
```

**Đáp án: A**

**Giải thích:** `event` giới hạn bên ngoài chỉ được `+=` hoặc `-=`.

---

## Câu 29

Anonymous method trong C# là gì?

A. Method không cần đặt tên, gán trực tiếp cho delegate  
B. Method bắt buộc nằm trong interface  
C. Method không có kiểu trả về  
D. Method chỉ dùng cho constructor  

**Đáp án: A**

**Giải thích:** Anonymous method dùng từ khóa `delegate`.

---

## Câu 30

Đoạn nào là anonymous method đúng?

A.
```csharp
BinaryOp op = delegate (int x, int y)
{
    return x + y;
};
```

B.
```csharp
BinaryOp op = anonymous int (x, y) { return x + y; };
```

C.
```csharp
delegate BinaryOp op = int x + y;
```

D.
```csharp
BinaryOp op = new anonymous(x, y);
```

**Đáp án: A**

**Giải thích:** Anonymous method có dạng `delegate(parameters) { body }`.

---

## Câu 31

Cho code:

```csharp
public delegate int BinaryOp(int x, int y);

BinaryOp op = delegate (int x, int y)
{
    return x * y;
};

Console.WriteLine(op(3, 4));
```

Kết quả là gì?

A. `7`  
B. `12`  
C. `34`  
D. Lỗi vì delegate không dùng anonymous method được  

**Đáp án: B**

**Giải thích:** Anonymous method trả về `3 * 4 = 12`.

---

## Câu 32

Lambda expression nào tương đương với method cộng 2 số?

A.
```csharp
BinaryOp op = (x, y) => x + y;
```

B.
```csharp
BinaryOp op = x, y => x + y;
```

C.
```csharp
BinaryOp op => (x, y) = x + y;
```

D.
```csharp
BinaryOp op = lambda x + y;
```

**Đáp án: A**

**Giải thích:** Lambda dạng ngắn: `(tham số) => biểu thức`.

---

## Câu 33

Cho code:

```csharp
public delegate int BinaryOp(int x, int y);

BinaryOp op = (x, y) => x - y;

Console.WriteLine(op(10, 4));
```

Kết quả là gì?

A. `14`  
B. `6`  
C. `40`  
D. Lỗi vì lambda không dùng với delegate  

**Đáp án: B**

**Giải thích:** Lambda trả về `10 - 4 = 6`.

---

## Câu 34

`Action<T>` dùng khi nào?

A. Method không trả về giá trị  
B. Method luôn trả về `int`  
C. Method luôn trả về `bool`  
D. Method bắt buộc có 2 tham số  

**Đáp án: A**

**Giải thích:** `Action` dùng cho delegate trả về `void`.

---

## Câu 35

Đoạn nào dùng `Action<string>` đúng?

A.
```csharp
Action<string> print = msg => Console.WriteLine(msg);
print("Hi");
```

B.
```csharp
Action<string> print = msg => return msg;
```

C.
```csharp
Action<string> print = (int x) => Console.WriteLine(x);
```

D.
```csharp
Action<string> print = Console.ReadLine();
```

**Đáp án: A**

**Giải thích:** `Action<string>` nhận `string` và không trả về giá trị.

---

## Câu 36

`Func<int, int, int>` có ý nghĩa gì?

A. Nhận 2 `int`, trả về `int`  
B. Nhận 3 `int`, không trả về gì  
C. Nhận 1 `int`, trả về 2 `int`  
D. Không nhận tham số, trả về `int`  

**Đáp án: A**

**Giải thích:** Với `Func`, kiểu cuối cùng là kiểu trả về.

---

## Câu 37

Đoạn nào dùng `Func<int, int, int>` đúng?

A.
```csharp
Func<int, int, int> add = (x, y) => x + y;
```

B.
```csharp
Func<int, int, int> add = x => x + 1;
```

C.
```csharp
Func<int, int, int> add = (x, y) => Console.WriteLine(x + y);
```

D.
```csharp
Func<int, int, int> add = () => 1;
```

**Đáp án: A**

**Giải thích:** Delegate này cần 2 tham số `int` và trả về `int`.

---

## Câu 38

Cho code:

```csharp
Func<int, int, int> add = (x, y) => x + y;
Console.WriteLine(add(2, 3));
```

Kết quả là gì?

A. `2`  
B. `3`  
C. `5`  
D. Lỗi vì `Func` không gọi được  

**Đáp án: C**

**Giải thích:** `Func` cũng là delegate có thể gọi như method.

---

## Câu 39

`Predicate<T>` dùng khi nào?

A. Method kiểm tra đúng/sai và trả về `bool`  
B. Method luôn trả về `int`  
C. Method không có tham số  
D. Method dùng để tạo constructor  

**Đáp án: A**

**Giải thích:** `Predicate<T>` nhận một đối tượng kiểu `T` và trả về `bool`.

---

## Câu 40

Cho code:

```csharp
Predicate<int> isEven = x => x % 2 == 0;

Console.WriteLine(isEven(10));
Console.WriteLine(isEven(7));
```

Kết quả là gì?

A.
```text
true
false
```

B.
```text
True
False
```

C.
```text
1
0
```

D. Lỗi vì `Predicate` không dùng với `int`

**Đáp án: B**

**Giải thích:** `Predicate<int>` trả về `bool`, khi in ra là `True` hoặc `False`.

---

## Câu 41

Khi nào nên tự khai báo delegate thay vì dùng `Action`/`Func`?

A. Khi muốn tên delegate mang ý nghĩa nghiệp vụ rõ ràng  
B. Khi method không có tham số  
C. Khi muốn code luôn ngắn nhất  
D. Khi không cần kiểu dữ liệu  

**Đáp án: A**

**Giải thích:** Ví dụ `CarEngineHandler` rõ nghĩa hơn `Action<string>` trong ngữ cảnh xe.

---

## Câu 42

Cho code:

```csharp
public delegate void CarEngineHandler(string message);
```

Delegate này phù hợp với method nào?

A.
```csharp
static void OnEngineEvent(string msg) { }
```

B.
```csharp
static int OnEngineEvent(string msg) { return 1; }
```

C.
```csharp
static void OnEngineEvent(int msg) { }
```

D.
```csharp
static void OnEngineEvent(string a, string b) { }
```

**Đáp án: A**

**Giải thích:** Delegate yêu cầu method nhận một `string` và trả về `void`.

---

## Câu 43

Delegate giúp giảm phụ thuộc giữa các class như thế nào?

A. Class chỉ phát tín hiệu qua delegate, bên ngoài tự quyết định xử lý  
B. Class phải biết chính xác nơi in Console  
C. Class phải phụ thuộc WinForms  
D. Class không được gọi method nữa  

**Đáp án: A**

**Giải thích:** Delegate giúp tách class phát thông báo khỏi class xử lý thông báo.

---

## Câu 44

Trong ví dụ xe, class `Car` gọi:

```csharp
listOfHandlers?.Invoke("Car is dead");
```

Ý nghĩa đúng là gì?

A. Nếu có handler thì gửi thông báo ra ngoài  
B. Luôn tạo object mới  
C. Luôn tắt chương trình  
D. Xóa danh sách handler  

**Đáp án: A**

**Giải thích:** `?.Invoke()` gọi delegate nếu delegate khác null.

---

## Câu 45

Cho code:

```csharp
public delegate void Notify(string msg);

static void A(string msg) => Console.WriteLine("A " + msg);
static void B(string msg) => Console.WriteLine("B " + msg);

Notify n = A;
n += B;
n("Hi");
```

Kết quả là gì?

A.
```text
A Hi
B Hi
```

B.
```text
B Hi
A Hi
```

C. Chỉ `A Hi`  
D. Chỉ `B Hi`  

**Đáp án: A**

**Giải thích:** Delegate gọi theo thứ tự `A`, rồi `B`.

---

## Câu 46

Cho code:

```csharp
public delegate int BinaryOp(int x, int y);

static void Print(int x, int y)
{
    Console.WriteLine(x + y);
}

BinaryOp op = Print;
```

Lỗi là gì?

A. `Print` trả về `void`, không khớp delegate trả về `int`  
B. Method không được static  
C. Delegate không nhận được 2 tham số  
D. Không lỗi  

**Đáp án: A**

**Giải thích:** Kiểu trả về phải phù hợp.

---

## Câu 47

Cho code:

```csharp
public delegate void Notify(string msg);

static void Print()
{
    Console.WriteLine("Hello");
}

Notify n = Print;
```

Lỗi là gì?

A. `Print` không có tham số `string` như delegate yêu cầu  
B. `Print` không được static  
C. Delegate không được gán method  
D. Không lỗi  

**Đáp án: A**

**Giải thích:** Danh sách tham số không khớp.

---

## Câu 48

Cho code:

```csharp
Action<int> show = x => Console.WriteLine(x);
show(5);
```

Kết quả là gì?

A. `x`  
B. `5`  
C. `Action`  
D. Lỗi vì `Action<int>` không dùng lambda  

**Đáp án: B**

**Giải thích:** Lambda nhận `x = 5` và in ra `5`.

---

## Câu 49

Cho code:

```csharp
Func<int, int> square = x => x * x;
Console.WriteLine(square(6));
```

Kết quả là gì?

A. `6`  
B. `12`  
C. `36`  
D. Lỗi vì `Func<int, int>` cần 2 tham số  

**Đáp án: C**

**Giải thích:** `Func<int, int>` nghĩa là nhận một `int`, trả về một `int`.

---

## Câu 50

Chốt đúng nhất về delegate là gì?

A. Delegate là kiểu dữ liệu mô tả chữ ký method, có thể giữ method, gọi method, truyền method và kết hợp nhiều method  
B. Delegate chỉ là vòng lặp đặc biệt  
C. Delegate chỉ dùng để kế thừa class  
D. Delegate thay thế hoàn toàn interface và class  

**Đáp án: A**

**Giải thích:** Delegate là nền tảng cho callback, lambda, event và nhiều API xử lý hành vi trong C#.

---

## Bảng đáp án nhanh

| Câu | Đáp án | Câu | Đáp án | Câu | Đáp án | Câu | Đáp án | Câu | Đáp án |
|---:|:---:|---:|:---:|---:|:---:|---:|:---:|---:|:---:|
| 1 | A | 2 | A | 3 | A | 4 | A | 5 | C |
| 6 | C | 7 | A | 8 | C | 9 | C | 10 | A |
| 11 | A | 12 | C | 13 | A | 14 | B | 15 | C |
| 16 | B | 17 | A | 18 | B | 19 | A | 20 | B |
| 21 | A | 22 | B | 23 | B | 24 | A | 25 | B |
| 26 | A | 27 | A | 28 | A | 29 | A | 30 | A |
| 31 | B | 32 | A | 33 | B | 34 | A | 35 | A |
| 36 | A | 37 | A | 38 | C | 39 | A | 40 | B |
| 41 | A | 42 | A | 43 | A | 44 | A | 45 | A |
| 46 | A | 47 | A | 48 | B | 49 | C | 50 | A |
