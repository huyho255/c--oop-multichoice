# 50 câu trắc nghiệm C# - Chủ đề `Delegate & Event`

## Phạm vi bao phủ

Bộ câu hỏi này bao phủ các ý chính:

- Delegate là gì
- Delegate là kiểu dữ liệu tham chiếu tới method
- Chữ ký method: kiểu trả về + danh sách tham số
- Gán method cho delegate
- Gọi delegate
- Multicast delegate
- `+=`, `-=`
- Delegate trả về `void` và non-void
- Anonymous method, lambda
- `Action`, `Func`, `Predicate`
- Event là gì
- Event dựa trên delegate
- Publisher/subscriber
- `event` giới hạn quyền gọi delegate
- Bên ngoài class chỉ được đăng ký/hủy đăng ký event
- `?.Invoke(...)`
- `EventHandler`, `EventArgs`
- Custom event args
- Bẫy hay gặp khi thi và khi code

---

## Câu hỏi

### Câu 1
Delegate trong C# là gì?

A. Một class dùng để tạo giao diện đồ họa  
B. Một kiểu dữ liệu có thể tham chiếu tới method có chữ ký phù hợp  
C. Một biến chỉ lưu số nguyên  
D. Một constructor đặc biệt  

### Câu 2
Delegate thường được ví như gì?

A. Con trỏ hàm an toàn kiểu dữ liệu  
B. Vòng lặp đặc biệt  
C. File cấu hình  
D. Từ khóa thay thế class  

### Câu 3
Khi khai báo delegate, yếu tố nào phải khớp với method được gán?

A. Tên method bắt buộc phải giống delegate  
B. Kiểu trả về và danh sách tham số  
C. Tên biến local trong method  
D. Tên file `.cs`  

### Câu 4
Khai báo delegate nào đúng?

A.
```csharp
delegate void MyDelegate(string message);
```

B.
```csharp
delegate MyDelegate void(string message);
```

C.
```csharp
void delegate MyDelegate(string message);
```

D.
```csharp
delegate class MyDelegate(string message);
```

### Câu 5
Cho delegate:

```csharp
delegate void Notify(string message);
```

Method nào gán được cho `Notify`?

A.
```csharp
void Show(string text) { }
```

B.
```csharp
int Show(string text) { return 1; }
```

C.
```csharp
void Show(int x) { }
```

D.
```csharp
void Show() { }
```

### Câu 6
Cho code:

```csharp
delegate int Calculate(int a, int b);
```

Method nào phù hợp?

A.
```csharp
int Add(int x, int y) { return x + y; }
```

B.
```csharp
void Add(int x, int y) { }
```

C.
```csharp
int Add(string x, string y) { return 0; }
```

D.
```csharp
double Add(int x, int y) { return x + y; }
```

### Câu 7
Delegate có thể trỏ tới method static không?

A. Có  
B. Không  
C. Chỉ khi delegate là `public`  
D. Chỉ khi method trả về `void`  

### Câu 8
Delegate có thể trỏ tới method instance không?

A. Có  
B. Không  
C. Chỉ khi class là static  
D. Chỉ khi method là constructor  

### Câu 9
Code nào gán method cho delegate đúng?

```csharp
delegate void Notify(string message);

static void Print(string message)
{
    Console.WriteLine(message);
}
```

A.
```csharp
Notify n = Print;
```

B.
```csharp
Notify n = new string(Print);
```

C.
```csharp
Notify n = Notify(Print);
```

D.
```csharp
Notify n = "Print";
```

### Câu 10
Gọi delegate như thế nào?

A.
```csharp
n("Hello");
```

B.
```csharp
n = "Hello";
```

C.
```csharp
delegate n("Hello");
```

D.
```csharp
new n("Hello");
```

### Câu 11
Nếu delegate đang là `null` mà gọi trực tiếp, điều gì xảy ra?

A. Không có gì xảy ra  
B. Có thể gây `NullReferenceException`  
C. Tự tạo method mới  
D. Tự động in ra chuỗi rỗng  

