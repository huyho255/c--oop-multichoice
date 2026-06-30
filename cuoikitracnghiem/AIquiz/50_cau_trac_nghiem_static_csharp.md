# 50 câu trắc nghiệm C# - Chủ đề `static`

## Phạm vi bao phủ

Bộ câu hỏi này bao phủ các ý chính:

- `static` field, method, property
- Khác nhau giữa static và non-static
- Cách gọi bằng tên class và bằng object
- `this` trong static
- Static constructor
- Static class
- Static field dùng chung
- Truy cập giữa static và instance member
- `const`, `readonly`, `static readonly`
- Overload, override, inheritance với static
- Bẫy hay gặp khi thi và khi code

---

## Câu hỏi

### Câu 1
Trong C#, `static` nghĩa là gì?

A. Thành phần thuộc về từng object riêng biệt  
B. Thành phần thuộc về class/type, dùng chung cho mọi object  
C. Thành phần chỉ dùng được trong constructor  
D. Thành phần chỉ dùng được trong interface  

### Câu 2
Dòng nào mô tả đúng nhất về non-static field?

A. Chỉ có một bản duy nhất cho cả class  
B. Mỗi object có một bản riêng  
C. Không thể gán giá trị  
D. Chỉ được dùng trong static method  

### Câu 3
Cho code:

```csharp
class Student
{
    public static string SchoolName = "ABC";
}
```

Cách gọi đúng nhất là:

A. `Student.SchoolName`  
B. `new SchoolName()`  
C. `SchoolName.Student`  
D. `this.SchoolName`  

### Câu 4
Cho code:

```csharp
class Student
{
    public string Name;
    public static string SchoolName = "ABC";
}
```

Nếu tạo 3 object `Student`, có bao nhiêu bản `SchoolName`?

A. 0  
B. 1  
C. 3  
D. Tùy constructor  

### Câu 5
Nếu `Name` là field không static, còn `SchoolName` là field static, phát biểu nào đúng?

A. `Name` dùng chung, `SchoolName` riêng từng object  
B. Cả hai đều dùng chung  
C. `Name` riêng từng object, `SchoolName` dùng chung  
D. Cả hai đều không cần tạo object  

### Câu 6
Static method nên được gọi bằng gì?

A. Tên object  
B. Tên class  
C. Từ khóa `this`  
D. Tên namespace bắt buộc  

### Câu 7
Cho code:

```csharp
class MathHelper
{
    public static int Add(int a, int b)
    {
        return a + b;
    }
}
```

Cách gọi đúng là:

A. `MathHelper.Add(3, 4);`  
B. `MathHelper().Add(3, 4);`  
C. `this.Add(3, 4);`  
D. `Add.MathHelper(3, 4);`  

### Câu 8
Trong static method, có dùng trực tiếp `this` được không?

A. Có, vì `this` luôn tồn tại trong class  
B. Không, vì static method không chạy trên object cụ thể  
C. Có, nhưng chỉ trong constructor  
D. Có, nếu field là public  

### Câu 9
Cho code:

```csharp
class Car
{
    public int Speed;

    public static void Print()
    {
        Console.WriteLine(Speed);
    }
}
```

Code trên bị lỗi vì sao?

A. `Speed` phải là string  
B. Static method không truy cập trực tiếp được instance field  
C. `Console.WriteLine()` không dùng được trong class  
D. Class không có constructor  

### Câu 10
Muốn static method truy cập dữ liệu của một object cụ thể, cách đúng là gì?

A. Dùng `this`  
B. Truyền object đó vào static method  
C. Đổi class thành struct  
D. Luôn dùng biến global  

### Câu 11
Code nào đúng?

A.
```csharp
class A
{
    int x;
    static void Test()
    {
        x = 10;
    }
}
```

B.
```csharp
class A
{
    int x;
    static void Test(A obj)
    {
        obj.x = 10;
    }
}
```

C.
```csharp
class A
{
    int x;
    static void Test()
    {
        this.x = 10;
    }
}
```

D.
```csharp
class A
{
    int x;
    static void Test()
    {
        A.x = 10;
    }
}
```

### Câu 12
Non-static method có thể truy cập static field không?

A. Không bao giờ  
B. Có  
C. Chỉ khi static field là private  
D. Chỉ khi class là static class  

### Câu 13
Static method có thể truy cập static field trực tiếp không?

A. Có  
B. Không  
C. Chỉ khi field là const  
D. Chỉ khi có object  

### Câu 14
Cho code:

```csharp
class Counter
{
    public static int Count = 0;

    public Counter()
    {
        Count++;
    }
}
```

Sau đoạn code sau, `Counter.Count` bằng bao nhiêu?

```csharp
Counter a = new Counter();
Counter b = new Counter();
Counter c = new Counter();
```

A. 0  
B. 1  
C. 2  
D. 3  

### Câu 15
Static field thường dùng để làm gì?

A. Lưu trạng thái riêng của từng object  
B. Lưu dữ liệu dùng chung cấp class  
C. Thay thế mọi field thường  
D. Tránh phải viết constructor  

### Câu 16
`static` có đồng nghĩa với “global variable” hoàn toàn không?

A. Có, vì static không thuộc class  
B. Không, static vẫn thuộc về class/type và vẫn chịu access modifier  
C. Có, vì static luôn public  
D. Không, vì static không lưu được dữ liệu  

### Câu 17
Cho code:

```csharp
class Demo
{
    public static int X;

    static Demo()
    {
        X = 10;
    }
}
```

`static Demo()` là gì?

A. Instance constructor  
B. Static constructor  
C. Method bình thường  
D. Destructor  

### Câu 18
Static constructor chạy khi nào?

A. Mỗi lần tạo object  
B. Trước khi class được dùng lần đầu  
C. Sau khi chương trình kết thúc  
D. Mỗi lần gọi bất kỳ method nào, kể cả lần thứ hai  

### Câu 19
Static constructor chạy bao nhiêu lần cho một class?

A. 0 lần  
B. 1 lần  
C. Mỗi object 1 lần  
D. Mỗi method 1 lần  

### Câu 20
Cú pháp static constructor đúng là:

A.
```csharp
public static Demo()
{
}
```

B.
```csharp
static Demo()
{
}
```

C.
```csharp
static void Demo()
{
}
```

D.
```csharp
Demo static()
{
}
```

### Câu 21
Static constructor có được ghi `public` không?

A. Có  
B. Không  
C. Chỉ được ghi `private`  
D. Chỉ được ghi `protected`  

### Câu 22
Static constructor có được nhận tham số không?

A. Có  
B. Không  
C. Chỉ nhận được `int`  
D. Chỉ nhận được `string`  

### Câu 23
Có thể gọi trực tiếp static constructor không?

A. Có, bằng `Demo.static()`  
B. Có, bằng `new Demo.static()`  
C. Không, runtime tự gọi  
D. Có, nếu constructor là public  

### Câu 24
Một class có thể có tối đa bao nhiêu static constructor?

A. 0  
B. 1  
C. Nhiều, nếu overload khác tham số  
D. Nhiều, nếu khác kiểu trả về  

### Câu 25
Bẫy nào hay xảy ra khi gán static field trong constructor thường?

A. Static field có thể bị reset mỗi lần tạo object mới  
B. Static field không bao giờ đổi được  
C. Constructor thường không chạy  
D. Object không được tạo  

### Câu 26
Cho code:

```csharp
class Bank
{
    public static double Rate;

    public Bank()
    {
        Rate = 0.05;
    }
}
```

Vấn đề chính là gì?

A. `Rate` là double nên không static được  
B. Mỗi lần `new Bank()` có thể gán lại `Rate`  
C. Constructor không được dùng static field  
D. Class phải là static class  

### Câu 27
Cách hợp lý hơn để khởi tạo static field phức tạp là:

A. Instance constructor  
B. Static constructor  
C. Destructor  
D. Method không gọi bao giờ  

### Câu 28
Static class có đặc điểm gì?

A. Có thể tạo object bình thường  
B. Chỉ chứa static member  
C. Bắt buộc phải có instance field  
D. Chỉ dùng được với struct  

### Câu 29
Cho code:

```csharp
static class MathTool
{
    public static int Square(int x)
    {
        return x * x;
    }
}
```

Dòng nào đúng?

A. `MathTool t = new MathTool();`  
B. `int a = MathTool.Square(5);`  
C. `int a = t.Square(5);`  
D. `MathTool.Square = 5;`  

### Câu 30
Static class có tạo object bằng `new` được không?

A. Có  
B. Không  
C. Có, nếu constructor public  
D. Có, nếu có field  

### Câu 31
Static class có instance field được không?

A. Có  
B. Không  
C. Chỉ được nếu field private  
D. Chỉ được nếu field là string  

### Câu 32
Static class thường phù hợp cho loại class nào?

A. Class đại diện object có trạng thái riêng  
B. Class tiện ích chứa hàm dùng chung  
C. Class cần kế thừa nhiều tầng  
D. Class bắt buộc có constructor public  

### Câu 33
Ví dụ nào thường là ý tưởng static class hợp lý?

A. `Student` có `Name`, `Age` riêng  
B. `BankAccount` có `Balance` riêng  
C. `MathHelper` chứa hàm `Add`, `Square`  
D. `Car` có `Speed` riêng  

### Câu 34
Static method có override được method instance virtual không?

A. Có  
B. Không  
C. Có, nếu thêm `public`  
D. Có, nếu method trả về `void`  

### Câu 35
Một static method có thể overload được không?