### Câu 12
Cách gọi delegate an toàn hơn khi có thể `null` là gì?

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
n = null("Hello");
```

D.
```csharp
delegate?.n("Hello");
```

### Câu 13
Multicast delegate là gì?

A. Delegate chỉ gọi được một method  
B. Delegate có thể chứa danh sách nhiều method và gọi lần lượt  
C. Delegate chỉ dùng cho constructor  
D. Delegate không thể dùng với `void`  

### Câu 14
Toán tử nào thường dùng để thêm method vào multicast delegate?

A. `+=`  
B. `-=`  
C. `==`  
D. `&&`  

### Câu 15
Toán tử nào thường dùng để gỡ method khỏi delegate/event?

A. `+=`  
B. `-=`  
C. `*=`  
D. `/=`  

### Câu 16
Cho code:

```csharp
Notify n = MethodA;
n += MethodB;
n("Hi");
```

Nếu `Notify` là delegate `void`, điều gì xảy ra?

A. Chỉ `MethodA` chạy  
B. Chỉ `MethodB` chạy  
C. `MethodA` và `MethodB` đều chạy theo thứ tự trong invocation list  
D. Không method nào chạy  

### Câu 17
Với multicast delegate có kiểu trả về không phải `void`, giá trị trả về thường là gì?

A. Tổng tất cả giá trị trả về  
B. Giá trị trả về của method cuối cùng trong invocation list  
C. Giá trị trả về của method đầu tiên luôn luôn  
D. Không biên dịch được trong mọi trường hợp  

### Câu 18
Anonymous method là gì?

A. Method không có tên, có thể gán trực tiếp cho delegate  
B. Method bắt buộc nằm ngoài class  
C. Method chỉ dùng trong interface  
D. Constructor không tham số  

### Câu 19
Cú pháp anonymous method nào đúng?

A.
```csharp
Notify n = delegate(string msg)
{
    Console.WriteLine(msg);
};
```

B.
```csharp
Notify n = anonymous(string msg)
{
};
```

C.
```csharp
Notify n = void(string msg)
{
};
```

D.
```csharp
Notify n = new delegate string msg;
```

### Câu 20
Lambda expression nào đúng với delegate `Notify`?

```csharp
delegate void Notify(string message);
```

A.
```csharp
Notify n = message => Console.WriteLine(message);
```

B.
```csharp
Notify n = => message Console.WriteLine;
```

C.
```csharp
Notify n = string message -> Console.WriteLine(message);
```

D.
```csharp
Notify n = lambda(message);
```

### Câu 21
`Action<string>` tương đương với delegate nào?

A.
```csharp
delegate void D(string x);
```

B.
```csharp
delegate string D();
```

C.
```csharp
delegate int D(string x);
```

D.
```csharp
delegate bool D(int x);
```

### Câu 22
`Func<int, int, int>` nghĩa là gì?

A. Nhận 2 `int`, trả về `int`  
B. Nhận 3 `int`, không trả về gì  
C. Không nhận gì, trả về 3 `int`  
D. Chỉ dùng cho event  

### Câu 23
`Predicate<int>` thường tương đương với gì?

A.
```csharp
delegate bool D(int x);
```

B.
```csharp
delegate void D(int x);
```

C.
```csharp
delegate int D(bool x);
```

D.
```csharp
delegate string D();
```

### Câu 24
Event trong C# thường dùng để làm gì?

A. Thông báo cho đối tượng khác biết rằng một sự kiện/hành động đã xảy ra  
B. Thay thế mọi class  
C. Chỉ dùng để lưu số nguyên  
D. Tạo vòng lặp vô hạn  

### Câu 25
Event thường dựa trên thành phần nào?

A. Delegate  
B. Constructor  
C. Namespace  
D. Comment  

### Câu 26
Trong mô hình event, class phát sinh event thường gọi là gì?

A. Publisher  
B. Subscriber  
C. Compiler  
D. Interface  

### Câu 27
Trong mô hình event, class đăng ký nhận event thường gọi là gì?

A. Publisher  
B. Subscriber  
C. Namespace  
D. Constructor  

### Câu 28
Khai báo event nào đúng?

A.
```csharp
public event Action OnStarted;
```

B.
```csharp
public Action event OnStarted;
```

C.
```csharp
event public OnStarted Action;
```

D.
```csharp
public event OnStarted();
```

### Câu 29
Nếu có event:

```csharp
public event Action OnStarted;
```

Bên ngoài class thường được phép làm gì?

A. Đăng ký hoặc hủy đăng ký bằng `+=` và `-=`  
B. Gọi trực tiếp `OnStarted()`  
C. Gán `OnStarted = null`  
D. Duyệt invocation list tự do  

### Câu 30
Điểm khác quan trọng giữa public delegate field và event là gì?

A. Event giới hạn bên ngoài: chỉ được `+=` và `-=`, không được invoke trực tiếp  
B. Event không dùng delegate  
C. Event chỉ dùng được với `int`  
D. Event bắt buộc là static  

### Câu 31
Ai thường được quyền phát sinh/invoke event?

A. Chính class khai báo event  
B. Bất kỳ class nào bên ngoài  
C. Chỉ namespace  
D. Chỉ compiler  

### Câu 32
Trong class khai báo event, cách phát sinh event an toàn là gì?

A.
```csharp
OnStarted?.Invoke();
```

B.
```csharp
OnStarted = Invoke();
```

C.
```csharp
event OnStarted();
```

D.
```csharp
new OnStarted();
```

### Câu 33
Cho code:

```csharp
class Button
{
    public event Action Clicked;