A. Có, nếu khác danh sách tham số  
B. Không bao giờ  
C. Chỉ được overload bằng kiểu trả về  
D. Chỉ được overload trong static class  

### Câu 36
Code nào là overload hợp lệ?

A.
```csharp
static int Add(int a, int b) => a + b;
static double Add(int x, int y) => x + y;
```

B.
```csharp
static int Add(int a, int b) => a + b;
static int Add(int a, int b, int c) => a + b + c;
```

C.
```csharp
static int Add(int a, int b) => a + b;
static int Add(int x, int y) => x + y;
```

D.
```csharp
static int Add(int a, int b) => a + b;
static int Add(int x, int y) => x - y;
```

### Câu 37
Static member có thể là private không?

A. Có  
B. Không  
C. Chỉ public  
D. Chỉ internal  

### Câu 38
Cho code:

```csharp
class A
{
    private static int count;
}
```

Phát biểu nào đúng?

A. Bên ngoài class luôn truy cập được `A.count`  
B. `count` dùng chung nhưng chỉ truy cập trực tiếp trong class `A`  
C. `count` là instance field  
D. `count` không được cấp phát bộ nhớ  

### Câu 39
`const` trong C# có tính chất nào?

A. Giá trị phải biết tại compile-time  
B. Chỉ gán được trong constructor  
C. Luôn thay đổi được khi chạy chương trình  
D. Chỉ dùng cho object  

### Câu 40
`const` có ngầm là static không?

A. Có, const thuộc về type, không thuộc riêng object  
B. Không, const luôn là instance field  
C. Chỉ static khi thêm `static`  
D. Không, const chỉ dùng trong method  

### Câu 41
Vì sao không viết `static const int X = 10;`?

A. Vì `const` đã ngầm mang tính static  
B. Vì `int` không dùng được const  
C. Vì static chỉ dùng cho string  
D. Vì const phải gán trong constructor  

### Câu 42
`readonly` khác `const` ở điểm nào?

A. `readonly` có thể gán trong constructor, `const` phải biết tại compile-time  
B. `readonly` luôn là static  
C. `const` có thể đổi lúc runtime  
D. `readonly` không thể dùng với field  

### Câu 43
`static readonly` thường dùng khi nào?

A. Khi muốn giá trị cấp class, chỉ gán lúc khai báo hoặc trong static constructor  
B. Khi muốn mỗi object có bản riêng và đổi liên tục  
C. Khi muốn biến cục bộ trong method  
D. Khi muốn method trả về void  

### Câu 44
Cho code:

```csharp
class Config
{
    public static readonly string AppName;

    static Config()
    {
        AppName = "Demo";
    }
}
```

Code này:

A. Sai vì readonly không gán được trong static constructor  
B. Đúng  
C. Sai vì static constructor phải public  
D. Sai vì string không readonly được  

### Câu 45
Static property có được không?

A. Có  
B. Không  
C. Chỉ trong struct  
D. Chỉ khi property không có get/set  

### Câu 46
Code nào là static property hợp lệ?

A.
```csharp
public static int Count { get; set; }
```

B.
```csharp
public int static Count { get; set; }
```

C.
```csharp
static public Count int { get; set; }
```

D.
```csharp
public static Count int { get; set; }
```

### Câu 47
Trong static method, muốn gọi instance method thì cần gì?

A. Gọi trực tiếp bằng tên method  
B. Có object cụ thể rồi gọi qua object đó  
C. Dùng `this`  
D. Đổi instance method thành constructor  

### Câu 48
Cho code:

```csharp
class Car
{
    public void Run()
    {
        Console.WriteLine("Run");
    }

    public static void Test()
    {
        Run();
    }
}
```

Code lỗi vì:

A. `Run()` là instance method, static method không gọi trực tiếp được  
B. `Console.WriteLine` sai  
C. `Run()` phải trả về int  
D. Class thiếu static constructor  

### Câu 49
Sửa câu 48 thế nào là đúng?

A.
```csharp
public static void Test()
{
    Car c = new Car();
    c.Run();
}
```

B.
```csharp
public static void Test()
{
    this.Run();
}
```

C.
```csharp
public static void Test()
{
    Car.Run();
}
```

D.
```csharp
public static void Test()
{
    Run.Car();
}
```

### Câu 50
Chốt đúng nhất về `static` là gì?

A. Static là cách làm mọi thứ thành object riêng  
B. Static là thành phần cấp class, dùng chung, không phụ thuộc object cụ thể  
C. Static chỉ dùng để viết constructor  
D. Static làm biến tự động thành private  

---

## Đáp án nhanh

| Câu | Đáp án |
|---:|:---:|
| 1 | B |
| 2 | B |
| 3 | A |
| 4 | B |
| 5 | C |
| 6 | B |
| 7 | A |
| 8 | B |
| 9 | B |
| 10 | B |
| 11 | B |
| 12 | B |
| 13 | A |
| 14 | D |
| 15 | B |
| 16 | B |
| 17 | B |
| 18 | B |
| 19 | B |
| 20 | B |
| 21 | B |
| 22 | B |
| 23 | C |
| 24 | B |
| 25 | A |
| 26 | B |
| 27 | B |
| 28 | B |
| 29 | B |
| 30 | B |
| 31 | B |
| 32 | B |
| 33 | C |
| 34 | B |
| 35 | A |
| 36 | B |
| 37 | A |
| 38 | B |
| 39 | A |
| 40 | A |
| 41 | A |
| 42 | A |
| 43 | A |
| 44 | B |
| 45 | A |
| 46 | A |
| 47 | B |
| 48 | A |
| 49 | A |
| 50 | B |

---

## Giải thích siêu ngắn

| Câu | Ý chính cần nhớ |
|---:|---|
| 1 | `static` thuộc class/type, không thuộc riêng từng object. |
| 2 | Field thường là dữ liệu riêng của từng object. |
| 3 | Static field gọi bằng `ClassName.MemberName`. |
| 4 | Static field chỉ có một bản dùng chung. |
| 5 | Instance field riêng từng object, static field dùng chung. |
| 6 | Static method nên gọi bằng tên class. |
| 7 | `MathHelper.Add()` là cách gọi đúng. |
| 8 | Static method không có object hiện tại nên không có `this`. |
| 9 | Static method không biết `Speed` của object nào. |
| 10 | Muốn xử lý object cụ thể thì truyền object vào. |
| 11 | Static method có thể sửa instance field thông qua object. |
| 12 | Instance method biết `this`, nên vẫn truy cập được static member. |
| 13 | Static method truy cập trực tiếp static field được. |
| 14 | Constructor chạy 3 lần, `Count++` 3 lần. |
| 15 | Static field phù hợp cho dữ liệu dùng chung. |
| 16 | Static vẫn nằm trong class và vẫn chịu `private`, `public`,... |
| 17 | `static Demo()` là static constructor. |
| 18 | Static constructor chạy trước lần đầu class được dùng. |
| 19 | Static constructor chỉ chạy một lần. |
| 20 | Static constructor không có kiểu trả về và không có access modifier. |
| 21 | Không được viết `public static Demo()`. |
| 22 | Static constructor không nhận tham số. |
| 23 | Static constructor do runtime gọi, không gọi trực tiếp. |
| 24 | Một class chỉ có một static constructor. |
| 25 | Gán static trong constructor thường dễ bị reset nhiều lần. |
| 26 | Mỗi lần tạo object mới lại gán `Rate = 0.05`. |
| 27 | Static constructor hợp để khởi tạo static field phức tạp. |
| 28 | Static class chỉ chứa static member. |
| 29 | Static class dùng bằng tên class, không tạo object. |
| 30 | Không thể `new` static class. |
| 31 | Static class không chứa instance field. |
| 32 | Static class hợp cho nhóm hàm tiện ích. |
| 33 | `MathHelper` là class tiện ích điển hình. |
| 34 | Static method không override theo cơ chế virtual/override của instance method. |
| 35 | Static method vẫn overload được nếu khác tham số. |
| 36 | Khác số lượng tham số là overload hợp lệ. |
| 37 | Static member vẫn có thể private. |
| 38 | `private static` dùng chung nhưng chỉ class đó truy cập trực tiếp. |
| 39 | `const` phải biết giá trị ngay lúc biên dịch. |
| 40 | `const` thuộc type, không thuộc object riêng. |
| 41 | Không thêm `static` vào `const` vì dư và sai cú pháp. |
| 42 | `readonly` có thể gán trong constructor; `const` thì không. |
| 43 | `static readonly` là hằng runtime cấp class. |
| 44 | Static readonly field gán được trong static constructor. |
| 45 | Property cũng có thể static. |
| 46 | Cú pháp đúng: `public static int Count { get; set; }`. |
| 47 | Static method cần object cụ thể để gọi instance method. |
| 48 | `Run()` là instance method nên không gọi trần trong static method. |
| 49 | Tạo object rồi gọi `c.Run()` là đúng. |
| 50 | Static là cấp class/type, không phụ thuộc object cụ thể. |

---

## Bảng chốt nhanh

| Dạng | Thuộc về | Cách gọi | Có `this` không? |
|---|---|---|---|
| Instance field/method | Object | `object.Member` | Có |
| Static field/method | Class/type | `ClassName.Member` | Không |
| Static constructor | Class/type | Runtime tự gọi | Không |
| Static class | Class tiện ích | `ClassName.Member` | Không tạo object |

## Mẹo nhớ

```csharp
non-static  -> object level  -> mỗi object một bản
static      -> class level   -> cả class dùng chung một bản
```