    public void Click()
    {
        Clicked?.Invoke();
    }
}
```

`Click()` có vai trò gì?

A. Method phát sinh event `Clicked`  
B. Constructor của event  
C. Delegate type  
D. Subscriber  

### Câu 34
Đăng ký event đúng là:

A.
```csharp
button.Clicked += OnButtonClicked;
```

B.
```csharp
button.Clicked = OnButtonClicked;
```

C.
```csharp
button.Clicked();
```

D.
```csharp
new button.Clicked(OnButtonClicked);
```

### Câu 35
Hủy đăng ký event đúng là:

A.
```csharp
button.Clicked -= OnButtonClicked;
```

B.
```csharp
button.Clicked += null;
```

C.
```csharp
delete button.Clicked;
```

D.
```csharp
button.Clicked = null;
```

### Câu 36
Vì sao nên hủy đăng ký event khi không cần nữa trong một số trường hợp?

A. Tránh object còn bị giữ tham chiếu, có thể gây khó dọn bộ nhớ hoặc gọi nhầm handler  
B. Vì event không thể chạy nếu không hủy  
C. Vì event bắt buộc chỉ chạy một lần  
D. Vì delegate không lưu được method  

### Câu 37
Handler của event là gì?

A. Method được đăng ký để chạy khi event xảy ra  
B. Class khai báo event  
C. Tên namespace  
D. Biến local trong `Main`  

### Câu 38
Với event:

```csharp
public event Action<string> MessageSent;
```

Handler phù hợp là:

A.
```csharp
void Handle(string message) { }
```

B.
```csharp
void Handle() { }
```

C.
```csharp
int Handle(string message) { return 1; }
```

D.
```csharp
void Handle(int message) { }
```

### Câu 39
Chuẩn event pattern phổ biến trong .NET dùng delegate nào?

A. `EventHandler` hoặc `EventHandler<TEventArgs>`  
B. `int`  
C. `string`  
D. `Random`  

### Câu 40
Chữ ký của `EventHandler` thường là gì?

A.
```csharp
void Handler(object sender, EventArgs e)
```

B.
```csharp
int Handler()
```

C.
```csharp
string Handler(int x)
```

D.
```csharp
void Handler()
```

### Câu 41
Trong event pattern, `sender` thường là gì?

A. Object phát sinh event  
B. Object nhận event duy nhất  
C. Chuỗi lỗi  
D. Kiểu trả về của handler  

### Câu 42
Trong event pattern, `EventArgs e` thường chứa gì?

A. Dữ liệu bổ sung của event  
B. Tên method  
C. Tên file  
D. Từ khóa `event`  

### Câu 43
Khi event không cần dữ liệu bổ sung, thường dùng gì?

A. `EventArgs.Empty`  
B. `null` bắt buộc trong mọi trường hợp  
C. `new int()`  
D. `throw`  

### Câu 44
Custom `EventArgs` dùng khi nào?

A. Khi event cần truyền thêm dữ liệu riêng  
B. Khi muốn thay event bằng constructor  
C. Khi muốn xóa delegate  
D. Khi event không có subscriber  

### Câu 45
Code nào là custom event args hợp lý?

A.
```csharp
class MessageEventArgs : EventArgs
{
    public string Message { get; }

    public MessageEventArgs(string message)
    {
        Message = message;
    }
}
```

B.
```csharp
class MessageEventArgs : int
{
}
```

C.
```csharp
event class MessageEventArgs
{
}
```

D.
```csharp
delegate MessageEventArgs : EventArgs
{
}
```

### Câu 46
Event dùng `EventHandler<MessageEventArgs>` có handler phù hợp là:

A.
```csharp
void Handle(object sender, MessageEventArgs e) { }
```

B.
```csharp
void Handle(string sender, string e) { }
```

C.
```csharp
int Handle(object sender, MessageEventArgs e) { return 1; }
```

D.
```csharp
void Handle() { }
```

### Câu 47
Nếu event không có subscriber, gọi trực tiếp event mà không kiểm tra null có thể gây gì?

A. `NullReferenceException`  
B. `FormatException`  
C. `DivideByZeroException`  
D. Không bao giờ lỗi  

### Câu 48
Cách tránh lỗi null khi raise event là:

A.
```csharp
SomeEvent?.Invoke(this, EventArgs.Empty);
```

B.
```csharp
SomeEvent.InvokeNull(this);
```

C.
```csharp
SomeEvent = EventArgs.Empty;
```

D.
```csharp
event?.SomeEvent();
```

### Câu 49
Chốt đúng nhất về delegate là gì?

A. Delegate là kiểu tham chiếu tới method có chữ ký phù hợp  
B. Delegate là object không gọi được  
C. Delegate là một loại vòng lặp  
D. Delegate chỉ dùng trong interface  

### Câu 50
Chốt đúng nhất về event là gì?

A. Event là cơ chế dựa trên delegate để publisher thông báo cho subscriber, đồng thời giới hạn bên ngoài không được invoke trực tiếp  
B. Event là field public bình thường không có kiểm soát  
C. Event thay thế constructor  
D. Event chỉ là tên khác của `if`  

---

## Đáp án nhanh

| Câu | Đáp án |
|---:|:---:|
| 1 | B |
| 2 | A |
| 3 | B |
| 4 | A |
| 5 | A |
| 6 | A |
| 7 | A |
| 8 | A |
| 9 | A |
| 10 | A |
| 11 | B |
| 12 | A |
| 13 | B |
| 14 | A |
| 15 | B |
| 16 | C |
| 17 | B |
| 18 | A |
| 19 | A |
| 20 | A |
| 21 | A |
| 22 | A |
| 23 | A |
| 24 | A |
| 25 | A |
| 26 | A |
| 27 | B |
| 28 | A |
| 29 | A |
| 30 | A |
| 31 | A |
| 32 | A |
| 33 | A |
| 34 | A |
| 35 | A |
| 36 | A |
| 37 | A |
| 38 | A |
| 39 | A |
| 40 | A |
| 41 | A |
| 42 | A |
| 43 | A |
| 44 | A |
| 45 | A |
| 46 | A |
| 47 | A |
| 48 | A |
| 49 | A |
| 50 | A |

---

## Giải thích siêu ngắn

| Câu | Ý chính cần nhớ |
|---:|---|
| 1 | Delegate là kiểu tham chiếu tới method. |
| 2 | Delegate giống function pointer nhưng type-safe. |
| 3 | Delegate yêu cầu khớp kiểu trả về và tham số. |
| 4 | Cú pháp delegate: `delegate returnType Name(params);`. |
| 5 | `void Show(string)` khớp `void Notify(string)`. |
| 6 | `int Add(int,int)` khớp `Calculate`. |
| 7 | Delegate trỏ được method static. |
| 8 | Delegate trỏ được method instance. |
| 9 | Gán method group `Print` cho delegate là hợp lệ. |
| 10 | Gọi delegate giống gọi method. |
| 11 | Delegate null gọi trực tiếp dễ lỗi. |
| 12 | `?.Invoke` kiểm tra null an toàn. |
| 13 | Multicast delegate gọi nhiều method. |
| 14 | `+=` thêm method vào danh sách gọi. |
| 15 | `-=` gỡ method khỏi danh sách gọi. |
| 16 | Multicast `void` gọi lần lượt các method. |
| 17 | Multicast non-void thường lấy kết quả method cuối. |
| 18 | Anonymous method là method không tên gán cho delegate. |
| 19 | `delegate(...) { ... }` là anonymous method. |
| 20 | Lambda gọn hơn anonymous method. |
| 21 | `Action<T>` trả về `void`. |
| 22 | Tham số cuối của `Func` là kiểu trả về. |
| 23 | `Predicate<T>` nhận `T`, trả về `bool`. |
| 24 | Event dùng để thông báo sự kiện xảy ra. |
| 25 | Event xây trên delegate. |
| 26 | Publisher là nơi phát sinh event. |
| 27 | Subscriber là nơi đăng ký nhận event. |
| 28 | Cú pháp event: `public event DelegateType Name;`. |
| 29 | Bên ngoài chỉ được `+=` và `-=` event. |
| 30 | Event bảo vệ delegate khỏi bị invoke/gán bậy từ ngoài. |
| 31 | Class khai báo event thường là nơi invoke event. |
| 32 | `?.Invoke()` là cách raise event an toàn. |
| 33 | `Click()` phát sinh event `Clicked`. |
| 34 | `+=` đăng ký handler. |
| 35 | `-=` hủy đăng ký handler. |
| 36 | Hủy đăng ký giúp tránh giữ tham chiếu không cần thiết. |
| 37 | Handler là method được gọi khi event xảy ra. |
| 38 | Handler phải khớp chữ ký delegate của event. |
| 39 | .NET thường dùng `EventHandler`. |
| 40 | `EventHandler` có dạng `(object sender, EventArgs e)`. |
| 41 | `sender` là object phát event. |
| 42 | `EventArgs` chứa dữ liệu event. |
| 43 | Không có dữ liệu thêm thì dùng `EventArgs.Empty`. |
| 44 | Custom `EventArgs` khi cần gửi dữ liệu riêng. |
| 45 | Custom args kế thừa `EventArgs`. |
| 46 | Handler khớp `EventHandler<TEventArgs>`. |
| 47 | Event không subscriber thì đang là null. |
| 48 | `?.Invoke` tránh lỗi null. |
| 49 | Delegate là kiểu gọi method theo chữ ký. |
| 50 | Event là cơ chế thông báo dựa trên delegate. |

---

## Bảng chốt nhanh

| Cú pháp / ý tưởng | Ý nghĩa |
|---|---|
| `delegate void Notify(string msg);` | Khai báo delegate |
| `Notify n = Print;` | Gán method cho delegate |
| `n("Hello");` | Gọi delegate |
| `n?.Invoke("Hello");` | Gọi an toàn nếu delegate có thể null |
| `n += MethodA;` | Thêm method vào multicast delegate |
| `n -= MethodA;` | Gỡ method khỏi multicast delegate |
| `Action<T>` | Delegate có tham số, không trả về |
| `Func<T, TResult>` | Delegate có trả về |
| `Predicate<T>` | Nhận `T`, trả về `bool` |
| `event Action Started;` | Khai báo event dựa trên delegate |
| `Started += Handler;` | Đăng ký event |
| `Started -= Handler;` | Hủy đăng ký event |
| `Started?.Invoke();` | Raise event an toàn trong class khai báo |
| `EventHandler` | Delegate chuẩn `.NET` cho event |
| `EventArgs` | Dữ liệu đi kèm event |

## Mẹo nhớ

```csharp
delegate = giữ địa chỉ method
event    = delegate có khóa bảo vệ để thông báo sự kiện

publisher  = nơi phát event
subscriber = nơi nghe event
```

Ví dụ delegate:

```csharp
delegate int Calculate(int a, int b);

class Program
{
    static int Add(int a, int b)
    {
        return a + b;
    }

    static void Main()
    {
        Calculate c = Add;
        Console.WriteLine(c(3, 4));
    }
}
```

Ví dụ event:

```csharp
using System;

class Button
{
    public event EventHandler Clicked;

    public void Click()
    {
        Clicked?.Invoke(this, EventArgs.Empty);
    }
}

class Program
{
    static void Main()
    {
        Button btn = new Button();

        btn.Clicked += OnButtonClicked;

        btn.Click();
    }

    static void OnButtonClicked(object sender, EventArgs e)
    {
        Console.WriteLine("Button clicked");
    }
}
```
